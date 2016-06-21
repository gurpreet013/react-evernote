var React = require('react');
var ReactDOM = require('react-dom');
import Nav from './nav.jsx';
import SideBar from './sidebar.jsx';
import Container from './container.jsx';


var notesCollection = [
  {name: "First", notes: []},
  {name: "Second", notes: []},
  {name: "Third", notes: []}
];

var notebookCollection = [
  {id: 1, title: 'First NoteBook', notes: []},
  {id: 2, title: 'Second NoteBook', notes: []},
  {id: 3, title: 'Third NoteBook', notes: []}
];


var App = React.createClass({
  getInitialState: function() {
    var notesCollection = this.fetchNotes();
    return({flag: 'notebooks',
            notebooks: notebookCollection,
            notes: notesCollection
          });
  },
  fetchNotes: function() {
    return notebookCollection.map(function(item) {
      return(item.notes)
    }).reduce(function(a,b) {
      return(a.concat(b))
    })
  },
  handleClick: function(target) {
    this.setState({flag: target})
  },
  updateHandler: function(collection, from) {
    if(from == 'notebooks') {
      this.setState({notebooks: collection,
                    flag: from
                  });
    }
  },

  render: function() {
    return(<div className="col-md-12">
            <Nav/>
            <div className='row col-md-12' id ='wrapper'>
              <SideBar eventHandler={this.handleClick}/>
              <Container flag = {this.state.flag} notesCollection = {this.state.notes} notebooksCollection = {this.state.notebooks} update = {this.updateHandler}/>
            </div>
           </div>
          );
  }

});




ReactDOM.render(<App/>, document.getElementById('app'));


// var App = React.createClass({
//   render: function() {
//     return(<div className="col-md-12">
//             <SideBar eventHandler={this.handleClick}/>
//             <ContentBox selectedDiv={<Notes/>}/>
//            </div>
//           )
//   },
//   handleClick: function(target) {
//     if(target == 'notebooks') {
//       selectedDiv = <NoteBooks/>;
//     } else {
//       selectedDiv = <Notes/>;
//     }
//   }
// });
// var SideBar = React.createClass({
//   render: function() {
//     return(
//       <div className='col-md-3' style={divStyle}>
//         <div className='col-md-12' onClick={this.props.eventHandler.bind(this, 'notebooks')}>NoteBooks</div>
//         <div className='col-md-12' onClick={this.props.eventHandler.bind(this, 'notes')}>Notes</div>
//       </div>
//       )
//   }
// });


// var ContentBox = React.createClass({
//   render: function(){
//     return(<div className='col-md-9'>
//             {selectedDiv}
//           </div>)
//   }
// })



// var data = [
//   {id: 1, author: "Pete Hunt", text: "This is one comment"},
//   {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
// ];

// var commentBox = React.createClass({
//   render() {
//     return(<div>Hello, world! I am a CommentBox.
//             <h1>Comments</h1>
//             <CommentList data= {this.props.data}/>
//             <CommentForm />
//           </div>
//           );
//   }
// });


// var CommentList = React.createClass({
//   render: function() {
//     debugger
//     var commentNodes = this.props.data.map(function(comment) {
//       return(
//         <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
//       )
//     })
//     return(
//       <div className = 'comment-list' data-type1="dkwsnk" type="skjhk">
//       {commentNodes}
//       </div>
//     )
//   }
// });

// var CommentForm  = React.createClass({
//   render: function() {
//     return(
//       <div className="commentForm">Hello, world! I am a CommentForm.</div>
//     );
//   }
// });

// // tutorial16.js
// var CommentForm = React.createClass({
//   getInitialState: function() {
//     return {author: '', text: ''};
//   },
//   handleAuthorChange: function(e) {
//     this.setState({author: e.target.value});
//   },
//   handleTextChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var author = this.state.author.trim();
//     var text = this.state.text.trim();
//     if (!text || !author) {
//       return;
//     }
//     this.props.onCommentSubmit({author: author, text: text});
//     this.setState({author: '', text: ''});
//   },
//   render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={this.state.author}
//           onChange={this.handleAuthorChange}
//         />
//         <input
//           type="text"
//           placeholder="Say something..."
//           value={this.state.text}
//           onChange={this.handleTextChange}
//         />
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
// });
// var Comment = React.createClass({
//   render: function() {
//     return(
//       <div className='comment'>
//         <h2>{this.props.author}</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// })

// // tutorial18.js
// var CommentBox = React.createClass({
//   loadCommentsFromServer: function() {
//     // $.ajax({
//     //   url: this.props.url,
//     //   dataType: 'json',
//     //   cache: false,
//     //   success: function(data) {
//     //     this.setState({data: data});
//     //   }.bind(this),
//     //   error: function(xhr, status, err) {
//     //     console.error(this.props.url, status, err.toString());
//     //   }.bind(this)
//     // });
//   },
//   handleCommentSubmit: function(comment) {
//     debugger
//     comment.id = this.state.data.length + 1
//     this.state.data.push(comment)
//     this.setState({data: this.state.data})
//     // TODO: submit to the server and refresh the list
//   },
//   getInitialState: function() {
//     return {data: []};
//   },
//   componentDidMount: function() {
//     this.loadCommentsFromServer();
//     // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
//   },
//   render: function() {
//     return (
//       <div className="commentBox">
//         <h1>Comments</h1>
//         <CommentList data={this.state.data} />
//         <CommentForm onCommentSubmit={this.handleCommentSubmit} />
//       </div>
//     );
//   }
// });

// ReactDOM.render(<CommentBox data={data}/>, document.getElementById('example'));





// class LikeButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       liked: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({liked: !this.state.liked});
//   }
//   render() {
//     const text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <div onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </div>
//     );
//   }
// }


// var LikeButton = React.createClass({
//   getInitialState: function() {
//     return { liked: false }
//   },
//   handleClick: function() {
//     this.setState({liked: !this.state.liked}, this.updateState);
//   },
//   updateState: function() {
//     debugger
//     // this.setState({liked: !this.state.liked}, this.updateState);
//   },
//   render: function() {
//     const text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <div onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </div>
//     );
//   }
// })

// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('example')
// );


// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <PagePic pagename={this.props.pagename} />
//         <PageLink pagename={this.props.pagename} />
//       </div>
//     );
//   }
// });

// var PagePic = React.createClass({
//   render: function() {
//     return (
//       <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
//     );
//   }
// });

// var PageLink = React.createClass({
//   render: function() {
//     return (
//       <a href={'https://www.facebook.com/' + this.props.pagename}>
//         {this.props.pagename}
//       </a>
//     );
//   }
// });

// ReactDOM.render(
//   <Avatar pagename="Engineering" />,
//   document.getElementById('example')
// );
