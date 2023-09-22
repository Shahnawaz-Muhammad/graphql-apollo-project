import PropTypes from "prop-types";
import { useState } from "react";

const AddProduct = ({ setShowModal }) => {
  const [productImage, setProductImage] = useState(null);

  // const handleProductNameChange = (e) => {
  //   setProductName(e.target.value);
  // };

  // const handleProductDescriptionChange = (e) => {
  //   setProductDescription(e.target.value);
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImage(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen z-10 bg-transparent backdrop-blur-sm"></div>
      <div className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
        <div className="relative w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Add New Product
              </h3>
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="product_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product Name
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="price"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Price
                    </label>
                  </div>
                  <div className=" z-0 w-full mb-6 group">
                    <select
                      id="countries"
                      className=" border  text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                    >
                      <option>Select Category</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <textarea
                    //   type="text-area"
                    name="product_description"
                    rows="3"
                    id="product_description"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="product_description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product Description
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 border group flex">
                  <div className="flex justify-between p-3 ">
                    <div className="w-2/3 flex flex-col">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="productImage"
                      >
                        Product Image
                      </label>
                      <input
                        className="appearance-none  py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 border border-gray-200"
                        id="productImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                    {productImage && (
                      <div className="w-1/2 max-w-full h-20 flex justify-center">
                        <img
                          className=" max-w-full max-h-full"
                          src={productImage}
                          alt="Product"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full flex justify-end gap-4">
                  <button
                    type="submit"
                    className="text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddProduct.propTypes = {
  // showModal: PropTypes.boolean.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default AddProduct;
