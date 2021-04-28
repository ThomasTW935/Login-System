import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'
import './styles/main.css'
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import UpdateProfile from './components/UpdateProfile'

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}/>
              <PrivateRoute path='/update-profile' component={UpdateProfile}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
              <Route path='/forgot-password' component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
        {/* <Login className='login'/> */}
      </div>
  );
}

export default App;
