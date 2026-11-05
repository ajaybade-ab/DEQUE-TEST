import { view, icon, iconNames } from '../ui.js';

export default { title: 'Design System/Icons' };

export const All = {
  render: () => view(`<div class="ds-icon-grid">${iconNames.map((name) => `
    <div class="ds-icon-cell">${icon(name, { size: 24 })}<span>${name}</span></div>`).join('')}</div>`),
};

export const Sizes = {
  render: () => view(`<div class="ds-row">${[16, 20, 24, 32, 48].map((size) => icon('bell', { size, label: `Notifications, ${size} pixels` })).join('')}</div>`),
};
