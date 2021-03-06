
class DataStorage {

   static DATA_KEY = 'coca';
  resetData() {
    let recipes = this.initialDate();
    this.saveData(recipes);
    return recipes;
  }

  readData() {
    let data = localStorage[DataStorage.DATA_KEY];
    return (data && data.length) ? JSON.parse(data) :
      this.initialDate();
  }

  saveData(recipes) {
    //localStorage[DataStorage.DATA_KEY] = JSON.stringify(recipes);
    localStorage.setItem(DataStorage.DATA_KEY,JSON.stringify(recipes));
  }

  initialDate() {
    return [{
      id: 2,
      title: "Beef Soup",
      description: "The Beef Soup is a favorite in Jamaica for Saturday soup. It is a hearty soup dish that features beef, carrots, turnips, pumpkin, cho cho (chayote squash), and yam. Often served with with flour dumplings.",
      ingredients: ["2 qt. water",
        "1 lb. soup bones or stewing steak",
        "1/2 lb. carrots, cubed",
        "1/4 lb. turnips, cubed",
        "1 lb. pumpkin, cut up",
        "1/2 lb. cho cho, cut up",
        "1 lb. yellow yam, cut up",
        "1 spring thyme",
        "2 stalks escallion",
        "1 tablespoon salt"
      ]
    }, {
      id: 3,
      title: "Conch Salad – Caribbean Style",
      description: "Conch salad is one of the most delicious signature dishes of the Bahamas. Freshly diced conch meat, vegetables, citrus juices, spices & hot pepper produces an explosion of flavours that is delightful to the palate and eyes. The conch is a large-sized sea snail that lives in a spiral pink-white shell. You will find different variations of this salad throughout the Caribbean islands. Learn how to make your own, try my Conch Salad Recipe.",
      ingredients: ["1 pound fresh conch diced",
        "2 tablespoons extra-virgin olive oil",
        "1 1/2 cups chopped tomato",
        "1 medium chopped onion",
        "1 cup chopped green bell pepper",
        "1 cup chopped celery",
        "1/2 cup fresh orange juice",
        "1/2 cup fresh lime juice",
        "1 1/2 teaspoons minced Scotch bonnet",
        "1 teaspoon salt",
        "1/2 teaspoon black pepper"
      ]
    }, {
      id: 5,
      title: "Cheesy Baked Mash Potatoes",
      description: "This baked, mash potatoes with its creamy, cheesy middle and perfect crunchy top will have you singing and swooning ’cause comfort food has never tasted so good!",
      ingredients: ["2 lb. Yukon potatoes peeled and cut into 1-inch pieces",
        "2 Tbsp. butter",
        "1/2 cup whipping cream",
        "1/4 cup mozzarella cheese",
        "1/2 cup parmesan cheese",
        "2 Tbsp. Panko breadcrumbs/ dry breadcrumbs",
        "1 tsp. dried parsley",
        "Salt"
      ]
    }, {
      id: 7,
      title: "Jamaican Chocolate Stout Cake",
      description: "Jamaicans have a proud history of using Guinness Stout in a variety of ways, the most famous being Guinness Punch. But one of the best uses of the rich, dark beverage is as an ingredient in chocolate cake. Try the following cake recipe for a seriously intense chocolate experience. And to complete your Jamaican Guinness pleasures, make up a batch of Jamaican.",
      ingredients: ["1 cup Guinness Stout",
        "1 stick plus 2 T unsalted butter",
        "1/4 cup unsweetened cocoa",
        "2 cups superfine sugar",
        "3/4 cups sour cream",
        "2 large eggs",
        "1 Table vanilla extract",
        "2 cups all-purpose flour",
        "2 1/2 tsp baking soda",
        "Butter to grease the pan",
      ]
    }]
  }
}


//--
const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk ?
    (
      <button
        onClick={onOk}
        disabled={props.okDisabled}
      >
        {props.okText}
      </button>
    ) : null;

  return (
    <div className="overlay">
    <div onClick={handleBackgroundClick} className="content" >
      <header>
        <h1>{props.title}</h1>
      </header>

      {props.children}

      {okButton}
    </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  // props
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
   PropTypes.string,
  ]).isRequired,

  // methods
  hideModal: PropTypes.func,
  onOk: PropTypes.func,
};

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
};
//--

const ModalSelector = props => {
  //console.log(props);
  switch (props.currentModal) {
    case "edit":
    case "add":
      return <ChangeDataModal {...props} />;
    case "view":
      return <ViewDataModal {...props} />;
    default:
      return null;
  }
}

class ChangeDataModal extends React.Component {
  constructor(props) {
    super(props);
    this.recipe = this.props.recipe;
    if (this.recipe) {
      //console.log(this.recipe.ingredients);
      this.recipe.ingredientsText = this.recipe.ingredients.join('\n');
    }
    
    this.onClose = this.onClose.bind(this);
    this.onSave = this.onSave.bind(this);
  };

  onSave(provider) {
    //console.log(provider);
    let recipe = this.recipe;
    recipe.title = this.myTextInput.value;
    recipe.description = this.myDescriptionInput.value;
    recipe.ingredients = this.myIngredientsInput.value.split('\n');

    // Only save item with data 
    if (recipe.title.trim().length) {
      this.props.saveModal(recipe);
    }
    this.props.hideModal();
  };

  createNewRecipe() {
    this.recipe = {
      id: +Date.now(),
      title: "",
      description: "",
      ingredients: ""
    };
  }

  onClose(provider) {
    this.props.hideModal();
  };

  render() {

    if (!this.recipe) {
      this.createNewRecipe();
    }

    return (<div className="">
                 <ModalWrapper
      {...this.props}
      width={400}
      showOk={false}
    >       
      <form>
      <label>Title</label>
      <input className="form-control" type="text" placeholder="Enter your title..." 
         required          
         ref={(ref) => this.myTextInput = ref} 
         defaultValue = {this.recipe.title}
        />
     
          <label>Description</label>
     <textarea className="form-control" type="text" rows="4" 
       placeholder="Enter the recipe description"  
       required 
       ref={(ref) => this.myDescriptionInput = ref}  
       defaultValue={this.recipe.description}  />
                   
     <label>Ingredients</label>
     <textarea className="form-control" type="text" rows="8" 
       placeholder="Enter your ingredientsm, one per line..."
       required 
       ref={(ref) => this.myIngredientsInput = ref}  
       defaultValue={this.recipe.ingredientsText}  />
      </form>
      <div>
        <hr />
        <div className="pull-right">
          <button onClick={this.onSave} className="btn btn-spacer btn-primary">Save</button>
          <button onClick={this.onClose} className="btn btn-spacer">Close</button>
        </div>
      </div>          
     
    </ModalWrapper>

            </div>);
  }
}

const ViewDataModal = props => {
  const viewData = provider => {
    props.hideModal();
    props.viewData(provider);
  };
  
  let id = 1;

  const onClose = provider => {
    props.hideModal();
  };

  //console.log(props.recipe);
  return (
    <ModalWrapper
      {...props}
      title={props.recipe.title}
      width={400}
      showOk={false}
    > 
     <div>
     <p>{props.recipe.description}</p>
     <h2 className="lead">Ingredients</h2>  
       {props.recipe.ingredients.map(ingredient =>
               <div key={id++}>{ingredient}</div>
       )}
        <hr />
        <div className="pull-right">
          <button onClick={onClose} className="btn">Close</button>
        </div>
      </div>          
     
    </ModalWrapper>
  );
};

function SearchBox(props) {
  const filterList = event => {
    props.handleFilter(event.target.value.toLowerCase());
  }

  return (<div className="search">
           <input className="form-control" type="text" placeholder="Search for a recipe..."
           onChange={filterList}  />
          </div>);
}

function RecipeItem(props) {
  const onMainIconClick = (event, provider) => {
    const op = event.target.dataset.op;
    const id = $(event.target).closest('.list-group-item').data('id');
    props.handleMainIconClick(op, id);
  };

  return (<li className="list-group-item" onClick={onMainIconClick} data-id={props.recipe.id}>
          <span>{props.recipe.title}</span>
          <span className="pull-right btn-spacer"><i className="fa fa-remove fa-2x" aria-hidden="true" data-op="delete"></i></span>
          <span className="pull-right btn-spacer"><i className="fa fa-edit fa-2x" aria-hidden="true" data-op="edit"></i></span>
          <span className="pull-right btn-spacer"><i className="fa fa-address-card fa-2x" aria-hidden="true" data-op="view"></i></span>
          </li>);
}

function RecipeList(props) {
  return (<ul className="recipe-list list-group">      
            {props.recipes.map(recipe =>
               <RecipeItem key={recipe.id} 
                  recipe={recipe}
                  handleMainIconClick={props.handleMainIconClick} 
               />
            )}      
          </ul>);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dataStorage = new DataStorage();
    this.state = {
      allrecipes: [],
      recipes: [],
      currentModal: null,
      selectedRecipe: null
    };
    this.handleMainIconClick = this.handleMainIconClick.bind(this);
    this.handleAddIconClick = this.handleAddIconClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  };

  componentDidMount() {
    let getData = this.dataStorage.readData();

    this.setState({
      allrecipes: getData,
      recipes: getData
    });
  }

  deleteData(id) {
    //console.log("deleteData:" + this.state.selectedId);
    //  event.preventDefault();
    let allrecipes = this.state.allrecipes;
    const index = allrecipes.findIndex(recipe => recipe.id == id);
    //console.log('index:' + index);
    allrecipes.splice(index, 1);

    this.setState({
      allrecipes: allrecipes
    });
    //console.log(recipes);
    this.dataStorage.saveData(allrecipes);

  }

  setSelectedRecipe(operation, id) {
    const index = this.state.recipes.findIndex(recipe => recipe.id == id);
    //console.log("setSelectedRecipe: " + operation + ' = ' + id);
    //console.log(this.state.recipes[index]);

    this.setState({
      selectedRecipe: this.state.recipes[index],
      currentModal: operation
    });

    switch (operation) {

      case "delete":
        this.deleteData(id)
        break;
    }
  }

  handleCloseClick(event) {
    //console.log("handleCloseClick");
    this.setState({
      currentModal: null
    });
  }

  handleResetClick() {
    let getData = this.dataStorage.resetData();

    this.setState({
      allrecipes: getData,
      recipes: getData
    });
  }

  handleAddIconClick() {
    this.setSelectedRecipe('add', 0);
  }

  handleMainIconClick(operation, id) {
    this.setSelectedRecipe(operation, id);
  }

  handleSaveClick(_recipe) {
    //console.log('handleSaveClick');
    //console.log(_recipe);
    let allrecipes = this.state.allrecipes;
    const index = allrecipes.findIndex(recipe => recipe.id == _recipe.id);
    if (index === -1) {
      allrecipes.push(_recipe);
    } else {
      allrecipes[index] = _recipe;
    }
    this.setState({
      allrecipes: allrecipes
    });
    this.dataStorage.saveData(allrecipes);
  }

  handleFilter(term) {
    var updatedList = this.state.allrecipes;
    updatedList = updatedList.filter(function(item) {
      return item.title.toLowerCase().search(term) !== -1;
    });
    this.setState({
      recipes: updatedList
    });
  }

  render() {
    return (<div className="container">
              <div className="app board-frame">
                <ModalSelector  currentModal={this.state.currentModal} 
                  recipe={this.state.selectedRecipe}
                  hideModal={this.handleCloseClick} 
                  saveModal={this.handleSaveClick} 
                />
                
                <h1>Recipe Box</h1>
                <SearchBox recipes={this.state.recipes}
                           handleFilter={this.handleFilter}
                />
                <div>
                  <button className="pull-right btn btn-spacer" onClick={this.handleResetClick}><i className="fa fa-refresh" aria-hidden="true"></i> Reset</button>
                  <button className="pull-right btn btn-primary" onClick={this.handleAddIconClick}><i className="fa fa-file-o" aria-hidden="true"></i> New Recipe</button>
                </div>
                <RecipeList recipes={this.state.recipes} 
                            handleMainIconClick={this.handleMainIconClick} 
                 />
        <div className="text-center">Powered by <a href="http://www.coderstool.com" target="_blank">CodersTool</a></div>
              </div>
            </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("wrapper")
);