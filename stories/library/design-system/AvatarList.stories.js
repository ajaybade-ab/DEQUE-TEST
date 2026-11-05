import { view, avatarList } from '../ui.js';
import { users } from '../../data.js';

export default { title: 'Design System/AvatarList' };

export const Default = { render: () => view(avatarList(users.slice(0, 3))) };
export const WithOverflow = { render: () => view(avatarList(users.slice(0, 13))) };
export const Small = { render: () => view(avatarList(users.slice(0, 6), { size: 'sm', max: 4 })) };
export const Large = { render: () => view(avatarList(users.slice(0, 5), { size: 'lg', max: 4 })) };
export const Single = { render: () => view(avatarList(users.slice(0, 1))) };
export const Pair = { render: () => view(avatarList(users.slice(0, 2))) };
export const ManyVisible = { render: () => view(avatarList(users.slice(0, 8), { max: 8 })) };
