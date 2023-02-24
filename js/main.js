const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('red');
        squareDom.append('FizzBuzz');
        containerDom.append(squareDom);
    

    } else if (i % 3 === 0) {
        console.log('Fizz');
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('green');
        squareDom.append('Fizz');
        containerDom.append(squareDom);


    } else if (i % 5 === 0) {
        console.log('Buzz');
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.classList.add('orange');
        squareDom.append('Buzz');
        containerDom.append(squareDom);

    } else {
        console.log(i);
        const squareDom = document.createElement('div');
        squareDom.classList.add('square');
        squareDom.append(i);
        containerDom.append(squareDom);


    }

    // const squareDom = document.createElement('div');
    // squareDom.classList.add('square');
    // squareDom.append(i);
    // containerDom.append(squareDom);

}

