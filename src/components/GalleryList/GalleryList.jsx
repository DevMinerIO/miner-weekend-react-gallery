
function GalleryList({ list }) {
    
    return (
        <>
            {list.map(photo =>
                <div class="single-photo" key={photo.id}>
                    <img src={photo.path} />
                    <p>{photo.description}</p>
                    <br/>
                    <button>I love it!</button>
                    <p><span>{photo.likes}</span> People loved this!</p>
                </div> )}
        </>
    )
}

export default GalleryList;