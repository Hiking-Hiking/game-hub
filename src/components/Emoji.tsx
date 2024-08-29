import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  //低于3分就不显示任何表情
  if (rating < 3) return null;
  // 使用地图对象，遍历获取，避免使用一堆if语句；
  // 对emojiMap添加注释，定义索引签名 index signature，表明在这个对象中有任意多个数字类型的键，对每个键映射一个ImageProps（是定义在chakra中的库）
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  // return <Image src={emojiMap[rating].src} alt={emojiMap[rating].alt} boxSize={emojiMap[rating].boxSize} marginTop={1} />

  //用获取到的rating值当做key，根据这个key，找到对应的值（是对象），将这个对象里的图片属性解构渲染在图片上；
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
