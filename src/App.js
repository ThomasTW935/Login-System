import './styles/main.css'

function App() {
  return (
    <div className="App">
      <div class='formCon'>
        <h2>Sign Up</h2>
        <form className='form'>
          <section className='form__section'>
            <labeL>Email</labeL>
            <input type='email' required/>
          </section>
          <section className='form__section'>
            <labeL>Password</labeL>
            <input type='password' required/>
          </section>
          <section className='form__section'>
            <labeL>Confirm Password</labeL>
            <input type='password' required/>
          </section>
          <input type='submit' value='Sign Up'/>
        </form>
      </div>
    </div>
  );
}

export default App;
