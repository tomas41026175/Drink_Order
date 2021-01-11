import React from "react";
//加上orderindex導出key,onDelete
const DrinkCard = ({ onDelete, buyer, name, options, orderindex, cost }) => {
  const onClickDelete = () => {
    onDelete && onDelete(orderindex);
  };

  return (
    <div className="card mb-1">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <button
            className="btn btn-outline-danger mr-3"
            //加上監聽器onClick
            onClick={onClickDelete}
          >
            X
          </button>
          <h5 className="card-title m-0 mr-1">{name}</h5>
          <div className="card-text m-0">{options}</div>
          <div className="card-text m-3">NT:{cost}</div>
        </div>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            <cite>{buyer}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default DrinkCard;
