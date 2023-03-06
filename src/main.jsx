import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
import Landingpage from './landingpage/landingpage'
import Admin from './adminpage/admin'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Landingpage />
//   </React.StrictMode>,
// )

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
