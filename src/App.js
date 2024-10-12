import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Layout from "./Layout/index";
import HomeScreen from "./screens/HomeScreen";
import StudyScreen from "./screens/StudyScreen";
import CreateDeckScreen from "./screens/CreateDeckScreen";
import DeckScreen from "./screens/DeckScreen";
import EditDeckScreen from "./screens/EditDeckScreen";
import AddCardScreen from "./screens/AddCardScreen";
import EditCardScreen from "./screens/EditCardScreen";
import NotFound from "./Layout/NotFound";

function App() {
  const routes = useRoutes([
    { path: "/", element: <HomeScreen /> },
    { path: "/decks/new", element: <CreateDeckScreen /> },
    { path: "/decks/:deckId/study", element: <StudyScreen /> },
    { path: "/decks/:deckId", element: <DeckScreen /> },
    { path: "/decks/:deckId/edit", element: <EditDeckScreen /> },
    { path: "/decks/:deckId/cards/new", element: <AddCardScreen /> },
    { path: "/decks/:deckId/cards/:cardId/edit", element: <EditCardScreen /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <Layout>{routes}</Layout>;
}

export default App;
