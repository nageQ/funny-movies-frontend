import React from "react";

 const ModalOrderItemDefault = (props) => {
  return (
    <div className="order-item">
      <div className="order-item__text">{props.name}</div>
      <div className="order-item__info">{props.value}</div>
    </div>
  );
};
const ModalOrderItemDetail = (props) => {
    return (
      <div className="order-item">
        <div className="order-item__text1">{props.name}</div>
        <div className="order-item__info1">{props.value}</div>
      </div>
    );
  };
 const ModalOrderItemImg = (props) => {
    return (
        <div className="order-item">
        <div className="order-item__text">{props.name}</div>
        <div className="order-item__info">
          <img src={props.img} alt="area"></img>
        </div>
      </div>
    );
    }
const ModalOrderItemInput = (props) => {
    return (
        <div className="order-item">
        <div className="order-item__text">{props.name}</div>
        <div className="order-item__input">
          <input
            type="text"
            placeholder="0.00"
            onChange={(e) => props.setBalenceInput(e.target.value)}
          />
        </div>
      </div>
    );
    }


export {ModalOrderItemDefault, ModalOrderItemImg, ModalOrderItemInput, ModalOrderItemDetail} ;