
const Form = ({ onSubmit }) => {
  return (
    <form
      className={"email"}
      onSubmit={onSubmit}
    >
      <h5>Email address</h5>
      <input
        type={"text"}
        placeholder={"email@company.com"}
      />
      <input
        type={"submit"}
        value={" Subscribe to monthly newsletter"}
      />
    </form>
  )
}

export default Form
