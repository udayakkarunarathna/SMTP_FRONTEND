import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderListComponent } from './list-header-list.component';

describe('ListHeaderListComponent', () => {
  let component: ListHeaderListComponent;
  let fixture: ComponentFixture<ListHeaderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHeaderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
