import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {successNotification} from "./Notification";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        successNotification('пользователь удален', post.firstName)
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        // update({...post, employeeId})
    }

    return (
        <div onClick={handleUpdate} className="post" style={{margin: "2rem", display: "flex", justifyContent: "space-between", border: "1px solid rgba(0, 0, 0, 1)", padding: "2rem"}}>
            {post.employeeId}. {post.firstName}  {post.lastName}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;