var React = require('react');
import Note from './note.jsx'

var Notes = React.createClass({
  addNoteHandler: function(){

  },
  render: function() {
    var noteNodes = this.props.collection.map(function(note, index) {
      return(<Note data={note} key = {index}/>)
    });
    return(
      <div>
      <div className='text-center col-md-12'><strong>{this.props.title}</strong></div>
      {noteNodes}
      {this.props.title !== 'ALL' ?
        <div className = 'col-md-2 item text-center'>
          <input type='text' className = 'input' placeholder='Enter here'></input>
          <span className="btn btn-primary btn-xs" onClick={this.addNoteHandler}>Add Note</span>
        </div> : ''
      }
      </div>)
  }
})

export default Notes;
