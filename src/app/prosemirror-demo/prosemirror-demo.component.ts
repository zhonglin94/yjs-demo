import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from 'y-prosemirror';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
// @ts-ignore
import { schema } from './schema.js';
import { exampleSetup } from 'prosemirror-example-setup';
import { keymap } from 'prosemirror-keymap';

@Component({
	selector: 'app-prosemirror-demo',
	templateUrl: './prosemirror-demo.component.html',
	styleUrls: ['./prosemirror-demo.component.scss']
})
export class ProsemirrorDemoComponent implements AfterViewInit {
	@ViewChild('editorContainer', { static: true }) containerEl!: ElementRef<HTMLDivElement>;
	private prosemirrorView: any;

	constructor() {
	}

	ngAfterViewInit(): void {
		this.init();
	}

	private init(): void {
		const ydoc = new Y.Doc();
		const provider = new WebsocketProvider(
			'wss://demos.yjs.dev/ws',
			'bgc-innovation-carnival',
			ydoc
		);
		const yXmlFragment = ydoc.getXmlFragment('prosemirror');

		const editor = document.createElement('div');
		editor.setAttribute('id', 'editor');
		const editorContainer = this.containerEl.nativeElement;
		editorContainer.insertBefore(editor, null);
		this.prosemirrorView = new EditorView(editor, {
			state: EditorState.create({
				schema,
				plugins: [
					ySyncPlugin(yXmlFragment),
					yCursorPlugin(provider.awareness),
					yUndoPlugin(),
					keymap({
						'Mod-z': undo,
						'Mod-y': redo,
						'Mod-Shift-z': redo
					})
				].concat(exampleSetup({ schema }))
			})
		});
	}

}
