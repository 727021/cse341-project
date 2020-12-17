/*******************************************************************************
 * This is the main route file for your application.
 *******************************************************************************/

// Require the express router
const router = require('express').Router()
/**
 * This is the same as:
 *
 * const express = require('express')
 * const router = express.Router()
 */

// Define our routes
router
    // Routes for team activities
    .use('/team', require('./teamActivities'))
    // Routes for prove assignments
    .use('/prove', require('./proveAssignments'))
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last.
        res.render('pages/index', {
            title: 'Welcome to my CSE341 repo',
            path: '/'
        })
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', {
            title: '404 - Page Not Found',
            path: req.url
        })
    })

// Export the router so it can be required in index.js
module.exports = router
