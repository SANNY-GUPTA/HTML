// let a = new Promise(function (resolved, rejected) {
//     let xhr = new XMLHttpRequest;
//     xhr.open('GET', 'data.txt', true);
//     xhr.send();
//     xhr.onload = function () {
//         if (xhr.statusText == "OK") {
//             resolved(xhr.responseText);
//         }
//         else{
//             rejected('something went wrong!')
//         }
//     }
// });
// a.then((data)=>
// {
//     console.log(data)
// }).catch((err)=>
// {
//     console.error(err)
// });
let v = new Promise(function (resolved, rejected) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'products.json', true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.statusText == "OK") {
            resolved(xhr.responseText);
        }
        else{
            rejected('something went wrong!')
        }
    }
});
v.then((data)=>
{
    console.log(data)
}).catch((err)=>
{
    console.error(err)
});