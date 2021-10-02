import { TestBed } from '@angular/core/testing';

import { PlayerCharacterService } from './player-character.service';

describe('PlayerCharacterService', () => {
  let service: PlayerCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
