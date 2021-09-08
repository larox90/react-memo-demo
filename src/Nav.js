import React from 'react';
function Nav(props) {
  const { onIncrease, onDecrease, jsxLinks } = props;
  console.log('Nav RENDERED');
  return (
    <nav className="Nav">
      { jsxLinks }
      <p>
        <button onClick={onIncrease}>Increase From Nav</button>
      </p>
      <p>
        <button onClick={onDecrease}>Decrease From Nav</button>
      </p>
    </nav>
  );
}

/**
 * React.memo is used to tell to React this component needs to be re rendered only if the props change.
 * not in any parent re render.
 */
export default React.memo(Nav);