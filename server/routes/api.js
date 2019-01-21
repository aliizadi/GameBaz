const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GameBaz_db');


var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, unique: true},  
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  birthday: String,
  gender: String,
  status: String,
  ratings: [Number],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  games: [{ type: Schema.Types.ObjectId, ref: 'Game'}],
  playedGame: [{
    opponent: { type: Schema.Types.ObjectId, ref: 'User'},
    winner: { type: Schema.Types.ObjectId, ref: 'User'},
    game: { type: Schema.Types.ObjectId, ref: 'Game'},
  }]
});

var User = mongoose.model("User", userSchema);

var gameSchema = new Schema({
  designer: { type: Schema.Types.ObjectId, ref: 'User'},  
  designedDate: Date,
  totalPlayed: Number,
  totalOnline: Number,
  ratings: [Number],
  name: String,
  maxScore: Number,
  resetNumbers: [Number],
  Dices: String,
  maxThrow: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments'}],
});

var Game = mongoose.model("Game", gameSchema);

var CommentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},  
  game: { type: Schema.Types.ObjectId, ref: 'Game'},    
  content: String,
  accepted: Boolean,
});

var Comment = mongoose.model("Comment", CommentSchema);


/**
 * 
 * 
 *************************  GET METHODS 
 * 
 * 
 */

router.get('/all-games',(req, res) => {


  Game.find({}, function(err, games) {
    if (err) throw err;    

    var allGames = []
    
    for (game in games){
      var sum = 0
      for(rate in game.ratings)
        sum += rate
      var averageRating = sum
      allGames.push({
        id: game._id,
        averageRating: averageRating,
        totalPlaying: game.totalOnline,
        designedDate: game.designedDate,
        designer: {username: "not implemented yet"},
        totalPlayed: game.totalPlayed
      })
    }
    
    res.send({
      allGames: allGames
    });
  });
});

router.get('/all-users', (req, res) => {
  res.send({
    allUsers: [
      {username: 'aliizadi', averageRating: 3.5, totalPlayed: 85, status: "online"},
      {username: 'hoseini', averageRating: 4.5, totalPlayed: 75, status: "offline"},
      {username: 'mammadi', averageRating: 2.5, totalPlayed: 95, status: "online"}
    ]
  });
});

router.get('/best-games', (req, res) => {
  res.send({
    bestGames: [
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      ]
  });
});

router.get('/best-new-games', (req, res) => {
  res.send({
    bestNewGames: [
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1,name:'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
    ]
  });
});

router.get('/games-comments', (req, res) => {
  res.send({
    gameComments: [
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
      ]
  });
});

router.get('/most-online-games', (req, res) => {
  res.send({
    mostOnlineGames: [
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      {id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
    ]
  });
});

router.get('/online-users', (req, res) => {
  res.send({
    onlineUsers: [
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
    ]
  });
});


router.get('/users-comments', (req, res) => {
  res.send({
    usersComments: [
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
    ]
  });
});


// need authorization
// 
// 
// 
// 
// 
router.get('/profile-summery', (req, res) => {
  res.send({
    profileSummery:  { username: 'aliizadi', firstName: 'Ali', lastName: 'Izadi', email: 'Izadi@', playedGame: 1,
                  wins: 2, averageRate: 2.5}
  });
});

router.get('/designed-games', (req, res) => {
  res.send({
    designedGames: {
        totalDesignedGames: 10,
        totalPlayed: 5,
        averageRating: 2.5,
        games: [
          {id: 1, name: 'bazi1', date: 'farda'},
          {id: 1, name: 'bazi1', date: 'farda'}
        ]
      }
  });
});

router.get('/designed-game-detail/:id', (req, res) => {
    const requestedGameId = req.params['id']
    res.send({
    gameComments: [
        {content: 'khooob', username: 'mamamad'}, {content: 'bad', username:'ali'}
    ]
  });
});

router.get('/played-games', (req, res) => {
  res.send({
    playedGames: {
        totalPlayedGames: 10,
        totalwins: 5,
        averageRating: 2.5,
        games: [
          {id: 1, name: 'bazi1', date: 'farda'},
          {id: 1, name: 'bazi1', date: 'farda'}
        ]
      }
  });
});

router.get('/played-game-detail/:id', (req, res) => {
    const requestedGameId = req.params['id']
    res.send({
    gameDetail: {
        opponent: {id: 'hoseinhoseini', firstName: 'hosein', lastName: 'hoseini'},
        gameDate: 'dirooz',
        winner: {id: 'hoseinhoseini', firstName: 'hosein', lastName: 'hoseini'},
        gameComments: [{content: 'khooob', username: 'mamamad'}, {content: 'bad', username:'ali'}],
        opponentComment: {content: 'hey', username: 'alii'}
      }
  });
});

router.get('/user-information', (req, res) => {
  res.send({
    userInformation: { username: 'rezarezaei', firstName: 'reza',
                      lastName: 'rezaei', birthday: '1376', gender:"male"}
  });
});

/**
 * 
 * 
 *************************  POST METHODS 
 * 
 * 
 */

//  add friend
// add comments and score
// add games 
// accept users and game comments
// edit profile
// games but online i think we need to store some information about game
//

router.post('/sign-up',  (req, res) => {

    // if (User.findOne({ username: req.body.username })) {
    //     throw 'Username "' + req.body.username + '" is already taken';
    // }
    

    var document = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      gender: req.body.gender,
      password: req.body.password,
    }

    var user = new User(document); 

    user.save(function(error){
      console.log(user);
      if(error){ 
        throw error;
      }
      res.json({message : "user registerd successfully.", status : "success"});
    });    
  
});

router.post('/sign-in',  (req, res) => {

    User.findOne({ username : req.body.username })
        .exec(function (err, user) {
          if (err){
              res.json({message : "there isn't user with this username", status : "failure"});
          }

          if( user.password == req.body.password){
            res.json({
              name: user.username,
              token: user.username
            });
          }
        });
  
});

router.post('/create-game',  (req, res) => {

    const authorizationHeaders = req.get('Authorization').toString().split(':')
    const name = authorizationHeaders[0]
    const token = authorizationHeaders[1]
    
    if(name == token){
      
      User.findOne({ username : name })
          .exec(function (err, user) {
            if (err){
                res.json({message : "there isn't user with this username", status : "failure"});
            }
            else{

              var document = {
                designer: user._id,
                designedDate: new Date(),
                name: req.body.name,
                maxScore: req.body.maxScore,
                resetNumbers: req.body.resetNumbers,
                Dices: req.body.Dices,
                maxThrow: req.body.maxThrow
              }

              var game = new Game(document);    
              
            
            
              game.save(function (err) {
                if(err){ 
                  throw err;
                }

                user.games.push(game)
                res.json({
                  message: 'game successfuly created'
                });
              });
            }
          });
      }
      else {
        res.json({message: "Sign In first"})
      }
});



 
module.exports = router;
