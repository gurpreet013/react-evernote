var React = require('react');
import Note from './note.jsx'

var Notes = React.createClass({
  render: function() {
    var noteNodes = this.props.collection.map(function(note, index) {
      return(<Note data={note} key = {index}/>)
    });
    return(
      <div>
      {noteNodes}
      </div>)
  }
})

export default Notes;
