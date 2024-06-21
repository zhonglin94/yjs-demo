import { Component, OnInit } from '@angular/core';
import { YjsService } from '../yjs.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	constructor(private yjsService: YjsService) {
	}

	ngOnInit(): void {
	}

}
