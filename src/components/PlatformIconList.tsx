import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  // 这里将传入的多条platform属性对应的对象值，重新组成了数组对象
  platforms: Platform[];
}
// 关于 slug，它是一个很常用的术语，尤其是在 Web 开发中：
//slug 通常是一个URL友好的字符串，用于在URL中标识和描述资源。它通常由小写字母、数字和连字符组成，不包含空格或特殊字符。
// slug 常用于创建可读性更好的 URL。使用 slug 而不是 ID 可以使 URL 更具可读性和 SEO 友好性，同时仍然提供唯一标识符的功能。例如： "slug": "pc" 可能用于创建像 www.example.com/platforms/pc 这样的 URL。

const PlatformIconList = ({ platforms }: Props) => {
  // platforms是数组对象，每个对象platform里有id，name，slug等键值对。
  // 比如，name:PlayStation,slug:playstation;  slug是name对应的小写。

  // 1. iconMap: { [key: string]: IconType }的含义：
  // 这个写法，是ts的索引签名，定义了一个对象类型，键（key）是字符串类型，值是Icontype类型（来自react-icons图标库）；
  // 2.iconMap对象的内容：
  // 这个对象将每个platform里的 slug（如 'pc', 'playstation'）映射到相应的图标组件（如 `FaWindows`, `FaPlaystation`）。这些图标组件来自'react-icons' 这样的库。
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    // marginY={1} 如果直接填写数值不是字符串， 比如 1 ，那么这代表着chakra的theme space，应该是4px左右；
    // 如果以字符串形式带px的具体数值，比如'10px'，则直接是10px。
    <HStack marginY={1}>
      {platforms.map((platform) => (
        //Icon是chakra库的封装组件，as表示来源，gray.500是chakra库定义的颜色，每个颜色有不同程度的值，也可以直接根据需要正常填颜色值

        //{iconMap[platform.slug]}的含义；
        //是对象的属性访问法，它的作用是，获取到当前platform对象的slug属性，使用这个slug属性值作为iconMap对象的键，再从iconMap对象中获取到这个键对应的值（即图标）；
        //例如:如果platform.slug是'pc',那么{iconMap[platform.slug]}就是{iconMap[pc]}，在iconMap对象中找到键pc，它对应的值是'FaWindows'，最终{iconMap[platform.slug]}会被解析为FaWindow组件。
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
