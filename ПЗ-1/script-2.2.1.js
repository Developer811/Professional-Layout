const goods = [
  {id: 1, title: 'Shirt', price: 150},
  {id: 2, title: 'Socks', price: 50},
  {id: 3, title: 'Jacket', price: 350},
  {id: 4, title: 'Shoes', price: 250},
  // {id: 5, title: 'Coat', price: 1250 },
  // {id: 6, title: 'Tie', price: 150 },
  // {id: 7, title: 'Hat', price: 200 }
];

// const renderGoodsItem = (x) => {
//   return `<div class="goods-item">
//   <h3>${x.title}</h3>
//   <p>${x.price}</p></div>`;
// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item));
//   document.querySelector('.goods-list').innerHTML = goodsList;
  
// };

// renderGoodsList(goods);

const renderGoods = (good, img = 'https//via.placeholder.com/200x150') => {
  return `<div class="product-block">
              <img src="${img}">
              <h3>${good.title}</h3> 
              <p>${good.title}<p>
              <button class="buy-btn">Купить</button>
          </div>`
};
const renderPage = list => {
  document.querySelector('.goods').innerHTML = list.map(item => renderGoods(item)).join('');
};
renderPage(goods);

