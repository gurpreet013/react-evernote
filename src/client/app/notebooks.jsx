var React = require('react');
import NoteBook from './notebook.jsx'

var NoteBooks = React.createClass({
  addNoteBookHandler: function(event) {
    var notebookName = $(event.currentTarget).parent().find('.input').val();
    if(this.validate(notebookName)) {
      this.addNoteBook(notebookName);
    } else{
      this.props.addErrors(this.errors);
      this.errors = null;
    }
  },
  validate:  function(name) {
    if(!this.errors) {
      this.errors = [];
    }
    return(this.validatePresence(name) && this.validateUniqueness(name));
  },
  validateUniqueness: function(name){
    if(this.props.collection.map(function(item) {return item.title}).includes(name)) {
      this.errors.push('NoteBook Name already taken.')
      return false
    }else {
      return true;
    }
  },
  validatePresence: function(name) {
    if(!name.trim().match(/.+/)) {
      this.errors.push('Notebook Name not present')
      return false;
    } else {
      return true;
    }
  },
  addNoteBook: function(name) {
    var notebook = {id: $.now(), title: name, notes: []};
    this.props.collection.push(notebook);
    this.props.update(this.props.collection, 'notebooks', 'notebooks', []);
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
  showAssociatedNotes: function(id) {
    var index = this.props.collection.findIndex(function(currentElement, currentIndex, array) {
      return(currentElement.id == id)
    });
    if(index >= 0) {
      this.props.update(this.props.collection, 'notebooks', 'notes', this.props.collection[index].notes, this.props.collection[index].title);
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
    this.props.update(this.props.collection, 'notebooks', 'notebooks', []);
  },
  render: function() {
    var _this = this;
    var noteNodes = this.props.collection.map(function(notebook, index) {
      return(<NoteBook data={notebook} key= {index} remove={_this.removeHandler} rename={_this.renameHandler} showNotes = {_this.showAssociatedNotes}/>)
    });
    return(
      <div>
        {noteNodes}
        <div className = 'col-md-2 item text-center'>
          <input type='text' className = 'input' placeholder='Enter here'></input>
          <span className="btn btn-primary btn-xs" onClick={this.addNoteBookHandler}>Add NoteBook</span>
        </div>
      </div>)
  }
})

export default NoteBooks;
