"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[269],{2626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(5893),t=s(1151);const r={id:"extension_api",title:"ExtensionsApi",sidebar_label:"ExtensionsApi",sidebar_position:2},o=void 0,d={id:"extension_system/extension_api",title:"ExtensionsApi",description:"This is the Api documentation of Pixelorama 0.x, After Pixelorama 1.0 instead of showing documentation, this page will show you how to get it through godot documentation comments in pixelorama's source-code.",source:"@site/docs/extension_system/extensions_api.md",sourceDirName:"extension_system",slug:"/extension_system/extension_api",permalink:"/Pixelorama-Docs/extension_system/extension_api",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/extension_system/extensions_api.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1701610236,formattedLastUpdatedAt:"Dec 3, 2023",sidebarPosition:2,frontMatter:{id:"extension_api",title:"ExtensionsApi",sidebar_label:"ExtensionsApi",sidebar_position:2},sidebar:"docs",previous:{title:"Extension Basics",permalink:"/Pixelorama-Docs/extension_system/extension_basics"},next:{title:"Examples",permalink:"/Pixelorama-Docs/extension_system/extension_examples"}},c={},l=[{value:"Description",id:"description",level:3},{value:"Properties",id:"properties",level:3},{value:"Method Descriptions",id:"method-descriptions",level:3},{value:"GeneralAPI",id:"generalapi",level:2},{value:"Description",id:"description-1",level:3},{value:"Method Descriptions",id:"method-descriptions-1",level:3},{value:"MenuAPI",id:"menuapi",level:2},{value:"Enumerations",id:"enumerations",level:3},{value:"Method Descriptions",id:"method-descriptions-2",level:3},{value:"DialogAPI",id:"dialogapi",level:2},{value:"Method Descriptions",id:"method-descriptions-3",level:3},{value:"PanelAPI",id:"panelapi",level:2},{value:"Method Descriptions",id:"method-descriptions-4",level:3},{value:"ThemeAPI",id:"themeapi",level:2},{value:"Method Descriptions",id:"method-descriptions-5",level:3},{value:"ToolAPI",id:"toolapi",level:2},{value:"Method Descriptions",id:"method-descriptions-6",level:3},{value:"SelectionAPI",id:"selectionapi",level:2},{value:"Method Descriptions",id:"method-descriptions-7",level:3},{value:"ProjectAPI",id:"projectapi",level:2},{value:"Method Descriptions",id:"method-descriptions-8",level:3},{value:"ExportAPI",id:"exportapi",level:2},{value:"Enumerations",id:"enumerations-1",level:3},{value:"Method Descriptions",id:"method-descriptions-9",level:2},{value:"SignalsAPI",id:"signalsapi",level:2},{value:"Description",id:"description-2",level:3},{value:"Method Descriptions",id:"method-descriptions-10",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"0.x Api",type:"caution",children:(0,i.jsx)(n.p,{children:"This is the Api documentation of Pixelorama 0.x, After Pixelorama 1.0 instead of showing documentation, this page will show you how to get it through godot documentation comments in pixelorama's source-code."})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This Api gives you the essentials to develop a working extension for Pixelorama.\nThe Api consists of many smaller Apis, each giving access to different areas of the Software;"}),"\n",(0,i.jsxs)(n.p,{children:["To access this anywhere in the extension use ",(0,i.jsx)(n.code,{children:'get_node_or_null("/root/ExtensionsApi")'})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Keep in mind that this API is targeted towards users who are not fully familiar with Pixelorama's source code. If you need to do something more complicated and more low-level, you would need to interact directly with the source code."})}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#generalapi",children:"general"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#menuapi",children:"menu"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#dialogapi",children:"dialog"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#panelapi",children:"panel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#themeapi",children:"theme"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#toolapi",children:"tools"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#selectionapi",children:"selection"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#projectapi",children:"project"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#exportapi",children:"exports"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signalsapi",children:"signals"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.code,{children:"int"})," ",(0,i.jsx)(n.code,{children:"get_api_version()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the version of the ExtensionsApi."}),"\n",(0,i.jsx)(n.h2,{id:"generalapi",children:"GeneralAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives Access to the general stuff."}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This part of Api provides stuff like commonly used Autoloads, App's version info etc the most basic (but important) stuff."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-1",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"String"})," ",(0,i.jsx)(n.code,{children:"get_pixelorama_version()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the current version of pixelorama."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"ConfigFile"})," ",(0,i.jsx)(n.code,{children:"get_config_file()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.code,{children:"ConfigFile"})," contains all the settings (Brushes, sizes, preferences, etc...)."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:'"src/Autoload/Global.gd"'})," ",(0,i.jsx)(n.code,{children:"get_global()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the Global autoload used by Pixelorama.\nContains references to almost all UI Elements, Variables that indicate different settings etc..., In short it is the most important autoload of Pixelorama."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:'"src/Autoload/DrawingAlgos.gd"'})," ",(0,i.jsx)(n.code,{children:"get_drawing_algos()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the DrawingAlgos autoload, contains different drawing algorithms used by Pixelorama."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"ShaderImageEffect"})," ",(0,i.jsx)(n.code,{children:"get_shader_image_effect()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Gives you a new ShaderImageEffect class. this class can apply shader to an image.\nIt contains method: ",(0,i.jsx)(n.code,{children:"generate_image(img: Image, shader: Shader, params: Dictionary, size: Vector2)"}),"\nWhose parameters are identified as:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"img"}),(0,i.jsx)(n.td,{children:"Image that the shader will be pasted to (Empty Image of size same as project)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"shader"}),(0,i.jsx)(n.td,{children:"preload of the shader."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"params"}),(0,i.jsx)(n.td,{children:"A dictionary of params used by the shader."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"It is the project's size."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Node"})," ",(0,i.jsx)(n.code,{children:"get_extensions_node()"})]}),"\n",(0,i.jsx)(n.p,{children:'Returns parent of the nodes listed in extension.json -> "nodes".'}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Canvas"})," ",(0,i.jsx)(n.code,{children:"get_canvas()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the main ",(0,i.jsx)(n.code,{children:"Canvas"})," node, normally used to add a custom preview to the canvas."]}),"\n",(0,i.jsx)(n.h2,{id:"menuapi",children:"MenuAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives ability to add/remove items from menus in the top bar."}),"\n",(0,i.jsx)(n.h3,{id:"enumerations",children:"Enumerations"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enum"}),"  ",(0,i.jsx)(n.code,{children:"@unnamed_enums"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FILE = 0"}),"\n",(0,i.jsx)(n.li,{children:"EDIT = 1"}),"\n",(0,i.jsx)(n.li,{children:"SELECT = 2"}),"\n",(0,i.jsx)(n.li,{children:"IMAGE = 3"}),"\n",(0,i.jsx)(n.li,{children:"VIEW = 4"}),"\n",(0,i.jsx)(n.li,{children:"WINDOW = 5"}),"\n",(0,i.jsx)(n.li,{children:"HELP = 6"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-2",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"int"})," ",(0,i.jsx)(n.code,{children:"add_menu_item(menu_type: int, item_name: String, item_metadata: Variant, item_id := -1)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds a menu item of title ",(0,i.jsx)(n.code,{children:"item_name"})," to the ",(0,i.jsx)(n.code,{children:"menu_type"})," defined by ",(0,i.jsx)(n.code,{children:"@unnamed_enums"}),".\n",(0,i.jsx)(n.code,{children:"item_metadata"})," is usually a window node you want to appear when you click the ",(0,i.jsx)(n.code,{children:"item_name"}),". That window node should also have a ",(0,i.jsx)(n.code,{children:"menu_item_clicked"})," function inside its script.\nIndex of the added item is returned (which can be used to remove menu item later on)."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"remove_menu_item(menu_type: int, item_idx: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Removes a menu item at index ",(0,i.jsx)(n.code,{children:"item_idx"})," from the ",(0,i.jsx)(n.code,{children:"menu_type"})," defined by ",(0,i.jsx)(n.code,{children:"@unnamed_enums"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"dialogapi",children:"DialogAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to common dialog related functions."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-3",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"show_error(text: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Shows an alert dialog with the given ",(0,i.jsx)(n.code,{children:"text"}),'. Useful for displaying messages like "Incompatible API" etc...']}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Node"})," ",(0,i.jsx)(n.code,{children:"get_dialogs_parent_node()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the node that is the parent of dialogs used in pixelorama."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"dialog_open(open: bool)"})]}),"\n",(0,i.jsx)(n.p,{children:"Tells pixelorama that some dialog is about to open or close."}),"\n",(0,i.jsx)(n.h2,{id:"panelapi",children:"PanelAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to Tabs and Dockable Container related functions."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-4",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"set_tabs_visible(visible: bool)"})]}),"\n",(0,i.jsx)(n.p,{children:"Sets the visibility of dockable tabs."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"bool"})," ",(0,i.jsx)(n.code,{children:"get_tabs_visible()"})]}),"\n",(0,i.jsx)(n.p,{children:"Gets the visibility of dockable tabs."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"add_node_as_tab(node: Node)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds the ",(0,i.jsx)(n.code,{children:"node"})," as a tab. Initially it's placed on the same panel as the tools tab, but can be changed through adding custom layouts."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"remove_node_from_tab(node: Node)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Removes the ",(0,i.jsx)(n.code,{children:"node"})," from the DockableContainer."]}),"\n",(0,i.jsx)(n.h2,{id:"themeapi",children:"ThemeAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to theme related functions."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-5",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"add_theme(theme: Theme)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds the ",(0,i.jsx)(n.code,{children:"theme"})," to ",(0,i.jsx)(n.strong,{children:"Edit > Preferences > Interface > Themes"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"int"})," ",(0,i.jsx)(n.code,{children:"find_theme_index(theme: Theme)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns index of the ",(0,i.jsx)(n.code,{children:"theme"})," in preferences."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Theme"})," ",(0,i.jsx)(n.code,{children:"get_theme()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the current theme resource."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"bool"})," ",(0,i.jsx)(n.code,{children:"set_theme(idx: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Sets a theme located at a given ",(0,i.jsx)(n.code,{children:"idx"})," in preferences. If theme set successfully then return true, else false."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"remove_theme(theme: Theme)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Remove the ",(0,i.jsx)(n.code,{children:"theme"})," from preferences."]}),"\n",(0,i.jsx)(n.h2,{id:"toolapi",children:"ToolAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives ability to add/remove tools."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-6",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:'add_tool(tool_name: String, display_name: String, shortcut: String, scene: PackedScene, extra_hint := "", extra_shortucts := [], layer_types: PoolIntArray = [])'})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds a tool to pixelorama with name ",(0,i.jsx)(n.code,{children:"tool_name"})," (without spaces), display name ",(0,i.jsx)(n.code,{children:"display_name"}),", tool scene ",(0,i.jsx)(n.code,{children:"scene"}),", layers that the tool works on ",(0,i.jsx)(n.code,{children:"layer_types"}),", ",(0,i.jsx)(n.code,{children:"extra_hint"})," (text that appears when mouse havers tool icon), primary shortcut name ",(0,i.jsx)(n.code,{children:"shortcut"})," and any extra shortcuts ",(0,i.jsx)(n.code,{children:"extra_shortucts"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"At the moment extensions can't make their own shortcuts so you can ignore shortcut and extra_shortucts."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"remove_tool(tool_name: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Removes a tool with name ",(0,i.jsx)(n.code,{children:"tool_name"})," and assign Pencil as left tool, Eraser as right tool."]}),"\n",(0,i.jsx)(n.h2,{id:"selectionapi",children:"SelectionAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to pixelorama's selection system."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-7",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"clear_selection()"})]}),"\n",(0,i.jsx)(n.p,{children:"Clears the selection Gizmo."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"select_all()"})]}),"\n",(0,i.jsx)(n.p,{children:"Select the entire region of current cel."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"select_rect(rect: Rect2, operation: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Selects a portion defined by ",(0,i.jsx)(n.code,{children:"rect"})," of the current cel. ",(0,i.jsx)(n.code,{children:"operation"})," influences it's behaviour with previous selection rects (0 for adding, 1 for subtracting, 2 for intersection)."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"move_selection(destination: Vector2, with_content: bool, transform_standby: bool)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Moves a selection to ",(0,i.jsx)(n.code,{children:"destination"}),", with content if ",(0,i.jsx)(n.code,{children:"with_content"})," is true. If ",(0,i.jsx)(n.code,{children:"transform_standby"})," is true then the transformation will not be applied immediatelyunless ",(0,i.jsx)("kbd",{children:"Enter"})," is pressed."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"resize_selection(new_size: Vector2, with_content: bool, transform_standby: bool)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Resizes the selection to ",(0,i.jsx)(n.code,{children:"new_size"}),", with content if ",(0,i.jsx)(n.code,{children:"with_content"})," is ",(0,i.jsx)(n.code,{children:"true"}),". If ",(0,i.jsx)(n.code,{children:"transform_standby"})," is ",(0,i.jsx)(n.code,{children:"true"})," then the transformation will not be applied immediately unless ",(0,i.jsx)("kbd",{children:"Enter"})," is pressed."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"invert()"})]}),"\n",(0,i.jsx)(n.p,{children:"Inverts the selection gizmo."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"make_brush()"})]}),"\n",(0,i.jsx)(n.p,{children:"Makes a project brush out of the current selection's content."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"copy()"})]}),"\n",(0,i.jsx)(n.p,{children:"Copies the selection content (works in or between pixelorama instances only)."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"paste(in_place: bool)"})]}),"\n",(0,i.jsx)(n.p,{children:"Pastes the selection content."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"delete_content()"})]}),"\n",(0,i.jsx)(n.p,{children:"Deletes the drawing on current cel enclosed within the selection's area."}),"\n",(0,i.jsx)(n.h2,{id:"projectapi",children:"ProjectAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to basic project manipulation functions."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-8",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Project"})," ",(0,i.jsx)(n.code,{children:"new_project(frames: Array, name: String, size: Vector2, fill_color: Color)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Creates a new project (with new tab) with name ",(0,i.jsx)(n.code,{children:"name"}),", size ",(0,i.jsx)(n.code,{children:"size"}),", fill color ",(0,i.jsx)(n.code,{children:"fill_color"})," and frames ",(0,i.jsx)(n.code,{children:"frames"}),". The created project also gets returned."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"frames"})," is an ",(0,i.jsx)(n.strong,{children:"Array"})," of type ",(0,i.jsx)(n.strong,{children:"Frames"}),". Usually it can be left as []."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"switch_to(project: Project)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Switches to the tab that contains the ",(0,i.jsx)(n.code,{children:"project"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Project"})," ",(0,i.jsx)(n.code,{children:"get_current_project()"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the project in focus."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"Dictionary"})," ",(0,i.jsx)(n.code,{children:"get_project_info(project: Project)"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns a dictionary containing all the project information."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"BaseCel"})," ",(0,i.jsx)(n.code,{children:"get_current_cel()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns the current cel. Cel type can be checked using function ",(0,i.jsx)(n.code,{children:"get_class_name()"})," located inside the cel. It's type can be ",(0,i.jsx)(n.strong,{children:"GroupCel"}),", ",(0,i.jsx)(n.strong,{children:"PixelCel"}),", ",(0,i.jsx)(n.strong,{children:"Cel3D"}),", or ",(0,i.jsx)(n.strong,{children:"BaseCel"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"BaseCel"})," ",(0,i.jsx)(n.code,{children:"get_cel_at(project: Project, frame: int, layer: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:['Frames are counted from left to right, layers are counted from bottom to top. Frames/layers start at "0" and end at ',(0,i.jsx)(n.code,{children:"project.frames.size() - 1"})," and ",(0,i.jsx)(n.code,{children:"project.layers.size() - 1"})," respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"set_pixelcel_image(image: Image, frame: int, layer: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Sets an ",(0,i.jsx)(n.code,{children:"image"})," at ",(0,i.jsx)(n.code,{children:"frame"})," and ",(0,i.jsx)(n.code,{children:"layer"})," on the current project. Frames are counted from left to right, layers are counted from bottom to top."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"add_new_frame(after_frame: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds a new frame in the current project after frame ",(0,i.jsx)(n.code,{children:"after_frame"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"add_new_layer(above_layer: int, name: String, type: res://src/Autoload/Global.gd.LayerTypes)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Adds a new Layer of type ",(0,i.jsx)(n.code,{children:"type"})," with name ",(0,i.jsx)(n.code,{children:"name"})," in the current project above layer ",(0,i.jsx)(n.code,{children:"above_layer"})," (",(0,i.jsx)(n.code,{children:"above_layer"})," = 0 is the bottom-most layer and so on)."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"type"})}),(0,i.jsx)(n.th,{children:"class"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"PixelLayer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"GroupLayer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"3DLayer"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"exportapi",children:"ExportAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to adding custom exporters."}),"\n",(0,i.jsx)(n.h3,{id:"enumerations-1",children:"Enumerations"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enum"}),"  ",(0,i.jsx)(n.code,{children:"ExportTab"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IMAGE = 0"}),"\n",(0,i.jsx)(n.li,{children:"SPRITESHEET = 1"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"method-descriptions-9",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"int"})," ",(0,i.jsx)(n.code,{children:"add_export_option(format_info: Dictionary, exporter_generator: Object, tab: ExportTab, is_animated: bool)"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"format_info"})," has keys: ",(0,i.jsx)(n.code,{children:"extension"})," and ",(0,i.jsx)(n.code,{children:"description"})," whose values are of type ",(0,i.jsx)(n.strong,{children:"String"})," e.g:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'format_info = {"extension": ".gif", "description": "GIF Image"}'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"exporter_generator"})," is a node with a script containing the method ",(0,i.jsx)(n.code,{children:"override_export()"})," which takes 1 argument of type ",(0,i.jsx)(n.strong,{children:"Dictionary"})," which is automatically passed to ",(0,i.jsx)(n.code,{children:"override_export()"})," at time of export and contains keys: ",(0,i.jsx)(n.code,{children:"processed_images"}),", ",(0,i.jsx)(n.code,{children:"durations"}),", ",(0,i.jsx)(n.code,{children:"export_dialog"}),", ",(0,i.jsx)(n.code,{children:"export_paths"}),", ",(0,i.jsx)(n.code,{children:"project"})]}),"\n",(0,i.jsxs)(n.p,{children:["If the value of ",(0,i.jsx)(n.code,{children:"tab"})," is not in ",(0,i.jsx)(n.code,{children:"ExportTab"})," then the format will be added to both tabs."]}),"\n",(0,i.jsx)(n.p,{children:"Returns the index of exporter, which can be used to remove exporter later."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"remove_export_option(id: int)"})]}),"\n",(0,i.jsxs)(n.p,{children:["Removes the exporter with ",(0,i.jsx)(n.code,{children:"id"})," from Pixelorama."]}),"\n",(0,i.jsx)(n.h2,{id:"signalsapi",children:"SignalsAPI"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to the basic commonly used signals."}),"\n",(0,i.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Gives access to the basic commonly used signals. Some less common signals are not mentioned in Api but could be accessed through source directly."}),"\n",(0,i.jsx)(n.h3,{id:"method-descriptions-10",children:"Method Descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"connect_project_changed(target: Object, method: String)"})]}),"\n",(0,i.jsx)(n.p,{children:"connects a signal to method present in target, that emits whenever you switch to some other project."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"disconnect_project_changed(target: Object, method: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["reverse of ",(0,i.jsx)(n.code,{children:"connect_project_changed()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"connect_cel_changed(target: Object, method: String)"})]}),"\n",(0,i.jsx)(n.p,{children:"connects a signal to method present in target, that emits whenever you select a different cel."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"disconnect_cel_changed(target: Object, method: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["reverse of ",(0,i.jsx)(n.code,{children:"connect_cel_changed()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"connect_tool_color_changed(target: Object, method: String)"})]}),"\n",(0,i.jsx)(n.p,{children:"connects a signal to method present in target, that emits whenever a tool changes color."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"disconnect_tool_color_changed(target: Object, method: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["reverse of ",(0,i.jsx)(n.code,{children:"connect_tool_color_changed()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"connect_current_cel_texture_changed(target: Object, method: String)"})]}),"\n",(0,i.jsx)(n.p,{children:"connects a signal to method present in target, that emits whenever texture of the currently focused cel changes."}),"\n",(0,i.jsxs)(n.p,{children:["\u25cf ",(0,i.jsx)(n.strong,{children:"void"})," ",(0,i.jsx)(n.code,{children:"disconnect_current_cel_texture_changed(target: Object, method: String)"})]}),"\n",(0,i.jsxs)(n.p,{children:["reverse of ",(0,i.jsx)(n.code,{children:"connect_current_cel_texture_changed()"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);