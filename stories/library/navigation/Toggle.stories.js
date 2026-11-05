import { view, segmented } from '../ui.js';

export default { title: 'Navigation/Toggle' };

export const ViewSwitcher = { render: () => view(segmented(['List', 'Grid', 'Map'], { label: 'View', selected: 1 })) };
export const SortOrder = { render: () => view(segmented(['Cheapest', 'Fastest'], { label: 'Sort by' })) };
export const Disabled = { render: () => view(segmented(['List', 'Grid', 'Map'], { label: 'View', disabled: true })) };
