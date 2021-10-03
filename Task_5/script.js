//Anonymous and IIFE
//a. Print odd numbers in an array
{
  let a = [20, 22, 3, 51, 42, 9, 12, 34];

  const oddNumber = function (a) {
    console.log(a.filter((el) => el % 2 !== 0));
  };

  oddNumber(a);

  (function () {
    console.log(a.filter((el) => el % 2 !== 0));
  })(a);
}

//b. Convert all the strings to title caps in a string array
{
  let a = ["full", "stack", "guvi", "course"];
  const capString = function (a) {
    console.log(
      a.map(
        (el) => el[0].toUpperCase() + el.toUpperCase().slice(1).toLowerCase()
      )
    );
  };

  capString(a);

  (function (a) {
    console.log(
      a.map(
        (el) => el[0].toUpperCase() + el.toUpperCase().slice(1).toLowerCase()
      )
    );
  })(a);
}

// c. Sum of all numbers in an array
{
  let a = [20, 22, 3, 51, 42, 9, 12, 34];
  const sum = function (a) {
    return a.reduce((acc, curr) => (acc += curr));
  };
  console.log(sum(a));

  (function (a) {
    const sum = a.reduce((acc, curr) => (acc += curr));
    console.log(sum);
  })(a);
}

// d. Return all the prime numbers in an array
{
  let a = [2, 5, 3, 51, 42, 9, 12, 34];
  const prime = function (a) {
    let count;
    const primeArr = a.filter((el) => {
      count = 0;
      for (let i = 1; i <= el; i++) {
        if (el % i === 0) {
          count++;
        }
      }
      if (count === 2) {
        return el;
      }
    });
    return primeArr;
  };
  console.log(prime(a));

  (function (a) {
    let count;
    const primeArr = a.filter((el) => {
      count = 0;
      for (let i = 1; i <= el; i++) {
        if (el % i === 0) {
          count++;
        }
      }
      if (count === 2) {
        return el;
      }
    });
    console.log(primeArr);
  })(a);
}
// e. Return all the palindromes in an array
{
  let a = [121, 323, 454, 220, 124];
  const reverse = function (num) {
    const rev = num.toString().split("").reverse().join("");
    return Number(rev);
  };

  const palindrome = function (a) {
    const pal = a.filter((el) => el === reverse(el));
    console.log(pal);
  };

  palindrome(a);

  (function (a) {
    const pal = a.filter((el) => el === reverse(el));
    console.log(pal);
  })(a);
}
// f. Return median of two sorted arrays of same size
{
  let a = [8, 2, 12, 74, 3];
  let b = [45, 3, 4, 1, 77];

  const median = function (a1, a2) {
    console.log(a1, a2);
    const resultArr = a1.concat(a2).sort((a, b) => a - b);
    console.log(resultArr);
    if (resultArr.length % 2 !== 0) {
      const median = resultArr[Math.floor(length / 2)];
      console.log(median);
    } else {
      const median = (resultArr[length / 2] + resultArr[length / 2 - 1]) / 2;
      console.log(median);
    }
  };
  median(a, b);
}
// g. Remove duplicates from an array
{
  let a = [12, 32, 4, 12, 4, 1];

  const removeDuplicates = function (a) {
    let count;
    const result = [];
    a.map((el) => {
      count = 0;
      for (let i = 0; i < a.length; i++) {
        if (el === a[i]) {
          count++;
        }
      }
      if (count === 1) {
        result.push(el);
      }
    });
    console.log(result);
  };

  removeDuplicates(a);

  (function (a) {
    let count;
    const result = [];
    a.map((el) => {
      count = 0;
      for (let i = 0; i < a.length; i++) {
        if (el === a[i]) {
          count++;
        }
      }
      if (count === 1) {
        result.push(el);
      }
    });
    console.log(result);
  })(a);
}
// h. Rotate an array by k times
{
  let a = [2, 3, 4, 1];
  const rotateArr = function (a, k) {
    const rotatedArr = a.concat();
    for (let i = 0; i < k; i++) {
      const firstEl = rotatedArr.shift();
      rotatedArr.push(firstEl);
    }

    console.log(rotatedArr);
  };
  rotateArr(a, 2);
}

// Arrow Functions
// a. Print odd numbers in an array
{
  let a = [20, 22, 3, 51, 42, 9, 12, 34];
  const oddNumber = (a) => {
    console.log(a.filter((el) => el % 2 !== 0));
  };

  oddNumber(a);
}

// b. Convert all the strings to title caps in a string array
{
  let a = ["full", "stack", "guvi", "course"];
  const capString = (a) => {
    console.log(
      a.map(
        (el) => el[0].toUpperCase() + el.toUpperCase().slice(1).toLowerCase()
      )
    );
  };

  capString(a);
}
// c. Sum of all numbers in an array
{
  let a = [20, 22, 3, 51, 42, 9, 12, 34];
  const sum = (a) => {
    return a.reduce((acc, curr) => (acc += curr));
  };
  console.log(sum(a));
}
// d. Return all the prime numbers in an array
{
  let a = [2, 5, 3, 51, 42, 9, 12, 34];
  const prime = (a) => {
    let count;
    const primeArr = a.filter((el) => {
      count = 0;
      for (let i = 1; i <= el; i++) {
        if (el % i === 0) {
          count++;
        }
      }
      if (count === 2) {
        return el;
      }
    });
    return primeArr;
  };
  console.log(prime(a));
}
// e. Return all the palindromes in an array
{
  let a = [121, 323, 454, 220, 124];
  const reverse = (num) => {
    const rev = num.toString().split("").reverse().join("");
    return Number(rev);
  };

  const palindrome = (a) => {
    const pal = a.filter((el) => el === reverse(el));
    console.log(pal);
  };

  palindrome(a);
}
