import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YjsService } from '../yjs.service';
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from 'y-prosemirror';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
// @ts-ignore
import { schema } from './schema.js';
import { exampleSetup } from 'prosemirror-example-setup';
import { keymap } from 'prosemirror-keymap';

@Component({
	selector: 'app-prosemirror',
	templateUrl: './prosemirror.component.html',
	styleUrls: ['./prosemirror.component.scss']
})
export class ProsemirrorComponent implements OnInit {
	@ViewChild('editorContainer', { static: true }) containerEl!: ElementRef<HTMLDivElement>;
	private prosemirrorView: EditorView | undefined;

	constructor(public yjsService: YjsService) {
	}

	ngOnInit(): void {
		this.init();
	}

	getNameAbbreviation(name: string): string {
		const split = name.split(' ');
		const givenName = split[0];
		if (split[1]) {
			return `${givenName[0][0]}${split[1][0]}`;
		}
		return givenName[0][0];
	}

	private init(): void {
		const { provider } = this.yjsService;
		const ydoc = provider!.doc;
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
					yCursorPlugin(provider!.awareness),
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
