import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-user-name-input',
	templateUrl: './user-name-input.component.html',
	styleUrls: ['./user-name-input.component.scss']
})
export class UserNameInputComponent implements OnInit {
	userName = '';
	@Output() userNameChange = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit(): void {
	}


	onEnter(): void {
		if (this.userName) {
			this.userNameChange.emit(this.userName);
		}
	}
}
