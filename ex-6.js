let height = undefined;
let result;

function nullistCoalescing(height) {
     return height ?? 'Height is not defined';
}
result = nullistCoalescing(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
