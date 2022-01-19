var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    event.time = new Date().toISOString();
    event.type = 'rsvp';

    console.log(event);

    const params = {
        TableName: 'wedding-rsvp',
        Item: event
    }

    dynamo.put(params, callback);
};
