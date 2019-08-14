import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({addPost}) => {
  const [text, setText] = useState('');
  return (
    <div className="post-form">
      < div className = "bg-light p"
      cols = "60"
        style={{
          textAlign:'center',
          margin:'20px'
      }}
      >
        <form className="form my-1" onSubmit={e => {
        e.preventDefault();
        addPost({ text });
        setText('');
      }}>
          <textarea
          style={{width:'100%', height:'auto'}}
            name="text"
            cols="40"
            rows="5"
            placeholder="Generate a post"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea><br/>
          <input type="submit" className="btn btn-dark my-1" value="Submit"/>
        </form>
      </div>
      
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm);
