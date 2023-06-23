const postsPerPage = 5;
let currentPage = 1;
let posts = [];

// Add your blog posts here
posts.push(
    {
      title: 'Henlo',
      content: 'This place is a temporary stash of all the rants and rambles I\'ll be posting on the sub',
    },
    {
      title: 'The looks',
      content: 'The site will use the same theme as the sub, but I\'ll be adding a few more things to make it look better',
    },
    {
      title: 'Minimalism',
      content: 'This page only uses three files for the entirity of the site, the HTML, CSS and JS file.',
    },
   
  );

// Function to display blog posts
function displayPosts(page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
  
    for (let i = startIndex; i < endIndex && i < posts.length; i++) {
      const post = posts[i];
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');
      blogPost.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <span class="date">${post.date}</span>
      `;
      blogPostsContainer.appendChild(blogPost);
    }
  }

// Function to generate pagination links
function generatePagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(posts.length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const paginationLink = document.createElement('a');
    paginationLink.href = '#';
    paginationLink.textContent = i;
    if (i === currentPage) {
      paginationLink.classList.add('active');
    }
    paginationContainer.appendChild(paginationLink);
  }
}

// Function to initialize the blog
function initializeBlog() {
  displayPosts(currentPage);
  generatePagination();

  const paginationLinks = document.querySelectorAll('#pagination a');
  paginationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      currentPage = parseInt(link.textContent);
      displayPosts(currentPage);
      generatePagination();
    });
  });
}

// Initialize the blog
initializeBlog();
