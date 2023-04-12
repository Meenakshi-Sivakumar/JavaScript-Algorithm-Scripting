//return a function return its arguments.
function redundantFunc(str){
    return ()=>str;
}

const f1=redundantFunc("Meenu");
console.log(f1());