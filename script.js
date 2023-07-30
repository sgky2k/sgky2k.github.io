const postsPerPage = 5;
let currentPage = 1;
let posts = [];

// Add your blog posts here
posts.push(
    
    {
      title: 'fake poilteness/professionalism',
      content: 'Gettin tired of all this fake communication crap, ya know? People around us, even ourselves, sometimes actin all fake. But today, wanna talk bout the importance of keepin it real in our convos. When all pumped talkin bout stuff I passionate bout, like Linux, I do pretty well in presentations. But gotta admit, when its somethin I dont care much bout, like those digital marketing classes, I struggle a bit. True communication aint bout puttin on a big show for others. Its bout expressin your real thoughts and feelings, even if others dont fully get it. Nature gave us the gift to communicate honestly, and we should embrace that, ya know? Its kinda crazy how many industries push that fake stuff and try to make us act all "professional." But I aint all in for that. Im gonna stay true to myself, no matter what. Ive noticed that our minds can play tricks, tryin to justify our actions and beliefs to protect us from feelin bad. But we gotta break free from that, man. We gotta look at ourselves real and not be too biased cause of some mental trickery. Some people change quite a bit after those communication training sessions, losin touch with who they really are. But I aint tryin to be like that. I wanna stay real, stay authentic in my interactions. Bein honest ain't always a cakewalk, especially when it don't jive with society rules, like in those corporate gigs. But ya know what? I aint gonna sacrifice my true self for anyones comfort. Just a bit tired of all this fakeness, be it in college, work, or even on YouTube. Wanna surround myself with legit people, build real connections based on honesty and respect. So, movin forward, gonna keep it real and stay true to myself, even if it means bein a little rude or dealin with some discomfort. Cause real talk, genuine communication is crucial for personal growth and buildin real bonds.',
      date: 'July 30, 2023',
    },
    {
      title: 'Minimalism',
      content: 'This page only uses three files for the entirity of the site, the HTML, CSS and JS file.',
      date: 'June 23, 2023',
    },
    {
      title: 'The looks',
      content: 'The site will use the same theme as the sub, but I\'ll be adding a few more things to make it look better',
      date: 'June 23, 2023',
    },
    {
      title: 'Henlo',
      content: 'This place is a temporary stash of all the rants and rambles I\'ll be posting on the sub',
      date: 'July 30, 2023',
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
