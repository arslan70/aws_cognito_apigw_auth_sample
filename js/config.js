//all the provided keys are examples, go to Amazon Cognito and get yours

AWSCognito.config.region = 'eu-east-2'; //This is required to derive the endpoint

var poolData = {
    UserPoolId : 'us-east-2_Qb5GZrX0G', // your user pool id here
    ClientId : '298jpnr5livqrp6p33a5im5stj' // your client id here
};

var identityPoolId = 'us-east-2:3bb9b1bf-710e-423a-be83-f00cfbab9371'; //go to AWS Cognito Federated Identites

var userAttributes = ['email']; //the standard attributes you require in AWS Cognito

var MFARequired = false; //do you require your clients to use MFA?