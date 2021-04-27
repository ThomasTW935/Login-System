import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './styles/main.css'
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
            </Switch>
          </AuthProvider>
        </Router>
        {/* <Login className='login'/> */}
      </div>
  );
}

export default App;
