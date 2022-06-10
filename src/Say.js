import { useState } from "react";

const Say = () => {
const abc = [
    {id: 1, value: false},
    {id: 2, value: true},
    {id: 3, value: false},
    {id: 4, value: true}
]
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
      setMessage("안녕하세요");
      console.log(abc)
    let array = abc.concat({id: 5})
    console.log(array)
    array.filter(item => item.id !== 2)
    console.log(array)
      
  }
  const onClickLeave = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");

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
