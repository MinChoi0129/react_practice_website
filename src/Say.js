import { useState } from "react";

const Say = () => {

  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요")
  const onClickLeave = () => setMessage("안녕히가세요");
  
  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <br />
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        RED
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        GREEN
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        BLUE
      </button>
      <h1 style={{ color }}>{message}</h1>
    </>
  );
};

export default Say;
