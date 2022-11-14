import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Autocomplete } from ".";

export default {
  title: "Example/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const withOptions = Template.bind({});
withOptions.args = {
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
};

export const withoutOptions = Template.bind({});
withoutOptions.args = {
  options: [],
  disabled: true,
};
