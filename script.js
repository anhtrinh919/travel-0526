// =========================================================================
// Image wiring + Ken Burns observer + detail drawer
// =========================================================================

const DAY_DETAILS = {
  1: {
    num: '01',
    date: '16 May · Friday',
    title: '<em>Arrival</em> at Tuy Hòa.',
    schedule: [
      ['13:30', 'Land in Tuy Hòa, taxi to hotel & check in.'],
      ['16:00', 'Tháp Nghinh Phong — basalt columns at golden hour.'],
      ['17:30', 'Walk the city beach, barefoot.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Bánh Canh Hẹ Thành Tùng', note: 'A Phú Yên chive specialty. Lê Lợi street.' },
      { kind: 'Snack', name: 'Bánh Mì Chấm Nguyễn Huệ', note: 'Bread dipped in meatball-and-egg broth. 94 Nguyễn Huệ.' },
      { kind: 'Dinner', name: 'Quán Bà Tám', note: '#1 spot for ocean tuna eye. 289 Lê Duẩn. 2,000+ reviews.' },
      { kind: 'Dinner alt.', name: 'Bếp Cố Đô', note: 'Upscale Central Vietnamese. 417 Hùng Vương.' },
      { kind: 'Café', name: 'Huy Tùng Coffee', note: 'Heritage Phú Yên brand. 125 Nguyễn Trãi.' },
      { kind: 'Café alt.', name: 'Noon Concept', note: 'Modern, minimalist, An Dương Vương.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Alone</em>. Ten-minute ride to the tower from the city.' },
      { label: 'Transport', text: 'Airport taxi on arrival; walk everything else.' },
    ],
  },
  2: {
    num: '02',
    date: '17 May · Saturday',
    title: 'South by <em>motorbike</em>.',
    schedule: [
      ['08:00', 'Mũi Điện lighthouse & Bãi Môn beach.'],
      ['12:00', 'Vũng Rô Bay lunch on a floating raft.'],
      ['13:30', 'Boat out to Hòn Nưa island.'],
      ['16:30', 'Coastal sunset ride back to the city.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Bè nổi Vi Anh', note: 'Floating raft in Vũng Rô, pick live seafood from cages.' },
      { kind: 'Lunch alt.', name: 'Bè nổi Thanh Niên', note: 'Most popular raft spot, same bay.' },
      { kind: 'Dinner', name: 'Cơm Niêu Năm Ánh', note: 'Family-style claypot rice. 394 Hùng Vương. 2,500+ reviews.' },
      { kind: 'Dinner alt.', name: 'Nem Nướng Nhật Hoàng', note: 'Grilled pork rolls. 04 Trần Bình Trọng.' },
      { kind: 'Café', name: 'Koi Cafe', note: 'Huge space with a fish pond — kids love it. An Dương Vương.' },
    ],
    logistics: [
      { label: 'Tour', text: 'Mũi Điện <em>alone</em>. For Hòn Nưa, hire a local boat at Vũng Rô wharf — <em>150–200k / person</em>.' },
      { label: 'Transport', text: 'Motorbike for the day.' },
    ],
  },
  3: {
    num: '03',
    date: '18 May · Sunday',
    title: 'North, to the <em>yellow flowers</em>.',
    schedule: [
      ['08:30', 'Hòn Yến — low-tide coral garden.'],
      ['12:00', 'Đầm Ô Loan lagoon, lunch on the water.'],
      ['15:30', 'Bãi Xép cliffs — the film’s yellow-flower hills.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Tuấn', note: 'Right on Ô Loan lagoon — order blood cockles.' },
      { kind: 'Lunch alt.', name: 'Nhà hàng Thúy Kiều', note: 'Cầu An Hải. Steamed grouper.' },
      { kind: 'Dinner', name: 'Bún cá Đất Phú', note: 'Clear, light fish noodle soup. 169 Lê Thánh Tôn.' },
      { kind: 'Dinner alt.', name: 'Cháo Hàu 373', note: 'Fresh oyster porridge, creamy and mild. 373 Nguyễn Huệ.' },
      { kind: 'Café', name: 'Alice — Tea Room', note: 'Garden villa, vintage vibe. An Dương Vương.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Alone</em>. Everything navigable by Google Maps.' },
      { label: 'Transport', text: 'Motorbike again.' },
    ],
  },
  4: {
    num: '04',
    date: '19 May · Monday',
    title: 'The <em>basalt</em> coast to Quy Nhơn.',
    schedule: [
      ['09:00', 'Gành Đá Đĩa — honeycomb basalt columns.'],
      ['11:30', 'QL1D scenic drive; stop at Vịnh Hòa beach.'],
      ['15:00', 'Arrive Quy Nhơn, check in.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Hải Sản Gành Đỏ', note: 'Sông Cầu — lobster capital of Vietnam. Halfway point.' },
      { kind: 'Dinner', name: 'Bếp Nhà Xứ Nẫu', note: 'Traditional garden home dining. 68 Nam Cao. 4.7★ (1,000+ reviews).' },
      { kind: 'Dinner alt.', name: 'Lẩu Cua Ông Minh', note: 'Famous crab hotpot. 29 Diên Hồng.' },
      { kind: 'Café', name: 'Surf Bar', note: 'Iconic beach cafe at sunset. Quy Nhơn beach.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Private car</em> — driver doubles as mini-guide.' },
      { label: 'Transport', text: 'Book with <em>Tuy Hòa GO</em> — transparent prices online.' },
      { label: 'Alt.', text: '<em>Hello Phú Yên</em> for deeper off-the-beaten-path options.' },
    ],
  },
  5: {
    num: '05',
    date: '20 May · Tuesday',
    title: '<em>Hòn Khô</em> by canoe.',
    schedule: [
      ['08:30', 'Ride to Nhơn Hải fishing village.'],
      ['09:30', 'Pier tour — canoe, snorkel, seafood lunch included.'],
      ['14:30', 'Bãi Xép Village (Quy Nhơn side) for beach chill.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Hương Dương Seafood', note: 'Highest-rated in Nhơn Hải. Fresh & reasonable.' },
      { kind: 'Dinner', name: 'Bún cá Ngọc Liên', note: 'Massive menu of fish & jellyfish noodle soups. 379 Nguyễn Huệ. 4,000+ reviews.' },
      { kind: 'Dinner alt.', name: 'Gia Vỹ 2', note: 'Best bánh xèo tôm nhảy (jumping-shrimp pancakes). 14 Diên Hồng.' },
      { kind: 'Café', name: 'Adiuvat Coffee Roasters', note: 'Specialty beans, quiet. Nguyễn Huệ.' },
    ],
    logistics: [
      { label: 'Tour', text: 'Buy a <em>“Tour tại bến”</em> at the Nhơn Hải pier — ~<em>350k VND</em>. Much cheaper than city-booked packages.' },
      { label: 'Ops.', text: '<em>Quy Nhơn Group Tour</em> or <em>Vương Khang Travel</em> operate at the wharf.' },
      { label: 'Transport', text: 'Motorbike to village. Ask for child-sized life jacket (áo phao trẻ em).' },
    ],
  },
  6: {
    num: '06',
    date: '21 May · Wednesday',
    title: 'Ghềnh Ráng & the <em>egg stones</em>.',
    schedule: [
      ['09:00', 'Trung Lương outdoor area — resort/beach chill.'],
      ['15:00', 'Ghềnh Ráng Tiên Sa & Egg Stone Beach.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Nhà Hàng Cánh Quạt', note: 'Near the giant wind turbines at Cát Tiến. Airy, good seafood.' },
      { kind: 'Dinner', name: 'Ngô Văn Sở Food Street', note: 'Paradise for grilled skewers, tré, fruit smoothies.' },
      { kind: 'Dessert', name: 'Chè Nhớ', note: 'Most famous dessert shop in Quy Nhơn (since 1990). 134 Ngô Mây.' },
      { kind: 'Café', name: 'Marina Coffee', note: 'Grand, high-ceiling cafe over the city square. 05 Đô Đốc Bảo.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Alone</em>. Just pay the Trung Lương entrance fee.' },
      { label: 'Transport', text: 'Last motorbike day.' },
    ],
  },
  7: {
    num: '07',
    date: '22 May · Thursday',
    title: 'North to <em>Đà Nẵng</em>.',
    schedule: [
      ['Morning', 'Transfer Quy Nhơn → Đà Nẵng.'],
      ['Afternoon', 'Check in, nap, find water.'],
      ['Evening', 'Walk the beach. No plans.'],
    ],
    picks: [
      { kind: 'Tonight', name: 'Something near Mỹ Khê.', note: 'Skip the research. Pick a seafood place on arrival.' },
    ],
    logistics: [
      { label: 'Transport', text: 'Private car or open-bus — ~6 hours north.' },
      { label: 'Mood', text: '<em>Nothing on the list.</em>' },
    ],
  },
  8: {
    num: '08',
    date: '23 May · Friday',
    title: 'Home. <em>Slow coffee</em>, then the flight.',
    schedule: [
      ['Morning', 'Beach walk. One last coffee.'],
      ['Afternoon', 'Taxi to Đà Nẵng airport → flight to Hà Nội.'],
    ],
    picks: [],
    logistics: [
      { label: 'Transport', text: 'Hotel airport transfer or <em>Grab</em> — DAD is 15 minutes from Mỹ Khê.' },
    ],
  },
};

// ========================== IMAGE WIRING =================================
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

  const splashKeys = manifest.__splash || ['ganh_da_dia', 'bai_xep_yellow', 'danang_beach'];
  document.querySelectorAll('.splash-layer').forEach((el, i) => {
    const key = splashKeys[i] || splashKeys[splashKeys.length - 1];
    const url = resolved[key];
    if (url) el.style.backgroundImage = `url("${url}")`;
  });

  document.querySelectorAll('[data-img]').forEach((el) => {
    const key = el.dataset.img;
    const url = resolved[key];
    if (!url) { el.classList.add('no-image'); return; }
    if (el.classList.contains('day')) {
      const bg = el.querySelector('.day-bg');
      if (bg) bg.style.backgroundImage = `url("${url}")`;
    } else if (el.classList.contains('tile')) {
      el.style.setProperty('--img', `url("${url}")`);
    } else {
      el.style.backgroundImage = `url("${url}")`;
    }
  });
})();

// =========================== KEN BURNS ===================================
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

// ========================= DETAIL DRAWER =================================
const sheet = document.getElementById('sheet');
const sheetNum = document.getElementById('sheet-num');
const sheetDate = document.getElementById('sheet-date');
const sheetTitle = document.getElementById('sheet-title');
const sheetBody = document.getElementById('sheet-body');

function renderDay(n) {
  const d = DAY_DETAILS[n];
  if (!d) return;
  sheetNum.textContent = d.num;
  sheetDate.textContent = d.date;
  sheetTitle.innerHTML = d.title;

  let html = '';
  if (d.schedule?.length) {
    html += '<section><h4>Hours</h4><div class="sheet-schedule">';
    for (const [time, what] of d.schedule) {
      html += `<div class="time">${time}</div><div class="what">${what}</div>`;
    }
    html += '</div></section>';
  }
  if (d.picks?.length) {
    html += '<section><h4>Eat & Drink</h4><div class="sheet-picks">';
    for (const p of d.picks) {
      html += `<div class="pick"><span class="pick-label">${p.kind}</span><span class="pick-name">${p.name}</span><span class="pick-note">${p.note}</span></div>`;
    }
    html += '</div></section>';
  }
  if (d.logistics?.length) {
    html += '<section><h4>Logistics</h4><div class="sheet-logistics">';
    for (const l of d.logistics) {
      html += `<div class="logi"><span class="logi-label">${l.label}</span><span class="logi-text">${l.text}</span></div>`;
    }
    html += '</div></section>';
  }
  sheetBody.innerHTML = html;
}

function openSheet(n) {
  renderDay(n);
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sheet-open');
  sheet.querySelector('.sheet-panel').scrollTop = 0;
}
function closeSheet() {
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sheet-open');
}

document.querySelectorAll('.day-more').forEach((b) => {
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    openSheet(Number(b.dataset.day));
  });
});

document.querySelectorAll('.day').forEach((section) => {
  const n = Number(section.id.replace('day-', ''));
  section.querySelectorAll('.tile').forEach((tile) => {
    tile.addEventListener('click', () => openSheet(n));
  });
});

sheet.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) closeSheet();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sheet.getAttribute('aria-hidden') === 'false') closeSheet();
});
