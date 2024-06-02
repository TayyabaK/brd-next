import React from "react";
import Telegram from "./telegram-blue-1.svg";
import style from "./telegram.module.css";
import Image from "next/image";
const TelegramFloatingBtn = () => {
  return (
    <a
      href="https://t.me/BRDigitech"
      className={style.LinkTelegram}
      target="blank"
    >
      <Image width={100} height={100} src="/telegram.png" alt="Telegram" />
    </a>
  );
};

export default TelegramFloatingBtn;
