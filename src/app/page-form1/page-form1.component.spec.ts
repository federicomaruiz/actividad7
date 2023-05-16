import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForm1Component } from './page-form1.component';

describe('PageForm1Component', () => {
  let component: PageForm1Component;
  let fixture: ComponentFixture<PageForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
