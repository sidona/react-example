/**
 * Created by sdonose on 7/13/2016.
 */
"use strict";

var React=require('react');

var About=React.createClass({
    render:function () {
       return(
           <div>
               <h1>About</h1>
               <p>This application uses following technologies:
               <ul>
                   <li>React</li>
                   <li>React Router</li>
                   <li>flux</li>
                   <li>Node</li>
                   <li>Gulp</li>
               </ul>
               </p>
           </div>
       )
    }
});

module.exports=About;