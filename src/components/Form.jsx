 import {useEffect, useRef} from 'react'
const Form = ({ onSubmit,isValid,handleChange }) => {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className={"email"}
      onSubmit={onSubmit}
    >
      <h5>Email address</h5>

      <input
        type={"text"}
        placeholder={"email@company.com"}
        onChange={handleChange}
        ref={inputRef}
        style={!isValid?{backgroundColor:'hsl(4, 100%, 67%)'}:{}}
      />
      {!isValid && <span style={{ color: 'red' }}>Invalid email address</span>}
      <input
        type={"submit"}
        value={" Subscribe to monthly newsletter"}
      />
    </form>
  )
}

export default Form
