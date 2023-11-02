function sindhu(a:number,b:number,c:number):number;
function sindhu(a:string,b:string,c:string):String;
function sindhu(a:any,b:any,c:any):any{
return a+b+c;
}
console.log(sindhu(1,2,3));
console.log(sindhu("hi","hello","sin"));