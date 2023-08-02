import React from 'react'

const BannerAction = ({key,title,subtitle}) => {
    return (
        <div key={key}>
            <div className='bg-white p-5 text-center'>
                <div style={{ fontSize: '80px', fontWeight: 'bold' }}>{title}</div>
                <div style={{ fontSize: '30px' }}>{subtitle}</div>
                <div style={{ marginTop: '20px' }}>
                    <button className='btn btn-primary'>Comprar Ahora!</button>
                </div>
            </div>
        </div>
    )
}

export default BannerAction
