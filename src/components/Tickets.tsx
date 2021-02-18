import React from "react";

interface ticket {
    price: number,
    cost: number | undefined,
    val: string | undefined,
    stops: number
}

export default ({price, cost, val, stops}: ticket) => {
    return (
        <div className="ticket_c">
            <button>{`Pay for: ${cost ? cost : price} ${val ? val : 'RUB'}`}</button>
            <p>Stops: {stops}</p>
        </div>
    )
}
