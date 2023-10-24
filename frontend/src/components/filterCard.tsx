import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";

interface Author {
  name: string;
}

interface Year {
  year: string;
}

interface Poem {
  title: string;
}

const FilterCard = () => {
  const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);
  const [selectedYears, setSelectedYears] = useState<Year[]>([]);
  const [selectedPoems, setSelectedPoems] = useState<Poem[]>([]);

  const authors: Author[] = [
    { name: "William Shakespeare" },
    { name: "Emily Dickinson" },
    { name: "Langston Hughes" },
    { name: "Maya Angelou" },
    { name: "Robert Frost" },
  ];

  const years: Year[] = [
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
  ];

  const poems: Poem[] = [
    { title: "Sonnet 18" },
    { title: "Because I could not stop for Death" },
    { title: "I, Too" },
    { title: "Still I Rise" },
    { title: "The Road Not Taken" },
  ];

  const handleAuthorChange = (event: any, value: Author[]) =>
    setSelectedAuthors(value);

  const handleYearChange = (event: any, value: Year[]) =>
    setSelectedYears(value);

  const handlePoemChange = (event: any, value: Poem[]) =>
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

  const poemOptions = poems.filter(
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
