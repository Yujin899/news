import Link from 'next/link';
import Grid from "@mui/material/Unstable_Grid2";
import { blue } from '@mui/material/colors';
import { Button } from '@mui/material';


const PostsDetails = async () => {

    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve();
    //     }, 5000);
    //   });
    
    
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 120 },
      });
    
      const data = await res.json();

      const posts = data.slice(10 , 13)






  return (

    <div style={{borderRadius: "6px" , backgroundColor: "#fff" , padding: "20px"}}>
      <h2 style={{color: blue[500] , marginBottom: "20px" }}>Posts</h2>


<Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
          {posts.map((post) => (
    <div className="home-post post" key={post.id}>
      <h3 className="postTitle">{post.title}</h3>
      <p className="postBody">{post.body}</p>
      <Link href={`/posts/${post.id}`}>
        <button style={{cursor: "pointer"}} className="postButton">Show Post</button>
      </Link>
    </div>
  ))}
          </Grid>
        ))}
      </Grid>


      <Link href={`/posts`} style={{textDecoration: 'none'}}>
        <Button sx={{width: "fit-content" , display: 'block' ,m: "0 auto" , backgroundColor: blue[500] , color: "#fff" , '&:hover': {backgroundColor: blue[700]}}}>See More</Button>
      </Link>
    </div>
  )
}

export default PostsDetails