import React,{useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for further instructions')
        } catch {
            setError(`Failed to reset password`)
        }
        setLoading(false)
    }


    return (
        <div className='formCon'>
            <h2>Password Recovery</h2>
            {error && <div className='error'>{error}</div>}
            {message && <div className='message'>{message}</div>}
            <form className='form' onSubmit={handleSubmit}>
            <section className='form__section'>
                <label>Email</label>
                <input ref={emailRef} type='email' required/>
            </section>
           
            <button disabled={loading}  type='submit' className='btn btn-primary'>Reset</button>
            </form>
            <Link to='/login' className='btn btn-secondary'>Login </Link>
      </div>
    )
}
