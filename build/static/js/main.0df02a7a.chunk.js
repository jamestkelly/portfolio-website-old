(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,t,a){},59:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(20),i=a.n(l),o=(a(59),a(24)),c=a(25),r=a(30),d=a(28),m=a(21),h=a(6),b=a(15),j=a(22),u=a(54),p=a(13),g=a(9),x=a(53),f=a(26),O=a.p+"static/media/programming.37e26f5c.mp4",y=a.p+"static/media/programming.6769bdab.webm",v=(a(40),a(1));var w=function(e){return Object(v.jsx)(b.a,{fluid:!0,children:Object(v.jsxs)(p.a,{style:{height:"100%"},children:[Object(v.jsxs)(g.a,{className:"landing-left-column",xs:{span:12,order:1},sm:{span:12,order:1},md:{span:6,order:1},children:[Object(v.jsx)("h1",{className:"px-md-3 font-weight-bold",style:{marginTop:50},children:"Hello there!"}),Object(v.jsx)("hr",{className:"pl-1 align-items-start",style:{color:"black",backgroundColor:"black",height:5,marginLeft:20,width:30}}),Object(v.jsx)("h3",{className:"pl-4",children:"My name is Jim, welcome to my portfolio website! I believe in creating friendly, helpful, and easy-to-use programs."}),Object(v.jsxs)("h5",{className:"py-md-5 px-md-4",children:["I'm an"," ",Object(v.jsx)(x.a,{loop:1/0,wrapper:"b",steps:["undergraduate software engineer",1e3,"aspiring full stack developer",1e3,"eager learner",1e3,"academically motivated full-time student at QUT",500]})]}),Object(v.jsx)("h5",{className:"px-4",children:"I like to build websites, create progressive web apps (PWA), develop my skills in software development, web & application design, and cooking, and occasionally write! I've gained experience ranging from embedded systems within my engineering minor, to developing my own PWA 'is-my-coffee-cold', an application to tell you how long until your coffee goes cold given your location's temperature."}),Object(v.jsx)("h3",{className:"pt-5 pb-2 px-5",children:"Want to see my resume?"}),Object(v.jsx)("a",{href:"https://github.com/jamestkelly/resume/blob/main/main.pdf",children:Object(v.jsx)(f.a,{className:"pt-1 pb-2 ml-5",style:{backgroundColor:"black",color:"white",fontSize:"20px",padding:"10px 60px",borderRadius:"5px",outline:"none",outlineColor:"black",outlineOffset:"none",margin:"10px 0px",cursor:"pointer"},children:"Take me there!"})}),Object(v.jsx)("p",{className:"pt-4 pb-2 px-3 font-weight-bold",children:"To find out more about me, navigate to the About page. Or if you'd like to get in touch, send me an email from the Contact page."})]}),Object(v.jsx)(g.a,{xs:{span:12,order:2},sm:{span:12,order:2},md:{span:6,order:2},children:Object(v.jsxs)("video",{autoPlay:!0,muted:!0,loop:!0,style:{position:"absolute",width:"100%",height:"100%",left:"50%",top:"50%",objectFit:"fill",transform:"translate(-50%, -50%)",zIndex:"-1"},children:[Object(v.jsx)("source",{src:O,type:"video/mp4"}),Object(v.jsx)("source",{src:y,type:"video/webm"})]})})]})})};var k=function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{fluid:!0,children:[Object(v.jsx)(p.a,{className:"justify-content-center",children:Object(v.jsx)(g.a,{md:6,children:Object(v.jsx)("h1",{className:"py-4 display-2 font-weight-bolder",children:"About Me"})})}),Object(v.jsx)(p.a,{className:"justify-content-center",children:Object(v.jsxs)(g.a,{md:6,children:[Object(v.jsx)("p",{children:"Hello! My name is Jim Tran Kelly. I'm currently a full-time student in my final year of my undergraduate degree in a Bachelor's of Information Technology (Computer Science) at the Queensland University of Technology (QUT). I've also gained experience working as an undergraduate software engineer, developing progressive web applications (PWA) using Angular & TypeScript."}),Object(v.jsxs)("p",{children:["That's not all though! I've also worked on developing my skills in my my personal time by working on projects, including my personal portfolio website with ReactJS, and ",Object(v.jsx)("a",{href:"https://github.com/jamestkelly/is-my-coffee-cold",children:"'is-my-coffee-cold'"}),","," ","a PWA written using Ionic Capacitor & TypeScript implementing CRUD through Firebase and applying the modified Euler method to Newton's rate of cooling to calculate how long until your coffee goes cold."]}),Object(v.jsxs)("p",{children:["My personal development as an aspiring full stack developer has also led me to gain experience in a variety of other programming concepts and languages. You can see those"," ",Object(v.jsx)("a",{href:"https://github.com/jamestkelly/resume/blob/main/main.pdf",children:"here"}),", alongside the projects I'm working on in my resume!"]}),Object(v.jsxs)("p",{children:["Another place to check out what I'm doing is my"," ",Object(v.jsx)("a",{href:"https://github.com/jamestkelly/",children:"GitHub"}),", I'm always eager to try out a new skill or develop new projects. If you wish to contact me via email or organise some other method of communication, feel free to send me an email via the 'Contact' page!"]})]})})]})})},N=a(50),C=a(14),S=a(51),I=a.n(S),T=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkBox"===t.type?t.checked:t.value,s=t.name;n.setState(Object(N.a)({},s,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),I.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{fluid:!0,children:[Object(v.jsx)(p.a,{className:"justify-content-center",children:Object(v.jsx)(g.a,{md:6,children:Object(v.jsx)("h1",{className:"py-4 mb-5 display-3 font-weight-bolder",children:"Let's Get in Touch!"})})}),Object(v.jsx)(p.a,{className:"justify-content-center",children:Object(v.jsx)(g.a,{md:6,children:Object(v.jsxs)(C.a,{onSubmit:this.handleSubmit,children:[Object(v.jsxs)(C.a.Group,{children:[Object(v.jsx)(C.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(v.jsx)(C.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(v.jsxs)(C.a.Group,{children:[Object(v.jsx)(C.a.Label,{htmlFor:"email",children:"Email"}),Object(v.jsx)(C.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(v.jsxs)(C.a.Group,{children:[Object(v.jsx)(C.a.Label,{htmlFor:"message",children:"Message"}),Object(v.jsx)(C.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(v.jsx)(f.a,{className:"mb-2 d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,style:{backgroundColor:"black",color:"white",fontSize:"20px",padding:"5px 50px",borderRadius:"5px",outline:"none",outlineColor:"black",outlineOffset:"none",margin:"10px 0px",cursor:"pointer"},children:"Send"}),!0===this.state.emailSent&&Object(v.jsx)("p",{className:"d-inline success-msg",children:"Email Sent!"}),!1===this.state.emailSent&&Object(v.jsx)("p",{className:"d-inline err-msg",children:"Email failed to send."})]})})})]})})}}]),a}(s.a.Component),M=a(33);var A=function(){return Object(v.jsx)("footer",{className:"p-0",children:Object(v.jsx)(b.a,{fluid:!0,children:Object(v.jsxs)(p.a,{className:"border-top justify-content-between p-3",children:[Object(v.jsx)(g.a,{className:"p-0",md:3,sm:12,children:"Portfolio website by Jim Kelly | Made with React"}),Object(v.jsxs)(g.a,{className:"px-2 d-flex justify-content-center",md:3,sm:12,children:[Object(v.jsx)("a",{href:"https://github.com/jamestkelly/",children:Object(v.jsx)(M.a,{style:{color:"black",marginRight:5},size:20,onMouseOver:function(e){return e.target.style.color="yellow"},onMouseOut:function(e){return e.target.style.color="black"}})}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/jim-kelly-381b3a190/",children:Object(v.jsx)(M.b,{style:{color:"black",marginRight:5},size:20,onMouseOver:function(e){return e.target.style.color="yellow"},onMouseOut:function(e){return e.target.style.color="black"}})}),Object(v.jsx)("a",{href:"https://jimkelly-t.medium.com",children:Object(v.jsx)(M.c,{style:{color:"black"},size:20,onMouseOver:function(e){return e.target.style.color="yellow"},onMouseOut:function(e){return e.target.style.color="black"}})})]}),Object(v.jsx)(g.a,{className:"p-2 d-flex justify-content-end",md:3,sm:12,children:Object(v.jsx)(p.a,{children:"MIT License Copyright \xa9 [2021]"})})]})})})},F=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"Jim Kelly",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Jim Kelly",subtitle:"Computer science student, undergraduate software engineer, and aspiring full-stack developer.",text:"Welcome to my portfolio!"},about:{title:"About Me"},contact:{title:"Let's Get in Touch!"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsx)(m.a,{children:Object(v.jsxs)(b.a,{className:"p-0",fluid:!0,children:[Object(v.jsxs)(j.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(v.jsx)(j.a.Brand,{children:"Jim Kelly"}),Object(v.jsx)(j.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(v.jsx)(j.a.Collapse,{id:"navbar-toggle",children:Object(v.jsxs)(u.a,{className:"ml-auto",children:[Object(v.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(v.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"}),Object(v.jsx)(m.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(v.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(v.jsx)(w,{title:e.state.home.title,subtitle:e.state.home.subtitle,text:e.state.home.text})}}),Object(v.jsx)(h.a,{path:"/about",exact:!0,render:function(){return Object(v.jsx)(k,{title:e.state.about.title})}}),Object(v.jsx)(h.a,{path:"/contact",exact:!0,render:function(){return Object(v.jsx)(T,{title:e.state.contact.title})}}),Object(v.jsx)(A,{})]})})}}]),a}(s.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),l(e),i(e)}))};a(86);i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),L()}},[[87,1,2]]]);
//# sourceMappingURL=main.0df02a7a.chunk.js.map