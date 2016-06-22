var React = require('react');
import NoteBooks from './notebooks.jsx'
import Notes from './notes.jsx'

var Container = React.createClass({
  render: function(){
    if(this.props.flag == 'notebooks') {
      var selected = <NoteBooks update = {this.props.update} collection = {this.props.notebooksCollection} addErrors = {this.props.addErrors}/>
    } else {
      var selected = <Notes update = {this.props.update} collection = {this.props.notesCollection} title = {this.props.title}/>
    }
    return(<div className='col-md-12'>
            {selected}
          </div>)
  }
});

export default Container;
