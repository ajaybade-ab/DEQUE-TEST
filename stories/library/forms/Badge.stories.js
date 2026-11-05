import { view, badge } from '../ui.js';

export default { title: 'Forms/Badge' };

export const Success = { render: () => view(badge('Badge', 'success')) };
export const Warning = { render: () => view(badge('Pending', 'warning')) };
export const Danger ={ render: () => view(badge('Cancelled', 'error')) };
export const Info = { render: () => view(badge('New', 'info')) };
export const Neutral = { render: () => view(badge('Draft', 'neutral')) };
export const Brand = { render: () => view(badge('Gold member', 'brand')) };
