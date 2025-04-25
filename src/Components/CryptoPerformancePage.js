import React, { useContext } from 'react'
import { AppContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

const CryptoPerformancePage = () => {
  const { coinsData } = useContext(AppContext);
  const Navigate = useNavigate();
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>

            <th scope="col" class="px-6 py-3">
              Rank
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              24h %
            </th>
            <th scope="col" class="px-6 py-3">
              Market Cap
            </th>
            <th scope="col" class="px-6 py-3">
              Volume(24h)
            </th>
          </tr>
        </thead>
        <tbody>
          {coinsData.map((coin) => {
            const { name, rank, price, change, marketCap, iconUrl, symbol, uuid } = coin;
            const volume = coin["24hVolume"];
            const newPrice = Number(price).toFixed(2);
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={() => {
                Navigate(`/singleCoin/${uuid}`)
              }}>

                <td class="px-6 py-4">
                  {rank}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={iconUrl} width="30px" height="30px" />{name} {symbol}
                </th>
                <td class="px-6 py-4">
                  ${newPrice}
                </td>
                <td class="px-6 py-4">
                  {change}%
                </td>
                <td class="px-6 py-4">
                  ${marketCap}
                </td>
                <td class="px-6 py-4">
                  ${volume}
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoPerformancePage

