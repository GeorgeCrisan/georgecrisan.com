



class MyApp extends React.Component {
   render() {
       <Leaderboard />

   }
} // end of MyApp function/class to render in DOM . content Leaderboard


class Leader extends React.Component {
    constructor(props){
        super(props);

    }
render(){
    return (
        <tr>
          <td>{this.props.rank}</td>
          <td><a href={'https://www.freecodecamp.com' + this.props.name} target="_blank"><img src={this.props.image} />{this.props.name}</a></td>
          <td>{this.props.recentPoints}</td>
          <td>{this.props.allPoints}</td>
        </tr>
    );
 }
}// end of Leader function/class does render an table row with 4 table data using the props which are declared later in use

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camper:[],
            sort:'Recent'
          
        };
    } // end of constructor

    recent(){
         $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent',function(data){
             this.setState({camper:data,sort:'Recent'});
         });

    } //end of recent

    alltime(){
        $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',function(data){
            this.setState({camper:data,sort:'AllTime'});
        });
    }

    componentDidMount(){
        this.recent();
    }

    render(){
        let leaderboard = this.state.camper.map(function(person, index){
            return (<Leader key={index} rank={index + 1} image={person.img} name={person.username} recentPoints={person.recent} allPoints={person.alltime} />);
        });
        return (
			<table className="hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Camper Name</th>
						<th><a href="#" onClick={this.recent}>Points in past 30 days {this.state.sort === 'Recent' ? '▼' : ''}</a></th>
						<th><a href="#" onClick={this.alltime}>All time points {this.state.sort === 'AllTime' ? '▼' : ''}</a></th>
					</tr>
				</thead>
				<tbody>
					{leaderboard}
				</tbody>
			</table>
		);

    }// end of render
} //end of Leaderboard





ReactDOM.render(<MyApp />, document.getElementById('wrapper'));
