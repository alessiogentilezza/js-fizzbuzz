const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Buzz');
    } else if (i % 5 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }

    const squareDom = document.createElement('div');
    squareDom.classList.add('square');
    squareDom.append(i);
    containerDom.append(squareDom);

  }
  
