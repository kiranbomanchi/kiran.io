(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(t,e,n){t.exports=n(60)},60:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(28),l=n.n(r),c=n(17),i=n(6),d=n(7),u=n(8),s=n(9),p=n(13),m=n(10),f=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todos.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todos,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:h},"X")))}}]),n}(a.Component),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},b=f,y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(b,{key:e.id,todos:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(a.Component);var v={background:"#0083c9",color:"#ffff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},g=function(){return o.a.createElement("div",null,o.a.createElement("header",{style:v},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{to:"/",style:E},"Home"),"|",o.a.createElement(p.b,{to:"/about",style:E},"About")))},j=n(31),k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component),O=n(32),x=n.n(O);var C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Application which allows you to note your day to task."))},S=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var n={id:4,title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[n])})},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;x.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(g,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:C}))))}}]),n}(a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ab4eb773.chunk.js.map