import React, { useState } from 'react';
function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>

      <div style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s ' }} >  
            <h3 className='d-flex align-items-center  justify-content-center ' >Click on the Button!!     </h3>
        <br />
        <div className='w-100 d-flex align-items-center text-align-center justify-content-center' style={{ backgroundColor: backgroundColor, height: '100vh', transition: 'background-color 0.5s ', width: '100%' }}>

          <div className='d-flex align-items-center  justify-content-center w-100'>

            <button className='btn btn-primary' onClick={() => changeBackgroundColor('blue')}>Blue</button>
            <button className='btn btn-danger' onClick={() => changeBackgroundColor('red')}>Red</button>
            <button className='btn btn-success' onClick={() => changeBackgroundColor('green')}>Green</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;