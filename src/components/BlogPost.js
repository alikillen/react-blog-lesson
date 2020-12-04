import React from 'react'

const BlogPost = ({post}) => {
    // If we don't have a post, return null.
    if (!post) return null

    const {title, modified_date, category, content} = post
    // destructured it
    return (
        <div>
            <h1>{title}</h1>
            <p>{modified_date}</p>
            <p>{category}</p>
            <p>{content}</p>
        </div>
    )
}

export default BlogPost