const { initializeApp } = require('firebase/app');
const { getMessaging, getToken } = require('firebase/messaging');



module.exports = async (req, res) => {
    await initializeApp()
    const registrationToken = 'f8cHJBF6T0u94v_iJfO1-Q:APA91bFD9I_rQlbwUc2tkHbA-qYyEmzMA9ay-89eopPaEMV_hSJ3sQeVr_mCuEJLz72-9Of96ILIQY03OMxBQskyBRCIrII_nESpGFfpXz5p6wgL5tTe2SBqR7YdUb52dcI2EGYo1z0U';

    const message = {
        data: {
            score: '850',
            time: '2:45'
        },
        token: registrationToken

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