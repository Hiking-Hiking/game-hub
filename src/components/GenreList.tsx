import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {/* 因为不想在页面的不同部分,出现多个不同的错误提示，所以如果侧边栏获取数据错误，只是返回空值，什么都不渲染。 */}
      if (error) return null;
      {/* 获取数据时显示加载效果 */}
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="30px"
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
