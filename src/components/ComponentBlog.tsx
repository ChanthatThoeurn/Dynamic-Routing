"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogType = {
  id: number;
  title: string;
  body: string;
};

export default function ComponentBlog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/user/${blog.id}`} key={blog.id}>
            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition cursor-pointer">
              <h2 className="text-2xl font-semibold mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 line-clamp-3">
                {blog.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
