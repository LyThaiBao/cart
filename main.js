var btnAdd = document.querySelectorAll(".product__btn");
btnAdd.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    var closeNotification = document.querySelector(
      ".notification__add--success"
    );
    closeNotification.classList.remove("hide__overlay");
    var itemTarget = e.target.parentElement.parentElement;
    var containProduct = document.querySelector(".list__item");
    var productInCart = containProduct.querySelectorAll(".item");
    var newSection = document.createElement("section");
    newSection.classList.add("item");
    newSection.innerHTML = `
                <span class="item__name">${
                  itemTarget
                    .querySelector(".product__imfor")
                    .querySelector(".product__name").innerText
                }</span>
                <div class="item__img">
                  <img src="${
                    itemTarget
                      .querySelector(".product__img")
                      .querySelector("img").src
                  }" alt="" />
                </div>
                <div class="item__quality">
                  <div>Số lượng:</div>
                  <div><input type="number" name="quality" id="" min="0" value="1" /></div>
                </div>
                <span class="item__price">${
                  itemTarget
                    .querySelector(".product__imfor")
                    .querySelector(".product__price").innerText
                }</span>
                <button class="delete__item">Delete</button>
        `;
    containProduct.appendChild(newSection);
    totalPrice(containProduct);
    deleteItem(containProduct);
  });
});

// --------------------------Delete Function----------------------------------------
function deleteItem(listItem) {
  var btnDelete = document.querySelectorAll(".delete__item");
  btnDelete.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      var itemBeDelete = e.target.parentElement;
      itemBeDelete.remove();
      totalPrice(listItem);
    });
  });
}
// --------------------------Calc total Function----------------------------------------
function totalPrice(listItem) {
  var allProduct = listItem.querySelectorAll(".item");
  var total = 0;
  var priceUI = document.querySelector(".total__price");
  // console.log(price.innerHTML);
  if (allProduct.length === 0) {
    priceUI.innerHTML = 0;
  } else {
    for (var i = 0; i < allProduct.length; i++) {
      var price = allProduct[i].querySelector(".item__price").innerHTML;
      var quality = allProduct[i]
        .querySelector(".item__quality")
        .querySelector('input[name="quality"]').value;
      total += price * quality;
      priceUI.innerHTML = total;
    }
  }
  increaseQuality(allProduct, listItem);
}
// --------------------------Quality Function----------------------------------------
function increaseQuality(allProduct, listItem) {
  allProduct.forEach((product, index) => {
    var quality = product.querySelector('input[name="quality"]');
    quality.addEventListener("change", (e) => {
      totalPrice(listItem);
    });
  });
}
// ----------------------------Check Cart------------------------------------------------
function checkCart(newProduct, listProductInCart) {
  listProductInCart.forEach((item, index) => {
    {
      alert("Sản phẩm đã có trong giỏ hàng");
      return;
    }
  });
}

function displayCart() {
  var iconCart = document.querySelector(".icon__cart");
  var boxCart = document.querySelector(".cart");
  var iconClose = document.querySelector(".close");
  var overlay = document.querySelector(".overlay");
  var closeNotification = document.querySelector(
    ".notification___header .fa-square-xmark"
  );
  iconCart.addEventListener("click", (e) => {
    boxCart.classList.remove("hide__cart");
    overlay.classList.remove("hide__overlay");
  });
  iconClose.addEventListener("click", (e) => {
    boxCart.classList.add("hide__cart");
    overlay.classList.add("hide__overlay");
  });
  overlay.addEventListener("click", (e) => {
    boxCart.classList.add("hide__cart");
    overlay.classList.add("hide__overlay");
  });
  closeNotification.addEventListener("click", (e) => {
    console.log(closeNotification.parentElement.parentElement);
    closeNotification.parentElement.parentElement.classList.add(
      "hide__overlay"
    );
    overlay.classList.add("hide__overlay");
  });
}
displayCart();
