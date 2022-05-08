import React from 'react'

const NFT = ({img}) => {
  return (
    <div className="relative mx-auto my-10 h-[18rem] w-[18rem] shadow-xl glass p-3 cursor-pointer">
  <span
    
  >
    <img
      alt={img}
      src={img}
      decoding="async"
      data-nimg="fill"
      className="hover:scale-105  transition-transform duration-300"
      style={{
        position: "absolute",
        inset: 0,
        boxSizing: "border-box",
        padding: 0,
        border: "none",
        margin: "auto",
        display: "block",
        width: 0,
        height: 0,
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        objectFit: "contain"
      }}
    />

  </span>
</div>

  )
}

export default NFT
