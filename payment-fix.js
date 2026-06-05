(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(() => {
    ensurePaymentMarkup();
    bindPaymentHandlers();

    console.log("Payment fix подключён ✅");
  });

  function ensurePaymentMarkup() {
    if (!document.getElementById("paymentModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="paymentModal" class="payment-overlay hidden">
          <div class="payment-modal">
            <button id="paymentClose" class="payment-close" type="button">×</button>

            <div class="payment-head">
              <div>
                <div class="page-label">Оплата</div>
                <h2>Оформление заказа</h2>
                <p>Это демонстрационная страница оплаты для дипломного проекта.</p>
              </div>

              <div class="payment-check-icon">💳</div>
            </div>

            <div class="payment-grid">
              <div class="payment-form-card">
                <h3>Способ оплаты</h3>

                <div class="payment-methods">
                  <label class="payment-method">
                    <input type="radio" name="paymentMethodFix" checked>
                    <span>💳</span>
                    Банковская карта
                  </label>

                  <label class="payment-method">
                    <input type="radio" name="paymentMethodFix">
                    <span>⚡</span>
                    СБП
                  </label>

                  <label class="payment-method">
                    <input type="radio" name="paymentMethodFix">
                    <span>📦</span>
                    При получении
                  </label>
                </div>

                <h3>Демо-форма карты</h3>

                <div class="payment-fields">
                  <label>
                    <span>Номер карты</span>
                    <input type="text" placeholder="0000 0000 0000 0000">
                  </label>

                  <div class="payment-fields-row">
                    <label>
                      <span>Срок</span>
                      <input type="text" placeholder="MM/YY">
                    </label>

                    <label>
                      <span>CVV</span>
                      <input type="text" placeholder="123">
                    </label>
                  </div>

                  <label>
                    <span>Имя владельца</span>
                    <input type="text" placeholder="IVAN IVANOV">
                  </label>
                </div>

                <p class="payment-demo-warning">
                  Данные никуда не отправляются. Это демонстрация интерфейса оплаты.
                </p>
              </div>

              <div class="payment-summary-card">
                <h3>Ваш заказ</h3>

                <div id="paymentItems" class="payment-items"></div>

                <div class="summary-row">
                  <span>Количество</span>
                  <strong id="paymentCount">0</strong>
                </div>

                <div class="summary-row">
                  <span>Источники</span>
                  <strong id="paymentSources">—</strong>
                </div>

                <div class="summary-total">
                  <span>К оплате</span>
                  <strong id="paymentTotal">0 ₽</strong>
                </div>

                <button id="payDemoBtn" class="checkout-premium-btn" type="button">
                  Оплатить демо-заказ
                </button>

                <button id="backToCartFromPayment" class="profile-reset-btn payment-back-btn" type="button">
                  Вернуться в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      `);
    }

    if (!document.getElementById("successModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="successModal" class="payment-overlay hidden">
          <div class="success-modal">
            <div class="success-check">✓</div>
            <h2>Демо-заказ оформлен</h2>
            <p>В реальной версии пользователь будет перенаправлен на страницу оплаты или сайт продавца.</p>
            <button id="successClose" class="checkout-premium-btn" type="button">Отлично</button>
          </div>
        </div>
      `);
    }

    if (!document.getElementById("toast")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="toast" class="toast hidden"></div>
      `);
    }
  }

  function bindPaymentHandlers() {
    /*
      ВАЖНО:
      Этот обработчик стоит в capture-режиме.
      Он перехватывает клик по кнопке оплаты ДО старого кода,
      поэтому старое уведомление больше не должно появляться.
    */
    document.addEventListener("click", function (event) {
      const checkoutButton = event.target.closest("#checkoutBtn");

      if (!checkoutButton) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const rows = getCartRows();

      if (rows.length === 0) {
        showToast("Корзина пустая 🙂");
        return;
      }

      openPaymentModal();
    }, true);

    document.addEventListener("click", function (event) {
      if (event.target.closest("#paymentClose")) {
        closePaymentModal();
      }

      if (event.target.closest("#backToCartFromPayment")) {
        closePaymentModal();
      }

      if (event.target.closest("#payDemoBtn")) {
        closePaymentModal();
        openSuccessModal();
        showToast("Демо-заказ оформлен ✅");
      }

      if (event.target.closest("#successClose")) {
        closeSuccessModal();
      }

      const paymentModal = document.getElementById("paymentModal");
      const successModal = document.getElementById("successModal");

      if (event.target === paymentModal) {
        closePaymentModal();
      }

      if (event.target === successModal) {
        closeSuccessModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePaymentModal();
        closeSuccessModal();
      }
    });
  }

  function openPaymentModal() {
    const paymentModal = document.getElementById("paymentModal");
    const paymentItems = document.getElementById("paymentItems");
    const paymentTotal = document.getElementById("paymentTotal");
    const paymentCount = document.getElementById("paymentCount");
    const paymentSources = document.getElementById("paymentSources");

    if (!paymentModal || !paymentItems || !paymentTotal || !paymentCount || !paymentSources) {
      showToast("Не найден блок оплаты в HTML");
      return;
    }

    const rows = getCartRows();

    paymentItems.innerHTML = "";

    let total = 0;
    let count = 0;
    const sources = new Set();

    rows.forEach(item => {
      total += item.sum;
      count += item.qty;

      if (item.source) {
        sources.add(item.source);
      }

      const row = document.createElement("div");
      row.className = "payment-item";

      row.innerHTML = `
        <span>${escapeHtml(item.name)} × ${item.qty}</span>
        <strong>${formatPrice(item.sum)}</strong>
      `;

      paymentItems.appendChild(row);
    });

    paymentTotal.textContent = formatPrice(total);
    paymentCount.textContent = count;
    paymentSources.textContent = Array.from(sources).join(", ") || "—";

    paymentModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closePaymentModal() {
    const paymentModal = document.getElementById("paymentModal");

    if (!paymentModal) return;

    paymentModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function openSuccessModal() {
    const successModal = document.getElementById("successModal");

    if (!successModal) return;

    successModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeSuccessModal() {
    const successModal = document.getElementById("successModal");

    if (!successModal) return;

    successModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function getCartRows() {
    const rows = Array.from(document.querySelectorAll("#cartList .cart-item"));

    return rows.map(row => {
      const name = row.querySelector(".cart-title")?.textContent.trim() || "Товар";
      const qtyText = row.querySelector(".qty span")?.textContent.trim() || "1";
      const qty = Number(qtyText.replace(/\D/g, "")) || 1;

      const sumText = row.querySelector(".cart-right strong")?.textContent.trim() || "0";
      const sum = parseMoney(sumText);

      const sourceText = row.querySelector(".cart-meta")?.textContent.trim() || "";
      const source = sourceText.split("•")[0]?.trim() || "Маркетплейс";

      return {
        name,
        qty,
        sum,
        source
      };
    }).filter(item => item.sum > 0);
  }

  function parseMoney(value) {
    return Number(String(value).replace(/[^\d]/g, "")) || 0;
  }

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

  function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) {
      alert(message);
      return;
    }

    toast.textContent = message;
    toast.classList.remove("hidden");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.add("hidden");
    }, 2600);
  }
})();