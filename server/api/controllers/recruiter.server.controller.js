const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const Recruiter = require('../../models/recruiter.model')
const utilities = require('../../utilities/string')
const mongoConnectionString = process.env.DB_CONNECTION_STRING

function GetCollection (res, collection, id = null, query = {}) {
    MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            res.status(500).json({
                message: 'Error connecting to the database',
                error: err
            })
        }
        const db = client.db(process.env.DB_NAME)
        const dbCollection = db.collection(collection)
        if (id) {
            dbCollection.find({ '_id': ObjectId(id) }).toArray((err, recruiters) => {
                if (err) {
                    res.status(500).json({
                        message: 'Error getting recruiter',
                        error: err
                    })
                }
                if (recruiters && recruiters.length > 0) {
                    res.json(recruiters[0])
                } else {
                    res.status(404)
                }
            })
        } else {
            dbCollection.find(query).toArray((err, recruiters) => {
                if (err) {
                    res.status(500).json({
                        message: `Error getting list of ${collection}`,
                        error: err
                    })
                }
                res.json(recruiters)
                return recruiters
            })
        }
    })
}
function PostCollection (res, collection, id = null, data = {}) {
    MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            res.status(500).json({
                message: 'Error connecting to the database',
                error: err
            })
        }
        const db = client.db(process.env.DB_NAME)
        const dbCollection = db.collection(collection)

        const requestPayload = new Recruiter(data)

        // todo: request payload .hasId
        if (!requestPayload.isValid) {
            res.status(400).json({
                message: 'There are errors with your request',
                errors: requestPayload.errors
            })
        }

        if (utilities.isNullOrEmpty(id)) {
            // create
            dbCollection.insertOne(requestPayload, (err, insertResult) => {
                if (err) {
                    // didn't go so well
                    res.status(500).json({
                        message: 'Unable to insert recruiter'
                    })
                }
                res.status(201).json({
                    _id: insertResult.insertedId
                })
            })
        } else {
            // update
            dbCollection.findOneAndUpdate({ '_id': ObjectId(id) }, requestPayload, { returnOriginal: false, upsert: true }, (err, updatedRecruiter) => {
                if (err) {
                    res.status(500).json({
                        message: 'Something wrong when updating data!'
                    })
                }
                res.status(200).json(updatedRecruiter)
            })
        }
    })
}
exports.getAll = (req, res) => {
    GetCollection(res, 'recruiter')
}
exports.getById = (req, res) => {
    GetCollection(res, 'recruiter', req.params.id)
}
exports.getByEmail = (req, res) => {
    GetCollection(res, 'recruiter', undefined, { 'email': req.params.email })
}
exports.create = (req, res) => {
    PostCollection(res, 'recruiter', undefined, req.body)
}
exports.update = (req, res) => {
    PostCollection(res, 'recruiter', req.params.id, req.body)
}
exports.delete = (req, res) => {
    MongoClient.connect(mongoConnectionString, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            res.status(500).json({
                message: 'Error connecting to the database',
                error: err
            })
        }
        const db = client.db(process.env.DB_NAME)
        const dbCollection = db.collection('recruiter')
        const id = req.params.id

        dbCollection.findOneAndDelete({ '_id': ObjectId(id) }, (err, deleteResult) => {
            if (err) {
                res.status(500).json({
                    message: 'Something wrong when deleting data!'
                })
            }
            res.status(200).json({
                message: 'Recruiter deleted'
            })
        })
    })
}
