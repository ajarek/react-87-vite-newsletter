import Form from './components/Form'
import List from './components/List'
import Header from './components/Header'
import Illustration from './components/Illustration'
import Success from './components/Success'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(true)
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(e.target.value)) {
      setIsValid(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      setEmail(e.target[0].value)
      e.target[0].value = ''
      setIsSuccess(false)
    }
  }
  const handleDismiss = () => {
    setIsSuccess(true)
    setIsValid(false)
  }

  return (
    <>
      {isSuccess ? (
        <div className='App'>
          <div className='left-panel'>
            <Header />
            <List />
            <Form
              onSubmit={handleSubmit}
              handleChange={handleChange}
              isValid={isValid}
            />
          </div>
          <div className='right-panel'>
            <Illustration />
          </div>
        </div>
      ) : (
        <Success
          onClick={handleDismiss}
          email={email}
        />
      )}
    </>
  )
}

export default App
