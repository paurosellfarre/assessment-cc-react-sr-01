import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';
import { Battle } from '../../models/interfaces/battle.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (
  monster1Id: string,
  monster2Id: string,
): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id,
      monster2Id,
    }),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  postBattle,
};
