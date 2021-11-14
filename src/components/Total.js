import RowResult from './RowResult';
import Button from './Button';

function Total({ bill, setBill, tip, setTip, people, setPeople }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const calcAmount = () => {
    if (!bill || !people) return 0;

    return bill * tip * 0.01;
  };

  const calcAmountPerson = () => {
    if (!bill || !people) return 0;

    return calcAmount() / people;
  };

  const calcTotal = () => {
    if (!bill || !people) return 0;
    return (bill + calcAmount()) / people;
  };

  const handleReset = () => {
    setBill('');
    setPeople('');
    setTip('');
  };

  return (
    <>
      <RowResult
        label="Tip Amount"
        value={formatter.format(calcAmountPerson())}
      />
      <RowResult label="Total" value={formatter.format(calcTotal())} />
      <div className="app__total__reset">
        <Button
          label="Reset"
          classes="btn btn--secondary"
          handle={handleReset}
          disabled={bill || people || tip ? false : true}
        />
      </div>
    </>
  );
}

export default Total;
