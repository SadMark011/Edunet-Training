import React from 'react'

export default function Card({cardName, cardType}) {
  return (
    <>
        <div style={{border: '4px solid red', height:'150px', width:'150px'}}>
            <h1>Card1 {cardName} {cardType}</h1>
        </div>
    </>
  )
}
