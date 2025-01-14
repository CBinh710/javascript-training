document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    filterIcon: document.getElementById('filter'),
    filterForm: document.getElementById('filterForm'),
    closeButton: document.getElementById('closeFilterIcon'),
    addProduct: document.getElementById('addProduct'),
    displayAddForm: document.getElementById('addProductContainer'),
    cancelButton: document.getElementById('btnCancel'),
    form: document.querySelector('.add-form'),
    sliderSmall: document.getElementById("sliderRangeSmall"),
    outputSmall: document.getElementById("sliderPriceSmall"),
    slider: document.getElementById("sliderRange"),
    output: document.getElementById("sliderPrice"),
    submitButton: document.getElementById("btnSubmit"),
    productContainer: document.querySelector(".product-container"),
    errorMessages: document.querySelectorAll(".error-message"),
  };

  const staticData = {
    products: []
  };

  let existingProducts = [];

  function clearErrors() {
    elements.errorMessages.forEach(error => error.textContent = "");
  }

  function validateImage(imageURL) {
    return /\.(png|jpeg|jpg)$/i.test(imageURL);
  }

  function validateProductName(name) {
    const trimmedName = name.trim();
    if (!trimmedName) return "Product name cannot be empty.";
    if (trimmedName.length > 100) return "Product name should not exceed 100 characters.";
    if (existingProducts.includes(trimmedName.toLowerCase())) return "Product name already exists.";
    return "";
  }

  function validatePrice(price) {
    if (!/^\d+$/.test(price)) return "Price should contain only numbers.";
    if (parseInt(price) > 10000) return "Price cannot exceed $10,000.";
    return "";
  }

  function validateDiscount(discount) {
    if (!/^\d+$/.test(discount)) return "Discount should contain only numbers.";
    if (/\s/.test(discount)) return "Discount should not contain spaces.";
    if (parseInt(discount) >= 100) return "Discount should be less than 100%.";
    return "";
  }

  function validateDescription(description) {
    if (description.length > 1000) return "Description should not exceed 1000 characters.";
    return "";
  }

  function generateStarRating() {
    return `
      <div class="star-icon"><img src="./assets/images/icons/star.svg" alt="rating star"></div>
      <div class="star-icon"><img src="./assets/images/icons/star.svg" alt="rating star"></div>
      <div class="star-icon"><img src="./assets/images/icons/star.svg" alt="rating star"></div>
      <div class="star-icon"><img src="./assets/images/icons/star.svg" alt="rating star"></div>
      <div class="star-icon"><img src="./assets/images/icons/star.svg" alt="rating star"></div>
    `;
  }

  elements.outputSmall.innerHTML = elements.sliderSmall.value;
  elements.output.innerHTML = elements.slider.value;

  function toggleBodyScroll(enable) {
    document.body.style.overflow = enable ? 'auto' : 'hidden';
  }

  elements.addProduct.addEventListener('click', () => {
    elements.displayAddForm.classList.remove('hidden');
    elements.displayAddForm.classList.add('flex');
    toggleBodyScroll(false);
  });

  elements.cancelButton.addEventListener('click', () => {
    elements.displayAddForm.classList.remove('flex');
    elements.displayAddForm.classList.add('hidden');
    toggleBodyScroll(true);
    clearErrors();
    elements.form.reset();
  });

  elements.filterIcon.addEventListener('click', () => {
    elements.filterForm.classList.remove('hidden');
    elements.filterForm.classList.add('flex');
    toggleBodyScroll(false);
  });

  elements.closeButton.addEventListener('click', () => {
    elements.filterForm.classList.remove('flex');
    elements.filterForm.classList.add('hidden');
    toggleBodyScroll(true);
  });

  window.addEventListener('click', (event) => {
    if (event.target === elements.filterForm || event.target === elements.displayAddForm) {
      elements.filterForm.classList.add('hidden');
      elements.filterForm.classList.remove('flex');
      elements.displayAddForm.classList.remove('flex');
      elements.displayAddForm.classList.add('hidden');
      toggleBodyScroll(true);
      clearErrors();
      elements.form.reset();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
      toggleBodyScroll(true);
    }
  });

  elements.sliderSmall.oninput = () => {
    elements.outputSmall.innerHTML = elements.sliderSmall.value;
    let valPercentSmall = (elements.sliderSmall.value / elements.sliderSmall.max) * 100;
    elements.sliderSmall.style.background = `linear-gradient(to right, #000 ${valPercentSmall}%, #f7f5f5e5 ${valPercentSmall}%)`;
  };

  elements.slider.oninput = () => {
    elements.output.innerHTML = elements.slider.value;
    let valPercent = (elements.slider.value / elements.slider.max) * 100;
    elements.slider.style.background = `linear-gradient(to right, #000 ${valPercent}%, #f7f5f5e5 ${valPercent}%)`;
  };

  elements.submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearErrors();

    const formData = new FormData(elements.form);
    const imageURL = formData.get("chooseFile") ? formData.get("chooseFile").trim() : "";
		const productName = formData.get("product-name") ? formData.get("product-name").trim() : "";
    const price = formData.get("price") ? formData.get("price").trim() : "";
    const discount = formData.get("discount") ? formData.get("discount").trim() : "";
    const description = formData.get("desciption-detail") ? formData.get("desciption-detail").trim() : "";
    const selectedColors = formData.getAll("color");
    const selectedSizes = formData.getAll("size");

    let isValid = true;

    // Validate Image
    if (!validateImage(imageURL)) {
      const imageErrorElement = document.querySelector(".imageError");
      if (imageErrorElement) {
        imageErrorElement.textContent = "Image must be PNG, JPEG, or JPG format.";
      }
      isValid = false;
    }

    // Validate Product Name
    const nameError = validateProductName(productName);
    if (nameError) {
      document.querySelector(".productNameError").textContent = nameError;
      isValid = false;
    } else {
      document.querySelector(".productNameError").textContent = "";
      existingProducts.push(productName.toLowerCase());  // Add to existingProducts only if valid
    }

    // Validate Price
    const priceError = validatePrice(price);
    if (priceError) {
      document.querySelector(".priceError").textContent = priceError;
      isValid = false;
    }

    // Validate Discount
    const discountError = validateDiscount(discount);
    if (discountError) {
      document.querySelector(".discountError").textContent = discountError;
      isValid = false;
    }

    // Validate Description
    const descriptionError = validateDescription(description);
    if (descriptionError) {
      document.querySelector(".descriptionError").textContent = descriptionError;
      isValid = false;
    }

    // Validate Colors
    if (selectedColors.length === 0) {
      document.querySelector(".colorError").textContent = "Please select at least one color.";
      isValid = false;
    }

    // Validate Sizes
    if (selectedSizes.length === 0) {
      document.querySelector(".sizeError").textContent = "Please select at least one size.";
      isValid = false;
    }

    if (isValid) {
      const finalPrice = (price * (100 - discount)) / 100;

      const newProductCard = document.createElement("article");
      newProductCard.classList.add("card", "card-container");
      newProductCard.innerHTML = `
        <div class="card-image-container">
          <img class="card-image" src="${imageURL}" alt="${productName}">
        </div>
        <p class="card-name">${productName}</p>
        <div class="card-rating">
          <div class="rating-star">
            ${generateStarRating()}
          </div>
          <p class="rating-label">5/5</p>
        </div>
        <div class="card-price">
          <p class="price-selling">$${finalPrice.toFixed(2)}</p>
          <s class="price-discount">$${price}</s>
          <p class="price-discount-percent">-${discount}%</p>
        </div>
        <button class="btn-delete pointer">X</button>
      `;

      elements.productContainer.appendChild(newProductCard);
      elements.form.reset();
      elements.displayAddForm.classList.remove("flex");
      elements.displayAddForm.classList.add("hidden");
      toggleBodyScroll(true);
    }
  });
});
