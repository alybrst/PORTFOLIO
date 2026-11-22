/* =====================================================================
   SCRIPT.JS — sommaire
   1. Outils & langue            4. Fiche projet (pop-up)
   2. Textes (traduction)        5. À propos : CV en onglets
   3. Projets : filtres, tri,    6. Mentions légales & démarrage
      catalogue, points
   Les données se modifient dans data/projects.js et data/site.js.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- 1. OUTILS & LANGUE ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  let lang = 'fr';
  const t = k => (I18N[lang] && I18N[lang][k]) || k;
  const loc = v => (v && typeof v === 'object') ? (v[lang] || v.fr || v.en || '') : (v || '');

  /* Langue par défaut : choix mémorisé > langue du navigateur (fr → fr, autre → en, inconnue → fr) */
  function detectLang() {
    try { const s = localStorage.getItem('lang'); if (s === 'fr' || s === 'en') return s; } catch (e) {}
    const n = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    if (!n) return 'fr';
    return n.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  /* ---------- 2. TEXTES (traduction) ---------- */
  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.title = (SITE.name ? SITE.name + ' — ' : '') + t('title');
    $$('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(n => n.setAttribute('aria-label', t(n.dataset.i18nAria)));
    $$('[data-i18n-alt]').forEach(n => n.setAttribute('alt', t(n.dataset.i18nAlt)));
    $$('[data-site="name"]').forEach(n => { n.textContent = SITE.name; });
    $$('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    $('#legal-body').innerHTML = '<h2 id="legal-title">' + t('legal_title') + '</h2>' + LEGAL[l];
    renderFilters(); buildList(); renderCV();
    if (currentProject) fillModal(currentProject);
  }

  /* ---------- 3. PROJETS : filtres, tri, catalogue, points ---------- */
  const CATS = ['documentary', 'fiction', 'vlog', 'other'];
  const state = { cat: null, sort: 'relevance', index: 0, list: [] };
  const track = $('#track'), carousel = $('#carousel');

  function renderFilters() {
    const box = $('#filters'); box.innerHTML = '';
    CATS.forEach(c => {
      const b = el('button', '', t('cat_' + c));
      b.type = 'button'; b.setAttribute('aria-pressed', String(state.cat === c));
      b.addEventListener('click', () => { state.cat = state.cat === c ? null : c; state.index = 0; renderFilters(); buildList(); });
      box.appendChild(b);
    });
  }

  function sortedList() {
    const l = PROJECTS.filter(p => !state.cat || p.category === state.cat);
    const title = p => loc(p.title);
    if (state.sort === 'alpha') l.sort((a, b) => title(a).localeCompare(title(b), lang));
    else if (state.sort === 'relevance') l.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    else l.sort((a, b) => (b.year || 0) - (a.year || 0) || (b.relevance || 0) - (a.relevance || 0));
    return l;
  }

  function placeholder(p) {
    const hue = Array.from(p.id || 'x').reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(' + hue + ',45%,20%)"/><stop offset="1" stop-color="#0b0b0d"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><text x="800" y="500" font-size="120" fill="#FFDE21" text-anchor="middle" font-family="Georgia,serif">&#9654;</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  const visible = () => parseInt(getComputedStyle(carousel).getPropertyValue('--visible')) || 3;
  const maxIndex = () => Math.max(0, state.list.length - visible());

  function buildList() {
    state.list = sortedList();
    track.innerHTML = ''; $('#dots').innerHTML = '';
    $('#empty').hidden = state.list.length > 0;
    state.list.forEach((p, i) => {
      const card = el('button', 'card'); card.type = 'button';
      const img = el('img'); img.src = p.image || placeholder(p); img.alt = ''; img.loading = 'lazy';
      img.onerror = () => { img.onerror = null; img.src = placeholder(p); };
      card.append(img, el('span', 'tip', loc(p.title)));
      card.setAttribute('aria-label', loc(p.title));
      card.addEventListener('click', () => openProject(p));
      track.appendChild(card);
      const dot = el('button', 'dot'); dot.type = 'button';
      dot.setAttribute('aria-label', t('go_to') + ' ' + (i + 1) + ' : ' + loc(p.title));
      dot.addEventListener('click', () => go(Math.min(i, maxIndex()), true));
      $('#dots').appendChild(dot);
    });
    go(state.index, true);
  }

  function go(i, absolute) {
    state.index = Math.max(0, Math.min(maxIndex(), absolute ? i : state.index + i));
    const v = visible();
    track.style.setProperty('--i', state.index);
    $$('.card', track).forEach((c, k) => { c.inert = !(k >= state.index && k < state.index + v); });
    $$('.dot').forEach((d, k) => d.classList.toggle('on', k >= state.index && k < state.index + v));
    $('#prev').disabled = state.index === 0;
    $('#next').disabled = state.index >= maxIndex();
    const n = state.list.length;
    $('#status').textContent = n ? t('showing') + ' ' + (state.index + 1) + '–' + Math.min(n, state.index + v) + ' ' + t('of') + ' ' + n : '';
  }

  $('#prev').addEventListener('click', () => go(-1));
  $('#next').addEventListener('click', () => go(1));
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; state.index = 0; buildList(); });
  carousel.addEventListener('keydown', e => {          /* flèches du clavier */
    if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
  });
  let x0 = null;                                       /* glisser du doigt (mobile) */
  carousel.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  });
  window.addEventListener('resize', () => go(0));

  /* ---------- 4. FICHE PROJET (pop-up) ---------- */
  const modal = $('#project-modal'); let currentProject = null;

  function videoNode(url) {
    if (!url) return null;
    const box = el('div', 'video');
    let m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (m) url = 'https://www.youtube-nocookie.com/embed/' + m[1];
    else if ((m = url.match(/vimeo\.com\/(\d+)/))) url = 'https://player.vimeo.com/video/' + m[1];
    else if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
      const v = el('video'); v.controls = true; v.preload = 'metadata'; v.src = url; box.appendChild(v); return box;
    }
    const f = el('iframe'); f.src = url; f.title = ''; f.allowFullscreen = true;
    f.allow = 'accelerometer; encrypted-media; picture-in-picture; fullscreen';
    box.appendChild(f); return box;
  }

  function fillModal(p) {
    const body = $('#modal-body'); body.innerHTML = '';
    const v = videoNode(p.video); if (v) body.appendChild(v);
    const c = el('div', 'modal-content'); body.appendChild(c);
    const h = el('h3', '', loc(p.title)); h.id = 'pm-title'; c.appendChild(h);
    if (p.originalTitle) c.appendChild(el('p', 'original', p.originalTitle));
    const pills = [p.year, p.duration, p.category && t('cat_' + p.category)].filter(Boolean);
    if (pills.length) { const ul = el('ul', 'pills'); pills.forEach(x => ul.appendChild(el('li', '', String(x)))); c.appendChild(ul); }
    if (loc(p.description)) c.appendChild(el('p', '', loc(p.description)));
    if (loc(p.role)) { c.appendChild(el('h4', '', t('role'))); c.appendChild(el('p', '', loc(p.role))); }
    if (p.link) {
      const a = el('a', 'btn btn-primary', t('more'));
      a.href = p.link; a.target = '_blank'; a.rel = 'noopener noreferrer'; c.appendChild(a);
    }
  }
  function openProject(p) {
    currentProject = p; fillModal(p);
    if (!modal.open) modal.showModal();
  }
  modal.addEventListener('close', () => { currentProject = null; $('#modal-body').innerHTML = ''; }); /* stoppe la vidéo */
  function setupDialog(d) {
    d.addEventListener('click', e => { if (e.target === d || e.target.hasAttribute('data-close')) d.close(); });
  }
  setupDialog(modal); setupDialog($('#legal-modal'));

  /* ---------- 5. À PROPOS : CV EN ONGLETS ---------- */
  const TABS = ['experience', 'education', 'skills']; let tab = 'experience';

  function fmtDate(s) {
    if (!s) return '';
    const [y, m] = s.split('-');
    if (!m) return y;
    return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(new Date(+y, +m - 1, 1));
  }
  function fmtRange(a, b) { return (!b || a === b) ? fmtDate(a) : fmtDate(a) + ' ' + t('date_sep') + ' ' + fmtDate(b); }

  function goToProject(id) {
    const p = PROJECTS.find(x => x.id === id); if (!p) return;
    state.cat = null; renderFilters(); state.list = sortedList();
    state.index = Math.min(Math.max(0, state.list.indexOf(p)), maxIndex()); buildList();
    $('#projets').scrollIntoView({ behavior: 'smooth' });
    openProject(p);
  }

  function renderCV() {
    const tabs = $('#cv-tabs'); tabs.innerHTML = '';
    TABS.forEach(k => {
      const b = el('button', '', t('cv_' + k)); b.type = 'button'; b.setAttribute('role', 'tab');
      b.id = 'tab-' + k; b.setAttribute('aria-selected', String(k === tab)); b.tabIndex = k === tab ? 0 : -1;
      b.addEventListener('click', () => { tab = k; renderCV(); });
      b.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
        tab = TABS[(TABS.indexOf(k) + d + TABS.length) % TABS.length]; renderCV(); $('#tab-' + tab).focus();
      });
      tabs.appendChild(b);
    });
    const panel = $('#cv-panel'); panel.innerHTML = ''; panel.setAttribute('aria-labelledby', 'tab-' + tab);
    if (tab === 'skills') {
      const g = el('div', 'skills');
      CV.skills.forEach(s => { const d = el('div', 'skill'); d.append(el('h4', '', loc(s.title)), el('p', '', loc(s.text))); g.appendChild(d); });
      panel.appendChild(g); return;
    }
    const ol = el('ol', 'timeline');
    CV[tab].forEach(it => {
      const li = el('li');
      li.appendChild(el('div', 'tl-date', fmtRange(it.start, it.end)));
      li.appendChild(el('h4', '', loc(it.title)));
      if (it.text) li.appendChild(el('p', '', loc(it.text)));
      if (it.projects && it.projects.length) {
        const w = el('div', 'tl-links');
        it.projects.forEach(id => {
          const p = PROJECTS.find(x => x.id === id); if (!p) return;
          const a = el('a', '', loc(p.title)); a.href = '#projets';
          a.addEventListener('click', e => { e.preventDefault(); goToProject(id); });
          w.appendChild(a);
        });
        li.appendChild(w);
      }
      ol.appendChild(li);
    });
    panel.appendChild(ol);
  }

  /* ---------- 6. MENTIONS LÉGALES & DÉMARRAGE ---------- */
  $('#open-legal').addEventListener('click', () => $('#legal-modal').showModal());
  $$('.lang-switch button').forEach(b => b.addEventListener('click', () => {
    try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
    applyLang(b.dataset.lang);
  }));
  $('#link-mail').href = $('#footer-mail').href = 'mailto:' + SITE.email;
  $('#link-linkedin').href = SITE.linkedin;
  $('#portrait').src = SITE.portrait;
  applyLang(detectLang());
})();
