import React from 'react'
import SearchBar from './SearchBar'
import ItemBar from './ItemBar'
import data from '../data/Menu.json'
import MenuBar from './MenuBar'


const NavBar = () => {

    //const renderedItems = data.map(item=>{     return ()    });

    return (

        <nav className="navbar navbar-expand-lg bg-dark" >
            
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <MenuBar data = {data}></MenuBar>
                   <SearchBar></SearchBar>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
