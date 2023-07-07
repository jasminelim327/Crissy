import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import { Typography } from '@mui/material';


const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Dynamic Discussion Forum:',
    description:
      "Crissy's dynamic discussion forums serve as a virtual meeting place where individuals can engage in open and respectful conversations about unconscious bias in the workplace. These forums provide a platform for users to share their experiences, perspectives, and insights, fostering a sense of community and understanding. Whether it's discussing the impact of gender bias in hiring practices or addressing the challenges of racial bias in promotions, Crissy's discussion forums empower individuals to learn from one another, challenge their own biases, and collectively work towards creating more inclusive workplaces..",
    image: 'https://source.unsplash.com/random?wallpaper',
    imageLabel: 'Image Text',
  },
  {
    title: 'Community-Driven Stories',
    date: 'Nov 11',
    description:
     "Crissy encourages users to share their personal stories and experiences related to unconscious bias in the workplace, fostering a sense of community and empathy. Users can submit written narratives that highlight instances of bias they have encountered or witnessed. Similar to platforms like Reddit's 'Ask Me Anything' (AMA) format, Crissy could introduce AMA-style sessions where users can engage in live discussions with individuals who have faced or overcome unconscious bias challenges in their careers. This feature allows for the exchange of real-life experiences and insights, providing inspiration and practical strategies for others dealing with similar situations.",
    image: 'https://images.unsplash.com/photo-1686488427892-a1df07ce041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Interactive Discussions and Voting System',
    date: 'Nov 11',
    description:
      'Crissy incorporates an interactive discussion and voting system where users can post discussion topics related to unconscious bias in the workplace, and others can engage by commenting, asking questions, or sharing their perspectives. The platform allows users to upvote or downvote comments based on their relevance and contribution to the discussion. This system helps highlight valuable insights and encourages users to engage in thoughtful and meaningful conversations. It also provides a way to identify popular or trending topics, ensuring that the most relevant discussions receive greater visibility and participation.',
    image: 'https://images.unsplash.com/photo-1682685794304-99d3d07c57d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
    imageLabel: 'Image Text',
  }
];

const post1= "lorem ipsum dolor sit amet, consect"
const post2= "lorempixel  lorem ipsum dolor sit amet"
const post3= "lorempixel lorem ipsum dolor sit amet"


const posts = [post1, post2, post3];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={''} >
      </Header>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={2}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}