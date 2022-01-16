aws lambda create-function --function-name RsvpSave \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x \
--role arn:aws:iam::394737126158:role/lambda-apigateway-rosyandkylersvp-role

{
    "FunctionName": "RsvpSave",
    "FunctionArn": "arn:aws:lambda:us-east-1:394737126158:function:RsvpSave",
    "Runtime": "nodejs12.x",
    "Role": "arn:aws:iam::394737126158:role/lambda-apigateway-rosyandkylersvp-role",
    "Handler": "index.handler",
    "CodeSize": 481,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2022-01-16T20:21:25.264+0000",
    "CodeSha256": "Qtf9oz/DGH0Rfm45UsyR4FgdVUUSaXbjQngQkbiGvM4=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "810e5c0d-0f7b-4915-b826-a9904545051e",
    "State": "Pending",
    "StateReason": "The function is being created.",
    "StateReasonCode": "Creating",
    "PackageType": "Zip",
    "Architectures": [
        "x86_64"
    ]
}



aws lambda invoke --function-name RsvpSave \               
--payload fileb://input.json outputfile.txt