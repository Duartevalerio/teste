/* ============================================
   IMMO MARKET — Global JavaScript
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAVIGATION ---
  const navToggle = document.getElementById('navToggle');
  const headerMenu = document.getElementById('headerMenu');
  const header = document.getElementById('header');

  if (navToggle && headerMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('active');
      headerMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    headerMenu.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        headerMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !headerMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        headerMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- STICKY HEADER ---
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle('sticky', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --- SEARCH TABS ---
  const searchTabs = document.querySelectorAll('.search__tab');
  searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      searchTabs.forEach(t => t.classList.remove('search__tab--active'));
      tab.classList.add('search__tab--active');
    });
  });

  // --- SEARCH FORM ---
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const activeTab = document.querySelector('.search__tab--active');
      const op = activeTab ? activeTab.dataset.tab : '—';
      const loc = document.getElementById('searchLocation').value.trim() || '(não especificada)';
      const type = document.getElementById('searchType').value || '(todos)';

      console.log('=== Pesquisa Lançada ===');
      console.log('Operação   :', op);
      console.log('Localização:', loc);
      console.log('Tipo       :', type);

      // Filter grid cards if on homepage
      const cards = document.querySelectorAll('#propertyGrid .card');
      let count = 0;
      cards.forEach(card => {
        const cardOp = card.dataset.operation || '';
        const cardType = card.dataset.type || '';
        const match = cardOp === op && (type === '' || cardType === type);
        card.style.display = match ? '' : 'none';
        if (match) count++;
      });
      console.log('Resultados:', count);
    });
  }

  // --- FAVORITE TOGGLE ---
  document.querySelectorAll('.card__fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('active');
    });
  });

  // ========================================
  //   FILTERS SIDEBAR (Arrendar / Partilhar)
  // ========================================
  const filtersToggle = document.getElementById('filtersToggle');
  const filters = document.getElementById('filters');
  const filtersClose = document.getElementById('filtersClose');
  const filtersOverlay = document.getElementById('filtersOverlay');

  function openFilters() {
    if (filters) filters.classList.add('open');
    if (filtersOverlay) filtersOverlay.classList.add('open');
  }

  function closeFilters() {
    if (filters) filters.classList.remove('open');
    if (filtersOverlay) filtersOverlay.classList.remove('open');
  }

  if (filtersToggle) filtersToggle.addEventListener('click', openFilters);
  if (filtersClose) filtersClose.addEventListener('click', closeFilters);
  if (filtersOverlay) filtersOverlay.addEventListener('click', closeFilters);

  // Price range display
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', () => {
      const v = parseInt(priceRange.value).toLocaleString('pt-PT');
      priceValue.textContent = `€ ${v}`;
    });
  }

  // Reset filters
  const filtersReset = document.getElementById('filtersReset');
  const filterForm = document.getElementById('filterForm');
  if (filtersReset && filterForm) {
    filtersReset.addEventListener('click', (e) => {
      e.preventDefault();
      filterForm.reset();
      if (priceValue && priceRange) {
        priceValue.textContent = `€ ${parseInt(priceRange.max).toLocaleString('pt-PT')}`;
      }
    });
  }

  // Filter form submit
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const loc = document.getElementById('locationFilter')?.value || '—';
      const type = document.getElementById('propertyFilter')?.value || '—';
      console.log('=== Filtros Aplicados ===');
      console.log('Localização:', loc);
      console.log('Tipo:', type);
      if (window.innerWidth < 769) closeFilters();
    });
  }

  // ========================================
  //   DETAIL GALLERY (carousel)
  // ========================================
  const galleryImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
  ];

  const mainImage = document.getElementById('galleryMainImage');
  const galleryCounter = document.getElementById('galleryCounter');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const thumbs = document.querySelectorAll('.detail__gallery-thumb');
  const thumbsContainer = document.getElementById('galleryThumbs');
  let currentImg = 0;

  function updateGallery(idx) {
    currentImg = (idx + galleryImages.length) % galleryImages.length;
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.src = galleryImages[currentImg];
      mainImage.style.opacity = '1';
    }, 150);
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentImg));
    if (galleryCounter) {
      galleryCounter.textContent = `${currentImg + 1} / ${galleryImages.length}`;
    }
    // Scroll active thumb into view
    if (thumbs[currentImg] && thumbsContainer) {
      thumbs[currentImg].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  if (mainImage) {
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => updateGallery(i));
    });

    if (prevBtn) prevBtn.addEventListener('click', () => updateGallery(currentImg - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateGallery(currentImg + 1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('detailGallery')) return;
      if (e.key === 'ArrowLeft') updateGallery(currentImg - 1);
      if (e.key === 'ArrowRight') updateGallery(currentImg + 1);
    });
  }

  // ========================================
  //   DETAIL CONTACT FORM
  // ========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');

      if (name && !name.value.trim()) {
        name.classList.add('error'); valid = false;
      } else if (name) { name.classList.remove('error'); }

      if (email && !validateEmail(email.value)) {
        email.classList.add('error'); valid = false;
      } else if (email) { email.classList.remove('error'); }

      if (valid) {
        showToast('Mensagem enviada com sucesso!', 'success');
        contactForm.reset();
        // Repopulate the default message
        const msgField = contactForm.querySelector('[name="message"]');
        if (msgField) {
          msgField.value = 'Olá, tenho interesse neste imóvel. Podemos falar?';
        }
      }
    });
  }

  // ========================================
  //   PUBLISH STEPPER
  // ========================================
  const steps = document.querySelectorAll('.stepper__step');
  const stepForms = [
    document.getElementById('step1Form'),
    document.getElementById('step2Form'),
    document.getElementById('step3Form')
  ];
  let currentStep = 1;

  function goToStep(step) {
    currentStep = step;
    steps.forEach((s, i) => {
      s.classList.remove('stepper__step--active', 'stepper__step--done');
      if (i + 1 < step) s.classList.add('stepper__step--done');
      if (i + 1 === step) s.classList.add('stepper__step--active');
    });

    stepForms.forEach((f, i) => {
      if (f) f.classList.toggle('step-form--active', i + 1 === step);
    });

    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  // Step navigation buttons
  if (stepForms[0]) {
    stepForms[0].addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateStep1()) goToStep(2);
    });
  }

  if (stepForms[1]) {
    stepForms[1].addEventListener('submit', (e) => {
      e.preventDefault();
      goToStep(3);
    });

    const backBtn = document.getElementById('backToStep1');
    if (backBtn) backBtn.addEventListener('click', () => goToStep(1));
  }

  if (stepForms[2]) {
    stepForms[2].addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateStep3()) {
        showToast('Anúncio publicado com sucesso!', 'success');
        setTimeout(() => window.location.href = 'index.html', 2000);
      }
    });

    const backBtn = document.getElementById('backToStep2');
    if (backBtn) backBtn.addEventListener('click', () => goToStep(2));
  }

  // ========================================
  //   DRAG & DROP UPLOADER
  // ========================================
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('dropzonePreview');

  if (dropzone && fileInput) {
    // Click to upload
    dropzone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      handleFiles(fileInput.files);
      fileInput.value = '';
    });

    // Drag events
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      handleFiles(e.dataTransfer.files);
    });
  }

  function handleFiles(files) {
    if (!preview) return;
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }

  // ========================================
  //   LOGIN / REGISTER TOGGLE
  // ========================================
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const toggleRegister = document.getElementById('toggleRegister');
  const toggleLogin = document.getElementById('toggleLogin');
  const loginBackLink = document.getElementById('loginBackLink');

  if (toggleRegister && registerForm && loginForm) {
    toggleRegister.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'flex';
      if (toggleRegister.parentElement) toggleRegister.parentElement.style.display = 'none';
      if (loginBackLink) loginBackLink.style.display = 'block';
    });
  }

  if (toggleLogin && registerForm && loginForm) {
    toggleLogin.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'flex';
      if (loginBackLink) loginBackLink.style.display = 'none';
      if (toggleRegister && toggleRegister.parentElement) toggleRegister.parentElement.style.display = 'block';
    });
  }

  // ========================================
  //   LOGIN FORM VALIDATION
  // ========================================
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');

      if (!validateEmail(email.value)) {
        email.classList.add('error'); valid = false;
      } else { email.classList.remove('error'); }

      if (password.value.length < 6) {
        password.classList.add('error'); valid = false;
      } else { password.classList.remove('error'); }

      if (valid) {
        showToast('Login efetuado com sucesso!', 'success');
        loginForm.reset();
      }
    });
  }

  // ========================================
  //   REGISTER FORM VALIDATION
  // ========================================
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('regName');
      const email = document.getElementById('regEmail');
      const pwd = document.getElementById('regPassword');
      const pwdConfirm = document.getElementById('regPasswordConfirm');

      if (!name.value.trim()) { name.classList.add('error'); valid = false; }
      else { name.classList.remove('error'); }

      if (!validateEmail(email.value)) { email.classList.add('error'); valid = false; }
      else { email.classList.remove('error'); }

      if (pwd.value.length < 6) { pwd.classList.add('error'); valid = false; }
      else { pwd.classList.remove('error'); }

      if (pwd.value !== pwdConfirm.value) { pwdConfirm.classList.add('error'); valid = false; }
      else { pwdConfirm.classList.remove('error'); }

      if (valid) {
        showToast('Conta criada com sucesso!', 'success');
        registerForm.reset();
        // Switch back to login
        if (toggleLogin) toggleLogin.click();
      }
    });
  }

  // ========================================
  //   VALIDATION HELPERS
  // ========================================
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateStep1() {
    const op = document.getElementById('pubOperation');
    const type = document.getElementById('pubType');
    const address = document.getElementById('pubAddress');
    const city = document.getElementById('pubCity');
    let valid = true;

    [op, type, city].forEach(el => {
      if (el && !el.value) {
        el.style.borderColor = '#ef4444';
        valid = false;
      } else if (el) {
        el.style.borderColor = '';
      }
    });

    if (address && !address.value.trim()) {
      address.style.borderColor = '#ef4444';
      valid = false;
    } else if (address) {
      address.style.borderColor = '';
    }

    return valid;
  }

  function validateStep3() {
    const price = document.getElementById('pubPrice');
    const name = document.getElementById('pubName');
    const email = document.getElementById('pubEmail');
    let valid = true;

    if (price && !price.value) { price.classList.add('error'); valid = false; }
    else if (price) { price.classList.remove('error'); }

    if (name && !name.value.trim()) { name.classList.add('error'); valid = false; }
    else if (name) { name.classList.remove('error'); }

    if (email && !validateEmail(email.value)) { email.classList.add('error'); valid = false; }
    else if (email) { email.classList.remove('error'); }

    return valid;
  }

  // ========================================
  //   TOAST NOTIFICATION
  // ========================================
  function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `toast toast--${type} show`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

});
