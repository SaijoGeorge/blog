webpackJsonp([36],{117:function(e,t,a){"use strict";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=a.n(r),o=a(35),p=(a.n(o),function(){function e(e,t){for(var a=0;a<t.length;a++){var c=t[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,a,c){return a&&e(t.prototype,a),c&&e(t,c),t}}()),s=function(e){function t(){return c(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this.el.querySelector("#chuck-leg");TweenMax.set(e,{transformOrigin:"230, 150"}),this.animation=TweenMax.fromTo(e,1.2,{rotation:10},{rotation:-40,repeat:-1,yoyo:!0,ease:Power4.easeOut}),this.animation.paused(!this.props.isActive)}},{key:"componentWillReceiveProps",value:function(e){this.animation.paused(!e.isActive)}},{key:"render",value:function(){var e=this;return i.a.createElement("svg",{ref:function(t){return e.el=t},viewBox:"0 0 600 600"},i.a.createElement("clipPath",{id:"chuck-norris-clip"},i.a.createElement("path",{d:"M0 0h600v600H0z"})),i.a.createElement("path",{clipPath:"url(#chuck-norris-clip)",d:"M600 300c0 165.686-134.314 300-300 300S0 465.686 0 300C0 134.315 134.314 0 300 0s300 134.315 300 300",fill:"#2F611C"}),i.a.createElement("path",{d:"M366 507.668c0 5.773-13.04 5.357-30.707 1.69-10.63-2.207-32.77 3.586-35-5.334-1-4 6.616-12.107 7.04-25.69.217-6.888-9.69-10.632-7.333-14.334 12.896-20.266 23.398-1.19 25 4.668 4.293 15.69 8.677 22.86 20.667 30.333 11.99 7.475 20.333 3.56 20.333 8.668z",fill:"#FFCCBC"}),i.a.createElement("path",{d:"M355.63 297.492c-6.876-28.035-30.284-24.107-34-30-.142-.226-.286-.44-.43-.66-7.08-.387-34.867-18.832-29.2 13.388.2.75.397 1.495.63 2.273 6.95 23.135 7.975 61.547 10.703 85.844C307 401 274.323 471.612 274.323 471.612l57.26 9s13.207-54.927 17.047-98.12c1.598-17.97 11.573-66.36 7-85z",fill:"#A6BC4A"}),i.a.createElement("g",{id:"chuck-leg"},i.a.createElement("path",{d:"M100.3 142.824c-8.284 8.378-12.71 27.453-4.44 26.974 8.27-.484 27.372-11.614 27.226-25.627-.126-11.78 5.735-21.036-2.534-20.555-8.27.482-13.947 12.833-20.253 19.21z",fill:"#FFCCBC"}),i.a.createElement("path",{d:"M295.793 296c9.572 14.072 32.606 30.362 35.79 14.667 4.75-23.417 30.083-49.37 30.083-59.333 0-8.566-42.902-29.626-57.18-40.756-48.86-38.088-177.815-89.086-181.005-86.495 0 0 .787 11.21-1.22 22.63-1.927 10.955-15.442 19.23-15.442 19.23s125.367 42.22 157.977 84.32c11.972 15.456 30.956 45.598 30.998 45.737z",fill:"#A6BC4A"})),i.a.createElement("path",{d:"M306.726 194.66c-1.742 3.36-4.28 7.77-7.08 11.05-2.793 3.27-7.307 4.48-11.346 3-.8-.292-1.64-.63-2.477-1.01-4.677-2.133-7.25-7.27-6.077-12.276.7-2.987 1.19-7.016 2.856-10.46 2.434-5.038 8.22-7.465 13.607-5.958 1.782.5 3.926 1.205 5.953 2.148 5.086 2.366 7.145 8.526 4.563 13.506zM443.22 194.1c-.23-.41-3.86-7.03-4.7-10.4-.27-1.08-.52-2.16-.76-3.23.6-1.04 1.17-2.12 1.7-3.24.25.63.64 1.06 1.15 1.25.01 0 .01 0 .02.01 1.04 5.16 1.91 10.47 2.59 15.61z",fill:"#FFCCBC"}),i.a.createElement("path",{d:"M472.077 263.07c3.03-25.382-28.85-68.948-28.85-68.948s1.976 15.04-2.435 24.964c-3.5 7.876-12.266 14.194-20.334 17.167-6.333 2.333-11.404 5.717-15.5 7.665 2.546-9.455 4.96-28.907 1.667-48.668-3.25-19.5 18.748-12.68 1.748-14.68-6.04-.71-46.825-6.284-51.225-3.62-5.912.904-10.986 3.283-14.14 8.38-6 5.577-32.28-.16-36.493-.188l-17.89 27.983s15.89 7.29 29.39 7.244c-3.625 2.72-6.373 7.397-7.39 15.88-11.637 7.13-22 9.74-22 26 0 20.71 65.324 81.777 65.324 81.777s8.674-13.88 8.674-31.277c0-3.403-.31-6.755-.94-9.933 6.04-1.154 11.94-2.817 20.94-4.567 4.236-.02 8.5-5.5 14-7 5.064-1.38 8.67 1.48 15 1-3.567 8.744-.263 12.644 38 16 12.103 1.06 23-14.193 23-28 0-4.25-.08-10.528-.547-17.18z",fill:"#BADA55"}),i.a.createElement("path",{d:"M432 287c1 5-3.82 9-11 9s-18-2.268-18-10 3.82-17 11-17 16.483 10.42 18 18z",fill:"#FFCCBC"}),i.a.createElement("path",{d:"M453 161c0 15.188-24.745 35-38 35-13.255 0-14-22.312-14-37.5s10.745-27.5 24-27.5 28 14.812 28 30z",fill:"#DFB28B"}),i.a.createElement("path",{d:"M346.25 232c-.675 0 11.875 19 6.625 35.5-4.267 13.41-27.875 14.75-16.125 21.75 3.48 2.073 23.25-14.25 25.016-31.36 3.306.697 8.26.423 15.234 1.61 11.75 2 25.183-12.027 25.183-12.027s-13.964 8.346-19.976 7.738C362.484 253.218 346.56 232 346.25 232zM455.5 279.25c0-4.764-3.51-9.7-6.05-10.382-.06-.016-3.51-1.368-5.783-1.368-5.178 0-16 3.167-16 3.167s10.833-.833 16.61 1.31c-.006.092-.026.18-.026.273 0 .81-.505 4.898-3 8.75-3.848 5.944-9.25 12.25-9.25 12.25s18.75-16.354 19-17.125c.084-.256 1.533 1.077 2.5 4.708.816 3.063 1.5 8.542 1.5 8.542s.5-5.36.5-10.125z",fill:"#827717"}),i.a.createElement("path",{d:"M333.334 251.67c5.163 34.08 4.854 44.377-4.667 36.332-1.47-1.242-.81-7.94-1.667-20.502-.29-4.26-2.25-8.75-3-15.83-1.115-10.53 2.042-18.94 3.5-24.92 1.305-5.355 1.964-8.892 3.167-9.08 11.64-1.83 10.44.38 7.833 6.83-2.62 6.48-6.673 17.225-5.166 27.17zM329.75 345C324 359.75 302 397 307 401c2.046 1.637 4.167 3.002 7.667 4.002 3.718 1.063 16.583-33.752 21.833-54.502 1.625-6.424 1.803-10.595 2.75-16.5 2.92-18.214 2.25-35.75-1.25-34.33-2.826 1.145-1.323 8.27-3.25 25.58-.516 4.635-2.924 14.425-5 19.75z"}),i.a.createElement("path",{d:"M347.333 298.335c0 4.97-6.248 6.667-10.666 6.667s-8-4.03-8-9 2.666-11.667 8-9c3.95 1.976 10.666 6.363 10.666 11.333z"}),i.a.createElement("path",{d:"M365 304c-3.5 4.25-4.334 2.667-12 0-6.78-2.36-13.666-1.386-13.666-4.33 0-2.947 5.736-3.92 12.916-3.92 1.66 0 4.707.835 6.25 1.25 5.13 1.38 7.94 5.252 6.5 7zM332.775 288.485c.242-2.07-4.242-5.048-14.25-2.125-2.915.852-11.36 6.31-13.75 9-12 13.5-29.25 35.308-29.25 38 0 1.682 4.766 8.5 10.75 8.5.337 0 15.113-29.17 28.225-44.61 8.32-9.798 16.275 8.36 18.275-8.765z"}),i.a.createElement("path",{d:"M455.667 146.67c2.666 11.33-11.314 38.682-9.667 40 3.333 2.666 1.885 8.464.708 8.464-2.64 0-34.108-12.73-44.708-28.798-7.876-11.94 1.667-29.998 1.667-34 0-9.39 25.064-12.333 29.666-12.333s20.184 17.527 22.334 26.666z",fill:"#D6532B"}),i.a.createElement("path",{d:"M439.46 177.23c-.53 1.12-1.1 2.2-1.7 3.24.24 1.07.49 2.15.76 3.23.84 3.37 4.47 9.99 4.7 10.4.01.01.01.02.01.02v.02c1.15 8.59 1.1 23.61-4.35 29.61-16.11 17.7-33.92 20.17-33.92 20.17s3.66-16.92 3.12-30.92c-.53-13.59-2.89-15.38-5.94-32.06-.51-1.98-.83-4.04-1.01-6.1-.64-7.05.38-14.05 1.2-17.5.28-1.16.54-2.28.79-3.37 4.61-19.93 6.02-28.71 26.92-23.74 10.5 2.49 16.21 16.96 13.61 33.26.97-.87 1.94-1.25 2.74-.96 1.88.68 3.61 3.81.51 9.2-2.33 4.05-4.4 7.41-6.27 6.76-.01-.01-.01-.01-.02-.01-.51-.19-.9-.62-1.15-1.25z",fill:"#FFCCBC"}),i.a.createElement("path",{d:"M448 156.003c-11.622 28.89 2.305-11-23.333-11-9.48 0-23 2.338-23-3 0-5.34 12.853-17.334 22.333-17.334 13.11 0 27.276 23.187 24 31.333z",fill:"#D6532B"}),i.a.createElement("path",{d:"M411.69 165.11c.08-.07.13-.11.14-.11-.52.83-.48.73-.14.11z",fill:"#FFAB91"}),i.a.createElement("path",{d:"M415.33 157.17c0 1.26-2.8 6.34-3.64 7.94-.71.6-5.19 4.99-.86 6.89 3.58 1.57-3.79 3.22-6.88 4.12-.52.15-.91.28-1.12.38-.9.45-1.42-.28-1.7-1.66-.64-7.05.38-14.05 1.2-17.5.28-1.16.54-2.28.79-3.37 1.15-1.53 2.68-2.47 4.38-2.47 2.63 0 5.73.42 7.11 2.72.45.76.72 1.73.72 2.95z",fill:"#F0BBAD"}),i.a.createElement("path",{d:"M433.667 158.336c0 .736-6.147-2.667-9-2.667-2.854 0-4.155-.286-4.334-1-.5-2.004 2.313-1.334 5.167-1.334 2.853 0 8.167 4.264 8.167 5zM415.833 154.5c0-.46 2.833-2.166-5.166-4.164-2.32-.58-6.334 1.04-6.334 1.5 0 .46 1.94.833 4.333.833 2.394 0 7.167 2.29 7.167 1.83z",fill:"#91360B"}),i.a.createElement("path",{d:"M430.667 160.003c3 5-1.492 2.333-3.333 2.333-1.842 0-3.667-.71-3.667-2 0-1.288 1.825-2.667 3.667-2.667 1.84 0 2.67 1.228 3.333 2.333zM406.627 155.71c-3.85 4.38 1.05 2.565 2.86 2.896 1.81.33 3.734-.04 3.966-1.31.232-1.267-1.316-2.95-3.128-3.28-1.81-.332-2.848.728-3.698 1.695z",fill:"#3E2723"}),i.a.createElement("path",{d:"M443 160.336c-.667 2.333-4.406 8.617-9.333 14-.936 1.023-1.605 1.96-2.18 2.796-.975 1.416-2.93 1.824-4.33.828-4.02-2.855-11.79-4.592-15.72-4.96-4.437-.418-10.23-.084-10.77-.084v4.753c0 .96 1.155 16.366 8.666 18.163 7.667 1.834 20.334-.83 26.5-13.33 10.296-20.866 8.27-26.026 7.167-22.167zm-27.667 25.333c-3.866 0-9-2.643-9-4.667 0-2.025 3.333-3.17 9-2.667 3.852.34 6.333 2.973 6.333 4.998 0 2.025-2.467 2.335-6.333 2.335z",fill:"#D6532B"}),i.a.createElement("path",{d:"M419.576 181.53c-.026.22-2.204-.19-5.448-.578-3.245-.388-5.406-.414-5.38-.633.025-.22 2.23-.55 5.475-.16 3.245.387 5.38 1.153 5.353 1.37z",fill:"#301204"}),i.a.createElement("path",{d:"M363.167 203.335s-1.678 4.42-3.667 7.667c-1.49 2.433-4.142 3.905-6.994 3.885-2.975-.02-7.278-.375-8.097-.337-.032 0-.046-.018-.04-.048.517-2.238 2.88-13.25 2.88-13.25s-4.625 8.084-9.284 11.485c-1.127.823-2.256 1.637-3.646 1.76-2.973.26-7.606.726-8.247 1.037l-.037-.004c-1.37-.98 2.997-14.678 2.797-14.267C322.75 213.75 300 217.36 300 217.36s13.875 4.015 18 3.308c5.263-.902 10.83-.176 11.5-1.167.77-1.138 2.05-1.834 3.425-1.863 3.302-.072 5.272-.253 6.377-.497.006 0 17.442 1.205 18.156 1.33.12.02.245.027.376.03 5.166.125 5.333-15.165 5.333-15.165z",fill:"#827717"}))}}]),t}(r.Component);t.default=s}});
//# sourceMappingURL=36.86a431d2e849f529167d.js.map