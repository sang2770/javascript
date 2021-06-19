

var date= new Date();
console.log(date);
var year =date.getFullYear();
var month =date.getMonth()+1;
console.log(`${year}/ ${month}`);
console.log(typeof year);

export { default } from './Math.js';
//= import res from './Math.js';
//  export default res