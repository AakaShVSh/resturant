import React from 'react'

export default function Restaurant({restaurant , search}) {
  return (
    <div className="container divider">
    <div className="cards">
        {restaurant.filter((restaurant)=>restaurant.name.includes(search)).map((e) => (
               <div className="card">
            <img alt = "" width="254" height="160px" src={e.image} />
            <div className="restaurant-details">
                <div className="restaurant-title">{e.name}</div>
                <div className="restaurant-subtitle">{e.category.join(", ")}</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i>{e.rating}
                </div>
                 .<div className="restaurant-delivery-timings">{e.deliveryTimings} mins</div> .
                <div className="restaurant-cost-for-two">₹{e.costfortwo} FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">{e.offer.join(" | ")}</span>
            </div>
        </div>
        ))}
    </div>
</div>
  )
}
