import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Poem } from "@/utils/poem.type";

interface PoemCardProps {
  content: Poem[];
}

const PoemCard: React.FC<PoemCardProps> = ({ content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {content[0].poem_name}
        </Typography>
        <Typography color="textSecondary">{content[0].poet}</Typography>
        <br />
        {content.length > 0 &&
          content.map((line, index) => (
            <Typography variant="body2" component="p" key={index}>
              {line.line}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
};

export default PoemCard;
