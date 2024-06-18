///All our imports we need

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  //custom game hook 
  const { games, error } = useGames();
  //We other helper function to add, delete or update data

  return (
    <>
      {/* display our data ul li grid table usually map it with unique key  */}
      <SimpleGrid>
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
      {error && <Text color={"red"}>{error}</Text>}
    </>
  );
};

export default GameGrid;
