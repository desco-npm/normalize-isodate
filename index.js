const moment = require('moment')

const normalizeIsoDate = (isoDate) => {
    if ([ '0000-00-00', '00:00:00', '0000-00-00 00:00:00', ].indexOf(isoDate) === -1) {
        return moment(isoDate)
    }

    return null
}

module.exports = normalizeIsoDate