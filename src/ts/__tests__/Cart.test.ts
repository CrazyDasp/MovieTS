import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('Testing add new movie', () => {
  const cart = new Cart();

  cart.add(new Movie(14865,"Avengers", "Мстители", 1000, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))

  expect(cart.items).toEqual([{
        id: 14865,
        name: 'Avengers',
        ruTitle: 'Мстители',
        price: 1000,
        releaseYear: 2012,
        country: 'USA',
        slogan: 'Avengers Assemble!',
        genres: [ 'Fantastic', 'Action', 'Adventure' ],
        duration: 137
      }]
  )
})


test("Testing total price of 4 position", () => {
  const cart = new Cart();

  cart.add(new Movie(14865,"Avengers", "Мстители", 1000, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14866,"Avengers", "Мстители", 1250, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14867,"Avengers", "Мстители", 1500, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14868,"Avengers", "Мстители", 1750, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))

  expect(cart.totalPrice()).toBe(5500)
})

test("Testing total price of 4 position with discount 20%", () => {
  const cart = new Cart();

  cart.add(new Movie(14865,"Avengers", "Мстители", 1000, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14866,"Avengers", "Мстители", 1250, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14867,"Avengers", "Мстители", 1500, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14868,"Avengers", "Мстители", 1750, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))

  let discount = 20

  expect(cart.totalPriceWithDisc(discount)).toBe(4400)
})

test("Testing delete position from cart by id", () => {
  const cart = new Cart();

  cart.add(new Movie(14865,"Avengers", "Мстители", 1000, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14866,"Avengers", "Мстители", 1250, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14867,"Avengers", "Мстители", 1500, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))
  cart.add(new Movie(14868,"Avengers", "Мстители", 1750, 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137))

  cart.delete(14867)

  expect(cart.items.length).toBe(3)
})

