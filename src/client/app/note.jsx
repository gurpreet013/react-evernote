var React = require('react');

var Note = React.createClass({
  render: function() {
    return(
        <div className = 'col-md-2 item text-center'>
          <span className = 'close text-right'>x</span>
          <span>{this.props.data.name}</span>
        </div>
      )
  }
})

export default Note;

