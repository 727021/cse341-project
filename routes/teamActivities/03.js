//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/teamActivities/03', {
        title: 'Team Activity 03',
        path: '/team/03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;