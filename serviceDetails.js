document.addEventListener('DOMContentLoaded', function () {
  const detailsPanel = document.getElementById('serviceDetails');
  let activeService = null;

  const services = {
    frenchHorn: {
      title: 'French Horn Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'French horn lessons are available for all skill levels, from complete beginners to advanced players. Each lesson is personalized to your needs and goals, covering everything from embouchure and posture to the technical intricacies of advanced playing. Sessions are taught live over video and include demonstrations, musical interpretation, and plenty of room for questions. No prior experience needed.'
    },
    trumpet: {
      title: 'Trumpet Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Trumpet lessons are available for all skill levels, from complete beginners to advanced players. Each lesson is personalized to your needs and goals, covering everything from embouchure and posture to the technical intricacies of advanced playing. Sessions are taught live over video and include demonstrations, musical interpretation, and plenty of room for questions. No prior experience needed.'
    },
    accordion: {
      title: 'Accordion Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Accordion lessons are available for beginner and intermediate skill levels. Each lesson is personalized to your needs and goals, covering everything from basic hand positioning and bellows control to expressive techniques and repertoire across various genres. Sessions are taught live over video and include demonstrations, musical interpretation, and plenty of room for questions. No prior experience needed.'
    },
    musicTheory: {
      title: 'Music Theory Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Music theory lessons are available for all skill levels, from complete beginners to advanced students. Each lesson is personalized to your needs and goals, covering everything from reading and writing notation to chord progressions, song structure, and ear training. Sessions are taught live over video and include demonstrations, analysis of the music you love, and plenty of room for questions! No prior experience needed.'
    },
    musicProduction: {
      title: 'Music Production Lessons',
      pricing: ['$30 / 30 min', '$45 / 45 min', '$60 / 1 hr'],
      description: 'Ever wanted to make music that sounds like it belongs on a record? Music production lessons are available for all skill levels, and with over a decade of professional studio experience behind me, I know exactly what it takes to get there. Each lesson is personalized to your goals and your preferred DAW, whether that\'s FL Studio, Cubase, Ableton, or Bandlab, covering everything from your first project to professional mixing and arrangement. Sessions are taught live over video with demonstrations, hands-on projects, and plenty of room for questions. No prior experience needed.'
    },
    customProduction: {
      title: 'Music Production & Mixing Services',
      pricing: ['Starting at $350 · contact for a custom quote', '3 free revisions included'],
      description: 'Whether you need a polished single, a full EP, or a score for your next game, I bring over a decade of music experience and a professional studio background to every project. I work across virtually any genre, from singer-songwriter and folk to metal, electronic, orchestral, and beyond, and my goal is always the same: music that sounds exactly how you imagined it, at a professional, release-ready quality. Every project is quoted individually based on scope, so you only pay for what you actually need.'
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
