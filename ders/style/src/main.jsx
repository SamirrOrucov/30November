import React from 'react'
import ReactDOM from 'react-dom/client'
// import Navbar from './assets/Navbar/index.jsx'
// import UserList from './UserList/index.jsx'
import "./index.css"
import Modal from './UserList/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Modal/>
  </React.StrictMode>,
)
