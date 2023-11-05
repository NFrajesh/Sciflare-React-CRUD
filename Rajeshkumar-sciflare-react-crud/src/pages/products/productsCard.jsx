import { PencilIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";
import { memo } from "react";
import Confirm from "../../modals/confirmationModal";

const ProductsCard = memo(({ productsData, navigateToProductForm }) => {
  return productsData?.map((product, index) => (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mb-3"
      key={index}
    >
      <div className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <span className="text-blue-500 font-bold">
              <span className="text-gray-500 font-bold">SI.No</span> {index + 1}
            </span>
          </div>
          <div className="text-black font-bold">
            <span className="text-gray-500 font-bold">MRP(INR)</span>&nbsp;
            {product.productMRP}
          </div>
          <div>
            {product.stockStatus === "true" ? (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                In Stock
              </span>
            ) : (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Out of Stock
              </span>
            )}
          </div>
        </div>
        <div className="text-sm font-medium text-black">
          <span className="text-gray-500 font-bold">Product Name</span>&nbsp;
          {product.productName}
        </div>
        <div className="text-black font-medium">
          <span className="text-gray-500">Price(INR)</span>&nbsp;
          {product.productPrice}
        </div>
        <div className="text-sm font-medium text-black">
          <span className="text-gray-500">Discount %</span>&nbsp;
          {product.productDiscount}
        </div>
        <div className="text-sm font-medium text-black">
          {product.emiOption}
        </div>
        <div className="text-sm font-medium text-black">
          <div className="flex justify-between">
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-900"
              onClick={() => navigateToProductForm(`edit/${product._id}`)}
            >
              <Tooltip title="Edit" placement="top" arrow>
                <PencilIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
              </Tooltip>
            </a>
            <Confirm data={product} />
          </div>
        </div>
      </div>
    </div>
  ));
});
export default ProductsCard;
