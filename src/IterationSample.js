import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, name: "눈사람" },
    { id: 2, name: "얼음" },
    { id: 3, name: "눈" },
    { id: 4, name: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 다음 id
  const words = names.map((item) => <li key={item.id} onDoubleClick={() => onRemove(item.id)}>{item.name}</li>);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = (e) => {
    if (inputText) {
      setNextId(nextId + 1);
      setNames(
        names.concat({
          id: nextId,
          name: inputText,
        })
      );
      setInputText("");
    }
  };

  const onPress = (e) => {
    if (e.key === 'Enter') {
        onClick()
    }
  }

  const onRemove = (id) => {
    setNames(names.filter(name => name.id !== id))
  }

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyDown={onPress} />
      <button onClick={onClick}>추가</button>
      <ul>{words}</ul>
    </>
  );
};

export default IterationSample;
