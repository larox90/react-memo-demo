import { useState, useCallback, useMemo } from 'react';
import Nav from './Nav';
import RenderedChild from './RenderedChid';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  /**
   * using useCallback to avoid these two function makes re render the Nav component
   * when App component re render, the second param in this hook are the params that we want
   * to allow re render our callback.
   */
  const handleIncrease = useCallback(() => {
    setCounter(counter++);
  }, []);
  const handleDecrease = useCallback(() => {
    setCounter(counter--);
  }, []);

  /**
   * using useMemo to avoid this variable re render the Nav component, because we now that if
   * the props change it will change, so we can't makes that this list doesn't trigger this
   * behavior of memo.
   */
  const jsxLinks = useMemo(() => {
    return [
      { id: 1, value: 'Link 1' },
      { id: 2, value: 'Link 2' },
      { id: 3, value: 'Link 2' },
    ].map(link => <p key={link.id} >{link.value}</p>);
  }, []);

  return (
    <div className="App">
      <Nav onIncrease={handleIncrease} onDecrease={handleDecrease} jsxLinks={jsxLinks} />
      <hr />
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <hr />
      <RenderedChild />
    </div>
  );
}

export default App;
