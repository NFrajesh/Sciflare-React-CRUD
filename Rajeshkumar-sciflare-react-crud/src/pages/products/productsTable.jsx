import { PencilIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";
import { memo } from "react";
import Confirm from "../../modals/confirmationModal";

const ProductTable = memo(({ productsData, navigateToProductForm }) => {
  return productsData?.map((product, index) => (
    <tr className="bg-white" key={index}>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <span className="font-bold text-blue-500">{index + 1}</span>
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.productName}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.stockStatus === "true" ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            In Stock
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Out of Stock
          </span>
        )}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.productMRP}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.productPrice}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.productDiscount}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {product.emiOption}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {" "}
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
      </td>
    </tr>
  ));
});

export default ProductTable;
