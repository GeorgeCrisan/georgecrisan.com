
//**Load the ReactBootstrap */
//https://codepen.io/GeorgeCrisan/pen/jwerxZ?editors=0010
// send some basic recipe items in local Storage
// Load Recipe Items or set default Recipe Items
/*var recipes = (typeof localStorage["recipeBook"] != "undefined") ? JSON.parse(localStorage["recipeBook"]) : [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
], globalTitle = "", globalIngredients = []; // Define global title and ingredients */

class RecipeBox extends React.Component {
	constructor(props){
		super(props);
		 this.state = {
       recipeStoragekey :'_grdp_recipes',
       recipes : []
     }//end of state
	}//end of constructor

  newRecipe(){
    let r = [{name:'New Recipe',ingredients:""}].concat(this.state.recipes);
      this.saveRecipes(r).bind(this);
  }
 

updateRecipe (index,name, ingredients){ 
   let r = this.state.recipe;
   r[index].name = name;
   r[index].ingredients = ingredients;
   this.saveRecipes(r);        
 }
 
  saveRecipes(recipes){
    localStorage.setItem(this.recipeStoragekey,JSON.stringify(recipes));
     
  }

 removeRecipe (index){
   let r = this.state.recipes;
   this.saveRecipes(r.slice(0,index).concat(r.slice(index + 1)));
    }

  ComponentDidMount(){
    let rec = localStorage.getItem(this.recipeStoragekey);
    if(rec)
      this.setState({recipes: JSON.parse(rec)});
  }  


 render(){
   let rows = [];
   if(this.state.recipes.length === 0){
       row.push(
         <div id='recipe-none' className='recipe panel panel-info'></div>

       )


   }
 }


}//end of recipe Box


ReactDOM.render(<RecipeBox />, document.getElementById('wrapper'));