document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ТОВАРЫ
  // =========================
  const PRODUCTS = [
    // ЭЛЕКТРОНИКА
    {
      id: "e1",
      category: "electronics",
      name: "Смартфон Samsung Galaxy A15",
      price: 14990,
      color: "Чёрный",
      size: "6.5 дюйма",
      article: "E-1001",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      description: "Смартфон для повседневного использования с большим экраном и хорошей автономностью."
    },
    {
      id: "e2",
      category: "electronics",
      name: "Беспроводные наушники Xiaomi Buds",
      price: 4990,
      color: "Белый",
      size: "Универсальный",
      article: "E-1002",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Headphones_1.jpg",
      description: "Беспроводные наушники с кейсом, шумоподавлением и удобной посадкой."
    },
    {привет
      id: "e3",
      category: "electronics",
      name: "Ноутбук Lenovo IdeaPad 3",
      price: 35990,
      color: "Серый",
      size: "15.6 дюйма",
      article: "E-1003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      description: "Ноутбук для учёбы, работы с документами и просмотра контента."
    },
    {
      id: "e4",
      category: "electronics",
      name: "Умные часы Smart Watch Pro",
      price: 6990,
      color: "Чёрный",
      size: "44 мм",
      article: "E-1004",
      source: "AliExpress",
      url: "https://aliexpress.ru/",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      description: "Умные часы с уведомлениями, шагомером и мониторингом активности."
    },
    {
      id: "e5",
      category: "electronics",
      name: "Планшет Xiaomi Pad",
      price: 22990,
      color: "Серый",
      size: "10.5 дюйма",
      article: "E-1005",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=80",
      description: "Планшет для учёбы, чтения, фильмов и работы с документами."
    },
    {
      id: "e6",
      category: "electronics",
      name: "Игровая клавиатура RGB",
      price: 3490,
      color: "Чёрный",
      size: "Полноразмерная",
      article: "E-1006",
      source: "DNS",
      url: "https://www.dns-shop.ru/",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
      description: "Механическая клавиатура с подсветкой для игр и работы."
    },

    // ОДЕЖДА
    {
      id: "c1",
      category: "clothes",
      name: "Футболка Nike Air",
      price: 2490,
      color: "Белый",
      size: "M",
      article: "C-2001",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      description: "Базовая хлопковая футболка для повседневного образа."
    },
    {
      id: "c2",
      category: "clothes",
      name: "Толстовка Adidas Originals",
      price: 4990,
      color: "Чёрный",
      size: "L",
      article: "C-2002",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
      description: "Тёплая толстовка с капюшоном и карманом."
    },
    {
      id: "c3",
      category: "clothes",
      name: "Кроссовки Puma RS-X",
      price: 8990,
      color: "Серый",
      size: "42",
      article: "C-2003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      description: "Кроссовки для прогулок и повседневной носки."
    },
    {
      id: "c4",
      category: "clothes",
      name: "Джинсы прямого кроя",
      price: 3990,
      color: "Синий",
      size: "32",
      article: "C-2004",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
      description: "Классические джинсы прямого кроя для базового гардероба."
    },
    {
      id: "c5",
      category: "clothes",
      name: "Куртка демисезонная",
      price: 7990,
      color: "Чёрный",
      size: "L",
      article: "C-2005",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=900&q=80",
      description: "Лёгкая куртка для прохладной погоды."
    },
    {
      id: "c6",
      category: "clothes",
      name: "Рубашка oversize",
      price: 2890,
      color: "Белый",
      size: "M",
      article: "C-2006",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      description: "Свободная рубашка для повседневного и делового образа."
    },

    // КОСМЕТИКА
    {
      id: "b1",
      category: "beauty",
      name: "Тональный крем Maybelline Fit Me",
      price: 590,
      color: "Натуральный",
      size: "30 мл",
      article: "B-3001",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
      description: "Тональный крем для выравнивания тона кожи."
    },
    {
      id: "b2",
      category: "beauty",
      name: "Помада L'Oréal Paris Rouge",
      price: 690,
      color: "Красный",
      size: "Стандарт",
      article: "B-3002",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
      description: "Классическая помада насыщенного красного оттенка."
    },
    {
      id: "b3",
      category: "beauty",
      name: "Парфюм Dior Sauvage",
      price: 11990,
      color: "—",
      size: "60 мл",
      article: "B-3003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
      description: "Парфюм с ярким и стойким ароматом."
    },
    {
      id: "b4",
      category: "beauty",
      name: "Тушь для ресниц Volume",
      price: 790,
      color: "Чёрный",
      size: "10 мл",
      article: "B-3004",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1631214524020-47a2f4929ed3?auto=format&fit=crop&w=900&q=80",
      description: "Тушь для создания объёма и выразительного взгляда."
    },
    {
      id: "b5",
      category: "beauty",
      name: "Крем для лица увлажняющий",
      price: 990,
      color: "—",
      size: "50 мл",
      article: "B-3005",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
      description: "Увлажняющий крем для ежедневного ухода за кожей."
    },
    {
      id: "b6",
      category: "beauty",
      name: "Палетка теней Nude",
      price: 1490,
      color: "Nude",
      size: "12 оттенков",
      article: "B-3006",
      source: "Lamoda",
      url: "https://www.lamoda.ru/",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
      description: "Палетка теней в базовых оттенках для дневного и вечернего макияжа."
    },

    // ДЛЯ ДОМА
    {
      id: "h1",
      category: "home",
      name: "Настольная лампа",
      price: 1590,
      color: "Чёрный",
      size: "Стандарт",
      article: "H-4001",
      source: "AliExpress",
      url: "https://aliexpress.ru/",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
      description: "Настольная лампа для рабочего места с мягким светом."
    },
    {
      id: "h2",
      category: "home",
      name: "Электрочайник",
      price: 2490,
      color: "Белый",
      size: "1.7 л",
      article: "H-4002",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&w=900&q=80",
      description: "Электрочайник с быстрым нагревом и автоотключением."
    },
    {
      id: "h3",
      category: "home",
      name: "Робот-пылесос Xiaomi",
      price: 24990,
      color: "Белый",
      size: "Стандарт",
      article: "H-4003",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1581579185169-02b1298c8b39?auto=format&fit=crop&w=900&q=80",
      description: "Робот-пылесос для автоматической уборки квартиры."
    },
    {
      id: "h4",
      category: "home",
      name: "Комплект постельного белья",
      price: 3290,
      color: "Серый",
      size: "Евро",
      article: "H-4004",
      source: "Ozon",
      url: "https://www.ozon.ru/",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      description: "Комплект постельного белья из мягкой ткани."
    },
    {
      id: "h5",
      category: "home",
      name: "Кофеварка капельная",
      price: 5990,
      color: "Чёрный",
      size: "1.2 л",
      article: "H-4005",
      source: "DNS",
      url: "https://www.dns-shop.ru/",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      description: "Кофеварка для приготовления кофе дома или в офисе."
    },
    {
      id: "h6",
      category: "home",
      name: "Набор кухонной посуды",
      price: 4590,
      color: "Серебристый",
      size: "6 предметов",
      article: "H-4006",
      source: "Wildberries",
      url: "https://www.wildberries.ru/",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
      description: "Набор посуды для ежедневного приготовления еды."
    }
  ];

  // =========================
  // СОСТОЯНИЕ
  // =========================
  let activeCategory = null;
  let modalProductId = null;

  const LS_FAV = "clickmarket_favorites";
  const LS_CART = "clickmarket_cart";
  const LS_PROFILE = "clickmarket_profile";

  // =========================
  // ЭЛЕМЕНТЫ
  // =========================
  const homePage = document.getElementById("homePage");
  const favoritesPage = document.getElementById("favoritesPage");
  const cartPage = document.getElementById("cartPage");
  const profilePage = document.getElementById("profilePage");

  const navLinks = document.querySelectorAll(".nav-link");
  const favBadge = document.getElementById("favBadge");
  const cartBadge = document.getElementById("cartBadge");

  const catButtons = document.querySelectorAll(".cat-card");
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

  const recommendationsGrid = document.getElementById("recommendationsGrid");
  const goShoppingFromFav = document.getElementById("goShoppingFromFav");
  const refreshRecommendations = document.getElementById("refreshRecommendations");

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

  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalMeta = document.getElementById("modalMeta");
  const modalGoLink = document.getElementById("modalGoLink");
  const modalFavBtn = document.getElementById("modalFavBtn");
  const modalCartBtn = document.getElementById("modalCartBtn");

  const startSearchBtn = document.getElementById("startSearchBtn");
  const howItWorksBtn = document.getElementById("howItWorksBtn");
  const ctaSearchBtn = document.getElementById("ctaSearchBtn");
  const howItWorksSection = document.getElementById("howItWorks");
  const categoriesSection = document.querySelector(".categories");

  // =========================
  // LOCAL STORAGE
  // =========================
  function getFavIds() {
    return new Set(JSON.parse(localStorage.getItem(LS_FAV) || "[]"));
  }

  function setFavIds(set) {
    localStorage.setItem(LS_FAV, JSON.stringify([...set]));
  }

  function getCart() {
    return JSON.parse(localStorage.getItem(LS_CART) || "{}");
  }

  function setCart(cart) {
    localStorage.setItem(LS_CART, JSON.stringify(cart));
  }

  function loadProfile() {
    return JSON.parse(localStorage.getItem(LS_PROFILE) || "{}");
  }

  function saveProfile(profile) {
    localStorage.setItem(LS_PROFILE, JSON.stringify(profile));
  }

  // =========================
  // НАВИГАЦИЯ
  // =========================
  function setActiveNav(action) {
    navLinks.forEach(link => {
      link.classList.toggle("is-active", link.dataset.action === action);
    });
  }

  function showPage(action) {
    setActiveNav(action);

    if (homePage) homePage.classList.toggle("hidden", action !== "home");
    if (favoritesPage) favoritesPage.classList.toggle("hidden", action !== "favorites");
    if (cartPage) cartPage.classList.toggle("hidden", action !== "cart");
    if (profilePage) profilePage.classList.toggle("hidden", action !== "profile");

    if (action === "favorites") renderFavorites();
    if (action === "cart") renderCart();
    if (action === "profile") renderProfile();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showPage(link.dataset.action || "home");
    });
  });

  // =========================
  // КАТЕГОРИИ
  // =========================
  function categoryName(category) {
    const names = {
      electronics: "Электроника",
      clothes: "Одежда",
      beauty: "Косметика",
      home: "Для дома"
    };

    return names[category] || "Каталог";
  }

  catButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;

      catButtons.forEach(btn => {
        btn.classList.toggle("is-active", btn.dataset.category === activeCategory);
      });

      if (catalogTitle) catalogTitle.textContent = categoryName(activeCategory);
      if (catalog) catalog.classList.remove("hidden");

      if (searchInput) searchInput.value = "";
      if (priceSelect) priceSelect.value = "";

      buildFilterOptions(activeCategory);
      renderCatalog();
      closeDropdown();

      if (catalog) {
        catalog.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (backToCategories) {
    backToCategories.addEventListener("click", () => {
      activeCategory = null;
      if (catalog) catalog.classList.add("hidden");
      catButtons.forEach(btn => btn.classList.remove("is-active"));
      closeDropdown();
    });
  }

  // =========================
  // ПОИСК И ФИЛЬТРЫ
  // =========================
  function buildFilterOptions(category) {
    const items = PRODUCTS.filter(product => product.category === category);

    fillSelect(colorSelect, unique(items.map(p => p.color).filter(Boolean)), "Любой");
    fillSelect(sizeSelect, unique(items.map(p => p.size).filter(Boolean)), "Любой");
  }

  function fillSelect(select, values, defaultText) {
    if (!select) return;

    select.innerHTML = "";

    const option = document.createElement("option");
    option.value = "";
    option.textContent = defaultText;
    select.appendChild(option);

    values.forEach(value => {
      const item = document.createElement("option");
      item.value = value;
      item.textContent = value;
      select.appendChild(item);
    });
  }

  function unique(array) {
    return [...new Set(array)].sort((a, b) => String(a).localeCompare(String(b), "ru"));
  }

  function parsePriceRange(value) {
    if (!value) return null;

    const [min, max] = value.split("-").map(Number);

    if (Number.isFinite(min) && Number.isFinite(max)) {
      return { min, max };
    }

    return null;
  }

  function applyFilters(items) {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const color = colorSelect ? colorSelect.value : "";
    const size = sizeSelect ? sizeSelect.value : "";
    const range = priceSelect ? parsePriceRange(priceSelect.value) : null;

    return items.filter(product => {
      const searchText = `${product.name} ${product.description} ${product.source}`.toLowerCase();

      const queryOk = !query || searchText.includes(query);
      const colorOk = !color || product.color === color;
      const sizeOk = !size || product.size === size;

      const price = Number(product.price || 0);
      const priceOk = !range || (price >= range.min && price <= range.max);

      return queryOk && colorOk && sizeOk && priceOk;
    });
  }

  [searchInput, colorSelect, sizeSelect, priceSelect].forEach(element => {
    if (!element) return;

    element.addEventListener("input", () => {
      renderCatalog();
      renderDropdown();
    });

    element.addEventListener("change", () => {
      renderCatalog();
      renderDropdown();
    });
  });

  function renderDropdown() {
    if (!activeCategory || !searchDropdown || !searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      closeDropdown();
      return;
    }

    const items = applyFilters(PRODUCTS.filter(p => p.category === activeCategory)).slice(0, 6);

    if (items.length === 0) {
      closeDropdown();
      return;
    }

    searchDropdown.innerHTML = "";

    items.forEach(product => {
      const row = document.createElement("div");
      row.className = "dd-item";

      row.innerHTML = `
        <div class="dd-name">${escapeHtml(product.name)}</div>
        <div class="dd-price">${formatPrice(product.price)}</div>
      `;

      row.addEventListener("click", () => {
        closeDropdown();
        openModal(product.id);
      });

      searchDropdown.appendChild(row);
    });

    searchDropdown.classList.remove("hidden");
  }

  function closeDropdown() {
    if (!searchDropdown) return;

    searchDropdown.classList.add("hidden");
    searchDropdown.innerHTML = "";
  }

  document.addEventListener("click", event => {
    if (!searchDropdown || !searchInput) return;

    if (!searchDropdown.contains(event.target) && event.target !== searchInput) {
      closeDropdown();
    }
  });

  // =========================
  // КАТАЛОГ
  // =========================
  function renderCatalog() {
    if (!productsGrid || !activeCategory) return;

    const items = applyFilters(PRODUCTS.filter(product => product.category === activeCategory))
      .sort((a, b) => Number(a.price) - Number(b.price));

    productsGrid.innerHTML = "";

    if (items.length === 0) {
      productsGrid.innerHTML = `<div class="empty">Товары не найдены 😔</div>`;
      return;
    }

    items.forEach(product => {
      productsGrid.appendChild(createProductCard(product));
    });

    updateBadgesAndStats();
  }

  function createProductCard(product) {
    const favIds = getFavIds();
    const cart = getCart();

    const isFavorite = favIds.has(product.id);
    const isInCart = Boolean(cart[product.id]);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="p-img" src="${product.image || ""}" alt="${escapeHtml(product.name)}">

      <div class="p-body">
        <div class="p-top">
          <h3 class="p-title">${escapeHtml(product.name)}</h3>
          <button class="icon-btn ${isFavorite ? "is-on" : ""}" type="button" title="В избранное">
            ${isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        <div class="p-source">${escapeHtml(product.source)}</div>
        <div class="p-price">${formatPrice(product.price)}</div>

        <div class="p-actions">
          <button class="btn-primary" type="button">Подробнее</button>
          <button class="btn-ghost" type="button">${isInCart ? "В корзине" : "В корзину"}</button>
        </div>
      </div>
    `;

    const img = card.querySelector(".p-img");
    img.addEventListener("error", () => {
      img.src = getFallbackImage(product.category);
    });

    const favButton = card.querySelector(".icon-btn");

    favButton.addEventListener("click", event => {
      event.stopPropagation();

      toggleFavorite(product.id);
      favButton.classList.add("heart-pop");

      setTimeout(() => {
        favButton.classList.remove("heart-pop");
      }, 350);

      renderCatalog();

      if (favoritesPage && !favoritesPage.classList.contains("hidden")) {
        renderFavorites();
      }
    });

    card.querySelector(".btn-primary").addEventListener("click", () => {
      openModal(product.id);
    });

    card.querySelector(".btn-ghost").addEventListener("click", () => {
      addToCart(product.id, 1);
      renderCatalog();
    });

    return card;
  }

  // =========================
  // ИЗБРАННОЕ
  // =========================
  function toggleFavorite(id) {
    const favIds = getFavIds();

    if (favIds.has(id)) {
      favIds.delete(id);
    } else {
      favIds.add(id);
    }

    setFavIds(favIds);
    updateBadgesAndStats();
  }

  function renderFavorites() {
    if (!favoritesGrid || !favoritesEmpty) return;

    const favIds = getFavIds();

    const items = PRODUCTS
      .filter(product => favIds.has(product.id))
      .sort((a, b) => Number(a.price || 0) - Number(b.price || 0));

    favoritesGrid.innerHTML = "";

    if (items.length === 0) {
      favoritesEmpty.classList.remove("hidden");
    } else {
      favoritesEmpty.classList.add("hidden");

      items.forEach(product => {
        favoritesGrid.appendChild(createFavoriteCard(product));
      });
    }

    renderRecommendations();
    updateBadgesAndStats();
  }

  function createFavoriteCard(product) {
    const cart = getCart();
    const isInCart = Boolean(cart[product.id]);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="p-img" src="${product.image || ""}" alt="${escapeHtml(product.name)}">

      <div class="p-body">
        <div class="p-top">
          <h3 class="p-title">${escapeHtml(product.name)}</h3>
          <button class="icon-btn is-on" type="button" title="Убрать из избранного">❤️</button>
        </div>

        <div class="p-source">${escapeHtml(product.source)}</div>
        <div class="p-price">${formatPrice(product.price)}</div>

        <div class="p-actions">
          <button class="btn-primary" type="button">Подробнее</button>
          <button class="btn-ghost" type="button">${isInCart ? "В корзине" : "В корзину"}</button>
        </div>
      </div>
    `;

    const img = card.querySelector(".p-img");
    img.addEventListener("error", () => {
      img.src = getFallbackImage(product.category);
    });

    card.querySelector(".icon-btn").addEventListener("click", () => {
      toggleFavorite(product.id);
      renderFavorites();

      if (activeCategory) {
        renderCatalog();
      }
    });

    card.querySelector(".btn-primary").addEventListener("click", () => {
      openModal(product.id);
    });

    card.querySelector(".btn-ghost").addEventListener("click", () => {
      addToCart(product.id, 1);
      renderFavorites();
    });

    return card;
  }

  function renderRecommendations() {
    if (!recommendationsGrid) return;

    const favIds = getFavIds();

    const items = PRODUCTS
      .filter(product => !favIds.has(product.id))
      .sort((a, b) => Number(a.price || 0) - Number(b.price || 0))
      .slice(0, 8);

    recommendationsGrid.innerHTML = "";

    items.forEach(product => {
      recommendationsGrid.appendChild(createRecommendationCard(product));
    });
  }

  function createRecommendationCard(product) {
    return createProductCard(product);
  }

  if (goShoppingFromFav) {
    goShoppingFromFav.addEventListener("click", () => {
      showPage("home");

      setTimeout(() => {
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    });
  }

  if (refreshRecommendations) {
    refreshRecommendations.addEventListener("click", () => {
      renderRecommendations();
    });
  }

  // =========================
  // КОРЗИНА
  // =========================
  function addToCart(id, qty = 1) {
    const cart = getCart();

    cart[id] = (cart[id] || 0) + qty;

    if (cart[id] <= 0) {
      delete cart[id];
    }

    setCart(cart);
    updateBadgesAndStats();
  }

  function setCartQty(id, qty) {
    const cart = getCart();

    if (qty <= 0) {
      delete cart[id];
    } else {
      cart[id] = qty;
    }

    setCart(cart);
    updateBadgesAndStats();
  }

  function renderCart() {
    if (!cartList || !cartEmpty || !cartTotal) return;

    const cart = getCart();
    const ids = Object.keys(cart);

    cartList.innerHTML = "";
    cartEmpty.classList.toggle("hidden", ids.length !== 0);

    let total = 0;

    ids.forEach(id => {
      const product = PRODUCTS.find(item => item.id === id);
      if (!product) return;

      const qty = Number(cart[id] || 1);
      const sum = Number(product.price) * qty;
      total += sum;

      const row = document.createElement("div");
      row.className = "cart-item";

      row.innerHTML = `
        <img class="cart-thumb" src="${product.image || ""}" alt="${escapeHtml(product.name)}">

        <div>
          <p class="cart-title">${escapeHtml(product.name)}</p>
          <div class="cart-meta">
            ${escapeHtml(product.source)} • Артикул: ${escapeHtml(product.article)}
          </div>
          <div class="cart-meta">
            Цвет: ${escapeHtml(product.color)} • Размер: ${escapeHtml(product.size)}
          </div>
          <div class="cart-meta">
            <a href="${product.url}" target="_blank" rel="noopener">Перейти на сайт продавца</a>
          </div>
        </div>

        <div class="cart-right">
          <div class="qty">
            <button type="button" data-action="minus">−</button>
            <span>${qty}</span>
            <button type="button" data-action="plus">+</button>
          </div>

          <strong>${formatPrice(sum)}</strong>
          <button class="btn-ghost" type="button" data-action="remove">Удалить</button>
        </div>
      `;

      const img = row.querySelector(".cart-thumb");
      img.addEventListener("error", () => {
        img.src = getFallbackImage(product.category);
      });

      row.querySelector('[data-action="minus"]').addEventListener("click", () => {
        setCartQty(id, qty - 1);
        renderCart();
      });

      row.querySelector('[data-action="plus"]').addEventListener("click", () => {
        setCartQty(id, qty + 1);
        renderCart();
      });

      row.querySelector('[data-action="remove"]').addEventListener("click", () => {
        setCartQty(id, 0);
        renderCart();
      });

      cartList.appendChild(row);
    });

    cartTotal.textContent = formatPrice(total);
    updateBadgesAndStats();
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const cart = getCart();

      if (Object.keys(cart).length === 0) {
        alert("Корзина пустая 🙂");
      } else {
        alert("Это демо-оформление. В полной версии здесь будет переход к продавцу или оформление заказа.");
      }
    });
  }

  // =========================
  // ПРОФИЛЬ
  // =========================
  function renderProfile() {
    const profile = loadProfile();

    if (profileName) profileName.value = profile.name || "";
    if (profileEmail) profileEmail.value = profile.email || "";
    if (profilePhone) profilePhone.value = profile.phone || "";
    if (profileCity) profileCity.value = profile.city || "";

    updateBadgesAndStats();
  }

  if (profileForm) {
    profileForm.addEventListener("submit", event => {
      event.preventDefault();

      saveProfile({
        name: profileName ? profileName.value.trim() : "",
        email: profileEmail ? profileEmail.value.trim() : "",
        phone: profilePhone ? profilePhone.value.trim() : "",
        city: profileCity ? profileCity.value.trim() : ""
      });

      alert("Профиль сохранён ✅");
    });
  }

  if (resetProfileBtn) {
    resetProfileBtn.addEventListener("click", () => {
      localStorage.removeItem(LS_PROFILE);
      renderProfile();
      alert("Профиль сброшен.");
    });
  }

  // =========================
  // МОДАЛЬНОЕ ОКНО
  // =========================
  function openModal(id) {
    const product = PRODUCTS.find(item => item.id === id);
    if (!product || !modalOverlay) return;

    modalProductId = id;

    if (modalImage) {
      modalImage.src = product.image || getFallbackImage(product.category);
      modalImage.alt = product.name;
      modalImage.onerror = () => {
        modalImage.src = getFallbackImage(product.category);
      };
    }

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = `Цена: ${formatPrice(product.price)}`;

    if (modalMeta) {
      modalMeta.innerHTML = `
        <div><b>Источник:</b> ${escapeHtml(product.source)}</div>
        <div><b>Артикул:</b> ${escapeHtml(product.article)}</div>
        <div><b>Цвет:</b> ${escapeHtml(product.color)}</div>
        <div><b>Размер:</b> ${escapeHtml(product.size)}</div>
        <div style="margin-top:10px;"><b>Описание:</b> ${escapeHtml(product.description)}</div>
      `;
    }

    if (modalGoLink) modalGoLink.href = product.url;

    const favIds = getFavIds();
    const cart = getCart();

    if (modalFavBtn) {
      modalFavBtn.textContent = favIds.has(id)
        ? "❤️ Убрать из избранного"
        : "❤️ В избранное";
    }

    if (modalCartBtn) {
      modalCartBtn.textContent = cart[id]
        ? "🛒 Добавить ещё"
        : "🛒 В корзину";
    }

    modalOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalOverlay) return;

    modalOverlay.classList.add("hidden");
    document.body.style.overflow = "";
    modalProductId = null;
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", event => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  if (modalFavBtn) {
    modalFavBtn.addEventListener("click", () => {
      if (!modalProductId) return;

      toggleFavorite(modalProductId);
      openModal(modalProductId);

      if (activeCategory) renderCatalog();
      if (favoritesPage && !favoritesPage.classList.contains("hidden")) renderFavorites();
    });
  }

  if (modalCartBtn) {
    modalCartBtn.addEventListener("click", () => {
      if (!modalProductId) return;

      addToCart(modalProductId, 1);
      openModal(modalProductId);

      if (activeCategory) renderCatalog();
      if (cartPage && !cartPage.classList.contains("hidden")) renderCart();
    });
  }

  // =========================
  // СЧЁТЧИКИ
  // =========================
  function updateBadgesAndStats() {
    const favIds = getFavIds();
    const cart = getCart();

    const validIds = new Set(PRODUCTS.map(product => product.id));

    const favCount = [...favIds].filter(id => validIds.has(id)).length;

    const cartCount = Object.entries(cart)
      .filter(([id]) => validIds.has(id))
      .reduce((sum, [, qty]) => sum + Number(qty || 0), 0);

    if (favBadge) {
      favBadge.textContent = favCount;
      favBadge.classList.toggle("hidden", favCount === 0);
    }

    if (cartBadge) {
      cartBadge.textContent = cartCount;
      cartBadge.classList.toggle("hidden", cartCount === 0);
    }

    if (statFav) statFav.textContent = favCount;
    if (statCart) statCart.textContent = cartCount;
  }

  // =========================
  // КНОПКИ ГЛАВНОЙ
  // =========================
  function scrollToElement(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (startSearchBtn) {
    startSearchBtn.addEventListener("click", () => scrollToElement(categoriesSection));
  }

  if (ctaSearchBtn) {
    ctaSearchBtn.addEventListener("click", () => scrollToElement(categoriesSection));
  }

  if (howItWorksBtn) {
    howItWorksBtn.addEventListener("click", () => scrollToElement(howItWorksSection));
  }

  // =========================
  // ПЛАВНОЕ ПОЯВЛЕНИЕ
  // =========================
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // =========================
  // ВСПОМОГАТЕЛЬНЫЕ
  // =========================
  function formatPrice(value) {
    return new Intl.NumberFormat("ru-RU").format(Number(value || 0)) + " ₽";
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function getFallbackImage(category) {
    const fallback = {
      electronics: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      clothes: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
      beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
      home: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80"
    };

    return fallback[category] || fallback.electronics;
  }

  // =========================
  // СТАРТ
  // =========================
  updateBadgesAndStats();
  showPage("home");

  console.log("Клик Маркет запущен ✅");
});