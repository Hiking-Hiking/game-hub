import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 用主题配置ThemeConfig来注释config，这样就能访问它的属性，比如初始颜色等
const config: ThemeConfig = {
  initialColorMode: "dark",
};
//注意：config: ThemeConfig的写法解释如下；'config' 是一个变量名，' : ' 后面的 ThemeConfig 是类型注解，指定 config 变量的类型。
//这段代码的结果：声明一个名为 config 的常量，指定 config 的类型为 ThemeConfig，给 config 赋值一个对象，这个对象有一个属性 initialColorMode，其值为字符串 "dark"。

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});
export default theme;
