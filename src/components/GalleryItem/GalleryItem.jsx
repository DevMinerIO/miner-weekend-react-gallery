import { useState } from "react";

function GalleryItem({ item, updateItem }) {
    // toggle for shorting the on click with the img.
    const [isToggled, setIsToggled] = useState(false);

    // this function is passed though the onclick to change the state of isToggled
    const handleClick = () => {
        console.log('you clicked a picture!');
        setIsToggled(!isToggled);
    }

    // this function is passed though the onclick "i loved this" button to increase the counter
    // update item is living in App.jsx and passed in though props through galleryList.jsx
    const handleLikeClick = () => {
        console.log('current like click before adding 1 is:', item.likes);
        updateItem(item.id);
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
                    <button onClick={handleLikeClick}>I love it!</button>
                    <p><span>{item.likes}</span> People loved this!</p>
                </div>
            }
        </>
    )
}

export default GalleryItem;