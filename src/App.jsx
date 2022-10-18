    import { Routes, Route } from "react-router-dom";
    import Home from "./views/Home";
    import Search from "./views/Search";
    import Navbar from "./containers/Navbar";
    import Footer from "./containers/Footer"
    import Products from "./views/Products";
    import Product from "./views/Product";
    import Error404 from "./views/Error404";
    import Category from "./views/Category";
    import Cart from "./views/Cart";
    import LoginPage  from "./views/LoginPage";
    import RegisterPage from "./views/RegisterPage";
const App = () => {
    return (
        <>
                
                <Navbar />
                    <div className="xl:px-20 lg:px-12  md:px-8  sm:px-4 mx-auto font-sans bg-slate-50">
                        <Routes>
                            <Route exact path="*" element={<Error404 />} />
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/search" element={<Search />} />
                            <Route exact path="/products" element={<Products />} />
                            <Route exact path="/products/:id" element={<Product />} />
                            <Route exact path="/category/:categoryId" element={<Category />} />
                            <Route exact path="/cart" element={<Cart />} />
                            <Route exact path="/login" element={<LoginPage/>} />
                            <Route exact path="/register" element={<RegisterPage/>} />
                        </Routes>
                    </div>
                <Footer />
        </>
    );
};

    export default App;
