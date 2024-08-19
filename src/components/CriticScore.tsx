import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  //分数超过75分就显示为绿色，超过60分显示为黄色，低于60分的默认颜色
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    //colorScheme是chakra库封装的属性，
    //如果直接设置color属性，color属性只能设置前景颜色，但是colorScheme可以设置前景色和背景色，包括边框阴影色等；
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
