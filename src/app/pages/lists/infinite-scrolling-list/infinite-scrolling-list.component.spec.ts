import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingListComponent } from './infinite-scrolling-list.component';

describe('InfiniteScrollingListComponent', () => {
  let component: InfiniteScrollingListComponent;
  let fixture: ComponentFixture<InfiniteScrollingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
