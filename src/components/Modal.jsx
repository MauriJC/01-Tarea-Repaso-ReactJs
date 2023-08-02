import React from 'react'

const Modal = ({ title, id }) => {

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title.toUpperCase()}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body centered">
            Inscribite ahora!!
          </div>
          <input type="text" className='centered'/>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
            <button type="button" className="btn btn-primary">MAS INFO</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal
