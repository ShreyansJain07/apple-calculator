export const Screen = ({ ans, init }) => {
  function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }

  return (
    <div className="screen">
      <p className="calc">{init}</p>
      <p className="ans">
        {ans > 9999999
          ? expo(ans, 2)
          : Number.isInteger(ans)
          ? ans
          : parseFloat(ans).toFixed(2)}
      </p>
    </div>
  );
};
