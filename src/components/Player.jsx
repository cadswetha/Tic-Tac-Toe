import { useState } from "react"

const Player = ({defaultName , playerSymbol, isActive})=>{
    const [playerName , setPlayerName] = useState(defaultName);
    const [isEditing ,setIsEditing] = useState(false);
    const handleOnClick = ()=>{
        setIsEditing(prevValue=>!prevValue);
    }
    let buttonName = "Edit";
    if(isEditing){
        buttonName = "Save";
    }
    return (
        <li className={isActive?"active":undefined}>
            <span className="player">
                {isEditing ? <input value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
                :<span className="player-name">{playerName}</span>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleOnClick}>{buttonName}</button>
        </li>
    )
};
export default Player