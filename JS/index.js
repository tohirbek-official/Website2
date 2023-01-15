window.addEventListener("load", () => {
  const Drop = document.querySelector(".drop_Down");
  const DropDown = document.querySelector(".brands-drop-down");
  const DropIcon = document.querySelector(".dropDwn-title img");

  function dropDownAdd() {
    DropDown.style.display = "block";
    DropIcon.style.transform = "rotate(180deg)";
  }
  Drop.addEventListener("mouseenter", dropDownAdd);

  function DropRemove() {
    DropDown.style.display = "none";
    DropIcon.style.transform = "rotate(0deg)";
  }
  Drop.addEventListener("mouseleave", DropRemove);

  const SearchIcon = document.querySelector(".nav-search-img img");
  const Search = document.querySelector(".nav-search");
  const NavCenter = document.querySelector(".nav-center");

  function EspaceSeach() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        Search.style.display = "none";
        NavCenter.style.display = "block";
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
      document.querySelector("nav").style.padding = "14px 0px";
    } else if (window.pageYOffset < 130) {
      document.querySelector("nav").style.padding = "20px 0px";
    }
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("search")) {
      Search.style.display = "block";
      NavCenter.style.display = "none";
      EspaceSeach();
    } else {
      Search.style.display = "none";
      NavCenter.style.display = "block";
    }
  });

  const NavRes = document.querySelector(".nav-responsive");
  const Res = document.querySelector(".responsive");
  const ResCancel = document.querySelector(".res-cancel");

  NavRes.addEventListener("click", function (e) {
    NavCenter.classList.toggle("toggleRight");
    if (NavCenter.classList.contains("toggleRight")) {
      ResCancel.style.display = "block";
    } else {
      ResCancel.style.display = "none";
    }
  });

  let product = [
    { id: 1, name: "Apple Smart I", img: "/Image/product-1.png", pirce: "23" },
    {
      id: 2,
      name: "Apple Smart II",
      img: "/Image/product-2.png",
      pirce: "27",
    },
    {
      id: 3,
      name: "Apple Smart III",
      img: "/Image/product-3.png",
      pirce: "43",
    },
    {
      id: 4,
      name: "Apple Smart IV",
      img: "/Image/product-4.png",
      pirce: "27",
    },
    {
      id: 5,
      name: "Samsung Watch Pro",
      img: "/Image/product-5.png",
      pirce: "73",
    },
    { id: 6, name: "Fitbit Max 1", img: "/Image/product-6.png", pirce: "43" },
    { id: 7, name: "Apple Smart I", img: "/Image/product-1.png", pirce: "53" },
    {
      id: 8,
      name: "Apple Smart II",
      img: "/Image/product-2.png",
      pirce: "23",
    },
    {
      id: 9,
      name: "Apple Smart III",
      img: "/Image/product-3.png",
      pirce: "83",
    },
    {
      id: 11,
      name: "Apple Smart IV",
      img: "/Image/product-4.png",
      pirce: "25",
    },
    {
      id: 12,
      name: "Samsung Watch Pro",
      img: "/Image/product-5.png",
      pirce: "28",
    },
    {
      id: 13,
      name: "Fitbit Max 1",
      img: "/Image/product-6.png",
      pirce: "254",
    },
    {
      id: 14,
      name: "Apple Smart I",
      img: "/Image/product-1.png",
      pirce: "87",
    },
    {
      id: 15,
      name: "Apple Smart II",
      img: "/Image/product-2.png",
      pirce: "13",
    },
    {
      id: 16,
      name: "Apple Smart III",
      img: "/Image/product-3.png",
      pirce: "23",
    },
    {
      id: 17,
      name: "Apple Smart IV",
      img: "/Image/product-4.png",
      pirce: "29",
    },
    {
      id: 18,
      name: "Samsung Watch Pro",
      img: "/Image/product-5.png",
      pirce: "23",
    },
    {
      id: 19,
      name: "Fitbit Max 1",
      img: "/Image/product-6.png",
      pirce: "278",
    },
    {
      id: 20,
      name: "Apple Smart I",
      img: "/Image/product-1.png",
      pirce: "255",
    },
    {
      id: 21,
      name: "Apple Smart II",
      img: "/Image/product-2.png",
      pirce: "253",
    },
    {
      id: 22,
      name: "Apple Smart III",
      img: "/Image/product-3.png",
      pirce: "43",
    },
    {
      id: 23,
      name: "Apple Smart IV",
      img: "/Image/product-4.png",
      pirce: "288",
    },
    {
      id: 24,
      name: "Samsung Watch Pro",
      img: "/Image/product-5.png",
      pirce: "43",
    },
    {
      id: 25,
      name: "Fitbit Max 1",
      img: "/Image/product-6.png",
      pirce: "234",
    },
  ];

  let carts = [];

  function ProductCard(id, img, title, price) {
    return ` <div class="product-box">
  <div class="product-img">
    <img src="${img}" />
  </div>
  <div class="product-box-title">${title}</div>
  <div class="product-star">
    <img src="/Image/star.svg" />
  </div>
  <div class="product-price">
    <span>$4500.00</span><span>$${price}</span>
  </div>
  <div class="porduct-cart">
    <div class="cart">
    <img src="/Image/add-cart.png" id="${id}" class="shop" />
    </div>
    <div class="follow">
      <img src="./Image/follow.svg"  class="active" />
    </div>
  </div>
</div>`;
  }
  let ProducContent = document.querySelector(".product-content");
  product.forEach(({ id, img, name, pirce }) => {
    let product = ProductCard(id, img, name, pirce);
    ProducContent.innerHTML += product;
  });

  let follow = document.querySelectorAll(".active");
  ProducContent.addEventListener("click", (e) => {
    let rr = e.target;
    follow.forEach((z) => {
      if (rr == z) {
        z.src = "./Image/follow-active.svg";
      }
    });
  });
  let ProCart = document.querySelectorAll(".shop");
  function Cart() {
    ProCart.forEach((e) => {
      e.addEventListener("click", (e) => {
        let target = e.target;
        let newProduct = product.find((e) => e.id == target.id);
        carts.push(newProduct);
        shopCount();
        modal();
        tlPrice();
      });
    });
  }
  Cart();

  function shopCount() {
    let data_count = document.querySelector("[data-count]");
    let cartLen = carts.length;
    let data = (data_count.dataset.count = cartLen);
  }
  function Modal() {
    const ModalCart = document.querySelector(".navbar-shop");
    let CartModal = document.querySelector(".cart-modal");
    ModalCart.addEventListener("click", () => {
      CartModal.style.right = "0%";
      document.body.style.overflow = "hidden";
    });
    let modalCancel = document.querySelector(".modal-cancel");
    modalCancel.addEventListener("click", () => {
      document.body.style.overflow = "";
      CartModal.style.right = "-100%";
      ("");
    });
  }
  Modal();
  function ModalCart(id, img, name, price) {
    return `<div class="cart-box">
    <div class="cart-shopping-img">
    <img src="${img}" />
    </div>
    <div class="cart-shopping-title">
      <span>${name}</span>
    </div>
    <div class="card-price-delete">
    <div class="cart-price">
    <span>$${price} </span>
    </div>
      <div class="cart-delete" id=" ${id}">
      <img src="./Image/delete.svg" />
      </div>
      </div>
  </div>`;
  }
  let cartShop = document.querySelector(".cart-shop");
  function modal() {
    cartShop.innerHTML = "";
    carts.forEach(({ id, img, name, pirce }) => {
      let newCart = ModalCart(id, img, name, pirce);
      cartShop.innerHTML += newCart;
    });
  }

  function noCart() {
    if (carts.length == 0) {
      document.querySelector(".cart-shop").innerHTML = `<div class="no-cart">
      <img src="/Image/no cart.png">
      </div>`;
    }
  }
  noCart();
  cartShop.addEventListener("click", (e) => {
    let btn = e.target.parentNode;
    if (btn.id) {
      carts = carts.filter((el) => el.id != btn.id);
      shopCount();
      modal();
      noCart();
      tlPrice();
    }
  });
  let priceCart = document.querySelector(".price-shop-cart");
  function tlPrice() {
    priceCart.innerHTML = `Total amount: ${carts.reduce(
      (acc, el) => acc + +el.pirce,
      0
    )} $`;
  }

  let usermodal = document.querySelector(".nav-user-img");

  let regContent = document.querySelector(".log-res-content");
  usermodal.addEventListener("click", (e) => {
    regContent.classList.toggle("toggle");
    if (regContent.classList.contains("toggle")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  regContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("log-res-content")) {
      regContent.classList.remove("toggle");
      document.body.style.overflow = "";
    }
  });
});
