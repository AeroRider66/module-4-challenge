// Sample blog posts data
const blogPosts = [
    {
      name: "Frodo",
      title: "One Ring to Rule Them All",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Lazarus Long",
      title: "Time Enough for Love",
      content: "Praesent auctor, mauris non blandit fringilla, augue purus cursus nulla, a tincidunt eros est nec turpis."
    },
    {
      name: "Paul Atredies",
      title: "The Spice is Control",
      content: "Fusce eget nibh id metus tincidunt semper eu sit amet est."
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
      // const dateElement = document.createElement('p');
      
      userNameElement.classList.add('post-userNname');
      titleElement.classList.add('post-title');
      contentElement.classList.add('post-content');
      
      userName.textContent = post-userName;
      titleElement.textContent = post-title;
      contentElement.textContent = post.content;
            
      postElement.appendChild(userNameElement);
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
  