const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BOYXA-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RYYzNya29waFdKRHVOeEJOVGp2UWRIR1VSeDloSUh6M2hBaC9DdUNtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2hmQ0RSbU5lbW9XYnQxajJYeHVweWpwcDFOQUNEUnUwTDhncGczbTFBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q1Z2eDlIUzUxQXdLcEVnQWVmMTU4MVhWQzRVanNZc3E2RGtkcGNtZTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUCthV3paczkxSEllc1hvdWRLZzVKUnc0OFlHdDRmcGpUaVpydWdKN2hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBTXpuTU01cHlJazZPQkdUQUJOY3p1TmJqS0ZEa0ZPNFBuOS9qRVN2MmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjWXNEZlhiSXB6RkJSdHhxRFIyTkh5QmFZUmpDRkVlbmFka1VPc29Da2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JvRGZEcENJb3BDTWlHTitOUlJGajZpTVlCZVhJd2IzbUFTSjdHY0lVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzdWYmpja2FaN2wweXpROWxBL1ZQSm5PMTd3VjNXZVBqU0Y5QlVEVmNnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMrNGtQYys0SjZFaEpLNnVEeU5QSzJNZ3ppRGJUTFZtYzhCeEtySDBVZmw4VnBlT3luMVgvRHprQUUzbVJzYklva3lDSFM0dDZVQmh6Q0NCTmg3SWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IkxUVUtnbWxWQVFUVXRmdURIaVpmMHZwYVEvZkROcitOQ2Z2eklGSlVOMDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkE5R0REWEQ2IiwibWUiOnsiaWQiOiIyNjM3MTY5ODUzNTA6NDdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNzcyNzA4NDEzMDMyNzU6NDdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPU3Z6ZGtHRU15L21zWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpdkpIckg0R0lZbE13dTBJbktjaW8zdlhPSjV1KzZVRkZtakdwVGVXbFFJPSIsImFjY291bnRTaWduYXR1cmUiOiJhd29WNEYreXJTbjBhdUNzLy95VjdOaXdpaVVlUmxZL3BRdkE3Z0pOVzhDSUFITko1bjROMmJramh4R3drQWcrcnFMbmZQL0NickFjZkJ6RTdkbXZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMC9oN3NXVjE0T0lWK0dTaWhxN2lFUytDNjBZdDRzTzBtWFJZKzAwdDhPSStwYnQvRUY2V21YOU5hTnplOGtCV0E1Snh5SWJjNGZzdkJoY0dSak10aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTY5ODUzNTA6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXJ5UjZ4K0JpR0pUTUx0Q0p5bklxTjcxemllYnZ1bEJSWm94cVUzbHBVQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3ODQ3NTAzLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==,
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "falsr",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DOCTOR-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/jog59s.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Joshuamambo1-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "BOYKA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,🗿,💀,👍🏻,🥀,✨",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263716985350,263738403205",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DOCTOR-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴏᴄᴛᴏʀ-ᴍᴅ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/x1g8H1Hp/midkingdoctorconnected.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 𝔀𝓱𝓮𝓻𝓮𝓮𝓿𝓮𝓻 𝔂𝓸𝓾𝓻𝓮 𝓘 𝓪𝓵𝔀𝓪𝔂𝓼 𝓵𝓸𝓿𝓮 𝔂𝓸𝓾 💎",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263716985350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
