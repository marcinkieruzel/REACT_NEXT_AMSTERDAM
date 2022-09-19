import React, { useEffect, useRef } from "react";

import $ from "jquery";

const style = {
  width: "100%",
  height: "100vh",
  backgroundColor: "red",
  position: "absolute"
};

const Useref: React.FC = (): JSX.Element => {
  const ref = useRef(null);
  const inputRef = useRef()

  useEffect(() => {
    if (ref.current) {

      console.log(ref.current)

      $(ref.current).animate(
        {
          left: "300px",
          top: "300px",
          backgroundColor: "pink",
        },
        5000,
        function () {
          // Animation complete.
        }
      );
    }
  }, []);

  return (
    <input />
  );
};

export default Useref;
