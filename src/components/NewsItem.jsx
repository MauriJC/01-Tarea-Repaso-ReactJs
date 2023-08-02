import React from 'react'
import Modal from './Modal'

const NewsItem = ({ identifier, title, description }) => {
  console.log(identifier, 'news item')
  return (
    <>
      <div className="feature col text-white">
        <h3 className="fs-2">{title}</h3>
        <p>{description}</p>
        <a href="#" className="text-warning" data-bs-toggle="modal" data-bs-target={`#${identifier + 23}`}>
          Call to action
        </a>
      </div>

      <Modal id={identifier + 23} title={title}></Modal>



    </>


  )
}

export default NewsItem
