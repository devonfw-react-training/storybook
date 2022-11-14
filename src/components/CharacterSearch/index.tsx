import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { getSearch } from "../../api/starwars";
import { IStarWars } from "../../interface/starWars";
import { Autocomplete } from "../Autocomplete";
import { CharacterSheet } from "../CharacterSheet";

export const CharacterSearch = () => {
  const [starWars, setStarWars] = useState<IStarWars[]>([]);

  const search = async <T extends string | React.ChangeEvent<any>>(
    event: T
  ) => {
    const value = typeof event === "string" ? event : event?.target?.value;
    if (value) {
      setStarWars(await getSearch(value));
    } else {
      setStarWars([]);
    }
  };

  return (
    <>
      <Form className="mb-4">
        <Form.Group>
          <Autocomplete
            name="Search for a character..."
            label="Search for a character..."
            options={starWars}
            onChange={search}
          />
        </Form.Group>
      </Form>
      <Container>
        {starWars.map((starWar) => (
          <CharacterSheet starWars={starWar} key={starWar.name} />
        ))}
      </Container>
    </>
  );
};
