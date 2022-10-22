import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Greeting = () => {
  const name = useSelector((state) => state.reducerGreetings.greetings, shallowEqual);
  return (
    <div className="container">
      <div>
        <h1>Greeting app using Rails and React</h1>
      </div>
      <h3>
        Hey,
        {' '}
        {name}
      </h3>
    </div>
  );
};

export default Greeting;