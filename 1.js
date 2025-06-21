const fn = () => {
    if (true) {
        var x = 1;
        let y = 2;
    }
    console.log(y);
    console.log(x);
}

fn();