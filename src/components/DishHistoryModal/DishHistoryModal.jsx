import ReactMarkdown from "react-markdown";
import "./DishHistoryModal.css";

export const DishHistoryModal = ({
  dishName,
  disImage,
  dishHistory,
  knowHistory,
  hideDishHistoryModal,
}) => {
  return (
    <div
      className={`dish-history-modal ${
        knowHistory && "dish-history-modal--show "
      }`}
      onClick={hideDishHistoryModal}
    >
      {/* Con el "e.stopPropagation()" se evita que los clicks en el <div> "dish-history-modal__box" disparen el evento "onClick" de su contenedor: <div> "dish-history-modal" */}
      <div
        className="dish-history-modal__box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="dish-history-modal__title">"{dishName}""</h2>
        <div className="dish-history-modal__dish-data">
          <img
            src={disImage}
            alt={dishName}
            className="dish-history-modal__image"
          />
          <ReactMarkdown className="dish-history-modal__history">
            {dishHistory}
          </ReactMarkdown>
        </div>
        <button
          className="dish-history-modal__back-button"
          onClick={hideDishHistoryModal}
        >
          VOLVER
        </button>
      </div>
    </div>
  );
};
