import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserNameInputComponent } from './user-name-input/user-name-input.component';
import { LandingComponent } from './landing/landing.component';
import { ProsemirrorComponent } from './prosemirror/prosemirror.component';

@NgModule({
	declarations: [
		AppComponent,
		UserNameInputComponent,
		LandingComponent,
		ProsemirrorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
