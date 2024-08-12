import React from 'react'
import './products.css'

const Searchbar = (props) => {
  return (
    <div className='searchBar_cont'>
      <input type='text' placeholder='Search' value={props.search} onChange={(e)=>{props.setSearch(e.target.value)}}/>
      <select value={props.cat} onChange={(e)=>props.setCat(e.target.value)}>
        <option value="">All</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewellery</option>
      </select>
    </div>
  )
}

export default Searchbar
