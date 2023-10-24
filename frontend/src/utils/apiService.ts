import axios from "axios";

// Example usage
const url = "http://localhost:4000/poems";
// const data = { name: "John Doe", email: "johndoe@example.com" };
// const responseData = await postData(url, data);

// console.log(responseData);

// const postData = async (url: string, data: any) => {
//   try {
//     const response = await axios.post(url, data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const axiosInstance = axios.create({
  baseURL: url,
});

export const getAllPoems = async () => {
  try {
    const response = await axiosInstance.get("/all-poems");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching poems");
  }
};

export const getPoemBySearch = async (text: string) => {
  try {
    const response = await axiosInstance.post(`/poems-by-text`, { text });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("error fetching poems by search");
  }
};

export const getAuthors = async (text: string) => {
  try {
    const response = await axiosInstance.post(`/poem-poets-by-text`, { text });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("error fetching authors");
  }
};
