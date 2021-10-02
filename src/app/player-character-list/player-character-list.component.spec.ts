import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterListComponent } from './player-character-list.component';

describe('PlayerCharacterListComponent', () => {
  let component: PlayerCharacterListComponent;
  let fixture: ComponentFixture<PlayerCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCharacterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
