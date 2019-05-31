import React, { Component } from 'react';

class Logout extends Component {
    componentDidMount(){
        fetch('/mymine/api/auth/logout', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                // this.props.history.push('/');
                window.location = "/";
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            //alert('Error logging in please try again');
        });
    }

    render() {
        return (
            <div style={{width: '50%'}}>
                Logout...
            </div>
        );
    }

}
export default Logout;