import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/loading";

const ProductForm = lazy(() => import("./pages/products/productForm"));
const PrivateRoute = lazy(() => import("./components/privateRoute"));
const MainLayout = lazy(() => import("./layout/mainLayout"));
const Products = lazy(() => import("./pages/products"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/products" element={<Products />} />
                <Route path="/product/:action/:id?" element={<ProductForm />} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
