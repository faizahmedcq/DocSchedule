import React from 'react';

// Reusable card component for a single blog post
const BlogPostCard = ({ title, author, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
        {title}
      </h3>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        Read More
      </a>
    </div>
  );
};

const RecentBlogs = () => {
  const blogPosts = [
    {
      title: "10 Best Female Skin Specialists (Dermatologist) in Dhaka",
      author: "DocTime",
      date: "3 months ago",
      description: "Get treatment from the top 10 best female skin specialists in Dhaka. Solve your skin problems with expert care. View doctor profiles and schedule appointments easily."
    },
    {
      title: "Common Mental Health Challenges and Disorders in Bangladesh",
      author: "DocTime",
      date: "4 months ago",
      description: "Explore the mental health challenges in Bangladesh, where common mental disorders like depression and anxiety affect over 10% of the population, as revealed by the national mental health survey."
    },
    {
      title: "Symptoms of Liver Disease",
      author: "DocTime",
      date: "2 years ago",
      description: "Learn about symptoms of liver disease. Here we have discussed Liver Disease Symptoms, Treatment Risk Factors in Bangladesh"
    },
    {
      title: "Best Pediatric Doctors in DocTime",
      author: "DocTime",
      date: "2 years ago",
      description: "Choosing the most suitable Pediatric doctor for your child's health and well-being is essential. Here is the list of 10 best pediatric doctors in Bangladesh"
    },
    {
      title: "Kidney Disease: Symptoms and Causes",
      author: "DocTime",
      date: "2 years ago",
      description: "Learn about kidney disease symptoms and causes in Bangladesh. DocTime research and find out the common Symptoms and causes of kidney diseases."
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Recent Blogs</h2>
            <p className="text-xl text-gray-600 mt-2">Read our latest blogs from Health Experts</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View All
          </a>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
            />
          ))}
        </div>
        
        {/* View All button for mobile */}
        <div className="text-center mt-8 sm:hidden">
            <a
              href="#"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              View All
            </a>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;