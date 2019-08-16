import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';


const PostItem = ({ 
  deletePost,
  auth,
  post: {_id, text, name, user, avatar, date }
}) => (


      <div className="posts">
      <div className="post bg p-3 ">
          <div>
            <a href="profile.html">
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                
                
            </p>
           
          

            <button onClick={e => deletePost(_id)}      
              type="button"
              className="btn btn-danger">
              <i className="fas fa-times"/>
            </button>
       


          
      
     
          </div>
        </div>
        </div>
);
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, {deletePost})(PostItem);


