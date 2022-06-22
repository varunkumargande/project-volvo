import * as React from "react";
import { useEffect, useState } from "react";
import { SelectInput } from "vcc-ui";
import { CarObject } from "../../../types/data";

export interface IFiltersProps {
  setFilterQuery: (searchQuery: string) => void;
  data: CarObject[];
}

export const Filters = (props: IFiltersProps) => {
  const { setFilterQuery } = props;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setFilterQuery(query);
  }, [query, setFilterQuery]);

  return (
    <>
      <label htmlFor="filter" style={{ marginTop: "10px" }}>
        Filter! Try me! &emsp;
      </label>
      <select
        name="filter"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value="">Select</option>
        {props.data.map((item) => (
          <option key={item.modelName + item.id} value={item.id}>
            {item.modelName}
          </option>
        ))}
      </select>
    </>
  );
};
