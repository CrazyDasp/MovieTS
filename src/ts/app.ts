import Cart from './service/Cart';
import Movie from './domain/Movie';


const cart = new Cart();
console.log(cart.items);

cart.add(new Movie("Avengers", "Мстители", 2012, "USA", "Avengers Assemble!", ["Fantastic", "Action", "Adventure"], 137));

console.log(cart.items);
