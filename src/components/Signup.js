import React, {useRef,useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, } = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
             return setError('Password not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch {
            setError(`Failed to create an account`)
        }
        setLoading(false)
    }

    return (
            <div className='formCon'>
                <h2>Sign Up</h2>
                {error && <div className='error'><span>{error}</span></div>}
                <form className='form' onSubmit={ handleSubmit }>
                    <section className='form__section'>
                    <label>Email</label>
                    <input ref={emailRef} type='email' required/>
                    </section>
                    <section className='form__section'>
                    <label>Password</label>
                    <input ref={passwordRef} type='password' required/>
                    </section>
                    <section className='form__section'>
                    <label>Confirm Password</label>
                    <input ref={passwordConfirmRef} type='password' required/>
                    </section>
                    <button disabled={loading} type='submit' className='btn btn-primary'>Sign Up</button>
                </form>
                <Link to='/login' className='btn btn-secondary'>Have an account? Login here </Link>
            </div>
    )
}
