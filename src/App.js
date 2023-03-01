
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {User} from "./components/User.jsx"
import {BueroBank} from "./components/BueroBank.jsx"

function App() {
  return (
    <div className="App">
      
        <h1>Die ultimative Bierdeckel App</h1>
<User />
      <BueroBank />
    </div>
  );
}

export default App;