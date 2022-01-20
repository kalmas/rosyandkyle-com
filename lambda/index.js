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

    const response = {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: { "message": "Great Job!" }
    };
    return response;
};