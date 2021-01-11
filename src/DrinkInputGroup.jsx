import React, { useState } from "react";

const DrinkInputGroup = (props) => {
  const { onCreate } = props;
  //設定useState抓取當前的狀態
  // const [buyerName, setBuyerName] = useState("");
  // const [drinkName, setDrinkName] = useState("");
  // const [options, setOptions] = useState("");
  const [create, setCreate] = useState({
    buyer: "",
    name: "",
    options: "",
    cost: ""
  });
  const handleBuyerChange = (e) => {
    //將BuyerName狀態變更為當前的value
    setCreate &&
      setCreate({
        ...create,
        buyer: e.target.value
      });
  };
  const handleDrinkChange = (e) => {
    setCreate &&
      setCreate({
        ...create,
        name: e.target.value
      });
  };
  const handleOptionsChange = (e) => {
    setCreate &&
      setCreate({
        ...create,
        options: e.target.value
      });
  };
  const handleCostChange = (e) => {
    setCreate &&
      setCreate({
        ...create,
        cost: e.target.value
      });
  };
  const hanleClick = () => {
    //直接創建一個物件儲存三個輸入欄位的資料
    // setCreate({
    //   buyer: buyerName,
    //   name: drinkName,
    //   options: options
    // });
    onCreate(create);
    console.log(typeof create);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        //加上onChange監聽器
        onChange={handleBuyerChange}
        placeholder="訂購人"
      />
      <input
        type="text"
        className="form-control"
        onChange={handleDrinkChange}
        placeholder="飲品名稱"
      />
      <input
        type="text"
        className="form-control mr-1"
        onChange={handleOptionsChange}
        placeholder="糖度冰塊"
      />
      <input
        type="text"
        className="form-control"
        onChange={handleCostChange}
        placeholder="價格"
      />
      <button className="btn btn-primary" onClick={hanleClick}>
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;
