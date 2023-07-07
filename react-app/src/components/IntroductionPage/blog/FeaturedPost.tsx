import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions, Button } from '@mui/material';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Card sx={{ maxWidth: 357, mx:2,  md:4 , lg:4 , borderRadius: 18, px:2, py:2, backgroundColor: '#e6f3ff'}}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={post.image}
        title={post.title}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
        {post.title} ✨
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
