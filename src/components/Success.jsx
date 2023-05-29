import React from 'react'

const Success = ({ onClick, email }) => {
  return (
    <div className='success'>
      <img
        src='images/icon-list.svg'
        alt='images icon list'
      />

      <h2> Thanks for subscribing! </h2>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription.{' '}
      </p>
      <button onClick={onClick}>Dismiss message</button>
    </div>
  )
}

export default Success
