// =========================================================================
// Image wiring + Ken Burns observer + detail drawer
// =========================================================================

// Per-tile detail: place = Google Maps query (leave blank to hide map),
// tip = one-line advice, dayNum = which day (for drawer header).
// `coords` is [lat, lng] — when present, the map pinpoints it exactly,
// avoiding Google's guess from the free-text query.
const TILE_DETAILS = {
  'd1-see':    { day: 1, kind: 'See',   label: 'Tháp Nghinh Phong',  place: 'Tháp Nghinh Phong, Tuy Hòa, Vietnam',                   coords: [13.0838, 109.3326], tip: 'Go for sunset — the twin basalt towers catch the late light and the square fills with locals. Free entry. Ten minutes from anywhere in the city.' },
  'd1-eat':    { day: 1, kind: 'Eat',   label: 'Quán Bà Tám',         place: 'Quán Bà Tám, 289 Lê Duẩn, Tuy Hòa, Vietnam',           coords: [13.0877, 109.3232], tip: 'Ask for mắt cá ngừ đại dương (tuna eye in a clay pot) — the signature here, 2,000+ reviews can’t be wrong. Arrive by 19:00; they run out.' },
  'd1-sip':    { day: 1, kind: 'Sip',   label: 'Huy Tùng Coffee',     place: 'Huy Tùng Coffee, 125 Nguyễn Trãi, Tuy Hòa, Vietnam',   coords: [13.0895, 109.3194], tip: 'A heritage Phú Yên coffee house — order cà phê sữa đá and sit upstairs. Quiet, shaded, not for laptops.' },
  'd1-move':   { day: 1, kind: 'Move',  label: 'Airport → city',      place: 'Tuy Hòa Airport (TBB), Vietnam',                       coords: [13.0496, 109.3338], tip: 'Taxi counter is outside arrivals. ~150k VND to the city. Grab works but has fewer cars here than in big cities.' },

  'd2-see':    { day: 2, kind: 'See',   label: 'Mũi Điện & Bãi Môn',  place: 'Mũi Điện Lighthouse, Phú Yên, Vietnam',                coords: [12.8797, 109.4639], tip: 'First point in Vietnam to see the sunrise. The climb is 15 minutes of stairs — do it before 10am, after that the sun is brutal.' },
  'd2-cross':  { day: 2, kind: 'Cross', label: 'Hòn Nưa',             place: 'Vũng Rô Bay, Phú Yên, Vietnam',                        coords: [12.8625, 109.4183], tip: 'Skip the city-booked tours. Ride to Vũng Rô pier, hire a boat for 150–200k per person. Water’s clearest 11am–2pm.' },
  'd2-eat':    { day: 2, kind: 'Eat',   label: 'Bè nổi Vũng Rô',      place: 'Bè nổi Vi Anh, Vũng Rô, Phú Yên, Vietnam',             coords: [12.8668, 109.4134], tip: 'Floating raft — pick your seafood from the underwater cages. Prawns and oysters are the move. Cash only.' },
  'd2-ride':   { day: 2, kind: 'Ride',  label: 'Coastal loop',        place: '',                                                      tip: 'Back via the coastal road, not QL1. Longer by 30 minutes but hugs the cliffs. Fuel up before you leave the bay.' },

  'd3-see':    { day: 3, kind: 'See',   label: 'Hòn Yến',             place: 'Hòn Yến, Tuy An, Phú Yên, Vietnam',                    coords: [13.3192, 109.2744], tip: 'Time it to low tide — you can walk out to the coral garden when the sea pulls back. Check tides that morning before you ride.' },
  'd3-eat':    { day: 3, kind: 'Eat',   label: 'Đầm Ô Loan',          place: 'Đầm Ô Loan, Tuy An, Phú Yên, Vietnam',                 coords: [13.2797, 109.2922], tip: 'Order sò huyết (blood cockles) and a whole steamed grouper. The restaurants on stilts over the lagoon all serve the same thing — pick one with a breeze.' },
  'd3-wander': { day: 3, kind: 'Wander',label: 'Bãi Xép',             place: 'Bãi Xép, An Chấn, Phú Yên, Vietnam',                   coords: [13.2101, 109.2683], tip: 'The filming location from *Tôi thấy hoa vàng trên cỏ xanh*. Park at the top, the path down is short but steep. Golden hour is the whole point.' },
  'd3-ride':   { day: 3, kind: 'Ride',  label: 'Solo',                place: '',                                                      tip: 'Everything today is navigable on Google Maps. No tour needed — you’ll save half a day and most of the cost.' },

  'd4-see':    { day: 4, kind: 'See',   label: 'Gành Đá Đĩa',         place: 'Gành Đá Đĩa, An Ninh Đông, Phú Yên, Vietnam',          coords: [13.6505, 109.3075], tip: 'The hexagonal basalt columns are best at low tide when you can step all the way down. Arrive before 10am — tour buses show up by noon.' },
  'd4-swim':   { day: 4, kind: 'Swim',  label: 'Vịnh Hòa',            place: 'Vịnh Hòa Beach, Xuân Thọ, Phú Yên, Vietnam',           coords: [13.5131, 109.2856], tip: 'Quiet stretch off QL1D. Almost no facilities — good reason to stop, swim, eat a packed lunch, and move on.' },
  'd4-eat':    { day: 4, kind: 'Eat',   label: 'Sông Cầu',            place: 'Sông Cầu, Phú Yên, Vietnam',                           coords: [13.5378, 109.2317], tip: 'Lobster capital of Vietnam. Any roadside seafood spot on QL1D through Sông Cầu will have live tôm hùm tanks — pick one, grill it, ~800k/kg.' },
  'd4-ride':   { day: 4, kind: 'Ride',  label: 'Tuy Hòa GO',          place: '',                                                      tip: 'Book Tuy Hòa GO — transparent prices, the driver will stop wherever you point. Expect ~1.2–1.5M VND for the full day transfer.' },

  'd5-from':   { day: 5, kind: 'From',  label: 'Nhơn Hải',            place: 'Nhơn Hải, Quy Nhơn, Bình Định, Vietnam',               coords: [13.8039, 109.2773], tip: 'Ride in directly, skip the city-tour pickup. Park at the pier, walk to the boats — you’ll negotiate better on-site.' },
  'd5-snorkel':{ day: 5, kind: 'Snorkel',label: 'Hòn Khô',            place: 'Hòn Khô, Nhơn Hải, Quy Nhơn, Vietnam',                 coords: [13.8071, 109.2929], tip: '“Tour tại bến” at the pier is ~350k VND and includes canoe, snorkel gear, and a seafood lunch. Ask specifically for a child-sized life jacket (áo phao trẻ em).' },
  'd5-eat':    { day: 5, kind: 'Eat',   label: 'Hương Dương',         place: 'Hương Dương Seafood, Nhơn Hải, Quy Nhơn, Vietnam',     coords: [13.8045, 109.2778], tip: 'The highest-rated place in the village. Bánh xèo tôm nhảy — shrimp pancakes with shrimp that were alive 30 seconds ago — is the order.' },
  'd5-ride':   { day: 5, kind: 'Ride',  label: 'Bike day',            place: '',                                                      tip: 'Keep the bike for Bãi Xép Village in the afternoon — it’s a 25-minute ride south from Nhơn Hải, on the Quy Nhơn side.' },

  'd6-chill':  { day: 6, kind: 'Chill', label: 'Trung Lương',         place: 'Trung Lương Beach, Cát Tiến, Bình Định, Vietnam',      coords: [13.9550, 109.2633], tip: 'Pay the entrance fee, grab a thatched umbrella spot. Family-friendly, shallow water. Morning only — afternoon wind picks up.' },
  'd6-see':    { day: 6, kind: 'See',   label: 'Bãi Đá Trứng',        place: 'Bãi Đá Trứng, Ghềnh Ráng, Quy Nhơn, Vietnam',          coords: [13.7572, 109.2279], tip: 'The sea-polished “egg stones” are at the far end of Ghềnh Ráng Tiên Sa. No swimming (rocky, strong current) — it’s a look-and-sit beach.' },
  'd6-eat':    { day: 6, kind: 'Eat',   label: 'Ngô Văn Sở',          place: 'Ngô Văn Sở, Quy Nhơn, Vietnam',                        coords: [13.7671, 109.2252], tip: 'Whole-street food market. Grilled nem, tré (fermented pork), and sugarcane juice. End at Chè Nhớ (134 Ngô Mây) for dessert — been there since 1990.' },
  'd6-ride':   { day: 6, kind: 'Ride',  label: 'Last bike day',       place: '',                                                      tip: 'Return the bike by evening — most shops close by 20:00 in Quy Nhơn. Keep fuel receipts if they asked for a deposit.' },

  'd7-move':   { day: 7, kind: 'Move',  label: 'Quy Nhơn → Đà Nẵng',  place: '',                                                      tip: 'By car is ~6 hours via QL1. Open-bus or train works too. Book the morning slot so you land in Đà Nẵng with the afternoon free.' },
  'd7-rest':   { day: 7, kind: 'Rest',  label: 'Mỹ Khê',              place: 'Bãi biển Mỹ Khê, Đà Nẵng, Vietnam',                    coords: [16.0617, 108.2450], tip: 'Walk the beach promenade. Swim if you want, nap if you want. Don’t plan — that’s the point of this day.' },

  'd8-sip':    { day: 8, kind: 'Sip',   label: 'Morning cà phê',      place: '43 Factory Coffee Roaster, Đà Nẵng, Vietnam',          coords: [16.0378, 108.2461], tip: 'If you want a last proper specialty coffee before the flight — 43 Factory is the pick. Otherwise any phin coffee near the hotel is fine.' },
  'd8-fly':    { day: 8, kind: 'Fly',   label: 'DAD → HAN',           place: 'Da Nang International Airport (DAD), Vietnam',         coords: [16.0436, 108.1996], tip: 'Budget 2 hours before departure. Grab from Mỹ Khê is ~15 minutes outside rush. Terminal 1 is domestic — don’t go to Terminal 2.' },
};

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

function renderTile(tileId) {
  const t = TILE_DETAILS[tileId];
  if (!t) return;
  const day = DAY_DETAILS[t.day];
  sheetNum.textContent = day.num;
  sheetDate.textContent = day.date;
  sheetTitle.innerHTML = t.label;

  const hasMap = Boolean(t.place || t.coords);
  let html = `<section class="tile-meta"><span class="tile-kind">${t.kind}</span>${t.place ? `<span class="tile-place">${t.place.replace(/, Vietnam$/, '')}</span>` : ''}</section>`;
  if (hasMap) {
    const mapQ = t.coords ? `${t.coords[0]},${t.coords[1]}` : t.place;
    const embedSrc = t.coords
      ? `https://maps.google.com/maps?ll=${t.coords[0]},${t.coords[1]}&q=${t.coords[0]},${t.coords[1]}&z=15&ie=UTF8&iwloc=&output=embed`
      : `https://maps.google.com/maps?q=${encodeURIComponent(t.place)}&z=15&ie=UTF8&output=embed`;
    html += `<section class="tile-map"><iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${embedSrc}" allowfullscreen></iframe></section>`;
  }
  html += `<section class="tile-tip"><h4>Tip</h4><p>${t.tip}</p></section>`;
  if (hasMap) {
    const searchQ = t.place ? encodeURIComponent(t.place) : `${t.coords[0]},${t.coords[1]}`;
    html += `<section class="tile-actions"><a class="tile-action" href="https://www.google.com/maps/search/?api=1&query=${searchQ}" target="_blank" rel="noopener">Open in Google Maps ↗</a></section>`;
  }
  sheetBody.innerHTML = html;
}

function openTile(tileId) {
  renderTile(tileId);
  sheet.setAttribute('aria-hidden', 'false');
  sheet.classList.add('sheet--tile');
  document.body.classList.add('sheet-open');
  sheet.querySelector('.sheet-panel').scrollTop = 0;
}

document.querySelectorAll('.day-more').forEach((b) => {
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    sheet.classList.remove('sheet--tile');
    openSheet(Number(b.dataset.day));
  });
});

document.querySelectorAll('.tile[data-tile]').forEach((tile) => {
  tile.addEventListener('click', () => openTile(tile.dataset.tile));
});

sheet.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) closeSheet();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sheet.getAttribute('aria-hidden') === 'false') closeSheet();
});
