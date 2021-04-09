import './App.css';
import Midhome from './components/MiddleHomeComp/Midhome';
import Home from './components/HomeComp/Home';
import Doctor from './components/DoctorResgistration/Doctor';
import {Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
    	<Switch>
    	<Route exact path="/" component={Home}/>
		<Route exact path="/doctor" component={Doctor}/>
        </Switch>
    </>
  );
}

export default App;
