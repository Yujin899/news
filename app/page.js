import { Container, Typography } from "@mui/material";
import Slidero from "./Components/RandomPosts";
import Hero from "./Components/Hero";
import PostsDetails from "./Components/PostsDetails";
import Footer from "./Components/Footer";

export default async function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Slidero />
      </Container>
      <Container sx={{mt: "60px"}}>
        <PostsDetails />
      </Container>
      <Footer />
    </>
  );
}
