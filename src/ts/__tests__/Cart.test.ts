import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('Testing add new movie', () => {
  const cart = new Cart();

  cart.add(new Movie(14865,"Avengers", "Мстители", 1000, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))

  expect(cart.items).toEqual(
    [
      Movie {
        id: 14865,
        name: 'Avengers',
        ruTitle: 'Мстители',
        price: 1000,
        releaseYear: 2012,
        country: 'USA',
        slogan: 'Avengers Assemble!',
        genres: [ 'Fantastic', 'Action', 'Adventure' ],
        duration: 137
      }
    ]
  )
});
