import { view, lineChart } from '../../ui.js';

export default { title: 'Design System/Charts/Area' };

export const Revenue = {
  render: () => view(lineChart('Monthly revenue (USD thousands)', [
    { label: 'Revenue', color: '#0f766e', values: [30, 42, 38, 55, 61, 58, 72, 80] },
  ], { area: true })),
};

export const TwoSeries = {
  render: () => view(lineChart('Seats sold (thousands)', [
    { label: 'Economy', color: '#6d28d9', values: [40, 48, 45, 60, 58, 66] },
    { label: 'Business', color: '#f59e0b', values: [10, 14, 12, 18, 16, 22] },
  ], { area: true })),
};
