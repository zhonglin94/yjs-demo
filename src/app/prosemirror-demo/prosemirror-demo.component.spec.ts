import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsemirrorDemoComponent } from './prosemirror-demo.component';

describe('ProsemirrorDemoComponent', () => {
  let component: ProsemirrorDemoComponent;
  let fixture: ComponentFixture<ProsemirrorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsemirrorDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsemirrorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
