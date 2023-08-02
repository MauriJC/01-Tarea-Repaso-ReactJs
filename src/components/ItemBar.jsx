import React from 'react'

const ItemBar = ({ name, link, active }) => {
  return (

    <li className="nav-item">
      <a className={`nav-link active text-white ${active ? '' : 'disabled'}`}
        aria-current="page"
        href={link}
      >
        {name}
      </a>
    </li>

  )
}

export default ItemBar
