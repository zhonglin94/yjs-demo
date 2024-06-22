import { Injectable } from '@angular/core';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

export const usercolors = [
	'#30bced',
	'#6eeb83',
	'#ffbc42',
	'#ecd444',
	'#ee6352',
	'#9ac2c9',
	'#8acb88',
	'#1be7ff'
];

function creatUsers() {
	return { name: 'Zhonglin YAANG dDDDD', color: YjsService.getColor() };
}

interface User {
	name: string;
	color: string;
}

@Injectable({
	providedIn: 'root'
})
export class YjsService {
	provider: WebsocketProvider | undefined;
	users: User[] = [];
	topFiveUsers: User[] = [];

	constructor() {
	}

	init(): void {
		const ydoc = new Y.Doc();
		this.provider = new WebsocketProvider(
			'wss://demos.yjs.dev/ws',
			'bgc-innovation-carnival',
			ydoc
		);
		this.onUserChange();

		// for (let i = 0; i < 100; i++) {
		// 	this.users.push(creatUsers());
		// }
		// this.topFiveUsers = this.users.slice(0, 5);
	}

	setUser(name: string) {
		this.provider?.awareness.setLocalStateField('user', { name: name, color: YjsService.getColor() });
	}

	private onUserChange() {
		if (!this.provider) {
			return;
		}
		const { awareness } = this.provider;
		awareness.on('change', () => {
			this.users = [];
			awareness.getStates().forEach(state => {
				this.users.push(state['user']);
			});
			this.users.sort((a, b) => a.name.localeCompare(b.name));
			this.topFiveUsers = this.users.slice(0, 5);
		});
	}

	static getColor(): string {
		return usercolors[Math.floor(Math.random() * usercolors.length)];
	}
}
