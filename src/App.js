import { GlobalStyle } from './globalStyles'
import {BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Sidebar/>
    </Router>
  );
}

export default App;
