import React from 'react';
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

export default CommentList;