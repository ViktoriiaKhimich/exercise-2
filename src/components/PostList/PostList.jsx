import React from 'react'
import PostListItem from '../PostListItem'

const PostList = ({ posts }) => {
    const postsElements = posts.map(({ id, ...props }) => <PostListItem key={id} {...props}></PostListItem>)
    return (<ul>{postsElements}</ul>);
}

export default PostList;