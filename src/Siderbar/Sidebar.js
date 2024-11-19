import React from 'react'
import Category  from './Category/Category'
import Price  from './Price/Price'
import Color  from './Colors/Color'
import './Sidebar.css'
import { Button } from 'react-bootstrap'


function Sidebar({handleChange,clearFilters}) {
  return (
    <>
        <section className='sidebar'>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Color handleChange={handleChange}/>
            <div className='ms-5'>
            <Button variant="outline-primary" className='mb-4' onClick={clearFilters}>Clear Filters</Button>
            </div>
        </section>
        </>     
  )
}

export default Sidebar
