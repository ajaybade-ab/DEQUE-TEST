import { view, segmented } from '../ui.js';

export default { title: 'Forms/Toggle' };

export const ThreeOptions = { render: () => view(segmented(['Alpha', 'Beta', 'Gamma'], { label: 'Release channel', selected: 1 })) };
export const TwoOptions = { render: () => view(segmented(['Alpha', 'Beta'], { label: 'Release channel', selected: 1 })) };
export const Disabled = { render: () => view(segmented(['Alpha', 'Beta', 'Gamma'], { label: 'Release channel', disabled: true })) };
