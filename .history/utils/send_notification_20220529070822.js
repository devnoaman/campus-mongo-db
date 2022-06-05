module.exports = (title, description, data) => {
    const registrationToken = 'YOUR_REGISTRATION_TOKEN';

    const message = {
        data: {
            score: '850',
            time: '2:45'
        },
        // token: registrationToken
    };

    getMessaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}