import React from 'react'
import PropTypes from 'prop-types'


const PostListItem = ({ src, title, text }) => {
    return (<li>
        <img src={src} alt="" />
        <h4>{title}</h4>
        <p>{text}</p>
    </li>);
}

PostListItem.defaultProps = {
    src: '',
    title: '',
    text: '',
}

PostListItem.prooTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default PostListItem;