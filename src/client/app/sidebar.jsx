var React = require('react');

var SideBar = React.createClass({
  render: function() {
    return(
      <div className='row'>
        <div id="sidebar-wrapper" className="col-md-3">
          <ul className="sidebar-nav">
              <li className="" onClick={this.props.eventHandler.bind(null, 'notebooks')}>
                  <a href="#">
                      Notebooks
                  </a>
              </li>
              <li onClick={this.props.eventHandler.bind(null, 'notes')}>
                  <a href="#">Notes</a>
              </li>
          </ul>
        </div>
      </div>

      )
  }
});


export default SideBar;
