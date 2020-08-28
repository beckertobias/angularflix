import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistitemComponent } from './movielistitem.component';

describe('MovielistitemComponent', () => {
  let component: MovielistitemComponent;
  let fixture: ComponentFixture<MovielistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovielistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
