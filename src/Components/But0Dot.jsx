export default function But0Dot({
  isDot,
  init,
  setInit,
  setIsDot,
  calc,
  setAns
}) {
  return (
    <div className="buttons1">
      <button className="zero">0</button>
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
  );
}
