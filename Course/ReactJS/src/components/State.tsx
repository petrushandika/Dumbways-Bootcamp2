import UseState from "../hooks/UseState";
import UseReducer from "../hooks/UseReducer";
import UseEffect from "../hooks/UseEffect"
import UseRef from "../hooks/UseRef"

export default function Counter() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect/>
      <UseRef/>
    </div>
  );
}
