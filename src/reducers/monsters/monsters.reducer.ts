import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { Battle } from '../../models/interfaces/battle.interface';
import {
  fetchMonstersData,
  setSelectedMonster,
  setSelectedComputerMonster,
  fetchBattle,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputerMonster: Monster | null;
  battleResult: Battle | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputerMonster: null,
  battleResult: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    selectedComputerMonster: action.payload,
  }));

  builder.addCase(fetchBattle.fulfilled, (state, action) => ({
    ...state,
    battleResult: action.payload,
  }));
});
