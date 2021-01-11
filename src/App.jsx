import React, { useState } from "react";
import DrinkCard from "./DrinkCard";
import DrinkInputGroup from "./DrinkInputGroup";
import "./styles.css";
import drinkList from "./drinkList.json";

const App = () => {
  //useState(表示目前drinks的狀態 => 把原本的drinks丟進這邊)
  const [drinks, setDrinks] = useState(drinkList);
  console.log(drinkList);
  //取得資料

  const handleCreate = (order) => {
    const newOrder = {
      name: order.name,
      options: order.options,
      buyer: order.buyer,
      cost: order.cost
    };
    //使用 immutable的方式添加新物件
    setDrinks([...drinks, newOrder]);
  };
  const handleDelete = (drinkIndex) => {
    setDrinks(
      //雖然drink沒有要用到但還是要加上去
      //filter(callfunction(當前處裡的元素資料,索引值,呼叫filter的array))
      drinks.filter((drink, index) => {
        return drinkIndex !== index;
      })
    );
  };
  let totalCost = 0;
  drinks.forEach((e) => {
    return (totalCost += Number(e.cost));
  });

  return (
    <main className="py-5">
      <div className="container">
        <span>合計金額：NT{totalCost}</span>
        <DrinkInputGroup onCreate={handleCreate}></DrinkInputGroup>
        {drinks.map((drink, index) => (
          <DrinkCard
            onDelete={handleDelete}
            //加上index抓取索引值
            orderindex={index}
            key={index}
            buyer={drink.buyer}
            name={drink.name}
            options={drink.options}
            cost={drink.cost}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
