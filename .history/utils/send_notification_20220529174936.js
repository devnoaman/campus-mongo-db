const axios = require('axios');
require('dotenv').config();
async function senNotificationToSingleUser(token, title, desc) {
    let message = {
        'body': desc,
        'title': title,
        'vibrate': 1,
        'sound': 1,
        'click_action': 'FLUTTER_NOTIFICATION_CLICK',
    }

    let result = await axios({
        method: 'post',
        url: "https://fcm.googleapis.com/fcm/send",
        headers: {
            'Authorization': 'key=' + process.env.FIREBASE_API_ACCESS_KEY,
            'Content-type': 'Application/json'
        },
        data: {
            'to': token,
            'data': message,
            'notification': message,
        }
    });

    return result.data;
}

async function senNotificationToTopic(topic, title, desc) {
    let message = {
        'body': desc,
        'title': title,
        'vibrate': 1,
        'sound': 1,
        'click_action': 'FLUTTER_NOTIFICATION_CLICK',
    }

    let result = await axios({
        method: 'post',
        url: "https://fcm.googleapis.com/fcm/send",
        headers: {
            'Authorization': 'key=' + process.env.FIREBASE_API_ACCESS_KEY,
            'Content-type': 'Application/json'
        },
        data: {
            'to': "/topics/" + topic,
            'data': message,
            'priority': 'high',
            'notification': message
        }
    });

    return result.data;
}

module.exports = {
    single: senNotificationToSingleUser,
    topic: senNotificationToTopic
}