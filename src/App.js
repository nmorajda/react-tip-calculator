import { useState } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');

  return (
    <div className="App">
      <Header />
      <Main
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        people={people}
        setPeople={setPeople}
      />
      <Footer />
    </div>
  );
}

export default App;
