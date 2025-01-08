let str = "hello world";
let fstr = "world";
let index = str.indexOf(fstr);

if (index !== -1) {
    console.log(`The first occurrence of '${fstr}' is at index ${index}.`);
} else {
    console.log(`'${fstr}' is not found in the string.`);
}
