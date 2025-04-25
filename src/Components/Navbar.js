import React from 'react'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate=useNavigate();
    return (
        <div className="bg-cyan-900 h-24 flex justify-between items-center">
            <div className="flex items-center hover:cursor-pointer" onClick={()=>{
                Navigate('/');
            }}> <img src='https://cdn-icons-png.flaticon.com/512/6782/6782481.png' className="w-20 h-20"/>
                <h2 className="lg:text-5xl text-3xl text-white logo ml-3 ">Cryptonium</h2>
            </div>
            <SearchBar />
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{
                Navigate('/cryptoperformance')
            }} >Crypto Performance</button>
        </div>
    )
    
}

export default Navbar