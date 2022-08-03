const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let append = [...cats, "Broom"];
    return append;
}
function prependCat(name){
    let pre = ["Arnold", ...cats];
    return pre;
}
function removeLastCat(){
    let removeLast = cats.slice(0, -1);
    return removeLast;
}
function removeFirstCat(){
    let removeFirst = cats.slice(1);
    return removeFirst;
}