import React from 'react'

const NewsItem = ({key,title,description}) => {
  return (

    <div className="feature col text-white" key={key}>
      <h3 className="fs-2">{title}</h3>
      <p>{description}</p>
      <a href="#" className="text-warning">
        Call to action
      </a>
    </div>


  )
}

export default NewsItem
