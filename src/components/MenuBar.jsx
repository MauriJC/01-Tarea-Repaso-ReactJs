import React from 'react'
import ItemBar from './ItemBar'

const MenuBar = ({ data }) => {

  //console.log(data);

  const renderedItems = data.map(item => {
    return (
      <ItemBar
        key={item.id}
        name={item.name}
        link={item.link}
        active={item.active}>
      </ItemBar>
    );
  })

  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {renderedItems}


      </ul>

    </div>
  )
}

export default MenuBar
