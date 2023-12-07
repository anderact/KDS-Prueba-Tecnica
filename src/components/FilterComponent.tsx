import React, { useState } from "react";
import styled from "styled-components";

interface FilterProps {
  onChange: (selectedStatus: string) => void;
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1.5rem 6rem 1.5rem 6rem;
  box-shadow: 0px 0.5rem 1rem rgba(177, 177, 177, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-right: 0.5rem;
`;

const FilterSelect = styled.select<{ value: string }>`
  width: 8rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: black;
  background-color: white;
  border: 1px solid
    ${(props) =>
      props.value === ""
        ? "black"
        : getBorderColor(props.value)};
  border-radius: 5%;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const getBorderColor = (status: string) => {
  switch (status) {
    case "En atencion":
      return "#c7bd39";
    case "Completado":
      return "#66c74c";
    case "Cancelado":
      return "#d15b5b";
    default:
      return "black";
  }
};

export default function FilterComponent({ onChange }: FilterProps) {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    onChange(newStatus);
  };
  return (
    <FilterContainer>
      <Title>Kitchen Display System</Title>
      <FilterWrapper>
        <FilterLabel></FilterLabel>
        <FilterSelect value={selectedStatus} onChange={handleStatusChange}>
          <option value="">Todos</option>
          <option value="En atencion">En atencion</option>
          <option value="Completado">Completado</option>
          <option value="Cancelado">Cancelado</option>
        </FilterSelect>
      </FilterWrapper>
    </FilterContainer>
  );
}
