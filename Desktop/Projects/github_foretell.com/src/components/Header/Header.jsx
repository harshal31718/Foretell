import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" >
        <div className='logo'>
          <img src="./images/ft_logo.jpg" alt="logo"/>
          <p>foretell.com</p>
        </div>
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 1.8rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.header_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
  }
  .logo img{
    height: 30px;
  }
  .logo p{
    color: yellow;
    margin: 0 5px;
    font-size: 20px;
  }
`;

export default Header