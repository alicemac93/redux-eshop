import './App.css';
import SearchBar from './components/SearchBar';
import Products from './components/ProductsList';
import Cart from './components/Cart';

function App({ state, dispatch }) {
  console.log(state)
  return (
    <div className="App">
      <SearchBar />
      <Products
        products={state.allProducts}
        dispatch={dispatch}
      />
      <Cart
        products={state}
        dispatch={dispatch} />
    </div>
  );
}

export default App;
