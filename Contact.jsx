import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact me</h1>
        <div className='info'>
            
            <h2>Phone</h2>
            <p>01065014469</p>
            <h2>Email</h2>
            <p>lolanabil12@gmail.com</p>
            <h2>Follow me</h2>
            <div className='image'>
                <img src="/imagw/facebook.png" width={20}/>
                <img src="/imagw/instagram.png" width={20}/>
                <img src="/imagw/linkedin.png" width={20}/>
                </div>
        </div>
        <div className='input'>
        <div className='inp'>
          <h3>Name</h3>
         <input type={"text"}></input>

        </div>
        <div className='inp'>
          <h3>Last Name</h3>
         <input type={"text"}></input>

        </div>
        <div className='inp'>
          <h3>Email</h3>
         <input type={"email"}></input>

        </div>
        <div className='inp'>
          <h3>Phone</h3>
         <input type={"number"}></input>

        </div>
        <div className='inp'>
          <h3>message</h3>
         <input type={"text"}></input>

        </div>
        <button type='submit'>Submit</button>
        </div>

    </div>
  )
}

export default Contact