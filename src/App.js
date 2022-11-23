
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/Mynav';
import './Styles/MyNav.css';
import MyFooter from './components/MyFooter';
import MyHome from './components/MyHome';

function App() {
  return (
    <div className="App">
        
        <MyNav/>
      <MyHome/>
      <MyFooter/>
    </div>
  );
}

export default App;
