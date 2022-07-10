import { useState } from "react";

function GalleryItem({ item }) {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        console.log('you clicked a picture!');
        setIsToggled(!isToggled);
    }
    
    return (
        <>
            {/* Attempt at creating a boolean to check if the img is clicked.
            on click show the description */}
            {isToggled ? <div className="item-description">
                <img onClick={handleClick} src={item.path} />
                <p>{item.description}</p>
                <button>I love it!</button>
                <p><span>{item.likes}</span> People loved this!</p>
            </div> :
                <div className="single-photo">
                    <img onClick={handleClick} src={item.path} />
                    <br />
                    <button>I love it!</button>
                    <p><span>{item.likes}</span> People loved this!</p>
                </div>
            }
        </>
    )
}

export default GalleryItem;