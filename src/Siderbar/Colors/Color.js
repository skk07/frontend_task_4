import React from 'react'
import './Color.css'
import Input from '../../components/Input'


function Color({handleChange}) {
  return (
    <>
    <div className='m-1 ps-4'>
        <h2 className='fs-4'>Color</h2>
    </div>
    <div>
    <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name="test2"/>
          <span className='checkmark all'></span>All
    </label>

    <Input
    handleChange={handleChange}
    value='black'
    title='Black'
    name='test1'
    color='black'
    />

    <Input
    handleChange={handleChange}
    value='blue'
    title='Blue'
    name='test1'
    color='blue'
    />

    <Input
    handleChange={handleChange}
    value='red'
    title='Red'
    name='test1'
    color='red'
    />

    <Input
    handleChange={handleChange}
    value='green'
    title='Green'
    name='test1'
    color='green'
    />

    <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="white" name="test1"/>
          <span className='checkmark' style={{background:"white",border:"2px solid black"}}></span>White
    </label>
    

    </div>
    </>
  )
}

export default Color
