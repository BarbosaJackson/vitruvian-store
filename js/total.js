window.onload = function() {
    const storage = localStorage;
    const data = JSON.parse(storage.getItem('cart'));
    let total = 0;
    for(let idx = 0; idx < data.length; idx += 1) {
        total += data[idx].price;
    }
    document.getElementById('precototal').innerHTML = `<div><p>Total: R$ ${total}</p></div>`;
}

function finalizar() {
    const storage = localStorage;
    const data = JSON.parse(storage.getItem('cart'));
    let total = 0;
    for(let idx = 0; idx < data.length; idx += 1) {
        total += data[idx].price;
    }
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    if(nome && email && endereco) {
        addBuy(nome, email, endereco, total);
    } else {
        alert("insira todos os dados");
    }
}