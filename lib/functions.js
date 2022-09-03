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

const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')


const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Succes'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
            const banner = cfonts.render(('DENIS V5'), {
                font: 'block',
                color: 'system',
                align: 'left',
                gradient: ["red","white"],
                lineHeight: 2
                });



module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
