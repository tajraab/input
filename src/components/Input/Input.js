import React from 'react'
import './input.css'
import SubmitButton from '../SubmitButton/SubmitButton'

function Input() {
  return (
    <div>
      <div className='input-container'>
        <form action='/submit_registration' method='post'>
          <div className='name'>
            <label for='name'>Name</label>
            <input
              type='name'
              name='name'
              placeholder='Enter your name'
              required
            ></input>
            <br />
          </div>
          <div className='email'>
            <label for='email'>Email</label>
            <input
              type='email'
              name='email'
              pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
              title='Enter a valid email address'
              placeholder='Enter your email'
              required
            ></input>
            <br />
          </div>
          <div className='password'>
            <label for='password'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
              title='Minimum 6 characters at least 1 uppercase letter and 1 number'
              required
            ></input>
          </div>
          <SubmitButton label = 'Register'/>
        </form>
      </div>
    </div>
  )
}

export default Input

