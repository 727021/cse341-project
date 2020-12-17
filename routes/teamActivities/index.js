/*******************************************************************************
 * This file contains routes for team activities.
 *
 * To add another team activity, create a route file in the teamActivities folder,
 * then add another `.use()` statement to this file.
 *******************************************************************************/
const router = require('express').Router()

router
    .use('/01', require('./01'))
    .use('/02', require('./02'))
    .use('/03', require('./03'))
    .use('/04', require('./04'))

module.exports = router
