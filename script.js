document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target === lightboxImage) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  navToggle.addEventListener('click', () => {
    siteNav.style.display = siteNav.style.display === 'flex' ? 'none' : 'flex';
    siteNav.style.flexDirection = 'column';
    siteNav.style.gap = '0.8rem';
    siteNav.style.background = 'rgba(13,13,16,0.95)';
    siteNav.style.padding = '0.8rem';
  });
});
