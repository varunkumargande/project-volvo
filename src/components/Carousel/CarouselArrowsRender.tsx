import React from "react";
import { Click, Flex } from "vcc-ui";
import Image from "next/image";
import chevronCircled from "../../../docs/chevron-circled.svg";

const CarouselArrowsRender = (props: {
  length: number;
  elementScrolled: number;
  scroll: (arg0: number) => void;
  elementWidth: number;
}) => (
  <Flex
    className="scroll-arrows"
    extend={{
      flexDirection: "row",
      justifyContent: "right",
      untilL: {
        display: "none",
      },
      display: props.length <= 4 ? "none" : "flex",
    }}
  >
    <Click
      extend={{
        display: props.elementScrolled === 0 ? "none" : "inline-flex",
        padding: "4px",
        transform: "rotate(180deg)",
        transition: "all 0.2s ease-in-out 0s",
        ":hover": {
          transform: "rotate(182deg) scale(1.1)",
        },
      }}
      onClick={(e) => {
        e.preventDefault();
        props.scroll(-300);
      }}
    >
      <Image
        src={chevronCircled}
        alt={"Scroll Left"}
        width={25}
        height={25}
        layout="fixed"
        objectFit="cover"
      />
    </Click>
    <Click
      extend={{
        display:
          props.elementScrolled >= props.elementWidth ? "none" : "inline-flex",
        padding: "4px",
        transition: "all 0.2s ease-in-out 0s",
        ":hover": {
          transform: "rotate(2deg) scale(1.1)",
        },
      }}
      onClick={(e) => {
        e.preventDefault();
        props.scroll(300);
      }}
    >
      <Image
        src={chevronCircled}
        alt={"Scroll Right"}
        width={25}
        height={25}
        layout="fixed"
        objectFit="cover"
      />
    </Click>
  </Flex>
);

export default CarouselArrowsRender;
