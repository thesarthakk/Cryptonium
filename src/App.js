import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import ErrorPage from './Components/ErrorPage'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import './App.css'
import SingleCoinPage from './Components/SingleCoinPage'
import CryptoPerformancePage from './Components/CryptoPerformancePage'
const App = () => {
  return (
    <div className="w-[57rem] lg:w-[100vw]">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/singleCoin/:uuid' element={<SingleCoinPage/>}></Route>
        <Route path='/cryptoperformance' element={<CryptoPerformancePage/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App