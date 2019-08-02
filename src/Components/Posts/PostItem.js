import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';


const PostItem = ({ 
  deletePost,
  auth,
  post: {_id, text, name, avatar, user, date }
}) => (


      <div className="container">
      <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
              {text}
            </p>
             <p class="post-date">
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
           
          
          

            <button onClick={e => deletePost(_id)}      
              type="button"
              class="btn btn-danger">
              <i class="">Delete</i>
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


