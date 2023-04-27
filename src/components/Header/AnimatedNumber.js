import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ value }) => {
  return (
    <CountUp className='numr' start={0} end={value} duration={2.5} separator="." />
  );
};

export default AnimatedNumber;
