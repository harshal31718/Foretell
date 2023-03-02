import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Navbar = () => {

    const Nav = styled.nav`
        .menuIcon{
            display: flex;
            align-items: center;
        }
        .navbar-searchbar{
            margin: 0 10px;
            padding: 0;
            border-radius: 50px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.3);
        }
        .navbar-searchbar input{
            background-color: transparent;
            height: 30px;
            width: 250px;
            padding: 0 5px;
            border: none;
            outline: none;
            font-size: 15px;
            color: rgb(255, 255, 255);
        }
        .navbar-searchbar button{
            background: transparent;
            height: 30px;
            width: 30px;
            border: none;
            cursor: pointer;
            outline: none;
        } 
        .navbar-searchbar button img{
            height: 20px;
        }


        .navbar-list {
            display: flex;
            gap: 2rem;
            li{
                list-style:none;
                .navbar-link{
                    &:link,
                    &:visited {
                        display: inline-block;
                        text-decoration: none;
                        font-size: 1.8rem;
                        text-transform: uppercase;
                        color: ${({ theme }) => theme.colors.white};
                        transition: color 0.3s linear;
                    }
                    
                    &:hover,
                    &:active{
                        color: ${({ theme }) => theme.colors.helper};
                    }
                }
            }
        }


        .navbar-profile{
            margin: 0 0 0 10px;
        }
        .navbar-profile button{
            height: 30px;
            width: 30px;
            border-radius: 50px;
            // border: 3px solid rgb(50, 159, 50);
            border: 2px solid green;
            cursor: pointer;
            outline: none;
        }
        .navbar-profile button img{
            width: 100%;
            border-radius: 50px;
        }
    `;
    return (
        <Nav>
            <div className="menuIcon">
                <div className='navbar-searchbar'>
                    <button type='button'>
                        <img src="./images/navbar_search.png" alt="search" />
                    </button>
                    <input type="search" placeholder='Search'></input>
                </div>
                <div>
                    <ul className="navbar-list">
                        <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
                        <li><NavLink className="navbar-link" to="/market">Market</NavLink></li>
                        <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-profile" >
                    <button type='button'>
                        <img src="./images/navbar_profile.png" alt="profile" />
                    </button>
                </div>
            </div>
        </Nav>
    )
}


export default Navbar