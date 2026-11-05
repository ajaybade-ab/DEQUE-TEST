import { view, datePicker } from '../ui.js';

export default { title: 'Forms/DatePicker' };

// Dates are fixed (November 2026) so Chromatic snapshots never change on their own.
export const Default = { render: () => view(datePicker({ selected: 12 })) };
export const Range = { render: () => view(datePicker({ range: [10, 14] })) };
export const PastDaysDisabled = { render: () => view(datePicker({ selected: 18, minDay: 5, today: 5 })) };
export const Compact = { render: () => view(datePicker({ selected: 24, compact: true })) };
