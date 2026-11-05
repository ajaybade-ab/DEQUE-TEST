import { view, barChart } from '../../ui.js';

export default { title: 'Design System/Charts/Bar' };

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const DailyBookings = {
  render: () => view(barChart('Bookings per day', [32, 45, 38, 52, 61, 74, 58].map((value, i) => ({ label: week[i], value })))),
};

export const ByStatus = {
  render: () => view(barChart('Bookings by status', [
    { label: 'Confirmed', value: 120, color: '#15803d' },
    { label: 'Pending', value: 45, color: '#b45309' },
    { label: 'Cancelled', value: 18, color: '#b91c1c' },
  ])),
};
