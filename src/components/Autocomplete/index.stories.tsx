import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from ".";

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const WithOptions: Story = {
  args: {
    name: "Autocomplete",
    label: "Autocomplete",
    options: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
      },
      {
        name: "Luminara Unduli",
        height: "170",
        mass: "56.2",
        hair_color: "black",
        skin_color: "yellow",
        eye_color: "blue",
        birth_year: "58BBY",
        gender: "female",
        films: [
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      },
    ],
  },
};

export const WithoutOptions: Story = {
  args: {
    options: [],
    disabled: true,
  },
};
