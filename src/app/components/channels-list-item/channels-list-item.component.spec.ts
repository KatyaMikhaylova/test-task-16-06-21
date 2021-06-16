import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsListItemComponent } from './channels-list-item.component';

describe('ChannelsListItemComponent', () => {
  let component: ChannelsListItemComponent;
  let fixture: ComponentFixture<ChannelsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
