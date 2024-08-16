import React from "react"

function BotCollection({bots}){
    return(
        <>
        <h1>AVAILABLE BOTS</h1>
        <div className="bot-collection">
            {bots.map((bot)=>(
                <div key={bot.id} className="bot-card">
                    <img src={bot.avatar_url} alt={bot.name}/>
                    <h3>{bot.name}</h3>
                    <p>Health:{bot.health}</p>
                    <p>Damage:{bot.damage}</p>
                    <p>Amor:{bot.amor}</p>
                    <p>Class:{bot.bot_class}</p>
                    <p>{bot.catchphrase}</p>

                </div>
            ))}
        </div>
        </>
    )
}
export default BotCollection