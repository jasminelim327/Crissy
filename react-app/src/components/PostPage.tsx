import { Navigate, useParams } from "react-router-dom";
import PostItem, { PostItemProps } from "./PostItem";
import { useEffect, useState } from "react";


const post = {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum blablabla"
    };

const initialPost: PostItemProps = {
    id: 0,
    title: '',
    content: ''
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
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        });

}, [])

    
if (isLoading) {
    return <div>Page is loading</div>;
}

if (error) {
    return <div>There's an error</div>

}

    return <PostItem id={post.id} 
    title={post.title} 
    content={post.content} />;
}

export default PostPage;
