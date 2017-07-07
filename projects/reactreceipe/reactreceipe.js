

class Top extends React.Component{
    render(){
        return (
            <tr className='evengrey'>
				<td>{this.props.rank}</td>
				<td><a href={"https://www.freecodecamp.com/" + this.props.name} target="_blank"><img src={this.props.image} /> {this.props.name}</a></td>
				<td>{this.props.recentPoints}</td>
				<td>{this.props.allPoints}</td>
			</tr>

        );
    }

} // end of leader classs

class Leaderboard extends React.Component {
    constructor(props){
	super(props);
	  this.state = {
         importedArray : [],
		 status: 'last30'
	  }
 } //end of constructor

   recent () {
       let self = this;
	   $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent',(data)=>{
           self.setState({importedArray:data,status: 'last30'});
	   });

   }// end of recent

   alltime (){
	   let self = this;
	   $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',(data)=>{
		   let self = this;
		  self.setState({importedArray:data,status:'allTimeRecord'}); 
	   });
   }
    componentDidMount(){
		this.recent();
	} // end of component

	render(){
          let lbcontent = this.state.importedArray.map(function(elm,idx){
			  return (
				  <Top key={idx} rank= {idx + 1} image={elm.img} name={elm.username} recentPoints={elm.recent} allPoints={elm.alltime} />
			  );
		  });// end of leaderboard
        return (
             <table className='hover'>
			 <thead>
				 <tr>
				   <th>#</th>
				   <th>Camper Name</th>
				   <th><a href='#' onClick={this.recent.bind(this)} >{this.state.status ==='last30'? '->' : ' '}Last 30 days {this.state.status ==='last30'? '<-' : ' '}</a> </th>
				   <th><a href='#' onClick={this.alltime.bind(this)}>{this.state.status === 'allTimeRecord' ? '->' : ' '} Top All time {this.state.status === 'allTimeRecord' ? '<-' : ' '}</a> </th>
				 </tr> 
			 </thead>
			 <tbody> 
			   {lbcontent}
			  </tbody>  
             </table>            

		); //end of return inside render


	}//end of render

} // end of clas Leaderboard
ReactDOM.render(<Leaderboard />,document.getElementById('wrapper'));

