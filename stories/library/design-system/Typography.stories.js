import { view } from '../ui.js';

export default { title: 'Design System/Typography' };

export const Headings = {
  render: () => view(`<div class="ds-type">
    <h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6></div>`),
};

export const Body = {
  render: () => view(`<div class="ds-type">
    <p class="ds-text-lg">Large body text for introductions and summaries.</p>
    <p>Regular body text. Book flights, hotels and car rentals at the best prices, all in one place.</p>
    <p class="ds-text-sm">Small text for supporting details and table cells.</p>
    <p class="ds-text-caption">Caption text for timestamps and footnotes.</p></div>`),
};

export const Article = {
  render: () => view(`<article class="ds-type">
    <h2>Weekend in Lisbon</h2>
    <p class="ds-text-caption">Travel guide · 4 minute read</p>
    <p>Lisbon rewards slow travellers. Start in Alfama, follow the trams up to the castle, and end the day with a view over the river.</p>
    <h3>Where to stay</h3>
    <p>Baixa is central and flat. Príncipe Real is quieter, with small hotels and gardens.</p></article>`),
};
