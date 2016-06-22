var React = require('react');

var Error = React.createClass({
  getInitialState: function() {
    return({viewMode: true})
  },
  hide: function() {
    this.props.updateErrors([]);
  },


  render: function() {
      var errors = this.props.collection.map(function(message) {
        return <li>{message}</li>
      })

    return(
      <div>
      {
        this.state.viewMode ?
          <div className="alert alert-danger col-md-12">
            <a href="#" className="close" aria-label="close" onClick={this.hide}>&times;</a>
              <ul >
                {errors}
              </ul>
            </div>
        :
        <div>
        </div>
        }
        </div>
      )
  }
});


export default Error;
