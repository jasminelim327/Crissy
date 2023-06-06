import { QueryClient, QueryClientProvider, useQuery, useMutation , useQueryClient} from "react-query";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { Key } from "react";
import CreateComment from "./CreateComment";

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

  const mutation = useMutation(
    async (comment: string) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment,
        }),
      };
  
      const response = await fetch(
        `https://647087103de51400f7247096.mockapi.io/api/inspire2023/post/${id}/comment`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("repoData");
      },
    }
  );

  
  const handleCommentSubmit = async (comment: string) => {
    try {
      await mutation.mutateAsync(comment);
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };


  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data.map(
        (comment: {
          id: Key | null | undefined;
          postId: string;
          username: string;
          comment: string;
          avatar: string;
          likes: number;
        }) => (
          <Comment
            key={comment.id}
            postId={comment.postId}
            id={comment.id}
            username={comment.username}
            comment={comment.comment}
            avatar={comment.avatar}
            likes={comment.likes}
          />
        )
      )}
      <CreateComment onSubmit={handleCommentSubmit}/>
    </>
  );
}
