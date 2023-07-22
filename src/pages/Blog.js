import Image1 from "../assets/img-1.jpg";
import '../components/style/blogPage.css';
import BlogCard from "../components/utility/BlogCard";
import SectionHead from "../components/utility/SectionHead";

const Blog = () => {
  return (
    <div className="blog-section py-5">
      <div className="container">
        <SectionHead title='BLOG' text='Welcome and open yourself to your truest love'/>
        <div className="row"> 
          <div className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          <div  className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-3">
          <BlogCard image={Image1} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
