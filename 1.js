var x = 10;

const fn = () => {
    if (true) {
        x = 1;
        let y = 2;
    }
}
console.log(x);

fn();