"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),DataStorage=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"initialData",value:function(){return[{id:1,title:"Ciorba de burta",ingredients:["1k de burta","legume","2 litir de apa"],description:"Cirba de la buna fiarta de dimineata"},{id:2,title:"Ciorba de persioare",ingredients:["orez","carne de vita","apa","legume"],description:"se face rar nu se fierbe de dimineata"},{id:3,title:"Ciorba de fasole",ingredients:["fasole ","apa ","niste carne ","condimente"],description:"cirba de fasole mai rar"},{id:4,title:"Ciorba de oaie",ingredients:["carne de oaie","legume",""],description:"se fierbe fasolea si gata supa"}]}},{key:"saveData",value:function(a){localStorage.setItem(e.DATA_KEY,JSON.stringify(a))}},{key:"resetData",value:function(){var e=this.initialData();return saveData(e),e}},{key:"readData",value:function(){var a=JSON.parse(localStorage.getItem(e.DATA_KEY));return a&&a.length?a:this.initialData()}}]),e}();DataStorage.DATA_KEY="george_recipes";var ModalWrapper=function(e){var a=function(a){a.target===a.currentTarget&&e.hideModal()},t=function(){e.onOk(),e.hideModal()},r=e.showOk?React.createElement("button",{onClick:t,disabled:e.okDispabled}," ",e.okText," "):null;return React.createElement("div",{className:"overlay"},React.createElement("div",{onClick:a,className:"content"},React.createElement("header",null,React.createElement("h1",null,e.title)),e.children,r))};ModalWrapper.PropTypes={},ReactDOM.render(React.createElement(App,null),document.getElementById("wrapper"));