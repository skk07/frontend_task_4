import React from 'react'
import './Recommended.css'
import Buttons from '../components/Buttons'



function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className='mt-3 mb-4 fs-3' style={{marginLeft:"17rem"}}>Brands</h2>
        <div className='recommended-flex d-flex' style={{marginLeft:"17rem"}}>
          <Buttons onClickHandler={handleClick} value="" title="All Products"/> 
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
          <Buttons onClickHandler={handleClick} value="puma" title="Puma"/>
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recommended
