import React from "react";
function YourBotArmy({army, removeFromArmy, dischargeBot}){
    return(
        <>
        <div>
            <h2>Your Bot Army</h2>
            <div className="bot-collection">
                {army.map((bot)=>(
                    <BotCard
                    key={bot.id}
                    bot={bot}
                    handleClick={()=>removeFromArmy(bot)}
                    dischargeBot={()=> dischargeBot(bot)}/>
                ))}
            </div>
        </div>

        </>
    )
}
export default YourBotArmy