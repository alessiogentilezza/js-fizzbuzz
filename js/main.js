const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    const squareDom = document.createElement('div');
    squareDom.classList.add('square');
    containerDom.append(squareDom);

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        squareDom.classList.add('red');
        squareDom.append('FizzBuzz');


    } else if (i % 3 === 0) {
        console.log('Fizz');
        squareDom.classList.add('green');
        squareDom.append('Fizz');


    } else if (i % 5 === 0) {
        console.log('Buzz');
        squareDom.classList.add('orange');
        squareDom.append('Buzz');

    } else {
        console.log(i);
        squareDom.append(i);
    }

}