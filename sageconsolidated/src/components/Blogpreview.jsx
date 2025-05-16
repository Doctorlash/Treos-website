import React from 'react';
import { Link } from 'react-router-dom';
import './Blogpreview.css';

const blogPosts = [


{
  title: 'The Importance of Cybersecurity in Social Media',
  excerpt: 'Understanding the risks and how to protect your brand online...',
  image: '/images/blog1.jpg',
  id: 1,
},
{
  title: 'Top 5 Social Media Strategies for 2025',
  excerpt: 'Stay ahead with these proven tactics...',
  image: '/images/blog2.jpg',
  id: 2,
},
// Add more blog posts as needed
];

const BlogPreview = () => (
<section className="blog-preview">
  <h2>From Our Blog</h2>
  <div className="blog-grid">
    {blogPosts.map((post) => (
      <div key={post.id} className="blog-card">
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`}>Read More</Link>
      </div>
    ))}
  </div>
</section>
);



export default BlogPreview;
