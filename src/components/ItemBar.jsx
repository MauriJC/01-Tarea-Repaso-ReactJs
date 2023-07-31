import React from 'react'

const ItemBar = ({key,name,link,active}) => {
  return (

    <li className="nav-item " key={key}>
      <a className={`nav-link active text-white ${active?'':'disabled'}`}
      aria-current="page" 
      href={link} 
      >
        {name}
      </a>
    </li>

  )
}

export default ItemBar
