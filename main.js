"use strict";

// let str = 'ahb acb aeb aeeb adcb axeb';

// console.log(str.match(/a.b/g));

// let str2 = 'aba aca aea abba adca abea';

// console.log(str2.match(/a..a/g));

// let str3 = 'aba aca aea abba adca abea';

// console.log(str3.match(/ab.a/g));

//  + = 1 or more;
//  * = 0 or more;
//  ? = 0 or 1

// let str = 'xx xax xaax xbx';
// console.log(str.replace(/xa?x/g, `!`));

// let str = 'aa aba abba abbba abca abea';

// let res = str.match(/ab+a/g);

// console.log(res);

// let str = 'aa aba abba abbba abca abea';

// let res = str.match(/ab*a/g);

// console.log(res);

// let str = 'aa aba abba abbba abca abea';

// let res = str.match(/ab?a/g);

// console.log(res);

// let str = 'aa aba abba abbba abca abea';

// let res = str.match(/ab*a/g);

// console.log(res);

// let str = 'xabx xababx xaabbx'
// let res = str.replace(/x(ab)*x/g, '!');
// console.log(res);

// console.log(text);

// text = text.replace(/Владимир/g, `Сашка`)
// text = text.replace(/Мать/g, `Родилица Сашки`)

// console.log(text);

// let str = 'a+x ax aax aaax';
// let res = str.match(/a+x/g);

// console.log(res);

// let str = 'a.x abx azx';
// let res = str.replace(/a.x/g, '!');

// console.log(res);

// // Являются спецсимволами: $ конец строки ^ начало строки . любой символ * 0 или больше  + 1или больше ? 0 или один \ экранирование / начало и конец {} указание точного колличества повторений []  () группировка | или

// // Не являются спецсимволами: @ : , ' " ; - _ = < > % # ~ `&

// console.log("a aa b c d e f g".replace(/a{2}/g, `!`));

// let str = 'a.a aba aea';

// console.log(str.match(/a\.a/g));

// let str = '2+3 223 2223';

// console.log(str.match(/2\+3/g));

// let str = '23 2+3 2++3 2+++3 345 567';

// console.log(str.match(/2\++3/g));

// let str = '23 2+3 2++3 2+++3 445 677';

// // console.log(str.match(/2\+*3/g));

// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';

// console.log(str.match(/\*q+\+/g));

// let str = '[abc] {abc} abc (abc) [abc]';

// str = str.replace(/\[.{3}\]/g, `[!]`)
// console.log(str);

// let str = 'aa aba abba abbba abbbba abbbbba';

// console.log(str.match(/ab{2,4}a/g));

// let str = 'aa aba abba abbba abbbba abbbbba';

// console.log(str.match(/ab{0,3}a/g));

// let str = 'aa aba abba abbba abbbba abbbbba';

// console.log(str.match(/ab{4,}a/g));

// let str = 'aeeex zzz x kkk';

// let res = str.replace(/a.+?x/g, '!');
// console.log(res);

// let str = 'aba accca azzza wwwwa';
// console.log(str.replace(/a.+?a/g, `!`));

// let str = 'a1a a22a a3a a4a a5a aba aca';
// let res = str.match(/a\d?a/g)
// console.log(res);

// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.match(/a\d+a/g)
// console.log(res);

// let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// let res = str.match(/a\d*a/g);
// console.log(res);

// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// let res = str.match(/a\D+?b/g)
// console.log(res);

// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// let res = str.match(/a\W\D?b/g);
// console.log(res);

// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// let res = str.replace(/\s/g, `!`)
// console.log(res);

// let str = 'xax xbx xcx x@x';
// let res = str.match(/x[a-z]x/g);
// console.log(res);

// let str = 'xx xabesx xaadx x123x xa3x';
// let res = str.match(/x[a-z]*x/g)
// console.log(res);

// let str = 'aba aea aca aza axa';
// let res = str.match(/a[bex]a/g);
// console.log(res);

// let str = 'a1a a3a a7a a9a aba';
// let res = str.match(/a[a-g]a/g);
// console.log(res);

// let str = 'a1a a3a a7a a9a aba';
// let res = str.match(/a[3-6]a/g)
// console.log(res);

// let str = 'aba aea afa aha aga';
// let res = str.match(/a[a-fj-z]a/g)
// console.log(res);

// let str = 'aAa aea aEa aJa a3a';
// let res  = str.match(/a[a-fA-D]a/g);
// console.log(res);

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.match(/a[a-z]a/g);
// console.log(res);

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.match(/a[a-zA-Z]+a/g);
// console.log(res);

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.match(/a[a-z0-9]+a/g)
// console.log(res);

// let str = `x2z x1z xAz xaz xaaz xAAAz xa4z x9z`
// // let res = str.match(/1[^ex]+2/g);
// // let res = str.match(/x[^2-7]z/g)
// // let res = str.match(/x[^A-Z]+?z/g)
// let res = str.match(/x[^a-zA-Z1-5]+z/g)
// console.log(res);

// let str = 'wйw wяw wёw wqw';
// let res = str.match(/w[а-яё]w/g);
// console.log(res);

// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// let res = str.match(/[а-яёА-ЯЁ]+/g)
// console.log(res);

// let str = 'xax xbx xcx xdx x.x x@x';
// let res = str.replace(/x[abc.]x/g, '!');
// console.log(res);

// let str = 'xax xbx xcx x@x';
// let res = str.match(/x[a-z.]x/g);
// console.log(res);

// let str = 'aba aea aca aza axa a.a a+a a*a';
// let res = str.match(/a[.+*]a/g);
// console.log(res);

// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.match(/x[^.@$]z/g);
// console.log(res);

// let str = 'xax xbx x1x x2x xhx x@x';
// let res = str.match(/x[\da-f]x/g);
// console.log(res);

// let str = 'xaz x1z xAz x.z x@z 0000 ..';
// let res = str.match(/[\d.]+/g)
// console.log(res);

// Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.

// let res = str.match(/[\da-g]{3,7}/g);

// let blockWords = [/piss/i, /fuck/i, /cunt/i, /nigger/i, /cocksucker/i];

// let input = prompt(`Tell me something, please.`);

// let containsBlockWord = blockWords.some(word => word.test(input));

// if (containsBlockWord) {
//     console.log(`No cuss pls`);
// } else {
//     console.log(`Have a good day`);
// }

// let str = 'x]x xax x[x x1x';
// let res = str.match(/x[\[\]]x/g)
// console.log(res);

// let str = 'x[]z x[[]]z x()z';
// let res = str.match(/x[\[\]]+z/g);
// console.log(res);

// let str = 'x[]z x{}z x.z x()z x([])z';
// let res = str.match(/x[\[\]\(\)]+z/g);
// console.log(res);

// let str = 'axx bxx ^xx dxx';
// let res = str.match(/[^d]x{2}/g);
// console.log(res);

// let str = 'axx bxx ^xx dxx';
// let res = str.match(/[\^d]xx/gi);
// console.log(res);

// let str = '^xx axx ^zz bkk @ss';
// let res = str.match(/[\^@][a-zA-Z]{2}/g);
// console.log(res);

// let str = '^xx axx ^zz bkk';
// let res = str.match(/[^ ^][a-zA-Z]{2}/g);
// console.log(res);

// let str = '1a2 1-2 1c2 1z2';
// let res = str.match(/1[-az]2/g);
// console.log(res);

// let str = 'axx Axx -xx @xx';
// let res = str.match(/[a-z-]xx/g);
// console.log(res);

// let str = 'xaz xBz xcz x-z x@z';
// let res = str.match(/x[a-zA-z\-]z/g);
// console.log(res);

// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// let res = str.match(/x[$\-+]z/g);
// console.log(res);

// let str = 'aaa AAA bbb BBB';
// let res = str.replace(/[a-z]/gi, '!');
// console.log(res);

// let str = `aaa`;
// let res = str.replace(/^aaa$/g, `!`);
// console.log(res);

// let str = 'abc def xyz';
// let res = str.match(/^[a-z]+/g)
// console.log(res);

// let str = 'abc def xyz';
// let res = str.match(/[a-z]+$/g)
// console.log(res);

// let str = `The book was called the art of war.`;
// let res = str.replace(/\bthe art of war\b/g, match => `"${match}"`);
// console.log(res);

// let str = 'abc def xyz';
// let res = str.replace(/\b/g, `#`);
// console.log(res);

// let str = 'abc def xyz';
// let res = str.replace(/\B/g, `+`);
// console.log(res);

// let str = `111
//     222
//     333
//     444`;

// let res = str.replace(/\n/g, ``);
// res = res.replace(/\t/g, `!`)
// console.log(res);

// console.log(str);
// let res = str.replace(/\t/g, '');
// console.log(res);

// let str =
// `
// 	abc
// 	def
// 	ghi
// 	jkl
// `;
// let res = str.replace(/$/gm, `!`);
// console.log(res);

// let str = 'aaa bbb abb';
// let res = str.replace(/a{3}|b{3}/g, `!`);
// console.log(res);

// let str = 'aaa bbb bbbb bbbbb axx';
// let res = str.replace(/a{3}|b+/g, `!`);
// console.log(res);

// let str = 'a ab abc 1 12 123';
// let res = str.replace(/[a-z]+|\d{3}/g, `!`);
// console.log(res);

// let str = 'aaa bbb ccc ddd';
// let res = str.replace(/a+|b+|c+/g, `!`)
// console.log(res);

// let str = 'aeeea aeea aea  aeee axa axxa axxxa';
// let res = str.match(/a(e+|x+)a/g);
// console.log(res);

// let str = 'aeeea aeea aea axa axxa axxxa';
// let res = str.match(/a(e{2}|x+)a/g);
// console.log(res);

// let str = 'aaa bbb ccc';
// let regex = /\w+/g;
// let res = str.replace(regex, '!');
// console.log(res);

// let str = 'a aa aaa aaaa aaaa';
// let regex = /a+/;
// let res = str.replace(regex, '!');
// console.log(res);

// console.log(/a+/.test(`eee aaa bbb`));

// const link = `https://www.youtube.com/watch?v=fJ9rUzIMcZQ&list=RDMM&index=17`;

// // console.log(checkProtocol(link));

// const newLink = `somweiqweoiqjwr.html`
// console.log(checkExtension(newLink));

// function checkProtocol(link) {
//     let regex = /^http:\/\/|^https:\/\//;
//     return regex.test(link);
// }
// function checkExtension(link) {
//     let regex = /txt$|php$|html$/g
//     return regex.test(link);
// }

// let fileName = `dickbutt.png`;

// function isCorrectExtension(filename) {
//     let regex = /jpg$|png$|jpeg$/g;
//     let fileExtensionIndex = filename.lastIndexOf(`.`);
//     if (fileExtensionIndex === -1) {
//         console.log(`Provided file is not in .jpg, .jpeg or .png format. Please, provide a file of valid format.`);

//         return
//     }

//     let fileExtension = filename.slice(fileExtensionIndex+1)

//     let obj = {
//         'fileExtension': fileExtension,
//         'isPermitted': regex.test(filename)
//     }
//     console.log(obj);
// };

// isCorrectExtension('dickbutt.png');
// isCorrectExtension('dickpick.svg');
// isCorrectExtension(fileName);
// isCorrectExtension(`something.html`);

// let str = 123456789123;
// let res = String(str).match(/\d{1,12}/g);
// console.log(res);

// let str = `1997-05-03`;
// let res = str.match(/\d{4}-\d{2}-\d{2}/g);
// console.log(res);

// function getBirthDay(arg) {

//     const regex = /^(19|20)\d{2}-(\d|0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
//     if (!regex.test(arg)) {
//         console.log(`err`);
//     } else {
//       console.log(`ok`);
//     }

// }
// getBirthDay(`1997-5-01`);

// function checkTimeFormat(time) {
//   let regex = /^(0\d|[1][0-9]|[2][0-3]):(0\d|[1-5][0-9]):(0\d|[1-5][0-9])$/g;
//   if (regex.test(time)) {
//     console.log(`You have provided proper time: ${time}`);
//   } else {
//     console.log(`Please, provide valid time in hh:mm:ss format. \nThe cap is "99:99:99"`);
//   }
// }

// checkTimeFormat(`16:59:59`)

// function checkEmailFormat(email) {
//     let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//  if (regex.test(email)) {
//     console.log(`The provided email "${email}" is correct`);
//  } else {
//     console.log(`Please, provide a valid email`);
//  }
// }
// checkEmailFormat(`nigga@test.com`)

// let str = `1 23 456 789`;
// console.log(str.search(/\d{3}/g));;

// let str = 'a-b+c-d+e';
// let res = str.split(/[-+]/g);
// console.log(res);

// let str = '2025-12-31 12:59:59';
// let res = str.split(/[-:\s]/g);
// console.log(res);

// let str = `xax xaax xaaaax`;
// let res = str.match(/xa+x/g);
// console.log(res);

// let str = 'aaa 123 bbb';
// let res = str.match(/\d+/g);
// let index = str.search(/\d+/g)
// console.log(res);
// console.log(res.index);
// console.log(index);


// let str = '12:34';
// let res = str.match(/\d{2}:\d{2}/g);
// console.log(res)

// let str = '12:34';
// let res = str.match(/\d+:\d+/g);
// console.log(res);

// let str = 'I really enjoy pornhub.com';
// let domain = str.match(/(\S\w+)\.(\w+)/);
// let domainName = domain[1];
// let locale = domain[2];
// let fullLink = domain[0];

// console.log(domainName, locale, fullLink);

// let str = '31.12.2025';
// let res = str.match(/(\d{1,2}).(\d{1,2}).(\d{4})/);
// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);
// console.log(res[3]);

// let str = 'a aa aaa aaaa';
// let res = str.match(/a+/g);
// console.log(res);

// let str = '1 23 456 789';
// let res = str.match(/\d+/g);
// console.log(res);

// let str = 'site.ru sss site.com zzz site.net';
// let res = str.match(/\S\w+\.\w+/g);
// console.log(res);

// let str = 'a1b c34d x567z';
// let arr = str.match(/\d/g);
// let ans = arr.reduce((a,b) => +a + +b);
// console.log(arr, ans);

// let str = '12 34 56';
// let matches = str.matchAll(/(\d+)/g);
// for (let match of matches) {
//     console.log(match);
// }

// let str = '12:37 15:48 17:59';
// let matches = str.matchAll(/(\d{2}):(\d{2})/g);

// for (let match of matches) {
//     console.log(match[0]);
//     console.log(match[1]);
//     console.log(match[2]);
// }

// let str = 'site.ru sss site.com zzz site.net';
// let matches = str.matchAll(/(\S\w+)\.(\w+)/g);
// for (let match of matches) {
//     console.log(match[0]);
//     console.log(match[1]);
//     console.log(match[2]);
// }

// let str = `12 34 56`;
// let regex = /\d+/g;

// let res1 = regex.exec(str);
// console.log(res1[0]);
// let res2 = regex.exec(str);
// console.log(res2[0]);
// let res3 = regex.exec(str);
// console.log(res3[0]);

// let str = '12:37:57 15:48:58 17:59:59';
// let regex = /(\d{2}):(\d{2}):(\d{2})/g;

// let res;
// while (res = regex.exec(str)) {
//     console.log(res[0]);
//     console.log(res[1]);
//     console.log(res[2]);
//     console.log(res[3]);
// }

// let str = `12 34 56`;
// let reg = /\d+/g;

// let res;
// while (res = reg.exec(str)){
//     console.log(res, reg.lastIndex);
// }

// let str = '12:37 15:48 17:59';
// let regex = /(\d{2}):(\d{2})/g;
// regex.lastIndex = 5;

// let res;
// while (res = regex.exec(str)) {
//     console.log(res, regex.lastIndex);
// }



// function getDateToShowByLocation() {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1; 
//     let day = date.getDate();

//     let currentDate = `${day}.${month}.${year}`


//     let location = `EU`;
//     switch (location) {
//         case `EU`: 
//             return currentDate;
//         case `US`: 
//             return currentDate = `${month}.${day}.${year}`;
//         default: 
//             return currentDate;
//     }
// }
// let dateToShow = getDateToShowByLocation();
// console.log(dateToShow);

// let str = '1 23 456 xax';
// let res = str.replace(/(\d+)/g, '($1)');
// console.log(res);

// let str = 'x1x x23x x456x xax';
// let res = str.replace(/x(\d+)x/g, `!$1!`);
// console.log(res);

let str = 'aaa@bbb ссс@ddd';
let res = str.replace();
console.log(res);