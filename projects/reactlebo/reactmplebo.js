

/*class Leader extends React.Component{
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

class Leaderboard extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            camper: [],
            sort: 'Recent'
        };

    }
	

	recent () {
		let self = this;
		$.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
			self.setState({camper: data, sort: 'Recent'});
		});
	}
    
	alltime(){
		let self = this;
		$.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {
			self.setState({camper: data, sort: 'AllTime'});
		});
	} 

    componentDidMount() {
		this.recent();
	}
    
	render() {
		var leaderboard = this.state.camper.map(function(person, idx) {
			return (
				<Leader clasName='oddgrey' key={idx} rank={idx + 1} image={person.img} name={person.username} recentPoints={person.recent} allPoints={person.alltime} />
			);
		});
		return (
			<table className="hover">
				<thead>
					<tr >
						<th>#</th>
						<th>Camper Name</th>
						<th><a href="#" onClick={this.recent.bind(this)}>Points in past 30 days {this.state.sort === 'Recent' ? '▼' : ''}</a></th>
						<th><a href="#" onClick={this.alltime.bind(this)}>All time points {this.state.sort === 'AllTime' ? '▼' : ''}</a></th>
					</tr>
				</thead>
				<tbody >
					{leaderboard}
				</tbody>
			</table>
		);
	}
}// end of Leaderboard 



ReactDOM.render(<Leaderboard />, document.getElementById('wrapper')); */