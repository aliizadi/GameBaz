const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GameBaz_db');


// router.get('/', (req, res) => {
//   res.send('api workss');
// });


/**
 * 
 * 
 *************************  GET METHODS 
 * 
 * 
 */

router.get('/all-games',(req, res) => {
  res.send({
    allGames: [
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
    ]
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

 
module.exports = router;
