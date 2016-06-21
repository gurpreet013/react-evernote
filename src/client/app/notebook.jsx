var React = require('react');

var NoteBook = React.createClass({
  getInitialState : function() {
    return({edit_mode: false});
  },
  deleteHandler: function(name) {
    if(confirm('Are you sure? You want to delete this notebook and associated notes.')) {
      this.props.remove(name);
    }
  },
  editHandler: function() {
    this.setState({edit_mode: true});
  },
  renameNoteBook: function(event) {
    var value = $(event.currentTarget).val();
    this.setState({edit_mode: false});
    this.props.rename(this.props.data.id, value)
  },
  render: function() {
    if(this.state.edit_mode) {
      var text = <input className='input' type = 'text' defaultValue={this.props.data.title} onBlur= {this.renameNoteBook}></input>
    }
    else{
      var text = <span><strong>{this.props.data.title}</strong><br/>{this.props.data.notes.length} Notes</span>
    }
    return(
        <div className = 'col-md-2 item text-center'>
          <div className='actions text-right'>
            <span onClick={this.editHandler.bind(null, this.props.data.title)}><i className="fa fa-pencil-square-o edit" aria-hidden="true"></i></span>
            <span onClick={this.deleteHandler.bind(null, this.props.data.title)}>x</span>
          </div>
          {text}
        </div>
      )
  }
})

export default NoteBook;
