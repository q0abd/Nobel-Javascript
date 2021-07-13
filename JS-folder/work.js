    const sample = {
        a: 1,
        b: 2,
        c: 3
    };

    // var
    let sum = 0;

    // object iteration
    for (key in sample) {
        //sum
        sum += (sample[key]);
    }
    // result
    console.log(sum);
