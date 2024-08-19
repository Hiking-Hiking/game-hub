import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    // 如果只设置borderRadius效果，只能看到图片下边框是圆角，上边框依然是方角，原因就是图片大于容器，所以我们看不到上边框圆角；
    // 解决办法：设置溢出隐藏
    <Card>
      {/* <Image src={game.background_image} /> */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          {/* 遍历game.parent_platform（是数组对象），将每个对象作为参数p，将对象里的属性platform对应的对象值，作为结果返出去。（因为每个game对象数据里的parent_platform，结构是对象数组，会有多个对象，每条对象数据里，又有一个属性,名为platform，platform值是包含id等数据的对象；） */}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
