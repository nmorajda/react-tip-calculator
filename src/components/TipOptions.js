import TipButton from './TipButton';

const TipOptions = ({ tip, setTip }) => {
  const tips = [5, 10, 15, 25, 50];

  const handleTipBtn = value => {
    setTip(value);
  };

  return (
    <div className="field">
      <div className="field__info">
        <label className="field__label">Select Tip %</label>
      </div>
      <div className="app__tip__options">
        {tips.map((tip, i) => (
          <TipButton tipValue={tip} handleTipBtn={handleTipBtn} key={i} />
        ))}
        <div className="app__tip__input-wrapper">
          <input
            type="number"
            name="tipCustom"
            id="inpTipCustom"
            placeholder="0"
            min="1"
            max="100"
            step="1"
            value={tip}
            onChange={e => setTip(+e.target.value)}
          />
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default TipOptions;
