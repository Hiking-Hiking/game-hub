import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      {/*
      分段设置呈现的列数。 
      原因：因为在小型设备上，不一定有足够的空间能呈现3列；

      需求：在小型移动设备上，显示1列；在平板电脑上，显示2列；在更大的屏幕上（大于1024px），显示3列或者更多列。

      实施：给游戏卡片外面的包裹容器上（在GameGrid.tsx文件里的<SimpleGrid>组件标签上），columns设置的属性值，不能设置为固定的3，传递一个分段设值的对象，将小号设为1，中号设为 2 ，大号设为 3 ，特大号设为 5 。 */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* 如何在一些标签外面快速包裹一个新标签：选中想要包裹在其中的代码，然后按 ctrl + shift + p,在输入框输入wrap，选择'wrap with abbreviation'（使用缩写包围），直接在输入框输入标签名，点击enter就可以了 */}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
