import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.commentsRender = this.commentsRender.bind(this);
    }

    commentsRender(comments) {
        return comments.map((comment, index) => {
            return (
                <li key={index}>
                    {comment}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.commentsRender(this.props.comments)}
            </ul>
        );
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CommentList;