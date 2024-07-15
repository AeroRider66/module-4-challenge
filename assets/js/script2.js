document.addEventListener('DOMContentLoaded', function() {
  // Retrieve saved blog posts from local storage and display them
  const savedBlogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const blogPostsContainer = document.getElementById('blogPosts');
  
  savedBlogPosts.forEach(function(blogPost) {
    const blogPostElement = document.createElement('div');
    blogPostElement.innerHTML = `
      <h2>${blogPost.title}</h2>
      <p>By ${blogPost.name}</p>
      <p>${blogPost.content}</p>
    `;
    blogPostsContainer.appendChild(blogPostElement);
  });
  
  // Handle form submission to save blog post
  const blogForm = document.getElementById('blogForm');
  
  blogForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // Validate user input
    if (name.trim() === '' || title.trim() === '' || content.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    
    // Create new blog post object
    const newBlogPost = {
      name: name,
      title: title,
      content: content
    };
    
    // Save new blog post to local storage
    savedBlogPosts.push(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(savedBlogPosts));
    
    // Display new blog post
    const blogPostElement = document.createElement('div');
    blogPostElement.innerHTML = `
      <h2>${newBlogPost.title}</h2>
      <p>By ${newBlogPost.name}</p>
      <p>${newBlogPost.content}</p>
    `;
    blogPostsContainer.appendChild(blogPostElement);
    
    // Clear form fields
    blogForm.reset();
  });
});
