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

const toMs = require('ms')
const ms = require('parse-ms')
const fs = require("fs")
const afk = JSON.parse(fs.readFileSync('./database/off.json'))

const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk.push(obj)
    fs.writeFileSync('./database/off.json', JSON.stringify(afk))
}


const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/off.json', JSON.stringify(_dir))
        }
    }, 1000)
}


const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {
 sleep,
 isAfk,
 cekafk,
 addafk
}
