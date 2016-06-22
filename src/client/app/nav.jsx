var React = require('react');

var Nav = React.createClass({
  render :function() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid text-center">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><strong>GURPREET'S EVERNOTE</strong></a>
          </div>
        </div>
      </nav>
      )
  }
});

export default Nav;
