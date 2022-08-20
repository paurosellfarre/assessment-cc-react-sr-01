import { Monster } from '../../models/interfaces/monster.interface';
import {
  Image,
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterDivider,
  ProgressBar,
  BattleMonsterStats,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      </BattleMonsterCard>
    );
  } else {
    return (
      <BattleMonsterCard>
        <Image src={monster?.imageUrl} />
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
        <BattleMonsterDivider />
        <BattleMonsterStats>HP</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster?.hp} />
        <BattleMonsterStats>Attack</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster?.attack} />
        <BattleMonsterStats>Defense</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster?.defense} />
        <BattleMonsterStats>Speed</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster?.speed} />
      </BattleMonsterCard>
    );
  }
};

export { MonsterBattleCard };
