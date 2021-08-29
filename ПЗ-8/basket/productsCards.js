'use strict';

const pathToProductImages = 'img';
const featuredItemsEl = document.querySelector('.featuredItems');

/**
 * Эта функция принимает один из объектов из массива products в фале products
 * @param {ProductDTO} product объект с информацией о продукет
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `
<div class="featuredItem">  
    
    <div class="featuredImgWrap">
        <img src="${pathToProductImages}/${product.img}" alt="${product.name}">
        <div class="featuredImgDark">
            <button data-productId="${product.Id}">
            <img src="${pathToProductImages}/${product.image}" alt="">
            Add to Cart
            </button>
        </div>
    </div>

        <div class="featuredData>
             <div class="featuredName>
            ${product.name}
             </div>
             <div class="featuredText>
             ${product.description}
            </div>
            <div class="featuredPrice>
            ${product.price}
            </div>
        </div>
</div>
    `;
}
/**
 * *  Функция вставляет карточки товаров в страницу
 * @param {Product DTO} products  массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */

function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки Add to Cart
 */
 function addEventListenerForAddToCartButtons() {
     const addToCartButns = document.querySelectorAll('buton[data-productId]');
     addToCartButns.forEach(function (button) {
         button.addEventListener('click', addedProductHandler)
     } )
 }

 /**
  * Функция обработчик события клика по кнопке Add to cart
  * @param {mouthEvent} event
  */

function addedProductHandler (event) {
    const productId = event.carrentTarget.getAttribute('data-productId');
    addProductIntoBusket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenerForAddToCartButtons();