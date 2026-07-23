/**
 * Drop-in carousel engine.
 * Hooks into markup that already has:
 *   [data-js-carousel-container]   – the outer <section class="c-carousel">
 *   [data-js-carousel]             – the ".c-carousel__inner"
 *   [data-js-container]            – the sliding track (".c-carousel__content")
 *   [data-js-carousel-item]        – each slide
 *   .js-carousel__arrow-prev / .js-carousel__arrow-next
 *   [data-slideto]                 – pagination bullets
 *   [data-js-video-control-button] / [data-js-video-control-button-mute]
 *
 * No build step, no ES module imports pointing at a missing framework.
 * Include with a plain <script src="carousel.js"></script>.
 */
(function () {
  'use strict';

  function initCarousel(root) {
    const track = root.querySelector('[data-js-container]');
    const slides = Array.from(root.querySelectorAll('[data-js-carousel-item]'));
    if (!track || slides.length === 0) return;

    const prevBtn = root.querySelector('.js-carousel__arrow-prev');
    const nextBtn = root.querySelector('.js-carousel__arrow-next');
    const bullets = Array.from(root.querySelectorAll('[data-slideto]'));
    const ariaLive = root.querySelector('[data-js-carousel-aria]');

    let options = {};
    try {
      options = JSON.parse(root.getAttribute('data-component-options') || '{}');
    } catch (e) { /* ignore malformed JSON, fall back to defaults */ }

    const loop = !!options.loop;
    const autoplayDelay = options.autoplay && options.autoplay.delay
      ? options.autoplay.delay
      : null;

    let index = 0;
    let autoplayTimer = null;

    function clampOrWrap(i) {
      if (loop) return (i + slides.length) % slides.length;
      return Math.min(Math.max(i, 0), slides.length - 1);
    }

    function playVideoIn(slide) {
      const video = slide.querySelector('video');
      if (video) video.play().catch(() => {});
    }

    function pauseVideoIn(slide) {
      const video = slide.querySelector('video');
      if (video) video.pause();
    }

    function render() {
      track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
      track.style.transitionDuration = '500ms';

      slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('m-active', isActive);
        slide.classList.toggle('m-visible', isActive);
        slide.classList.toggle('m-fully-visible', isActive);
        slide.setAttribute('data-js-carousel-item-visible', String(isActive));
        if (isActive) playVideoIn(slide); else pauseVideoIn(slide);
      });

      bullets.forEach((bullet, i) => {
        const isActive = i === index;
        bullet.classList.toggle('m-current', isActive);
        bullet.classList.toggle('m-active', isActive);
        bullet.setAttribute('aria-current', String(isActive));
      });

      if (!loop) {
        if (prevBtn) {
          prevBtn.disabled = index === 0;
          prevBtn.classList.toggle('m-disabled', index === 0);
        }
        if (nextBtn) {
          nextBtn.disabled = index === slides.length - 1;
          nextBtn.classList.toggle('m-disabled', index === slides.length - 1);
        }
      }

      if (ariaLive) {
        const label = slides[index].getAttribute('aria-label') || `${index + 1} of ${slides.length}`;
        ariaLive.textContent = label;
      }
    }

    function goTo(i) {
      index = clampOrWrap(i);
      render();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function startAutoplay() {
      if (!autoplayDelay) return;
      stopAutoplay();
      autoplayTimer = setInterval(next, autoplayDelay);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); prev(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); next(); });
    bullets.forEach((bullet, i) => {
      bullet.addEventListener('click', () => { stopAutoplay(); goTo(i); });
    });

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', startAutoplay);

    root.setAttribute('tabindex', root.getAttribute('tabindex') || '0');
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { stopAutoplay(); prev(); }
      if (e.key === 'ArrowRight') { stopAutoplay(); next(); }
    });

    render();
    startAutoplay();

    // ---- Per-slide video play/pause + mute controls ----
    // m-pause / m-play and m-mute / m-unmute are separate icon classes in the
    // site's CSS (not one class toggled on/off), and only one of each pair
    // should be present at a time. We sync off the video's own events so the
    // icon always reflects real playback/mute state, not just click intent.
    root.querySelectorAll('[data-js-video-container]').forEach((container) => {
      const video = container.querySelector('video');
      if (!video) return;

      const media = container.closest('.c-video-asset__media') || container.parentElement;
      const playPauseBtn = media && media.querySelector('[data-js-video-control-button]');
      const muteBtn = media && media.querySelector('[data-js-video-control-button-mute]');

      function syncPlayState() {
        if (!playPauseBtn) return;
        playPauseBtn.classList.toggle('m-pause', !video.paused);
        playPauseBtn.classList.toggle('m-play', video.paused);
      }

      function syncMuteState() {
        if (!muteBtn) return;
        muteBtn.classList.toggle('m-unmute', video.muted);
        muteBtn.classList.toggle('m-mute', !video.muted);
      }

      video.addEventListener('play', syncPlayState);
      video.addEventListener('pause', syncPlayState);
      video.addEventListener('volumechange', syncMuteState);

      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
          if (video.paused) video.play().catch(() => {});
          else video.pause();
        });
      }
      if (muteBtn) {
        muteBtn.addEventListener('click', () => {
          video.muted = !video.muted;
          syncMuteState();
        });
      }

      // Set correct icon immediately on load, don't wait for first event
      syncPlayState();
      syncMuteState();
    });
  }

  function initAll() {
    document
      .querySelectorAll('[data-js-carousel-container]')
      .forEach(initCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();