import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const Navigate=useNavigate();
  return (
    <div>
        <h1>404 page not found</h1>
        <button onClick={()=>{
            Navigate('/')
        }}>Return</button>
    </div>
  )
}

export default ErrorPage