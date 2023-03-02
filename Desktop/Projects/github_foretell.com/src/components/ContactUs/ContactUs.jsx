import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../styles/Button'

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <Button className="btn contactus-btn">
                <NavLink to='/contact'>Contact Us</NavLink>
            </Button>
        </div>
    )
}

export default ContactUs