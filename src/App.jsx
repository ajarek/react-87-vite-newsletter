function App() {
  return (
    <div className="App">
      <div className='left-panel'>
        <h1>Stay updated! </h1>
        <ul>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <li>
            <img
              src='images/icon-list.svg'
              alt=''
            />{' '}
            Product discovery and building what matters{' '}
          </li>
          <li>
            <img
              src='images/icon-list.svg'
              alt=''
            />{' '}
            Measuring to ensure updates are a success
          </li>
          <li>
            <img
              src='images/icon-list.svg'
              alt=''
            />{' '}
            And much more!
          </li>
        </ul>
        <form className='email'>
          <h5>Email address</h5>
          <input
            type='text'
            placeholder='email@company.com'
          />
          <input
            type='submit'
            value=' Subscribe to monthly newsletter'
          />
        </form>
      </div>
      <div className='right-panel'>
        <img
          src='images/illustration-sign-up-desktop.svg'
          alt='illustration-sign-up'
          
        />
      </div>
    </div>
  )
}

export default App
// Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message
