import React from 'react';
import image22 from "../images/slider2form.jpg"
import "./forms.css";
import { useState } from 'react';

export default function Forms()
    {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [city, setCity] = useState('');
        const [address, setAddress] = useState('');
    
        const handleSignIn = (e) => {
            e.preventDefault();
            //call backend api
            console.log('sign in:', email, password, city, address);
        };

    return(
        
        <div className='container-fluid'>
        <div className='form-img'>
        <img src={image22} alt='image here' />
    </div>
    <div className='form-elements'>
        <h2>Book Your Table Now</h2>
    <form class="row g-3" onSubmit={handleSignIn}>
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Your email</label>
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} class="form-control" id="validationDefault01" placeholder='email' required />
            </div>
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Your password</label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} class="form-control" id="validationDefault01" placeholder='password' required />
            </div>
            <div class="col-md-6">
                    <label for="validationDefault03" class="form-label">Enter City</label>
                    <input type="text" placeholder='city' class="form-control" onChange={(e) => setCity(e.target.value)}  id="validationDefault03" required />
            </div>
            <div class="col-md-6">
                <label for="address" >Special Request</label>
              <textarea
                name="Address"
                id="address"
                cols="33"
                rows="4"
                placeholder="Address here"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
                </div>
           
            
            <div class="col-12">
                <button class="btn btn-warning" type="submit">Book Now</button>
            </div>
        </form>
        </div>
        </div>
    
            
            
)
    }
