import React from 'react'

const Count = () => {


    const itemsRedeemed = localStorage.getItem('minted')
    const itemsAvailable = localStorage.getItem('maxitems')
 

  return (
  itemsRedeemed ? (<div className='flex items-center mt-12 radious-0 '>
    <span className="animate-ping inline-flex h-4 w-4 rounded-full bg-green-300 opacity-75 mr-3"></span>
   <h3 className=" inline text-center text-3xl font-semibold decoration-indigo-500/80 lg:text-left xl:text-4xl">
   Minted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{itemsRedeemed}/{itemsAvailable}</span></h3>
    </div>) :
  (<div className='flex items-center mt-12 radious-0 '>
  <span className="animate-ping inline-flex h-4 w-4 rounded-full bg-green-300 opacity-75 mr-3"></span>
   <h3 className=" inline text-center text-3xl font-semibold decoration-indigo-500/80 lg:text-left xl:text-4xl">
   Collection: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">100</span></h3>
    </div>)
  )
}

export default Count
