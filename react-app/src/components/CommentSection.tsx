import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CommentSection />
    </QueryClientProvider>
  );
}

function CommentSection() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `https://647087103de51400f7247096.mockapi.io/api/inspire2023/post/${id}/comment`
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>

{data.map((comment) => (
      <Comment
        key={comment.id}
        postId={comment.postId}
        id={comment.id}
        username={comment.username}
        comment={comment.comment}
      />
    ))}
    
    
    </>
  );
}
