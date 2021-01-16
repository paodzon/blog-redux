import React from 'react';
import {connect} from 'react-redux';


class UserHeader extends React.Component {

    
    render(){

        const user = this.props.users;
        if(!user){
            return null;
        }

        return (
            <div>
                <h5>{user.name}</h5>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) =>{
    return {users:state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);
