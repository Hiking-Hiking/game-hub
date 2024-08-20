import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //宽于1024px的大屏幕
        }}
        templateColumns={{
          // '1fr'，意味着一个分数，即 列会拉伸从而占据所有空间；
          // 在基础设备（即小型设备）上，只显示的这一列占据所有可用空间；
          base: "1fr",
          // 在大设备上，第一列（即左侧的侧边栏宽度为固定的200px），第二列（即右侧的主体游戏网格部分）占据剩余所有空间；
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        {/* 只在大于1024px的宽屏上显示aside部分 */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
