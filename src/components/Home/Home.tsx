import React, { useEffect, useRef, useState } from "react";
import { Flex, Spinner, useTheme, View, Text, Link } from "vcc-ui";
import Image from "next/image";

import { SearchInput } from "../Generic/SearchInput";
import { Filters } from "../Generic/Filters";
import { CarObject } from "../../../types/data";
import genericSearch from "../../utils/genericSearch";
import genericFilter from "../../utils/genericFilter";
import CarouselDotsRender from "../Carousel/CarouselDotsRender";
import CarouselArrowsRender from "../Carousel/CarouselArrowsRender";
import useCars from "../../hooks/useCars";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const [elementScrolled, setElementScrolled] = useState<number>(0);
  const [elementWidth, setElementWidth] = useState<number>(500);
  const [cars, setCars] = useState<CarObject[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterQuery, setFilterQuery] = useState<string>("");

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    setElementScrolled(e.currentTarget?.scrollLeft);
    setElementWidth(
      e.currentTarget?.scrollWidth - e.currentTarget?.clientWidth
    );
  };

  const { data, status } = useCars();

  useEffect(() => {
    if (data) {
      setCars(
        data
          .filter((car) =>
            genericSearch(
              car,
              ["id", "bodyType", "modelName", "modelType"],
              searchQuery,
              false
            )
          )
          .filter((car) =>
            genericFilter(
              car,
              ["id", "bodyType", "modelName", "modelType"],
              filterQuery
            )
          )
      );
    }
  }, [data, filterQuery, searchQuery]);

  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        left: ref.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollToDiv = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const CarsFilters = () => {
    return (
      <>
        <SearchInput
          setSearchQuery={(searchQuery) => {
            setSearchQuery(searchQuery);
          }}
        />
        <div style={{ margin: "20px 0px" }}>
          <Filters
            setFilterQuery={(filterQuery) => {
              setFilterQuery(filterQuery);
            }}
            data={data || []}
          />
        </div>
      </>
    );
  };

  return (
    <View
      extend={{
        background: theme.color.background.secondary,
        color: theme.color.foreground.primary,
        marginTop: "20px",
      }}
    >
      {CarsFilters()}
      {status === "error" && <p>Something went wrong. Error fetching data</p>}
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <>
          <Flex
            extend={{
              flexFlow: "row nowrap",
              flexDirection: "row",
              overflow: "scroll",
            }}
            ref={ref}
            id={"ref"}
            onScroll={(e) => handleScroll(e)}
          >
            {cars?.map((car) => (
              <View
                key={car.id}
                id={car.id}
                extend={{
                  flex: "0 0 1",
                  untilL: {
                    width: "90%",
                  },
                  fromL: {
                    width: "25%",
                  },
                }}
              >
                <div aria-hidden="true" style={{ padding: "15px" }}>
                  <Text
                    variant="bates"
                    extend={{
                      color: theme.color.foreground.secondary,
                      fontWeight: "500 !important",
                    }}
                  >
                    {car.bodyType.toUpperCase()}
                  </Text>
                  <View direction={"row"}>
                    <Text
                      subStyle="emphasis"
                      extend={{
                        paddingRight: "10px",
                        color: theme.color.foreground.primary,
                      }}
                    >
                      {car.modelName}
                    </Text>
                    <Text extend={{ color: theme.color.foreground.secondary }}>
                      {car.modelType}
                    </Text>
                  </View>
                  <div style={{ marginTop: "10px" }}>
                    <Image
                      src={car.imageUrl}
                      alt={car.modelName}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="fill"
                    />
                  </div>
                  <Flex
                    extend={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      padding: "10px",
                    }}
                  >
                    <Link href={`/learn/${car.id}`} arrow="right">
                      Learn
                    </Link>
                    <Link href={`/shop/${car.id}`} arrow="right">
                      Shop
                    </Link>
                  </Flex>
                </div>
              </View>
            ))}
          </Flex>
          <CarouselArrowsRender
            elementScrolled={elementScrolled}
            elementWidth={elementWidth}
            length={cars.length}
            scroll={scroll}
          ></CarouselArrowsRender>
          <CarouselDotsRender
            elementScrolled={elementScrolled}
            elementWidth={elementWidth}
            cars={cars}
            scrollToDiv={scrollToDiv}
          ></CarouselDotsRender>
        </>
      )}
    </View>
  );
};

export default HomePage;
