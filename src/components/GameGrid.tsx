import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/apiClient";

interface game {
  id: number;
  name: string;
}

interface gameResponseData {
  count: number;
  results: game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<gameResponseData>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
