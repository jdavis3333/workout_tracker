var router = require("express").Router();
var Workout = require("../models/workout.js");
const { db } = require("../models/workout.js");

router.get("/api/workouts", function(req, res) {
  db.find({})
  .then(function(workout){
    console.log("get", workout)
    res.send(workout)
  })
  .catch(function(err){
    if(err)throw err
  })
})

router.put("/api/workouts", function(req, res) {
  db.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, {new: true})
  .then(function(workout){
    console.log("get", workout)
    res.send(workout)
  })
  .catch(function(err){
    if(err)throw err
  })
})

router.post("/api/workouts", function(req, res) {
  db.create(req.body)
  .then(function(workout){
    console.log("get", workout)
    res.send(workout)
  })
  .catch(function(err){
    if(err)throw err
  })
})

router.get("/api/workouts/range", function(req, res) {
  db.find({}).limit(7)
  .then(function(workout){
    console.log("get", workout)
    res.send(workout)
  })
  .catch(function(err){
    if(err)throw err
  })
})

module.exports = router;