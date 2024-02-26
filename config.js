const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'youre POSTGRESQL url',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'true',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'true',
ANTI_LINK: process.env.ANTI_LINK || 'true' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️',
LOGO: process.env.LOGO || `https://telegra.ph/file/2717975a4410096a24c0f.jpg` 
};
