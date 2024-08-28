import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // 要求：
  // 默认显示 Games；
  // 选择了流派： 流派 Games -> Action Games;
  // 选择了平台： 平台 Games -> Xbox Games;
  // 同时选择了平台和流派： 平台 流派 Games -> Xbox Action Games;
  // 使用模板字符串，如果gamequery里有platform和genre就显示，如果没有就为空值，默认最后的字符串为'Games';
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
