import React, { useContext } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { coinsData } = useContext(AppContext);
    const navigate=useNavigate();
    return (
        <div className='flex flex-wrap'>
            {coinsData.map((coin) => {
                const { change,iconUrl,symbol,uuid,color } = coin
                
                return (
                    <div className="text-white my-5 shadow-2xl shadow-gray-900 border-solid border-2 border-blue-950 bg-rose-900 mx-[2rem] px-[2rem] py-[0.5rem] rounded-[50%] w-[8rem] h-[8rem] flex flex-col items-center justify-around hover:cursor-pointer hover:scale-125 ease-in duration-300"  onClick={()=>{
                        navigate(`/singleCoin/${uuid}`)
                    }}>
                        
                        <img src={iconUrl} className="w-10 h-10"/>
                        <p>{symbol}</p>
                        <p>{change}%</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Header