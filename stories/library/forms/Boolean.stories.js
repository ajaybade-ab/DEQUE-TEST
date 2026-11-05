import { view, segmented } from '../ui.js';

export default { title: 'Forms/Boolean' };

const options = ['True', 'False'];

export const True = { render: () => view(segmented(options, { label: 'Email alerts', tone: 'green' })) };
export const False = { render: () => view(segmented(options, { label: 'Email alerts', tone: 'green', selected: 1 })) };
export const Disabled = { render: () => view(segmented(options, { label: 'Email alerts', tone: 'green', disabled: true })) };
