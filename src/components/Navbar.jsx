import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex-shrink-0">
              <h1 className="text-white dark:text-gray-200 font-bold text-xl">My DApp</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              type="button"
              className="bg-gray-800 dark:bg-gray-900 p-1 rounded-full text-gray-400 hover:text-white dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.66-6.66l-.71.71m-14.14 0l-.71-.71M21 12h-1M4 12H3m16.66-6.66l-.71.71m-14.14 0l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3C9.243 3 7 5.243 7 8c0 .374.032.742.093 1.104C4.01 10.086 2 13.186 2 17c0 4.418 3.582 8 8 8 4.814 0 7.914-2.01 7.896-5.093.362.061.73.093 1.104.093 2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.554 0-2.977.616-4.024 1.584A6.978 6.978 0 0012 3z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;