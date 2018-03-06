const twilio = require('twilio');

const accountSid = 'AC57e1a29ad6c6bd592b30292f38129e14';
const authToken = '15e5fc1fed5df78ce7ab0d35a78c67d5';

module.exports = new twilio(accountSid, authToken);
