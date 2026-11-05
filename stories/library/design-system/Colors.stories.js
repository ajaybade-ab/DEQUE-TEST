import { view, palette } from '../ui.js';

export default { title: 'Design System/Colors' };

export const Palette = {
  render: () => view(Object.entries(palette).map(([name, ramp]) => `
    <div class="ds-ramp-row"><span>${name}</span>
      <div class="ds-ramp">${ramp.map((c) => `<div class="ds-swatch" style="background:${c}" title="${c}"></div>`).join('')}</div>
    </div>`).join('')),
};

const tokens = [
  ['Primary', '#6d28d9'], ['Secondary', '#0f766e'], ['Info', '#1d4ed8'], ['Danger', '#b91c1c'],
  ['Warning', '#b45309'], ['Text', '#111827'], ['Muted text', '#4b5563'], ['Surface', '#ffffff'],
];

export const Tokens = {
  render: () => view(`<div class="ds-tokens">${tokens.map(([name, hex]) => `
    <div class="ds-token"><div class="ds-swatch" style="background:${hex}"></div><strong>${name}</strong>${hex}</div>`).join('')}</div>`),
};
