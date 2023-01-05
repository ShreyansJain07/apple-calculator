import { useState } from "react";
import { Screen } from "./Screen";
import { Button } from "./Buttons";
export const Calculator = () => {
  const [ans, setAns] = useState(0);
  const [init, setInit] = useState("");

  return (
    <>
      <div className="calculator">
        <Screen ans={ans} init={init} />
        <Button setAns={setAns} init={init} setInit={setInit} />
      </div>
    </>
  );
};
