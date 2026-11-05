import { view, pagination } from '../ui.js';

export default { title: 'Navigation/Pagination' };

export const FirstPage = { render: () => view(pagination()) };
export const LastPage = { render: () => view(pagination({ page: 2 })) };
export const MiddlePage = { render: () => view(pagination({ page: 3, total: 100 })) };
export const WithPageNumbers = { render: () => view(pagination({ page: 2, total: 100, numbers: true })) };
export const SinglePage = { render: () => view(pagination({ total: 12 })) };
