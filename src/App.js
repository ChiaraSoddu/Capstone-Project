import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/Mynav';
import './Styles/MyNav.css';
import MyFooter from './components/MyFooter';
import MyHome from './components/MyHome';
import Alimentazione from './components/Alimentazione';
import Pt from './components/Pt';
import Subscription from './components/Subscription';
import Abbonamenti from './components/Abbonamenti';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer ",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log('users: ',res);
        dispatch(getUsersAction(res));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <MyNav/>
      <BrowserRouter>
        <Routes>
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/" element={<MyHome />} />
        <Route path="/ali" element={<Alimentazione/>} />
        <Route path="/pt" element={<Pt/>} />
        <Route path="/abbonamenti" element={<Abbonamenti/>} />
        <Route path="/profile" element={<Profile/>} />
        
        </Routes>
      </BrowserRouter>
      
      <MyFooter/>
    </div>
  );
}

export default App;
