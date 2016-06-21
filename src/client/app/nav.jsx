var React = require('react');

var Nav = React.createClass({
  render :function() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Evernote</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a></li>
          </ul>
        </div>
      </nav>
      )
  }
});

export default Nav;
