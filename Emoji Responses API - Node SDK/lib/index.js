/**
  * @module StarWarsForceEmojiResponsesLib
  *
  * Just a dumb fun little project, a REST API that responds with emoji's based on the request. If
  * optional query parameters are set, the emoji being sent out might be different (depending on
  * whether certain conditions are met in the input query parameters).
  */

'use strict';

const Configuration = require('./configuration');
const APIController = require('./Controllers/APIController');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of StarWarsForceEmojiResponsesLib
    Configuration,
    // controllers of StarWarsForceEmojiResponsesLib
    APIController,
    // models of StarWarsForceEmojiResponsesLib
    // exceptions of StarWarsForceEmojiResponsesLib
    APIException,
};

module.exports = initializer;
