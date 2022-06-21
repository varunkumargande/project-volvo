import { useQuery } from "react-query";

import api from "../../services/api";

export default function useCars(teammate: string = "") {
  const { data, status } = useQuery(
    ["GET /api/cars.json", "cars"],
    () => api("GET /api/cars.json", {}),
    {
      select: (data) => data.data,
    }
  );

  return {
    data,
    status,
  };
}
