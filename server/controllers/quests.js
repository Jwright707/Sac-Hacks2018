const Quest = require('../models/quests');
const gMapClient = require('@google/maps').createClient({
  key: "AIzaSyCef93ExoNU6nfCBvZFtNIvcT4vct5mzBk",
  Promise: Promise
});

exports.createQuest = (req, res, next) => {
    console.log(req.query.address);
    gMapClient.geocode({address: req.query.address})
    .asPromise()
    .then(response => {
        console.log(response);
        const quest = new Quest({
            ...req.params.quest,
        });
        return quest.save();
    }).then(createdQuest => {
        res.status(201).json({
            message: 'Quest added successfully!',
            quest: {
                ...createdQuest.toObject(),
                id: createdQuest._id,
            }
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Quest creation failed',
            error: error
        });
    });
}

exports.updateQuest = (req, res, next) => {
    const quest = new Quest({
        _id: req.body.quest.id,
        ...req.body.quest,
    })
    Quest
    .updateOne({_id: req.params.id }, quest)
    .then(result => {
        if (result.n > 0) {
            res.status(200).json({message: 'Update successful!' });
        } else {
            res.status.json({ message: 'Not authorized!' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Couldn\'t update quest!'
        });
    });
}

exports.getQuest = (req, res, next) => {
    Quest.findById(req.params.id).then((quest) => {
        if(quest) {
            quest.id = quest._id;
            res.status(200).json({
                message: 'Quest found!',
                quest: quest
            });
        } else {
            res.status(404).json({message: 'Quest not found!'});
        }
    })
}

exports.getQuestList = (req, res, next) => {
    const questQuery = Quest.find();
    let fetchedQuests;
    questQuery.limit(100);
    questQuery
    .then(documents => {
        fetchedQuests = documents;
        return Quest.countDocuments();
    })
    .then(count => {
        res.status(200).json({
            message: 'Quests fetched successfully!',
            quests: fetchedQuests,
            maxQuests: count
        });
    })
    .catch(error => {
        res.staus(500).json({
            message: 'Fetching quests failed!'
        });
    });
}

exports.consumeToken = (req, res, next) => {
    const checkInLocation = req.body.checkInLocation;
    const questQuery = Quest.findOne({
        _id: req.body.id,
        'checkins.quadkeys': checkInLocation
    });
    let reward;

    questQuery.then(quest => {
        reward = quest.tokens.shift()
        let questQuery;
        if (tokens.length == 0) {
            console.log('Would have deleted');
            //questQuery = Quest.deleteOne({_id: quest._id});
            questQuery = Quest.findOne({_id: quest._id});
        } else {
            questQuery = quest.updateOne(
                    {_id: quest._id},
                    {tokens: quest.tokens});
        }
        return questQuery;
    })
    .then(response => {
        res.status(200).json({
            message: 'Quest completed',
            reward: reward
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'No quest complete at that location'
        });
    })
}
