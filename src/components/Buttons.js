import React from 'react'
import Button from 'react-bootstrap/Button';

 function Buttons({onClickHandler,value,title}) {
  
  return (
    <div>
      <Button className='me-3' variant="outline-primary" onClick={onClickHandler} value={value}>{title}</Button>
    </div>
  )
}

export default Buttons