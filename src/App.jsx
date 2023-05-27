import Form from './components/Form'
import List from './components/List'
import Header from './components/Header'
import Illustration from './components/Illustration'
import { useState } from 'react'

function App() {
  const[email,setEmail]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    setEmail(e.target[0].value);
  }
  console.log(email);
  return (
    <div className='App'>
      <div className='left-panel'>
        <Header />
        <List />
        <Form onSubmit={handleSubmit}/>
      </div>
      <div className='right-panel'>
        <Illustration />
      </div>
    </div>
  )
}

export default App
// Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message
