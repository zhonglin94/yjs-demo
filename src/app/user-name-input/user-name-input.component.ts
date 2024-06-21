import { Component, EventEmitter, Output } from '@angular/core';
import { YjsService } from '../yjs.service';

@Component({
	selector: 'app-user-name-input',
	templateUrl: './user-name-input.component.html',
	styleUrls: ['./user-name-input.component.scss']
})
export class UserNameInputComponent {
	userName = '';
	@Output() userNameChange = new EventEmitter<string>();

	constructor(private yjsService: YjsService) {
	}

	onEnter(): void {
		this.yjsService.init();
		this.yjsService.setUser(this.userName);
	}
}
