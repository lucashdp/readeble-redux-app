import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import FormPost from './FormPost';
import VotesActions from './VotesActions';
import PostModal from './PostModal';
import Comment from './Comment';
import PostCardHeader from './PostCardHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    voteComment
} from "../reducers";

class PostDetailCard extends Component {

    render() {
        const { votePost, categories, voteComment } = this.props;
        const post = this.props.postDetail;

        return (
            <div>
                {post !== undefined && post.id ? (
                    <div>
                        <Row>
                            <PostCardHeader post={post} />
                            <Row>
                                <h6 className="white-text">{post.body}</h6>
                            </Row>
                            <VotesActions post={post} categories={categories} votePost={votePost} />
                            <Row></Row>
                        </Row>
                        <Comment comments={post.comments} voteComment={voteComment} />
                    </div>
                ) :
                    <div></div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories,
    postDetail: state.reducer.postDetail
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        voteComment
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailCard)