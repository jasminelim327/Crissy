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
  )
  ;}

function CommentSection() {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentProps[]>([]);

  const { isLoading, error, data } = useQuery(["comments", id], async () => {
    const querySnapshot = await getDocs(collection(db, `/post/${id}/comment`));
    return querySnapshot.docs.map((doc) => ({ commentId: doc.id, ...doc.data() }));
  });

  const mutation = useMutation(
    async (newComment: CommentProps) => {
      const docRef = await addDoc(collection(db, `post/${id}/comment`), newComment);
      return docRef.id;
    },
    {
      onSuccess: async () => {
        const querySnapshot = await getDocs(collection(db, `/post/${id}/comment`));
        const updatedComments = querySnapshot.docs.map((doc) => ({
          commentId: doc.id,
          ...doc.data(),
        }));
        setComments(updatedComments);
      },
    }
  );

  const handleCommentSubmit = (newComment: CommentProps) => {
    mutation.mutate(newComment);
  }

  useEffect(() => {
    if (data) {
      const initialComments = data.map((comment: any) => ({
        commentId: comment.commentId,
        comment: comment.comment,
        likes: comment.likes,
        username: comment.username,
        postId: { id } 
      }));

      const sortedComments = initialComments.sort((a, b) => b.createdAt - a.createdAt);
      setComments(sortedComments)
      // setComments(initialComments);
    }
  }, [data]);


  if (isLoading) return <LoadingSpinner />;
  if (error) return "An error has occurred: " + error;

  return (
    <>
    <div></div>
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          comment={comment.comment}
          likes={comment.likes}
          commentId={comment.commentId}
          username={comment.username}
          postId= { id } 
        />
      ))}
      <CreateComment onSubmit={handleCommentSubmit} />
    </>
  );
}