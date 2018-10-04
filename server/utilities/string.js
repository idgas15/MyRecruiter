exports.isNullOrEmpty = (value) => {
    return value === undefined || value === null || value.trim().length === 0
}
