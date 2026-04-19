/* ═══════════════════════════════════════════════════
   VOYAGEUR — app.js
   Full interactive functionality
═══════════════════════════════════════════════════ */

'use strict';

/* ── Data ────────────────────────────────────────── */
const DESTINATIONS = [
  { id:1, name:'Santorini', region:'Europe', country:'Greece', category:'europe', rating:4.9, reviews:1240, price:2800, image:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80', badge:'Trending', tags:['Island','Luxury','Romantic'], desc:'Clifftop villages spill down volcanic caldera walls above the shimmering Aegean.' },
  { id:2, name:'Kyoto', region:'Asia', country:'Japan', category:'asia', rating:4.8, reviews:980, price:1950, image:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', badge:'Cultural', tags:['Temples','Gardens','History'], desc:'Ancient capital of Japan where bamboo groves whisper secrets of centuries past.' },
  { id:3, name:'Patagonia', region:'Americas', country:'Argentina', category:'americas', rating:4.7, reviews:640, price:3200, image:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', badge:'Adventure', tags:['Hiking','Wildlife','Nature'], desc:'Raw Andean wilderness of jagged peaks, glaciers, and endless turquoise lakes.' },
  { id:4, name:'Amalfi Coast', region:'Europe', country:'Italy', category:'europe', rating:4.9, reviews:1580, price:3500, image:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80', badge:'Scenic', tags:['Coastal','Food','Sailing'], desc:'Pastel-painted villages cling to dramatic sea cliffs above crystal Mediterranean waters.' },
  { id:5, name:'Queenstown', region:'Oceania', country:'New Zealand', category:'oceania', rating:4.6, reviews:720, price:2600, image:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80', badge:'Adventure', tags:['Bungee','Skiing','Scenic'], desc:'Adventure capital of the world, nestled beside alpine lakes of extraordinary clarity.' },
  { id:6, name:'Marrakech', region:'Africa', country:'Morocco', category:'americas', rating:4.7, reviews:890, price:1400, image:'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80', badge:'Exotic', tags:['Souks','Palaces','Spice'], desc:'Sensory labyrinth of ancient medinas alive with colour, fragrance, and craft.' },
  { id:7, name:'Swiss Alps', region:'Europe', country:'Switzerland', category:'europe', rating:4.9, reviews:1100, price:4200, image:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge:'Premium', tags:['Skiing','Hiking','Scenic'], desc:'Majestic peaks and flower-strewn meadows define one of Europe\'s most iconic landscapes.' },
  { id:8, name:'Bali', region:'Asia', country:'Indonesia', category:'asia', rating:4.8, reviews:2100, price:1600, image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', badge:'Popular', tags:['Temples','Beaches','Wellness'], desc:'Island of the Gods — terraced rice paddies, sacred temples, and warm azure seas.' },
  { id:9, name:'Patagonia Norte', region:'Americas', country:'Chile', category:'americas', rating:4.6, reviews:380, price:2900, image:'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80', badge:'Remote', tags:['Volcanoes','Lakes','Eco'], desc:'Pristine volcanic landscapes and turquoise lakes in one of Earth\'s last wild places.' },
];

const RESTAURANTS = [
  { id:1, name:'Osteria Francescana', cuisine:'Italian', category:'italian', location:'Modena, Italy', rating:4.9, reviews:340, priceLevel:'$$$$', image:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80', michelin:true },
  { id:2, name:'Noma', cuisine:'Nordic', category:'french', location:'Copenhagen, Denmark', rating:4.9, reviews:280, priceLevel:'$$$$', image:'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&q=80', michelin:true },
  { id:3, name:'Sukiyabashi Jiro', cuisine:'Japanese', category:'japanese', location:'Tokyo, Japan', rating:5.0, reviews:190, priceLevel:'$$$$', image:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80', michelin:true },
  { id:4, name:'Le Bernardin', cuisine:'French Seafood', category:'french', location:'New York, USA', rating:4.8, reviews:520, priceLevel:'$$$$', image:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80', michelin:true },
  { id:5, name:'Kalamaki Taverna', cuisine:'Mediterranean', category:'mediterranean', location:'Santorini, Greece', rating:4.7, reviews:740, priceLevel:'$$$', image:'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', michelin:false },
  { id:6, name:'Trattoria da Enzo', cuisine:'Italian', category:'italian', location:'Rome, Italy', rating:4.6, reviews:1200, priceLevel:'$$', image:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80', michelin:false },
  { id:7, name:'Nobu Matsuhisa', cuisine:'Japanese Fusion', category:'japanese', location:'Los Angeles, USA', rating:4.8, reviews:680, priceLevel:'$$$', image:'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80', michelin:false },
  { id:8, name:'Mirazur', cuisine:'French', category:'french', location:'Menton, France', rating:4.9, reviews:210, priceLevel:'$$$$', image:'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=500&q=80', michelin:true },
];

const GALLERY_IMAGES = [
  { src:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', caption:'Swiss Alps at Golden Hour', thumb:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', caption:'Santorini Caldera at Sunset', thumb:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', caption:'Candlelit Bistro, Paris', thumb:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', caption:'Fushimi Inari, Kyoto', thumb:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', caption:'Fine Dining Masterpiece', thumb:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', caption:'Sacred Bali Terraces', thumb:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', caption:'Patagonian Wilderness', thumb:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', caption:'Omakase Sushi Art', thumb:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80', caption:'Amalfi Coast Drive', thumb:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', caption:'Mediterranean Feast', thumb:'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', caption:'Queenstown Reflection', thumb:'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=70' },
  { src:'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=800&q=80', caption:'Restaurant Twilight', thumb:'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?w=400&q=70' },
];

const REVIEWS = [
  { name:'Amelia Fontaine', place:'Santorini, Greece', rating:5, text:'Voyageur curated the most extraordinary honeymoon we could have imagined. Every detail — the clifftop villa, the private sunset sail — was flawless.', initials:'AF' },
  { name:'Kenji Watanabe', place:'Kyoto, Japan', rating:5, text:'The ryokan they selected was transcendent. Waking to misty temple gardens and a 12-course kaiseki breakfast — I still dream about it.', initials:'KW' },
  { name:'Sofia Benedetti', place:'Osteria Francescana', rating:5, text:'Securing a reservation there felt impossible until Voyageur stepped in. The meal itself was a revelation — art on a plate.', initials:'SB' },
  { name:'Marcus Webb', place:'Swiss Alps', rating:5, text:'From the private cable car to the Michelin-starred fondue dinner with peak views, this was adventure luxury perfectly balanced.', initials:'MW' },
  { name:'Priya Nair', place:'Amalfi Coast', rating:4, text:'Breathtaking scenery, wonderful local restaurants. The sailing day was a highlight I will never forget. Highly recommend.', initials:'PN' },
  { name:'Oliver Chen', place:'Bali, Indonesia', rating:5, text:'A spiritual experience as much as a holiday. The private villa retreat paired with temple ceremonies was deeply moving.', initials:'OC' },
];

const MAP_LOCATIONS = [
  { name:'Santorini Office', type:'Destination', lat:36.3932, lng:25.4615, desc:'Our Aegean base for island escapes.' },
  { name:'Kyoto Partner Hotel', type:'Accommodation', lat:35.0116, lng:135.7681, desc:'Hand-picked ryokan in the heart of old Kyoto.' },
  { name:'Paris Dining Desk', type:'Restaurant', lat:48.8566, lng:2.3522, desc:'Concierge service for Michelin experiences.' },
  { name:'Amalfi Harbour HQ', type:'Destination', lat:40.6340, lng:14.6027, desc:'Coastal adventures along the Italian Riviera.' },
  { name:'Swiss Alps Lodge', type:'Accommodation', lat:46.5197, lng:7.9699, desc:'Premium alpine retreat at 2,000m altitude.' },
  { name:'Bali Wellness Hub', type:'Wellness', lat:-8.4095, lng:115.1889, desc:'Yoga retreats and spa experiences.' },
];

/* ══════════════════════════════════════════════════
   HERO SLIDER
══════════════════════════════════════════════════ */
(function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slider-dots');
  const progressBar = document.getElementById('slider-progress-bar');
  let current = 0, timer, startTime, rafId, INTERVAL = 5500;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i+1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots(idx) {
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
      d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
  }

  function goTo(idx) {
    slides[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    updateDots(current);
    resetProgress();
  }

  function resetProgress() {
    cancelAnimationFrame(rafId);
    startTime = performance.now();
    animProgress();
  }

  function animProgress(ts) {
    if (!ts) ts = performance.now();
    const elapsed = ts - startTime;
    const pct = Math.min((elapsed / INTERVAL) * 100, 100);
    progressBar.style.width = pct + '%';
    if (pct < 100) {
      rafId = requestAnimationFrame(animProgress);
    } else {
      goTo(current + 1);
    }
  }

  document.getElementById('slider-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('slider-next').addEventListener('click', () => goTo(current + 1));

  // Keyboard
  document.getElementById('hero-slider').addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Swipe
  let touchX = 0;
  const slider = document.getElementById('hero-slider');
  slider.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, {passive:true});
  slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  }, {passive:true});

  // Pause on hover
  slider.addEventListener('mouseenter', () => { cancelAnimationFrame(rafId); });
  slider.addEventListener('mouseleave', () => { startTime = performance.now() - (parseFloat(progressBar.style.width) / 100 * INTERVAL); animProgress(); });

  resetProgress();
})();

/* ══════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════ */
(function initNav() {
  const header = document.getElementById('nav-header');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Scroll class
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-to-top').hidden = window.scrollY < 400;
  };
  window.addEventListener('scroll', onScroll, {passive:true});

  // Hamburger
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open.toString());
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Theme toggle
  const savedTheme = localStorage.getItem('voy-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  themeToggle.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');

  themeToggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('voy-theme', next);
    themeToggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
  });

  // Back to top
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();

/* ══════════════════════════════════════════════════
   SCROLL SPY
══════════════════════════════════════════════════ */
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div.stats-ribbon');
  const links = document.querySelectorAll('.nav-link[data-section]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold:0.3, rootMargin: '-70px 0px -40% 0px' });
  sections.forEach(s => observer.observe(s));
})();

/* ══════════════════════════════════════════════════
   SECTION REVEAL
══════════════════════════════════════════════════ */
(function initReveal() {
  const sections = document.querySelectorAll('.section, .stats-ribbon');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold:0.08 });
  sections.forEach(s => obs.observe(s));
})();

/* ══════════════════════════════════════════════════
   STAT COUNTER ANIMATION
══════════════════════════════════════════════════ */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const start = performance.now();
      function step(ts) {
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + (target >= 98 ? '' : '+');
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, {threshold:0.5});
  nums.forEach(n => obs.observe(n));
})();

/* ══════════════════════════════════════════════════
   DESTINATIONS
══════════════════════════════════════════════════ */
(function initDestinations() {
  const grid = document.getElementById('destinations-grid');
  const searchEl = document.getElementById('dest-search');
  const noResults = document.getElementById('no-results');
  const loadMoreBtn = document.getElementById('load-more-dest');
  const sortEl = document.getElementById('sort-select');
  let activeCategory = 'all';
  let searchQuery = '';
  let sortBy = 'popular';
  let visibleCount = 6;
  let wished = new Set();

  function renderStars(r) {
    const full = Math.floor(r);
    return '★'.repeat(full) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - full - (r % 1 >= 0.5 ? 1 : 0));
  }

  function getFiltered() {
    let data = [...DESTINATIONS];
    if (activeCategory !== 'all') data = data.filter(d => d.category === activeCategory);
    if (searchQuery) data = data.filter(d =>
      d.name.toLowerCase().includes(searchQuery) ||
      d.country.toLowerCase().includes(searchQuery) ||
      d.tags.some(t => t.toLowerCase().includes(searchQuery))
    );
    if (sortBy === 'rating') data.sort((a,b) => b.rating - a.rating);
    else if (sortBy === 'price-low') data.sort((a,b) => a.price - b.price);
    else if (sortBy === 'price-high') data.sort((a,b) => b.price - a.price);
    return data;
  }

  function render() {
    const filtered = getFiltered();
    grid.innerHTML = '';
    noResults.hidden = filtered.length > 0;
    const visible = filtered.slice(0, visibleCount);
    loadMoreBtn.style.display = filtered.length > visibleCount ? '' : 'none';

    visible.forEach((d, i) => {
      const card = document.createElement('article');
      card.className = 'dest-card card-animate';
      card.style.animationDelay = `${i * 0.07}s`;
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-label', `${d.name}, ${d.country}`);
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${d.image}" alt="${d.name}, ${d.country}" loading="lazy" width="600" height="220" />
          <span class="card-badge">${d.badge}</span>
          <button class="card-wishlist ${wished.has(d.id)?'wished':''}" data-id="${d.id}" aria-label="${wished.has(d.id)?'Remove from':'Add to'} wishlist: ${d.name}">♥</button>
        </div>
        <div class="card-body">
          <p class="card-region">${d.region} · ${d.country}</p>
          <h3 class="card-title">${d.name}</h3>
          <p class="card-desc">${d.desc}</p>
          <div class="card-tags">${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <div class="card-meta">
            <div class="card-rating">
              <span class="stars" aria-hidden="true">${renderStars(d.rating)}</span>
              <span>${d.rating} (${d.reviews.toLocaleString()})</span>
            </div>
            <div class="card-price">$${d.price.toLocaleString()} <span>/ person</span></div>
          </div>
        </div>`;

      card.querySelector('.card-wishlist').addEventListener('click', function(e) {
        e.stopPropagation();
        const id = parseInt(this.dataset.id);
        if (wished.has(id)) { wished.delete(id); this.classList.remove('wished'); this.setAttribute('aria-label', `Add to wishlist: ${d.name}`); }
        else { wished.add(id); this.classList.add('wished'); this.setAttribute('aria-label', `Remove from wishlist: ${d.name}`); }
      });

      grid.appendChild(card);
    });
  }

  // Debounce
  function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  }

  searchEl.addEventListener('input', debounce(e => {
    searchQuery = e.target.value.toLowerCase().trim();
    visibleCount = 6; render();
  }, 280));

  document.querySelectorAll('#destinations .chip').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('#destinations .chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.filter;
      visibleCount = 6; render();
    });
  });

  sortEl.addEventListener('change', e => { sortBy = e.target.value; render(); });

  loadMoreBtn.addEventListener('click', () => { visibleCount += 3; render(); });

  render();
})();

/* ══════════════════════════════════════════════════
   RESTAURANTS
══════════════════════════════════════════════════ */
(function initRestaurants() {
  const grid = document.getElementById('restaurants-grid');
  const searchEl = document.getElementById('rest-search');
  let activeCategory = 'all';
  let searchQuery = '';

  function renderStars(r) {
    return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
  }

  function render() {
    let data = [...RESTAURANTS];
    if (activeCategory !== 'all') data = data.filter(r => r.category === activeCategory);
    if (searchQuery) data = data.filter(r =>
      r.name.toLowerCase().includes(searchQuery) ||
      r.cuisine.toLowerCase().includes(searchQuery) ||
      r.location.toLowerCase().includes(searchQuery)
    );
    grid.innerHTML = '';
    data.forEach((r, i) => {
      const card = document.createElement('article');
      card.className = 'rest-card card-animate';
      card.style.animationDelay = `${i * 0.06}s`;
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="rest-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy" width="500" height="180" />
          ${r.michelin ? '<span class="michelin-badge">★ Michelin</span>' : ''}
        </div>
        <div class="rest-body">
          <p class="rest-cuisine">${r.cuisine}</p>
          <h3 class="rest-name">${r.name}</h3>
          <p class="rest-location">📍 ${r.location}</p>
          <div class="rest-footer">
            <div class="card-rating">
              <span class="stars" aria-label="${r.rating} stars">${renderStars(r.rating)}</span>
              <span style="font-size:0.8rem;color:var(--text-tertiary)">${r.reviews}</span>
            </div>
            <span class="price-level">${r.priceLevel}</span>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }

  function debounce(fn, wait) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); }; }

  searchEl.addEventListener('input', debounce(e => { searchQuery = e.target.value.toLowerCase().trim(); render(); }, 280));

  document.querySelectorAll('#restaurants .chip').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('#restaurants .chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.filter;
      render();
    });
  });

  render();
})();

/* ══════════════════════════════════════════════════
   GALLERY + LIGHTBOX
══════════════════════════════════════════════════ */
(function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  let currentIndex = 0;

  GALLERY_IMAGES.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Open ${img.caption}`);
    item.innerHTML = `
      <img src="${img.thumb}" alt="${img.caption}" loading="lazy" />
      <div class="gallery-overlay" aria-hidden="true">⊕</div>`;
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); } });
    galleryGrid.appendChild(item);
  });

  function openLightbox(idx) {
    currentIndex = idx;
    lbImg.src = GALLERY_IMAGES[idx].src;
    lbImg.alt = GALLERY_IMAGES[idx].caption;
    lbCaption.textContent = GALLERY_IMAGES[idx].caption;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lightbox-close').focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    document.querySelectorAll('.gallery-item')[currentIndex].focus();
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = GALLERY_IMAGES[currentIndex].src;
      lbImg.alt = GALLERY_IMAGES[currentIndex].caption;
      lbCaption.textContent = GALLERY_IMAGES[currentIndex].caption;
      lbImg.style.opacity = '1';
    }, 150);
  }

  lbImg.style.transition = 'opacity 0.15s ease';
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('lb-next').addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ══════════════════════════════════════════════════
   REVIEWS
══════════════════════════════════════════════════ */
(function initReviews() {
  const grid = document.getElementById('reviews-grid');

  REVIEWS.forEach((r, i) => {
    const card = document.createElement('article');
    card.className = 'review-card card-animate';
    card.style.animationDelay = `${i * 0.08}s`;
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="review-quote-mark">"</div>
      <p class="review-text">${r.text}</p>
      <div class="reviewer-info">
        <div class="reviewer-avatar" aria-hidden="true">${r.initials}</div>
        <div>
          <p class="reviewer-name">${r.name}</p>
          <p class="reviewer-place">${r.place}</p>
        </div>
        <div class="review-stars" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}</div>
      </div>`;
    grid.appendChild(card);
  });
})();

/* ── Review Form ─ */
(function initReviewForm() {
  const form = document.getElementById('review-form');
  const starPicker = document.getElementById('star-picker');
  const starBtns = starPicker.querySelectorAll('.star-btn');
  const ratingInput = document.getElementById('rating-value');
  let selectedRating = 0;

  starBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      const val = parseInt(btn.dataset.value);
      starBtns.forEach((b,i) => b.classList.toggle('active', i < val));
    });
    btn.addEventListener('mouseout', () => {
      starBtns.forEach((b,i) => b.classList.toggle('active', i < selectedRating));
    });
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.dataset.value);
      ratingInput.value = selectedRating;
      starBtns.forEach((b,i) => b.classList.toggle('active', i < selectedRating));
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    ['reviewer-name','reviewer-place','reviewer-comment'].forEach(id => {
      const el = document.getElementById(id);
      const err = el.closest('.field-wrap').querySelector('.field-error');
      if (!el.value.trim()) {
        el.classList.add('error'); err.textContent = 'This field is required.'; valid = false;
      } else { el.classList.remove('error'); err.textContent = ''; }
    });

    if (selectedRating === 0) { valid = false; starPicker.style.outline = '2px solid #e74c3c'; }
    else starPicker.style.outline = '';

    if (valid) {
      form.reset(); selectedRating = 0; ratingInput.value = 0;
      starBtns.forEach(b => b.classList.remove('active'));
      const success = document.getElementById('review-success');
      success.hidden = false;
      setTimeout(() => { success.hidden = true; }, 5000);
    }
  });

  // Live validation
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('blur', () => {
      if (el.required && !el.value.trim()) {
        el.classList.add('error');
        el.closest('.field-wrap').querySelector('.field-error').textContent = 'This field is required.';
      } else {
        el.classList.remove('error');
        const err = el.closest('.field-wrap')?.querySelector('.field-error');
        if (err) err.textContent = '';
      }
    });
  });
})();

/* ══════════════════════════════════════════════════
   MAP (Leaflet)
══════════════════════════════════════════════════ */
(function initMap() {
  const mapContainer = document.getElementById('leaflet-map');
  if (!mapContainer || typeof L === 'undefined') return;

  // Detect theme for map tiles
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const map = L.map('leaflet-map', {
    center: [30, 20], zoom: 2,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  const lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  });
  const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  });

  (isDark ? darkTiles : lightTiles).addTo(map);

  // Custom icon
  function makeIcon(type) {
    const colors = { 'Destination':'#C9A84C', 'Accommodation':'#3D5A47', 'Restaurant':'#A0522D', 'Wellness':'#7B68EE' };
    const color = colors[type] || '#C9A84C';
    return L.divIcon({
      className: '',
      html: `<div style="width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28]
    });
  }

  const markers = [];
  const listEl = document.getElementById('map-location-list');

  MAP_LOCATIONS.forEach((loc, i) => {
    const marker = L.marker([loc.lat, loc.lng], {icon: makeIcon(loc.type)})
      .addTo(map)
      .bindPopup(`<strong style="font-family:Georgia,serif">${loc.name}</strong><br><em style="color:#888;font-size:12px">${loc.type}</em><p style="margin:6px 0 0;font-size:13px">${loc.desc}</p>`);
    markers.push(marker);

    const btn = document.createElement('li');
    btn.innerHTML = `<button class="map-loc-btn" data-idx="${i}"><span class="loc-name">${loc.name}</span><span class="loc-type">${loc.type}</span></button>`;
    btn.querySelector('button').addEventListener('click', () => {
      map.flyTo([loc.lat, loc.lng], 8, {duration: 1.2});
      marker.openPopup();
      listEl.querySelectorAll('.map-loc-btn').forEach(b => b.classList.remove('active'));
      btn.querySelector('button').classList.add('active');
    });
    listEl.appendChild(btn);
  });

  // Update tiles on theme change
  const themeObserver = new MutationObserver(() => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) { map.removeLayer(lightTiles); darkTiles.addTo(map); }
    else { map.removeLayer(darkTiles); lightTiles.addTo(map); }
  });
  themeObserver.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
})();

/* ══════════════════════════════════════════════════
   BOOKING FORM
══════════════════════════════════════════════════ */
(function initBooking() {
  const form = document.getElementById('booking-form');
  const priceEl = document.getElementById('price-value');
  const typeEl = document.getElementById('b-type');
  const checkinEl = document.getElementById('b-checkin');
  const checkoutEl = document.getElementById('b-checkout');
  const guestsEl = document.getElementById('b-guests');

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  checkinEl.min = today;
  checkoutEl.min = today;
  checkinEl.addEventListener('change', () => { checkoutEl.min = checkinEl.value; updatePrice(); });

  // Guest counter
  document.getElementById('guests-minus').addEventListener('click', () => {
    const v = parseInt(guestsEl.value);
    if (v > 1) { guestsEl.value = v - 1; updatePrice(); }
  });
  document.getElementById('guests-plus').addEventListener('click', () => {
    const v = parseInt(guestsEl.value);
    if (v < 20) { guestsEl.value = v + 1; updatePrice(); }
  });

  const basePrices = { travel:1800, dining:180, combo:2200 };

  function updatePrice() {
    const type = typeEl.value;
    if (!type || !checkinEl.value || !checkoutEl.value) { priceEl.textContent = '—'; return; }
    const days = Math.max(1, (new Date(checkoutEl.value) - new Date(checkinEl.value)) / 86400000);
    const guests = parseInt(guestsEl.value) || 1;
    const base = basePrices[type] || 0;
    const total = type === 'dining' ? (base * guests) : (base * guests * days);
    priceEl.textContent = '$' + total.toLocaleString();
  }

  [typeEl, checkoutEl, guestsEl].forEach(el => el.addEventListener('change', updatePrice));

  // Validation helpers
  function validateField(input) {
    const wrap = input.closest('.field-wrap');
    if (!wrap) return true;
    const err = wrap.querySelector('.field-error');
    if (!err) return true;
    if (input.required && !input.value.trim()) {
      input.classList.add('error'); err.textContent = 'This field is required.'; return false;
    }
    if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.classList.add('error'); err.textContent = 'Enter a valid email address.'; return false;
    }
    if (input.id === 'b-checkout' && checkinEl.value && input.value <= checkinEl.value) {
      input.classList.add('error'); err.textContent = 'Check-out must be after check-in.'; return false;
    }
    input.classList.remove('error'); err.textContent = ''; return true;
  }

  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => { if (el.classList.contains('error')) validateField(el); });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = form.querySelectorAll('input, select, textarea');
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid = false; });

    const terms = document.getElementById('b-terms');
    const termsErr = terms.closest('.field-wrap').querySelector('.field-error');
    if (!terms.checked) { termsErr.textContent = 'You must agree to continue.'; valid = false; }
    else termsErr.textContent = '';

    if (valid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Processing…'; submitBtn.disabled = true;
      setTimeout(() => {
        form.reset(); updatePrice();
        submitBtn.textContent = 'Confirm Booking'; submitBtn.disabled = false;
        const success = document.getElementById('booking-success');
        success.hidden = false;
        success.scrollIntoView({behavior:'smooth', block:'nearest'});
        setTimeout(() => { success.hidden = true; }, 6000);
      }, 1200);
    }
  });
})();

/* ══════════════════════════════════════════════════
   NEWSLETTER
══════════════════════════════════════════════════ */
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = this.querySelector('input');
  const btn = this.querySelector('button');
  if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.style.borderColor = '#e74c3c'; return;
  }
  input.style.borderColor = '';
  btn.textContent = '✓ Subscribed!';
  input.value = '';
  setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
});

/* ══════════════════════════════════════════════════
   SMOOTH SCROLL — anchor links
══════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
