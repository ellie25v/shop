import React, {Component} from 'react'
import css from './sidebar.module.css'
import {NavLink} from 'react-router-dom'

import home from '../../assets/home.png';


class Sidebar extends Component {
    state = { 
        isCatagoriesOpen: false,
        isCatalogOpen: false,
        
        // currentPage: ""
     }

     getCurrentPage = e => {
        e.persist();
        const name = e.target.name;
        this.setState(prev => ({
            [name]: !prev[name]

        }))
     }
    render() { 
        const {isCatagoriesOpen, isCatalogOpen} = this.state
        return (
            <div className={css.sidebar}>
                <div className={css.logoWrapper}>
                <img src={home} alt="logo" className={css.home} />
                    <span>Terracot</span>
                </div>
                <NavLink
                    exact to='/categories'
                    name="isCatagoriesOpen"
                    onClick={this.getCurrentPage}
                    className={css.link}
                    activeClassName={css.activeLink}> Categories </NavLink>
                {isCatagoriesOpen &&
                    <div className={css.navWrapper}>
                        <NavLink to="/categories/roof">Roof</NavLink>
                        <NavLink to="/categories/wall">Wall</NavLink>
                        <NavLink to="/categories/window">Window</NavLink>
                        <NavLink to="/categories/door">Door</NavLink>
                    </div>}
                    <NavLink
                    to='/catalog'
                    name="isCatalogOpen"
                    onClick={this.getCurrentPage}
                    className={css.link}
                    activeClassName={css.activeLink}> Catalog </NavLink>

                {isCatalogOpen &&
                    <div className={css.navWrapper}>
                        <NavLink to="/catalog/roof">Roof</NavLink>
                        <NavLink to="/catalog/wall">Wall</NavLink>
                        <NavLink to="/catalog/window">Window</NavLink>
                        <NavLink to="/catalog/door">Door</NavLink>
                        </div>}
            </div>
            
        );
    }
}

export default Sidebar;