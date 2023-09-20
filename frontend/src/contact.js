import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    return(
        <>
        <div className='con'>
            <h3>Contact Us</h3>
            <p>91+9398927120</p><br/>
            <p>91+9052109200</p><br/>
            <h3>Email</h3><br/>
            <p>con_alms@gmail.com</p>
        </div>
        </>
    )
}
export default Contact;