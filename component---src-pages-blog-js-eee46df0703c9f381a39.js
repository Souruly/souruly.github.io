(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UpBD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l}));var i=n("vOnD"),o=i.b.div.withConfig({displayName:"postList__Container",componentId:"x4swc1-0"})(["display:flex;flex-direction:column;width:auto;align-items:center;justify-content:center;padding:10px;"]),a=i.b.div.withConfig({displayName:"postList__PostCard",componentId:"x4swc1-1"})(["display:flex;flex-direction:column;width:80%;align-items:left;justify-content:center;border:1px solid black;margin:10px;height:auto;transition:all 0.05s ease 0s;padding:10px;:hover{box-shadow:2px 4px 10px;}a{text-decoration:none;color:var(--customDarkGrey);}"]),r=i.b.h3.withConfig({displayName:"postList__PostTitle",componentId:"x4swc1-2"})(["font-size:2rem;@media (max-width:600px){font-size:2rem;}"]),s=i.b.ul.withConfig({displayName:"postList__PostList",componentId:"x4swc1-3"})([""]),l=i.b.li.withConfig({displayName:"postList__PostListItem",componentId:"x4swc1-4"})([""])},vx99:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l})),n.d(e,"pageQuery",(function(){return d}));var i=n("q1tI"),o=n.n(i),a=n("Kvkj"),r=n("Wbzz"),s=n("UpBD");function l(t){var e=t.data.allMarkdownRemark.edges;return o.a.createElement(a.b,{bigTitle:"Blog"},o.a.createElement(s.a,null,e.filter((function(t){return t.node.frontmatter.title.length>0})).map((function(t){var e=t.node;return o.a.createElement(s.b,{className:"blog-post-preview",key:e.id},o.a.createElement("h3",null,o.a.createElement(r.Link,{to:e.fields.slug},e.frontmatter.title)),o.a.createElement("p",null,e.frontmatter.date))}))))}var d="2710502249"}}]);
//# sourceMappingURL=component---src-pages-blog-js-eee46df0703c9f381a39.js.map