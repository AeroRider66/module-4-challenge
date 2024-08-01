// Sample blog posts data
const blogPosts = [
    {
      title: "My First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021-01-01"
    },
    {
      title: "Another Blog Post",
      content: "Praesent auctor, mauris non blandit fringilla, augue purus cursus nulla, a tincidunt eros est nec turpis.",
      date: "2021-02-15"
    },
    {
      title: "The Latest Blog Post",
      content: "Fusce eget nibh id metus tincidunt semper eu sit amet est.",
      date: "2021-03-10"
    }
  ];
  
  // Function to render blog posts
  function renderBlogPosts() {
    const postContainer = document.getElementById('posts');
    
    // Clear existing posts
    postContainer.innerHTML = '';
    
    // Loop through blog posts and create HTML elements for each post
    blogPosts.forEach(post => {
      const postElement = document.createElement('article');
      const titleElement = document.createElement('h2');
      const contentElement = document.createElement('p');
      const dateElement = document.createElement('p');
      
      titleElement.classList.add('post-title');
      contentElement.classList.add('post-content');
      dateElement.classList.add('post-date');
      
      titleElement.textContent = post.title;
      contentElement.textContent = post.content;
      dateElement.textContent = `Published on ${post.date}`;
      
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(dateElement);
      
      postContainer.appendChild(postElement);
    });
  }
  
  // Call the renderBlogPosts function to display the blog posts on page load
  renderBlogPosts();

  // document.addEventListener('DOMContentLoaded', function() {
  //   // Retrieve saved blog posts from local storage and display them
  //   const savedBlogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  //   const blogPostsContainer = document.getElementById('blogPosts');
    
  //   savedBlogPosts.forEach(function(blogPost) {
  //     const blogPostElement = document.createElement('div');
  //     blogPostElement.innerHTML = `
  //       <h2>${blogPost.title}</h2>
  //       <p>By ${blogPost.name}</p>
  //       <p>${blogPost.content}</p>
  //     `;
  //     blogPostsContainer.appendChild(blogPostElement);
  //   });
    
  //   // Handle form submission to save blog post
  //   const blogForm = document.getElementById('blogForm');
    
  //   blogForm.addEventListener('submit', function(event) {
  //     event.preventDefault();
      
  //     const name = document.getElementById('name').value;
  //     const title = document.getElementById('title').value;
  //     const content = document.getElementById('content').value;
      
  //     // Validate user input
  //     if (name.trim() === '' || title.trim() === '' || content.trim() === '') {
  //       alert('Please fill in all fields');
  //       return;
  //     }
      
  //     // Create new blog post object
  //     const newBlogPost = {
  //       name: name,
  //       title: title,
  //       content: content
  //     };
      
  //     // Save new blog post to local storage
  //     savedBlogPosts.push(newBlogPost);
  //     localStorage.setItem('blogPosts', JSON.stringify(savedBlogPosts));
      
  //     // Display new blog post
  //     const blogPostElement = document.createElement('div');
  //     blogPostElement.innerHTML = `
  //       <h2>${newBlogPost.title}</h2>
  //       <p>By ${newBlogPost.name}</p>
  //       <p>${newBlogPost.content}</p>
  //     `;
  //     blogPostsContainer.appendChild(blogPostElement);
      
  //     // Clear form fields
  //     blogForm.reset();
  //   });
  // });
  