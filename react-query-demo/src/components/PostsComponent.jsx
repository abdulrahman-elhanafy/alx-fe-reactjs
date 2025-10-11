// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
};

export default function PostsComponent() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Posts</h2>
            <ul className="space-y-2">
                {data.slice(0, 5).map((post) => (
                    <li key={post.id} className="p-3 border rounded-lg">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
