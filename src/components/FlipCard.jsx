import React, {useState} from "react";

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick =()=> {
        setIsFlipped(!isFlipped)
    }
return (
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
        <div id="cardFront">
            <h2>front</h2>
        </div>
        <div id="cardBack">
            <h2>back</h2>
        </div>
    </div>
)
}

export default FlipCard;