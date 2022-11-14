import { IStarWars } from "../../interface/starWars";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

interface IProps {
  starWars: IStarWars;
}
export const CharacterSheet = ({ starWars }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>Character name {starWars.name}</TableRow>
          <TableRow>
            <TableCell>Height</TableCell>
            <TableCell>Mass</TableCell>
            <TableCell>Hair color</TableCell>
            <TableCell>Skin color</TableCell>
            <TableCell>Eye color</TableCell>
            <TableCell>Birth year</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>{starWars.height}</TableCell>
            <TableCell>{starWars.mass}</TableCell>
            <TableCell>{starWars.hair_color}</TableCell>
            <TableCell>{starWars.skin_color}</TableCell>
            <TableCell>{starWars.eye_color}</TableCell>
            <TableCell>{starWars.birth_year}</TableCell>
            <TableCell>{starWars.gender}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
