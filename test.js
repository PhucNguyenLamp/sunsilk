// eslint-disable-next-line no-undef
var Datastore = require('nedb')
var db = new Datastore({ filename: 'user.db', autoload: true });

db.find({ system: 'solar' }, function (err, docs) {
    // Nếu không tìm được gì, trả về []
    console.log(docs);
    // Logs Mars, Earth, Jupiter vì chúng nằm trong hệ mặt trời
  });
// { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] }
// { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } }
// { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false }
// { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } }
// { _id: 'id5', completeData: { planets: [ { name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 } ] } }
