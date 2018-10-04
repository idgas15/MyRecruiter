const utilities = require('../utilities/string')

class Recruiter {
    constructor (recruiter) {
        this._id = recruiter && recruiter !== null ? recruiter._id : null
        this.name = recruiter && recruiter !== null ? recruiter.name : null
        this.email = recruiter && recruiter !== null ? recruiter.email : null
        this.phone = recruiter && recruiter !== null ? recruiter.phone : null
        this.linkedInProfile = recruiter && recruiter !== null ? recruiter.linkedInProfile : null
        this.company = recruiter && recruiter !== null ? recruiter.company : null
        this.notes = recruiter && recruiter !== null ? recruiter.notes : null
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
