class DataStorage extends React.Component {

     constructor(props){
         super(props);
         this.DATA_KEY = 'george_recipes';
     } // end of constructor

         initialData() {
           return [{
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

         }// end of inital Data
     
         saveData(element){
             localStorage.setItem(this.DATA_KEY,(JSON.stringify(element)));
         } //end of save data... query localStroatge and via setItem method
         // stringify json element as second argument , first argument is the data_key to access
         // into local storage

         readData(){
           let data = localStorage.getItem(this.DATA_KEY);
           return (data && data.length) ? JSON.parse(data) : this.initialData();
         }

         resetData(){
             let recipes = this.initialData();
             this.saveData(recipes);
             return recipes;
         }

}// end of DataStorage

const ModalWrapper = (props) =>{

  const hanldeBackgroundClick = (e) => {

    if(e.target === e.currentTarget)

       props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  }

   const okButton = props.showOk ? (<button onClick={onOk} disabled={props.okDisabled} >{props.okText }</button>) : null;

   return(
       <div className='overlay'>
         <div onClick={hanldeBackgroundClick} className={content}>
           <header>
             <h1>  {props.title}</h1>
           </header>
            {props.children}
            {okButton}
          </div>
       </div>
   );
};//end of Modal Wrapper 

ModalWrapper.prototypes = {
   title: PropTypes.string,
   showOk: PropTypes.bool,
   okText: PropTypes.string,
   okDisabled: PropTypes.bool,
   width: PropTypes.number,
   style: PropTypes.object,
   children: PropTypes.oneOfType([
     PropTypes.array,
     PropTypes.element,
     PropTypes.sting
   ]).isRequired,
   hideModal:PropTypes.func,
   onOk: PropTypes.func

};

ModalWrapper.defaultProps = {
   title: '',
   showOk: true,
   okText: 'Ok',
   okDisabled: false,
   width: 400,
   onOk: () => {}
};


//--
/*const ModalWrapper = props => {
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
  title: React.PropTypes.string,
  showOk: React.PropTypes.bool,
  okText: React.PropTypes.string,
  okDisabled: React.PropTypes.bool,
  width: React.PropTypes.number,
  style: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
    React.PropTypes.string,
  ]).isRequired,

  // methods
  hideModal: React.PropTypes.func,
  onOk: React.PropTypes.func,
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

*/
ReactDOM.render(<App />, 
                document.getElementById('wrapper'));
   
   
