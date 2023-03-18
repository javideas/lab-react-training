import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div style={{ backgroundColor, width: '200px', height: '100px' }}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
}

export default BoxColor;