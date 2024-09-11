"use client";

import { InteractiveMap, LocalInfoCard } from "@/components";
import React, { useEffect, useState } from "react";
import AddLocalInfo from "../mobile/AddLocalInfo";

const LocalInfos = () => {
  const [parameter, setParameter] = useState("Général");
  const [toggleSortDropdown, setToggleSortDropdown] = useState(false);
  const [toggleTagDropdown, setToggleTagDropdown] = useState(false);

  // Close the dropdown when the user clicks outside of it or when clicking on another dropdown
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (toggleSortDropdown && !event.target.closest("#dropdownSort")) {
        setToggleSortDropdown(false);
      }
      if (toggleTagDropdown && !event.target.closest("#dropdownTag")) {
        setToggleTagDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleSortDropdown, toggleTagDropdown]);

  return (
    <div className="w-full">
      {/* Mobile - Add Video STARTS */}
      <AddLocalInfo isMobile={true} />
      {/* Mobile - Add Video ENDS */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Gestion des bacs
          </h1>
          <p className="text-gray-500 text-sm">
            Gestion des bacs reparties sur le territoire.
          </p>
        </div>
        <AddLocalInfo isMobile={false} />
      </div>

      <div className="w-full mt-8 flex lg:flex-row flex-col justify-between gap-4 items-center">
        <div className="flex gap-2 p-1 bg-gray-200 rounded-lg shadow">
          <button
            data-dropdown-toggle="dropdown"
            className={`text-gray-900 ${
              parameter === "Général" ? "bg-white" : "hover:bg-gray-100"
            } focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`}
            type="button"
            onClick={() => setParameter("Général")}
          >
            Vue générale
          </button>
          <button
            data-dropdown-toggle="dropdown"
            className={`text-gray-900  ${
              parameter === "Tracking" ? "bg-white" : "hover:bg-gray-100"
            } focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center`}
            type="button"
            onClick={() => setParameter("Tracking")}
          >
            Carte interactive
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="block w-[250px] px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Rechercher..."
          />
        </div>
      </div>

      {parameter === "Général" ? (
        <div className="mt-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    N° de Référence
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Libellé
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Localisation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Statut
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr className="odd:bg-white even:bg-gray-50 border-b" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Bac N°{452983 + index}
                    </th>
                    <td className="px-6 py-4">BacXXXXXX</td>
                    <td className="px-6 py-4">24 Avenue Leclerc</td>
                    <td className="px-6 py-4">Normal</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <a href="#" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"/></svg>
                        </a>
                        <a href="#" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8zm6.78 1a.7.7 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38z"/></svg>
                        </a>
                        <a href="#" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </a>
                        <a href="#" className="text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m-7.86-1.75L8.85 19l.29-.74C10.43 15.06 13.5 13 17 13c1.05 0 2.06.21 3 .56V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4.5c-.55-.66-1-1.42-1.36-2.25M13 3.5L18.5 9H13z"/></svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav
            aria-label="Page navigation example"
            className="flex justify-center mt-8"
          >
            <ul className="inline-flex -space-x-px text-base h-10">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 text-sm bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 text-sm bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <InteractiveMap />
      )}
    </div>
  );
};

export default LocalInfos;
