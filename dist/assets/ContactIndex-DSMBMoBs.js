import{_,o as l,c as d,w as b,v as w,a as i,p,b as h,t as u,F as y,r as x,d as f,e as C,f as L,g as z}from"./index-C4ZNvpNi.js";const g={data(){return{filterBy:{txt:""}}},methods:{onFilter(){this.$emit("filter",this.filterBy)}}},I=e=>(p("data-v-dd7bff05"),e=e(),h(),e),$={class:"contact-filter"},F=I(()=>i("p",null,"Filter",-1));function R(e,t,n,o,a,c){return l(),d("section",$,[F,b(i("input",{type:"text",onInput:t[0]||(t[0]=(...r)=>c.onFilter&&c.onFilter(...r)),"onUpdate:modelValue":t[1]||(t[1]=r=>a.filterBy.txt=r)},null,544),[[w,a.filterBy.txt]])])}const k=_(g,[["render",R],["__scopeId","data-v-dd7bff05"]]),B={props:{contact:{type:Object,required:!0}},methods:{removeContact(){this.$emit("remove",this.contact._id)}}},P={class:"contact-preview"};function S(e,t,n,o,a,c){return l(),d("div",P,[i("h2",null,u(n.contact.name),1),i("small",null,u(n.contact._id),1),i("p",null,u(n.contact.phone),1),i("p",null,u(n.contact.email),1),i("button",{onClick:t[0]||(t[0]=(...r)=>c.removeContact&&c.removeContact(...r))},"x")])}const j=_(B,[["render",S],["__scopeId","data-v-a863d398"]]),N={props:{contacts:{type:Array,required:!0}},methods:{onRemoveContact(e){this.$emit("remove",e)}},components:{ContactPreview:j}},M=e=>(p("data-v-2cc9084e"),e=e(),h(),e),q={class:"contact-list"},V=M(()=>i("h2",null,"Contact list:",-1));function D(e,t,n,o,a,c){const r=f("ContactPreview");return l(),d("section",q,[V,i("ul",null,[(l(!0),d(y,null,x(n.contacts,m=>(l(),d("li",{key:m._id},[C(r,{contact:m,onRemove:te=>c.onRemoveContact(m._id)},null,8,["contact","onRemove"])]))),128))])])}const E=_(N,[["render",D],["__scopeId","data-v-2cc9084e"]]),v={getContacts:H,getContactById:O,deleteContact:T,saveContact:U,getEmptyContact:W},s=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function G(e){return e.sort((t,n)=>t.name.toLocaleLowerCase()<n.name.toLocaleLowerCase()?-1:t.name.toLocaleLowerCase()>n.name.toLocaleLowerCase()?1:0)}function H(e=null){return new Promise((t,n)=>{var o=s;e&&e.term&&(o=K(e.term)),t(G(o))})}function O(e){return new Promise((t,n)=>{const o=s.find(a=>a._id===e);o?t(o):n(`Contact id ${e} not found!`)})}function T(e){return new Promise((t,n)=>{const o=s.findIndex(a=>a._id===e);o!==-1&&s.splice(o,1),t(s)})}function A(e){return new Promise((t,n)=>{const o=s.findIndex(a=>e._id===a._id);o!==-1&&(s[o]=e),t(e)})}function J(e){return new Promise((t,n)=>{e._id=Q(),s.push(e),t(e)})}function U(e){return e._id?A(e):J(e)}function W(){return{name:"",email:"",phone:""}}function K(e){return e=e.toLocaleLowerCase(),s.filter(t=>t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e))}function Q(e=10){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}const X={data(){return{contacts:null,filterBy:{txt:""}}},methods:{async removeContact(e){await v.deleteContact(e);const t=this.contacts.findIndex(n=>n._id===e);this.contacts.splice(t,1)},filterContacts(e){this.filterBy=e}},computed:{filteredContacts(){const e=new RegExp(this.filterBy.txt,"i");return this.contacts.filter(t=>e.test(t.name))}},async created(){this.contacts=await v.getContacts()},components:{ContactFilter:k,ContactList:E}},Y=e=>(p("data-v-a462e93c"),e=e(),h(),e),Z=Y(()=>i("h1",null,"Im the contact page",-1));function ee(e,t,n,o,a,c){const r=f("ContactFilter"),m=f("ContactList");return l(),d("main",null,[Z,C(r,{onFilter:c.filterContacts},null,8,["onFilter"]),a.contacts?(l(),L(m,{key:0,onRemove:c.removeContact,contacts:c.filteredContacts},null,8,["onRemove","contacts"])):z("",!0)])}const oe=_(X,[["render",ee],["__scopeId","data-v-a462e93c"]]);export{oe as default};
