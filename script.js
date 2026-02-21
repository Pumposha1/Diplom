document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ДЕМО-ДАННЫЕ (ТЕСТОВЫЕ ТОВАРЫ)
  // картинки — Unsplash (обычно не блокируется, в отличие от маркетплейсов)
  // =========================
  const PRODUCTS = [
    // ELECTRONICS
    {
      id: "e1",
      category: "electronics",
      name: "Смартфон Galaxy A15 (демо)",
      price: 14990,
      color: "Чёрный",
      size: '6.5"',
      article: "E-1001",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      description: "Смартфон с большим экраном, базовая камера, хороший вариант для повседневных задач."
    },
    {
      id: "e2",
      category: "electronics",
      name: "Наушники Xiaomi Buds (демо)",
      price: 8990,
      color: "Белый",
      size: "Универсальный",
      article: "E-1002",
      source: "AliExpress",
      url: "https://aliexpress.ru/",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Headphones_1.jpg",
      description: "Беспроводные наушники: шумоподавление, кейс, комфортная посадка."
    },
    {
      id: "e3",
      category: "electronics",
      name: "Ноутбук IdeaPad 3 (демо)",
      price: 35990,
      color: "Серый",
      size: '14"',
      article: "E-1003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
      description: "Учёба, браузер, документы. Демо-карточка для примера выдачи."
    },

    // CLOTHES
    {
      id: "c1",
      category: "clothes",
      name: "Футболка Nike Air (демо)",
      price: 2490,
      color: "Белый",
      size: "M",
      article: "C-2001",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
      description: "Базовая футболка, удобная посадка. Для примера фильтра по размеру/цвету."
    },
    {
      id: "c2",
      category: "clothes",
      name: "Толстовка Adidas Originals (демо)",
      price: 4990,
      color: "Чёрный",
      size: "L",
      article: "C-2002",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80",
      description: "Тёплая толстовка, капюшон, карман-кенгуру."
    },
    {
      id: "c3",
      category: "clothes",
      name: "Кроссовки Puma RS-X (демо)",
      price: 8990,
      color: "Серый",
      size: "42",
      article: "C-2003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1528701800489-20be9c1ea0dc?auto=format&fit=crop&w=1200&q=80",
      description: "Кроссовки: демо-товар для категории «Одежда»."
    },

    // BEAUTY
    {
      id: "b1",
      category: "beauty",
      name: "Тональный крем Fit Me (демо)",
      price: 590,
      color: "Натуральный",
      size: "30 мл",
      article: "B-3001",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1612810806695-30f7a8253c45?auto=format&fit=crop&w=1200&q=80",
      description: "Лёгкое покрытие, выравнивание тона. Демо для визуала."
    },
    {
      id: "b2",
      category: "beauty",
      name: "Помада Rouge (демо)",
      price: 690,
      color: "Красный",
      size: "3.5 г",
      article: "B-3002",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      description: "Яркий оттенок, демо-описание для карточки."
    },
    {
      id: "b3",
      category: "beauty",
      name: "Парфюм Sauvage (демо)",
      price: 11990,
      color: "—",
      size: "60 мл",
      article: "B-3003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      description: "Демо-товар: пример цены, источника и описания."
    },

    // HOME
    {
      id: "h1",
      category: "home",
      name: "Чайник электрический (демо)",
      price: 1990,
      color: "Белый",
      size: "1.7 л",
      article: "H-4001",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1545223124-5d2f6c59a8f5?auto=format&fit=crop&w=1200&q=80",
      description: "Быстрый нагрев, автоотключение. Демо для каталога."
    },
    {
      id: "h2",
      category: "home",
      name: "Настольная лампа (демо)",
      price: 1590,
      color: "Чёрный",
      size: "—",
      article: "H-4002",
      source: "AliExpress",
      url: "https://aliexpress.ru/",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      description: "Тёплый свет, минимализм. Демо-карточка."
    },
    {
      id: "h3",
      category: "home",
      name: "Робот-пылесос (демо)",
      price: 24990,
      color: "Белый",
      size: "—",
      article: "H-4003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1581579185169-02b1298c8b39?auto=format&fit=crop&w=1200&q=80",
      description: "Автоуборка, расписание. Демо для категории «Для дома»."
    },
  ];

  // =========================
  // DOM
  // =========================
  const homePage = document.getElementById("homePage");
  const favoritesPage = document.getElementById("favoritesPage");
  const cartPage = document.getElementById("cartPage");
  const profilePage = document.getElementById("profilePage");

  const navLinks = document.querySelectorAll(".nav-link");
  const favBadge = document.getElementById("favBadge");
  const cartBadge = document.getElementById("cartBadge");

  const catalog = document.getElementById("catalog");
  const catalogTitle = document.getElementById("catalogTitle");
  const backToCategories = document.getElementById("backToCategories");

  const productsGrid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.getElementById("searchDropdown");
  const colorSelect = document.getElementById("colorSelect");
  const sizeSelect = document.getElementById("sizeSelect");
  const priceSelect = document.getElementById("priceSelect");

  const favoritesGrid = document.getElementById("favoritesGrid");
  const favoritesEmpty = document.getElementById("favoritesEmpty");

  const cartList = document.getElementById("cartList");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const profileForm = document.getElementById("profileForm");
  const resetProfileBtn = document.getElementById("resetProfileBtn");
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePhone = document.getElementById("profilePhone");
  const profileCity = document.getElementById("profileCity");
  const statFav = document.getElementById("statFav");
  const statCart = document.getElementById("statCart");

  // modal
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalMeta = document.getElementById("modalMeta");
  const modalGoLink = document.getElementById("modalGoLink");
  const modalFavBtn = document.getElementById("modalFavBtn");
  const modalCartBtn = document.getElementById("modalCartBtn");

  // =========================
  // STORAGE
  // =========================
  const LS_FAV = "clickmarket_favorites";
  const LS_CART = "clickmarket_cart";
  const LS_PROFILE = "clickmarket_profile";

  const getFavIds = () => new Set(JSON.parse(localStorage.getItem(LS_FAV) || "[]"));
  const setFavIds = (set) => localStorage.setItem(LS_FAV, JSON.stringify([...set]));

  // cart: {id: qty}
  const getCart = () => JSON.parse(localStorage.getItem(LS_CART) || "{}");
  const setCart = (obj) => localStorage.setItem(LS_CART, JSON.stringify(obj));

  const fmt = (n) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";

  let activeCategory = null;
  let modalProductId = null;

  // =========================
  // NAVIGATION (SPA)
  // =========================
  function setActiveNav(action) {
    navLinks.forEach(a => a.classList.toggle("is-active", a.dataset.action === action));
  }

  function showPage(action) {
    setActiveNav(action);

    homePage.classList.toggle("hidden", action !== "home");
    favoritesPage.classList.toggle("hidden", action !== "favorites");
    cartPage.classList.toggle("hidden", action !== "cart");
    profilePage.classList.toggle("hidden", action !== "profile");

    if (action === "favorites") renderFavorites();
    if (action === "cart") renderCart();
    if (action === "profile") renderProfile();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const action = link.dataset.action;
      showPage(action);
    });
  });

  // =========================
  // CATEGORY -> CATALOG
  // =========================
  const catButtons = document.querySelectorAll(".cat-card");

  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      activeCategory = cat;

      catButtons.forEach(b => b.classList.toggle("is-active", b.dataset.category === cat));

      catalogTitle.textContent = categoryName(cat);
      catalog.classList.remove("hidden");

      // reset filters
      searchInput.value = "";
      priceSelect.value = "";
      buildFilterOptions(cat);

      renderCatalog();
      closeDropdown();

      // прокрутка к каталогу (чтобы товары были ниже категорий)
      catalog.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  backToCategories.addEventListener("click", () => {
    activeCategory = null;
    catalog.classList.add("hidden");
    catButtons.forEach(b => b.classList.remove("is-active"));
    closeDropdown();
  });

  function categoryName(cat){
    return ({
      electronics: "Электроника",
      clothes: "Одежда",
      beauty: "Косметика",
      home: "Для дома",
    })[cat] || "Каталог";
  }

  // =========================
  // FILTERS & SEARCH
  // =========================
  function buildFilterOptions(cat){
    const items = PRODUCTS.filter(p => p.category === cat);

    const colors = uniq(items.map(p => p.color).filter(Boolean));
    const sizes = uniq(items.map(p => p.size).filter(Boolean));

    fillSelect(colorSelect, colors, "Любой");
    fillSelect(sizeSelect, sizes, "Любой");
  }

  function fillSelect(select, values, defaultText){
    select.innerHTML = "";
    const opt0 = document.createElement("option");
    opt0.value = "";
    opt0.textContent = defaultText;
    select.appendChild(opt0);

    values.forEach(v => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }

  function uniq(arr){
    return [...new Set(arr)].sort((a,b) => String(a).localeCompare(String(b), "ru"));
  }

  function parsePriceRange(val){
    if (!val) return null;
    const [a,b] = val.split("-").map(Number);
    if (Number.isFinite(a) && Number.isFinite(b)) return {min:a, max:b};
    return null;
  }

  function applyFilters(items){
    const q = searchInput.value.trim().toLowerCase();
    const color = colorSelect.value;
    const size = sizeSelect.value;
    const pr = parsePriceRange(priceSelect.value);

    return items.filter(p => {
      const okQ = !q || p.name.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q);
      const okC = !color || p.color === color;
      const okS = !size || p.size === size;
      const okP = !pr || (p.price >= pr.min && p.price <= pr.max);
      return okQ && okC && okS && okP;
    });
  }

  [searchInput, colorSelect, sizeSelect, priceSelect].forEach(el => {
    el.addEventListener("input", () => {
      renderCatalog();
      renderDropdown();
    });
    el.addEventListener("change", () => {
      renderCatalog();
      renderDropdown();
    });
  });

  document.addEventListener("click", (e) => {
    if (!searchDropdown.contains(e.target) && e.target !== searchInput) closeDropdown();
  });

  function renderDropdown(){
    if (!activeCategory) return;

    const q = searchInput.value.trim().toLowerCase();
    if (!q) { closeDropdown(); return; }

    const base = PRODUCTS.filter(p => p.category === activeCategory);
    const filtered = applyFilters(base)
      .slice()
      .sort((a,b) => a.price - b.price)
      .slice(0, 6);

    if (filtered.length === 0) { closeDropdown(); return; }

    searchDropdown.innerHTML = "";
    filtered.forEach(p => {
      const row = document.createElement("div");
      row.className = "dd-item";
      row.innerHTML = `
        <div class="dd-name">${escapeHtml(p.name)}</div>
        <div class="dd-price">${fmt(p.price)}</div>
      `;
      row.addEventListener("click", () => {
        closeDropdown();
        openModal(p.id);
      });
      searchDropdown.appendChild(row);
    });

    searchDropdown.classList.remove("hidden");
  }

  function closeDropdown(){
    searchDropdown.classList.add("hidden");
    searchDropdown.innerHTML = "";
  }

  // =========================
  // CATALOG RENDER
  // =========================
  function renderCatalog(){
    if (!activeCategory) return;

    const base = PRODUCTS.filter(p => p.category === activeCategory);
    const items = applyFilters(base).slice().sort((a,b) => a.price - b.price);

    productsGrid.innerHTML = "";

    if (items.length === 0){
      productsGrid.innerHTML = `<div class="empty">Ничего не найдено по фильтрам.</div>`;
      return;
    }

    items.forEach(p => {
      productsGrid.appendChild(productCard(p));
    });

    updateBadgesAndStats();
  }

  function productCard(p){
    const favIds = getFavIds();
    const cart = getCart();

    const card = document.createElement("div");
    card.className = "card";

    const isFav = favIds.has(p.id);
    const inCart = Boolean(cart[p.id]);

    card.innerHTML = `
      <img class="p-img" src="${p.image}" alt="${escapeHtml(p.name)}">
      <div class="p-body">
        <div class="p-top">
          <h3 class="p-title">${escapeHtml(p.name)}</h3>
          <button class="icon-btn ${isFav ? "is-on" : ""}" title="В избранное">${isFav ? "❤️" : "🤍"}</button>
        </div>
        <div class="p-source">${escapeHtml(p.source)}</div>
        <div class="p-price">${fmt(p.price)}</div>

        <div class="p-actions">
          <button class="btn-primary">Подробнее</button>
          <button class="btn-ghost">${inCart ? "В корзине" : "В корзину"}</button>
        </div>
      </div>
    `;

    const img = card.querySelector(".p-img");
    img.addEventListener("error", () => {
      // безопасный фолбэк, если картинка вдруг не грузится
      img.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60";
    });

    const favBtn = card.querySelector(".icon-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(p.id);
      renderCatalog();
    });

    const moreBtn = card.querySelector(".btn-primary");
    moreBtn.addEventListener("click", () => openModal(p.id));

    const cartBtn = card.querySelectorAll(".btn-ghost")[0];
    cartBtn.addEventListener("click", () => {
      addToCart(p.id, 1);
      renderCatalog();
    });

    return card;
  }

  // =========================
  // FAVORITES
  // =========================
  function toggleFavorite(id){
    const fav = getFavIds();
    if (fav.has(id)) fav.delete(id);
    else fav.add(id);
    setFavIds(fav);
    updateBadgesAndStats();
  }

  function renderFavorites(){
    const fav = getFavIds();
    const items = PRODUCTS.filter(p => fav.has(p.id)).sort((a,b) => a.price - b.price);

    favoritesGrid.innerHTML = "";
    favoritesEmpty.classList.toggle("hidden", items.length !== 0);

    items.forEach(p => favoritesGrid.appendChild(productCardForFav(p)));

    updateBadgesAndStats();
  }

  function productCardForFav(p){
    const cart = getCart();
    const inCart = Boolean(cart[p.id]);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="p-img" src="${p.image}" alt="${escapeHtml(p.name)}">
      <div class="p-body">
        <div class="p-top">
          <h3 class="p-title">${escapeHtml(p.name)}</h3>
          <button class="icon-btn is-on" title="Убрать из избранного">❤️</button>
        </div>
        <div class="p-source">${escapeHtml(p.source)}</div>
        <div class="p-price">${fmt(p.price)}</div>

        <div class="p-actions">
          <button class="btn-primary">Подробнее</button>
          <button class="btn-ghost">${inCart ? "В корзине" : "В корзину"}</button>
        </div>
      </div>
    `;

    const img = card.querySelector(".p-img");
    img.addEventListener("error", () => {
      img.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60";
    });

    const favBtn = card.querySelector(".icon-btn");
    favBtn.addEventListener("click", () => {
      toggleFavorite(p.id);
      renderFavorites();
    });

    card.querySelector(".btn-primary").addEventListener("click", () => openModal(p.id));
    card.querySelector(".btn-ghost").addEventListener("click", () => {
      addToCart(p.id, 1);
      renderFavorites();
    });

    return card;
  }

  // =========================
  // CART
  // =========================
  function addToCart(id, qty){
    const cart = getCart();
    cart[id] = (cart[id] || 0) + qty;
    if (cart[id] <= 0) delete cart[id];
    setCart(cart);
    updateBadgesAndStats();
  }

  function setCartQty(id, qty){
    const cart = getCart();
    if (qty <= 0) delete cart[id];
    else cart[id] = qty;
    setCart(cart);
    updateBadgesAndStats();
  }

  function renderCart(){
    const cart = getCart();
    const ids = Object.keys(cart);
    cartList.innerHTML = "";

    cartEmpty.classList.toggle("hidden", ids.length !== 0);

    let total = 0;

    ids.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;

      const qty = cart[id];
      total += p.price * qty;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img class="cart-thumb" src="${p.image}" alt="${escapeHtml(p.name)}">
        <div>
          <p class="cart-title">${escapeHtml(p.name)}</p>
          <div class="cart-meta">
            ${escapeHtml(p.source)} • Артикул: ${escapeHtml(p.article)} • Цвет: ${escapeHtml(p.color)} • Размер: ${escapeHtml(p.size)}
          </div>
          <div class="cart-meta">
            Ссылка: <a href="${p.url}" target="_blank" rel="noopener">перейти на сайт</a>
          </div>
        </div>
        <div class="cart-right">
          <div class="qty">
            <button type="button" data-q="-">−</button>
            <span>${qty}</span>
            <button type="button" data-q="+">+</button>
          </div>
          <strong>${fmt(p.price * qty)}</strong>
          <button class="btn-ghost" type="button">Удалить</button>
        </div>
      `;

      const img = row.querySelector(".cart-thumb");
      img.addEventListener("error", () => {
        img.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60";
      });

      row.querySelector('[data-q="-"]').addEventListener("click", () => {
        setCartQty(id, qty - 1);
        renderCart();
      });
      row.querySelector('[data-q="+"]').addEventListener("click", () => {
        setCartQty(id, qty + 1);
        renderCart();
      });

      row.querySelector(".btn-ghost").addEventListener("click", () => {
        setCartQty(id, 0);
        renderCart();
      });

      cartList.appendChild(row);
    });

    cartTotal.textContent = fmt(total);
    updateBadgesAndStats();
  }

  checkoutBtn.addEventListener("click", () => {
    const cart = getCart();
    const ids = Object.keys(cart);
    if (ids.length === 0){
      alert("Корзина пустая 🙂");
      return;
    }
    alert("Демо: оформление заказа. В реальном проекте тут будет переход/интеграция с источником или сбор ссылок.");
  });

  // =========================
  // PROFILE
  // =========================
  function loadProfile(){
    return JSON.parse(localStorage.getItem(LS_PROFILE) || "{}");
  }
  function saveProfile(obj){
    localStorage.setItem(LS_PROFILE, JSON.stringify(obj));
  }

  function renderProfile(){
    const p = loadProfile();
    profileName.value = p.name || "";
    profileEmail.value = p.email || "";
    profilePhone.value = p.phone || "";
    profileCity.value = p.city || "";

    updateBadgesAndStats();
  }

  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = {
      name: profileName.value.trim(),
      email: profileEmail.value.trim(),
      phone: profilePhone.value.trim(),
      city: profileCity.value.trim(),
    };
    saveProfile(obj);
    alert("Профиль сохранён ✅");
  });

  resetProfileBtn.addEventListener("click", () => {
    localStorage.removeItem(LS_PROFILE);
    renderProfile();
    alert("Профиль сброшен.");
  });

  // =========================
  // MODAL
  // =========================
  function openModal(id){
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    modalProductId = id;

    modalTitle.textContent = p.name;
    modalPrice.textContent = `Цена: ${fmt(p.price)}`;
    modalMeta.innerHTML = `
      <div><b>Источник:</b> ${escapeHtml(p.source)}</div>
      <div><b>Артикул:</b> ${escapeHtml(p.article)}</div>
      <div><b>Цвет:</b> ${escapeHtml(p.color)}</div>
      <div><b>Размер:</b> ${escapeHtml(p.size)}</div>
      <div style="margin-top:10px"><b>Описание:</b> ${escapeHtml(p.description || "—")}</div>
    `;

    modalGoLink.href = p.url;

    modalImage.src = p.image;
    modalImage.onerror = () => {
      modalImage.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=60";
    };

    const fav = getFavIds();
    const cart = getCart();

    modalFavBtn.textContent = fav.has(id) ? "❤️ Убрать из избранного" : "❤️ В избранное";
    modalCartBtn.textContent = cart[id] ? "🛒 Добавить ещё" : "🛒 В корзину";

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal(){
    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "";
    modalProductId = null;
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) closeModal();
  });

  modalFavBtn.addEventListener("click", () => {
    if (!modalProductId) return;
    toggleFavorite(modalProductId);
    openModal(modalProductId); // обновим текст кнопок
    // если сейчас открыта страница избранного — перерисуем
    if (!favoritesPage.classList.contains("hidden")) renderFavorites();
    if (activeCategory) renderCatalog();
  });

  modalCartBtn.addEventListener("click", () => {
    if (!modalProductId) return;
    addToCart(modalProductId, 1);
    openModal(modalProductId);
    if (!cartPage.classList.contains("hidden")) renderCart();
    if (activeCategory) renderCatalog();
  });

  // =========================
  // BADGES / STATS
  // =========================
  function updateBadgesAndStats(){
    const fav = getFavIds();
    const cart = getCart();

    const favCount = fav.size;
    const cartCount = Object.values(cart).reduce((s,n) => s + n, 0);

    if (favCount > 0){
      favBadge.textContent = favCount;
      favBadge.classList.remove("hidden");
    } else {
      favBadge.classList.add("hidden");
    }

    if (cartCount > 0){
      cartBadge.textContent = cartCount;
      cartBadge.classList.remove("hidden");
    } else {
      cartBadge.classList.add("hidden");
    }

    statFav.textContent = favCount;
    statCart.textContent = cartCount;
  }

  // =========================
  // HELPERS
  // =========================
  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    })[m]);
  }

  // =========================
  // INIT
  // =========================
  updateBadgesAndStats();
  showPage("home");
});
