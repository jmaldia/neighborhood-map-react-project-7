(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(350)},150:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(55),i=n.n(r),c=(n(150),n(56)),s=n(57),l=n(59),u=n(58),m=n(60),h=n(10),f={APIkey:"AIzaSyD2Ow6iH0zHR4v1KFvp96IS2owFoYTWta0"},d={clientID:"KOD25YODVKYQQKKWHFSJQMJAJVZZKGKMGPPPWGHSD4SNOZW5",clientSecret:"MEEYAH1RZUJCTDVPYWYRSRC00Y2AKSYCGGFODQPUTX0AW1GH"},p=(n(62),function(e){var t=e.menuButton?"Menu Menu-button-on":"Menu Menu-button-off";return o.a.createElement("div",{"aria-label":"Sidebar Menu",role:"Menu",className:t},o.a.createElement("header",null,o.a.createElement("h2",null,"THE SPOTS")),o.a.createElement("div",{"aria-label":"Category Filter",role:"Option","aria-selected":!0,className:"Filter"},o.a.createElement("select",{className:"Filter-dropdown",tabIndex:"2",onChange:function(t){return e.filterLocations(t.target.value)}},o.a.createElement("option",{value:"All"},"All Locations"),o.a.createElement("option",{value:"New American Restaurant"},"American Restaurants"),o.a.createElement("option",{value:"Asian Restaurant"},"Asian Restaurants"),o.a.createElement("option",{value:"Bagel Shop"},"Bagel Spots"),o.a.createElement("option",{value:"Bistro"},"Bistros"),o.a.createElement("option",{value:"Breakfast Spot"},"Breakfast Spots"),o.a.createElement("option",{value:"Fried Chicken Joint"},"Chicken Spots"),o.a.createElement("option",{value:"Coffee Shop"},"Coffee Spots"),o.a.createElement("option",{value:"Cuban Restaurant"},"Cuban Restaurant"),o.a.createElement("option",{value:"Deli / Bodega"},"Deli/Bodega Spots"),o.a.createElement("option",{value:"Dessert Shop"},"Dessert Spots"),o.a.createElement("option",{value:"Donut Shop"},"Donut Spots"),o.a.createElement("option",{value:"Falafel Restaurant"},"Falafel Restaurants"),o.a.createElement("option",{value:"Greek Restaurant"},"Greek Restaurants"),o.a.createElement("option",{value:"Ice Cream Shop"},"Ice Cream Spots"),o.a.createElement("option",{value:"Irish Pub"},"Irish Restaurants"),o.a.createElement("option",{value:"Italian Restaurant"},"Italian Restaurants"),o.a.createElement("option",{value:"Mexican Restaurant"},"Mexican Restaurants"),o.a.createElement("option",{value:"Sushi Restaurant"},"Sushi Restaurants"))),o.a.createElement("ol",{"aria-label":"List of Locations"},e.results.map(function(t,n){var a=t.infoOn?"Places-height-tl":"Places-height-sh";return o.a.createElement("li",{className:"Places ".concat(a),tabIndex:n+2,key:t.id,onClick:function(){return e.showInfo(t)},onKeyPress:function(n){return e.enterKeyPressed(n,t)}},o.a.createElement("h3",null,t.name),o.a.createElement("div",{"aria-label":"Location Image",className:"Places-image"},o.a.createElement("img",{src:t.photoSrc?t.photoSrc:"https://imgplaceholder.com/300x300/8ec9ee/ffffff?text=Sorry+the_br_image+for_br_this+location_br_is+not+available",width:"100",alt:t.name})),o.a.createElement("div",{"aria-label":"Location Information",className:"Places-info"},o.a.createElement("div",{"aria-label":"Location Address",className:"Places-address"},o.a.createElement("p",null,t.location.address),o.a.createElement("p",null,t.location.city,", ",t.location.state," ",t.location.postalCode)),o.a.createElement("div",{"aria-label":"Location Cross Street",className:"Places-cross-street"},t.location.crossStreet&&o.a.createElement("p",null,"Cross Street(s): ",t.location.crossStreet)),o.a.createElement("div",{"aria-label":"Location Category",className:"Places-category"},o.a.createElement("p",null,"Category: ",t.categories?o.a.createElement("span",null,t.categories[0].name):"Uncategorized")),o.a.createElement("div",{"aria-label":"Delivery Information",className:"Places-delivery"},o.a.createElement("p",null,t.delivery?o.a.createElement("a",{tabIndex:"-1",href:t.delivery.url},"Order Now"):"Delivery not available"))))})))}),v=n(30),g=Object(v.withScriptjs)(Object(v.withGoogleMap)(function(e){return o.a.createElement(v.GoogleMap,{defaultZoom:15,zoom:15,defaultCenter:{lat:40.8257712,lng:-74.1074718},center:{lat:40.8257712,lng:-74.1074718}},e.markerResults&&e.markerResults.filter(function(e){return e.isVisible}).map(function(t){return o.a.createElement(v.Marker,{key:"m-".concat(t.id),"aria-label":"Marker",position:{lat:t.lat,lng:t.lng},onClick:function(){return e.clickMarker(t)},animation:t.animation},t.isOpen&&o.a.createElement(v.InfoWindow,null,o.a.createElement("h3",null,t.name,o.a.createElement("br",null),t.address)))}))})),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(g,Object.assign({},this.props,{"aria-label":"Map",googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=".concat(f.APIkey),loadingElement:o.a.createElement("div",{style:{height:"100%",width:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100vh",width:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"100%",width:"100%"}})}))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).clickMarker=function(e){n.closeAllInfoWindow(),e.isOpen=!0,n.setState(function(e){return{markers:e.markers}})},n.state={locations:[],results:[],markers:[],resultsMarkers:[],categories:[],menuButton:!1},n.showInfo=n.showInfo.bind(Object(h.a)(Object(h.a)(n))),n.clickMarker=n.clickMarker.bind(Object(h.a)(Object(h.a)(n))),n.closeAllInfoWindow=n.closeAllInfoWindow.bind(Object(h.a)(Object(h.a)(n))),n.filterLocations=n.filterLocations.bind(Object(h.a)(Object(h.a)(n))),n.enterKeyPressed=n.enterKeyPressed.bind(Object(h.a)(Object(h.a)(n))),n.menuButtonForMobile=n.menuButtonForMobile.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.foursquare.com/v2/venues/","search?ll=").concat("40.8257712",",").concat("-74.1074718","&client_id=").concat(d.clientID,"&client_secret=").concat(d.clientSecret,"&v=").concat("20181016","&categoryId=").concat(" 4d4b7105d754a06374d81259","&radius=").concat(600)).then(function(e){return e.json()}).then(function(e){if(!e.meta.errorType)return e.response.venues;console.log("Uh oh. Something happened. \nError: ".concat(e.meta.errorDetail))}).then(function(t){var n=t.map(function(e){return{id:e.id,name:e.name,address:e.location.address,categories:e.categories[0].name,lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,animation:0}});t.forEach(function(t){var n;(n=t.id,fetch("https://api.foursquare.com/v2/venues/".concat(n,"/photos?limit=1&client_id=").concat(d.clientID,"&client_secret=").concat(d.clientSecret,"&v=").concat("20181016")).then(function(e){return e.json()}).then(function(e){if(!e.meta.errorType)return"https://igx.4sqi.net/img/general/300x300".concat(e.response.photos.items[0].suffix);console.log("Uh oh. Something happened. \nError: ".concat(e.meta.errorDetail))})).then(function(n){t.photoSrc=n,e.setState(function(e){return{locations:e.locations.filter(function(e){return e.id!==t.id}).concat([t])}})}).catch(function(e){return console.log(e)})}),e.setState({locations:t,results:t,markers:n,markerResults:n})})}},{key:"showInfo",value:function(e){var t=this;this.state.locations.forEach(function(n){n.id!==e.id||e.infoOn?n.id===e.id&&e.infoOn?(e.infoOn=!e.infoOn,t.closeAllInfoWindow()):n.infoOn=!1:(e.infoOn=!e.infoOn,t.clickMarker(t.state.markers.find(function(t){return e.id===t.id?(t.animation=2,t):null})))}),this.setState(function(e){return{locations:e.locations,markers:e.markers}})}},{key:"enterKeyPressed",value:function(e,t){13===(e.keyCode||e.which)&&this.showInfo(t)}},{key:"enterKeyPressedMobile",value:function(e){13===(e.keyCode||e.which)&&this.menuButtonForMobile()}},{key:"menuButtonForMobile",value:function(){this.setState({menuButton:!this.state.menuButton})}},{key:"closeAllInfoWindow",value:function(){this.state.markers.forEach(function(e){e.isOpen=!1}),this.setState(function(e){return{markers:e.markers}})}},{key:"filterLocations",value:function(e){var t,n;"All"===e?(console.log(this.state.markers),t=this.state.locations,n=this.state.markers):(t=this.state.locations.filter(function(t){return t.categories[0].name===e}),n=this.state.markers.filter(function(t){return t.categories===e?(console.log(t.categories),t):null})),this.setState({results:t,markerResults:n})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h3",{onClick:this.showInfo},"RutherFood")),o.a.createElement("div",{tabIndex:"1",className:"Menu-button","aria-label":"Menu",role:"Menu",onClick:this.menuButtonForMobile,onKeyPress:function(t){return e.enterKeyPressedMobile(t)}},"Menu"),o.a.createElement("div",{className:"Map-area",style:{height:"100vh",width:"100%"}},o.a.createElement(p,Object.assign({},this.state,{showInfo:this.showInfo,enterKeyPressed:this.enterKeyPressed,filterLocations:this.filterLocations})),o.a.createElement(b,Object.assign({},this.state,{className:"Google-maps",clickMarker:this.clickMarker}))))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(t,e)})}}()},62:function(e,t,n){}},[[145,2,1]]]);
//# sourceMappingURL=main.9365e853.chunk.js.map