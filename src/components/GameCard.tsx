import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    // 如果只设置borderRadius效果，只能看到图片下边框是圆角，上边框依然是方角，原因就是图片大于容器，所以我们看不到上边框圆角；
    // 解决办法：设置溢出隐藏
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
