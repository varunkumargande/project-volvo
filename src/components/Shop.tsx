import React, { memo } from "react";
import { useTheme, View, Text } from "vcc-ui";
import { useRouter } from "next/router";
import useCars from "../hooks/useCars";
import genericFilter from "../utils/genericFilter";
import Image from "next/image";

const Shop = () => {
  const theme = useTheme();

  const router = useRouter();
  const { id } = router.query;

  const { data } = useCars();

  return (
    <View
      extend={{
        color: theme.color.foreground.primary,
        marginTop: "20px",
      }}
    >
      <h1>Shop Page</h1>
      <Text extend={{ color: theme.color.foreground.primary }}>{id}</Text>
      {data
        ?.filter((car) => genericFilter(car, ["id"], id as string))
        .map((car) => (
          <div key={"Shop" + car.id}>
            <Text extend={{ color: theme.color.foreground.primary }}>
              {car.bodyType}
            </Text>
            <Text extend={{ color: theme.color.foreground.primary }}>
              {car.modelName}
            </Text>
            <Text extend={{ color: theme.color.foreground.primary }}>
              {car.modelType}
            </Text>
            <div>
              <Image
                src={car.imageUrl}
                alt={car.modelName}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
        ))}
    </View>
  );
};

export default memo(Shop);
