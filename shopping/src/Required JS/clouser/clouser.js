// let url = 'https://fakestoreapi.com/products';
// let funDta = function(url){
//     dataOuter(url)
// };
// funDta(url);


// function dataOuter(dataFnUra) {
//     const allData = []
//     fetch(dataFnUra)
//     .then(res => res.json())
//     .then(data=>{
//         data.map(product=>{
//             allData = product;
//         })
//     })
//     return allData;
// }

let url = 'https://fakestoreapi.com/products';

let fetchData = function(url) {
    dataOuter(url)
        .then(allData => {
            console.log(allData);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};

fetchData(url);

function dataOuter(dataFnUrl) {
    return new Promise((resolve, reject) => {
        fetch(dataFnUrl)
            .then(res => res.json())
            .then(data => {
                const allData = data.map(product => product.id);
                resolve(allData);
            })
            .catch(error => {
                reject(error);
            });
    });
}



