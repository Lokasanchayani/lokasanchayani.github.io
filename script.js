const blogPosts = [
    { title: "Introduction to Node.js", content: "Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling the development of fast and scalable network applications." },
    { title: "RESTful API Design", content: "Designing RESTful APIs requires careful consideration of resource naming, HTTP methods, status codes, and data formats. A well-designed API can greatly improve the developer experience and application efficiency." },
    { title: "Database Optimization Techniques", content: "Optimizing your database can significantly improve application performance. Techniques include proper indexing, query optimization, denormalization when appropriate, and efficient use of caching mechanisms." },
    { title: "Microservices Architecture", content: "Microservices offer a modular approach to system design, allowing for easier scaling and maintenance of individual components. However, they also introduce complexities in terms of inter-service communication and data consistency." }
];

function renderBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postElement);
    });
}

function searchBlogPosts(query) {
    return blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts(blogPosts);

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const filteredPosts = searchBlogPosts(query);
        renderBlogPosts(filteredPosts);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
