// do: use strick
//? num = 5 with using strick mode will give error (error: num is not defined)
//? function sayHi() {alert(this);}  output in strick mode will be  undefined  otherwise will be windows

sayHi(); // undefined
// do: variable
//?  =  assignment operator
//? name variable
//? variable can start with $ and _ and cant start with number and other symbols
//? alert( 1 / 0 ); // Infinity
//? alert( NaN + 1 ); // NaN
//? alert( "not a number" / 2 ); // NaN, such division is erroneous
//? alert( 3 * NaN ); // NaN
//? alert( "not a number" / 2 - 1 ); // NaN
//? NaN ** 0 is 1

//do  convert string to number
//? Number(str)
//? Number("an arbitrary string instead of a number")  output NaN
//? Number(null) >>> 0
//? Number(undefined) >>> NaN
//? alert( +true ); // 1
//? alert( +"5" ); // 5 number
//do  convert number to string
//? String(value)

//do falsy value
//? empty string - false- 0- NaN - undefined

//do Miscellaneous
//? let a = counter++ return the old value
//? let a = ++counter return the new value
//?   alert( null == undefine );  // (1) true bec all convert to number  null and undefine equal 0
//?   alert( null > 0 );  // (1) false
//?  alert( null == 0 ); // (2) false
//?   alert( null >= 0 ); // (3) true
//? nullish  (??) is similar  to (||) but nullish dont see "empty string" and 0 a falsy value

//? let x = 1 && 2 ?? 3  Syntax error we cant use nullish with && or ||  but we can use && or || with each other

//? to know if the construct function call with new key word using:
//ex : function User() {alert(new.target);}    user()>>> undefined

//ex  function User(name) {
//ex if (!new.target) { // if you run me without new
//ex return new User(name); // ...I will add new for you
//ex}
//ex  this.name = name;}

//? globalThis >> in browser refer to window  and in node refer to global

//do objects
//? when trying lopping using for in  and the object key is number  it will arrange it
//ex for example  let codes = {
//ex  "49": "Germany",
//ex  "41": "Switzerland",
//ex   "44": "Great Britain",
//ex   // ..,
//ex   "1": "USA"
//ex };
//ex for (let code in codes) {
//ex   alert(code); // 1, 41, 44, 49
//ex }
//ex it work only for number and not in string
//? to fix it will convert number to string by add + before the number and after lopping will convert the string again to number by add +
//ex let codes = {
//ex  "+49": "Germany",
//ex  "41": "Switzerland",
//ex   "+44": "Great Britain",
//ex   // ..,
//ex   "+1": "USA"
//ex };
//ex for (let code in codes) {
//ex   alert(+code); // 49,41,44,1
//ex }
//? to clone object use object.assign({},obj1,obj2)

//? Object.keys(obj) – returns an array of keys.
//? Object.values(obj) – returns an array of values.
//? Object.entries(obj) – returns an array of [key, value] pairs.

//? you can get all information about the property in object like (value-writable-enumerable-configurable) with
//ex let descriptor = Object.getOwnPropertyDescriptor({name:"ahmed"}, 'name');
//?  Object.defineProperty({}, "name", {   value: "John",writable:true });
//?  Object.defineProperty({}, "name", {   value: "John",writable:true });
//?  Object.defineProperties(user, {  name: { value: "John", writable: false }  });

//? getter and setter method in object
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
    return obj.propName;
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
    obj.propName = value;
  },
};

//? to check if the key exist or not in object
const myObj = {
  top: "hat",
  bottom: "pants",
};

myObj.hasOwnProperty("top");
//do __prototype__
// _.extend() search for it 
//ex
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats

//? obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key

1 - function Rabbit() {}; // by default:  Rabbit.prototype = { constructor: Rabbit }
alert(Rabbit.prototype.constructor == Rabbit); // true

2 - function Rabbit() {}; // by default: Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)

/* 
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
In order, these expressions would evaluate to false, true, and true.
! to avoid that define constructor in prototype
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
? inhertetance 
Dog.prototype=Object.create(Animal.prototype)
Dog.prototype.constructor=Dog
*/

//? to make private property
/* 
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
 */

// Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.


//do number
//? numb.toString(base)
//? base can be 2(binary) or 16(hexa) or 36

//do string
//? `Hello`.charAt(0) >>H
//? you can iterate over string using for of>>> for (let char of "Hello")
//? string are immutable str[0] = 'h'; error
//? 'Widget with id'.indexOf('Widget') >> 0  case sensative
//? "Widget with id".includes("Widget") >> true
//? There are 3 methods in JavaScript to get a substring: substring, substr and slice.
// slice(start, end)	from start to end (not including end)	allows negatives
// substring(start, end)	between start and end	negative values mean 0
// substr(start, length)	from start get length characters	allows negative start
//ex "stringify".slice(0, 5) >> strin
//ex "stringify".substring(6, 2)  // "ring"
//ex "stringify".substr(2, 4 (كام حرف عاوز)) // 'ring'

//do array
//? alert( [] + 1 ); // "1"
//? alert( [1] + 1 ); // "11"
//? alert( [1,2] + 1 ); // "1,21"
//? arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
//? arr.lastIndexOf(item, from) – same, but looks for from right to left.
//? arr.includes(item, from) – looks for item starting from index from, returns true if found.

//? to check if array  // Array.isArray([]) //true
//? sort methode mutated the original array
//? concat methode return new array

//do function
//?  function sayBy() {} ;  sayBy.name >>>sayBy
//?  function sayBy(a,b,x) {} ;  sayBy.length >>>return the number of argument //3

//do DOM
 1- /* 
              
  elem.hasAttribute(name) – checks for existence.
  elem.getAttribute(name) – gets the value.
  elem.setAttribute(name, value) – sets the value.
  elem.removeAttribute(name) – removes the attribute.
  These methods operate exactly with what’s written in HTML.

  Also one can read all attributes using elem.attributes: a collection of objects that belong to a built-in Attr class, with name and value properties.

  Here’s a demo of reading a non-standard property:
              
              */
 
2- /* 
  <a id="a" href="#hello">link</a>
  <script>
    // attribute
    alert(a.getAttribute('href')); // #hello

    // property
    alert(a.href ); // full URL in the form http://site.com/page#hello
  </script>

*/

3-//?select with attribute  ((.div[show-info="name"]))
 /* 
<div show-info="name"></div>
document.querySelectorAll('[show-info]')
? custom attrinute
<body data-about="Elephants">
document.body.dataset.about
Multiword attributes like ((data-order-state)) become camel-cased: ((dataset.orderState)).
*/

 4- //?create element
    /* 
     document.createElement('div')
    node.append(...nodes or strings) – append nodes or strings at the end of node,
    node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
    node.before(...nodes or strings) –- insert nodes or strings before node,
    node.after(...nodes or strings) –- insert nodes or strings after node,
    node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
    ex  div.before( document.createElement('hr')) 
     ex  div.before('<p>Hello</p>', document.createElement('hr')) you can add multiple thing

   .........................................................................................
    elem.insertAdjacentHTML(where, html)
    "beforebegin" – insert html immediately before elem,
    "afterbegin" – insert html into elem, at the beginning,
    "beforeend" – insert html into elem, at the end,
    "afterend" – insert html immediately after elem.
    ex div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
    */

    5- //?remove element
    /* 
    node.remove()
    ex div.remove()
    */
   6- //? cloning element
   /*
   The call [[elem.cloneNode(true)]] creates a “deep” clone of the element – with all attributes and subelements. If we call [[elem.cloneNode(false)]], then the clone is made without child elements.
   */

  7-//? className and classList
  /* 
    elem.classList.add/remove("class") – adds/removes the class.
    elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
    elem.classList.contains("class") – checks for the given class, returns true/false.
    Besides, classList is iterable, so we can list all classes with for..of, like this:
    ex for (let name of document.body.classList) {alert(name); // main, and then page}

    ? To set the full style as a string, there’s a special property style.cssText
    ex div.style.cssText=`color: red !important;
    ex background-color: yellow;
    ex width: 100px;
    ex text-align: center;`;

    ? to get the style in css file
    getComputedStyle(element, [pseudo])
    A pseudo-element if required, for instance ::before. An empty string or no argument means the element itself.
     getComputedStyle(elem)
  */
  
     //do BOM
      1- /* 
          offsetParent – is the nearest positioned ancestor or td, th, table, body.
          offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
          offsetWidth/offsetHeight – “outer” width/height of an element including borders.
          clientLeft/clientTop – the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.
          clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
          scrollWidth/scrollHeight – the width/height of the content, just like clientWidth/clientHeight, but also include scrolled-out, invisible part of the element.
          scrollLeft/scrollTop – width/height of the scrolled out upper part of the element, starting from its upper-left corner.
          All properties are read-only except scrollLeft/scrollTop that make the browser scroll the element if changed.
      
      */

    2- /* 
    window.innerWidth/innerHeight includes the scrollbar.
    clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
    Read the current scroll: window.pageYOffset/pageXOffset.
    window.scrollTo(pageX,pageY) – absolute coordinates,
    window.scrollBy(x,y) – scroll relative the current place,
    elem.scrollIntoView(top) – scroll to make elem visible (align with the top/bottom of the window).
    
    */









    // ..........................................................................................//

    //do regular expression

    1- //? /test/.test("test ahmed"); return true or false  
        //ex (/dog|cat|bird|fish/).test("hi dog the world") //true
        //! to ignore case sensitive you can use flag  i   ex: (/dog|cat|bird|fish/i)

    
    2- //? "Hello, World!".match(/Hello/); return array of words match>>  [Hello]
       //! to extract all word you must use flag g  ex : "Hello, World Hello !".match(/Hello/) >> [Hello,Hello]
      //  ~ wild card (.) ==> the mean if you doest remember all letter in word so you can put wild card to find all word ex : "I'll hum hug huj a song".match(/hu./gi) ==>[hum,hug,huj]
      //! /a[bug]m/ this mean that the word must start with a and end with m  and in between that can be either b,u,g ==>abm,aum,agm
      //! /[a-z]/ this mean any letter within the range of a to z you can use it with number also
      //! /[^auioe]/ this mean any letter except a,u,i,o,e
      //! /[a+]/ this mean at least one a or more 
      //! /[a*]/ Match Characters that Occur Zero or More Times
      //! /t[a-z]*?i/ Lazy Matching mean any character that start with t  and end with i  and in between in any letter bettwen a-z and can be zero on more time( من الاخر بتاخد اقل عدد حروف يحقق الباترن بتاعي)

      //~ /[^ab]/ <<( تحتها جوا كدا معناها neglete [] )
      //~ /^[ab]/ <<( mean must start with  )
      //~ /ab$/ <<( mean must end with  )
      //~ /\w/g ==> this mean /[A-Za-z0-9_]+/   mean all word
      //~ /\W/g ==> this mean /[^A-Za-z0-9_]+/   mean any thing except word
      //~ /\d/g ==> this mean /[0-9]/   mean any number
      //~ /\D/g ==> this mean /[^0-9]/   mean any thing except number
      //~ /\s/g ==> this mean any white space  and new line   
      //~ /\S/g ==> this mean any thing expect white space  and new line   

      //! /a{2,3}/  ==> that mean you with search for certain number of a between 2,3
      //! /a{2,}/  ==> that mean you with search for certain number of a between 2,to infinity
      //! /a{2}/  ==> that mean you with search for certain number 
      //! /colou?r/  ==> this mean that char u can be exist or no(optional)

      //~ /q(?=u)/  ===> you check that the char u must come after q  but will return q only
      //ex  "qu".match(/q(?=u)/); will return q only

      //~ /q(!=u)/  ===> you check that the char u must not come after q  but will return q only
      //ex  "qu".match(/q(!=u)/); will return q only




      /* 
      
      
      function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
console.log(msToTime(300000))
      
      
      */