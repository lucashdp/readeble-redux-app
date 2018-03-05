import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import { Link } from 'react-router-dom';
import FormPost from './FormPost';
import VotesActions from './VotesActions';
import PostCardHeader from './PostCardHeader';
import { connect } from 'react-redux';

class PostCard extends Component {
    render() {
        const { post, votePost, categories } = this.props;

        return (
            <div>
                <Row>
                    <Link className="white-text blue" to={'/' + post.category + '/' + post.id}>
                        Details Post
                    </Link>
                </Row>
                <PostCardHeader post={post} />
                <VotesActions post={post} categories={categories} votePost={votePost} />
                <Row>
                    <h6 className="white-text center">{post.commentCount} Comments</h6>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories
});

export default connect(
    mapStateToProps
)(PostCard)