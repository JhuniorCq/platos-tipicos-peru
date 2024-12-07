import miskito from "../../assets/images/miskito.png";
import { IoSend } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { askMiskito } from "../../utils/geminiIA";
import { ThreeDotLoader } from "../../components/ThreeDotLoader/ThreeDotLoader";
import ReactMarkdown from "react-markdown";
import "./ChatMiskito.css";

export const ChatMiskito = () => {
  const [showChat, setShowChat] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [responseMiskito, setResponseMiskito] = useState({
    message: "",
    loading: false,
    error: null,
  });
  const [chatWithMiskito, setChatWithMiskito] = useState([]);
  const chatEndRef = useRef(null);

  const handleInput = ({ target }) => {
    const { value } = target;
    setUserMessage(value);
  };

  const sendMessageMiskito = async (event) => {
    event.preventDefault();

    if (!userMessage) return;

    setShowChat(true);
    setResponseMiskito({ ...responseMiskito, loading: true });

    const response = await getResponseMiskito(userMessage);

    setResponseMiskito({
      message: response,
      loading: false,
      error: null,
    });

    addMessageToChat(userMessage, response);
    setUserMessage("");
  };

  const addMessageToChat = (userMessage, responseMiskito) => {
    const conversation = {
      userMessage,
      responseMiskito,
    };
    setChatWithMiskito([...chatWithMiskito, conversation]);
  };

  const getResponseMiskito = async (message) => {
    const response = await askMiskito(message);
    return response;
  };

  const scrollToLastMessage = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [chatWithMiskito]);

  return (
    <form className="chat-miskito" onSubmit={sendMessageMiskito}>
      <div
        className={`chat-miskito__chat-introduction ${
          showChat ? "chat-miskito__chat-introduction--move" : ""
        }`}
      >
        <div className={`chat-miskito__introduction `}>
          <p className="chat-miskito__paragraph">
            {showChat
              ? "¿Quieres descubrir el país con la gastronomía más variada del mundo? ¡Hazme tu pregunta!"
              : `Si crees que conoces el mejor destino culinario del mundo, déjame
            ponerte a prueba. !Pregunta!`}
          </p>
          <img src={miskito} alt="Miskito" className="chat-miskito__image" />
        </div>
        <div
          className={`chat-miskito__chat ${
            showChat ? "chat-miskito__chat--show" : ""
          }`}
        >
          {chatWithMiskito.map((conversation, index) => (
            <div key={index} className="chat-miskito__conversation">
              <p className="chat-miskito__message chat-miskito__message--user">
                {conversation.userMessage}
              </p>
              <ReactMarkdown className="chat-miskito__message chat-miskito__message--miskito">
                {conversation.responseMiskito}
              </ReactMarkdown>
            </div>
          ))}
          {responseMiskito.loading && (
            <div className="chat-miskito__message chat-miskito__message--miskito">
              <ThreeDotLoader />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
      <div className="chat-miskito__input-box">
        <input
          type="text"
          placeholder="Hazle una pregunta a Miskito"
          className="chat-miskito__input"
          onChange={handleInput}
          value={userMessage}
        />
        <button
          className="chat-miskito__send-button"
          disabled={responseMiskito.loading}
        >
          {responseMiskito.loading ? (
            <ThreeDotLoader />
          ) : (
            <IoSend className="chat-miskito__send-button-icon" />
          )}
        </button>
      </div>
    </form>
  );
};
