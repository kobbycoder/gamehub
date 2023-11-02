import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

interface game {
  id: number;
  name: string;
}

interface gameResponseData {
  count: number;
  results: game[];
}

const useGames = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<gameResponseData>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
