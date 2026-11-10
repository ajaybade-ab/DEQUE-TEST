import '../assets/styles.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  decorators: [
    (story) => {
      const content = story();
      const header = '<header class="site-header"><p class="site-header-name">DEQUE-TEST-HEADER-AJAY</p></header>';
      const footer = '<footer class="site-footer"><p>DEQUE-TEST-AJAY</p></footer>';
      if (typeof content === 'string') return header + content + footer;
      // Library stories return live elements so their click and keyboard handlers survive.
      const wrapper = document.createElement('div');
      wrapper.append(content);
      wrapper.insertAdjacentHTML('afterbegin', header);
      wrapper.insertAdjacentHTML('beforeend', footer);
      return wrapper;
    },
  ],
  parameters: {
    a11y: {
      // 'error' fails the story's a11y check (and Chromatic accessibility test) on any violation.
      // 'todo' reports violations as warnings only. 'off' skips the check.
      test: 'error',
      options: {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
      },
    },
    layout: 'padded',
  },
};

export default preview;
