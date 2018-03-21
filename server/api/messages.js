import { Router } from 'express';
import Datastore from 'nedb';

const router = Router();

const messages = new Datastore({ filename: 'server/database/messages.db', autoload: true });

// message: {
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

router.get('/bottle/:id', (req, res) => {
  messages.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (err) res.status(500);
    res.json(doc);
  });
});

router.post('/bottle', (req, res) => {
  messages.insert(req.body.message, (err, newDoc) => {
    if (err) res.status(500);
    res.json(newDoc);
  });
});

export default router;
