function printDiamond(n) {
   
    for (let i = 1; i <= n; i++) {
        let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(str);
    }
    
    for (let i = n - 1; i >= 1; i--) {
        let str = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
        console.log(str);
    }
}

printDiamond(5);
