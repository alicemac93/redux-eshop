import './App.css';
import SearchBar from './components/SearchBar';
import Products from './components/ProductsList';
import Cart from './features/Cart/Cart';

function App({ state, dispatch }) {
  return (
    <div className="App">
      <SearchBar />
      <Products
        products={state.allProducts}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        dispatch={dispatch} />
    </div>
  );
}

export default App;
