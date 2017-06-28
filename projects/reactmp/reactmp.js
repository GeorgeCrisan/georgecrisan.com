

 function TheHeader(){ 
   
   return (
    <header className='top'>

      <h1 className='text-center'>Markdown Prviewer </h1>
      
    </header>
      
)};

class Markup extends React.Component {
    constructor(){
      super();
      this.state = {
        converter: new showdown.Converter(),
        value:'\nHeading\n=======\n\nSub-heading\n----------\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\n *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nTo Do:\n\n  * Run\n  * Run Fast\n  * Run Fast From\n  * Run Fast From Unknown\n \nMovies:\n 1. A Dangerous Method\n 2. Demolition\n 3. October Sky\n\n\n*[George Crisan](http://www.georgecrisan.com)*'
      }
    }    
 
createMarkup(){
  return {__html: this.state.converter.makeHtml(this.state.value)};
}

handleChange(event){
  this.setState({value: event.target.value});
}

render(){
    return(<div className='row'>
             <div className='col-sm-6'>
             <textarea className='col-xs-10 full-height' type='text' defaultValue = {this.state.value} 
             onChange = {this.handleChange.bind(this)} id='markdown'></textarea>
             </div>
             <div className='col-sm-6'>
               <div id='renderedarea' className='col-xs-10 full-height'>
                 <div dangerouslySetInnerHTML={this.createMarkup()}/>
               </div>
               
             </div>
             </div>
             );

}

}// end of theMarkdown

const App = () => (
  <div className='container-fluid'>
   <TheHeader/>
   <Markup/>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('wrapper'));