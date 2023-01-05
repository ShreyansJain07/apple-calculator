export default function ButAc({
  setAns,
  setInit,
  setIsDot,
  setIsOp,
  init,
  isOp,
  calc
}) {
  return (
    <>
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
            setInit(init.slice(0, -1));
          }}
          className="plus-minus"
        >
          C
        </button>
        <button
          disabled={!isOp}
          onClick={() => {
            setAns(calc(`(${init})/100`));
          }}
          className="percent"
        >
          %
        </button>
        <button disabled={!isOp} style={{ fontSize: "30px" }} className="div">
          /
        </button>
      </div>
    </>
  );
}
