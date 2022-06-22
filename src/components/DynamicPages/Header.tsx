import React, { memo } from "react";
import { Flex, Link, Nav, NavItem } from "vcc-ui";

const Header = (props: { id: string; isActive: string }) => {
  const currentActive = props.isActive === "learn" ? "Learn" : "Shop";
  return (
    <div
      style={{
        marginBottom: "10px",
      }}
    >
      <Nav>
        <Flex
          extend={{
            fromL: {
              flexDirection: "row",
            },
          }}
        >
          <NavItem
            style={{
              padding: "0",
            }}
          >
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem
            style={{
              padding: "0",
            }}
            isActive
          >
            {currentActive.toUpperCase()}
          </NavItem>
          <NavItem
            style={{
              padding: "0",
            }}
          >
            <Link
              href={`/${currentActive === "Learn" ? "shop" : "learn"}/${
                props.id
              }`}
            >
              <a>{currentActive === "Learn" ? "Shop" : "Learn"}</a>
            </Link>
          </NavItem>
        </Flex>
      </Nav>
    </div>
  );
};

export default memo(Header);
