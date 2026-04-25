// ══════════════════════════════════════════════════════════════════════════════
// CONSUL_CONFIG — Sunrun / Generic Regional Config
//
// This is the Sunrun-branded default configuration for Consul.
// It is designed to work out of the box for any Sunrun region without
// customization. Office-specific branches should copy this file, rename it
// consul-config.js, and update the fields marked ← UPDATE.
//
// Do NOT edit index.html for office-specific values — all customization
// lives here.
//
// Logo: Place RunXLogo_Black_SVG.svg alongside index.html. The dashboard
// references it as ./RunXLogo_Black_SVG.svg and renders it via CSS fill
// using var(--off-white) so it works in both dark and light mode.
// ══════════════════════════════════════════════════════════════════════════════

const CONSUL_CONFIG = {

  // ── Identity ───────────────────────────────────────────────────────────────
  brand:          'SUNRUN',
  primary_label:  'Orange County',                   // Label shown on Overview primary progress block
  tagline:        'LIFE RUNS ON CLEAN ENERGY',       // Footer tagline

  // SVG wordmark — injected into header and auth screen by applyBranding().
  // fill:var(--off-white) makes it auto-adapt in dark and light mode.
  logo_svg: '<svg viewBox="0 0 2429 653" fill="none" xmlns="http://www.w3.org/2000/svg" style="height:22px;display:block"><path d="M2428.75 9H2339.41L2115.35 273.323L2070.65 326.028L1801.9 643H1891.24L2085.65 413.72C2101.21 395.375 2129.49 395.375 2145.06 413.72L2339.46 643H2428.8L2181.97 351.87C2169.31 336.933 2169.31 315.067 2181.97 300.187L2428.75 9Z" fill="var(--off-white)"/><path d="M2059.64 203.238L1894.93 9H1805.59L2059.64 308.649C2085.42 278.264 2085.42 233.68 2059.64 203.238Z" fill="var(--off-white)"/><path d="M0 9.09279H314.247C446.473 9.09279 539.753 57.0938 539.753 163.041C539.753 250.894 470.029 315.192 339.619 320.618V319.711C375.842 301.599 403.916 265.376 403.916 217.375C403.916 156.707 360.452 122.28 297.062 122.28H134.058V643.014H0.0369037V9.09279H0ZM166.633 347.785V346.878H328.729C492.64 346.878 535.215 417.509 535.215 507.178V643.014H401.194V539.771C401.194 437.436 338.711 382.194 166.633 347.785ZM604.05 444.695V9.09279H738.072V431.102C738.072 491.77 764.331 534.345 826.814 534.345C893.834 534.345 989.818 489.974 1074.95 409.379L1207.17 284.414H1208.08V518.974C1208.08 605.013 1156.47 652.107 1074.95 652.107V429.324C974.429 585.087 900.168 652.107 790.591 652.107C671.052 652.107 604.032 577.846 604.032 444.714L604.05 444.695ZM1456.24 117.762C1389.22 117.762 1293.23 162.133 1208.1 242.728L1075.88 368.601H1074.97V133.133C1074.97 47.0936 1126.58 0 1208.1 0V222.783C1308.6 67.057 1382.86 0.0370379 1492.44 0.0370379C1611.98 0.0370379 1679 74.2979 1679 207.43V643.033H1544.98V221.005C1544.98 160.337 1518.72 117.762 1456.24 117.762Z" fill="var(--off-white)"/></svg>',

  // ── Credentials ────────────────────────────────────────────────────────────
  // ← UPDATE these for each new office deployment
  sheets_id:        '1Awy-KgfNtf8IBAZf-nY8pmv26n0juNk28IRTfN0usn4',
  oauth_client_id:  '824495442632-o4v639jl9rcsj7dq2fgvfcr6joj98s2c.apps.googleusercontent.com',

  // ── Admin Contact ──────────────────────────────────────────────────────────
  // ← UPDATE for each new office — controls SMS alerts and delete notifications
  admin_email:          'admin@sunrun.com',          // ← UPDATE
  admin_phone:          '0000000000',                // ← UPDATE (10-digit, no dashes)
  office_admin_email:   'admin@sunrun.com',          // ← UPDATE
  office_admin_phone:   '0000000000',                // ← UPDATE

  // ── Offices ────────────────────────────────────────────────────────────────
  // ← UPDATE for each new region — primary offices and comparison offices
  offices:          ['Orange County', 'Newport Beach'],
  compare_offices:  ['Riverside'],

  // ── Office Colors ──────────────────────────────────────────────────────────
  // Mapped to Sunrun brand palette. Update keys if office names change.
  office_colors: {
    'Orange County': '#EE8C66',   // Sunrun Orange
    'Newport Beach': '#A5C9FF',   // Sky Blue
    'Riverside':     '#49517D',   // Light Navy
  },

  // ── Meeting Info ───────────────────────────────────────────────────────────
  // ← UPDATE per office — displayed on the roster/overview if implemented
  office_meeting_info: {
    'Orange County': { days: '', time: '', address: '' },  // ← UPDATE
    'Newport Beach': { days: '', time: '', address: '' },  // ← UPDATE
  },

  // ── Calendar ───────────────────────────────────────────────────────────────
  // ← UPDATE or remove — Google Calendar embed URL for the Calendar tab.
  // To disable the calendar tab entirely, set this to null.
  calendar_src: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y19hYTdhNGFiZTBhZmM5NjY3OGYyOWI0MGQxYzE4YWI4ZWZiMmQxNGU1M2UxNTc3ZDlmMTQxMTMyNjQwMTNhYzE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18yMjM2NGFhMzkyOGU0ZmZiZDNlM2U5MTBjNjk3M2E0NmFlZDk5OWJjZjk5NDYzYjk0ZTA2MjA2Y2Y1YWFhNjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d50000&color=%23f4511e',

  // ── Skin / Accent Colors ───────────────────────────────────────────────────
  // Sunrun Night Palette — dark navy base, sky blue brand accent, orange warm secondary.
  // Semantic colors (green #2DC48E, red #F05252, amber #EF9F27) and rank colors
  // (gold #F0C030, franchise amber #EF9F27, level greens/teals) are NOT overridden
  // here — they are universal and defined in the dashboard CSS.
  accent: {
    // Dark mode
    cyan_light:        '#A5C9FF',   // Sky Blue   — active states, highlights, positive values
    cyan_dark:         '#49517D',   // Light Navy — labels, column headers, secondary UI
    near_black:        '#1F2647',   // Dark Navy  — page background
    off_white:         '#FFFBF0',   // Off-White  — primary text
    sand:              '#EE8C66',   // Orange     — view buttons, warm accent
    border:            'rgba(165,201,255,0.2)',   // Sky Blue tinted border
    row_hover:         'rgba(165,201,255,0.08)',  // Sky Blue tinted row hover

    // Light mode
    light_cyan_light:  '#A5C9FF',   // Sky Blue unchanged (swatch dots)
    light_cyan_dark:   '#1F2647',   // Dark Navy for contrast on cream
    light_near_black:  '#FFFBF0',   // Off-White as light mode page bg
    light_off_white:   '#1A1718',   // Near-black text on cream bg
    light_sand:        '#B45A1E',   // Darkened orange for contrast on cream
    light_border:      'rgba(31,38,71,0.2)',      // Dark Navy tinted border
    light_row_hover:   'rgba(31,38,71,0.06)',     // Dark Navy tinted row hover
  },

};

// ══════════════════════════════════════════════════════════════════════════════
// DEPLOYMENT CHECKLIST — new office setup
//
//  1. sheets_id          → customer's Google Sheet ID
//  2. oauth_client_id    → customer's Google Cloud project OAuth client
//  3. admin_email        → delete notification recipient
//  4. admin_phone        → SMS alert recipient (Textbelt)
//  5. office_admin_email → same as admin or separate office contact
//  6. office_admin_phone → same as admin or separate office contact
//  7. offices            → customer's office names (must match Sheet data exactly)
//  8. compare_offices    → offices to include in comparison view
//  9. office_colors      → update keys to match new office names
// 10. office_meeting_info → update keys and values to match new offices
// 11. calendar_src       → customer's Google Calendar embed URL, or set null
// 12. SQUAD_DB           → update in index.html with customer's squad names/leaders
// 13. tagline            → optional — update if customer has their own culture phrase
// 14. brand              → optional — update if customer has a team/office brand name
// ══════════════════════════════════════════════════════════════════════════════
