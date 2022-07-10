const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// I added pool for sql stretch goal
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// my GET Route for Stretch
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "photos" ORDER BY "id";`;
    pool.query(queryText)
        .then((result) => {
            console.log('Result from the database:', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;