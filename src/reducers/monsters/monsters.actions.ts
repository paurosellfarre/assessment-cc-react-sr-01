import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);

export const fetchBattle = createAsyncThunk(
  'monsters/fetchBattle',
  async (monstersID: { monster1Id: string; monster2Id: string }) => {
    const result = await MonsterService.postBattle(
      monstersID.monster1Id,
      monstersID.monster2Id,
    );
    return result;
  },
);
