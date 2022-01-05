import React from "react";
import Cart from "../Carts";
import style from "./main.module.css";

const Main = () => {
  return (
    <>
      <div className={style.main__serch__form}>
        <h1 className={style.main__serch__form__title}>Поиск автосервиса</h1>
        <input className={style.main__serch__form__input} type="text" placeholder="введите текс" />
      </div>

      <Cart />
    </>
  );
};

export default Main;