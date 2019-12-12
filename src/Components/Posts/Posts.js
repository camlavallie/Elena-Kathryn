import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../Layout/Spinner';
import PostItem from './PostItem';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// import PostForm from './PostForm';



const Posts = ({ getPosts, post: { posts, loading }}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? <Spinner/> : <Fragment>
      < Jumbotron className = "container-posts bg-no-repeat bg-contain bg-fixed bg-cover bg-center m-auto bg-white py-64 text-center">
  <Container

  >

   
    < p className = "text-4xl text-gray-800" >
    Elena Kathryn's Blog
    </p>

  </Container>
</Jumbotron>
      {/* <PostForm /> */}
      <div className="posts" style={{backgroundColor:'transparent'}}>
      {posts.map(post => (
        <PostItem key={post._id} post={post} />

      ))}
      </div>
           <div className="jumbotron-3">
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Elena Kathryn
          </p>
          <p className="lead">Email: elenalavallie@gmail.com</p>
         
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>
      
      </div>
      

    </Fragment>
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);



