let n= 10;
let n1=0;
let n2=1;

let next=n2;
let count= 1;

while(count<=n){
    console.log(next+" ");
    count++;
    [n1,n2]=[n2,next];
    next=n1+n2;

}

console.log();