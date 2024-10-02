import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <div style={{color:'Black',fonWeight:'blod'}}><h2>ALL BLOGS!!</h2></div>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;