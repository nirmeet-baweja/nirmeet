/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../utilities/helper";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="flex flex-col md:flex-row">
              <div className="w-full">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="block w-full rounded-l-lg border-0 px-4.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-ellipsis overflow-hidden"
                >
                  <option value="358">{`Aland Islands +358`}</option>
                  <option value="355">{`Albania +355`}</option>
                  <option value="376">{`Andorra +376`}</option>
                  <option value="43">{`Austria +43`}</option>
                  <option value="375">{`Belarus +375`}</option>
                  <option value="32">{`Belgium +32`}</option>
                  <option value="387">{`Bosnia and Herzegovina +387`}</option>
                  <option value="359">{`Bulgaria +359`}</option>
                  <option value="385">{`Croatia +385`}</option>
                  <option value="420">{`Czech Republic +420`}</option>
                  <option value="45">{`Denmark +45`}</option>
                  <option value="372">{`Estonia +372`}</option>
                  <option value="298">{`Faroe Islands +298`}</option>
                  <option value="358">{`Finland +358`}</option>
                  <option value="33">{`France +33`}</option>
                  <option value="49">{`Germany +49`}</option>
                  <option value="350">{`Gibraltar +350`}</option>
                  <option value="30">{`Greece +30`}</option>
                  <option value="44">{`Guernsey +44`}</option>
                  <option value="39">{`Holy See (Vatican City State) +39`}</option>
                  <option value="36">{`Hungary +36`}</option>
                  <option value="354">{`Iceland +354`}</option>
                  <option value="353">{`Ireland +353`}</option>
                  <option value="44">{`Isle of Man +44`}</option>
                  <option value="39">{`Italy +39`}</option>
                  <option value="44">{`Jersey +44`}</option>
                  <option value="383">{`Kosovo +383`}</option>
                  <option value="371">{`Latvia +371`}</option>
                  <option value="423">{`Liechtenstein +423`}</option>
                  <option value="370">{`Lithuania +370`}</option>
                  <option value="352">{`Luxembourg +352`}</option>
                  <option value="389">
                    {`Macedonia, the Former Yugoslav Republic of +389`}
                  </option>
                  <option value="356">{`Malta +356`}</option>
                  <option value="373">{`Moldova, Republic of +373`}</option>
                  <option value="377">{`Monaco +377`}</option>
                  <option value="382">{`Montenegro +382`}</option>
                  <option value="31">{`Netherlands +31`}</option>
                  <option value="47">{`Norway +47`}</option>
                  <option value="48">{`Poland +48`}</option>
                  <option value="351">{`Portugal +351`}</option>
                  <option value="40">{`Romania +40`}</option>
                  <option value="378">{`San Marino +378`}</option>
                  <option value="381">{`Serbia +381`}</option>
                  <option value="381">{`Serbia and Montenegro +381`}</option>
                  <option value="421">{`Slovakia +421`}</option>
                  <option value="386">{`Slovenia +386`}</option>
                  <option value="34">{`Spain +34`}</option>
                  <option value="47">{`Svalbard and Jan Mayen +47`}</option>
                  <option value="46">{`Sweden +46`}</option>
                  <option value="41">{`Switzerland +41`}</option>
                  <option value="380">{`Ukraine +380`}</option>
                  <option value="44" selected>{`United Kingdom +44`}</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-r-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              {`By selecting this, you agree to our `}
              <a
                href="#privacy-policy"
                className="font-semibold text-indigo-600"
              >
                {`privacy policy`}
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
