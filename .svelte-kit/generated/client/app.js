export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~2],
		"/case-battle": [~3],
		"/case-battle/battle/[slug]": [~4],
		"/case-battle/create": [~5],
		"/case-battle/list": [6],
		"/case-battle/list/finished": [~7],
		"/case-battle/list/my": [~8],
		"/login": [~9],
		"/panel": [~10],
		"/panel/profil": [~11],
		"/skins/category": [~12],
		"/skins/category/[slug]": [~13],
		"/skins/upgrader": [~14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';