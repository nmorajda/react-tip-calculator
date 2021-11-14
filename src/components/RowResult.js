function RowResult({ label, value }) {
  return (
    <div className="app__total__result">
      <div className="app__total__desc">
        <strong>
          {label}
          <span>/ person</span>
        </strong>
      </div>
      <div className="app__total__value">
        <span id="tipAmountValue">{value}</span>
      </div>
    </div>
  );
}

export default RowResult;
