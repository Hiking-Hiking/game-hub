import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //宽于1024px的大屏幕
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        {/* 只在大于1024px的宽屏上显示aside部分 */}
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>

        <GridItem area="main">Main</GridItem>
      </Grid>
    </div>
  );
}

export default App;
