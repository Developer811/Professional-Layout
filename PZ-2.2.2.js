const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

//  let getRequest = (url,cb) => {
// let xhr = new XMLHt tpRequest();
// window.ActiveXObject -> xhr = new ActiveXObject
// xhr.open("GET", url, true);
// xhr.onreadystatechange = ( ) => {
// if (xhr.readyState === 4) {
//     if(xhr.status !== 200) {
//         console.log('Error');
//     } else {
//         cb(xhr.responseText);
//     }
// }
// };
// xhr.send();
//  };

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts();
        .then(data => {
            this.goods = [...data];
            this.render() // вывод товаров на страницу
        });
      
    
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebooks', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render();
        }
    }
}

class ProductItem {
    constructor(product, img = 'https//via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`
    }
}

let list = new ProductItem();