import InputField from './InputField';
import TipOptions from './TipOptions';

function Form({ bill, setBill, tip, setTip, people, setPeople }) {
  return (
    <>
      <div className="app__bill">
        <InputField
          id="inpBill"
          label="Bill"
          message="Can't be zero"
          value={bill}
          onChange={e => setBill(+e.target.value)}
        />
      </div>
      <div className="app__tip">
        <TipOptions tip={tip} setTip={setTip} />
      </div>
      <div className="app__people">
        <InputField
          id="inpPeople"
          label="Number of People"
          message="Can't be zero"
          value={people}
          onChange={e => setPeople(+e.target.value)}
        />
      </div>
    </>
  );
}

export default Form;
