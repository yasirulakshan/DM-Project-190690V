import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface PoemCardProps {
  title: string;
  author: string;
  content: string;
}

const PoemCard: React.FC<PoemCardProps> = ({ title, author, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{author}</Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PoemCard;
