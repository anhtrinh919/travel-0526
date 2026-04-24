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

  // DAY 3 — 17 May — North Phú Yên, tide-led
  'd3-rocks':   { day: 3, kind: 'See',     label: 'Gành Đá Đĩa',           place: 'Gành Đá Đĩa, An Ninh Đông, Phú Yên, Vietnam',        coords: [13.6505, 109.3075], tip: 'Honeycomb basalt columns on the open sea. Arrive before 10am — tour buses show up by noon, and the morning light on the black stone is the shot. The walk down is steep but short.' },
  'd3-eat':     { day: 3, kind: 'Eat',     label: 'Đầm Ô Loan',            place: 'Đầm Ô Loan, Tuy An, Phú Yên, Vietnam',               coords: [13.2797, 109.2922], tip: 'Order sò huyết (blood cockles) and a whole steamed grouper. The restaurants on stilts over the lagoon all serve the same thing — pick Quán Tuấn or Nhà hàng Thúy Kiều, with a breeze.' },
  'd3-see':     { day: 3, kind: 'Wade',    label: 'Hòn Yến',               place: 'Hòn Yến, Tuy An, Phú Yên, Vietnam',                  coords: [13.3192, 109.2744], tip: 'Low tide is the whole point — the coral garden only appears when the sea pulls back. On Sun 17 May 2026 the window is in the late afternoon, target ~17:20. Bring water shoes.' },
  'd3-wander':  { day: 3, kind: 'Wander',  label: 'Bãi Xép (Phú Yên)',     place: 'Bãi Xép, An Chấn, Phú Yên, Vietnam',                 coords: [13.2101, 109.2683], tip: 'Optional sunset stop on the ride home — the filming location from Tôi thấy hoa vàng trên cỏ xanh. Skip it if Hòn Yến ran long or you are tired; the real reward today is the tide.' },

  // DAY 4 — 18 May — Transfer to Quy Nhơn, kept light
  'd4-ride':    { day: 4, kind: 'Ride',    label: 'Tuy Hòa GO',            place: '',                                                   tip: 'Book Tuy Hòa GO (tuyhoago.com) — transparent prices, the driver doubles as a mini-guide and will stop wherever you point. ~1.2–1.5M VND for the day. Leave around 09:00 so the afternoon in Quy Nhơn is still usable.' },
  'd4-swim':    { day: 4, kind: 'Stop',    label: 'Vịnh Hòa',              place: 'Vịnh Hòa Beach, Xuân Thọ, Phú Yên, Vietnam',         coords: [13.5131, 109.2856], tip: 'Optional short stop off QL1D — quiet stretch, almost no facilities. Good for a leg-stretch and a quick dip. Skip it if you want the lighter version of this day.' },
  'd4-eat':     { day: 4, kind: 'Eat',     label: 'Sông Cầu',              place: 'Sông Cầu, Phú Yên, Vietnam',                         coords: [13.5378, 109.2317], tip: 'Lobster capital of Vietnam — halfway between Tuy Hòa and Quy Nhơn. Quán Hải Sản Gành Đỏ is a reliable roadside pick. Any spot on QL1D with live tôm hùm tanks is the move.' },
  'd4-sip':     { day: 4, kind: 'Arrive',  label: 'Surf Bar',              place: 'Surf Bar, Xuân Diệu Beach, Quy Nhơn, Vietnam',       coords: [13.7717, 109.2318], tip: 'Iconic beach cafe right on the sand of Xuân Diệu. Arrive mid-to-late afternoon, order a cold drink, watch the city beach fill up at sunset. No reservations needed.' },

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
    num: '03', date: '17 May · Sunday', title: 'North, <em>tide-led</em>.',
    schedule: [
      ['08:30', 'Ride north to Gành Đá Đĩa — honeycomb basalt columns.'],
      ['10:30', 'Coastal stops or a coffee break, in no hurry.'],
      ['12:00', 'Lunch at Đầm Ô Loan on the lagoon.'],
      ['15:30', 'Hòn Yến — walk onto the coral at low tide (target ~17:20).'],
      ['After 17:30', 'Bãi Xép cliffs for sunset — only if energy allows.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Tuấn', note: 'On Ô Loan lagoon — blood cockles.' },
      { kind: 'Lunch alt.', name: 'Nhà hàng Thúy Kiều', note: 'Cầu An Hải. Steamed grouper.' },
      { kind: 'Dinner', name: 'Bún cá Đất Phú', note: 'Light fish noodle soup. 169 Lê Thánh Tôn.' },
      { kind: 'Café', name: 'Alice — Tea Room', note: 'Garden villa. An Dương Vương.' },
    ],
    logistics: [
      { label: 'Pacing', text: 'Follow the <em>tide</em>, not a fixed schedule. Hòn Yến’s coral only shows at low tide.' },
      { label: 'Gear', text: 'Water shoes or sandals for the coral and rocks.' },
      { label: 'Transport', text: 'Motorbike. Navigable by Google Maps — no tour needed.' },
    ],
  },
  4: {
    num: '04', date: '18 May · Monday', title: 'A <em>slow</em> coast to Quy Nhơn.',
    schedule: [
      ['09:00', 'Leave Tuy Hòa in the Tuy Hòa GO private car.'],
      ['10:30', 'Scenic QL1D drive. Optional short stop at Vịnh Hòa beach.'],
      ['12:30', 'Lunch at Sông Cầu — lobster capital.'],
      ['15:00', 'Arrive Quy Nhơn, check in.'],
      ['Late afternoon', 'Easy beach walk, drink at Surf Bar on Xuân Diệu.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Quán Hải Sản Gành Đỏ', note: 'Sông Cầu halfway stop.' },
      { kind: 'Dinner', name: 'Bếp Nhà Xứ Nẫu', note: 'Garden-home dining. 68 Nam Cao. 4.7★.' },
      { kind: 'Dinner alt.', name: 'Lẩu Cua Ông Minh', note: 'Famous crab hotpot. 29 Diên Hồng.' },
      { kind: 'Sip', name: 'Surf Bar', note: 'Iconic beach cafe at sunset. Xuân Diệu.' },
    ],
    logistics: [
      { label: 'Tour', text: 'Book <em>Tuy Hòa GO</em>. Transparent online prices; ~<em>1.2–1.5M VND</em> for the day.' },
      { label: 'Pacing', text: 'Gành Đá Đĩa moved to Day 3, so today stays light — don’t add detours.' },
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
      ['14:00', 'Ride south to the Ghềnh Ráng / Bãi Xép area.'],
      ['16:30', 'Afternoon drink by the cove, or back if tired.'],
      ['18:00', 'ExploraScience — 7 theme rooms + Science Show.'],
      ['19:00 – 21:00', 'Observatory — Wed-night stargazing.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Wherever is close', note: 'Light — near the hotel.' },
      { kind: 'Sunset drink', name: 'Surf Bar / Bãi Xép', note: 'Chairs in the sand, string lights after dark.' },
      { kind: 'Dinner', name: 'ExploraScience café', note: 'On-site, between museum and observatory.' },
    ],
    logistics: [
      { label: 'Entry', text: 'Book ExploraScience online at <em>ticket.explorascience.vn</em>. ~<em>120–150k</em> per person.' },
      { label: 'Observatory', text: 'Wednesday and Saturday nights only, 19:00–21:00. Cancelled if overcast — have a backup dinner plan.' },
      { label: 'Mood', text: 'Protect this as the <em>recovery</em> day of the trip.' },
    ],
  },
  7: {
    num: '07', date: '21 May · Thursday', title: '<em>Trung Lương</em> to Thị Nại.',
    schedule: [
      ['09:00', 'Ride north to Trung Lương Outdoor Area.'],
      ['10:00 – 12:00', 'Swim, beach, rest.'],
      ['12:00', 'Lunch at Cát Tiến — Nhà hàng Cánh Quạt.'],
      ['13:30', 'Back to Trung Lương, or head home slowly if too hot.'],
      ['16:30', 'Ride home via Thị Nại Bridge for the lagoon view.'],
    ],
    picks: [
      { kind: 'Lunch', name: 'Nhà hàng Cánh Quạt', note: 'Airy seafood under the wind turbines, Cát Tiến.' },
      { kind: 'Dinner', name: 'Back in Quy Nhơn', note: 'Any street stall — you’ll be salty and tired.' },
      { kind: 'Café', name: 'Marina Coffee', note: 'If you still have energy. 05 Đô Đốc Bảo.' },
    ],
    logistics: [
      { label: 'Entry', text: 'Trung Lương entrance fee (~<em>50k / person</em>).' },
      { label: 'Transport', text: 'Motorbike — <em>last bike day</em>. Return the rental by evening.' },
      { label: 'Bridge', text: 'Don’t stop halfway on Thị Nại Bridge — enjoy the view while crossing, or pull over at a legal viewpoint before/after.' },
      { label: 'Heat plan', text: 'If the day is very hot, pick either Trung Lương or Cát Tiến — not both.' },
    ],
  },
  8: {
    num: '08', date: '22 May · Friday', title: 'North to <em>Đà Nẵng</em>.',
    schedule: [
      ['Morning', 'Transfer Quy Nhơn → Đà Nẵng via QL1.'],
      ['Afternoon', 'Check in, find water, walk Mỹ Khê.'],
      ['Evening', 'No plans. Seafood near the hotel.'],
    ],
    picks: [
      { kind: 'Tonight', name: 'Something near Mỹ Khê.', note: 'Skip the research. Pick a seafood spot on arrival.' },
    ],
    logistics: [
      { label: 'Transport', text: 'Private car, open-bus, or train. Assume <em>6–7 hours</em>, not exactly 6.' },
      { label: 'Timing', text: 'Book the <em>morning</em> slot so the afternoon is still usable.' },
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

// Map stops for the bird's-eye overview, in strict day order. Matches the
// "Route overview" table in tuy-hoa-quy-nhon-da-nang-updated.md (16 stops).
const ROUTE_STOPS = [
  'd1-see',
  'd2-see', 'd2-eat', 'd2-cross',
  'd3-rocks', 'd3-eat', 'd3-see', 'd3-wander',
  'd4-swim',
  'd5-snorkel',
  'd6-wander', 'd6-visit',
  'd7-chill', 'd7-eat', 'd7-see',
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
  if (e.key === 'Escape' && sheet.getAttribute('aria-hidden') === 'false') closeSheet();
});

// ========================== OVERVIEW MAP =================================
// Single Leaflet map, lives in the bird's-eye section after the splash.
const overviewMapEl = document.getElementById('overview-map');
let overviewMap = null;

// Per-day dotted driving route via public OSRM; falls back to straight line.
async function addDayRoutes(map) {
  if (!map || typeof L === 'undefined') return;
  const byDay = {};
  ROUTE_STOPS.forEach((id) => {
    const s = TILE_DETAILS[id];
    if (!s?.coords) return;
    (byDay[s.day] ||= []).push(s.coords);
  });
  await Promise.all(Object.keys(byDay).map(async (day) => {
    const coords = byDay[day];
    if (coords.length < 2) return;
    let path = coords;
    try {
      const locs = coords.map(([lat, lng]) => `${lng},${lat}`).join(';');
      const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${locs}?overview=full&geometries=geojson`);
      if (res.ok) {
        const data = await res.json();
        if (data.code === 'Ok' && data.routes?.[0]) {
          path = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        }
      }
    } catch (e) { /* fallback: straight line between stops */ }
    L.polyline(path, {
      color: '#e9a66b',
      weight: 2.5,
      opacity: 0.7,
      dashArray: '2 7',
      lineCap: 'round',
    }).addTo(map);
  }));
}

function buildOverviewMap() {
  if (overviewMap || !overviewMapEl || typeof L === 'undefined') return;
  const stops = ROUTE_STOPS.map((id) => ({ id, ...TILE_DETAILS[id] })).filter((s) => s.coords);

  overviewMap = L.map(overviewMapEl, { zoomControl: true, scrollWheelZoom: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> · © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(overviewMap);

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

  group.addTo(overviewMap);
  overviewMap.fitBounds(group.getBounds().pad(0.12));

  overviewMap.on('popupopen', (e) => {
    const btn = e.popup.getElement().querySelector('[data-open-tile]');
    if (btn) btn.addEventListener('click', () => openTile(btn.dataset.openTile));
  });

  addDayRoutes(overviewMap);
}

// Build lazily once the overview scrolls into view — Leaflet needs a sized
// container, and the section is below the splash on first load.
const overviewIO = new IntersectionObserver((entries) => {
  if (!entries.some((e) => e.isIntersecting)) return;
  requestAnimationFrame(() => {
    buildOverviewMap();
    if (overviewMap) setTimeout(() => overviewMap.invalidateSize(), 100);
  });
  overviewIO.disconnect();
}, { threshold: 0.15 });
const overviewSection = document.getElementById('overview');
if (overviewSection) overviewIO.observe(overviewSection);

// ============================ RAIL =======================================
// Persistent right sidebar on desktop. Shows day info when a day section is
// in view; hides on the splash and on the bird's-eye overview (the overview
// owns its own map, so the rail has nothing useful to show there).
const rail = document.getElementById('rail');
const railNum = document.getElementById('rail-num');
const railDate = document.getElementById('rail-date');
const railTitleEl = document.getElementById('rail-title');
const railBody = document.getElementById('rail-body');
let activeRailDay = null;

const railDayPane = document.querySelector('.rail-pane--day');

function renderRailDayNow(n) {
  activeRailDay = n;
  const d = DAY_DETAILS[n]; if (!d) return;
  railNum.textContent = d.num;
  railDate.textContent = d.date;
  railTitleEl.innerHTML = d.title;
  let html = '';
  if (d.schedule?.length) {
    html += '<section><h4>Hours</h4><div class="sheet-schedule">';
    for (const [time, what] of d.schedule) html += `<div class="time">${time}</div><div class="what">${what}</div>`;
    html += '</div></section>';
  }
  if (d.picks?.length) {
    html += '<section><h4>Eat &amp; Drink</h4><div class="sheet-picks">';
    for (const p of d.picks) html += `<div class="pick"><span class="pick-label">${p.kind}</span><span class="pick-name">${p.name}</span><span class="pick-note">${p.note}</span></div>`;
    html += '</div></section>';
  }
  if (d.logistics?.length) {
    html += '<section><h4>Logistics</h4><div class="sheet-logistics">';
    for (const l of d.logistics) html += `<div class="logi"><span class="logi-label">${l.label}</span><span class="logi-text">${l.text}</span></div>`;
    html += '</div></section>';
  }
  railBody.innerHTML = html;
  railBody.parentElement.scrollTop = 0;
}

function renderRailDay(n) {
  if (activeRailDay === n) return;
  // First render: skip the fade
  if (activeRailDay === null || !railDayPane) {
    renderRailDayNow(n);
    return;
  }
  railDayPane.classList.add('is-fading');
  setTimeout(() => {
    renderRailDayNow(n);
    requestAnimationFrame(() => railDayPane.classList.remove('is-fading'));
  }, 160);
}

// Show/hide the rail based on which section is most visible:
// splash or overview  → hide
// day-N               → show, populated with that day's info
const railIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting || e.intersectionRatio < 0.55) return;
    const el = e.target;
    if (el.id === 'splash' || el.id === 'overview') {
      rail.setAttribute('data-mode', 'hide');
      rail.setAttribute('aria-hidden', 'true');
    } else if (el.id.startsWith('day-')) {
      const n = Number(el.id.slice(4));
      renderRailDay(n);
      rail.setAttribute('data-mode', 'day');
      rail.setAttribute('aria-hidden', 'false');
    }
  });
}, { threshold: [0.55, 0.8] });

railIO.observe(document.getElementById('splash'));
if (overviewSection) railIO.observe(overviewSection);
document.querySelectorAll('.day').forEach((d) => railIO.observe(d));

// ====================== RAIL COLLAPSE TOGGLE =============================
const RAIL_COLLAPSED_KEY = 'travel.rail.collapsed';
const railToggle = document.getElementById('rail-toggle');

function setRailCollapsed(collapsed) {
  document.body.classList.toggle('rail-collapsed', collapsed);
  if (railToggle) {
    railToggle.setAttribute('aria-expanded', String(!collapsed));
    railToggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
  }
  try { localStorage.setItem(RAIL_COLLAPSED_KEY, collapsed ? '1' : '0'); } catch (e) {}
}

try {
  if (localStorage.getItem(RAIL_COLLAPSED_KEY) === '1') setRailCollapsed(true);
} catch (e) {}

railToggle?.addEventListener('click', () => {
  setRailCollapsed(!document.body.classList.contains('rail-collapsed'));
});

// ========================= PREPARE MODAL =================================
const prepare = document.getElementById('prepare');

const CHECKLIST_SEED = {
  setup: [
    'Book flight HAN → TBB (15 May)',
    'Book flight DAD → HAN (23 May)',
    'Book hotel in Tuy Hòa (3 nights, 15–17 May)',
    'Book hotel in Quy Nhơn (4 nights, 18–21 May)',
    'Book hotel in Đà Nẵng (1 night, 22 May)',
    'Reserve motorbike in Tuy Hòa (16–17 May)',
    'Reserve motorbike in Quy Nhơn — 2-day rate (19–20 May)',
    'Book Tuy Hòa GO private car · Tuy Hòa → Quy Nhơn (18 May)',
    'Book Hòn Khô pier tour at Nhơn Hải (~350k, 19 May)',
    'Book ExploraScience + Observatory tickets (Wed 20 May night)',
    'Book Quy Nhơn → Đà Nẵng transfer (car / bus / train, 22 May)',
    'Check tide times for Hòn Yến (morning of 17 May)',
    'Check weather forecast for stargazing (20 May — cloud cancels)',
    'Withdraw VND cash before leaving (rafts & village spots are cash only)',
  ],
  pack: [
    'Sunscreen (reef-safe)',
    'Swimsuits ×2',
    'Quick-dry towel',
    'Light long-sleeve for motorbike rides',
    'Sunglasses',
    'Sandals + sneakers',
    'Waterproof phone pouch',
    'Portable charger + cable',
    'Meds: motion sickness, paracetamol',
    'Mosquito repellent',
    'Hat / cap',
    'Snorkel mask (optional — pier tour provides one)',
  ],
};

const CK_KEY = (group) => `travel.checklist.${group}`;
const uid = () => Math.random().toString(36).slice(2, 10);

function loadList(group) {
  try {
    const raw = localStorage.getItem(CK_KEY(group));
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  const seeded = CHECKLIST_SEED[group].map((text) => ({ id: uid(), text, done: false }));
  saveList(group, seeded);
  return seeded;
}
function saveList(group, items) {
  try { localStorage.setItem(CK_KEY(group), JSON.stringify(items)); } catch (e) {}
}

function renderChecklist(group) {
  const items = loadList(group);
  const ul = document.querySelector(`.checklist[data-list="${group}"]`);
  if (!ul) return;
  ul.innerHTML = '';
  items.forEach((it, i) => {
    const li = document.createElement('li');
    li.className = 'check-item' + (it.done ? ' is-done' : '');
    li.dataset.id = it.id;
    li.innerHTML = `
      <input type="checkbox" class="check-box" ${it.done ? 'checked' : ''} aria-label="Mark done">
      <span class="check-text" contenteditable="true" spellcheck="false"></span>
      <span class="check-actions">
        <button class="check-btn" type="button" data-act="up" aria-label="Move up" ${i === 0 ? 'disabled style="opacity:.2;cursor:default"' : ''}>▲</button>
        <button class="check-btn" type="button" data-act="down" aria-label="Move down" ${i === items.length - 1 ? 'disabled style="opacity:.2;cursor:default"' : ''}>▼</button>
        <button class="check-btn" type="button" data-act="del" aria-label="Delete">×</button>
      </span>`;
    li.querySelector('.check-text').textContent = it.text;
    ul.appendChild(li);
  });
}

function mutate(group, fn) {
  const items = loadList(group);
  fn(items);
  saveList(group, items);
  renderChecklist(group);
}

document.querySelectorAll('.checklist').forEach((ul) => {
  const group = ul.dataset.list;

  ul.addEventListener('change', (e) => {
    if (!e.target.classList.contains('check-box')) return;
    const li = e.target.closest('.check-item');
    mutate(group, (items) => {
      const it = items.find((x) => x.id === li.dataset.id);
      if (it) it.done = e.target.checked;
    });
  });

  ul.addEventListener('click', (e) => {
    const btn = e.target.closest('.check-btn');
    if (!btn) return;
    const li = btn.closest('.check-item');
    const id = li.dataset.id;
    const act = btn.dataset.act;
    mutate(group, (items) => {
      const idx = items.findIndex((x) => x.id === id);
      if (idx < 0) return;
      if (act === 'del') items.splice(idx, 1);
      else if (act === 'up' && idx > 0) [items[idx - 1], items[idx]] = [items[idx], items[idx - 1]];
      else if (act === 'down' && idx < items.length - 1) [items[idx], items[idx + 1]] = [items[idx + 1], items[idx]];
    });
  });

  ul.addEventListener('blur', (e) => {
    if (!e.target.classList.contains('check-text')) return;
    const li = e.target.closest('.check-item');
    const text = e.target.textContent.trim();
    const items = loadList(group);
    const it = items.find((x) => x.id === li.dataset.id);
    if (!it) return;
    if (!text) {
      // empty text = delete
      const idx = items.findIndex((x) => x.id === it.id);
      items.splice(idx, 1);
      saveList(group, items);
      renderChecklist(group);
    } else if (it.text !== text) {
      it.text = text;
      saveList(group, items);
    }
  }, true);

  ul.addEventListener('keydown', (e) => {
    if (!e.target.classList.contains('check-text')) return;
    if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); }
  });
});

document.querySelectorAll('.check-add').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.add;
    const items = loadList(group);
    items.push({ id: uid(), text: '', done: false });
    saveList(group, items);
    renderChecklist(group);
    const ul = document.querySelector(`.checklist[data-list="${group}"]`);
    const last = ul.lastElementChild?.querySelector('.check-text');
    last?.focus();
  });
});

// ---- Back-up list ----
// Verified against web sources (Foody, TripAdvisor, Michelin, brand sites)
// in Apr 2026. Unverifiable entries were dropped rather than guessed.
const BACKUP = [
  { city: 'Tuy Hòa · Phú Yên', items: [
    ['Bánh Mì Chấm', '135 Lạc Long Quân'],
    ['Bánh Canh Hẹ Thành Tâm', '30 Điện Biên Phủ'],
    ['Quán Bà Tám — Cá Ngừ Đại Dương', '287–289 Lê Duẩn'],
    ['Cơm Gà Tuyết Nhung', '189 Lê Thánh Tôn'],
    ['Cơm Niêu Năm Ánh', '394 Hùng Vương'],
    ['Nem Nướng Nhật Hoàng', '4/4 Trần Bình Trọng'],
    ['Huy Tùng Coffee', '123 Nguyễn Trãi'],
    ['Noon Concept', 'An Dương Vương, Bình Kiến'],
    ['Bè nổi Vi Anh', 'Bãi Hương, Vũng Rô'],
    ['Bè nổi Thanh Niên', 'Vũng Rô, Hòa Tâm'],
    ['Koi Cafe', 'An Dương Vương, Bình Kiến'],
    ['Quán Tuấn — Hải Sản Đầm Ô Loan', 'An Hải, Tuy An'],
    ['Nhà hàng Thúy Kiều — Đầm Ô Loan', 'An Hải, Tuy An'],
    ['Bún Chả Cá Đất Phú', '169 Lê Thánh Tôn'],
    ['Cháo Hàu 373', '373 Nguyễn Huệ'],
    ['Alice Tea Room', '30 Cần Vương'],
    ['Wait Vintage Cafe', '79 Trần Quý Cáp'],
    ['Quán Chóp Chài — Lẩu Dê', '644 Nguyễn Tất Thành, Bình Kiến'],
    ['Quán Yến — Bánh Hỏi Lòng Heo', '118 Hùng Vương'],
    ['PHD Book & Coffee', 'An Dương Vương, Bình Kiến'],
  ]},
  { city: 'Quy Nhơn · Bình Định', items: [
    ['Bếp Nhà Xứ Nẫu', '68 Nam Cao'],
    ['Hải Sản Ông Minh', '29 Diên Hồng'],
    ['Surf Bar', 'Xuân Diệu Beach'],
    ['Hướng Dương Quán', 'Eo Gió, Nhơn Lý'],
    ['Bún cá Ngọc Liên', '379 Nguyễn Huệ'],
    ['Gia Vỹ 2 (Bánh Xèo)', '14 Diên Hồng'],
    ['Adiuvat Coffee Roasters', '57A Nguyễn Huệ'],
    ['Ngô Văn Sở Food Street', 'Ngô Văn Sở St'],
    ['Chè Nhớ', '134 Ngô Mây'],
    ['Marina Coffee', '138 Đô Đốc Bảo'],
    ['Bốn Mùa (Four Seasons)', '01 Xuân Diệu'],
    ['Bánh Căn Cô Dư', '63/1 Nguyễn Huệ'],
    ['Big Tree Bistro', 'Bãi Xép Village'],
    ["Life's A Beach", 'Bãi Xép Village'],
    ['East West Brewing', '1B Xuân Diệu'],
    ['Bún Chả Cá Phượng Tèo', '211 Nguyễn Huệ'],
    ['Bánh Hỏi Lòng Heo Quán Mẫn', '76A Trần Phú'],
    ['1990 Cafe', '07 Đường 31 Tháng 3'],
  ]},
  { city: 'Đà Nẵng', items: [
    ['Mái Phố', 'K27A/21 Thái Phiên'],
    ['Little Hanoi Egg Coffee', '65 Đỗ Bá'],
    ["Bún Chả Hà Nội Quyền's House", 'Đà Nẵng'],
    ['Eco Green Cafe & Bistro', '1 An Thượng 3'],
    ['SIX ON SIX Cafe', '64 Bà Huyện Thanh Quan'],
    ['Mì Quảng Bà Mua', '19 Trần Bình Trọng'],
    ['Bánh Xèo Bà Dưỡng', '280/23 Hoàng Diệu'],
    ['43 Factory Coffee Roaster', '422 Ngô Thì Sỹ'],
    ['Cafe Long', '123 Lê Lợi'],
    ['Thìa Gỗ', '53 Phan Thúc Duyện'],
  ]},
];

function renderBackup() {
  const host = document.getElementById('backup-content');
  if (!host || host.dataset.built === '1') return;
  let html = '';
  BACKUP.forEach((g) => {
    html += `<div class="backup-group"><header class="backup-group-head"><h4>${g.city}</h4><span class="backup-count">${g.items.length} spots</span></header><div class="backup-grid">`;
    g.items.forEach(([name, addr]) => {
      const q = encodeURIComponent(`${name} ${addr}`);
      const href = `https://www.google.com/maps/search/?api=1&query=${q}`;
      html += `<a class="backup-card" href="${href}" target="_blank" rel="noopener"><span class="backup-name">${name}</span><span class="backup-addr">${addr}</span></a>`;
    });
    html += `</div></div>`;
  });
  host.innerHTML = html;
  host.dataset.built = '1';
}

function openPrep() {
  renderChecklist('setup');
  renderChecklist('pack');
  renderBackup();
  prepare.setAttribute('aria-hidden', 'false');
  document.body.classList.add('prep-open');
}
function closePrep() {
  prepare.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('prep-open');
}

document.getElementById('open-prep-foot')?.addEventListener('click', openPrep);
document.getElementById('open-prep-rail')?.addEventListener('click', openPrep);
prepare.addEventListener('click', (e) => { if (e.target.matches('[data-prep-close]')) closePrep(); });

document.querySelectorAll('.prepare-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.prepare-tab').forEach((t) => {
      const on = t.dataset.tab === target;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    document.querySelectorAll('.prepare-section').forEach((s) => {
      s.classList.toggle('is-active', s.dataset.panel === target);
    });
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && prepare.getAttribute('aria-hidden') === 'false') closePrep();
});
