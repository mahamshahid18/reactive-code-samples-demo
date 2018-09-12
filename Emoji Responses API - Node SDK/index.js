'use strict';

const lib = require('./lib');
const controller = lib.APIController;

let queryParameters = {'dialog1': 'May the force be with you!'};

const promise = controller.getEmoji(queryParameters);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'string'
    // `response` will be an emoji, which might not show in terminal
    console.log(response);
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
    console.log(err);
});