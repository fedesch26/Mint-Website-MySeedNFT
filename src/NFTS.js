import React from 'react'
import NFT from './NFT'


const NFTS = () => {
  return (

<section
  className="gallery container relative z-10 mx-auto"
  id="gallery"
>
  <h3 className="mb-4 p-16 text-center text-3xl font-semibold decoration-indigo-500/80 lg:text-left xl:text-4xl">
    Some of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Our NFTS</span>
  </h3>

  <div className="relative  bg-gradient-to-r from-green-400 to-blue-500 grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto my-10 shadow-xl">

  <NFT img={'/images/18.png'}/>
  <NFT img={'/images/19.png'}/>
  <NFT img={'/images/20.png'}/>
  <NFT img={'/images/21.png'}/>
      

</div>

</section>

  )
}

export default NFTS
