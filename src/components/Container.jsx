import React from 'react';

const Container = ({ children, className }) => {
  return (
    <section
      className={`grid min-h-screen place-items-center bg-cover bg-center bg-no-repeat px-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
