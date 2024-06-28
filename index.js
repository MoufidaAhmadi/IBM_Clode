const assistant = require('./config');

assistant.createSession({
  assistantId: 'votre-assistant-id'
})
.then(res => {
  const sessionId = res.result.session_id;

  assistant.message({
    assistantId: 'votre-assistant-id',
    sessionId: sessionId,
    input: {
      'message_type': 'text',
      'text': 'Bonjour',
    }
  })
  .then(res => {
    console.log(JSON.stringify(res.result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
})
.catch(err => {
  console.log(err);
});
