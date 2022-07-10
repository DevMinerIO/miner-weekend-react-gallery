
function GalleryItem({ item }) {
    
    return (
        <>
            <div className="single-photo">
                <img src={item.path} />
                <p>{item.description}</p>
                <br />
                <button>I love it!</button>
                <p><span>{item.likes}</span> People loved this!</p>
            </div>
        </>
    )
}

export default GalleryItem;