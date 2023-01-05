import { useState } from "react";
export const Button = ({ init, setInit, ans, setAns }) => {
  const [isOp, setIsOp] = useState(false);
  const [isDot, setIsDot] = useState(true);

  function calc(data) {
    return new Function(` return ${data}`)();
  }

  return (
    <div>
      <div className="buttons">
        <button
          onClick={() => {
            setAns(0);
            setInit("");
            setIsOp(false);
            setIsDot(true);
          }}
          className="ac"
        >
          AC
        </button>
        <button
          onClick={() => {
            setInit("-" + init);
          }}
          className="plus-minus"
        >
          +/-
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setInit(init + "/100");
            // setIsOp(!isOp);
            setIsDot(!isDot);
          }}
          className="percent"
        >
          %
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setInit(init + "/");
            setIsOp(!isOp);
            setIsDot(true);
          }}
          style={{ fontSize: "30px" }}
          className="div"
        >
          /
        </button>
      </div>
      <div className="buttons1">
        <button
          onClick={() => {
            setInit(init + "7");
            setIsOp(true);
          }}
          className="seven"
        >
          7
        </button>
        <button
          onClick={() => {
            setInit(init + "8");
            setIsOp(true);
          }}
          className="eight"
        >
          8
        </button>
        <button
          onClick={() => {
            setInit(init + "9");
            setIsOp(true);
          }}
          className="nine"
        >
          9
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setInit(init + "*");
            setIsOp(!isOp);
            setIsDot(true);
          }}
          style={{ fontSize: "20px" }}
          className="mul"
        >
          X
        </button>
      </div>
      <div className="buttons1">
        <button
          onClick={() => {
            setInit(init + "4");
            setIsOp(true);
          }}
          className="four"
        >
          4
        </button>
        <button
          onClick={() => {
            setInit(init + "5");
            setIsOp(true);
          }}
          className="five"
        >
          5
        </button>
        <button
          onClick={() => {
            setInit(init + "6");
            setIsOp(true);
          }}
          className="six"
        >
          6
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setInit(init + "-");
            setIsOp(!isOp);
            setIsDot(true);
          }}
          style={{ fontSize: "20px" }}
          className="sub"
        >
          —
        </button>
      </div>
      <div className="buttons1">
        <button
          onClick={() => {
            setInit(init + "3");
            setIsOp(true);
          }}
          className="three"
        >
          3
        </button>
        <button
          onClick={() => {
            setInit(init + "2");
            setIsOp(true);
          }}
          className="two"
        >
          2
        </button>
        <button
          onClick={() => {
            setInit(init + "1");
            setIsOp(true);
          }}
          className="one"
        >
          1
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setInit(init + "+");
            setIsOp(!isOp);
            setIsDot(true);
          }}
          style={{ fontSize: "30px" }}
          className="add"
        >
          +
        </button>
      </div>
      <div className="buttons1">
        <button
          onClick={() => {
            setInit(init + "0");
            setIsOp(true);
          }}
          className="zero"
        >
          0
        </button>
        <button
          disabled={!isDot}
          onClick={() => {
            if (
              init[init.length - 1] === "+" ||
              init[init.length - 1] === "-" ||
              init[init.length - 1] === "*" ||
              init[init.length - 1] === "/" ||
              init[0] === undefined
            )
              setInit(init + "0.");
            else setInit(init + ".");
            setIsDot(false);
          }}
          className="dot"
        >
          .
        </button>
        <button
          onClick={() => {
            if (
              init[init.length - 1] === "+" ||
              init[init.length - 1] === "-" ||
              init[init.length - 1] === "*" ||
              init[init.length - 1] === "/"
            )
              setAns(NaN);
            else setAns(calc(init));
          }}
          className="equal"
        >
          =
        </button>
      </div>
    </div>
  );
};
//hello
