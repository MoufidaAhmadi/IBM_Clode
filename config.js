const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: 'votre-apikey',
  }),
  serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com',
});

module.exports = assistant;
