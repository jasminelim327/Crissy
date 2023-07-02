import { QueryClient, QueryClientProvider, useQuery, useMutation , useQueryClient} from "react-query";
import { useParams } from "react-router-dom";
import Comment, { CommentProps } from "./Comment";
import {useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import LoadingSpinner from "../Animation/LoadingSpinner";
import "firebase/database";
import { db } from "../../backend/firebase";
import { addDoc, getDocs, collection } from "firebase/firestore";


const queryClient = new QueryClient();

export default function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <CommentSection />
    </QueryClientProvider>
    </>
  );}

function CommentSection() {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentProps[]>([]);

  const { isLoading, error, data } = useQuery(["comments", id], async () => {
    const querySnapshot = await getDocs(collection(db, `/post/${id}/comment`));
    console.log(data)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  const mutation = useMutation(
    async (newComment: CommentProps) => {
      const docRef = await addDoc(collection(db, `post/${id}/comment`), newComment);
      return docRef.id;
    },
    {
      onSuccess: (commentId, newComment) => {
        setComments((prevComments) => [
          newComment,
          ...prevComments,
        ]);
      },
    }
  );

  const handleCommentSubmit = (newComment: CommentProps) => {
    mutation.mutate(newComment);
  };


  useEffect(() => {
    console.log("comments:", comments);

    if (data) {
      const initialComments = data.map((comment: any) => ({
        id: comment.id,
        comment: comment.comment,
        likes: comment.likes,
      }));
      setComments(initialComments);
      console.log(comments)
    }
  }, [data, id]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return "An error has occurred: " + error;
  console.log("comments:", comments);

  return (
    <>
     {comments.map((comment) => {
      console.log('comment', comment.comment); // Add this line to log the comment object
      return (
        <Comment key={comment.id} comment={comment.comment} likes={comment.likes} id={comment.id}        />
      );
    })}
      <CreateComment onSubmit={handleCommentSubmit} />
    </>
  );
}
