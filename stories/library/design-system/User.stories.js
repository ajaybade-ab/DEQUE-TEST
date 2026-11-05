import { view, user, JOB_TITLES } from '../ui.js';
import { users } from '../../data.js';

export default { title: 'Design System/User' };

export const Default = { render: () => view(user({ name: users[2].name, title: JOB_TITLES[0] })) };
export const Small = { render: () => view(user({ name: users[3].name, title: JOB_TITLES[1], size: 'sm' })) };
export const Large = { render: () => view(user({ name: users[4].name, title: JOB_TITLES[2], size: 'lg' })) };
export const List = {
  render: () => view(`<div class="ds-stack">${users.slice(0, 5).map((u, i) => user({ name: u.name, title: JOB_TITLES[i] })).join('')}</div>`),
};
