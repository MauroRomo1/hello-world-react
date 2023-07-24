import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [msj, setMsj] = useState("");
  return (
    <>
      <Message title="My friend" msj={msj} />
      <button onClick={() => setMsj("(from changed state)")}>Click me</button>
    </>
  );
}

export default App;
