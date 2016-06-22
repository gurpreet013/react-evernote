var React = require('react');

var Note = React.createClass({
  editHandler: function() {

  },
  deleteHandler: function() {

  },
  render: function() {
    if(false) {
      var text = <input className='input' type = 'text' defaultValue={this.props.data.title} onBlur= {this.renameNoteBook}></input>
    }
    else{
      var text = <span><strong>{this.props.data.name}</strong></span>
    }
    return(
        <div className = 'col-md-2 item text-center'>
          <div className='actions text-right'>
            <span onClick={this.editHandler.bind(null, this.props.data.title)}><i className="fa fa-pencil-square-o edit" aria-hidden="true"></i></span>
            <span onClick={this.deleteHandler}>x</span>
          </div>
          {text}
        </div>
      )
  }
})

export default Note;

