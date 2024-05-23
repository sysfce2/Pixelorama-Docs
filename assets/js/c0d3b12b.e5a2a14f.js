"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[346],{4026:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var a=i(4848),o=i(8453);const n={id:"Import",title:"Import",sidebar_label:"Import",sidebar_position:4},r=void 0,s={id:"user_manual/Import",title:"Import",description:'In Pixelorama, it is possible to import .pxo files, image files, palette files and extension files. To import a file, either drag and drop it into Pixelorama window or use File > Open dialog. You can also open files in Pixelorama through the your computer\'s file explorer by right clicking on a file, selecting "Open with" and selecting Pixelorama, but the process of making this work is different for each operating system/desktop environment. Doing this will open Pixelorama with the file automatically opened. You can also achieve the same thing by opening Pixelorama through the command line, and giving the names of the files you want to open as arguments.',source:"@site/docs/user_manual/import.md",sourceDirName:"user_manual",slug:"/user_manual/Import",permalink:"/Pixelorama-Docs/user_manual/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/import.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1716425069e3,sidebarPosition:4,frontMatter:{id:"Import",title:"Import",sidebar_label:"Import",sidebar_position:4},sidebar:"docs",previous:{title:"Save and Export",permalink:"/Pixelorama-Docs/user_manual/save_and_export"},next:{title:"Palettes",permalink:"/Pixelorama-Docs/user_manual/palettes"}},l={},h=[{value:"Supported image formats",id:"supported-image-formats",level:2},{value:"Import image options",id:"import-image-options",level:2},{value:"Importing multiple images",id:"importing-multiple-images",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In Pixelorama, it is possible to import ",(0,a.jsx)(t.a,{href:"../concepts/project/#pxo-files",children:".pxo files"}),", image files, ",(0,a.jsx)(t.a,{href:"palettes",children:"palette files"})," and ",(0,a.jsx)(t.a,{href:"../extension_system/extension_basics",children:"extension files"}),". To import a file, either ",(0,a.jsx)(t.code,{children:"drag and drop"})," it into Pixelorama window or use ",(0,a.jsx)(t.code,{children:"File > Open"}),' dialog. You can also open files in Pixelorama through the your computer\'s file explorer by right clicking on a file, selecting "Open with" and selecting Pixelorama, but the process of making this work is different for each operating system/desktop environment. Doing this will open Pixelorama with the file automatically opened. You can also achieve the same thing by opening Pixelorama through the command line, and giving the names of the files you want to open as arguments.']}),"\n",(0,a.jsx)(t.h2,{id:"supported-image-formats",children:"Supported image formats"}),"\n",(0,a.jsxs)(t.p,{children:["The image formats that can be imported are: ",(0,a.jsx)(t.code,{children:".png"}),", ",(0,a.jsx)(t.code,{children:".apng"}),", ",(0,a.jsx)(t.code,{children:".jpg"}),"/",(0,a.jsx)(t.code,{children:".jpeg"}),", ",(0,a.jsx)(t.code,{children:".webp"}),", ",(0,a.jsx)(t.code,{children:".bmp"}),", ",(0,a.jsx)(t.code,{children:".svg"}),", ",(0,a.jsx)(t.code,{children:".tga"}),", ",(0,a.jsx)(t.code,{children:".hdr"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"import-image-options",children:"Import image options"}),"\n",(0,a.jsxs)(t.p,{children:["When attempting to import an image, a dialog will appear, containing a preview of the image you want to import, along with options that let you change how you want the image to be imported.\n",(0,a.jsx)(t.img,{alt:"Import image dialog",src:i(6226).A+"",width:"608",height:"607"})]}),"\n",(0,a.jsx)(t.p,{children:"These options include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"New project, that lets you open the image as a new project"}),"\n",(0,a.jsx)(t.li,{children:'Spritesheet (new project), that lets you open the image as a spritesheet in a new project. You can manually set the amount of horizontal and vertical frames, or select "smart slice", which attempts to figure out the amount of frames in the spritesheet automatically.'}),"\n",(0,a.jsx)(t.li,{children:"Spritesheet (new layer). Same as above, but instead of opening the spritesheet in a new project, it opens it as a new layer in the currently active project."}),"\n",(0,a.jsx)(t.li,{children:"New frame, which opens the image as a new frame in the currently active project. You can specify which layer the new frame will belong to."}),"\n",(0,a.jsx)(t.li,{children:"Replace cel, which replaces a cel at the frame and the layer of your choosing, with the imported image in the currently active project."}),"\n",(0,a.jsx)(t.li,{children:"New layer, which opens the image as a new layer in the currently active project. You can specify in which frame the new layer will be at."}),"\n",(0,a.jsx)(t.li,{children:"New reference image, which opens the image as a reference image in the currently active project."}),"\n",(0,a.jsxs)(t.li,{children:["New palette, which creates a new ",(0,a.jsx)(t.a,{href:"palettes",children:"palette"})," using the colors of the imported image."]}),"\n",(0,a.jsxs)(t.li,{children:["New brush, which opens the imported image as a ",(0,a.jsx)(t.a,{href:"../concepts/brush",children:"brush"}),". You can choose whether the new brush will be a file brush, a project brush, or a random brush."]}),"\n",(0,a.jsx)(t.li,{children:"New pattern, which opens the imported image as a pattern, which can be used by the bucket tool."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"importing-multiple-images",children:"Importing multiple images"}),"\n",(0,a.jsxs)(t.p,{children:['When importing multiple images at the same time, the import dialogs will also have an "apply to all" checkbox. When toggling this on in a dialog, the rest of the dialogs will hide and all of the imported images will share the same options. This way you can easily import multiple images as multiple projects, frames, layers, etc. The order that they are being imported is backwards, meaning that the he last image that you attempted to import, will be the first one that actually gets opened. For example, if you attempt to import image files named ',(0,a.jsx)(t.code,{children:"1.png"}),", ",(0,a.jsx)(t.code,{children:"2.png"})," and ",(0,a.jsx)(t.code,{children:"3.png"})," in that order as new frames, the first frame would be image ",(0,a.jsx)(t.code,{children:"3.png"}),", then ",(0,a.jsx)(t.code,{children:"2.png"})," and then ",(0,a.jsx)(t.code,{children:"1.png"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},6226:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/import_options_dialog-b18a0a7c4f75c905b0846d3081ccd6fd.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var a=i(6540);const o={},n=a.createContext(o);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);