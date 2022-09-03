/*
██████╗  ██████╗ ███████╗ ██████╗ ██████╗     ██████╗  ██████╗ ████████╗   ███╗   ███╗██████╗ 
██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔═══██╗    ██╔══██╗██╔═══██╗╚══██╔══╝   ████╗ ████║██╔══██╗
██████╔╝██║   ██║███████╗██║     ██║   ██║    ██████╔╝██║   ██║   ██║█████╗██╔████╔██║██║  ██║
██╔══██╗██║   ██║╚════██║██║     ██║   ██║    ██╔══██╗██║   ██║   ██║╚════╝██║╚██╔╝██║██║  ██║
██████╔╝╚██████╔╝███████║╚██████╗╚██████╔╝    ██████╔╝╚██████╔╝   ██║      ██║ ╚═╝ ██║██████╔╝
╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝     ╚═════╝  ╚═════╝    ╚═╝      ╚═╝     ╚═╝╚═════╝ 
                                                                                              
                                                                        
  
═══════════════════════════════════════════════════════════════════════════════════════════════
                                      ( OWNER  DETAILS )
═══════════════════════════════════════════════════════════════════════════════════════════════
Bosco Multi-device Whatsapp Bot
Coded By DarkWinzo 
═══════════════════════════════════════════════════════════════════════════════════════════════
                                       ( CONTACT ME )
═══════════════════════════════════════════════════════════════════════════════════════════════
Whatsapp: https://wa.link/jw9ki6
Instagram:https://msng.link/o/?darkwinzo=ig
Youtube: https://youtube.com/c/DarkWinzo                                                                            
═══════════════════════════════════════════════════════════════════════════════════════════════
                                     ( PROJECT RULES )
═══════════════════════════════════════════════════════════════════════════════════════════════
If you want to recode, reupload
or copy the codes/script,
please Contact me;
recoded/reupload or copy script? "i will take action immediately"
© 2022 Bosco-MD Bot Inc.Technical Hacker Team
God Bless You, Family and Myself
═══════════════════════════════════════════════════════════════════════════════════════════════
*/

const fs = require('fs')

function geludSave(db, obj, session) {
	mine = db
	const dbdir = `./media/${session}.json`
	fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

function setGelud(session) {
	const dbdir = `./media/${session}.json`
	if (!fs.existsSync(dbdir)) {
		const objtic = {
			status: true,
			session: session,
			Z: null,
			Y: null
		}
		geludSave(dbdir, objtic, session)
		return objtic
	} else {
		const read = JSON.parse(fs.readFileSync(dbdir))
		return read
	}
}

module.exports = setGelud
