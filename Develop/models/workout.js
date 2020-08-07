const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String, 
                required: true
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number, 
            },
            name: {
                type: String, 
                required: true
            },
            weight: {
                type: Number, 
            },
            sets: {
                type: Number, 
            },
            reps: {
                type: Number, 
            },
        }
    ],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;