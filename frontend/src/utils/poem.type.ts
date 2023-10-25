export interface Poem {
  poem_id: number;
  poem_name: string;
  poet: string;
  line: string;
  metaphor_present_or_not: string;
  count_of_the_metaphor: number;
  metaphorical_terms: string;
  year: number;
}

export interface Author {
  name: string;
}

export interface Year {
  year: string;
}

export interface PoemName {
  title: string;
}

export interface returnContent {
  key: string;
  doc_count: number;
}
