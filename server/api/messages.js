import { Router } from 'express';
import Datastore from 'nedb';

const router = Router();

const messages = new Datastore({ filename: 'server/database/messages.db', autoload: true });

// bottles: {
//     userName: String,
//     userLocation: String,
//     userMessage: String,
//     userTwitterHandle: String,
//   }

router.get('/randommessage', (req, res) => {
  messages.count({}, (err, count) => {
    if (err) res.status(500);

    // count is the number of docs
    // skip a random number between 0 to count-1
    const skipCount = Math.floor(Math.random() * count);
    messages.find({}).skip(skipCount).limit(1).exec((err2, docs) => {
      if (err2) res.status(500);

      // docs[0] is your random doc
      res.json(docs[0]);
    });
  });
});

router.get('/bottles/:messageID', (req, res) => {
  messages.findOne({_id: req.params.messageID}).exec((err2, docs) => {
    if (err2) res.status(500);
    // docs[0] is your random doc
    res.json(docs);
  });
});

router.post('/bottles', (req, res) => {
  messages.insert(req.body.message, (err) => {
    if (err) res.status(500);
    res.status(200);
  });
});

export default router;
