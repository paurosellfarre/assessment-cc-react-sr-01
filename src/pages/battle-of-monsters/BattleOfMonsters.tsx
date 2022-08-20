import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import {
  fetchMonstersData,
  fetchBattle,
  setSelectedComputerMonster,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
  selectSelectedComputerMonster,
  selectBattleResult,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedComputerMonster = useSelector(selectSelectedComputerMonster);
  const battleResult = useSelector(selectBattleResult);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    //create new array of monsters without selected monster
    const newMonsters = monsters.filter(
      (monster) => monster.id !== selectedMonster?.id,
    );

    //Select 1 random monster for computer
    const randomMonster =
      newMonsters[Math.floor(Math.random() * newMonsters.length)];

    if (selectedMonster != null && randomMonster != null) {
      const monster1Id = selectedMonster.id;
      const monster2Id = randomMonster.id;

      //Show computer monster
      dispatch(setSelectedComputerMonster(!monster2Id ? null : randomMonster));

      // Fight!
      dispatch(fetchBattle({ monster1Id, monster2Id }));
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>
      <MonstersList monsters={monsters} />
      {battleResult != null ? (
        <WinnerDisplay text={battleResult?.winner.name || ''}></WinnerDisplay>
      ) : null}
      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={selectedComputerMonster?.name || 'Computer'}
          monster={selectedComputerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
