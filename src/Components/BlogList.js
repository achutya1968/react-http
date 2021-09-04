

const  BlogList = (props) => {

    const blogs = props.blogs
    const title = props.title
    return (
      <div>
      <h2>{title}</h2>
        {blogs.map(blog => (
          <div>
            <h2 key={blog.id}>{blog.title}</h2>
            <h3>{blog.body}</h3>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
 


 
export default BlogList ;