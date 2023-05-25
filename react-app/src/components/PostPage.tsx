import { Navigate, useParams } from "react-router-dom";
import PostItem from "./PostItem";

const post = {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum blablabla"
    };

const PostPage = () => {
    const { id } = useParams();

    return <PostItem id={post.id} 
    title={post.title} 
    content={post.content} />;
}

export default PostPage;