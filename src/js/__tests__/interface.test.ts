import Cart from '../cart';
import Movie from '../demo';
import Buyable from '../interface';
import Book from '../book';

test ('testing cart-adding and Sum-counting', () => {
    const cart = new Cart();
    const movie = new Movie(25, 'Мстители', 2012, 'США', 'Slogan', 'фантастика, боевик, фентези', 137, 45);
    const book = new Book(125, 'Love', 1958, 'Chris M.', 'roman', 456, 25);
    cart.add(movie);
    cart.add(book);
    const totalPrice = cart.getSum(cart.items);
    expect(totalPrice).toBe(70);

})

test ('testing discount', () => {
    const cart = new Cart();
    const movie = new Movie(25, 'Мстители', 2012, 'США', 'Slogan', 'фантастика, боевик, фентези', 137, 45);
    const book = new Book(125, 'Love', 1958, 'Chris M.', 'roman', 456, 25);
    cart.add(movie);
    cart.add(book);
    const totalDiscountPrice = cart.getDiscount(cart.discount);
    expect(totalDiscountPrice).toBe(52.5);

})

test ('deletion of item', () => {
    const cart = new Cart();
    const movie = new Movie(25, 'Мстители', 2012, 'США', 'Slogan', 'фантастика, боевик, фентези', 137, 45);
    const book = new Book(125, 'Love', 1958, 'Chris M.', 'roman', 456, 25);
    cart.add(movie);
    cart.add(book);
    cart.deleteItem(125)
    expect(cart.items.length).toBe(1);

})



