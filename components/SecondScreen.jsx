import React from "react";
import TableParser from "./TableParser";

export default function SecondScreen() {
  const leftRef = React.createRef();
  const rightRef = React.createRef();

  const onLeftScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
    if (scrollUpdateWasRequested === false) {
      rightRef.current && rightRef.current.scrollTo(scrollOffset);
    }
  };

  const onRightScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
    if (scrollUpdateWasRequested === false) {
      leftRef.current && leftRef.current.scrollTo(scrollOffset);
    }
  };
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-4 relative">
      <TableParser
        tableParserRef={leftRef}
        tableParserScroll={onLeftScroll}
        styles={`w-full lg:w-1/2`}
      />
      <TableParser
        tableParserRef={rightRef}
        tableParserScroll={onRightScroll}
        styles={`w-full lg:w-1/2`}
      />
    </div>
  );
}
