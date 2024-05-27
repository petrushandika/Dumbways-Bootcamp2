import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const onClickRef = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Petrus</h1>
      <input type="text" placeholder="Ex.." ref={inputRef} />
      <button onClick={onClickRef}>change Name</button>
    </div>
  );
}
