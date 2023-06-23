document.addEventListener('DOMContentLoaded', function() {
  const blogLink = document.getElementById('blog-link');
  blogLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    fetchBlogPosts();
  });

  const blogPostsContainer = document.getElementById('blog-posts');

  async function fetchBlogPosts() {
    try {
      const response = await fetch('./blog-posts/posts.json');
      const posts = await response.json();

    

      // Loop through the blog posts
      for (const post of posts) {
        const postContent = await fetch(`./blog-posts/${post.filename}`);
        const content = await postContent.text();

        // Create a new blog post element
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');
        blogPostElement.innerHTML = `<h3>${post.title}</h3>` + marked(content);

        // Append the blog post to the container
        blogPostsContainer.appendChild(blogPostElement);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }
});
