"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,i,e){return i&&_defineProperties(t.prototype,i),e&&_defineProperties(t,e),t}var Particle=function(){function t(){_classCallCheck(this,t),this.started=!1}return _createClass(t,[{key:"start",value:function(){this.started=!0,this.lifespan=250*Math.random()+250,this.age=0,this.initial=[Math.random()*canvas.clientWidth,Math.random()*canvas.clientHeight],this.pos=this.initial.slice(0),this.velocity=[.4*Math.random()-.2,.4*Math.random()-.2],this.ctx=canvas.getContext("2d")}},{key:"calcOpacity",value:function(){var t=this.lifespan/4;return this.age<t?this.age/t:this.age>this.lifespan-t?1-(this.age-this.lifespan+t)/t:1}},{key:"destroy",value:function(){clearInterval(this.renderer),this.start()}},{key:"draw",value:function(){if(this.started){if(this.age++,this.age>=this.lifespan)return this.destroy();this.pos=[this.pos[0]+=this.velocity[0],this.pos[1]+=this.velocity[1]],this.ctx.beginPath(),this.ctx.fillStyle="rgba(255, 255, 255, ".concat(.8*this.calcOpacity(),")"),this.ctx.arc(this.pos[0],this.pos[1],3,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()}}}]),t}();window.particles=[];var canvas=document.getElementById("bg"),amount=100;if(canvas.getContext){for(var i=0;i<=amount;i++)particles.push(new Particle);i=0;var init=function t(){amount<=++i||(particles[i].start(),setTimeout(t,10*Math.random()+5e3/amount))};init(),setInterval(function(){canvas.clientHeight!==window.innerHeight&&canvas.setAttribute("height",window.innerHeight),canvas.clientWidth!==window.innerWidth&&canvas.setAttribute("width",window.innerWidth),canvas.getContext("2d").clearRect(0,0,canvas.clientWidth,canvas.clientHeight),particles.forEach(function(t){return t.draw()})},15)}