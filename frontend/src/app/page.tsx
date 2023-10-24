"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "@/components/navbar";

import SearchBar from "@/components/searchBar";
import FilterCard from "@/components/filterCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <div>
      <Navbar />

      <SearchBar
        handleInput={handleInput}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <Grid container>
        <Grid item xs={3}>
          <FilterCard />
        </Grid>
        <Grid item xs={9}>
          {/* Your content for the right side goes here */}
        </Grid>
      </Grid>
    </div>
  );
}
