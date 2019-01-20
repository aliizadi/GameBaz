const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GameBaz_db');

module.exports = router;


app.route('/api/all-games').get((req, res) => {
  res.send({
    allGames: [
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
    ]
  });
});

app.route('/api/all-users').get((req, res) => {
  res.send({
    allUsers: [
      {username: 'aliizadi', averageRating: 3.5, totalPlayed: 85, status: "online"},
      {username: 'hoseini', averageRating: 4.5, totalPlayed: 75, status: "offline"},
      {username: 'mammadi', averageRating: 2.5, totalPlayed: 95, status: "online"}
    ]
  });
});

app.route('/api/best-games').get((req, res) => {
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

app.route('/api/best-new-games').get((req, res) => {
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

app.route('/api/games-comments').get((req, res) => {
  res.send({
    gameComments: [
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
      ]
  });
});

app.route('/api/most-online-ames').get((req, res) => {
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

app.route('/api/online-users').get((req, res) => {
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


app.route('/api/users-comments').get((req, res) => {
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
app.route('/api/profile-summery').get((req, res) => {
  res.send({
    profileSummery:  { username: 'aliizadi', firstName: 'Ali', lastName: 'Izadi', email: 'Izadi@', playedGame: 1,
                  wins: 2, averageRate: 2.5}
  });
});

app.route('/api/designed-games').get((req, res) => {
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

app.route('/api/designed-game-detail/:id').get((req, res) => {
    const requestedGameId = req.params['id']
    res.send({
    gameComments: [
        {content: 'khooob', username: 'mamamad'}, {content: 'bad', username:'ali'}
    ]
  });
});

app.route('/api/played-games').get((req, res) => {
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

app.route('/api/played-game-detail/:id').get((req, res) => {
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

app.route('/api/user-information').get((req, res) => {
  res.send({
    userInformation: { username: 'rezarezaei', firstName: 'reza',
                      lastName: 'rezaei', birthday: '1376', gender:"male"}
  });
});


