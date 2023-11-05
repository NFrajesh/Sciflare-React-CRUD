import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
    useMutateProductsData,
    useQueryProductData,
    useUpdateProductsData,
} from "./apis/useProductsData";

export default function ProductForm() {
  const { action, id } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
  });

  function onSuccess() {
    reset();
    handleBackToPrevious();
  }

  function handleBackToPrevious() {
    navigate("/products");
  }

  const { isError, error, data: productData = {} } = useQueryProductData(id);
  const { mutate: mutateAdd, isPending: isPendingAdd } = useMutateProductsData({
    onSuccess,
  });
  const { mutate: mutateUpdate, isPending: isPendingUpdate } =
    useUpdateProductsData({ onSuccess });
  const isPending = isPendingAdd || isPendingUpdate;

  useEffect(() => {
    if (Object.keys(productData).length) {
      reset({ ...productData });
    }
  }, [productData]);

  const ErrorComp = ({ name, ...props }) => {
    return errors[name] ? (
      <p className="text-red-500" {...props}>
        {errors[name].message}
      </p>
    ) : (
      <></>
    );
  };

  function handleSubmitForm(data) {
    if (action === "add") {
      mutateAdd(data);
    } else if (action === "edit") {
      mutateUpdate(data);
    }
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-medium text-center my-4 font-roboto capitalize">
          {action} Product
        </h2>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all  max-w-6xl w-full md:w-2/4 lg:w-2/4  sm:max-w-l">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue={productData.productName}
                  {...register("productName", {
                    required: "* Product name is required",
                  })}
                  id="productName"
                  name="productName"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                />
                <ErrorComp name="productName" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productMRP"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product MRP
                </label>
                <input
                  type="number"
                  defaultValue={productData.productMRP}
                  {...register("productMRP", {
                    required: "* Product MRP is required",
                  })}
                  id="productMRP"
                  name="productMRP"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                />
                <ErrorComp name="productMRP" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productPrice"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product Price
                </label>
                <input
                  type="number"
                  defaultValue={productData.productPrice}
                  {...register("productPrice", {
                    required: "* Product price is required",
                  })}
                  id="productPrice"
                  name="productPrice"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                />
                <ErrorComp name="productPrice" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productDiscount"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product Discount
                </label>
                <input
                  type="number"
                  defaultValue={productData.productDiscount}
                  {...register("productDiscount", {
                    required: "* Product discount is required",
                  })}
                  id="productDiscount"
                  name="productDiscount"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                />
                <ErrorComp name="productDiscount" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emiOption"
                  className="block text-gray-700 font-medium mb-2"
                >
                  EMI Option
                </label>
                <select
                  id="emiOption"
                  {...register("emiOption", {
                    required: "* Emi option is required",
                  })}
                  defaultValue={productData.emiOption}
                  name="emiOption"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                >
                  <option value="" hidden selected>
                    Select an option
                  </option>
                  {["No EMI option available", "EMI available"].map(
                    (option) => (
                      <option
                        key={option}
                        selected={option === productData.emiOption}
                        value={option}
                      >
                        {option}
                      </option>
                    )
                  )}
                </select>
                <ErrorComp name="emiOption" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stockStatus"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Stock Status
                </label>
                <select
                  id="stockStatus"
                  {...register("stockStatus", {
                    required: "* Stock status is required",
                  })}
                  defaultValue={productData.stockStatus}
                  name="stockStatus"
                  className="border border-gray-400 rounded-lg py-2 px-4 w-full"
                >
                  <option hidden selected value="">
                    Select Stock Status
                  </option>
                  <option selected={!!productData.stockStatus} value={true}>
                    In Stock
                  </option>
                  <option selected={!!productData.stockStatus} value={false}>
                    Out of Stock
                  </option>
                </select>
                <ErrorComp name="stockStatus" />
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <button
                type="button"
                onClick={() => handleBackToPrevious()}
                className="bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4 mr-4"
              >
                Cancel
              </button>
              <button
                disabled={isPending}
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4"
              >
                {isPending ? (
                  "loading..."
                ) : (
                  <>{id ? "Update" : "Add"} Product</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
