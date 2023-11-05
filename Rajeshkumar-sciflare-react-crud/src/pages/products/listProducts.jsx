import { PlusIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useQueryProductsData } from "./apis/useProductsData";
import ProductsCard from "./productsCard";
import ProductTable from "./productsTable";

const ListProducts = () => {
  const { isLoading, data: productsData = [] } = useQueryProductsData();
  const navigate = useNavigate();

  const navigateToProductForm = useCallback((type) => {
    navigate(`/product/${type}`);
  }, []);

  return (
    <>
      <div className="p-5 h-screen bg-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium text-center my-8 font-roboto">
            Product List
          </h2>
          <div>
            <button
              type="button"
              onClick={() => navigateToProductForm("add")}
              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            >
              <PlusIcon className="h-5 w-5 inline" /> Add Product
            </button>
          </div>
        </div>
        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  SI.No
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Product Name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Stock Status
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  MRP(INR)
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Price(INR)
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Discount %
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  EMI Options
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(() => {
                if (isLoading) {
                  return (
                    <tr>
                      <td colSpan={8}>
                        <div className="flex justify-center items-center min-h-200">
                          <ScaleLoader color="blue" />
                        </div>
                      </td>
                    </tr>
                  );
                } else if (!productsData.length) {
                  return (
                    <tr>
                      <td colSpan={8}>
                        <div className="flex justify-center items-center min-h-200">
                          No Products Found
                        </div>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <ProductTable
                      productsData={productsData}
                      navigateToProductForm={navigateToProductForm}
                    />
                  );
                }
              })()}
            </tbody>
          </table>
        </div>
        {(() => {
          if (isLoading) {
            return (
              <div className="flex justify-center items-center  md:hidden lg:hidden min-h-200">
                <ScaleLoader color="blue" />
              </div>
            );
          } else if (!productsData.length) {
            return (
              <div className="flex justify-center md:hidden lg:hidden  items-center min-h-200">
                No Products Found
              </div>
            );
          } else {
            return (
              <ProductsCard
                productsData={productsData}
                navigateToProductForm={navigateToProductForm}
              />
            );
          }
        })()}
      </div>
    </>
  );
};
export default ListProducts;
