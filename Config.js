const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Z3lXmRLR#DA3CH-X9RubOOMe3stLBdgHS6I7UkjrjJPpKc03njOo",
MONGODB: process.env.MONGODB || "mongodb://mongo:YszgdBxTcgmCsigakakedaIIcsBhNGOU@junction.proxy.rlwy.net:11394",

BOT_NUMBER: process.env.BOT_NUMBER || "94776938009"
};
