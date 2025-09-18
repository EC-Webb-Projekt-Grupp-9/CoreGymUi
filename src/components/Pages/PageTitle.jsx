import React, { useEffect } from "react";

const PageTitle = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} - CoreGym`;
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageTitle;
