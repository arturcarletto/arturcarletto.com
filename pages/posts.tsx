// pages/posts.tsx
import React from 'react';

interface Post {
    id: number;
    title: string;
}

interface PostsProps {
    posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Posts (Server-Side Rendered)</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps = async () => {
    // Example using a placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();

    return {
        props: {
            posts: data.slice(0, 5),
        },
    };
};

export default Posts;
