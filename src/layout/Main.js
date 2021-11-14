import Form from '../components/Form';
import Total from '../components/Total';

function Main({ bill, setBill, tip, setTip, people, setPeople }) {
  return (
    <div className="app">
      <div className="app__input">
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
      </div>
      <div className="app__total">
        <Total
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
      </div>
    </div>
  );
}

export default Main;
