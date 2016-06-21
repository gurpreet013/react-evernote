var React = require('react');
import NoteBook from './notebook.jsx'

var NoteBooks = React.createClass({
  addNoteBookHandler: function(event) {
    var notebookName = $(event.currentTarget).parent().find('.input').text();
    this.addNoteBook(notebookName);
  },
  addNoteBook: function(name) {
    var notebook = {title: name, notes: []};
    this.props.collection.push(notebook);
    this.props.update(this.props.collection, 'notebooks');
  },
  removePlaceHolder :function(event) {
    $(event).text('');
  },
  removeHandler: function(name) {
    var index = this.props.collection.findIndex(function(currentElement, currentIndex, collection) {
      return(currentElement.title == name)
    })
    if(index >= 0) {
      this.props.collection.splice(index, 1);
      this.updateHandler();
    }
  },
  renameHandler: function(id, value) {
    var index = this.props.collection.findIndex(function(currentElement, currentIndex, array) {
      return(currentElement.id == id)
    });
    if(index >= 0) {
      this.props.collection[index].title = value;
      this.updateHandler();
    }
  },
  updateHandler: function() {
    this.props.update(this.props.collection, 'notebooks');
  },
  render: function() {
    var _this = this;
    var noteNodes = this.props.collection.map(function(notebook, index) {
      return(<NoteBook data={notebook} key= {index} remove={_this.removeHandler} rename={_this.renameHandler}/>)
    });
    return(
      <div>
        {noteNodes}
        <div className = 'col-md-2 item text-center'>
          <div className = 'col-md-10 col-md-offset-1 input' onBlur ={this.removePlaceHolder} contentEditable='true'>Enter here</div>
          <span className="btn btn-primary btn-xs" onClick={this.addNoteBookHandler}>Add NoteBook</span>
        </div>
      </div>)
  }
})

export default NoteBooks;
