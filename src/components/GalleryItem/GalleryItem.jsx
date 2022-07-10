import { useState } from "react";

function GalleryItem({ item, updateItem }) {
    const [isToggled, setIsToggled] = useState(false);
    const [like, setLike] = useState(0);

    const handleClick = () => {
        console.log('you clicked a picture!');
        setIsToggled(!isToggled);
    }

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