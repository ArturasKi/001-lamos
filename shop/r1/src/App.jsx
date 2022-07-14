import './bootstrap.css';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { login, logout, authConfig } from './Functions/auth';
import axios from 'axios';
import Back from "./Components/Back/Back"; 
import Front from "./Components/Front/Front"; 
import {apikey} from './Functions/key';

function App() {

  useEffect(() => {
    axios.get('https://api.currencyapi.com/v3/latest?apikey=' + apikey)
    .then(res => {
      console.log(res.data)
      axios.post('http://localhost:3003/admin/cur', res.data, authConfig())
      .then(r => console.log(r))

    })

  }, [])

  //fetch - js reikalas;
  //axios - biblioteka, mažiau kodo;
    
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<RequireAuth role="user"><Front/></RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/admin" element={<RequireAuth role="admin"><Back show="admin" /></RequireAuth>} />
          <Route path="/admin/cats" element={<RequireAuth role="admin"><Back show="cats"/></RequireAuth>} />
          <Route path="/admin/products" element={<RequireAuth role="admin"><Back show="products"/></RequireAuth>} />
          <Route path="/admin/comments" element={<RequireAuth role="admin"><Back show="com"/></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}

function RequireAuth({ children, role }) {
  const [view, setView] = useState(<h2>Please wait...</h2>);

  useEffect(() => {
    axios.get('http://localhost:3003/login-check?role=' + role, authConfig())
      .then(res => {
        if ('ok' === res.data.msg) {
          setView(children);
        } else {
          setView(<Navigate to="/login" replace />);
        }
      })
  }, [children, role]);
  return view;
}

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const doLogin = () => {
    axios.post('http://localhost:3003/login', { user, pass })
      .then(res => {
        console.log(res.data);
        if ('ok' === res.data.msg) {
          login(res.data.key);
          navigate('/', { replace: true });
        }
      })
  }
  return (
    <div className='container col-2'>
      <div className='row'>
        <div className='card login'>
          <div className='card-body'>
            <div className='form-group'>name: <input type="text" value={user} onChange={e => setUser(e.target.value)}></input></div>
            <div className='form-group'>password: <input type="password" value={pass} onChange={e => setPass(e.target.value)}></input></div>
            <button onClick={doLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoutPage() {
  useEffect(() => logout(), []);
  return (
    <Navigate to="/login" replace />
  )
}

export default App;

// kategorijos -> tėvas;
// prekės -> vaikai;

// categories
// id | title

// products
// | category_id | id | title | price | photo | Last update date | In stock |