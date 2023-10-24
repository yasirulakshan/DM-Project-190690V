import React from "react";
import PoemCard from "./poemCard";
import { Grid } from "@mui/material";
import { Poem } from "@/utils/poem.type";

interface Props {
  poems: Poem[][];
}

const PoemsCardContainer: React.FC<Props> = ({ poems }) => {
  console.log(poems);
  return (
    <Grid container spacing={2} marginLeft={5} paddingRight={8}>
      {poems.map((poem, index) => (
        <Grid item xs={6} key={index}>
          <PoemCard content={poem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PoemsCardContainer;
