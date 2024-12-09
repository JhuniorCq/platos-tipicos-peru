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
    >
      <div className="dish-history-modal__box">
        <h2 className="dish-history-modal__title">
          HISTORIA DEL PLATO "{dishName}""
        </h2>
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
