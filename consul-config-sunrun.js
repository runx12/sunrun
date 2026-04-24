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
  primary_label:  'Consul',                          // Product name shown in header
  tagline:        'LIFE RUNS ON CLEAN ENERGY',       // Footer tagline

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
