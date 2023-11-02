import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const MetacriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";
  return <Badge colorScheme={color} borderRadius="4px" fontSize={'14px'} paddingX={2}>{metacritic}</Badge>;
};

export default MetacriticScore;
