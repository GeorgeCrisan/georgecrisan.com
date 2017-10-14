let someAjaxData =  [{
  id:1,
  title:'Ciorba de burta',
  ingredients: ['1k de burta','legume','2 litir de apa'],
  description:'Cirba de la buna fiarta de dimineata'
},{
  id:2,
  title:'Ciorba de persioare',
  ingredients: ['orez','carne de vita','apa','legume'],
  description:'se face rar nu se fierbe de dimineata'
},{
  id:3,
  title:'Ciorba de fasole',
  ingredients: ['fasole ','apa ','niste carne ','condimente'],
  description:'cirba de fasole mai rar'
},{
  id:4,
  title:'Ciorba de oaie',
  ingredients: ['carne de oaie','legume',''],
  description:'se fierbe fasolea si gata supa'
}];



class App extends React.Component {
   render(){
     return (<div style={{fontSize:'55px',color:'#ffa500'}}>That is cool... maybe you will find a nice pair, comfortable one
     </div>);
   }
}


ReactDOM.render(<App />,document.getElementById('wrapper'));

