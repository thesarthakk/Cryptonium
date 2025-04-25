import React, { useContext } from 'react'
import { useState } from 'react';
import { AppContext } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { coinsData, setId } = useContext(AppContext);
  const [uuid, setUuid] = useState("");
  const Navigate = useNavigate();

  function handleChange(e) {
    setUuid("");
    const value = e.target.value;
    const result = value.toLowerCase();

    const cryptomatch = coinsData.filter((coin) => {
      const { name } = coin;
      const newName = name.toLowerCase()
      return newName == result
    })
    console.log(cryptomatch);
    if (cryptomatch.length != 0) {
      setUuid(cryptomatch[0].uuid);
    }
    setQuery(value);

  }

  function handleKeyDown(e){
    if(e.key==='Enter'){
      Navigate(`/singleCoin/${uuid}`)
      setQuery("")
    }
  }
  return (
    <div>
      <form className="w-fit" onSubmit={(e) => { e.preventDefault() }}>
        <div class="flex items-center p-6 space-x-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="bg-gray-100 outline-none" type="text" placeholder="Search Cryptocurrency" value={query} onChange={handleChange} onKeyDown={handleKeyDown} />
          </div>
          <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"  onClick={() => {
            Navigate(`/singleCoin/${uuid}`)
            setQuery("")
          }} >
            <span>Search</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar



