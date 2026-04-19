// =========================================================================
// Travel microsite — 9 days, tile + day drawers, route overview map
// =========================================================================

const TILE_DETAILS = {
  // DAY 1 — 15 May — Arrival
  'd1-move':    { day: 1, kind: 'Move',    label: 'Airport → city',       place: 'Tuy Hòa Airport (TBB), Vietnam',                     coords: [13.0496, 109.3338], tip: 'Taxi counter is outside arrivals. ~150k VND to the city. Grab works but has fewer cars here than in big cities.' },
  'd1-see':     { day: 1, kind: 'See',     label: 'Tháp Nghinh Phong',    place: 'Tháp Nghinh Phong, Tuy Hòa, Vietnam',                coords: [13.0838, 109.3326], tip: 'Go for sunset — the twin basalt towers catch the late light and the square fills with locals. Free entry. Ten minutes from anywhere in the city.' },
  'd1-eat':     { day: 1, kind: 'Eat',     label: 'Quán Bà Tám',           place: 'Quán Bà Tám, 289 Lê Duẩn, Tuy Hòa, Vietnam',         coords: [13.0877, 109.3232], tip: 'Ask for mắt cá ngừ đại dương (tuna eye in a clay pot) — the signature here, 2,000+ reviews can’t be wrong. Arrive by 19:00; they run out.' },
  'd1-sip':     { day: 1, kind: 'Sip',     label: 'Huy Tùng',              place: 'Huy Tùng Coffee, 125 Nguyễn Trãi, Tuy Hòa, Vietnam', coords: [13.0895, 109.3194], tip: 'A heritage Phú Yên coffee house — order cà phê sữa đá and sit upstairs. Quiet, shaded, not for laptops.' },

  // DAY 2 — 16 May — South Phú Yên
  'd2-see':     { day: 2, kind: 'See',     label: 'Mũi Điện & Bãi Môn',    place: 'Mũi Điện Lighthouse, Phú Yên, Vietnam',              coords: [12.8797, 109.4639], tip: 'First point in Vietnam to see the sunrise. The climb is 15 minutes of stairs — do it before 10am, after that the sun is brutal.' },
  'd2-cross':   { day: 2, kind: 'Cross',   label: 'Hòn Nưa',               place: 'Vũng Rô Bay, Phú Yên, Vietnam',                      coords: [12.8625, 109.4183], tip: 'Skip the city-booked tours. Ride to Vũng Rô pier, hire a boat for 150–200k per person. Water’s clearest 11am–2pm.' },
  'd2-eat':     { day: 2, kind: 'Eat',     label: 'Bè nổi Vũng Rô',        place: 'Bè nổi Vi Anh, Vũng Rô, Phú Yên, Vietnam',           coords: [12.8668, 109.4134], tip: 'Floating raft — pick your seafood from the underwater cages. Prawns and oysters are the move. Cash only.' },
  'd2-ride':    { day: 2, kind: 'Ride',    label: 'Coastal loop',          place: '',                                                   tip: 'Back via the coastal road, not QL1. Longer by 30 minutes but hugs the cliffs. Fuel up before you leave the bay.' },

  // DAY 3 — 17 May — North Phú Yên
  'd3-see':     { day: 3, kind: 'See',     label: 'Hòn Yến',               place: 'Hòn Yến, Tuy An, Phú Yên, Vietnam',                  coords: [13.3192, 109.2744], tip: 'Time it to low tide — you can walk out to the coral garden when the sea pulls back. Check tides that morning before you ride.' },
  'd3-eat':     { day: 3, kind: 'Eat',     label: 'Đầm Ô Loan',            place: 'Đầm Ô Loan, Tuy An, Phú Yên, Vietnam',               coords: [13.2797, 109.2922], tip: 'Order sò huyết (blood cockles) and a whole steamed grouper. The restaurants on stilts over the lagoon all serve the same thing — pick one with a breeze.' },
  'd3-wander':  { day: 3, kind: 'Wander',  label: 'Bãi Xép',               place: 'Bãi Xép, An Chấn, Phú Yên, Vietnam',                 coords: [13.2101, 109.2683], tip: 'The filming location from Tôi thấy hoa vàng trên cỏ xanh. Park at the top, the path down is short but steep. Golden hour is the whole point.' },
  'd3-ride':    { day: 3, kind: 'Ride',    label: 'Solo',                  place: '',                                                   tip: 'Everything today is navigable on Google Maps. No tour needed — you’ll save half a day and most of the cost.' },

  // DAY 4 — 18 May — Transfer to Quy Nhơn
  'd4-see':     { day: 4, kind: 'See',     label: 'Gành Đá Đĩa',           place: 'Gành Đá Đĩa, An Ninh Đông, Phú Yên, Vietnam',        coords: [13.6505, 109.3075], tip: 'The hexagonal basalt columns are best at low tide when you can step all the way down. Arrive before 10am — tour buses show up by noon.' },
  'd4-swim':    { day: 4, kind: 'Swim',    label: 'Vịnh Hòa',              place: 'Vịnh Hòa Beach, Xuân Thọ, Phú Yên, Vietnam',         coords: [13.5131, 109.2856], tip: 'Quiet stretch off QL1D. Almost no facilities — good reason to stop, swim, eat a packed lunch, and move on.' },
  'd4-eat':     { day: 4, kind: 'Eat',     label: 'Sông Cầu',              place: 'Sông Cầu, Phú Yên, Vietnam',                         coords: [13.5378, 109.2317], tip: 'Lobster capital of Vietnam. Any roadside seafood spot on QL1D through Sông Cầu will have live tôm hùm tanks — pick one, grill it, ~800k/kg.' },
  'd4-ride':    { day: 4, kind: 'Ride',    label: 'Tuy Hòa GO',            place: '',                                                   tip: 'Book Tuy Hòa GO — transparent prices, the driver will stop wherever you point. Expect ~1.2–1.5M VND for the full day transfer.' },

  // DAY 5 — 19 May — Hòn Khô
  'd5-snorkel': { day: 5, kind: 'Snorkel', label: 'Hòn Khô',               place: 'Hòn Khô, Nhơn Hải, Quy Nhơn, Vietnam',               coords: [13.8071, 109.2929], tip: '“Tour tại bến” at the Nhơn Hải pier is ~350k VND and includes canoe, snorkel gear, seafood lunch, and a walk across the tidal stone bridge. Ask for a child-sized life jacket (áo phao trẻ em).' },
  'd5-eat':     { day: 5, kind: 'Eat',     label: 'Nhơn Hải',              place: 'Nhơn Hải Village, Quy Nhơn, Vietnam',                coords: [13.8039, 109.2773], tip: 'Lunch in the village after the island — fresh snail and squid at any of the small family-run spots near the pier. Hương Dương Seafood is the highest-rated.' },
  'd5-ride':    { day: 5, kind: 'Ride',    label: 'Bike day',              place: '',                                                   tip: 'Rent from the hotel or a shop on Xuân Diệu. ~120–150k/day. You’ll want it again tomorrow, so negotiate a 2-day rate.' },

  // DAY 6 — 20 May — Chill → Bãi Xép → ExploraScience
  'd6-chill':   { day: 6, kind: 'Chill',   label: 'Morning rest',          place: '',                                                   tip: 'Pool, city beach, or a slow brunch on Xuân Diệu. The afternoon is a walk; tonight is the stars. Sleep in guilt-free.' },
  'd6-wander':  { day: 6, kind: 'Wander',  label: 'Bãi Xép Village',       place: 'Bãi Xép Village, Ghềnh Ráng, Quy Nhơn, Vietnam',     coords: [13.7390, 109.2467], tip: 'A tiny fishing cove five minutes south of the city. Walk the sand, watch the thúng-chai (basket boats) come in, grab a drink at a beach bar. Low-key, no schedule.' },
  'd6-visit':   { day: 6, kind: 'Visit',   label: 'ExploraScience',        place: 'ExploraScience Quy Nhơn, 10 Đại lộ Khoa học, Vietnam', coords: [13.7471, 109.2226], tip: 'Open Wed afternoon (14:00–17:30) and Wed night (19:00–21:00). Explore the 7 theme rooms + planetarium in the afternoon, then stay for the Observatory stargazing at 19:00. Book online at ticket.explorascience.vn (~120–150k). Cloudy skies cancel the telescope session.' },

  // DAY 7 — 21 May — All day at Trung Lương
  'd7-chill':   { day: 7, kind: 'Chill',   label: 'Trung Lương',           place: 'Trung Lương Beach, Cát Tiến, Bình Định, Vietnam',    coords: [13.9550, 109.2633], tip: 'Resort-style beach park — grass, colourful tents, a short path down to a protected crystal cove. Pay the entrance fee, claim a spot, and plant it all day.' },
  'd7-eat':     { day: 7, kind: 'Eat',     label: 'Cát Tiến',              place: 'Nhà hàng Cánh Quạt, Cát Tiến, Bình Định, Vietnam',   coords: [13.9441, 109.2563], tip: 'Nhà hàng Cánh Quạt — airy seafood spot under the giant wind turbines, 5 minutes from Trung Lương. Fresh squid and clams, cold beer.' },
  'd7-see':     { day: 7, kind: 'See',     label: 'Thị Nại Bridge',        place: 'Cầu Thị Nại, Quy Nhơn, Vietnam',                     coords: [13.8144, 109.2039], tip: 'Once the longest sea-crossing bridge in Vietnam. On the ride back to the city, stop halfway across for the lagoon sunset. Viewpoint is right by the rail.' },

  // DAY 8 — 22 May — Travel to Đà Nẵng
  'd8-move':    { day: 8, kind: 'Move',    label: 'Quy Nhơn → Đà Nẵng',    place: '',                                                   tip: 'By car is ~6 hours via QL1. Open-bus or train works too. Book the morning slot so you land in Đà Nẵng with the afternoon free.' },
  'd8-rest':    { day: 8, kind: 'Rest',    label: 'Mỹ Khê',                place: 'Bãi biển Mỹ Khê, Đà Nẵng, Vietnam',                  coords: [16.0617, 108.2450], tip: 'Walk the beach promenade. Swim if you want, nap if you want. Don’t plan — that’s the point of this day.' },

  // DAY 9 — 23 May — Departure
  'd9-sip':     { day: 9, kind: 'Sip',     label: 'Morning cà phê',        place: '43 Factory Coffee Roaster, Đà Nẵng, Vietnam',        coords: [16.0378, 108.2461], tip: 'If you want a last proper specialty coffee before the flight — 43 Factory is the pick. Otherwise any phin coffee near the hotel is fine.' },
  'd9-fly':     { day: 9, kind: 'Fly',     label: 'DAD → HAN',             place: 'Da Nang International Airport (DAD), Vietnam',       coords: [16.0436, 108.1996], tip: 'Budget 2 hours before departure. Grab from Mỹ Khê is ~15 minutes outside rush. Terminal 1 is domestic — don’t go to Terminal 2.' },
};

const DAY_DETAILS = {
  1: {
    num: '01', date: '15 May · Friday', title: '<em>Arrival</em> at Tuy Hòa.',
    schedule: [
      ['13:35', 'Land in Tuy Hòa, taxi to hotel & check in.'],
      ['16:00', 'Tháp Nghinh Phong — basalt columns at golden hour.'],
      ['17:30', 'Walk the city beach, barefoot.'],
      ['19:00', 'Dinner at Quán Bà Tám.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Bánh Canh Hẹ Thành Tùng', note: 'A Phú Yên chive specialty. Lê Lợi street.' },
      { kind: 'Snack', name: 'Bánh Mì Chấm Nguyễn Huệ', note: 'Bread dipped in meatball-and-egg broth. 94 Nguyễn Huệ.' },
      { kind: 'Dinner', name: 'Quán Bà Tám', note: '#1 for ocean tuna eye. 289 Lê Duẩn.' },
      { kind: 'Café', name: 'Huy Tùng Coffee', note: 'Heritage Phú Yên brand. 125 Nguyễn Trãi.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Alone</em>. Ten-minute ride to the tower from the city.' },
      { label: 'Transport', text: 'Airport taxi on arrival; walk everything else.' },
    ],
  },
  2: {
    num: '02', date: '16 May · Saturday', title: 'South by <em>motorbike</em>.',
    schedule: [
      ['08:00', 'Mũi Điện lighthouse & Bãi Môn beach.'],
      ['12:00', 'Vũng Rô Bay lunch on a floating raft.'],
      ['13:30', 'Boat out to Hòn Nưa island.'],
      ['16:30', 'Coastal sunset ride back to the city.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Bè nổi Vi Anh / Thanh Niên', note: 'Floating rafts in Vũng Rô. Live seafood from cages.' },
      { kind: 'Dinner', name: 'Cơm Niêu Năm Ánh', note: 'Claypot rice. 394 Hùng Vương. 2,500+ reviews.' },
      { kind: 'Dinner alt.', name: 'Nem Nướng Nhật Hoàng', note: 'Grilled pork rolls. 04 Trần Bình Trọng.' },
      { kind: 'Café', name: 'Koi Cafe', note: 'Fish-pond space. An Dương Vương.' },
    ],
    logistics: [
      { label: 'Tour', text: 'Mũi Điện <em>alone</em>. For Hòn Nưa, hire a boat at Vũng Rô wharf — <em>150–200k / person</em>.' },
      { label: 'Transport', text: 'Motorbike.' },
    ],
  },
  3: {
    num: '03', date: '17 May · Sunday', title: 'North, to the <em>yellow flowers</em>.',
    schedule: [
      ['08:30', 'Hòn Yến — low-tide coral garden.'],
      ['12:00', 'Đầm Ô Loan lunch on the lagoon.'],
      ['15:30', 'Bãi Xép cliffs — the film’s yellow-flower hills.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Tuấn', note: 'On Ô Loan lagoon — blood cockles.' },
      { kind: 'Lunch alt.', name: 'Nhà hàng Thúy Kiều', note: 'Cầu An Hải. Steamed grouper.' },
      { kind: 'Dinner', name: 'Bún cá Đất Phú', note: 'Light fish noodle soup. 169 Lê Thánh Tôn.' },
      { kind: 'Café', name: 'Alice — Tea Room', note: 'Garden villa. An Dương Vương.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Alone</em>. Navigable by Google Maps.' },
      { label: 'Transport', text: 'Motorbike.' },
    ],
  },
  4: {
    num: '04', date: '18 May · Monday', title: 'The <em>basalt</em> coast to Quy Nhơn.',
    schedule: [
      ['09:00', 'Gành Đá Đĩa — honeycomb basalt columns.'],
      ['11:30', 'QL1D scenic drive; stop at Vịnh Hòa.'],
      ['15:00', 'Arrive Quy Nhơn, check in.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Hải Sản Gành Đỏ', note: 'Sông Cầu — lobster capital of Vietnam.' },
      { kind: 'Dinner', name: 'Bếp Nhà Xứ Nẫu', note: 'Garden-home dining. 68 Nam Cao. 4.7★.' },
      { kind: 'Dinner alt.', name: 'Lẩu Cua Ông Minh', note: 'Famous crab hotpot. 29 Diên Hồng.' },
      { kind: 'Café', name: 'Surf Bar', note: 'Iconic beach cafe at sunset.' },
    ],
    logistics: [
      { label: 'Tour', text: '<em>Private car</em> — driver doubles as mini-guide.' },
      { label: 'Transport', text: 'Book <em>Tuy Hòa GO</em>. Transparent online prices.' },
    ],
  },
  5: {
    num: '05', date: '19 May · Tuesday', title: '<em>Hòn Khô</em> by canoe.',
    schedule: [
      ['08:00', 'Ride to Nhơn Hải. Canoe, snorkel, walk the tidal stone bridge.'],
      ['12:00', 'Lunch at Nhơn Hải village — snails, squid, fresh fish.'],
      ['13:30', 'Ride back across the bridge to the city.'],
      ['Evening', 'Quiet dinner in Quy Nhơn; early night.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Hương Dương Seafood', note: 'Village favourite in Nhơn Hải.' },
      { kind: 'Dinner', name: 'Bún cá Ngọc Liên', note: '379 Nguyễn Huệ. 4,000+ reviews.' },
      { kind: 'Dinner alt.', name: 'Gia Vỹ 2', note: 'Best bánh xèo tôm nhảy. 14 Diên Hồng.' },
      { kind: 'Café', name: 'Adiuvat Coffee Roasters', note: 'Specialty beans. Nguyễn Huệ.' },
    ],
    logistics: [
      { label: 'Tour', text: 'Hòn Khô pier tour at Nhơn Hải — <em>~350k VND</em>. Includes canoe, gear, lunch.' },
      { label: 'Transport', text: 'Motorbike. Negotiate a 2-day rate — you’ll need it again tomorrow.' },
      { label: 'Safety', text: 'Ask for a child-sized life jacket (<em>áo phao trẻ em</em>) before the boat leaves.' },
    ],
  },
  6: {
    num: '06', date: '20 May · Wednesday', title: 'A <em>slow</em> morning, then the stars.',
    schedule: [
      ['Morning', 'Sleep in. Pool or city beach. No agenda.'],
      ['14:00', 'Ride south to Bãi Xép Village, Ghềnh Ráng.'],
      ['16:30', 'Afternoon drink by the cove.'],
      ['18:00', 'ExploraScience — 7 theme rooms + Science Show.'],
      ['19:00', 'Observatory — Wed-night stargazing session.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Wherever is close', note: 'Light — you’ll eat again later.' },
      { kind: 'Sunset drink', name: 'Surf Bar / Bãi Xép', note: 'Chairs in the sand, string lights after dark.' },
      { kind: 'Dinner', name: 'ExploraScience café', note: 'On-site, between museum and observatory.' },
    ],
    logistics: [
      { label: 'Entry', text: 'Book ExploraScience online at <em>ticket.explorascience.vn</em>. ~<em>120–150k</em> per person.' },
      { label: 'Observatory', text: 'Wed nights 19:00–21:00 only. Cancelled if overcast — have a backup dinner plan.' },
      { label: 'Transport', text: 'Bike south; Grab back if tired.' },
    ],
  },
  7: {
    num: '07', date: '21 May · Thursday', title: 'All day at <em>Trung Lương</em>.',
    schedule: [
      ['09:30', 'Ride north to Trung Lương Outdoor Area.'],
      ['12:00', 'Lunch at Cát Tiến (Nhà hàng Cánh Quạt).'],
      ['13:30', 'Back to Trung Lương. Nap, swim, repeat.'],
      ['16:30', 'Ride home via Thị Nại Bridge at sunset.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Nhà hàng Cánh Quạt', note: 'Airy seafood under the wind turbines, Cát Tiến.' },
      { kind: 'Dinner', name: 'Back in Quy Nhơn', note: 'Any street stall — you’ll be salty and tired.' },
      { kind: 'Café', name: 'Marina Coffee', note: 'If you still have energy. 05 Đô Đốc Bảo.' },
    ],
    logistics: [
      { label: 'Entry', text: 'Pay the Trung Lương entrance fee on arrival (~<em>50k / person</em>).' },
      { label: 'Transport', text: 'Motorbike. Last bike day — return the rental by evening.' },
      { label: 'Route', text: 'On the way home, cross <em>Thị Nại Bridge</em> for the sunset view over the lagoon.' },
    ],
  },
  8: {
    num: '08', date: '22 May · Friday', title: 'North to <em>Đà Nẵng</em>.',
    schedule: [
      ['Morning', 'Transfer Quy Nhơn → Đà Nẵng.'],
      ['Afternoon', 'Check in, nap, find water.'],
      ['Evening', 'Walk the beach. No plans.'],
    ],
    picks: [
      { kind: 'Tonight', name: 'Something near Mỹ Khê.', note: 'Skip the research. Pick a seafood spot on arrival.' },
    ],
    logistics: [
      { label: 'Transport', text: 'Private car ~6 hours via QL1; open-bus or train also work.' },
      { label: 'Mood', text: '<em>Nothing on the list.</em>' },
    ],
  },
  9: {
    num: '09', date: '23 May · Saturday', title: 'Home. <em>Slow coffee</em>, then the flight.',
    schedule: [
      ['Morning', 'Beach walk. One last coffee.'],
      ['Afternoon', 'Taxi to Đà Nẵng airport → flight to Hà Nội.'],
    ],
    picks: [],
    logistics: [
      { label: 'Transport', text: 'Hotel airport transfer or Grab — DAD is 15 minutes from Mỹ Khê.' },
    ],
  },
};

// Activity-only tiles (no eat/sip/move/ride) for the route overview map,
// in strict day order. One pin per place.
const ROUTE_STOPS = [
  'd1-see',
  'd2-see', 'd2-cross',
  'd3-see', 'd3-wander',
  'd4-see', 'd4-swim',
  'd5-snorkel',
  'd6-wander', 'd6-visit',
  'd7-chill', 'd7-see',
  'd8-rest',
];

// ========================== IMAGE WIRING =================================
(async function () {
  const tryImage = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      const t = setTimeout(() => resolve(null), 8000);
      img.onload = () => { clearTimeout(t); resolve(url); };
      img.onerror = () => { clearTimeout(t); resolve(null); };
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
  } catch (e) { console.warn('[travel] manifest load failed', e); }

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
const kbio = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.target.classList.toggle('is-visible', e.isIntersecting)),
  { threshold: 0.35 }
);
document.querySelectorAll('.day').forEach((d) => kbio.observe(d));

// ========================= DETAIL DRAWER =================================
const sheet = document.getElementById('sheet');
const sheetNum = document.getElementById('sheet-num');
const sheetDate = document.getElementById('sheet-date');
const sheetTitle = document.getElementById('sheet-title');
const sheetBody = document.getElementById('sheet-body');

function renderDay(n) {
  const d = DAY_DETAILS[n]; if (!d) return;
  sheetNum.textContent = d.num;
  sheetDate.textContent = d.date;
  sheetTitle.innerHTML = d.title;

  let html = '';
  if (d.schedule?.length) {
    html += '<section><h4>Hours</h4><div class="sheet-schedule">';
    for (const [time, what] of d.schedule) html += `<div class="time">${time}</div><div class="what">${what}</div>`;
    html += '</div></section>';
  }
  if (d.picks?.length) {
    html += '<section><h4>Eat & Drink</h4><div class="sheet-picks">';
    for (const p of d.picks) html += `<div class="pick"><span class="pick-label">${p.kind}</span><span class="pick-name">${p.name}</span><span class="pick-note">${p.note}</span></div>`;
    html += '</div></section>';
  }
  if (d.logistics?.length) {
    html += '<section><h4>Logistics</h4><div class="sheet-logistics">';
    for (const l of d.logistics) html += `<div class="logi"><span class="logi-label">${l.label}</span><span class="logi-text">${l.text}</span></div>`;
    html += '</div></section>';
  }
  sheetBody.innerHTML = html;
}

function renderTile(tileId) {
  const t = TILE_DETAILS[tileId]; if (!t) return;
  const day = DAY_DETAILS[t.day];
  sheetNum.textContent = day.num;
  sheetDate.textContent = day.date;
  sheetTitle.innerHTML = t.label;

  const hasMap = Boolean(t.place || t.coords);
  let html = `<section class="tile-meta"><span class="tile-kind">${t.kind}</span>${t.place ? `<span class="tile-place">${t.place.replace(/, Vietnam$/, '')}</span>` : ''}</section>`;
  if (hasMap) {
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

function openSheet(day) {
  renderDay(day);
  sheet.classList.remove('sheet--tile');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sheet-open');
  sheet.querySelector('.sheet-panel').scrollTop = 0;
}

function openTile(tileId) {
  renderTile(tileId);
  sheet.classList.add('sheet--tile');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sheet-open');
  sheet.querySelector('.sheet-panel').scrollTop = 0;
}

function closeSheet() {
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sheet-open');
}

document.querySelectorAll('.day-more').forEach((b) => {
  b.addEventListener('click', (e) => { e.stopPropagation(); openSheet(Number(b.dataset.day)); });
});

document.querySelectorAll('.tile[data-tile]').forEach((tile) => {
  tile.addEventListener('click', () => openTile(tile.dataset.tile));
});

sheet.addEventListener('click', (e) => { if (e.target.matches('[data-close]')) closeSheet(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (sheet.getAttribute('aria-hidden') === 'false') closeSheet();
    if (route.getAttribute('aria-hidden') === 'false') closeRoute();
  }
});

// ========================== ROUTE MAP ====================================
const route = document.getElementById('route');
const routeMapEl = document.getElementById('route-map');
let leafletMap = null;

function buildRouteMap() {
  if (leafletMap || typeof L === 'undefined') return;
  const stops = ROUTE_STOPS.map((id) => ({ id, ...TILE_DETAILS[id] })).filter((s) => s.coords);

  leafletMap = L.map(routeMapEl, { zoomControl: true, scrollWheelZoom: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> · © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(leafletMap);

  const group = L.featureGroup();
  const perDayIndex = {};

  stops.forEach((s) => {
    perDayIndex[s.day] = (perDayIndex[s.day] || 0) + 1;
    const code = `D${s.day}-${perDayIndex[s.day]}`;
    const marker = L.marker(s.coords, {
      icon: L.divIcon({
        className: 'pin',
        html: `<span class="pin-num">${code}</span><span class="pin-dot"></span>`,
        iconSize: [54, 46],
        iconAnchor: [27, 44],
      }),
      title: `${code}. ${s.label}`,
    });
    const day = DAY_DETAILS[s.day];
    marker.bindPopup(
      `<div class="pin-pop"><div class="pp-kicker">${code} · ${day.date.split(' · ')[0]}</div><div class="pp-label">${s.label}</div><div class="pp-kind">${s.kind}</div><button class="pp-open" data-open-tile="${s.id}">See tile ↗</button></div>`
    );
    marker.addTo(group);
  });

  group.addTo(leafletMap);
  leafletMap.fitBounds(group.getBounds().pad(0.12));

  leafletMap.on('popupopen', (e) => {
    const btn = e.popup.getElement().querySelector('[data-open-tile]');
    if (btn) btn.addEventListener('click', () => {
      closeRoute();
      openTile(btn.dataset.openTile);
    });
  });
}

function openRoute() {
  route.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sheet-open');
  // Leaflet can't compute size of a hidden container — wait a tick, then init.
  requestAnimationFrame(() => {
    buildRouteMap();
    if (leafletMap) setTimeout(() => leafletMap.invalidateSize(), 100);
  });
}

function closeRoute() {
  route.setAttribute('aria-hidden', 'true');
  if (!sheet.getAttribute('aria-hidden') || sheet.getAttribute('aria-hidden') === 'true') {
    document.body.classList.remove('sheet-open');
  }
}

document.getElementById('open-route')?.addEventListener('click', openRoute);
route.addEventListener('click', (e) => { if (e.target.matches('[data-route-close]')) closeRoute(); });
