import { useLayoutEffect, useEffect, useRef } from "react";

export default function UseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} value={"Petrus"} />
    </div>
  );
}
