function palindrome(str) {
    const newStr = str.replace(/[^A-Za-z0-9]/g, '');
    const lowerCase = newStr.toLowerCase();

    const array = lowerCase.split('');
    if (transformedStr.length % 2 !== 0) {
        array.splice(Math.floor(array.length / 2), 1);
    }
    const half = array.length / 2;
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(-half);
    if (JSON.stringify(firstHalf) === JSON.stringify(secondHalf.reverse())) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("My age is 0, n 0 si ega ym."));
