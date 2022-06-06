import * as React from 'react';
import '../pages/css/form.css';

//validate this form

function FormModule(){

    return(
        <form
            id='form'
            className='Form'
            method='post'
            action='/success'
            name='contact'
            netlify-honeypot="bot-field"
            data-netlify="true"
        >
            <input type='hidden' name='bot-field'/>
            <input type='hidden' name='form-name' value='contact'/>

            <div className='form-sec'>
            <label className='firstNameLabel' for='fName'>* First Name:</label>
            <input type='text' id='fName' name='fName' placeholder='First Name' required/>
            </div>

            <div className='form-sec'>
            <label className='lastNameLabel' for='lName'>Last Name:</label>
            <input type='text' id='lName' name='lName' placeholder='Last Name'/>
            </div>

            <div className='form-sec'>
            <label for='email'>Email:</label>
            <input type='email' id='email' name='email' placeholder='email@site.com'/>
            </div>

            <div className='form-sec'>
            <label for='number'>* Phone:</label>
            <input type='tel' id='number' name='number' placeholder='123 456 7891' pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
            </div>
            <p>We will never share your email or phone number with anyone.</p>

            <label className='message-label' for='message'>* Leave us a message</label>
            <textarea type='text' id='message' name='message' placeholder='Your message ...' required>
            </textarea>

            <button className='form-submit' type='submit'>Submit</button>
        </form>
    );
}
export default FormModule;