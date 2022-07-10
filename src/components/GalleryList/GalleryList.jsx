// import galleryItem component
import GalleryItem from "../GalleryItem/GalleryItem";

// uses "list" to map out objects to the dom and passes updateItem function to the GalleryItems component
function GalleryList({ list, updateItem }) {
    
    return (
        <>
            {list.map(item =>
                (<GalleryItem
                    key={item.id}
                item={item}
                updateItem = {updateItem}
            />)
            )}
        </>
    )
}


export default GalleryList;