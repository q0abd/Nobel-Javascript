    const sample = {
        'a': 1,
        'b': 2,
        'c': 3
    };

    // var
    let sum = 0;

    // object iteration
    for (value in sample) {
        //sum
        sum += (+sample[value]);
    }
    // result
    console.log("sum:=>", sum);
