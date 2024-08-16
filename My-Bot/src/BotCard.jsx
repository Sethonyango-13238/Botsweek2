import React from "react";
function BotCard({bot, handleClick,dischargeBot}){
    return(
        <>
           <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      {dischargeBot && (
        <button onClick={(e) => {
          e.stopPropagation();
          dischargeBot();
        }}>
          Discharge Forever
        </button>
      )}
    </div>
        </>
    );
}
export default BotCard;