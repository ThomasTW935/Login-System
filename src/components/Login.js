import React,{useRef, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError(`Failed to log in`)
        }
        setLoading(false)
    }


    return (
        <div className='formCon'>
            <h2>Log In</h2>
            {error && <div className='error'>{error}</div>}
            <form className='form' onSubmit={handleSubmit}>
            <section className='form__section'>
                <label>Email</label>
                <input ref={emailRef} type='email' required/>
            </section>
            <section className='form__section'>
                <label>Password</label>
                <input ref={passwordRef} type='password' required/>
            </section>
            <button disabled={loading}  type='submit' className='btn btn-primary'>Log In</button>
            </form>
            <Link to='/signup' className='btn btn-secondary'>Create New Account </Link>
      </div>
    )
}
