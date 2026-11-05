import { view, tabs } from '../ui.js';

export default { title: 'Navigation/Tabs' };

const items = [
  { label: 'Queries', count: 12, content: 'Saved searches for flights and hotels.' },
  { label: 'Points', count: 3, content: 'Your loyalty points and recent activity.' },
  { label: 'Courses', count: 0, content: 'Travel safety courses you have started.' },
];

export const Default = { render: () => view(tabs(items.map(({ count, ...t }) => t))) };
export const SecondSelected = { render: () => view(tabs(items.map(({ count, ...t }) => t), { selected: 1 })) };
export const WithCounts = { render: () => view(tabs(items)) };
export const TwoTabs = { render: () => view(tabs(items.slice(0, 2).map(({ count, ...t }) => t))) };
export const ManyTabs = {
  render: () => view(tabs(['Flights', 'Hotels', 'Cars', 'Trains', 'Cruises', 'Activities']
    .map((label) => ({ label, content: `Search ${label.toLowerCase()}.` })), { label: 'Products' })),
};
