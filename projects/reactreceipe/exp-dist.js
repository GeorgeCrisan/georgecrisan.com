"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function SearchBox(e){var t=function(t){e.handleFilter(t.target.value.toLowerCase())};return React.createElement("div",{className:"search"},React.createElement("input",{className:"form-control",type:"text",placeholder:"Search for a recipe...",onChange:t}))}function RecipeItem(e){var t=function(t){var a=t.target.dataset.op,n=$(t.target).closest(".list-group-item").data("id");e.handleMainIconClick(a,n)};return React.createElement("li",{className:"list-group-item",onClick:t,"data-id":e.recipe.id},React.createElement("span",null,e.recipe.title),React.createElement("span",{className:"pull-right btn-spacer"},React.createElement("i",{className:"fa fa-remove fa-2x","aria-hidden":"true","data-op":"delete"})),React.createElement("span",{className:"pull-right btn-spacer"},React.createElement("i",{className:"fa fa-edit fa-2x","aria-hidden":"true","data-op":"edit"})),React.createElement("span",{className:"pull-right btn-spacer"},React.createElement("i",{className:"fa fa-address-card fa-2x","aria-hidden":"true","data-op":"view"})))}function RecipeList(e){return React.createElement("ul",{className:"recipe-list list-group"},e.recipes.map(function(t){return React.createElement(RecipeItem,{key:t.id,recipe:t,handleMainIconClick:e.handleMainIconClick})}))}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),DataStorage=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"resetData",value:function(){var e=this.initialDate();return this.saveData(e),e}},{key:"readData",value:function(){var t=localStorage[e.DATA_KEY];return t&&t.length?JSON.parse(t):this.initialDate()}},{key:"saveData",value:function(t){localStorage.setItem(e.DATA_KEY,JSON.stringify(t))}},{key:"initialDate",value:function(){return[{id:2,title:"Beef Soup",description:"The Beef Soup is a favorite in Jamaica for Saturday soup. It is a hearty soup dish that features beef, carrots, turnips, pumpkin, cho cho (chayote squash), and yam. Often served with with flour dumplings.",ingredients:["2 qt. water","1 lb. soup bones or stewing steak","1/2 lb. carrots, cubed","1/4 lb. turnips, cubed","1 lb. pumpkin, cut up","1/2 lb. cho cho, cut up","1 lb. yellow yam, cut up","1 spring thyme","2 stalks escallion","1 tablespoon salt"]},{id:3,title:"Conch Salad – Caribbean Style",description:"Conch salad is one of the most delicious signature dishes of the Bahamas. Freshly diced conch meat, vegetables, citrus juices, spices & hot pepper produces an explosion of flavours that is delightful to the palate and eyes. The conch is a large-sized sea snail that lives in a spiral pink-white shell. You will find different variations of this salad throughout the Caribbean islands. Learn how to make your own, try my Conch Salad Recipe.",ingredients:["1 pound fresh conch diced","2 tablespoons extra-virgin olive oil","1 1/2 cups chopped tomato","1 medium chopped onion","1 cup chopped green bell pepper","1 cup chopped celery","1/2 cup fresh orange juice","1/2 cup fresh lime juice","1 1/2 teaspoons minced Scotch bonnet","1 teaspoon salt","1/2 teaspoon black pepper"]},{id:5,title:"Cheesy Baked Mash Potatoes",description:"This baked, mash potatoes with its creamy, cheesy middle and perfect crunchy top will have you singing and swooning ’cause comfort food has never tasted so good!",ingredients:["2 lb. Yukon potatoes peeled and cut into 1-inch pieces","2 Tbsp. butter","1/2 cup whipping cream","1/4 cup mozzarella cheese","1/2 cup parmesan cheese","2 Tbsp. Panko breadcrumbs/ dry breadcrumbs","1 tsp. dried parsley","Salt"]},{id:7,title:"Jamaican Chocolate Stout Cake",description:"Jamaicans have a proud history of using Guinness Stout in a variety of ways, the most famous being Guinness Punch. But one of the best uses of the rich, dark beverage is as an ingredient in chocolate cake. Try the following cake recipe for a seriously intense chocolate experience. And to complete your Jamaican Guinness pleasures, make up a batch of Jamaican.",ingredients:["1 cup Guinness Stout","1 stick plus 2 T unsalted butter","1/4 cup unsweetened cocoa","2 cups superfine sugar","3/4 cups sour cream","2 large eggs","1 Table vanilla extract","2 cups all-purpose flour","2 1/2 tsp baking soda","Butter to grease the pan"]}]}}]),e}();DataStorage.DATA_KEY="coca";var ModalWrapper=function(e){var t=function(t){t.target===t.currentTarget&&e.hideModal()},a=function(){e.onOk(),e.hideModal()},n=e.showOk?React.createElement("button",{onClick:a,disabled:e.okDisabled},e.okText):null;return React.createElement("div",{className:"overlay"},React.createElement("div",{onClick:t,className:"content"},React.createElement("header",null,React.createElement("h1",null,e.title)),e.children,n))};ModalWrapper.propTypes={title:PropTypes.string,showOk:PropTypes.bool,okText:PropTypes.string,okDisabled:PropTypes.bool,width:PropTypes.number,style:PropTypes.object,children:PropTypes.oneOfType([PropTypes.array,PropTypes.element,PropTypes.string]).isRequired,hideModal:PropTypes.func,onOk:PropTypes.func},ModalWrapper.defaultProps={title:"",showOk:!0,okText:"OK",okDisabled:!1,width:400,onOk:function(){}};var ModalSelector=function(e){switch(e.currentModal){case"edit":case"add":return React.createElement(ChangeDataModal,e);case"view":return React.createElement(ViewDataModal,e);default:return null}},ChangeDataModal=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.recipe=a.props.recipe,a.recipe&&(a.recipe.ingredientsText=a.recipe.ingredients.join("\n")),a.onClose=a.onClose.bind(a),a.onSave=a.onSave.bind(a),a}return _inherits(t,e),_createClass(t,[{key:"onSave",value:function(){var e=this.recipe;e.title=this.myTextInput.value,e.description=this.myDescriptionInput.value,e.ingredients=this.myIngredientsInput.value.split("\n"),e.title.trim().length&&this.props.saveModal(e),this.props.hideModal()}},{key:"createNewRecipe",value:function(){this.recipe={id:+Date.now(),title:"",description:"",ingredients:""}}},{key:"onClose",value:function(){this.props.hideModal()}},{key:"render",value:function(){var e=this;return this.recipe||this.createNewRecipe(),React.createElement("div",{className:""},React.createElement(ModalWrapper,_extends({},this.props,{width:400,showOk:!1}),React.createElement("form",null,React.createElement("label",null,"Title"),React.createElement("input",{className:"form-control",type:"text",placeholder:"Enter your title...",required:!0,ref:function(t){return e.myTextInput=t},defaultValue:this.recipe.title}),React.createElement("label",null,"Description"),React.createElement("textarea",{className:"form-control",type:"text",rows:"4",placeholder:"Enter the recipe description",required:!0,ref:function(t){return e.myDescriptionInput=t},defaultValue:this.recipe.description}),React.createElement("label",null,"Ingredients"),React.createElement("textarea",{className:"form-control",type:"text",rows:"8",placeholder:"Enter your ingredientsm, one per line...",required:!0,ref:function(t){return e.myIngredientsInput=t},defaultValue:this.recipe.ingredientsText})),React.createElement("div",null,React.createElement("hr",null),React.createElement("div",{className:"pull-right"},React.createElement("button",{onClick:this.onSave,className:"btn btn-spacer btn-primary"},"Save"),React.createElement("button",{onClick:this.onClose,className:"btn btn-spacer"},"Close")))))}}]),t}(React.Component),ViewDataModal=function(e){var t=1,a=function(){e.hideModal()};return React.createElement(ModalWrapper,_extends({},e,{title:e.recipe.title,width:400,showOk:!1}),React.createElement("div",null,React.createElement("p",null,e.recipe.description),React.createElement("h2",{className:"lead"},"Ingredients"),e.recipe.ingredients.map(function(e){return React.createElement("div",{key:t++},e)}),React.createElement("hr",null),React.createElement("div",{className:"pull-right"},React.createElement("button",{onClick:a,className:"btn"},"Close"))))},App=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.dataStorage=new DataStorage,a.state={allrecipes:[],recipes:[],currentModal:null,selectedRecipe:null},a.handleMainIconClick=a.handleMainIconClick.bind(a),a.handleAddIconClick=a.handleAddIconClick.bind(a),a.handleResetClick=a.handleResetClick.bind(a),a.handleFilter=a.handleFilter.bind(a),a.handleCloseClick=a.handleCloseClick.bind(a),a.handleSaveClick=a.handleSaveClick.bind(a),a}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){var e=this.dataStorage.readData();this.setState({allrecipes:e,recipes:e})}},{key:"deleteData",value:function(e){var t=this.state.allrecipes,a=t.findIndex(function(t){return t.id==e});t.splice(a,1),this.setState({allrecipes:t}),this.dataStorage.saveData(t)}},{key:"setSelectedRecipe",value:function(e,t){var a=this.state.recipes.findIndex(function(e){return e.id==t});switch(this.setState({selectedRecipe:this.state.recipes[a],currentModal:e}),e){case"delete":this.deleteData(t)}}},{key:"handleCloseClick",value:function(){this.setState({currentModal:null})}},{key:"handleResetClick",value:function(){var e=this.dataStorage.resetData();this.setState({allrecipes:e,recipes:e})}},{key:"handleAddIconClick",value:function(){this.setSelectedRecipe("add",0)}},{key:"handleMainIconClick",value:function(e,t){this.setSelectedRecipe(e,t)}},{key:"handleSaveClick",value:function(e){var t=this.state.allrecipes,a=t.findIndex(function(t){return t.id==e.id});-1===a?t.push(e):t[a]=e,this.setState({allrecipes:t}),this.dataStorage.saveData(t)}},{key:"handleFilter",value:function(e){var t=this.state.allrecipes;t=t.filter(function(t){return-1!==t.title.toLowerCase().search(e)}),this.setState({recipes:t})}},{key:"render",value:function(){return React.createElement("div",{className:"container"},React.createElement("div",{className:"app board-frame"},React.createElement(ModalSelector,{currentModal:this.state.currentModal,recipe:this.state.selectedRecipe,hideModal:this.handleCloseClick,saveModal:this.handleSaveClick}),React.createElement("h1",null,"Recipe Box"),React.createElement(SearchBox,{recipes:this.state.recipes,handleFilter:this.handleFilter}),React.createElement("div",null,React.createElement("button",{className:"pull-right btn btn-spacer",onClick:this.handleResetClick},React.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})," Reset"),React.createElement("button",{className:"pull-right btn btn-primary",onClick:this.handleAddIconClick},React.createElement("i",{className:"fa fa-file-o","aria-hidden":"true"})," New Recipe")),React.createElement(RecipeList,{recipes:this.state.recipes,handleMainIconClick:this.handleMainIconClick}),React.createElement("div",{className:"text-center"},"Powered by ",React.createElement("a",{href:"http://www.coderstool.com",target:"_blank"},"CodersTool"))))}}]),t}(React.Component);ReactDOM.render(React.createElement(App,null),document.getElementById("wrapper"));