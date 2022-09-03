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

const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require("axios")
const cheerio = require("cheerio")
const { fromBuffer } = require('file-type')

//varuable
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

//fucntion
function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}
function ythd(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    document = (new JSDOM(res.result)).window.document
                    yaha = document.querySelectorAll('td')
                    filesize = yaha[yaha.length - 23].innerHTML
                    id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    thumb = document.querySelector('img').src
                    title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 720
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}       
module.exports.ythd = ythd
