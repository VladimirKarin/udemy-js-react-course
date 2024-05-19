for (let i = 0; i <= 5; i++) {
    console.log(`=->  ${i}`);

    for (let j = 0; j <= 5; j++) {
        console.log(`   ${j}`);
    }
}

let result = '';
const length = 10;

for (let i = 0; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
        console.log(result);
    }
    result += '\n';
}

first: for (let i = 0; i <= 5; i++) {
    console.log(`=->  ${i}`);

    for (let j = 0; j <= 5; j++) {
        console.log(`   ${j}`);

        for (let k = 0; k <= 5; k++) {
            if (k === 2) break first;
            console.log(` ${k}`);
        }
    }
}
