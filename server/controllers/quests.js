const Quest = require('../models/quests');

exports.createQuest = (req, res, next) => {
    // return res.status(200).json({});
    const quest = new Quest({
        ...req.body.quest,
    });
    quest.save().then(createdQuest => {
        res.status(201).json({
            message: 'Quest added successfully!',
            quest: {
                ...createdQuest.toObject(),
                id: createdQuest._id,
            }
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Quest creation failed'
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