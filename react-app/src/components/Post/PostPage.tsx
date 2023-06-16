import { Navigate, useParams } from "react-router-dom";
import PostItem, { PostItemProps } from "./PostItem";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Animation/LoadingSpinner";

const initialPost: PostItemProps = {
    id: 0,
    title: '',
    content: '',
    username: "",
    likes: 0,
    createdAt:  new Date()
    ,
} 

const PostPage = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState<PostItemProps>(initialPost);
    const [error, setError] = useState();

    useEffect(() => {
    console.log("fetching data");
    fetch(`https://647087103de51400f7247096.mockapi.io/api/inspire2023/post/${id}`)
        .then(response => response.json())
        .then(data => {
            setPost(data);
            setIsLoading(false);
            console.log(data);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        });

    }, [])
    
if (isLoading) {
    return <LoadingSpinner />;;
}

if (error) {
    return <div>There's an error</div>

}
    return <PostItem id={post.id}
    title={post.title}
    content={post.content} username={post.username} likes={post.likes} createdAt={post.createdAt} />;
}

export default PostPage;
