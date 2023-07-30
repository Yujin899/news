import { Container, Typography } from '@mui/material';
import React from 'react'

const page = async ({params}) => {

  const postId = params.postId

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: { revalidate: 120 },
  });

  const post = await res.json();


  return (
    <Container sx={{mt: "100px" , backgroundColor: "#fff" , p: "20px" , borderRadius: "6px"}}>
      <h1 style={{width: "700px" , maxWidth: "100%"  , textAlign: "center" , margin: "50px auto" , display: "block"}}>{post.title}</h1>
      <Typography variant='h4' component="p" sx={{mt: "50px" , textAlign: "center" , p: " 0 20px 50px"}}>{post.body.repeat(40)}</Typography>
    </Container>
  )
}

export default page