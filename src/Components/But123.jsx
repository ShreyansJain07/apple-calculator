export default function But123({ isOp }) {
  return (
    <>
      <div className="buttons1">
        <button className="seven">7</button>
        <button className="eight">8</button>
        <button className="nine">9</button>
        <button
          disabled={!isOp}
          style={{ fontSize: "40px", paddingTop: "20px" }}
          className="mul"
        >
          *
        </button>
      </div>
      <div className="buttons1">
        <button className="four">4</button>
        <button className="five">5</button>
        <button className="six">6</button>
        <button
          disabled={!isOp}
          style={{ fontSize: "40px", paddingBottom: "5px" }}
          className="sub"
        >
          -
        </button>
      </div>
      <div className="buttons1">
        <button className="three">3</button>
        <button className="two">2</button>
        <button className="one">1</button>
        <button disabled={!isOp} style={{ fontSize: "40px" }} className="add">
          +
        </button>
      </div>
    </>
  );
}
