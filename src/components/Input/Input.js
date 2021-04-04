import "./Input.module.css";
function Input(Props) {
  return <input id={Props.id} value={Props.value} onChange={Props.func} />;
}

export default Input;
