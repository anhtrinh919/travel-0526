// Load image manifest and apply backgrounds to elements tagged with data-img="key".
// The manifest maps keys to an array of candidate URLs; we use the first that loads.

(async function () {
  const tryImage = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(null);
      img.src = url;
    });

  async function pickURL(candidates) {
    for (const url of candidates || []) {
      const ok = await tryImage(url);
      if (ok) return ok;
    }
    return null;
  }

  let manifest = {};
  try {
    const res = await fetch('images/manifest.json', { cache: 'no-store' });
    manifest = await res.json();
  } catch (e) {
    console.warn('[travel] manifest load failed', e);
  }

  // Resolve each key to a single working URL (parallel).
  const keys = Object.keys(manifest);
  const resolved = {};
  await Promise.all(
    keys.map(async (k) => {
      const entry = manifest[k];
      const urls = Array.isArray(entry) ? entry : entry?.urls || [];
      const url = await pickURL(urls);
      if (url) resolved[k] = url;
    })
  );

  // Apply to splash layers
  const splashKeys = (manifest.__splash || ['tuy_hoa_beach', 'ganh_da_dia', 'danang_beach']);
  document.querySelectorAll('.splash-layer').forEach((el, i) => {
    const key = splashKeys[i] || splashKeys[splashKeys.length - 1];
    const url = resolved[key];
    if (url) el.style.backgroundImage = `url("${url}")`;
  });

  // Apply to day backgrounds and tiles
  document.querySelectorAll('[data-img]').forEach((el) => {
    const key = el.dataset.img;
    const url = resolved[key];
    if (!url) {
      el.classList.add('no-image');
      return;
    }
    if (el.classList.contains('day')) {
      const bg = el.querySelector('.day-bg');
      if (bg) bg.style.backgroundImage = `url("${url}")`;
    } else if (el.classList.contains('tile')) {
      el.style.setProperty('--img', `url("${url}")`);
    } else {
      el.style.backgroundImage = `url("${url}")`;
    }
  });

  // Reveal day-bg Ken Burns when in viewport
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
        else e.target.classList.remove('is-visible');
      });
    },
    { threshold: 0.35 }
  );
  document.querySelectorAll('.day').forEach((d) => io.observe(d));

  // Touch: tap to reveal tile sub text (toggle)
  document.querySelectorAll('.tile').forEach((t) => {
    t.addEventListener('click', () => {
      // collapse siblings
      t.parentElement.querySelectorAll('.tile.is-touched').forEach((o) => {
        if (o !== t) o.classList.remove('is-touched');
      });
      t.classList.toggle('is-touched');
    });
  });
})();
