import React,{useRef, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'


export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser,updateEmail,updatePassword} = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
    }


    return (
        <div className='formCon'>
            <h2>Update Profile</h2>
            {error && <div className='error'>{error}</div>}
            <form className='form' onSubmit={handleSubmit}>
            <section className='form__section'>
                <label>Email</label>
                <input defaultValue={currentUser.email} ref={emailRef} type='email' required/>
            </section>
            <section className='form__section'>
                <label>Password</label>
                <input ref={passwordRef} type='password' />
            </section>
            <section className='form__section'>
                <label>Password Confirm</label>
                <input ref={passwordConfirmRef} type='password' />
            </section>
            <button disabled={loading}  type='submit' className='btn btn-primary'>Update</button>
            </form>
            <Link to='/' className='btn btn-secondary'>Cancel</Link>
      </div>
    )
}
