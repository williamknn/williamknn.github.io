var React = require('react'),
    GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        
        GitHubUser.getByUsername(this.refs.username.value).then(function(res){
            console.dir(res.data);
            this.props.updateUser(res.data);
        }.bind(this));

        GitHubUser.getReposByUsername(this.refs.username.value).then(function(res){
            this.props.updateRepos(res.data);
        }.bind(this));
    },
    render: function(){
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" ref="username" placeholder="Ex: williamknn"/>
                        </div>
                        <button className="btn btn-primary" type="submit">Manda bala!</button>
                    </form>
                </div>
            </div>
        );
    }
});

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;