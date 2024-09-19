const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_36_09_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaOS81VVkvUGVCZ2dpdE4xWTRTWmNnOEtPY2d0MHN3TlIreEJjZUZHV2prPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJemhwVG5RaFJsdVBPTjdqRUhneC1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzY2EzZmRhLWQ5ODgtNDliMS1iN2ZhLTNjNDhmYTIwNDAxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxNzksXG4gICAgICA3NyxcbiAgICAgIDEzNyxcbiAgICAgIDE2NyxcbiAgICAgIDI0MixcbiAgICAgIDEwMixcbiAgICAgIDIwNCxcbiAgICAgIDE2MSxcbiAgICAgIDg1LFxuICAgICAgODgsXG4gICAgICAxNzIsXG4gICAgICAyMjksXG4gICAgICAyMDAsXG4gICAgICAxNSxcbiAgICAgIDExNyxcbiAgICAgIDEyNCxcbiAgICAgIDg5LFxuICAgICAgOTUsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTU1LFxuICAgICAgMjA4LFxuICAgICAgNjEsXG4gICAgICAxMDksXG4gICAgICA1MyxcbiAgICAgIDI0MCxcbiAgICAgIDIzLFxuICAgICAgMjM1LFxuICAgICAgMTEsXG4gICAgICAxNzksXG4gICAgICAxOTIsXG4gICAgICAyMDEsXG4gICAgICA0NCxcbiAgICAgIDExLFxuICAgICAgMTgwLFxuICAgICAgMTM1LFxuICAgICAgNDMsXG4gICAgICAyMzIsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRVpBU0RROVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6ODNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJKMC9vREVPL09zcmNHR0RFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtOHA3Z1JtSm9BUThHL1FNai9kWlRLcm1lbFJGRkNIdXJyclNYWmtRbjE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk4wbnlPR2crQ3g5SUgxc1JxZVhpbkNBc3ZoU1Rocmh1d0hTU0VINjNPd3lvQnFvRHZPZlp5OVFnZ3dBWTc2YkhzbDZHbWFhR2puYUhObUxhRnZ4b0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBTbHFEd3J0Qm5FRGlhY0NMMm9FN3huVUY3RFlNcW9ZQjgxLzF6cWJTb09CTU1GUmZjS0M0eU5lU0FoTkVWWXg5Q3JYR0RTVXdTUm1GTGJoeGFXTmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjc4NTM5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4wVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjBWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXZKR25SSDd2UEx6a0ZkRHFseFJPa0s3OFZlTXNkYVk3TXFKL3UzUytZTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDYyNTI4MTgyLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "k29promax",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
