import React from "react"
function Home(props) {
  return (
        <div className=" p-4 mt-4 h-16 w-full flex flex-row items-center bg-white rounded-xl">
            <div>
                <img className="h-7 w-14 mr-28 ml-6 object-contain animate-spin" src={props.coin.image}></img>
            </div>
            <div className="text-lg font-medium w-56">{props.coin.name}</div>
            <div className="w-40">
                {props.coin.price_change_percentage_24h>0?(<div className="text-green-500">▲ {props.coin.price_change_percentage_24h}</div>):((<div className="text-red-500">▼ {props.coin.price_change_percentage_24h}</div>))}
            </div>
            <div className="text-lg font-medium">$  {props.coin.current_price.toLocaleString()}</div>
        </div>
    )
}

export default Home