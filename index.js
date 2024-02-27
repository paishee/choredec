/*
chore declaration type
by paishee

github.com/paishee/choredec
*/


function chore( strings, ...values) {
    let [ name ] = (strings instanceof Array) ? strings : [strings];
    let stuff = name;

    function format(str) {
        return str.replace(":", "").replace("=", "").replace(/ +(?= )/g, "").trim()
    }

    if (name == '') {
        name = values.shift();
        stuff = format(arguments[0][1]);
    }

    let value;
    if (values.length == 0) value = eval(
        format(((stuff.includes(":")) ? stuff.split(":") : stuff.split("=")).pop())
    );
    else value = values[0];

    name = name.split(" ")[0];
    name = format(name);

    return (new Function(`value`, `return ${name} = value`))(value);
}


module.exports = chore;
