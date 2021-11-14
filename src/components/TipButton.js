const TipButton = ({ tipValue, handleTipBtn }) => {
  return (
    <button
      type="button"
      className="btn"
      data-tip-value={tipValue}
      onClick={e => handleTipBtn(+e.target.dataset.tipValue)}
    >
      {tipValue}%
    </button>
  );
};

export default TipButton;
