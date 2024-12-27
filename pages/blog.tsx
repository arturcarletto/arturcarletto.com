// pages/blog.tsx
import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Blog Posts (Static)</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong> - {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    // Example using a placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();

    return {
        props: {
            posts: data.slice(0, 5), // Just show first 5
        },
    };
};

export default Blog;
