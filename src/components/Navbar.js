import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utilities/helper";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Projects", href: "#projects", current: false },
  { name: "Career Progression", href: "#career", current: false },
  { name: "Contact", href: "#contact", current: false },
  // { name: "Testimonials", href: "#", current: false },
  // { name: "Blog", href: "#", current: false },
];

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 opacity-100">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href={`${process.env.PUBLIC_URL}`}>
                      <img
                        className="h-8 w-auto"
                        src={`${process.env.PUBLIC_URL}/logo512.png`}
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveSection(item.name)}
                          className={classNames(
                            activeSection === item.name
                              ? "bg-indigo-600 text-white"
                              : "text-gray-600 hover:bg-indigo-500 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-600 text-white"
                        : "text-gray-600 hover:bg-indigo-500 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
