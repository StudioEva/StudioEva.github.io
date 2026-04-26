document.addEventListener('DOMContentLoaded', function () {
  const detailsPanel = document.getElementById('serviceDetails');
  let activeService = null;

  const services = {
    frenchHorn: {
      title: 'Private French Horn Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Students will receive personalized instruction tailored to their needs, suitable for both beginners and more advanced players. Lessons cover proper posture, hand positioning, embouchure, intonation, and air support — all structured to progress at your own pace. Taught through live video sessions with demonstrations, Q&A, and discussions on musical interpretation. No previous experience required.'
    },
    trumpet: {
      title: 'Private Trumpet Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Personalized instruction for beginners through advanced players, covering posture, embouchure, intonation, and air support at your own pace. Lessons are taught through live video sessions with demonstrations, Q&A, and discussions on musical interpretation and practice strategies. No previous experience required.'
    },
    musicTheory: {
      title: 'Private Music Theory Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Ready to understand the language behind the music you love? Go from the basics of notes and rhythm to how chords build song structure. You\'ll learn to read and write music, train your ear, and analyze your favorite pieces. Taught through interactive live video sessions. No previous experience required.'
    },
    musicProduction: {
      title: 'Private Music Production Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Learn to create professional-sounding music in your favorite genre using FL Studio or Cubase. One-on-one video lessons that move at your pace, whether you\'re brand new to production or looking to sharpen existing skills. You\'ll finish with real, bolstered confidence in your abilities.'
    },
    customProduction: {
      title: 'Custom Music Production',
      pricing: ['$70 / minute of music'],
      description: 'Need music professionally produced? I offer comprehensive audio work across soundtracks, pop, singer-songwriter, and orchestral genres — for games, artists, and any creative project. I\'m currently offering a heavily discounted rate as I expand my portfolio. Let\'s bring your vision to life.'
    }
  };

  function isMobile() {
    return window.innerWidth < 992;
  }

  function buildCard(serviceKey) {
    const data = services[serviceKey];
    const pricingHtml = data.pricing
      .map(p => `<span class="price-pill">${p}</span>`)
      .join('');
    return `
      <div class="service-detail-card">
        <button class="service-detail-close" aria-label="Close">&#x2715;</button>
        <h3>${data.title}</h3>
        <div class="service-pricing">${pricingHtml}</div>
        <p>${data.description}</p>
        <a href="#contact" class="service-cta">Get in Touch</a>
      </div>
    `;
  }

  function attachCardListeners(container) {
    container.querySelector('.service-detail-close').addEventListener('click', closeService);
    container.querySelector('.service-cta').addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector('#contact');
      if (target) window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });
  }

  function openService(serviceKey) {
    document.querySelectorAll('.icon-box[data-service]').forEach(b => b.classList.remove('active'));
    const box = document.querySelector(`.icon-box[data-service="${serviceKey}"]`);
    if (box) box.classList.add('active');

    if (isMobile()) {
      // Remove any existing inline mobile card
      const existing = document.querySelector('.mobile-service-detail');
      if (existing) existing.remove();

      const wrapper = document.createElement('div');
      wrapper.className = 'col-12 mobile-service-detail';
      wrapper.innerHTML = buildCard(serviceKey);
      box.insertAdjacentElement('afterend', wrapper);
      attachCardListeners(wrapper);

      setTimeout(() => wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    } else {
      detailsPanel.innerHTML = buildCard(serviceKey);
      detailsPanel.classList.add('open');
      attachCardListeners(detailsPanel);
    }

    activeService = serviceKey;
  }

  function closeService() {
    detailsPanel.classList.remove('open');
    detailsPanel.innerHTML = '';

    const mobileCard = document.querySelector('.mobile-service-detail');
    if (mobileCard) mobileCard.remove();

    document.querySelectorAll('.icon-box[data-service]').forEach(b => b.classList.remove('active'));
    activeService = null;
  }

  document.querySelectorAll('.icon-box[data-service]').forEach(function (box) {
    box.addEventListener('click', function () {
      const serviceKey = this.getAttribute('data-service');
      if (activeService === serviceKey) {
        closeService();
      } else {
        openService(serviceKey);
      }
    });
  });
});
