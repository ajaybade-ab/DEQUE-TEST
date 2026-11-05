import { view, avatar } from '../ui.js';
import { users } from '../../data.js';

export default { title: 'Design System/Avatar' };

const { name } = users[0];

export const Large = { render: () => view(avatar({ name, size: 'lg' })) };
export const Medium = { render: () => view(avatar({ name })) };
export const Small = { render: () => view(avatar({ name, size: 'sm' })) };
export const WithImage = { render: () => view(avatar({ name, src: '/assets/photo.svg', size: 'xl' })) };
export const Sizes = {
  render: () => view(`<div class="ds-row">${['sm', 'md', 'lg', 'xl'].map((size) => avatar({ name: users[1].name, size })).join('')}</div>`),
};
