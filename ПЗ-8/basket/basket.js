'use strict';

const openbasketBtn = document.querySelector('.cartIconWrap');
const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

openbasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ - это id продукта, значение - это количество товара в корзине, например 
 { 1: 10
   3: 2
 }
 */
let basket = {};

/**
 * Метод добавляет продукт в объект basket
 * @param {number} productId
 */

function addProductToObject(productId); {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция срабатывает, когда надо отрисовать продукт в корзине
 * @param {number} productId
 */
function renderProductInbasket(productId) {
    let productExist = document.querySelector(`.poductCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);        
    } else {
        renderNewProductInbasket(productId);
    }
}

/**
 * Функция отрисовывает новый товар в корзине
 * @param {number} productId
 */
function renderNewProductInbasket(productId) {
    let productRow = `
   <div class="basketRow">
        <div>${products[productId].name}</div>
        <div>
        <span class="productCount" data-productId="${productId}">1</span> шт.
        </div>
        <div>$${products[productId].price}</div>
        <div>
        $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span> 
        </div>
    </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

/**
 * Функция увеличивает количество товара в строке в корзине
 * @param {number} productId
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}
/**
 * Функция увеличивает счётчик количества товаров рядом с иконкой корзины
 */
function increaseProductCount() {
    basketCounterEl.textContent++;
}
/**
 * Функция пересчитывает стоимость товара, умноженное на количество товара в корзине
 */
function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция пересчитывает общую стоимость корзины и выводит это значение на страницу
 */
function calculateAndRenderTotalbasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

/**
 * Эта функция срабатывает, когда добавляется новый элемент в корзину
 * @param {number} productId
 */

function addProductIntobasket(productId) {
    increaseProductCount();
    addProductToObject();
    renderProductInbasket(productId);
    calculateAndRenderTotalbasketSum();
}