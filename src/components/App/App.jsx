import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import { response } from 'express';
// COMPONENT IMPORTS
import GalleryList from '../GalleryList/GalleryList';

function App() {

  // state to hold gallery photos
  const [photoList, setPhotoList] = useState([]);

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log('Response in APP:', response);
        console.log('the data from App:', response.data);
        // setting state for photoList
        setPhotoList(response.data);
      })
      .catch(function (error) {
        console.log('ERROR ON GET, in APP', error);
      });
  }

  // PUT Request
  const updateItem = (id) => {
    axios.put(`gallery/like/${id}`)
      .then(response => getPhotos())
      .catch(error => console.log('Error PUTting', error))
  }
  // on ready function to load gallery when page is loaded. done once
  useEffect( () => {
    getPhotos();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg" /> */}
        <div className='gallery-container'>
        <GalleryList list={photoList}
            photo={getPhotos}
            updateItem= {updateItem}  
          />
        </div>
        
      </div>
    );
}

export default App;
