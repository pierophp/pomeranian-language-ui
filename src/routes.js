import Home from './pages/Home';
import Decks from './pages/Decks';
import Deck from './pages/Deck';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/decks',
    name: 'decks',
    component: Decks,
  },
  {
    path: '/deck/:id',
    name: 'deck',
    component: Deck,
  },
];
