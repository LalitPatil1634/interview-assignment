import React from "react";
import Header from "./Header";

const AdminPanel = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
      <Header />
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-xl font-medium text-gray-500 truncate flex justify-between items-center">
              <span>Manage item master</span>
              <span>ADMINISTRATOR</span>
            </div>
            <hr />
            <div className="mb-2 py-4 flex justify-between items-center">
              <div>
                <span className="border rounded-lg p-2 mr-2">Excel</span>
                <span className="border rounded-lg p-2">PDF</span>
              </div>
              <div>
                <button className="bg-blue-900 border rounded-xl p-1 text-white mr-2">
                  Import Collection
                </button>
                <button className="bg-blue-900 border rounded-xl text-white p-1">
                  Sample Download Collection
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 py-7">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    collection
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Series
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Design Name
                  </th>
                </tr>
              </thead>
            </table>
            <div className="relative mb-2 py-4 flex justify-between items-center">
              <button className="bg-blue-900 border rounded-sm w-24 h-8 text-white p-1 mt-3">
                + Add
              </button>

              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="h-10 border px-5 pr-10 rounded-lg text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-10 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                      <th className="py-3 px-6 text-left">S No</th>
                      <th className="py-3 px-6 text-left">Collection ID</th>
                      <th className="py-3 px-6 text-center">Collectio</th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Created Date</th>
                      <th className="py-3 px-6 text-center">Created By</th>
                      <th className="py-3 px-6 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        1
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        C001
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Active
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        <svg
                          className="ml-6"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="tabler:edit">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M5.5 6.3335H4.66667C4.22464 6.3335 3.80072 6.50909 3.48816 6.82165C3.17559 7.13421 3 7.55814 3 8.00016V15.5002C3 15.9422 3.17559 16.3661 3.48816 16.6787C3.80072 16.9912 4.22464 17.1668 4.66667 17.1668H12.1667C12.6087 17.1668 13.0326 16.9912 13.3452 16.6787C13.6577 16.3661 13.8333 15.9422 13.8333 15.5002V14.6668"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M12.9998 4.66676L15.4998 7.16676M16.654 5.98759C16.9822 5.65938 17.1666 5.21424 17.1666 4.75009C17.1666 4.28594 16.9822 3.84079 16.654 3.51259C16.3258 3.18438 15.8807 3 15.4165 3C14.9524 3 14.5072 3.18438 14.179 3.51259L7.1665 10.5001V13.0001H9.6665L16.654 5.98759Z"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </g>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        2
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        C002
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Active
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        Lorem ipsum dolor
                      </td>
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                        <svg
                          className="ml-6"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="tabler:edit">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M5.5 6.3335H4.66667C4.22464 6.3335 3.80072 6.50909 3.48816 6.82165C3.17559 7.13421 3 7.55814 3 8.00016V15.5002C3 15.9422 3.17559 16.3661 3.48816 16.6787C3.80072 16.9912 4.22464 17.1668 4.66667 17.1668H12.1667C12.6087 17.1668 13.0326 16.9912 13.3452 16.6787C13.6577 16.3661 13.8333 15.9422 13.8333 15.5002V14.6668"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M12.9998 4.66676L15.4998 7.16676M16.654 5.98759C16.9822 5.65938 17.1666 5.21424 17.1666 4.75009C17.1666 4.28594 16.9822 3.84079 16.654 3.51259C16.3258 3.18438 15.8807 3 15.4165 3C14.9524 3 14.5072 3.18438 14.179 3.51259L7.1665 10.5001V13.0001H9.6665L16.654 5.98759Z"
                                stroke="blue"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </g>
                        </svg>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
