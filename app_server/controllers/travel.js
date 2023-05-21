var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};




/* Use for later */
// const request = require('request');
// const apiOptions = { server: 'http://localhost:3000' };

// /* internal method to render the travel list */
// const renderTravelList = (req, res, responseBody) => {
//     let message = null;
//     let pageTitle = process.env.npm_package_description + ' - Travel';
//     if (!(responseBody instanceof Array)) {
//         message = 'API lookup error';
//         responseBody = [];
//     } else {
//         if (!responseBody.length) {
//             message = 'No trips in our database!'
//         }
//     }
//     res.render('travel', {
//         title: pageTitle,
//         trips: responseBody,
//         message
//     })
// }

// /* GET travel view */
// const travel = (req, res) => {
//     const path = '/api/trips';
//     const requestOptions = {
//         url: `${apiOptions.server}${path}`,
//         method: 'GET',
//         json: {},
//     };

//     console.info('>> TravelController.travel calling ' + requestOptions.url);

//     request(
//         requestOptions,
//         (err, { statusCode }, body) => {
//             if (err) {
//                 console.log(err);
//             }
//             renderTravelList(req, res, body)
//         }
//     );
// };

// module.exports = {
//     travel
// };
