import React from "react";

const Container = ({ id, heading, children }) => {
  return (
    <div className="bg-white py-24 sm:py-32" id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {heading && (
          <div className="mx-auto lg:mx-0 pb-4 sm:pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Container;
