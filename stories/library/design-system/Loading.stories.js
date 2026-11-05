import { view, loading } from '../ui.js';

export default { title: 'Design System/Loading' };

export const Connecting = { render: () => view(loading()) };
export const Spinner = { render: () => view(loading({ variant: 'spinner', label: 'Loading bookings…' })) };
