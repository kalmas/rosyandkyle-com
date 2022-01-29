const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const ses = new AWS.SES({ region: "us-east-1" });

const error = {
    "statusCode": 500,
    "body": { "message": "Unexpected error!" }
};

const ok = {
    statusCode: 201,
    body: { "message": "Great Job!" }
};

exports.handler = async (event, context) => {
    let recordSaved = false;
    let emailSent = false;

    event.time = new Date().toISOString();
    event.type = 'rsvp';

    console.log(event);

    const params = {
        TableName: 'wedding-rsvp',
        Item: event
    }

    try {
        await dynamo.put(params).promise();
        console.log("saved record")
        recordSaved = true;
    } catch (e) {
        console.error(e.message);
    }

    const emailParams = {
        Destination: {
            ToAddresses: ["kylealmas@gmail.com"],
        },
        Message: {
            Body: {
                Text: { Data: JSON.stringify(event, null, 2) },
            },

            Subject: { Data: "New RSVP!" },
        },
        Source: "kyle@rosyandkyle.com",
    };

    try {
        await ses.sendEmail(emailParams).promise();
        console.log("sent email")
        emailSent = true;
    } catch (e) {
        console.error(e.message);
    }

    if (!recordSaved || !emailSent) {
        return error;
    }

    return ok;
};
