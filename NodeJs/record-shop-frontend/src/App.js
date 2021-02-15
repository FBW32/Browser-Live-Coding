
import React, { createContext, useState } from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

export const MyContext = createContext(null)

function App() {

       const [isLogin,setIsLogin] = useState(false)
       const [userData,setUserData]= useState(null)
       
  return (
    <MyContext.Provider value={{isLogin,setIsLogin ,userData,setUserData}}> 
        <BrowserRouter> 
              <div className="App">
                    <h1>Record Shop</h1>
                    <ul>
                      <Link to="/"> <li>Home</li> </Link>
                      {!isLogin && <Link to="/signup"> <li>Signup</li></Link>}
                      {!isLogin &&  <Link to="/login"><li>Login</li> </Link>}
                      {isLogin && <Link to="/profile"> <li>Profile</li> </Link>}  
                    </ul>

                    <Switch> 
                        <Route exact path="/" component={Home}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/profile" component={Profile}/>
                        <Route component={NotFound}/>
                    </Switch>
              </div>
        </BrowserRouter>
    </MyContext.Provider>
  );
}


export default App;