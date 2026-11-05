// Shared building blocks for the component library stories.
// Each helper returns an HTML string; view() turns it into a live element with keyboard and click behaviour.
import './library.css';

let count = 0;
export const uid = (prefix) => `${prefix}-${++count}`;

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const JOB_TITLES = ['Designer', 'Engineer', 'Product manager', 'Researcher', 'Support lead', 'Travel agent'];

// ---------- Design system ----------

const AVATAR_COLORS = ['#5b21b6', '#0f766e', '#1d4ed8', '#be123c', '#b45309', '#374151'];

export const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export function avatar({ name, src, size = 'md', decorative = false }) {
  const a11y = decorative ? 'aria-hidden="true"' : `role="img" aria-label="${name}"`;
  if (src) return `<img class="ds-avatar ds-avatar--${size}" src="${src}" alt="${decorative ? '' : name}">`;
  const color = AVATAR_COLORS[[...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % AVATAR_COLORS.length];
  return `<span class="ds-avatar ds-avatar--${size}" ${a11y} style="background:${color}">${initials(name)}</span>`;
}

export function avatarList(people, { max = 3, size = 'md' } = {}) {
  const extra = people.length - max;
  return `<div class="ds-avatar-list" role="group" aria-label="${people.length} people">
    ${people.slice(0, max).map((p) => avatar({ name: p.name, size })).join('')}
    ${extra > 0 ? `<span class="ds-avatar ds-avatar--${size} ds-avatar--more">+${extra}</span>` : ''}
  </div>`;
}

export function user({ name, title, size = 'md' }) {
  return `<div class="ds-user">${avatar({ name, size, decorative: true })}
    <div><div class="ds-user__name">${name}</div><div class="ds-user__title">${title}</div></div></div>`;
}

export const palette = {
  Purple: ['#f3e8ff', '#d8b4fe', '#a855f7', '#7e22ce', '#581c87'],
  Teal: ['#ccfbf1', '#5eead4', '#14b8a6', '#0f766e', '#134e4a'],
  Blue: ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'],
  Red: ['#fee2e2', '#fca5a5', '#ef4444', '#b91c1c', '#7f1d1d'],
  Amber: ['#fef3c7', '#fcd34d', '#f59e0b', '#b45309', '#78350f'],
  Gray: ['#f3f4f6', '#d1d5db', '#9ca3af', '#4b5563', '#111827'],
};

const ICONS = {
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  check: 'M5 13l4 4L19 7',
  close: 'M6 6l12 12M18 6L6 18',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-left': 'M15 6l-6 6 6 6',
  'chevron-right': 'M9 6l6 6-6 6',
  'arrow-left': 'M19 12H5M11 6l-6 6 6 6',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-down': 'M12 5v14M6 13l6 6 6-6',
  warning: 'M12 3l10 18H2zM12 10v4M12 17.5v.01',
  bell: 'M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4',
  bookmark: 'M6 3h12v18l-6-4-6 4z',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5',
  edit: 'M4 20h4L19 9l-4-4L4 16zM14 6l4 4',
  home: 'M3 11l9-8 9 8M5 10v10h14V10',
  mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
  folder: 'M3 6h6l2 2h10v11H3z',
  component: 'M12 4l8 8-8 8-8-8z',
};
export const iconNames = Object.keys(ICONS);

export function icon(name, { label, size = 20 } = {}) {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="ds-icon" ${a11y} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS[name]}"/></svg>`;
}

export function loading({ label = 'Connecting…', variant = 'wave' } = {}) {
  const graphic = variant === 'spinner'
    ? '<span class="ds-spinner" aria-hidden="true"></span>'
    : `<svg class="ds-loading__wave" aria-hidden="true" width="160" height="40" viewBox="0 0 160 40" fill="none" stroke-width="3">
        <path d="M0 20 Q20 0 40 20 T80 20 T120 20 T160 20" stroke="#93c5fd"/>
        <path d="M0 20 Q20 40 40 20 T80 20 T120 20 T160 20" stroke="#1d4ed8"/></svg>`;
  return `<div class="ds-loading" role="status">${graphic}<span>${label}</span></div>`;
}

// ---------- Charts ----------

const legend = (items) => `<ul class="ds-legend">${items.map((s) => `<li><i style="background:${s.color}"></i>${s.label}</li>`).join('')}</ul>`;

const chart = (title, description, svg, items) =>
  `<figure class="ds-chart"><figcaption>${title}</figcaption>${svg.replace('<svg', `<svg role="img" aria-label="${description}"`)}${items ? legend(items) : ''}</figure>`;

function points(values, width, height, max, pad = 8) {
  const step = (width - pad * 2) / (values.length - 1);
  return values.map((v, i) => [pad + i * step, height - pad - (v / max) * (height - pad * 2)]);
}

export function donut(title, segments, { size = 140, thickness = 22 } = {}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const arcs = segments.map((s) => {
    const length = (s.value / total) * circumference;
    const arc = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${s.color}" stroke-width="${thickness}"
      stroke-dasharray="${length} ${circumference - length}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${size / 2} ${size / 2})"/>`;
    offset += length;
    return arc;
  });
  const description = `${title}: ${segments.map((s) => `${s.label} ${Math.round((s.value / total) * 100)}%`).join(', ')}`;
  return chart(title, description, `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${arcs.join('')}</svg>`, segments);
}

export function lineChart(title, series, { width = 280, height = 140, area = false } = {}) {
  const max = Math.max(...series.flatMap((s) => s.values));
  const paths = series.map((s) => {
    const pts = points(s.values, width, height, max);
    const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    const fill = area ? `<path d="${line} L${pts.at(-1)[0]} ${height - 8} L${pts[0][0]} ${height - 8} Z" fill="${s.color}" fill-opacity="0.35"/>` : '';
    return `${fill}<path d="${line}" fill="none" stroke="${s.color}" stroke-width="2.5" stroke-linejoin="round"/>`;
  });
  const description = `${title}: ${series.map((s) => `${s.label} from ${s.values[0]} to ${s.values.at(-1)}`).join('; ')}`;
  const axis = `<line x1="8" y1="${height - 8}" x2="${width - 8}" y2="${height - 8}" stroke="#9ca3af"/>`;
  return chart(title, description, `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${axis}${paths.join('')}</svg>`, series);
}

export function barChart(title, bars, { width = 280, height = 140, color = '#6d28d9' } = {}) {
  const max = Math.max(...bars.map((b) => b.value));
  const slot = (width - 16) / bars.length;
  const rects = bars.map((b, i) => {
    const h = (b.value / max) * (height - 32);
    return `<rect x="${8 + i * slot + slot * 0.2}" y="${height - 20 - h}" width="${slot * 0.6}" height="${h}" rx="3" fill="${b.color || color}"/>
      <text x="${8 + i * slot + slot / 2}" y="${height - 6}" text-anchor="middle" font-size="11" fill="#374151">${b.label}</text>`;
  });
  const description = `${title}: ${bars.map((b) => `${b.label} ${b.value}`).join(', ')}`;
  return chart(title, description, `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${rects.join('')}</svg>`);
}

// ---------- Forms ----------

export function badge(label, tone = 'success') {
  return `<span class="ds-badge ds-badge--${tone}">${label}</span>`;
}

export function button(label, { variant = 'primary', size = 'md', disabled = false, iconName, iconOnly = false } = {}) {
  const content = iconOnly ? icon(iconName) : `${iconName ? icon(iconName, { size: 16 }) : ''}<span>${label}</span>`;
  return `<button type="button" class="ds-btn ds-btn--${variant} ds-btn--${size}${iconOnly ? ' ds-btn--icon' : ''}"${iconOnly ? ` aria-label="${label}"` : ''}${disabled ? ' disabled' : ''}>${content}</button>`;
}

// A single-choice segmented control built on native radio buttons, used by Boolean and Toggle.
export function segmented(options, { label, selected = 0, tone = 'purple', disabled = false } = {}) {
  const name = uid('segment');
  return `<fieldset class="ds-field"${disabled ? ' disabled' : ''}><legend>${label}</legend>
    <div class="ds-segment ds-segment--${tone}">${options.map((opt, i) => {
      const id = uid('segment-option');
      return `<input type="radio" id="${id}" name="${name}" value="${opt}"${i === selected ? ' checked' : ''}><label for="${id}">${opt}</label>`;
    }).join('')}</div></fieldset>`;
}

export function datePicker({ year = 2026, month = 10, selected = 12, range, minDay, today, compact = false } = {}) {
  const first = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
  const titleId = uid('cal-title');

  const day = (d) => {
    if (!d) return '<td></td>';
    const inRange = range && d > range[0] && d < range[1];
    const pressed = range ? d === range[0] || d === range[1] : d === selected;
    const classes = ['ds-day', inRange && 'ds-day--range', d === today && 'ds-day--today'].filter(Boolean).join(' ');
    return `<td><button type="button" class="${classes}" aria-label="${MONTHS[month]} ${d}, ${year}"${pressed ? ' aria-pressed="true"' : ''}${minDay && d < minDay ? ' disabled' : ''}>${d}</button></td>`;
  };

  return `<div class="ds-cal${compact ? ' ds-cal--compact' : ''}"${range ? '' : ' data-cal'}>
    <div class="ds-cal__head">
      <button type="button" aria-label="Previous month">${icon('chevron-left', { size: 18 })}</button>
      <span id="${titleId}">${MONTHS[month]} ${year}</span>
      <button type="button" aria-label="Next month">${icon('chevron-right', { size: 18 })}</button>
    </div>
    <table aria-labelledby="${titleId}">
      <thead><tr>${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        .map((d) => `<th scope="col" abbr="${d}">${d.slice(0, 2)}</th>`).join('')}</tr></thead>
      <tbody>${weeks.map((w) => `<tr>${w.map(day).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
}

// ---------- Navigation ----------

export function tabs(items, { selected = 0, label = 'Sections' } = {}) {
  const id = uid('tabs');
  return `<div class="ds-tabs">
    <div role="tablist" aria-label="${label}">${items.map((t, i) => `<button type="button" role="tab" id="${id}-tab-${i}"
      aria-controls="${id}-panel-${i}" aria-selected="${i === selected}" tabindex="${i === selected ? 0 : -1}">${t.label}${
      t.count != null ? `<span class="ds-tabs__count">${t.count}</span>` : ''}</button>`).join('')}</div>
    ${items.map((t, i) => `<div role="tabpanel" id="${id}-panel-${i}" aria-labelledby="${id}-tab-${i}" tabindex="0"${
      i === selected ? '' : ' hidden'}>${t.content}</div>`).join('')}
  </div>`;
}

export function tree(nodes, { label = 'Components', selected } = {}) {
  let first = true;
  const items = (list) => list.map((node) => {
    const tabindex = first ? 0 : -1;
    first = false;
    const kids = node.children;
    return `<li role="treeitem" tabindex="${tabindex}"${kids ? ` aria-expanded="${node.expanded !== false}"` : ''}${
      node.label === selected ? ' aria-selected="true"' : ''}>
      <span class="ds-tree__label">${icon(kids ? 'folder' : 'component', { size: 14 })}${node.label}</span>
      ${kids ? `<ul role="group">${items(kids)}</ul>` : ''}</li>`;
  }).join('');
  return `<ul class="ds-tree" role="tree" aria-label="${label}">${items(nodes)}</ul>`;
}

export function pagination({ page = 1, perPage = 20, total = 40, numbers = false } = {}) {
  const pages = Math.ceil(total / perPage);
  const from = (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);
  const numberButtons = numbers
    ? Array.from({ length: pages }, (_, i) => i + 1).map((p) => `<button type="button" data-goto="${p}" aria-label="Page ${p}"${
      p === page ? ' aria-current="page"' : ''}>${p}</button>`).join('')
    : '';
  return `<nav class="ds-pager" aria-label="Pagination" data-pager='${JSON.stringify({ perPage, total, numbers })}'>
    <div class="ds-pager__controls">
      <button type="button" data-goto="${page - 1}" aria-label="Previous page"${page === 1 ? ' disabled' : ''}>${icon('chevron-left')}</button>
      ${numberButtons}
      <button type="button" data-goto="${page + 1}" aria-label="Next page"${page === pages ? ' disabled' : ''}>${icon('chevron-right')}</button>
    </div>
    <p class="ds-pager__status" aria-live="polite"><strong>${from}–${to}</strong> of ${total}</p>
  </nav>`;
}

// ---------- Behaviour ----------

function selectTab(tab) {
  const group = tab.closest('.ds-tabs');
  group.querySelectorAll('[role=tab]').forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    group.querySelector(`#${t.getAttribute('aria-controls')}`).hidden = !on;
  });
  tab.focus();
}

function onClick(e) {
  const tab = e.target.closest('[role=tab]');
  if (tab) return selectTab(tab);

  const label = e.target.closest('.ds-tree__label');
  if (label) {
    const item = label.parentElement;
    if (item.hasAttribute('aria-expanded')) {
      item.setAttribute('aria-expanded', item.getAttribute('aria-expanded') !== 'true');
    } else {
      item.closest('[role=tree]').querySelectorAll('[aria-selected]').forEach((i) => i.removeAttribute('aria-selected'));
      item.setAttribute('aria-selected', 'true');
    }
    return;
  }

  const day = e.target.closest('[data-cal] .ds-day');
  if (day) {
    day.closest('[data-cal]').querySelectorAll('[aria-pressed]').forEach((d) => d.removeAttribute('aria-pressed'));
    day.setAttribute('aria-pressed', 'true');
    return;
  }

  const go = e.target.closest('[data-goto]');
  if (go) {
    const nav = go.closest('[data-pager]');
    const holder = document.createElement('div');
    holder.innerHTML = pagination({ ...JSON.parse(nav.dataset.pager), page: Number(go.dataset.goto) });
    const next = holder.firstElementChild;
    nav.replaceWith(next);
    (next.querySelector(`[aria-label="${go.getAttribute('aria-label')}"]:not(:disabled)`) || next.querySelector('button:not(:disabled)')).focus();
  }
}

function onKeydown(e) {
  const { target, key } = e;
  if (target.matches('[role=tab]') && (key === 'ArrowRight' || key === 'ArrowLeft')) {
    const all = [...target.parentElement.children];
    selectTab(all[(all.indexOf(target) + (key === 'ArrowRight' ? 1 : -1) + all.length) % all.length]);
    e.preventDefault();
  }
  if (target.matches('[role=treeitem]')) {
    if (key === 'Enter' || key === ' ') {
      target.querySelector('.ds-tree__label').click();
      e.preventDefault();
    }
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const visible = [...target.closest('[role=tree]').querySelectorAll('[role=treeitem]')].filter((i) => i.offsetParent !== null);
      const next = visible[visible.indexOf(target) + (key === 'ArrowDown' ? 1 : -1)];
      if (next) {
        target.tabIndex = -1;
        next.tabIndex = 0;
        next.focus();
      }
      e.preventDefault();
    }
  }
}

export function view(html) {
  const root = document.createElement('div');
  root.className = 'ds';
  root.innerHTML = html;
  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKeydown);
  return root;
}
