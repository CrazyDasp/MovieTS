import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('Testing add new movie', () => {
  const cart = new Cart();

  const avengers = new Movie("Avengers", "Мстители", 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137)

  cart.add(avengers);

  expect(cart.items).toEqual({[
      Movie {
        enTitle: 'Avengers',
        ruTitle: 'Мстители',
        releaseYear: 2012,
        country: 'USA',
        slogan: 'Avengers Assemble!',
        genres: [ 'Fantastic', 'Action', 'Adventure' ],
        duration: 137
      }]
  });
});
