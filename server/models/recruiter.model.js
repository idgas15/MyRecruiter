const utilities = require('../utilities/string')

class Recruiter {
    constructor (recruiter) {
        this._id = recruiter._id
        this.name = recruiter.name
        this.email = recruiter.email
        this.phone = recruiter.phone
        this.linkedInProfile = recruiter.linkedInProfile
    }
    get isValid () {
        if (utilities.isNullOrEmpty(this.name) || utilities.isNullOrEmpty(this.email)) {
            return false
        } else {
            return true
        }
    }
    get errors () {
        const errors = []
        if (!this.name) {
            errors.push({ property: 'name', error: 'Name is required' })
        }
        if (!this.name) {
            errors.push({ property: 'name', error: 'Email is required' })
        }
        return errors
    }
}

module.exports = Recruiter
