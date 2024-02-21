import React from "react";
import RestaurantCard from "../RestaurantCard";
import { screen, render, waitFor } from "@testing-library/react";
import mockdata from "../MockData/mockdata.json";
import "@testing-library/jest-dom";

test("should render restaurant card with props data", async () => {
  render(<RestaurantCard resDa={mockdata} />);
  const restaurantNameElement = screen.getByText(mockdata.info.name);
  expect(restaurantNameElement).toBeInTheDocument();
});
