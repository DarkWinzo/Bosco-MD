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

const { fetchJson, fetchText } = require('../lib/fetcher')
const fetch = require('node-fetch')


const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random dadu for group game xD
 * @returns {String}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
	dadu,
	asupan
}
