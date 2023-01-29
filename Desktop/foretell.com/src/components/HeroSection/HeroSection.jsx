import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../../styles/Button';

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <h1 className='hero-h1'>Foretell.com</h1>
                    <p className='hero-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam deleniti molestiae dolore eos voluptatem. Nam, culpa aliquid aut possimus, sunt tempore quas porro modi dolorum distinctio accusamus cum deserunt?</p>
                    <Button className="btn contactus-btn">
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </Button>
                </div>

                <div className="section-hero-img">
                    <picture>
                        <img src="./images/hero-image.jpg" alt="" className='hero-img'/>
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: pink;
    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .hero-h1 {
        text-transform: uppercase;
        font-size: 6rem;
    }
    .hero-para{
        margin: 1.5rem 0 3.5rem 0;
        max-width: 60rem;
    }
    .btn {
        max-width: 20rem;
    }
    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture {
        text-align: center;
    }
    .hero-img{
        max-width: 80%;
    }
`;
export default HeroSection