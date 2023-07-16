(function(){"use strict";var t={5635:function(t,e,n){n.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("button",{staticClass:"button",class:{button_fluid:t.fluid},on:{click:t.onClick}},[t._t("default",(function(){return[t._v("Текст на кнопке")]}))],2)},o=[],s={name:"VButton",props:{fluid:{type:Boolean,default:!1}},methods:{onClick(t){this.$emit("click",t)}}},r=s,i=n(1001),l=(0,i.Z)(r,a,o,!1,null,null,null),c=l.exports},4781:function(t,e,n){var a=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-manager",attrs:{id:"app"}},[e("div",{staticClass:"task-manager__wrapper"},[e("header",{staticClass:"task-manager__header"},[e("h1",{staticClass:"task-manager__title"},[t._v("Task manager")]),e("VButton",{on:{click:t.openModal}},[t._v("Add task")]),e("CreateTask",{attrs:{show:t.isModalOpen},on:{close:t.closeModal,add:t.addTask}})],1),e("div",{staticClass:"task-manager__content"},[t.tasks.length?e("div",{staticClass:"task-manager__items"},t._l(t.tasks,(function(n){return e("VTask",{key:n.id,attrs:{taskId:n.id,dueDate:n.dueDate,completed:n.completed,title:n.title,description:n.description},on:{remove:t.deleteTask,completed:t.updateTaskCompletion,edit:t.editTask}})})),1):e("div",{staticClass:"task-manager__empty"},[t._v("List is empty")])]),e("footer",{staticClass:"task-manager__footer"},[e("div",{staticClass:"task-manager__count"},[e("span",{staticClass:"task-manager__completed"},[t._v(t._s(t.completedTaskCount))]),t._v(" / "+t._s(t.tasks.length)+" ")])])])])},s=[],r=(n(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"task",class:{task_completed:t.modelCompleted},on:{click:t.openModal}},[e("VCheckbox",{staticClass:"task__checkbox",on:{change:t.onChange},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.modelCompleted,callback:function(e){t.modelCompleted=e},expression:"modelCompleted"}}),e("div",{staticClass:"task__details"},[e("h3",{staticClass:"task__title",attrs:{title:t.title}},[t._v(t._s(t.title))]),e("p",{staticClass:"task__description",attrs:{title:t.description}},[t._v(t._s(t.description))])]),e("div",{staticClass:"task__date"},[e("span",[t._v("Due date:")]),t._v(" "+t._s(t.formattedDate))]),e("div",{staticClass:"task__delete",on:{click:function(e){return e.stopPropagation(),t.onRemove.apply(null,arguments)}}}),e("EditTask",{attrs:{show:t.isModalOpen,title:t.title,description:t.description,dueDate:t.dueDate},on:{close:t.closeModal,edit:t.editTask}})],1)}),i=[],l=function(){var t=this,e=t._self._c;return e("label",{staticClass:"checkbox"},[e("input",{staticClass:"checkbox__input",attrs:{type:"checkbox"},domProps:{value:t.value,checked:t.checked},on:{change:t.onChange}})])},c=[],d={name:"VCheckbox",model:{prop:"checked",event:"change"},props:{value:[String,Number],checked:{type:Boolean,default:!1}},methods:{onChange(t){this.$emit("change",t.target.checked,this.value)}}},u=d,p=n(1001),f=(0,p.Z)(u,l,c,!1,null,null,null),h=f.exports;const m=()=>Promise.all([n.e(15),n.e(659)]).then(n.bind(n,8211));var k={components:{VCheckbox:h,EditTask:m},name:"VTask",props:{taskId:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},completed:{type:Boolean,required:!0},dueDate:{type:[String,Date],required:!0}},data(){return{modelCompleted:this.completed,isModalOpen:!1}},computed:{formattedDate(){const t=new Date(this.dueDate).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g," ");return t}},methods:{onRemove(){this.$emit("remove",this.taskId)},onChange(t){this.$emit("completed",this.taskId,t)},editTask(t){const e={id:this.taskId,completed:this.completed,...t};this.$emit("edit",e),this.closeModal()},closeModal(){this.isModalOpen=!1},openModal(){this.isModalOpen=!0}}},v=k,g=(0,p.Z)(v,r,i,!1,null,"2ca9eccb",null),_=g.exports,b=n(5635);const C=()=>Promise.all([n.e(15),n.e(30)]).then(n.bind(n,3191));var y={components:{CreateTask:C,VButton:b.Z,VTask:_},name:"App",data(){return{tasks:[],isModalOpen:!1}},computed:{completedTaskCount(){return this.tasks.filter((t=>t.completed)).length}},mounted(){this.fetchTasksFromLocalStorage()},methods:{fetchTasksFromLocalStorage(){try{const t=JSON.parse(localStorage.getItem("tasks"))||[];this.tasks=t}catch(t){console.error("Error fetching tasks from localStorage:",t)}},saveTasksToLocalStorage(){try{localStorage.setItem("tasks",JSON.stringify(this.tasks))}catch(t){console.error("Error saving tasks to localStorage:",t)}},addTask(t){this.tasks.push(t),this.saveTasksToLocalStorage(),this.closeModal()},deleteTask(t){this.tasks=this.tasks.filter((e=>e.id!==t)),this.saveTasksToLocalStorage()},editTask(t){const e=this.tasks.findIndex((e=>e.id===t.id));-1!==e&&(this.$set(this.tasks,e,{...t}),this.saveTasksToLocalStorage())},updateTaskCompletion(t,e){const n=this.tasks.find((e=>e.id===t));n&&(n.completed=e,this.saveTasksToLocalStorage())},closeModal(){this.isModalOpen=!1},openModal(){this.isModalOpen=!0}}},T=y,S=(0,p.Z)(T,o,s,!1,null,null,null),O=S.exports,M=n(4951);a.ZP.use(M.ZP),a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(O)}).$mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],s=t[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{15:"eb38f981",30:"3fb8b21d",659:"22b2d3c9"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{30:"0b80a7c0",659:"183dfd7f"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task-manager:";n.l=function(a,o,s,r){if(t[a])t[a].push(o);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+s){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[o];var p=function(e,n){i.onerror=i.onload=null,clearTimeout(f);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/task-manager/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,a,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode&&s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=r,s.href=e,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var r=n.miniCssF(a),i=n.p+r;if(e(r,i))return o();t(a,i,null,o,s)}))},o={143:0};n.f.miniCss=function(t,e){var n={30:1,659:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=s);var r=n.p+n.u(e),i=new Error,l=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,o[1](i)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],i=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var d=l(n)}for(e&&e(a);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},a=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4781)}));a=n.O(a)})();
//# sourceMappingURL=app.970d4528.js.map