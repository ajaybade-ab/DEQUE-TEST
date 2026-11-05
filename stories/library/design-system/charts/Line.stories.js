import { view, lineChart } from '../../ui.js';

export default { title: 'Design System/Charts/Line' };

export const WeeklySearches = {
  render: () => view(lineChart('Weekly searches (thousands)', [
    { label: 'Flights', color: '#6d28d9', values: [12, 18, 15, 24, 20, 28, 26] },
    { label: 'Hotels', color: '#0f766e', values: [8, 10, 14, 12, 16, 15, 20] },
  ])),
};

export const SingleSeries = {
  render: () => view(lineChart('Average fare (USD)', [
    { label: 'Fare', color: '#1d4ed8', values: [420, 390, 450, 510, 480, 530, 495, 560] },
  ])),
};
