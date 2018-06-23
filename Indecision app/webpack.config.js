//Module exports 
const path = require('path') //importing path module
console.log(path.join(__dirname, 'public'));

module.exports = {
    //entry : where webpack should start
    //Refer to webpack.js.org
    entry : './src/app.js',
    output : {
        path : path.join(__dirname, 'public'), //where do we want to put the webpack file i.e bundle.js
        //The paath is the absolute path that we need to specify and it is differnt for different machines and users.
        //SO we use console.log(__dirname); then node function path.join() to get to the public folder through string concat
        filename : 'bundle.js' // we can specify any name 
    }

};