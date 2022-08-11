import Header from "./components/Header";
import ProductListing from "./components/ProductListing"
import ProductDetail from "./components/ProductDetail"
import {BrowserRouter , Route ,Routes , Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
   
       <BrowserRouter>
       <Header/>
    <Routes>
    <Route path='/' exact element={<ProductListing/>}/>
    <Route path='/product/:productId'  exact element={<ProductDetail/>}/>
    <Route>404 NOT FOUND! </Route>
    
   
    
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
