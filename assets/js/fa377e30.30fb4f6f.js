(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[181],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return u}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),A=c(r),u=n,h=A["".concat(l,".").concat(u)]||A[u]||p[u]||a;return r?o.createElement(h,i(i({ref:t},f),{},{components:r})):o.createElement(h,i({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}A.displayName="MDXCreateElement"},7910:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"project",title:"Project",sidebar_label:"Project"},l={unversionedId:"concepts/project",id:"concepts/project",isDocsHomePage:!1,title:"Project",description:'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.',source:"@site/docs/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/Pixelorama-Docs/concepts/project",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/project.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1627661694,formattedLastUpdatedAt:"7/30/2021",sidebar_label:"Project",frontMatter:{id:"project",title:"Project",sidebar_label:"Project"},sidebar:"docs",previous:{title:"Cel",permalink:"/Pixelorama-Docs/concepts/cel"},next:{title:"Ways to contribute",permalink:"/Pixelorama-Docs/development_and_contributing"}},c=[{value:"Saving a project",id:"saving-a-project",children:[]},{value:".pxo files",id:"pxo-files",children:[{value:"File structure",id:"file-structure",children:[]},{value:"ZSTD compression",id:"zstd-compression",children:[]}]}],f={toc:c};function p(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a ',(0,a.kt)("inlineCode",{parentName:"p"},".pxo")," file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab."),(0,a.kt)("p",null,"A Project contains the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A set of frames for animations, along with their duration, animation tags and FPS, as well as multiple layers. Frames and layers intersect and create ",(0,a.kt)("a",{parentName:"li",href:"cel"},"cels"),", which are the editable images themselves of the project."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"../user_manual/transforming/#scale"},"size")," - width and height - in pixels."),(0,a.kt)("li",{parentName:"ul"},"A name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"brush"},"Brushes")," that are local to that specific project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../user_manual/user_interface/canvas/#rulers-and-guides"},"Guides")," - lines that help you draw.")),(0,a.kt)("h2",{id:"saving-a-project"},"Saving a project"),(0,a.kt)("p",null,"To save a project, you can go to the File menu and select Save, or press ",(0,a.kt)("kbd",null,"Control + S"),". If you are using a Desktop version, you will be able to choose where you want the file to be saved. If you use the Web version, you will be asked for a file name and the .pxo file will be downloaded by your browser."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save Project",src:r(4078).Z})),(0,a.kt)("h2",{id:"pxo-files"},".pxo files"),(0,a.kt)("p",null,"Pxo files are Pixelorama's custom file format that saves the entire content of the project. It cannot be opened in other image editors."),(0,a.kt)("h3",{id:"file-structure"},"File structure"),(0,a.kt)("p",null,"The file essentially consists of two lines. The first line is all of the project's metadata, such as project name, size, number of layers, number of frames, tags, ",(0,a.kt)("a",{parentName:"p",href:"brush"},"project brushes"),", fps etc. They are stored in JSON form, so they can easily be read by other software."),(0,a.kt)("p",null,"The second line contains all of the image data as buffers. First, all of the image data for every ",(0,a.kt)("a",{parentName:"p",href:"cel"},"cel")," is being stored. It starts from the very first cel, which is equivelant to the bottom-most layer and the first frame, then it continues for every layer from bottom to top and once it reaches the final layer, moves on to the next frame, where it again starts from the bottommost layer and continues saving up to the top. After all of the cel image data has been saved, the image data of the project brushes are being saved, if the project has any."),(0,a.kt)("p",null,"So, in order for a software to read the data of a pxo, it first reads the first line as a JSON object, and then it loops through the buffers, which all have the same size as the project size, until it reads all of the number of frames and layers. After that, if there are more buffers, they correspond to the project brushes, the size of which is stored in the JSON object."),(0,a.kt)("h3",{id:"zstd-compression"},"ZSTD compression"),(0,a.kt)("p",null,"During save, you hare given with the option to select ZSTD compression. If you do, this will reduce your pxo size, but if your project is large and has a lot of content in it, it may take some time to save and load it. Saving projects with ZSTD compression is currently unsupported in the Web version. If you are writing software that supports .pxo file, make sure to detect if the files are compressed first."))}p.isMDXComponent=!0},4078:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);