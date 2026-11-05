import { view, button } from '../ui.js';

export default { title: 'Forms/Button' };

export const Primary = { render: () => view(button('Primary')) };
export const Secondary = { render: () => view(button('Secondary', { variant: 'secondary' })) };
export const Tertiary = { render: () => view(button('Tertiary', { variant: 'tertiary' })) };
export const Small = { render: () => view(button('Small', { size: 'sm' })) };
export const Large = { render: () => view(button('Large', { size: 'lg' })) };
export const Disabled = { render: () => view(button('Disabled', { disabled: true })) };
export const WithIcon = { render: () => view(button('Search flights', { iconName: 'search' })) };
export const IconOnly = { render: () => view(button('Add traveller', { iconName: 'plus', iconOnly: true })) };
export const AllVariants = {
  render: () => view(`<div class="ds-stack">${button('Primary')}${button('Secondary', { variant: 'secondary' })}${button('Tertiary', { variant: 'tertiary' })}</div>`),
};
