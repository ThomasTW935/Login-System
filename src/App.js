import './styles/main.css'

function App() {
  return (
    <div className="App">
      <div class='formCon'>
        <h2>Log In</h2>
        <form className='form'>
          <section className='form__section'>
            <labeL>Email</labeL>
            <input type='email' required/>
          </section>
          <section className='form__section'>
            <labeL>Password</labeL>
            <input type='password' required/>
          </section>
          <button type='submit' className='btn btn-primary'>Log In</button>
        </form>
        <button type='button' className='btn btn-secondary'>Create New Account </button>
      </div>
    </div>
  );
}

export default App;
