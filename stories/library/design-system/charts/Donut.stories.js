import { view, donut } from '../../ui.js';

export default { title: 'Design System/Charts/Donut' };

export const BookingsByProduct = {
  render: () => view(donut('Bookings by product', [
    { label: 'Flights', value: 48, color: '#6d28d9' },
    { label: 'Hotels', value: 32, color: '#0f766e' },
    { label: 'Cars', value: 20, color: '#f59e0b' },
  ])),
};

export const Progress = {
  render: () => view(donut('Profile complete', [
    { label: 'Complete', value: 72, color: '#1d4ed8' },
    { label: 'Remaining', value: 28, color: '#dbeafe' },
  ], { size: 100, thickness: 14 })),
};
