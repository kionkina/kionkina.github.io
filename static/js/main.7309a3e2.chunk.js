(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},23:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n,i,l,r,s,o,c=t(0),m=t.n(c),u=t(12),p=t.n(u),d=(t(21),t(1)),h=t(2),g=t(4),E=t(3),f=t(5),b=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement(m.a.Fragment,null,m.a.createElement("header",{id:"home"},m.a.createElement("nav",{id:"nav-wrap"},m.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),m.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),m.a.createElement("ul",{id:"nav",className:"nav"},m.a.createElement("li",{className:"current"},m.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),m.a.createElement("li",null,m.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),m.a.createElement("li",null,m.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),m.a.createElement("li",null,m.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),m.a.createElement("li",null,m.a.createElement("a",{className:"smoothscroll",href:"#blog"},"Blog")),m.a.createElement("li",null,m.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),m.a.createElement("div",{className:"row banner"},m.a.createElement("div",{className:"banner-text"},m.a.createElement("div",{className:"pfp"}),m.a.createElement("div",{class:"hello-world"},m.a.createElement("div",{className:"responsive-headline",style:{textShadow:"None",color:"#2B2B2B",fontFamily:"opensans-regular",fontSize:"50px",margin:"2px"}}," ",e.name),m.a.createElement("div",{className:"responsive-headline",style:{textShadow:"None",color:"#2B2B2B",fontFamily:"opensans-regular",fontStyle:"Italic"}}," ",e.job),m.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return m.a.createElement("li",{key:e.name},m.a.createElement("a",{href:e.url,target:"_blank"},m.a.createElement("i",{className:e.className})))})),m.a.createElement("h3",{style:{color:"#2B2B2B",fontFamily:"opensans-light",textShadow:"none"}},"I am a ",e.role,".",e.roleDescription)))),m.a.createElement("p",{className:"scrolldown"},m.a.createElement("a",{className:"smoothscroll",href:"#about"},m.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(c.Component),v=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement("section",{id:"about"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"three columns"},m.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:""})),m.a.createElement("div",{className:"nine columns main-col"},m.a.createElement("h2",null,"About Me"),m.a.createElement("p",null,e.aboutme),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"columns contact-details"},m.a.createElement("h2",null,"Contact Details"),m.a.createElement("p",{className:"address"},m.a.createElement("span",null,e.name),m.a.createElement("br",null),m.a.createElement("span",null," ",m.a.createElement("row",null,e.address,m.a.createElement("img",{src:"images/cat3.png",style:{width:"190px",height:"fit-content",position:"absolute",translate:"90%"},alt:""}))),m.a.createElement("br",null),m.a.createElement("span",null,e.website)))))))}}]),a}(c.Component),k=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement("section",{id:"resume"},m.a.createElement("div",{className:"row education"},m.a.createElement("div",{className:"three columns header-col"},m.a.createElement("h1",null,m.a.createElement("span",null,"Education"))),m.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return m.a.createElement("div",{className:"row item"},m.a.createElement("div",{className:"twelve columns"},m.a.createElement("h3",null,e.UniversityName),m.a.createElement("p",{className:"info"},e.specialization,e.specialization&&m.a.createElement("span",null,"\xa0 |")," ",m.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),m.a.createElement("p",null,e.Achievements)))}))),m.a.createElement("div",{className:"row work"},m.a.createElement("div",{className:"three columns header-col"},m.a.createElement("h1",null,m.a.createElement("span",null,"Work"))),m.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return m.a.createElement("div",{className:"row item"},m.a.createElement("div",{className:"twelve columns"},m.a.createElement("h3",null,e.CompanyName),m.a.createElement("p",{className:"info"},e.specialization,m.a.createElement("span",null,"\xa0| ")," ",m.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),m.a.createElement("p",null,e.Achievements)))}))),m.a.createElement("div",{className:"row skill"},m.a.createElement("div",{className:"three columns header-col"},m.a.createElement("h1",null,m.a.createElement("span",null,"Skills"))),m.a.createElement("div",{className:"nine columns main-col"},m.a.createElement("p",null,e.skillsDescription),m.a.createElement("div",{className:"bars",style:{height:"400px",overflow:"scroll"}},m.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return m.a.createElement("li",null,m.a.createElement("span",{className:"bar-expand".concat(e.id.toLowerCase())}),m.a.createElement("em",null,e.skillname))}))))))}}]),a}(c.Component),w=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement("section",{id:"portfolio"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"twelve columns collapsed"},m.a.createElement("h1",null,m.a.createElement("span",null,"Projects")),m.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return m.a.createElement("div",{className:"columns portfolio-item"},m.a.createElement("div",{style:{color:"black"}},m.a.createElement("a",{href:e.link&&e.link,target:"_blank"},m.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),m.a.createElement("div",{className:"overlay"},m.a.createElement("div",{className:"portfolio-item-meta"},m.a.createElement("h5",null,e.name),m.a.createElement("p",null,e.description))))))})),"And many more! Check out my ",m.a.createElement("a",{href:"https://github.com/kionkina/"}," github "))))}}]),a}(c.Component),N=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement("section",{id:"contact"},m.a.createElement("div",{className:"row section-head"},m.a.createElement("div",{className:"ten columns"},m.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),m.a.createElement("div",{className:"row"},m.a.createElement("aside",{className:"eigth columns footer-widgets"},m.a.createElement("div",{className:"widget"},m.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(c.Component),y=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return m.a.createElement("footer",null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"twelve columns"},m.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return m.a.createElement("li",null,m.a.createElement("a",{href:e.url},m.a.createElement("i",{className:e.className})))}))),m.a.createElement("div",{id:"go-top"},m.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},m.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(c.Component),O={imagebaseurl:"https://rbhatia46.github.io/",name:"Karina Ionkina",role:"full stack developer, artist and musician",job:"SWE @ Bloomberg",linkedinId:"karina-ionkina",skypeid:"Your skypeid",roleDescription:" In my free time, I like dabbling in the open source world and playing with instruments (and my cat Beaux).",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/karina-ionkina/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/kionkina",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/carinawithak",className:"fa fa-twitter"},{name:"medium",url:"https://medium.com/@karinaionkina",className:"fa fa-pencil"}],aboutme:"I graduated Hunter College in 2021 with a degree in computer science and Chinese, and am currently a lead engineer on a team at Bloomberg. I'm currently pursuing a master's degree at UT Austin in machine learning. I'm interested in building and scaling progressive web apps, as well as applying the theoretical aspects of AI in real-world applications.",address:"New York",website:"https:/kionkina.github.io",education:[{UniversityName:"University of Texas at Austin",specialization:"Masters in Machine Learning",MonthOfPassing:"",YearOfPassing:"January 2024 - Present",Achievements:""},{UniversityName:"Macaulay Honors College @ Hunter College",specialization:"B.A in Computer Science and Chinese",MonthOfPassing:"",YearOfPassing:"September 2018 - May 2021",Achievements:"Valedicatorian | Deadalus Honors CS | Cooperman Business Fellow | Chinese Flagship Program"},{UniversityName:"Stuyvesant HS",specialization:"",MonthOfPassing:"",YearOfPassing:"September 2014 - June 2018",Achievements:"Girls Who Code President | Tennis Team Captain | JV Volleyball Captain | Honors Society"}],work:[{CompanyName:"Bloomberg L.P.",specialization:"Full-stack engineer",MonthOfLeaving:"Aug",YearOfLeaving:"2021 - Present",Achievements:"Lead engineer on full-stack team. Develops features for a post-trade order management system using TypeScript framework, CPP, and SQL. Builds and maintains internal web app with React and Node.js"},{CompanyName:"CUNY Research Foundation",specialization:"Web Developer",MonthOfLeaving:"Jan",YearOfLeaving:"2018 - Jun 2020",Achievements:"Buildt and optimized, and hosted responsive Chinese literacy exercises using React, Node. Built the college's Chinese flagsip program website.",Link:"www.google.com"},{CompanyName:"Weill Cornell Medicine",specialization:"Spacial Computing Intern",MonthOfLeaving:"Jan 2018",YearOfLeaving:"- Sept 2019",Achievements:"Worked with a team of professors, clinicians and scientists in the Spatial Computing Lab to improve VR embryo modeling tools by writing C# scripts in Unity."},{CompanyName:"Launch Math & Science Center",specialization:"Computer Science Tutor",MonthOfLeaving:"Sept 20118",YearOfLeaving:" - Sept 2019",Achievements:"Taught 3 after-school Python classes at NEST +M and Hunter College Elementary School. Tutored 4 middle and high school students, teaching them computer science and web development fundamentals with pyGame and JavaScript projects."}],skillsDescription:"Technical",skills:[{skillname:"TypeScript / ES6+",id:"ts"},{skillname:"Reactjs",id:"react"},{skillname:"CPP",id:"cpp"},{skillname:"SQL",id:"sql"},{skillname:"React Native (In progress...)",id:"reactn"},{skillname:"ios",id:"ios"},{skillname:"\u4e2d\u6587",id:"mandarin"}],portfolio:[{name:"NYC Bike Lane and Collision Anaylysis",description:"Visualizing the extent to which different kinds of lanes corrrelate to bicycle accidents in nyc.",imgurl:"images/portfolio/lanes.png",link:"https://nyc-bikes-and-lanes.herokuapp.com/"},{name:"Robingood",description:"A MERN paper trading app.",imgurl:"images/portfolio/robingood.png",link:"https://github.com/kionkina/robingood"},{name:"Meditapp",description:"An meditation social media app where users can post their meditation recordings.",imgurl:"images/portfolio/meditapp.png",link:"https://github.com/kionkina/meditapp"},{name:"Kantian Computational Linguistics",description:"A review of seminal work on linguistics and the structure of language, exploring contemporary solutions, identifying their drawbacks and proposing alternatives to address them.",imgurl:"images/portfolio/kant.png",link:"https://dl.acm.org/doi/abs/10.1007/978-3-030-78114-9_17"},{name:"Stuy Planner",description:"A classroom management app (flask, js, sqlite). Click for demo :)",imgurl:"images/portfolio/sp.png",link:"https://www.youtube.com/watch?v=VoErJulmqds&t=6s"},{name:"YACMA",description:"Yet ANOTHER classroom management app. This time with React, Node, Google App Engine, & Firestore -- distributed systems project.",imgurl:"images/portfolio/Y.png",link:"https://github.com/boubascript/yacma"},{name:"PenPal",description:"An ios app that pairs you with users based on languages and allows you to message them for practice.",imgurl:"images/portfolio/penpal.png",link:"https://github.com/kionkina/penpal"},{name:"RPI Hackathon",description:"A twitter sentiment analyzer for first responders.",imgurl:"images/portfolio/rpi.png",link:"https://devpost.com/software/relief-insights-p6fh9u"}],blogs:[{title:"React Under the Hood",link:"https://medium.com/@karinaionkina/react-under-the-hood-97e714aba4d3"}],Papers:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},j=t(6),C=(t(23),t(7)),S=[{id:1,title:"React Under the Hood",name:"Karina Ionkina",descr:"2023-01-24 6 min read",text:"We\u2019ve all heard of React, the \u2728free and open-source \u2728 front-end JavaScript library for building user interfaces based on UI components. It\u2019s one of Meta\u2019s first open-source projects, created by John Walke in 2015, and has over 1k \ud83d\udcc8 open-source contributors today. How does it work?",month:"January",image:"images/blog1.JPEG",peopleImage:"images/profilepic1.JPG",link:"https://medium.com/@karinaionkina/react-under-the-hood-97e714aba4d3"},{id:2,title:"Async JS Under the Hood",name:"Karina Ionkina",descr:"2023-01-26 4 min read",text:"A dive into async JavaScript: how the JS runtime handles asyncronous calls with the engine, browser runtime, task queue, and JVM. A quick overview for visual and hands-on learners like myself.",month:"January",image:"images/blog2-2.jpg",peopleImage:"images/profilepic1.JPG",link:"https://medium.com/@karinaionkina/async-js-under-the-hood-2e80af6dd4db"}],A=C.a.table(n||(n=Object(j.a)(["\n    margin-top: 36px;\n    overflow: scroll;\n    width: 600px;\n"]))),x=C.a.tr(i||(i=Object(j.a)(["\n  display: contents;\n  width: 150px;\n"]))),P=C.a.td(l||(l=Object(j.a)(["\n    padding: 10px;\n    width: 150px;\n"]))),L=C.a.h1(r||(r=Object(j.a)(["\n  margin-bottom: 0px;\n  width 160px;\n"]))),B=C.a.p(s||(s=Object(j.a)(["\n  width: 180px;\n"]))),M=C.a.img(o||(o=Object(j.a)(["\n  height: 160px;\n  max-width: none;\n;\n"]))),D=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return m.a.createElement("section",{id:"blog"},m.a.createElement("div",{className:"row education"},m.a.createElement("div",{className:"three columns header-col"},m.a.createElement("h1",null,m.a.createElement("span",null,"Blog"))),m.a.createElement("div",{className:"nine columns main-col"},m.a.createElement("p",null," Check out my articles on Medium "),m.a.createElement(A,null,S.map(function(e,a){return m.a.createElement(x,null,m.a.createElement(P,null,m.a.createElement(M,{src:e.image})," ",m.a.createElement("br",null),m.a.createElement(L,null," ",e.title," "),m.a.createElement(B,{style:{lineHeight:"normal"}},"  ",e.descr,"  ",m.a.createElement("a",{href:e.link,target:"none"},"  ",m.a.createElement("i",{className:"fa fa-long-arrow-right"})," ")," "),m.a.createElement("p",null,"  ",e.text," ")))}))),m.a.createElement("h3",{style:{padding:"20px"}}," ... and more to come")))}}]),a}(c.Component),I=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(b,{resumeData:O}),m.a.createElement(v,{resumeData:O}),m.a.createElement(k,{resumeData:O}),m.a.createElement(w,{resumeData:O}),m.a.createElement(D,{resumeData:O}),m.a.createElement(N,{resumeData:O}),m.a.createElement(y,{resumeData:O}))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(m.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.7309a3e2.chunk.js.map