import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { Author, PoemName, Year } from "@/utils/poem.type";

interface Props {
  selectedAuthors: Author[];
  selectedYears: Year[];
  selectedPoems: PoemName[];
  authors: Author[];
  years: Year[];
  poemNames: PoemName[];
  setSelectedAuthors: (value: Author[]) => void;
  setSelectedYears: (value: Year[]) => void;
  setSelectedPoems: (value: PoemName[]) => void;
}

const FilterCard: React.FC<Props> = ({
  selectedAuthors,
  selectedYears,
  selectedPoems,
  authors,
  years,
  poemNames,
  setSelectedAuthors,
  setSelectedPoems,
  setSelectedYears,
}) => {
  const handleAuthorChange = (event: any, value: Author[]) =>
    setSelectedAuthors(value);

  const handleYearChange = (event: any, value: Year[]) =>
    setSelectedYears(value);

  const handlePoemChange = (event: any, value: PoemName[]) =>
    setSelectedPoems(value);

  const handleFilterClick = () => {
    console.log("Selected Authors :", selectedAuthors);
    console.log("Selected Years :", selectedYears);
    console.log("Selected Poems :", selectedPoems);
  };

  const authorOptions = authors.filter(
    (author) =>
      !selectedAuthors.find((selected) => selected.name === author.name)
  );

  const yearOptions = years.filter(
    (year) => !selectedYears.find((selected) => selected.year === year.year)
  );

  const poemOptions = poemNames.filter(
    (poem) => !selectedPoems.find((selected) => selected.title === poem.title)
  );

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Filters
        </Typography>
        <hr />
        <Autocomplete
          multiple
          id="authors-filter"
          options={authorOptions}
          getOptionLabel={(option) => option.name}
          value={selectedAuthors}
          onChange={handleAuthorChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Authors"
              placeholder="Select authors"
            />
          )}
        />
        <br />
        <Autocomplete
          multiple
          id="years-filter"
          options={yearOptions}
          getOptionLabel={(option) => option.year}
          value={selectedYears}
          onChange={handleYearChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Years"
              placeholder="Select years"
            />
          )}
        />
        <br />
        <Autocomplete
          multiple
          id="poems-filter"
          options={poemOptions}
          getOptionLabel={(option) => option.title}
          value={selectedPoems}
          onChange={handlePoemChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Poems"
              placeholder="Select poems"
            />
          )}
        />
        <br />
        <Button variant="contained" onClick={handleFilterClick}>
          Filter
        </Button>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
