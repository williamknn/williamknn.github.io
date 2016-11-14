var React = require('react');

var UserRepos = React.createClass({
    getInitialState: function(){
        return {
            reposCount: 0
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({ reposCount: nextProps.repos.length });
    },
    render: function(){
        var repos = this.props.repos.map(function(repo, key){
            return(
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name} <span className="badge">{repo.stargazers_count} STARS</span></h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} target="_blank" className="btn btn-primary">Repository</a>
                            <a href={repo.html_url + '/issues'} target="_blank" className="btn btn-default">Issues</a>
                        </p>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2>{this.state.reposCount} repositories</h2>
                {repos}
            </div>
        );
    }
});

module.exports = UserRepos;