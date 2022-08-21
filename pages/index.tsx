import type { NextPage, GetServerSideProps } from "next";
import { useState } from "react";
 
interface IndexPageProps {
  initialCatImageUrl: string;
}
 
interface CatCategory {
  id: number;
  name: string;
}
 
interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}
 
type SearchCatImageResponse = SearchCatImage[];
 
const fetchCatImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};
 
interface IndexPageProps {
  initialCatImageUrl: string;
}
 
const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
 
  const handleClick = async () => {
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  };
 
  return (
    <div>
      <button onClick={handleClick}>きょうのにゃんこ🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImageUrl} width={500} height="auto" />
      </div>
    </div>
  );
};
 
export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};
 
export default IndexPage;