import React from 'react';
import UserHeader from './UserHeader';
import './PostList.css';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import PersonIcon from '@material-ui/icons/Person';

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }
    
    renderList(){
        return this.props.posts.map(post =>{
            return <div className="postlist-box">
                <div className="postlist-icon">
                    <PersonIcon/>
                </div>
                <div className="postlist-details">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <UserHeader userId ={post.userId}/>
                </div>
            </div>
        })
    };

    render(){
        return (
            <div className="postlist">
                <div>{this.renderList()}</div>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps,{
    fetchPosts:fetchPosts
})(PostList)
