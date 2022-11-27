"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/Pixelorama-Docs/","docId":"introduction"},{"type":"category","label":"User Manual","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/Pixelorama-Docs/user_manual/installation","docId":"user_manual/installation"},{"type":"category","label":"User Interface","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"User Interface Basics","href":"/Pixelorama-Docs/user_manual/user_interface/user_interface_basics","docId":"user_manual/user_interface/user_interface_basics"},{"type":"link","label":"The Canvas","href":"/Pixelorama-Docs/user_manual/user_interface/canvas","docId":"user_manual/user_interface/canvas"},{"type":"link","label":"The Timeline","href":"/Pixelorama-Docs/user_manual/user_interface/timeline","docId":"user_manual/user_interface/timeline"}]},{"type":"link","label":"Drawing","href":"/Pixelorama-Docs/user_manual/drawing","docId":"user_manual/drawing"},{"type":"link","label":"Palettes","href":"/Pixelorama-Docs/user_manual/palettes","docId":"user_manual/palettes"},{"type":"link","label":"Save and Export","href":"/Pixelorama-Docs/user_manual/save_and_export","docId":"user_manual/save_and_export"},{"type":"link","label":"Selecting","href":"/Pixelorama-Docs/user_manual/selecting","docId":"user_manual/selecting"},{"type":"link","label":"Shading","href":"/Pixelorama-Docs/user_manual/shading","docId":"user_manual/shading"},{"type":"link","label":"Tools","href":"/Pixelorama-Docs/user_manual/tools","docId":"user_manual/tools"},{"type":"link","label":"Transforming","href":"/Pixelorama-Docs/user_manual/transforming","docId":"user_manual/transforming"}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Brush","href":"/Pixelorama-Docs/concepts/brush","docId":"concepts/brush"},{"type":"link","label":"Cel","href":"/Pixelorama-Docs/concepts/cel","docId":"concepts/cel"},{"type":"link","label":"Project","href":"/Pixelorama-Docs/concepts/project","docId":"concepts/project"}]},{"type":"link","label":"Ways to contribute","href":"/Pixelorama-Docs/development_and_contributing","docId":"development_and_contributing"},{"type":"link","label":"FAQ","href":"/Pixelorama-Docs/faq","docId":"faq"},{"type":"link","label":"Compiling from Source","href":"/Pixelorama-Docs/source","docId":"source"},{"type":"link","label":"Troubleshooting","href":"/Pixelorama-Docs/troubleshooting","docId":"troubleshooting"}]},"docs":{"concepts/brush":{"id":"concepts/brush","title":"Brush","description":"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size.","sidebar":"docs"},"concepts/cel":{"id":"concepts/cel","title":"Cel","description":"In Pixelorama, the term \\"Cel\\" (from celluloid) refers to the intersection of frames and layers of the project. Basically, every frame in a project has as many cels as there are layers. You could think of frames as a collection of cels, for every layer. So for example, if the project has 3 frames and 4 layers, each frame would have 4 cels, making the total cels 3 x 4 = 12.","sidebar":"docs"},"concepts/project":{"id":"concepts/project","title":"Project","description":"In Pixelorama, the term \\"Project\\" refers to the entire sprite, which contains all of the frames it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.","sidebar":"docs"},"development_and_contributing":{"id":"development_and_contributing","title":"Ways to contribute","description":"Say something nice!","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"If you have any questions about Pixelorama, there is a chance that someone else had the same question before, so it will be answered here, in the Frequently Asked Questions (FAQ). The question is indicated with \\"Q\\" and the answer with \\"A\\".","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"Welcome fellow dreamer to the documentation of Pixelorama, your free and open source pixel-art creation tool, developed by Orama Interactive and our contributors. If you are new to this documentation, we recommend you start by learning how to install the application, and then read the User Interface Basics page to familiarize yourself with Pixelorama\'s workspace. The ultimate goal of this program is to be able to catch up with the user\'s imagination and assist them in creating any kind of pixel art they wish. This could be a cool landscape, a dope animation, game graphics, random sketches or a well thought pixelated meme. Thank you for coming this far into researching our tool!","sidebar":"docs"},"source":{"id":"source","title":"Compiling from Source","description":"To compile Pixelorama\'s source code, all you have to do is download Godot 3.5. You don\'t need the mono version since Pixelorama is written entirely with GDScript. Then, you clone Pixelorama from its GitHub repository, load the project within Godot, and you run it! Simple as that!","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"This page lists common issues encountered when using Pixelorama and possible solutions. To experience as less issues as possible, make sure you are always using the latest stable version of Pixelorama.","sidebar":"docs"},"user_manual/drawing":{"id":"user_manual/drawing","title":"Drawing","description":"Drawing is the main feature of Pixelorama and it\'s what you will be doing most of the time. There are multiple tools that can be used for drawing in the canvas, with the main one being the Pencil tool.","sidebar":"docs"},"user_manual/installation":{"id":"user_manual/installation","title":"Installation","description":"Pixelorama is available for free for all major desktop platforms, namely Windows, Linux and macOS, as well as Ubuntu Touch, a mobile operating system. There is also a Web version available, which can be used directly from your browser, without downloading it. Stay tuned, because more platforms will be supported soon.","sidebar":"docs"},"user_manual/palettes":{"id":"user_manual/palettes","title":"Palettes","description":"Palettes are a way to organise colors in your projects.","sidebar":"docs"},"user_manual/save_and_export":{"id":"user_manual/save_and_export","title":"Save and Export","description":"You can either save or export your projects. Saving a project will create a .pxo file, which is Pixelorama\'s custom file format, while exporting means that one (or multiple, in case of animations) .png(s) or a .gif file will be created.","sidebar":"docs"},"user_manual/selecting":{"id":"user_manual/selecting","title":"Selecting","description":"You can select specific areas of your sprite to make changes at. When there is an available selection, any operation such as drawing, shading and image effect application will only affect the selected part(s) of the drawing. Selections also allow you to easily apply transformations to specific parts of the image, such as moving and scaling. An active selection is denoted by a marching ants effect around the selected pixels.","sidebar":"docs"},"user_manual/shading":{"id":"user_manual/shading","title":"Shading","description":"Pixelorama\'s shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the Pencil or Eraser tools, you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool\'s options.","sidebar":"docs"},"user_manual/tools":{"id":"user_manual/tools","title":"Tools","description":"Tools are the main way to interact with your artwork.","sidebar":"docs"},"user_manual/transforming":{"id":"user_manual/transforming","title":"Transforming","description":"Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or selections.","sidebar":"docs"},"user_manual/user_interface/canvas":{"id":"user_manual/user_interface/canvas","title":"The Canvas","description":"Pixelorama\'s Canvas","sidebar":"docs"},"user_manual/user_interface/timeline":{"id":"user_manual/user_interface/timeline","title":"The Timeline","description":"The timeline\'s main purpose is to help you with creating animations. It is composed of frames, which are used for creating animations, and layers, which help you separate your frames in different parts. Each frame is essentially a collection of multiple layers, and each individual intersection of a frame and a layer is called a cel. All frames have the same amount of layers.","sidebar":"docs"},"user_manual/user_interface/user_interface_basics":{"id":"user_manual/user_interface/user_interface_basics","title":"User Interface Basics","description":"Pixelorama aims for a simplistic and understandable, yet professional User Interface (from now on referred as UI). Optimized for quick access to everything, Pixelorama\'s UI looks like this:","sidebar":"docs"}}}')}}]);