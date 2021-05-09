import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/dashboard' component={Dashboard} />
    </Router>
  )
}

export default App;
