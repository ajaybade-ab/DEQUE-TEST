import { view, tree } from '../ui.js';

export default { title: 'Navigation/Treeview' };

const atoms = (expanded = true) => ({
  label: 'Atoms',
  expanded,
  children: [{ label: 'Button' }, { label: 'ButtonHover' }, { label: 'ButtonToggle' }],
});

export const Expanded = { render: () => view(tree([atoms()])) };
export const Collapsed = { render: () => view(tree([atoms(false)])) };
export const WithSelection = { render: () => view(tree([atoms()], { selected: 'ButtonHover' })) };
export const MultipleGroups = {
  render: () => view(tree([
    atoms(),
    { label: 'Molecules', children: [{ label: 'SearchBar' }, { label: 'DatePicker' }] },
    { label: 'Organisms', expanded: false, children: [{ label: 'Header' }, { label: 'Footer' }] },
  ])),
};
export const Nested = {
  render: () => view(tree([{
    label: 'Library',
    children: [
      { label: 'Forms', children: [{ label: 'Badge' }, { label: 'Button' }] },
      { label: 'Navigation', children: [{ label: 'Tabs' }, { label: 'Pagination' }] },
    ],
  }])),
};
