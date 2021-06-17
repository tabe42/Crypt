import {useState,useEffect} from 'react'
import Card from './Card'

const axios = require('axios');


function App() {
  const [coins,setCoins] = useState([]);
  useEffect(() =>{
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false').then(response =>{
    setCoins(response.data)
  })
})
  
  return (
      <div class="min-w-screen min-h-screen bg-gradient-to-r from-red-500 to-red-800 flex flex-row justify-center px-5 py-5 ">
        <div class="w-full max-w-3xl ">
        <div class="-mx-2 md:flex flex-col space-y-6">
            <h1 className='text-center text-white text-6xl font-black mt-28 mb-10'>CRYPTO PRICES</h1>

            {coins.map(coin =>{
              return(
                <Card coin={coin}/>
              )
            })}
         

            </div>
            </div>
          </div>

  );
}

export default App;
