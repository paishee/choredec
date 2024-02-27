/*
chore declaration type
by paishee

github.com/paishee/choredec
*/


function chore( strings, ...values) {
    let args = values.map( (v, i) => `arg${i}` );
    let cmd = strings.map( (v, i) => (i == strings.length-1) ? v: `${v}${args[i]}` ).join("");
    return (new Function(...args, `return ${cmd}`))(...values);
}


module.exports = chore;
