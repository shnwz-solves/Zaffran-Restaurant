import React, {useState} from 'react';

const SignIn = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        //call backend api
        console.log('sign in:', email, password);
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
                <input type="email" onChange={ (e) => setEmail(e.target.value)} class="form-control" id="validationDefault01" placeholder='email' required />
            </div>
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Your password</label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} class="form-control" id="validationDefault01" placeholder='password' required />
            </div>
            
           
            
            <div class="col-12">
                <button class="btn btn-warning" type="submit">Book Now</button>
            </div>
        </form>
        </div>
        </div>
    )
}