const recruiterController = require('../controllers/recruiter.server.controller')

module.exports = (router) => {
    router.get('/recruiter', (req, res) => recruiterController.getAll(req, res))
    router.get('/recruiter/:id', (req, res) => recruiterController.getById(req, res))
    router.get('/recruiter/email/:email', (req, res) => recruiterController.getByEmail(req, res))
    router.post('/recruiter', (req, res) => recruiterController.create(req, res))
    router.put('/recruiter/:id', (req, res) => recruiterController.update(req, res))
    router.delete('/recruiter/:id', (req, res) => recruiterController.delete(req, res))
}
