const request = require("request");
const cheerio = require("cheerio");
let url = 'https://en.wikipedia.org/wiki/I'
request(url, cb)

function cb(error, response, html) {
    if(error){
        console.error('error:', error);
    } else {
        extractHtml(html);
    }
    function extractHtml(html){
        let $ = cheerio.load(html);
        let contArr1 = $("#History");
        for (let i = 0; i < contArr1.length; i++) {
            let data = $(contArr1[i]).text(); 
            console.log(data);
        }
        for(let i =15; i <=17;i++){
            let contArr11 = $("#mw-content-text > div.mw-parser-output > p:nth-child("+ i+ ")");
            for (let i = 0; i < contArr11.length; i++) {
                let data = $(contArr11[i]).text(); 
                console.log(data);
        }
        }
        
        let contArr2 = $("#Use_in_writing_systems");
        for (let i = 0; i < contArr2.length; i++) {
            let data = $(contArr2[i]).text(); 
            console.log(data);
        }
        for(let i =19; i <=27;i++){
            let contArr11 = $("#mw-content-text > div.mw-parser-output > p:nth-child("+ i+ ")");
            for (let i = 0; i < contArr11.length; i++) {
                let data = $(contArr11[i]).text(); 
                console.log(data);
        }
        }

        let contArr3 = $("#Other_uses");
        for (let i = 0; i < contArr3.length; i++) {
            let data = $(contArr3[i]).text(); 
            console.log(data);
        }
        for(let i =30; i <=36;i++){
            let contArr11 = $("#mw-content-text > div.mw-parser-output > p:nth-child("+ i+ ")");
            for (let i = 0; i < contArr11.length; i++) {
                let data = $(contArr11[i]).text(); 
                console.log(data);
        }
        }
    }
};

// #mw-content-text > div.mw-parser-output > p:nth-child(17) #mw-content-text > div.mw-parser-output > p:nth-child(27) #mw-content-text > div.mw-parser-output > p:nth-child(30)
// #mw-content-text > div.mw-parser-output > table:nth-child(15) #mw-content-text > div.mw-parser-output > p:nth-child(36)
//#mw-content-text > div.mw-parser-output > blockquote #mw-content-text > div.mw-parser-output > p:nth-child(22)