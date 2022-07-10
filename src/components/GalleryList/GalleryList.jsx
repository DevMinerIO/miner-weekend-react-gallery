// import galleryItem component
import GalleryItem from "../GalleryItem/GalleryItem";

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