let arrBtnAdd = document.querySelectorAll('button');
let table_cart = document.querySelector('.cart');
let emty = document.querySelector('.empty');
let price = document.querySelector('.price');

for (const index in arrBtnAdd) {
    arrBtnAdd[index].onclick = function () {
        addProduct(this);
    };
}

function addProduct(btn) {
    emty.style.display = 'none';
    let row = btn.parentElement.parentElement.cloneNode(true);
    let element_btn = row.querySelector('button');
    element_btn.innerText = 'Xóa';
    element_btn.setAttribute('onclick', 'removeProduct(this)');
    table_cart.appendChild(row);
    tinhTien();
}

function removeProduct(btn) {
    table_cart.removeChild(btn.parentElement.parentElement);
    tinhTien();
}
function tinhTien() {
    let tr = table_cart.getElementsByTagName('tr');
    var tong = 0;
    for (const row of tr) {
        let td = row.getElementsByClassName('gia');
        // console.log(td);
        // console.log(td.innerText);
        let price = td[0].innerText.substr(1);
        tong += price * 1;
    }
    price.innerText = `$${tong}`;
}
