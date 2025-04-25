import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/context';

const SingleCoinPage = () => {
  const { setId, singleData, loading, error } = useContext(AppContext);
  const { uuid } = useParams();
  const Navigate = useNavigate();
  const [count, SetCount] = useState(1);

  function increment() {

    SetCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      SetCount(count - 1);
    }
  }

  useEffect(() => {
    console.log("hi");
    setId(uuid);
  }, [setId, uuid]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  console.log(singleData)

  const { name, iconUrl, description, price, btcPrice, change, numberOfExchanges, numberOfMarkets, rank, tags, tier, coinrankingUrl, links } = singleData;
  const totalPrice = price * count;
  const newPrice = totalPrice.toFixed(3);
  
  return (
    <div >
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <img src={iconUrl} className="w-[4rem] m-7" alt={name} />
          <h1 className="text-[3rem] text-white">{name}</h1>
        </div>
        <div className="mt-5 flex flex-col justify-centre gap-3 items-center w-[20%]">
          <form class="max-w-xs mx-auto">
            <div class="relative flex items-center max-w-[11rem]">
              <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={decrement}>
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                </svg>
              </button>
              <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={count} required />
              <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">

                <span>Coins</span>
              </div>
              <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={increment}>
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
          </form>
          <p className="text-xl text-white">Price: {newPrice}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-orange-100 w-[100vw] h-[25vh] flex justify-center items-center mx-auto mt-[10rem] lg:mt-[0]" >
      <p className='pl-4 text-lg'>{description}</p>
      </div>
      <div className="flex gap-4 mt-[15rem] w-[50%] mx-auto lg:mt-[3rem]">
      <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45vw] h-[15vh] p-auto flex justify-center items-center">btc Price: {btcPrice}</p>
      <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45vw] h-[15vh] flex justify-center items-center">Number of Exchanges: {numberOfExchanges}</p>
      <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45vw] h-[15vh] flex justify-center items-center">Number of Markets: {numberOfMarkets}</p>
      <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45vw] h-[15vh] flex justify-center items-center">Rank: {rank}</p>
      <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[45vw] h-[15vh] flex justify-center items-center">Tier: {tier}</p>
      </div>
      <button className=' mx-[45%] mt-[10%] text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
        <a href={coinrankingUrl}>Coin Analysis</a>
      </button>
    </div>
  );
};

export default SingleCoinPage;
