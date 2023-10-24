import React from "react";
import PoemCard from "./poemCard";
import { Grid } from "@mui/material";

interface Poem {
  title: string;
  author: string;
  content: string;
}

interface Props {
  poems: Poem[];
}

const PoemsCardContainer: React.FC<Props> = ({ poems }) => {
  return (
    <Grid container spacing={2}>
      {poems.map((poem, index) => (
        <Grid item xs={12} key={index}>
          <PoemCard
            title={poem.title}
            author={poem.author}
            content={poem.content}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PoemsCardContainer;
