import React from 'react'

export default function Offers({offer}) {
  return (
    <div>
     <section className="offers">
        <div className="container">
          {offer.map((e) => (
              <img className='offer' src={e.offer} alt="" />
          ))}
        </div>
    </section>
    </div>
  )
}
