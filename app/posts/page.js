import { Button, Container } from "@mui/material";
import React, { Suspense } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const page = async () => {
  
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });

  const data = await res.json();

  const post = data.map((post) => (
    <div className="post" key={post.id}>
      <h3 className="postTitle">{post.title}</h3>
      <p className="postBody">{post.body}</p>
      <Link href={`/posts/${post.id}`}>
        <Button className="postButton">Show Post</Button>
      </Link>
    </div>
  ));

  return (
    <Container sx={{ py: "50px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
          {post}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default page;
