import { writable } from 'svelte/store';

const userStore = writable([
	{
		id: 1,
		username: 'Gbenga',
		password: 'gbenga1',
		qoute: 'Chase your dreams with passion, and they will become your reality.'
	},
	{
		id: 2,
		username: 'Hamid',
		password: 'hamid1',
		qoute: 'Believe in yourself; the power to achieve lies within your heart.'
	},
	{
		id: 3,
		username: 'Lily',
		password: 'lily1',
		qoute: 'Every failure is a stepping stone towards success; keep moving forward.'
	},
	{
		id: 4,
		username: 'Success',
		password: 'success1',
		qoute: 'Embrace challenges; they are opportunities for growth and transformation.'
	},
	{
		id: 5,
		username: 'strength',
		password: 'strength1',
		qoute: 'You are stronger than you know; perseverance conquers all obstacles.'
	}
]);

export default userStore;
