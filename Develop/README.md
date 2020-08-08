# workout_tracker

Workout tracker is a website that will allow you to input and track your cardio and resistance exercises.  It also provides charts with breadowns of your activities.

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/)
* [Mongo DB](https://www.mongodb.com/)
* [Heroku](https://www.heroku.com/)

### Installation Guide

* You will need to download this folder to your computer. You may do this either by downloading the document as a zip file, or by cloning the git repository to a folder on your computer using Git Bash. In order to do this, click the green button labled "Clone or Download", and select your method of retrieving the file.

* If you want to use the git clone method, your first step is to copy the link provided. From here, you want to navigate to the desired location on your computer in your Git Bash terminal, or navigate to the desired location via your explorer, right click and select "Git Bash Here". Within your Git Bash terminal, type the following: `git clone git@github.com:jdavis3333/workout_tracker.git`

* Once the repository exists locally on your computer, navigate to within the newly downloaded folder using git bash, or use the "Git Bash Here" method to open the terminal within the correct folder.

* To ensure you are in the coorect folder, type the following and hit enter: `ls`

* Finally, you will need to ensure that all of the required npm packages are installed. Type the following into your Git Bash terminal: `npm i`

### Use

![GIF]()

* Created schema
```
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
```      
* Created API post route
```
router.post("/api/workouts", function(req, res) {
  Workout.create(req.body)
  .then(function(workout){
    console.log("get", workout)
    res.send(workout)
  })
  .catch(function(err){
    if(err)throw err
  })
})
```
* Created HTML routes
```
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
```
## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/en/)
* [Heroku](https://heroku.com)
* [Express](https://expressjs.com/)
* [MongoDB](https://mongodb.com/)

## Authors

* Joe Davis 

- [Link to Portfolio](https://gentle-bayou-48835.herokuapp.com/)
- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)


## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
