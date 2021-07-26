window.onload = setTimeout(api_get('products', createHomePage), 3000);

function createHomePage(data) {
    const lenProd = data.length;
    console.log(data);
    let homePage = `<div class='container'><div class='row'>`;
    for(let idx = 0; idx < lenProd; idx += 1) {
        homePage += `
        <div class='col'>
        <div class="card">
            <img src="${data[idx].imageURL}" alt="Avatar" style="width:100%">
            <div class="container">
                <p><b>${data[idx].name}</b></p>
                <p>R$ ${data[idx].price}</p>
                <a href="https://barbosajackson.github.io/vitruvianStore/pages/cadeira1.html">ver mais</a> 
            </div>
        </div> 
        </div>
        `;
    }
    homePage += `</div></div>`
    document.getElementById('body').innerHTML = homePage;
}