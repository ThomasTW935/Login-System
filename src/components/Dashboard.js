import React,{useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom'


export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser,logout}  = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to logout')
        }
    }
    return (
        <div className='formCon'>
            <h2>Profile</h2>
            <strong>Email:</strong>
            <span>{currentUser.email}</span>
            <Link to='/update-profile' className='btn' >Update</Link>
            <button className='btn' onClick={handleLogout}>Log Out</button>
        </div>
    )
}
