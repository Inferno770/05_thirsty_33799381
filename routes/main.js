// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "La Bodega del Barrio"};

// Define our data
var shopData = {shopName: "La Bodega del Barrio", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                 shopLocations: [
        {
            name: "City Centre",
            manager: "Maria Cortez",
            address: "12 Market Street, Dublin"
        },
        {
            name: "Northside",
            manager: "James O’Reilly",
            address: "55 North Lane, Dublin"
        },
        {
            name: "Riverside",
            manager: "Sofia Martinez",
            address: "89 River Road, Cork"
        }
            ]       
            }

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!.' + 'We will send an email to you at ' + req.body.email);   
});

// Survey form page
router.get('/survey', function(req, res) {
    res.render('survey', shopData);
});

// Handle submitted survey
router.post('/surveyresults', function(req, res) {
    res.render('surveyresults', {
        shopName: shopData.shopName,
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        age: req.body.age,
        drinkCategory: req.body.drinkCategory,
        student: req.body.student ? "Yes" : "No"
    });
});


// Export the router object so index.js can access it
module.exports = router;
