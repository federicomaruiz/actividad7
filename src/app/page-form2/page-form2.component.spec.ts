import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForm2Component } from './page-form2.component';

describe('PageForm2Component', () => {
  let component: PageForm2Component;
  let fixture: ComponentFixture<PageForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
