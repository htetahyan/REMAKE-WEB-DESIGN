import React from 'react'
import Header from './Pages/Page01/Header'
import Upper from './Pages/Page02/upper/Upper'
import Middle from './Pages/Page03/Middle'
import Bottom from './Pages/Page04/Bottom'
import './App.css'
const App = () => {
  return (
    <div className='App'>
     <Header/>
     <Upper/>
     <Middle/>
     <Bottom/>
    </div>
    
    
  )
}

export default App