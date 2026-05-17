(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="170",Rl=0,Ea=1,Cl=2,ko=1,Vo=2,hn=3,_n=0,Ct=1,Jt=2,Cn=0,pi=1,Tr=2,Ta=3,ba=4,Pl=5,Vn=100,Dl=101,Ll=102,Ul=103,Il=104,Nl=200,Fl=201,Ol=202,Bl=203,hs=204,ds=205,zl=206,Gl=207,Hl=208,kl=209,Vl=210,Wl=211,Xl=212,ql=213,Yl=214,fs=0,ps=1,ms=2,gi=3,gs=4,_s=5,vs=6,xs=7,Wo=0,$l=1,Kl=2,Pn=0,Zl=1,jl=2,Jl=3,Xo=4,Ql=5,ec=6,tc=7,qo=300,_i=301,vi=302,Ms=303,Ss=304,Rr=306,br=1e3,en=1001,ys=1002,$t=1003,nc=1004,Ki=1005,ht=1006,Ir=1007,Xn=1008,vn=1009,Yo=1010,$o=1011,ki=1012,Js=1013,Dn=1014,fn=1015,tn=1016,Qs=1017,ea=1018,xi=1020,Ko=35902,Zo=1021,jo=1022,Nt=1023,Jo=1024,Qo=1025,$n=1026,Mi=1027,el=1028,ta=1029,tl=1030,na=1031,ia=1033,vr=33776,xr=33777,Mr=33778,Sr=33779,Es=35840,Ts=35841,bs=35842,ws=35843,As=36196,Rs=37492,Cs=37496,Ps=37808,Ds=37809,Ls=37810,Us=37811,Is=37812,Ns=37813,Fs=37814,Os=37815,Bs=37816,zs=37817,Gs=37818,Hs=37819,ks=37820,Vs=37821,yr=36492,Ws=36494,Xs=36495,nl=36283,qs=36284,Ys=36285,$s=36286,ic=3200,rc=3201,il=0,sc=1,Qt="",At="srgb",mn="srgb-linear",Cr="linear",Qe="srgb",Zn=7680,wa=519,ac=512,oc=513,lc=514,rl=515,cc=516,uc=517,hc=518,dc=519,Aa=35044,Ra="300 es",pn=2e3,wr=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Oi=Math.PI/180,Vi=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function ra(i,e){return(i%e+e)%e}function fc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pc(i,e,t){return i!==e?(t-i)/(e-i):0}function Bi(i,e,t){return(1-t)*i+t*e}function mc(i,e,t,n){return Bi(i,e,1-Math.exp(-t*n))}function gc(i,e=1){return e-Math.abs(ra(i,e*2)-e)}function _c(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mc(i,e){return i+Math.random()*(e-i)}function Sc(i){return i*(.5-Math.random())}function yc(i){i!==void 0&&(Ca=i);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ec(i){return i*Oi}function Tc(i){return i*Vi}function bc(i){return(i&i-1)===0&&i!==0}function wc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ot={DEG2RAD:Oi,RAD2DEG:Vi,generateUUID:Ei,clamp:Mt,euclideanModulo:ra,mapLinear:fc,inverseLerp:pc,lerp:Bi,damp:mc,pingpong:gc,smoothstep:_c,smootherstep:vc,randInt:xc,randFloat:Mc,randFloatSpread:Sc,seededRandom:yc,degToRad:Ec,radToDeg:Tc,isPowerOfTwo:bc,ceilPowerOfTwo:wc,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:Rc,normalize:Et,denormalize:hi};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=r[0],m=r[3],p=r[6],A=r[1],T=r[4],y=r[7],B=r[2],b=r[5],w=r[8];return s[0]=a*v+o*A+l*B,s[3]=a*m+o*T+l*b,s[6]=a*p+o*y+l*w,s[1]=c*v+u*A+h*B,s[4]=c*m+u*T+h*b,s[7]=c*p+u*y+h*w,s[2]=d*v+f*A+g*B,s[5]=d*m+f*T+g*b,s[8]=d*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new ze;function sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cc(){const i=Ar("canvas");return i.style.display="block",i}const Pa={};function Ii(i){i in Pa||(Pa[i]=!0,console.warn(i))}function Pc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Dc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?Cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Da=[.64,.33,.3,.6,.15,.06],La=[.2126,.7152,.0722],Ua=[.3127,.329],Ia=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Na=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[mn]:{primaries:Da,whitePoint:Ua,transfer:Cr,toXYZ:Ia,fromXYZ:Na,luminanceCoefficients:La,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:Da,whitePoint:Ua,transfer:Qe,toXYZ:Ia,fromXYZ:Na,luminanceCoefficients:La,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let jn;class Uc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Ar("canvas")),jn.width=e.width,jn.height=e.height;const n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gn(t[n]/255)*255):t[n]=gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ic=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fr(r[a].image)):s.push(Fr(r[a]))}else s=Fr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Pt extends yi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=en,r=en,s=ht,a=Xn,o=Nt,l=vn,c=Pt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Ei(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=qo;Pt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(f+1)/2,B=(p+1)/2,b=(u+d)/4,w=(h+v)/4,P=(g+m)/4;return T>y&&T>B?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=b/n,s=w/n):y>B?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=P/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=w/s,r=P/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fc extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new al(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bt extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ol extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oc extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*v,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const B=Math.sqrt(T),b=Math.atan2(B,p*A);m=Math.sin(m*b)/B,o=Math.sin(o*b)/B}const y=o*A;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+v*y,m===1-o){const B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new L,Fa=new Ti;class Wi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(s,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),ji.subVectors(this.max,Ci),Jn.subVectors(e.a,Ci),Qn.subVectors(e.b,Ci),ei.subVectors(e.c,Ci),Sn.subVectors(Qn,Jn),yn.subVectors(ei,Qn),In.subVectors(Jn,ei);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-In.z,In.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,In.z,0,-In.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-In.y,In.x,0];return!Br(t,Jn,Qn,ei,ji)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Jn,Qn,ei,ji))?!1:(Ji.crossVectors(Sn,yn),t=[Ji.x,Ji.y,Ji.z],Br(t,Jn,Qn,ei,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new L,new L,new L,new L,new L,new L,new L,new L],Vt=new L,Zi=new Wi,Jn=new L,Qn=new L,ei=new L,Sn=new L,yn=new L,In=new L,Ci=new L,ji=new L,Ji=new L,Nn=new L;function Br(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Nn.fromArray(i,s);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bc=new Wi,Pi=new L,zr=new L;class sa{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(zr)),this.expandByPoint(Pi.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new L,Gr=new L,Qi=new L,En=new L,Hr=new L,er=new L,kr=new L;class zc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Gr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=En.dot(this.direction),l=-En.dot(Qi),c=En.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gr).addScaledVector(Qi,d),f}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,r,s){Hr.subVectors(t,e),er.subVectors(n,e),kr.crossVectors(Hr,er);let a=this.direction.dot(kr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(er.crossVectors(En,er));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(En));if(c<0||l+c>a)return null;const u=-o*En.dot(kr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,g,v,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gc,e,Hc)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Tn.crossVectors(n,Lt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Tn.crossVectors(n,Lt)),Tn.normalize(),tr.crossVectors(Lt,Tn),r[0]=Tn.x,r[4]=tr.x,r[8]=Lt.x,r[1]=Tn.y,r[5]=tr.y,r[9]=Lt.y,r[2]=Tn.z,r[6]=tr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],A=n[3],T=n[7],y=n[11],B=n[15],b=r[0],w=r[4],P=r[8],S=r[12],x=r[1],R=r[5],O=r[9],F=r[13],H=r[2],q=r[6],z=r[10],j=r[14],V=r[3],ne=r[7],ie=r[11],Se=r[15];return s[0]=a*b+o*x+l*H+c*V,s[4]=a*w+o*R+l*q+c*ne,s[8]=a*P+o*O+l*z+c*ie,s[12]=a*S+o*F+l*j+c*Se,s[1]=u*b+h*x+d*H+f*V,s[5]=u*w+h*R+d*q+f*ne,s[9]=u*P+h*O+d*z+f*ie,s[13]=u*S+h*F+d*j+f*Se,s[2]=g*b+v*x+m*H+p*V,s[6]=g*w+v*R+m*q+p*ne,s[10]=g*P+v*O+m*z+p*ie,s[14]=g*S+v*F+m*j+p*Se,s[3]=A*b+T*x+y*H+B*V,s[7]=A*w+T*R+y*q+B*ne,s[11]=A*P+T*O+y*z+B*ie,s[15]=A*S+T*F+y*j+B*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=h*m*c-v*d*c+v*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,y=u*v*c-g*h*c+g*o*f-a*v*f-u*o*p+a*h*p,B=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,b=t*A+n*T+r*y+s*B;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=A*w,e[1]=(v*d*s-h*m*s-v*r*f+n*m*f+h*r*p-n*d*p)*w,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*p+n*l*p)*w,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*w,e[4]=T*w,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*w,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*w,e[8]=y*w,e[9]=(g*h*s-u*v*s-g*n*f+t*v*f+u*n*p-t*h*p)*w,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*w,e[12]=B*w,e[13]=(u*v*r-g*h*r+g*n*d-t*v*d-u*n*m+t*h*m)*w,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,v=a*u,m=a*h,p=o*h,A=l*c,T=l*u,y=l*h,B=n.x,b=n.y,w=n.z;return r[0]=(1-(v+p))*B,r[1]=(f+y)*B,r[2]=(g-T)*B,r[3]=0,r[4]=(f-y)*b,r[5]=(1-(d+p))*b,r[6]=(m+A)*b,r[7]=0,r[8]=(g+T)*w,r[9]=(m-A)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const a=ti.set(r[4],r[5],r[6]).length(),o=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const c=1/s,u=1/a,h=1/o;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=pn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(o===pn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===wr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=pn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,f=(n+r)*u;let g,v;if(o===pn)g=(a+s)*h,v=-2*h;else if(o===wr)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new L,Wt=new it,Gc=new L(0,0,0),Hc=new L(1,1,1),Tn=new L,tr=new L,Lt=new L,Oa=new it,Ba=new Ti;class Gt{constructor(e=0,t=0,n=0,r=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const za=new L,ni=new Ti,on=new it,nr=new L,Di=new L,Vc=new L,Wc=new Ti,Ga=new L(1,0,0),Ha=new L(0,1,0),ka=new L(0,0,1),Va={type:"added"},Xc={type:"removed"},ii={type:"childadded",child:null},Vr={type:"childremoved",child:null};class gt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new L,t=new Gt,n=new Ti,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new ze}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Ha,e)}rotateZ(e){return this.rotateOnAxis(ka,e)}translateOnAxis(e,t){return za.copy(e).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Ha,e)}translateZ(e){return this.translateOnAxis(ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Di,nr,this.up):on.lookAt(nr,Di,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(on),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Va),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xc),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Va),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new L,ln=new L,Wr=new L,cn=new L,ri=new L,si=new L,Wa=new L,Xr=new L,qr=new L,Yr=new L,$r=new et,Kr=new et,Zr=new et;class Yt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),ln.subVectors(n,t),Wr.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(ln),l=Xt.dot(Wr),c=ln.dot(ln),u=ln.dot(Wr),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return $r.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),$r.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($r,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector(Zr,s.z),a}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),ln.subVectors(e,t),Xt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ri.subVectors(r,n),si.subVectors(s,n),Xr.subVectors(e,n);const l=ri.dot(Xr),c=si.dot(Xr);if(l<=0&&c<=0)return t.copy(n);qr.subVectors(e,r);const u=ri.dot(qr),h=si.dot(qr);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ri,a);Yr.subVectors(e,s);const f=ri.dot(Yr),g=si.dot(Yr);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(si,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Wa.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Wa,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=ra(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=jr(a,s,e+1/3),this.g=jr(a,s,e),this.b=jr(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(Mt(xt.r*255,0,255))*65536+Math.round(Mt(xt.g*255,0,255))*256+Math.round(Mt(xt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,r=xt.g,s=xt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=At){Ye.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,r=xt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ir);const n=Bi(bn.h,ir.h,t),r=Bi(bn.s,ir.s,t),s=Bi(bn.l,ir.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new De;De.NAMES=cl;let qc=0;class Xi extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Ei(),this.name="",this.blending=pi,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hs,this.blendDst=ds,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hs&&(n.blendSrc=this.blendSrc),this.blendDst!==ds&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class aa extends Xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=Yc();function Yc(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function $c(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Mt(i,-65504,65504),dn.floatView[0]=i;const e=dn.uint32View[0],t=e>>23&511;return dn.baseTable[t]+((e&8388607)>>dn.shiftTable[t])}function Kc(i){const e=i>>10;return dn.uint32View[0]=dn.mantissaTable[dn.offsetTable[e]+(i&1023)]+dn.exponentTable[e],dn.floatView[0]}const Zc={toHalfFloat:$c,fromHalfFloat:Kc},ct=new L,rr=new ke;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class ul extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hl extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jc=0;const Ot=new it,Jr=new gt,ai=new L,Ut=new Wi,Li=new Wi,pt=new L;class Kt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?hl:ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Jr.lookAt(e),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ut.min,Li.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,Li.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(Li.min),Ut.expandByPoint(Li.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),pt.add(ai)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new L,l[P]=new L;const c=new L,u=new L,h=new L,d=new ke,f=new ke,g=new ke,v=new L,m=new L;function p(P,S,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[P].add(v),o[S].add(v),o[x].add(v),l[P].add(m),l[S].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,S=A.length;P<S;++P){const x=A[P],R=x.start,O=x.count;for(let F=R,H=R+O;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new L,y=new L,B=new L,b=new L;function w(P){B.fromBufferAttribute(r,P),b.copy(B);const S=o[P];T.copy(S),T.sub(B.multiplyScalar(B.dot(S))).normalize(),y.crossVectors(b,S);const R=y.dot(l[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,R)}for(let P=0,S=A.length;P<S;++P){const x=A[P],R=x.start,O=x.count;for(let F=R,H=R+O;F<H;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new it,Fn=new zc,sr=new sa,qa=new L,ar=new L,or=new L,lr=new L,Qr=new L,cr=new L,Ya=new L,ur=new L;class lt extends gt{constructor(e=new Kt,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Qr.fromBufferAttribute(h,e),a?cr.addScaledVector(Qr,u):cr.addScaledVector(Qr.sub(t),u))}t.add(cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),!(sr.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(sr,qa)===null||Fn.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=A,B=T;y<B;y+=3){const b=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);r=hr(this,p,e,n,c,u,h,b,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const A=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=hr(this,a,e,n,c,u,h,A,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=A,B=T;y<B;y+=3){const b=y,w=y+1,P=y+2;r=hr(this,p,e,n,c,u,h,b,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const A=m,T=m+1,y=m+2;r=hr(this,a,e,n,c,u,h,A,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Jc(i,e,t,n,r,s,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===_n,o),l===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ur);return c<t.near||c>t.far?null:{distance:c,point:ur.clone(),object:i}}function hr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ar),i.getVertexPosition(l,or),i.getVertexPosition(c,lr);const u=Jc(i,e,t,n,ar,or,lr,Ya);if(u){const h=new L;Yt.getBarycoord(Ya,ar,or,lr,h),r&&(u.uv=Yt.getInterpolatedAttribute(r,o,l,c,h,new ke)),s&&(u.uv1=Yt.getInterpolatedAttribute(s,o,l,c,h,new ke)),a&&(u.normal=Yt.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};Yt.getNormal(ar,or,lr,d.normal),u.face=d,u.barycoord=h}return u}class bi extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function g(v,m,p,A,T,y,B,b,w,P,S){const x=y/w,R=B/P,O=y/2,F=B/2,H=b/2,q=w+1,z=P+1;let j=0,V=0;const ne=new L;for(let ie=0;ie<z;ie++){const Se=ie*R-F;for(let Ue=0;Ue<q;Ue++){const Xe=Ue*x-O;ne[v]=Xe*A,ne[m]=Se*T,ne[p]=H,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=b>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ue/w),h.push(1-ie/P),j+=1}}for(let ie=0;ie<P;ie++)for(let Se=0;Se<w;Se++){const Ue=d+Se+q*ie,Xe=d+Se+q*(ie+1),$=d+(Se+1)+q*(ie+1),J=d+(Se+1)+q*ie;l.push(Ue,Xe,J),l.push(Xe,$,J),V+=6}o.addGroup(f,V,S),f+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function Qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const eu={clone:Si,merge:Tt};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fl extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new L,$a=new ke,Ka=new ke;class It extends fl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,$a,Ka),t.subVectors(Ka,$a)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class iu extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new It(oi,li,e,t);r.layers=this.layers,this.add(r);const s=new It(oi,li,e,t);s.layers=this.layers,this.add(s);const a=new It(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new It(oi,li,e,t);o.layers=this.layers,this.add(o);const l=new It(oi,li,e,t);l.layers=this.layers,this.add(l);const c=new It(oi,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pl extends Pt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bi(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Cn});s.uniforms.tEquirect.value=t;const a=new lt(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=ht),new iu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const es=new L,su=new L,au=new ze;class Hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=es.subVectors(n,t).cross(su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(es),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||au.getNormalMatrix(e),r=this.coplanarPoint(es).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new sa,dr=new L;class oa{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],A=r[13],T=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+u,m+g,y+A).normalize(),n[3].setComponents(l-a,d-u,m-g,y-A).normalize(),n[4].setComponents(l-o,d-h,m-v,y-T).normalize(),t===pn)n[5].setComponents(l+o,d+h,m+v,y+T).normalize();else if(t===wr)n[5].setComponents(o,h,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(dr.x=r.normal.x>0?e.max.x:e.min.x,dr.y=r.normal.y>0?e.max.y:e.min.y,dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ml(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ou(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ln extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let T=0;T<c;T++){const y=T*h-s;g.push(y,-A,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const T=A+c*p,y=A+c*(p+1),B=A+1+c*(p+1),b=A+1+c*p;f.push(T,y,b),f.push(y,B,b)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ph=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Oh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$h=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,td=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,md=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ld=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:uu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:_u,begin_vertex:vu,beginnormal_vertex:xu,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:yu,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:wu,color_fragment:Au,color_pars_fragment:Ru,color_pars_vertex:Cu,color_vertex:Pu,common:Du,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Nu,emissivemap_fragment:Fu,emissivemap_pars_fragment:Ou,colorspace_fragment:Bu,colorspace_pars_fragment:zu,envmap_fragment:Gu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:ku,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:eh,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Yu,fog_pars_fragment:$u,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:Zu,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Ju,lights_pars_begin:Qu,lights_toon_fragment:th,lights_toon_pars_fragment:nh,lights_phong_fragment:ih,lights_phong_pars_fragment:rh,lights_physical_fragment:sh,lights_physical_pars_fragment:ah,lights_fragment_begin:oh,lights_fragment_maps:lh,lights_fragment_end:ch,logdepthbuf_fragment:uh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:dh,logdepthbuf_vertex:fh,map_fragment:ph,map_pars_fragment:mh,map_particle_fragment:gh,map_particle_pars_fragment:_h,metalnessmap_fragment:vh,metalnessmap_pars_fragment:xh,morphinstance_vertex:Mh,morphcolor_vertex:Sh,morphnormal_vertex:yh,morphtarget_pars_vertex:Eh,morphtarget_vertex:Th,normal_fragment_begin:bh,normal_fragment_maps:wh,normal_pars_fragment:Ah,normal_pars_vertex:Rh,normal_vertex:Ch,normalmap_pars_fragment:Ph,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Lh,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Ih,opaque_fragment:Nh,packing:Fh,premultiplied_alpha_fragment:Oh,project_vertex:Bh,dithering_fragment:zh,dithering_pars_fragment:Gh,roughnessmap_fragment:Hh,roughnessmap_pars_fragment:kh,shadowmap_pars_fragment:Vh,shadowmap_pars_vertex:Wh,shadowmap_vertex:Xh,shadowmask_pars_fragment:qh,skinbase_vertex:Yh,skinning_pars_vertex:$h,skinning_vertex:Kh,skinnormal_vertex:Zh,specularmap_fragment:jh,specularmap_pars_fragment:Jh,tonemapping_fragment:Qh,tonemapping_pars_fragment:ed,transmission_fragment:td,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:rd,uv_vertex:sd,worldpos_vertex:ad,background_vert:od,background_frag:ld,backgroundCube_vert:cd,backgroundCube_frag:ud,cube_vert:hd,cube_frag:dd,depth_vert:fd,depth_frag:pd,distanceRGBA_vert:md,distanceRGBA_frag:gd,equirect_vert:_d,equirect_frag:vd,linedashed_vert:xd,linedashed_frag:Md,meshbasic_vert:Sd,meshbasic_frag:yd,meshlambert_vert:Ed,meshlambert_frag:Td,meshmatcap_vert:bd,meshmatcap_frag:wd,meshnormal_vert:Ad,meshnormal_frag:Rd,meshphong_vert:Cd,meshphong_frag:Pd,meshphysical_vert:Dd,meshphysical_frag:Ld,meshtoon_vert:Ud,meshtoon_frag:Id,points_vert:Nd,points_frag:Fd,shadow_vert:Od,shadow_frag:Bd,sprite_vert:zd,sprite_frag:Gd},oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},jt={basic:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Tt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Tt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Tt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Tt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Tt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Tt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Tt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Tt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Tt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Tt([oe.lights,oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};jt.physical={uniforms:Tt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const fr={r:0,b:0,g:0},Bn=new Gt,Hd=new it;function kd(i,e,t,n,r,s,a){const o=new De(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function v(A){let T=!1;const y=g(A);y===null?p(o,l):y&&y.isColor&&(p(y,1),T=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,T){const y=g(T);y&&(y.isCubeTexture||y.mapping===Rr)?(u===void 0&&(u=new lt(new bi(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Si(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bn.copy(T.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(Bn)),u.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Qe,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new Ln(2,2),new St({name:"BackgroundMaterial",uniforms:Si(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,T){A.getRGB(fr,dl(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:v,addToRenderList:m}}function Vd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(x,R,O,F,H){let q=!1;const z=h(F,O,R);s!==z&&(s=z,c(s.object)),q=f(x,F,O,H),q&&g(x,F,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(x,R,O,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,O){const F=O.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let q=H[R.id];q===void 0&&(q={},H[R.id]=q);let z=q[F];return z===void 0&&(z=d(l()),q[F]=z),z}function d(x){const R=[],O=[],F=[];for(let H=0;H<t;H++)R[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,R,O,F){const H=s.attributes,q=R.attributes;let z=0;const j=O.getAttributes();for(const V in j)if(j[V].location>=0){const ie=H[V];let Se=q[V];if(Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(x,R,O,F){const H={},q=R.attributes;let z=0;const j=O.getAttributes();for(const V in j)if(j[V].location>=0){let ie=q[V];ie===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),H[V]=Se,z++}s.attributes=H,s.attributesNum=z,s.index=F}function v(){const x=s.newAttributes;for(let R=0,O=x.length;R<O;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const O=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;O[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),H[x]!==R&&(i.vertexAttribDivisor(x,R),H[x]=R)}function A(){const x=s.newAttributes,R=s.enabledAttributes;for(let O=0,F=R.length;O<F;O++)R[O]!==x[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function T(x,R,O,F,H,q,z){z===!0?i.vertexAttribIPointer(x,R,O,H,q):i.vertexAttribPointer(x,R,O,F,H,q)}function y(x,R,O,F){v();const H=F.attributes,q=O.getAttributes(),z=R.defaultAttributeValues;for(const j in q){const V=q[j];if(V.location>=0){let ne=H[j];if(ne===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const ie=ne.normalized,Se=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;const Xe=Ue.buffer,$=Ue.type,J=Ue.bytesPerElement,ue=$===i.INT||$===i.UNSIGNED_INT||ne.gpuType===Js;if(ne.isInterleavedBufferAttribute){const re=ne.data,Ae=re.stride,Ce=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,re.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Q=0;Q<V.locationSize;Q++)T(V.location+Q,Se/V.locationSize,$,ie,Ae*J,(Ce+Se/V.locationSize*Q)*J,ue)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)p(V.location+re,ne.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let re=0;re<V.locationSize;re++)T(V.location+re,Se/V.locationSize,$,ie,Se*J,Se/V.locationSize*re*J,ue)}}else if(z!==void 0){const ie=z[j];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(V.location,ie);break;case 3:i.vertexAttrib3fv(V.location,ie);break;case 4:i.vertexAttrib4fv(V.location,ie);break;default:i.vertexAttrib1fv(V.location,ie)}}}}A()}function B(){P();for(const x in n){const R=n[x];for(const O in R){const F=R[O];for(const H in F)u(F[H].object),delete F[H];delete R[O]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const O in R){const F=R[O];for(const H in F)u(F[H].object),delete F[H];delete R[O]}delete n[x.id]}function w(x){for(const R in n){const O=n[R];if(O[x.id]===void 0)continue;const F=O[x.id];for(const H in F)u(F[H].object),delete F[H];delete O[x.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Wd(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Nt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:B,maxSamples:b}}function qd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,T=A*4;let y=p.clippingState||null;l.value=y,y=u(g,d,T,f);for(let B=0;B!==T;++B)y[B]=t[B];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==v;++T,y+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yd(i){let e=new WeakMap;function t(a,o){return o===Ms?a.mapping=_i:o===Ss&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ms||o===Ss)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ru(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qi extends fl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,Za=[.125,.215,.35,.446,.526,.582],Wn=20,ts=new qi,ja=new De;let ns=null,is=0,rs=0,ss=!1;const kn=(1+Math.sqrt(5))/2,ci=1/kn,Ja=[new L(-kn,ci,0),new L(kn,ci,0),new L(-ci,0,kn),new L(ci,0,kn),new L(0,kn,-ci),new L(0,kn,ci),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,is,rs),this._renderer.xr.enabled=ss,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:tn,format:Nt,colorSpace:mn,depthBuffer:!1},r=eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$d(s)),this._blurMaterial=Kd(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,n,r){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ja),u.toneMapping=Pn,u.autoClear=!1;const f=new aa({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new lt(new bi,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(ja),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const T=this._cubeSize;pr(r,A*T,p>2?T:0,T,T),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_i||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ja[(r-s-1)%Ja.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let A=0;for(let w=0;w<Wn;++w){const P=w/v,S=Math.exp(-P*P/2);p.push(S),w===0?A+=S:w<m&&(A+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const y=this._sizeLods[r],B=3*y*(r>T-di?r-T+di:0),b=4*(this._cubeSize-y);pr(t,B,b,3*y,2*y),l.setRenderTarget(t),l.render(h,ts)}}function $d(i){const e=[],t=[],n=[];let r=i;const s=i-di+1+Za.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-di?l=Za[a-i+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*f),T=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,P=b>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];A.set(S,v*g*b),T.set(d,m*g*b);const x=[b,b,b,b,b,b];y.set(x,p*g*b)}const B=new Kt;B.setAttribute("position",new zt(A,v)),B.setAttribute("uv",new zt(T,m)),B.setAttribute("faceIndex",new zt(y,p)),e.push(B),r>di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eo(i,e,t){const n=new Bt(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Kd(i,e,t){const n=new Float32Array(Wn),r=new L(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function to(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function no(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ms||l===Ss,u=l===_i||l===vi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jd(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const A=f.array;v=f.version;for(let T=0,y=A.length;T<y;T+=3){const B=A[T+0],b=A[T+1],w=A[T+2];d.push(B,b,b,w,w,B)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const B=T+0,b=T+1,w=T+2;d.push(B,b,b,w,w,B)}}else return;const m=new(sl(d)?hl:ul)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Qd(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*v[A];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ef(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function tf(i,e,t){const n=new WeakMap,r=new et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*B*4*h),w=new ol(b,y,B,h);w.type=fn,w.needsUpdate=!0;const P=T*4;for(let x=0;x<h;x++){const R=m[x],O=p[x],F=A[x],H=y*B*4*x;for(let q=0;q<R.count;q++){const z=q*P;f===!0&&(r.fromBufferAttribute(R,q),b[H+z+0]=r.x,b[H+z+1]=r.y,b[H+z+2]=r.z,b[H+z+3]=0),g===!0&&(r.fromBufferAttribute(O,q),b[H+z+4]=r.x,b[H+z+5]=r.y,b[H+z+6]=r.z,b[H+z+7]=0),v===!0&&(r.fromBufferAttribute(F,q),b[H+z+8]=r.x,b[H+z+9]=r.y,b[H+z+10]=r.z,b[H+z+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new ke(y,B)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function nf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ca extends Pt{constructor(e,t,n,r,s,a,o,l,c,u=$n){if(u!==$n&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Dn),n===void 0&&u===Mi&&(n=xi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gl=new Pt,io=new ca(1,1),_l=new ol,vl=new Oc,xl=new pl,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ro[r];if(s===void 0&&(s=new Float32Array(r),ro[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pr(i,e){let t=so[e];t===void 0&&(t=new Int32Array(e),so[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;lo.set(n),i.uniformMatrix2fv(this.addr,!1,lo),ft(t,n)}}function cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),ft(t,n)}}function uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),ft(t,n)}}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(io.compareFunction=rl,s=io):s=gl,t.setTexture2D(e||s,r)}function Mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vl,r)}function Sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xl,r)}function yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_l,r)}function Ef(i){switch(i){case 5126:return rf;case 35664:return sf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return cf;case 35676:return uf;case 5124:case 35670:return hf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return yf}}function Tf(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function wf(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Af(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rf(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cf(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pf(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Df(i,e){i.uniform1iv(this.addr,e)}function Lf(i,e){i.uniform2iv(this.addr,e)}function Uf(i,e){i.uniform3iv(this.addr,e)}function If(i,e){i.uniform4iv(this.addr,e)}function Nf(i,e){i.uniform1uiv(this.addr,e)}function Ff(i,e){i.uniform2uiv(this.addr,e)}function Of(i,e){i.uniform3uiv(this.addr,e)}function Bf(i,e){i.uniform4uiv(this.addr,e)}function zf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||gl,s[a])}function Gf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vl,s[a])}function Hf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xl,s[a])}function kf(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||_l,s[a])}function Vf(i){switch(i){case 5126:return Tf;case 35664:return bf;case 35665:return wf;case 35666:return Af;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return Uf;case 35669:case 35673:return If;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return kf}}class Wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ef(t.type)}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vf(t.type)}}class qf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const as=/(\w+)(\])?(\[|\.)?/g;function co(i,e){i.seq.push(e),i.map[e.id]=e}function Yf(i,e,t){const n=i.name,r=n.length;for(as.lastIndex=0;;){const s=as.exec(n),a=as.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){co(t,c===void 0?new Wf(o,i,e):new Xf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qf(o),co(t,h)),t=h}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Yf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $f=37297;let Kf=0;function Zf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ho=new ze;function jf(i){Ye._getMatrix(ho,Ye.workingColorSpace,i);const e=`mat3( ${ho.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Zf(i.getShaderSource(e),a)}else return r}function Jf(i,e){const t=jf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qf(i,e){let t;switch(e){case Zl:t="Linear";break;case jl:t="Reinhard";break;case Jl:t="Cineon";break;case Xo:t="ACESFilmic";break;case ec:t="AgX";break;case tc:t="Neutral";break;case Ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mr=new L;function ep(){Ye.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function np(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ni(i){return i!==""}function po(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(i){return i.replace(rp,ap)}const sp=new Map;function ap(i,e){let t=He[e];if(t===void 0){const n=sp.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ks(t)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(i){return i.replace(op,lp)}function lp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _o(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function dp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case $l:e="ENVMAP_BLENDING_MIX";break;case Kl:e="ENVMAP_BLENDING_ADD";break}return e}function fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cp(t),c=up(t),u=hp(t),h=dp(t),d=fp(t),f=tp(t),g=np(s),v=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),p.length>0&&(p+=`
`)):(m=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),p=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Qf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Jf("linearToOutputTexel",t.outputColorSpace),ep(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=Ks(a),a=po(a,t),a=mo(a,t),o=Ks(o),o=po(o,t),o=mo(o,t),a=go(a),o=go(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+a,y=A+p+o,B=uo(r,r.VERTEX_SHADER,T),b=uo(r,r.FRAGMENT_SHADER,y);r.attachShader(v,B),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(B).trim(),H=r.getShaderInfoLog(b).trim();let q=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,B,b);else{const j=fo(r,B,"vertex"),V=fo(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+j+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(z=!1);z&&(R.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(B),r.deleteShader(b),P=new Er(r,v),S=ip(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,$f)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=b,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _p(e),t.set(e,n)),n}}class _p{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function vp(i,e,t,n,r,s,a){const o=new ll,l=new gp,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,R,O,F){const H=O.fog,q=F.geometry,z=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),V=j&&j.mapping===Rr?j.image.height:null,ne=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=ie!==void 0?ie.length:0;let Ue=0;q.morphAttributes.position!==void 0&&(Ue=1),q.morphAttributes.normal!==void 0&&(Ue=2),q.morphAttributes.color!==void 0&&(Ue=3);let Xe,$,J,ue;if(ne){const Je=jt[ne];Xe=Je.vertexShader,$=Je.fragmentShader}else Xe=S.vertexShader,$=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const re=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,Q=F.isBatchedMesh===!0,ve=!!S.map,se=!!S.matcap,xe=!!j,C=!!S.aoMap,Ve=!!S.lightMap,be=!!S.bumpMap,Re=!!S.normalMap,pe=!!S.displacementMap,Ne=!!S.emissiveMap,me=!!S.metalnessMap,E=!!S.roughnessMap,_=S.anisotropy>0,N=S.clearcoat>0,Y=S.dispersion>0,K=S.iridescence>0,W=S.sheen>0,Me=S.transmission>0,ae=_&&!!S.anisotropyMap,ce=N&&!!S.clearcoatMap,We=N&&!!S.clearcoatNormalMap,ee=N&&!!S.clearcoatRoughnessMap,ge=K&&!!S.iridescenceMap,Pe=K&&!!S.iridescenceThicknessMap,Ie=W&&!!S.sheenColorMap,_e=W&&!!S.sheenRoughnessMap,qe=!!S.specularMap,Ge=!!S.specularColorMap,tt=!!S.specularIntensityMap,D=Me&&!!S.transmissionMap,le=Me&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,fe=S.alphaTest>0,he=!!S.alphaHash,Oe=!!S.extensions;let at=Pn;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(at=i.toneMapping);const _t={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:$,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Q,batchingColor:Q&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:mn,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:se,envMap:xe,envMapMode:xe&&j.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Ve,bumpMap:be,normalMap:Re,displacementMap:d&&pe,emissiveMap:Ne,normalMapObjectSpace:Re&&S.normalMapType===sc,normalMapTangentSpace:Re&&S.normalMapType===il,metalnessMap:me,roughnessMap:E,anisotropy:_,anisotropyMap:ae,clearcoat:N,clearcoatMap:ce,clearcoatNormalMap:We,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:K,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:W,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Ge,specularIntensityMap:tt,transmission:Me,transmissionMap:D,thicknessMap:le,gradientMap:X,opaque:S.transparent===!1&&S.blending===pi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:he,combine:S.combine,mapUv:ve&&v(S.map.channel),aoMapUv:C&&v(S.aoMap.channel),lightMapUv:Ve&&v(S.lightMap.channel),bumpMapUv:be&&v(S.bumpMap.channel),normalMapUv:Re&&v(S.normalMap.channel),displacementMapUv:pe&&v(S.displacementMap.channel),emissiveMapUv:Ne&&v(S.emissiveMap.channel),metalnessMapUv:me&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:ae&&v(S.anisotropyMap.channel),clearcoatMapUv:ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:qe&&v(S.specularMap.channel),specularColorMapUv:Ge&&v(S.specularColorMap.channel),specularIntensityMapUv:tt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:le&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Re||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(ve||Z),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jt,flipSided:S.side===Ct,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)x.push(R),x.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const x=g[S.type];let R;if(x){const O=jt[x];R=eu.clone(O.uniforms)}else R=S.uniforms;return R}function B(S,x){let R;for(let O=0,F=u.length;O<F;O++){const H=u[O];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new pp(i,x,S,s),u.push(R)),R}function b(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:B,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:P}}function xp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Mp),n.length>1&&n.sort(d||vo),r.length>1&&r.sort(d||vo)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Sp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new xo,i.set(n,[a])):r>=s.length?(a=new xo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tp=0;function bp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wp(i){const e=new yp,t=Ep(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new it,a=new it;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,A=0,T=0,y=0,B=0,b=0,w=0;c.sort(bp);for(let S=0,x=c.length;S<x;S++){const R=c[S],O=R.color,F=R.intensity,H=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*F,h+=O.g*F,d+=O.b*F;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],F);w++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=R.shadow.matrix,A++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(O).multiplyScalar(F),z.distance=H,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[v]=z;const j=R.shadow;if(R.map&&(n.spotLightMap[B]=R.map,B++,j.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[v]=j.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=q,y++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(O).multiplyScalar(F),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(F),z.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==A||P.numPointShadows!==T||P.numSpotShadows!==y||P.numSpotMaps!==B||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+B-b,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=A,P.numPointShadows=T,P.numSpotShadows=y,P.numSpotMaps=B,P.numLightProbes=w,n.version=Tp++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Mo(i){const e=new wp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ap(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mo(i),e.set(r,[o])):s>=a.length?(o=new Mo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Rp extends Xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lp(i,e,t){let n=new oa;const r=new ke,s=new ke,a=new et,o=new Rp({depthPacking:rc}),l=new Cp,c={},u=t.maxTextureSize,h={[_n]:Ct,[Ct]:_n,[Jt]:Jt},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Pp,fragmentShader:Dp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let p=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Cn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==hn&&this.type===hn,H=p===hn&&this.type!==hn;for(let q=0,z=b.length;q<z;q++){const j=b[q],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ne=V.getFrameExtents();if(r.multiply(ne),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||F===!0||H===!0){const Se=this.type!==hn?{minFilter:$t,magFilter:$t}:{};V.map!==null&&V.map.dispose(),V.map=new Bt(r.x,r.y,Se),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ie=V.getViewportCount();for(let Se=0;Se<ie;Se++){const Ue=V.getViewport(Se);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),O.viewport(a),V.updateMatrices(j,Se),n=V.getFrustum(),y(w,P,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&A(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,R)};function A(b,w){const P=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bt(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,P,f,v,null)}function T(b,w,P,S){let x=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=x.uuid,F=w.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let q=H[F];q===void 0&&(q=x.clone(),H[F]=q,w.addEventListener("dispose",B)),x=q}if(x.visible=w.visible,x.wireframe=w.wireframe,S===hn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=P}return x}function y(b,w,P,S,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===hn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const F=e.update(b),H=b.material;if(Array.isArray(H)){const q=F.groups;for(let z=0,j=q.length;z<j;z++){const V=q[z],ne=H[V.materialIndex];if(ne&&ne.visible){const ie=T(b,ne,S,x);b.onBeforeShadow(i,b,w,P,F,ie,V),i.renderBufferDirect(P,null,F,ie,b,V),b.onAfterShadow(i,b,w,P,F,ie,V)}}}else if(H.visible){const q=T(b,H,S,x);b.onBeforeShadow(i,b,w,P,F,q,null),i.renderBufferDirect(P,null,F,q,b,null),b.onAfterShadow(i,b,w,P,F,q,null)}}const O=b.children;for(let F=0,H=O.length;F<H;F++)y(O[F],w,P,S,x)}function B(b){b.target.removeEventListener("dispose",B);for(const P in c){const S=c[P],x=b.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Up={[fs]:ps,[ms]:vs,[gs]:xs,[gi]:_s,[ps]:fs,[vs]:ms,[xs]:gs,[_s]:gi};function Ip(i,e){function t(){let D=!1;const le=new et;let X=null;const Z=new et(0,0,0,0);return{setMask:function(fe){X!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){D=fe},setClear:function(fe,he,Oe,at,_t){_t===!0&&(fe*=at,he*=at,Oe*=at),le.set(fe,he,Oe,at),Z.equals(le)===!1&&(i.clearColor(fe,he,Oe,at),Z.copy(le))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,X=null,Z=null,fe=null;return{setReversed:function(he){if(le!==he){const Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const at=fe;fe=null,this.setClear(at)}le=he},getReversed:function(){return le},setTest:function(he){he?re(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(i.depthMask(he),X=he)},setFunc:function(he){if(le&&(he=Up[he]),Z!==he){switch(he){case fs:i.depthFunc(i.NEVER);break;case ps:i.depthFunc(i.ALWAYS);break;case ms:i.depthFunc(i.LESS);break;case gi:i.depthFunc(i.LEQUAL);break;case gs:i.depthFunc(i.EQUAL);break;case _s:i.depthFunc(i.GEQUAL);break;case vs:i.depthFunc(i.GREATER);break;case xs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=he}},setLocked:function(he){D=he},setClear:function(he){fe!==he&&(le&&(he=1-he),i.clearDepth(he),fe=he)},reset:function(){D=!1,X=null,Z=null,fe=null,le=!1}}}function r(){let D=!1,le=null,X=null,Z=null,fe=null,he=null,Oe=null,at=null,_t=null;return{setTest:function(Je){D||(Je?re(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Je){le!==Je&&!D&&(i.stencilMask(Je),le=Je)},setFunc:function(Je,Ht,nn){(X!==Je||Z!==Ht||fe!==nn)&&(i.stencilFunc(Je,Ht,nn),X=Je,Z=Ht,fe=nn)},setOp:function(Je,Ht,nn){(he!==Je||Oe!==Ht||at!==nn)&&(i.stencilOp(Je,Ht,nn),he=Je,Oe=Ht,at=nn)},setLocked:function(Je){D=Je},setClear:function(Je){_t!==Je&&(i.clearStencil(Je),_t=Je)},reset:function(){D=!1,le=null,X=null,Z=null,fe=null,he=null,Oe=null,at=null,_t=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,A=null,T=null,y=null,B=null,b=null,w=new De(0,0,0),P=0,S=!1,x=null,R=null,O=null,F=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=j>=2);let ne=null,ie={};const Se=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Xe=new et().fromArray(Se),$=new et().fromArray(Ue);function J(D,le,X,Z){const fe=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<X;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(le+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return he}const ue={};ue[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(gi),be(!1),Re(Ea),re(i.CULL_FACE),C(Cn);function re(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ce(D,le){return h[D]!==le?(i.bindFramebuffer(D,le),h[D]=le,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Q(D,le){let X=f,Z=!1;if(D){X=d.get(le),X===void 0&&(X=[],d.set(le,X));const fe=D.textures;if(X.length!==fe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Oe=fe.length;he<Oe;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=fe.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function ve(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const se={[Vn]:i.FUNC_ADD,[Dl]:i.FUNC_SUBTRACT,[Ll]:i.FUNC_REVERSE_SUBTRACT};se[Ul]=i.MIN,se[Il]=i.MAX;const xe={[Nl]:i.ZERO,[Fl]:i.ONE,[Ol]:i.SRC_COLOR,[hs]:i.SRC_ALPHA,[Vl]:i.SRC_ALPHA_SATURATE,[Hl]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[ds]:i.ONE_MINUS_SRC_ALPHA,[kl]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[Wl]:i.CONSTANT_COLOR,[Xl]:i.ONE_MINUS_CONSTANT_COLOR,[ql]:i.CONSTANT_ALPHA,[Yl]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,le,X,Z,fe,he,Oe,at,_t,Je){if(D===Cn){v===!0&&(Ae(i.BLEND),v=!1);return}if(v===!1&&(re(i.BLEND),v=!0),D!==Pl){if(D!==m||Je!==S){if((p!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),p=Vn,y=Vn),Je)switch(D){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,T=null,B=null,b=null,w.set(0,0,0),P=0,m=D,S=Je}return}fe=fe||le,he=he||X,Oe=Oe||Z,(le!==p||fe!==y)&&(i.blendEquationSeparate(se[le],se[fe]),p=le,y=fe),(X!==A||Z!==T||he!==B||Oe!==b)&&(i.blendFuncSeparate(xe[X],xe[Z],xe[he],xe[Oe]),A=X,T=Z,B=he,b=Oe),(at.equals(w)===!1||_t!==P)&&(i.blendColor(at.r,at.g,at.b,_t),w.copy(at),P=_t),m=D,S=!1}function Ve(D,le){D.side===Jt?Ae(i.CULL_FACE):re(i.CULL_FACE);let X=D.side===Ct;le&&(X=!X),be(X),D.blending===pi&&D.transparent===!1?C(Cn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Re(D){D!==Rl?(re(i.CULL_FACE),D!==R&&(D===Ea?i.cullFace(i.BACK):D===Cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),R=D}function pe(D){D!==O&&(z&&i.lineWidth(D),O=D)}function Ne(D,le,X){D?(re(i.POLYGON_OFFSET_FILL),(F!==le||H!==X)&&(i.polygonOffset(le,X),F=le,H=X)):Ae(i.POLYGON_OFFSET_FILL)}function me(D){D?re(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+q-1),ne!==D&&(i.activeTexture(D),ne=D)}function _(D,le,X){X===void 0&&(ne===null?X=i.TEXTURE0+q-1:X=ne);let Z=ie[X];Z===void 0&&(Z={type:void 0,texture:void 0},ie[X]=Z),(Z.type!==D||Z.texture!==le)&&(ne!==X&&(i.activeTexture(X),ne=X),i.bindTexture(D,le||ue[D]),Z.type=D,Z.texture=le)}function N(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Xe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function _e(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function qe(D,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let Z=X.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(le,D.name),X.set(D,Z))}function Ge(D,le){const Z=c.get(le).get(D);l.get(le)!==Z&&(i.uniformBlockBinding(le,Z,D.__bindingPointIndex),l.set(le,Z))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,ie={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,A=null,T=null,y=null,B=null,b=null,w=new De(0,0,0),P=0,S=!1,x=null,R=null,O=null,F=null,H=null,Xe.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Ae,bindFramebuffer:Ce,drawBuffers:Q,useProgram:ve,setBlending:C,setMaterial:Ve,setFlipSided:be,setCullFace:Re,setLineWidth:pe,setPolygonOffset:Ne,setScissorTest:me,activeTexture:E,bindTexture:_,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ge,texImage3D:Pe,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:ee,texSubImage2D:W,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:ce,scissor:Ie,viewport:_e,reset:tt}}function So(i,e,t,n){const r=Np(n);switch(t){case Zo:return i*e;case Jo:return i*e;case Qo:return i*e*2;case el:return i*e/r.components*r.byteLength;case ta:return i*e/r.components*r.byteLength;case tl:return i*e*2/r.components*r.byteLength;case na:return i*e*2/r.components*r.byteLength;case jo:return i*e*3/r.components*r.byteLength;case Nt:return i*e*4/r.components*r.byteLength;case ia:return i*e*4/r.components*r.byteLength;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ts:case ws:return Math.max(i,16)*Math.max(e,8)/4;case Es:case bs:return Math.max(i,8)*Math.max(e,8)/2;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Us:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ks:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yr:case Ws:case Xs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nl:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ys:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Np(i){switch(i){case vn:case Yo:return{byteLength:1,components:1};case ki:case $o:case tn:return{byteLength:2,components:1};case Qs:case ea:return{byteLength:2,components:4};case Dn:case Js:case fn:return{byteLength:4,components:1};case Ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):Ar("canvas")}function v(E,_,N){let Y=1;const K=me(E);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*K.width),Me=Math.floor(Y*K.height);h===void 0&&(h=g(W,Me));const ae=_?g(W,Me):h;return ae.width=W,ae.height=Me,ae.getContext("2d").drawImage(E,0,0,W,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Me+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,N,Y,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=_;if(_===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),_===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const Me=K?Cr:Ye.getTransfer(Y);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=Me===Qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(E,_){let N;return E?_===null||_===Dn||_===xi?N=i.DEPTH24_STENCIL8:_===fn?N=i.DEPTH32F_STENCIL8:_===ki&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Dn||_===xi?N=i.DEPTH_COMPONENT24:_===fn?N=i.DEPTH_COMPONENT32F:_===ki&&(N=i.DEPTH_COMPONENT16),N}function B(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==ht?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function b(E){const _=E.target;_.removeEventListener("dispose",b),P(_),_.isVideoTexture&&u.delete(_)}function w(E){const _=E.target;_.removeEventListener("dispose",w),x(_)}function P(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,Y=d.get(N);if(Y){const K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(E),Object.keys(Y).length===0&&d.delete(N)}n.remove(E)}function S(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const N=E.source,Y=d.get(N);delete Y[_.__cacheKey],a.memory.textures--}function x(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let K=0;K<_.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let Y=0,K=N.length;Y<K;Y++){const W=n.get(N[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(E)}let R=0;function O(){R=0}function F(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function H(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){const N=n.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,E,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function z(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){$(N,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function j(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){$(N,E,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function V(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){J(N,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const ne={[br]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},ie={[$t]:i.NEAREST,[nc]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[ht]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Se={[ac]:i.NEVER,[dc]:i.ALWAYS,[oc]:i.LESS,[rl]:i.LEQUAL,[lc]:i.EQUAL,[hc]:i.GEQUAL,[cc]:i.GREATER,[uc]:i.NOTEQUAL};function Ue(E,_){if(_.type===fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ht||_.magFilter===Ir||_.magFilter===Ki||_.magFilter===Xn||_.minFilter===ht||_.minFilter===Ir||_.minFilter===Ki||_.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ne[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ne[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ne[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ie[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==Ki&&_.minFilter!==Xn||_.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",b));const Y=_.source;let K=d.get(Y);K===void 0&&(K={},d.set(Y,K));const W=H(_);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[W].usedTimes++;const Me=K[E.__cacheKey];Me!==void 0&&(K[E.__cacheKey].usedTimes--,Me.usedTimes===0&&S(_)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return N}function $(E,_,N){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const K=Xe(E,_),W=_.source;t.bindTexture(Y,E.__webglTexture,i.TEXTURE0+N);const Me=n.get(W);if(W.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),ce=_.colorSpace===Qt?null:Ye.getPrimaries(_.colorSpace),We=_.colorSpace===Qt||ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ee=v(_.image,!1,r.maxTextureSize);ee=Ne(_,ee);const ge=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ie=T(_.internalFormat,ge,Pe,_.colorSpace,_.isVideoTexture);Ue(Y,_);let _e;const qe=_.mipmaps,Ge=_.isVideoTexture!==!0,tt=Me.__version===void 0||K===!0,D=W.dataReady,le=B(_,ee);if(_.isDepthTexture)Ie=y(_.format===Mi,_.type),tt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ie,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,ge,Pe,null));else if(_.isDataTexture)if(qe.length>0){Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,le,Ie,qe[0].width,qe[0].height);for(let X=0,Z=qe.length;X<Z;X++)_e=qe[X],Ge?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,X,Ie,_e.width,_e.height,0,ge,Pe,_e.data);_.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(i.TEXTURE_2D,le,Ie,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ge,Pe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ee.width,ee.height,0,ge,Pe,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ie,qe[0].width,qe[0].height,ee.depth);for(let X=0,Z=qe.length;X<Z;X++)if(_e=qe[X],_.format!==Nt)if(ge!==null)if(Ge){if(D)if(_.layerUpdates.size>0){const fe=So(_e.width,_e.height,_.format,_.type);for(const he of _.layerUpdates){const Oe=_e.data.subarray(he*fe/_e.data.BYTES_PER_ELEMENT,(he+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,he,_e.width,_e.height,1,ge,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ie,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ee.depth,ge,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ie,_e.width,_e.height,ee.depth,0,ge,Pe,_e.data)}else{Ge&&tt&&t.texStorage2D(i.TEXTURE_2D,le,Ie,qe[0].width,qe[0].height);for(let X=0,Z=qe.length;X<Z;X++)_e=qe[X],_.format!==Nt?ge!==null?Ge?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,X,Ie,_e.width,_e.height,0,ge,Pe,_e.data)}else if(_.isDataArrayTexture)if(Ge){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ie,ee.width,ee.height,ee.depth),D)if(_.layerUpdates.size>0){const X=So(ee.width,ee.height,_.format,_.type);for(const Z of _.layerUpdates){const fe=ee.data.subarray(Z*X/ee.data.BYTES_PER_ELEMENT,(Z+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ge,Pe,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Pe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ee.width,ee.height,ee.depth,0,ge,Pe,ee.data);else if(_.isData3DTexture)Ge?(tt&&t.texStorage3D(i.TEXTURE_3D,le,Ie,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Pe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ee.width,ee.height,ee.depth,0,ge,Pe,ee.data);else if(_.isFramebufferTexture){if(tt)if(Ge)t.texStorage2D(i.TEXTURE_2D,le,Ie,ee.width,ee.height);else{let X=ee.width,Z=ee.height;for(let fe=0;fe<le;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ie,X,Z,0,ge,Pe,null),X>>=1,Z>>=1}}else if(qe.length>0){if(Ge&&tt){const X=me(qe[0]);t.texStorage2D(i.TEXTURE_2D,le,Ie,X.width,X.height)}for(let X=0,Z=qe.length;X<Z;X++)_e=qe[X],Ge?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ge,Pe,_e):t.texImage2D(i.TEXTURE_2D,X,Ie,ge,Pe,_e);_.generateMipmaps=!1}else if(Ge){if(tt){const X=me(ee);t.texStorage2D(i.TEXTURE_2D,le,Ie,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Pe,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ge,Pe,ee);m(_)&&p(Y),Me.__version=W.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,N){if(_.image.length!==6)return;const Y=Xe(E,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const W=n.get(K);if(K.version!==W.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const Me=Ye.getPrimaries(Ye.workingColorSpace),ae=_.colorSpace===Qt?null:Ye.getPrimaries(_.colorSpace),ce=_.colorSpace===Qt||Me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const We=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!We&&!ee?ge[Z]=v(_.image[Z],!0,r.maxCubemapSize):ge[Z]=ee?_.image[Z].image:_.image[Z],ge[Z]=Ne(_,ge[Z]);const Pe=ge[0],Ie=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),qe=T(_.internalFormat,Ie,_e,_.colorSpace),Ge=_.isVideoTexture!==!0,tt=W.__version===void 0||Y===!0,D=K.dataReady;let le=B(_,Pe);Ue(i.TEXTURE_CUBE_MAP,_);let X;if(We){Ge&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,qe,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){X=ge[Z].mipmaps;for(let fe=0;fe<X.length;fe++){const he=X[fe];_.format!==Nt?Ie!==null?Ge?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,Ie,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,Ie,_e,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,qe,he.width,he.height,0,Ie,_e,he.data)}}}else{if(X=_.mipmaps,Ge&&tt){X.length>0&&le++;const Z=me(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){Ge?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Ie,_e,ge[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,ge[Z].width,ge[Z].height,0,Ie,_e,ge[Z].data);for(let fe=0;fe<X.length;fe++){const Oe=X[fe].image[Z].image;Ge?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Oe.width,Oe.height,Ie,_e,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,qe,Oe.width,Oe.height,0,Ie,_e,Oe.data)}}else{Ge?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,_e,ge[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Ie,_e,ge[Z]);for(let fe=0;fe<X.length;fe++){const he=X[fe];Ge?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Ie,_e,he.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,qe,Ie,_e,he.image[Z])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ue(E,_,N,Y,K,W){const Me=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),ce=T(N.internalFormat,Me,ae,N.colorSpace),We=n.get(_),ee=n.get(N);if(ee.__renderTarget=_,!We.__hasExternalTextures){const ge=Math.max(1,_.width>>W),Pe=Math.max(1,_.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,ce,ge,Pe,_.depth,0,Me,ae,null):t.texImage2D(K,W,ce,ge,Pe,0,Me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,ee.__webglTexture,0,be(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,ee.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(E,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=y(_.stencilBuffer,K),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=be(_);Re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,W,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{const Y=_.textures;for(let K=0;K<Y.length;K++){const W=Y[K],Me=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),ce=T(W.internalFormat,Me,ae,W.colorSpace),We=be(_);N&&Re(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ce,_.width,_.height):Re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const K=Y.__webglTexture,W=be(_);if(_.depthTexture.format===$n)Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Mi)Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ce(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ae(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),re(_.__webglDepthbuffer[Y],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),re(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(E,_,N){const Y=n.get(E);_!==void 0&&ue(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ce(E)}function ve(E){const _=E.texture,N=n.get(E),Y=n.get(_);E.addEventListener("dispose",w);const K=E.textures,W=E.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let ce=0;ce<_.mipmaps.length;ce++)N.__webglFramebuffer[ae][ce]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ae=0,ce=K.length;ae<ce;ae++){const We=n.get(K[ae]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Re(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const ce=K[ae];N.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const We=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ge=T(ce.internalFormat,We,ee,ce.colorSpace,E.isXRRenderTarget===!0),Pe=be(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),re(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)ue(N.__webglFramebuffer[ae][ce],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else ue(N.__webglFramebuffer[ae],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ce=K.length;ae<ce;ae++){const We=K[ae],ee=n.get(We);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Ue(i.TEXTURE_2D,We),ue(N.__webglFramebuffer,E,We,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(We)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Ue(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)ue(N.__webglFramebuffer[ce],E,_,i.COLOR_ATTACHMENT0,ae,ce);else ue(N.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}E.depthBuffer&&Ce(E)}function se(E){const _=E.textures;for(let N=0,Y=_.length;N<Y;N++){const K=_[N];if(m(K)){const W=A(E),Me=n.get(K).__webglTexture;t.bindTexture(W,Me),p(W),t.unbindTexture()}}}const xe=[],C=[];function Ve(E){if(E.samples>0){if(Re(E)===!1){const _=E.textures,N=E.width,Y=E.height;let K=i.COLOR_BUFFER_BIT;const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),ae=_.length>1;if(ae)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const We=n.get(_[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),l===!0&&(xe.length=0,C.length=0,xe.push(i.COLOR_ATTACHMENT0+ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xe.push(W),C.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const We=n.get(_[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function be(E){return Math.min(r.maxSamples,E.samples)}function Re(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pe(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Ne(E,_){const N=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==mn&&N!==Qt&&(Ye.getTransfer(N)===Qe?(Y!==Nt||K!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Q,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Re}function Op(i,e){function t(n,r=Qt){let s;const a=Ye.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Qs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return i.BYTE;if(n===$o)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===Js)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===jo)return i.RGB;if(n===Nt)return i.RGBA;if(n===Jo)return i.LUMINANCE;if(n===Qo)return i.LUMINANCE_ALPHA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===ta)return i.RED_INTEGER;if(n===tl)return i.RG;if(n===na)return i.RG_INTEGER;if(n===ia)return i.RGBA_INTEGER;if(n===vr||n===xr||n===Mr||n===Sr)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Es||n===Ts||n===bs||n===ws)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Es)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===As||n===Rs||n===Cs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===As||n===Rs)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Hs||n===ks||n===Vs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ps)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ds)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ls)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Us)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Is)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ns)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Os)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ks)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vs)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===Ws||n===Xs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ws)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===qs||n===Ys||n===$s)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Bp extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:Gp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vp extends yi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new kp,m=t.getContextAttributes();let p=null,A=null;const T=[],y=[],B=new ke;let b=null;const w=new It;w.viewport=new et;const P=new It;P.viewport=new et;const S=[w,P],x=new Bp;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=T[$];return J===void 0&&(J=new os,T[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=T[$];return J===void 0&&(J=new os,T[$]=J),J.getGripSpace()},this.getHand=function($){let J=T[$];return J===void 0&&(J=new os,T[$]=J),J.getHandSpace()};function F($){const J=y.indexOf($.inputSource);if(J===-1)return;const ue=T[J];ue!==void 0&&(ue.update($.inputSource,$.frame,c||a),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",q);for(let $=0;$<T.length;$++){const J=y[$];J!==null&&(y[$]=null,T[$].disconnect(J))}R=null,O=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,A=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Bt(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ue=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Mi:$n,ue=m.stencil?xi:Dn);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Bt(d.textureWidth,d.textureHeight,{format:Nt,type:vn,depthTexture:new ca(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q($){for(let J=0;J<$.removed.length;J++){const ue=$.removed[J],re=y.indexOf(ue);re>=0&&(y[re]=null,T[re].disconnect(ue))}for(let J=0;J<$.added.length;J++){const ue=$.added[J];let re=y.indexOf(ue);if(re===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=y.length){y.push(ue),re=Ce;break}else if(y[Ce]===null){y[Ce]=ue,re=Ce;break}if(re===-1)break}const Ae=T[re];Ae&&Ae.connect(ue)}}const z=new L,j=new L;function V($,J,ue){z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const re=z.distanceTo(j),Ae=J.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Q=Ae[14]/(Ae[10]-1),ve=Ae[14]/(Ae[10]+1),se=(Ae[9]+1)/Ae[5],xe=(Ae[9]-1)/Ae[5],C=(Ae[8]-1)/Ae[0],Ve=(Ce[8]+1)/Ce[0],be=Q*C,Re=Q*Ve,pe=re/(-C+Ve),Ne=pe*-C;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const me=Q+pe,E=ve+pe,_=be-Ne,N=Re+(re-Ne),Y=se*ve/E*me,K=xe*ve/E*me;$.projectionMatrix.makePerspective(_,N,Y,K,me,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,ue=$.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),x.near=P.near=w.near=J,x.far=P.far=w.far=ue,(R!==x.near||O!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,O=x.far),w.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=w.layers.mask|P.layers.mask;const re=$.parent,Ae=x.cameras;ne(x,re);for(let Ce=0;Ce<Ae.length;Ce++)ne(Ae[Ce],re);Ae.length===2?V(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),ie($,x,re)};function ie($,J,ue){ue===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Se=null;function Ue($,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let re=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Ce=0;Ce<ue.length;Ce++){const Q=ue[Ce];let ve=null;if(f!==null)ve=f.getViewport(Q);else{const xe=h.getViewSubImage(d,Q);ve=xe.viewport,Ce===0&&(e.setRenderTargetTextures(A,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(A))}let se=S[Ce];se===void 0&&(se=new It,se.layers.enable(Ce),se.viewport=new et,S[Ce]=se),se.matrix.fromArray(Q.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Q.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ve.x,ve.y,ve.width,ve.height),Ce===0&&(x.matrix.copy(se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(se)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ce=h.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,r.renderState)}}for(let ue=0;ue<T.length;ue++){const re=y[ue],Ae=T[ue];re!==null&&Ae!==void 0&&Ae.update(re,J,c||a)}Se&&Se($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Xe=new ml;Xe.setAnimationLoop(Ue),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const zn=new Gt,Wp=new it;function Xp(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ct&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ct&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,y=A.envMapRotation;T&&(m.envMap.value=T,zn.copy(y),zn.x*=-1,zn.y*=-1,zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(zn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ct&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const y=T.program;n.uniformBlockBinding(A,y)}function c(A,T){let y=r[A.id];y===void 0&&(g(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const B=T.program;n.updateUBOMapping(A,B);const b=e.render.frame;s[A.id]!==b&&(d(A),s[A.id]=b)}function u(A){const T=h();A.__bindingPointIndex=T;const y=i.createBuffer(),B=A.__size,b=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],y=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let b=0,w=y.length;b<w;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,x=P.length;S<x;S++){const R=P[S];if(f(R,b,S,B)===!0){const O=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let q=0;q<F.length;q++){const z=F[q],j=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,O+H,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,T,y,B){const b=A.value,w=T+"_"+y;if(B[w]===void 0)return typeof b=="number"||typeof b=="boolean"?B[w]=b:B[w]=b.clone(),!0;{const P=B[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return B[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(A){const T=A.uniforms;let y=0;const B=16;for(let w=0,P=T.length;w<P;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,R=S.length;x<R;x++){const O=S[x],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=F.length;H<q;H++){const z=F[H],j=v(z),V=y%B,ne=V%j.boundary,ie=V+ne;y+=ne,ie!==0&&B-ie<j.storage&&(y+=B-ie),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=j.storage}}}const b=y%B;return b>0&&(y+=B-b),A.__size=y,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Yp{constructor(e={}){const{canvas:t=Cc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Pn,this.toneMappingExposure=1;const y=this;let B=!1,b=0,w=0,P=null,S=-1,x=null;const R=new et,O=new et;let F=null;const H=new De(0);let q=0,z=t.width,j=t.height,V=1,ne=null,ie=null;const Se=new et(0,0,z,j),Ue=new et(0,0,z,j);let Xe=!1;const $=new oa;let J=!1,ue=!1;const re=new it,Ae=new it,Ce=new L,Q=new et,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function xe(){return P===null?V:1}let C=n;function Ve(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${js}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),C===null){const U="webgl2";if(C=Ve(U,M),C===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let be,Re,pe,Ne,me,E,_,N,Y,K,W,Me,ae,ce,We,ee,ge,Pe,Ie,_e,qe,Ge,tt,D;function le(){be=new jd(C),be.init(),Ge=new Op(C,be),Re=new Xd(C,be,e,Ge),pe=new Ip(C,be),Re.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Ne=new ef(C),me=new xp,E=new Fp(C,be,pe,me,Re,Ge,Ne),_=new Yd(y),N=new Zd(y),Y=new ou(C),tt=new Vd(C,Y),K=new Jd(C,Y,Ne,tt),W=new nf(C,K,Y,Ne),Ie=new tf(C,Re,E),ee=new qd(me),Me=new vp(y,_,N,be,Re,tt,ee),ae=new Xp(y,me),ce=new Sp,We=new Ap(be),Pe=new kd(y,_,N,pe,W,f,l),ge=new Lp(y,W,Re),D=new qp(C,Ne,Re,pe),_e=new Wd(C,be,Ne),qe=new Qd(C,be,Ne),Ne.programs=Me.programs,y.capabilities=Re,y.extensions=be,y.properties=me,y.renderLists=ce,y.shadowMap=ge,y.state=pe,y.info=Ne}le();const X=new Vp(y,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(z,j,!1))},this.getSize=function(M){return M.set(z,j)},this.setSize=function(M,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,j=U,t.width=Math.floor(M*V),t.height=Math.floor(U*V),G===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(z*V,j*V).floor()},this.setDrawingBufferSize=function(M,U,G){z=M,j=U,V=G,t.width=Math.floor(M*G),t.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,U,G,k){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,U,G,k),pe.viewport(R.copy(Se).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,U,G,k){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,U,G,k),pe.scissor(O.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){pe.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){ie=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,U=!0,G=!0){let k=0;if(M){let I=!1;if(P!==null){const te=P.texture.format;I=te===ia||te===na||te===ta}if(I){const te=P.texture.type,de=te===vn||te===Dn||te===ki||te===xi||te===Qs||te===ea,ye=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Fe=ye.r,Be=ye.g,Te=ye.b;de?(g[0]=Fe,g[1]=Be,g[2]=Te,g[3]=Ee,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Fe,v[1]=Be,v[2]=Te,v[3]=Ee,C.clearBufferiv(C.COLOR,0,v))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),G&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),We.dispose(),me.dispose(),_.dispose(),N.dispose(),W.dispose(),tt.dispose(),D.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",ma),X.removeEventListener("sessionend",ga),Un.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const M=Ne.autoReset,U=ge.enabled,G=ge.autoUpdate,k=ge.needsUpdate,I=ge.type;le(),Ne.autoReset=M,ge.enabled=U,ge.autoUpdate=G,ge.needsUpdate=k,ge.type=I}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const U=M.target;U.removeEventListener("dispose",Oe),at(U)}function at(M){_t(M),me.remove(M)}function _t(M){const U=me.get(M).programs;U!==void 0&&(U.forEach(function(G){Me.releaseProgram(G)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,k,I,te){U===null&&(U=ve);const de=I.isMesh&&I.matrixWorld.determinant()<0,ye=bl(M,U,G,k,I);pe.setMaterial(k,de);let Ee=G.index,Fe=1;if(k.wireframe===!0){if(Ee=K.getWireframeAttribute(G),Ee===void 0)return;Fe=2}const Be=G.drawRange,Te=G.attributes.position;let $e=Be.start*Fe,nt=(Be.start+Be.count)*Fe;te!==null&&($e=Math.max($e,te.start*Fe),nt=Math.min(nt,(te.start+te.count)*Fe)),Ee!==null?($e=Math.max($e,0),nt=Math.min(nt,Ee.count)):Te!=null&&($e=Math.max($e,0),nt=Math.min(nt,Te.count));const rt=nt-$e;if(rt<0||rt===1/0)return;tt.setup(I,k,ye,G,Ee);let wt,Ze=_e;if(Ee!==null&&(wt=Y.get(Ee),Ze=qe,Ze.setIndex(wt)),I.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*xe()),Ze.setMode(C.LINES)):Ze.setMode(C.TRIANGLES);else if(I.isLine){let we=k.linewidth;we===void 0&&(we=1),pe.setLineWidth(we*xe()),I.isLineSegments?Ze.setMode(C.LINES):I.isLineLoop?Ze.setMode(C.LINE_LOOP):Ze.setMode(C.LINE_STRIP)}else I.isPoints?Ze.setMode(C.POINTS):I.isSprite&&Ze.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ze.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Ze.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,rn=I._multiDrawCounts,je=I._multiDrawCount,kt=Ee?Y.get(Ee).bytesPerElement:1,Kn=me.get(k).currentProgram.getUniforms();for(let Dt=0;Dt<je;Dt++)Kn.setValue(C,"_gl_DrawID",Dt),Ze.render(we[Dt]/kt,rn[Dt])}else if(I.isInstancedMesh)Ze.renderInstances($e,rt,I.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rn=Math.min(G.instanceCount,we);Ze.renderInstances($e,rt,rn)}else Ze.render($e,rt)};function Je(M,U,G){M.transparent===!0&&M.side===Jt&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,$i(M,U,G),M.side=_n,M.needsUpdate=!0,$i(M,U,G),M.side=Jt):$i(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),p=We.get(G),p.init(U),T.push(p),G.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),M!==G&&M.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const te=I.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ye=te[de];Je(ye,G,I),k.add(ye)}else Je(te,G,I),k.add(te)}),T.pop(),p=null,k},this.compileAsync=function(M,U,G=null){const k=this.compile(M,U,G);return new Promise(I=>{function te(){if(k.forEach(function(de){me.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){I(M);return}setTimeout(te,10)}be.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ht=null;function nn(M){Ht&&Ht(M)}function ma(){Un.stop()}function ga(){Un.start()}const Un=new ml;Un.setAnimationLoop(nn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(M){Ht=M,X.setAnimationLoop(M),M===null?Un.stop():Un.start()},X.addEventListener("sessionstart",ma),X.addEventListener("sessionend",ga),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,P),p=We.get(M,T.length),p.init(U),T.push(p),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ae),ue=this.localClippingEnabled,J=ee.init(this.clippingPlanes,ue),m=ce.get(M,A.length),m.init(),A.push(m),X.enabled===!0&&X.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&Ur(te,U,-1/0,y.sortObjects)}Ur(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,ie),se=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,se&&Pe.addToRenderList(m,M),this.info.render.frame++,J===!0&&ee.beginShadows();const G=p.state.shadowsArray;ge.render(G,M,U),J===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(I.length>0)for(let de=0,ye=te.length;de<ye;de++){const Ee=te[de];va(k,I,M,Ee)}se&&Pe.render(M);for(let de=0,ye=te.length;de<ye;de++){const Ee=te[de];_a(m,M,Ee,Ee.viewport)}}else I.length>0&&va(k,I,M,U),se&&Pe.render(M),_a(m,M,U);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,U),tt.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],J===!0&&ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ur(M,U,G,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){k&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const de=W.update(M),ye=M.material;ye.visible&&m.push(M,de,ye,G,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const de=W.update(M),ye=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Q.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Q.copy(de.boundingSphere.center)),Q.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(ye)){const Ee=de.groups;for(let Fe=0,Be=Ee.length;Fe<Be;Fe++){const Te=Ee[Fe],$e=ye[Te.materialIndex];$e&&$e.visible&&m.push(M,de,$e,G,Q.z,Te)}}else ye.visible&&m.push(M,de,ye,G,Q.z,null)}}const te=M.children;for(let de=0,ye=te.length;de<ye;de++)Ur(te[de],U,G,k)}function _a(M,U,G,k){const I=M.opaque,te=M.transmissive,de=M.transparent;p.setupLightsView(G),J===!0&&ee.setGlobalState(y.clippingPlanes,G),k&&pe.viewport(R.copy(k)),I.length>0&&Yi(I,U,G),te.length>0&&Yi(te,U,G),de.length>0&&Yi(de,U,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function va(M,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Bt(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?tn:vn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=p.state.transmissionRenderTarget[k.id],de=k.viewport||R;te.setSize(de.z,de.w);const ye=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(H),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),se&&Pe.render(G);const Ee=y.toneMapping;y.toneMapping=Pn;const Fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),J===!0&&ee.setGlobalState(y.clippingPlanes,k),Yi(M,G,k),E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te),be.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Te=0,$e=U.length;Te<$e;Te++){const nt=U[Te],rt=nt.object,wt=nt.geometry,Ze=nt.material,we=nt.group;if(Ze.side===Jt&&rt.layers.test(k.layers)){const rn=Ze.side;Ze.side=Ct,Ze.needsUpdate=!0,xa(rt,G,k,wt,Ze,we),Ze.side=rn,Ze.needsUpdate=!0,Be=!0}}Be===!0&&(E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te))}y.setRenderTarget(ye),y.setClearColor(H,q),Fe!==void 0&&(k.viewport=Fe),y.toneMapping=Ee}function Yi(M,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,te=M.length;I<te;I++){const de=M[I],ye=de.object,Ee=de.geometry,Fe=k===null?de.material:k,Be=de.group;ye.layers.test(G.layers)&&xa(ye,U,G,Ee,Fe,Be)}}function xa(M,U,G,k,I,te){M.onBeforeRender(y,U,G,k,I,te),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(y,U,G,k,M,te),I.transparent===!0&&I.side===Jt&&I.forceSinglePass===!1?(I.side=Ct,I.needsUpdate=!0,y.renderBufferDirect(G,U,k,I,M,te),I.side=_n,I.needsUpdate=!0,y.renderBufferDirect(G,U,k,I,M,te),I.side=Jt):y.renderBufferDirect(G,U,k,I,M,te),M.onAfterRender(y,U,G,k,I,te)}function $i(M,U,G){U.isScene!==!0&&(U=ve);const k=me.get(M),I=p.state.lights,te=p.state.shadowsArray,de=I.state.version,ye=Me.getParameters(M,I.state,te,U,G),Ee=Me.getProgramCacheKey(ye);let Fe=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?N:_).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",Oe),Fe=new Map,k.programs=Fe);let Be=Fe.get(Ee);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===de)return Sa(M,ye),Be}else ye.uniforms=Me.getUniforms(M),M.onBeforeCompile(ye,y),Be=Me.acquireProgram(ye,Ee),Fe.set(Ee,Be),k.uniforms=ye.uniforms;const Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Sa(M,ye),k.needsLights=Al(M),k.lightsStateVersion=de,k.needsLights&&(Te.ambientLightColor.value=I.state.ambient,Te.lightProbe.value=I.state.probe,Te.directionalLights.value=I.state.directional,Te.directionalLightShadows.value=I.state.directionalShadow,Te.spotLights.value=I.state.spot,Te.spotLightShadows.value=I.state.spotShadow,Te.rectAreaLights.value=I.state.rectArea,Te.ltc_1.value=I.state.rectAreaLTC1,Te.ltc_2.value=I.state.rectAreaLTC2,Te.pointLights.value=I.state.point,Te.pointLightShadows.value=I.state.pointShadow,Te.hemisphereLights.value=I.state.hemi,Te.directionalShadowMap.value=I.state.directionalShadowMap,Te.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Te.spotShadowMap.value=I.state.spotShadowMap,Te.spotLightMatrix.value=I.state.spotLightMatrix,Te.spotLightMap.value=I.state.spotLightMap,Te.pointShadowMap.value=I.state.pointShadowMap,Te.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function Ma(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Er.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Sa(M,U){const G=me.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function bl(M,U,G,k,I){U.isScene!==!0&&(U=ve),E.resetTextureUnits();const te=U.fog,de=k.isMeshStandardMaterial?U.environment:null,ye=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mn,Ee=(k.isMeshStandardMaterial?N:_).get(k.envMap||de),Fe=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let rt=Pn;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(rt=y.toneMapping);const wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=wt!==void 0?wt.length:0,we=me.get(k),rn=p.state.lights;if(J===!0&&(ue===!0||M!==x)){const Ft=M===x&&k.id===S;ee.setState(k,M,Ft)}let je=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==rn.state.version||we.outputColorSpace!==ye||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==Ee||k.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ee.numPlanes||we.numIntersection!==ee.numIntersection)||we.vertexAlphas!==Fe||we.vertexTangents!==Be||we.morphTargets!==Te||we.morphNormals!==$e||we.morphColors!==nt||we.toneMapping!==rt||we.morphTargetsCount!==Ze)&&(je=!0):(je=!0,we.__version=k.version);let kt=we.currentProgram;je===!0&&(kt=$i(k,U,I));let Kn=!1,Dt=!1,Ai=!1;const st=kt.getUniforms(),Zt=we.uniforms;if(pe.useProgram(kt.program)&&(Kn=!0,Dt=!0,Ai=!0),k.id!==S&&(S=k.id,Dt=!0),Kn||x!==M){pe.buffers.depth.getReversed()?(re.copy(M.projectionMatrix),Dc(re),Lc(re),st.setValue(C,"projectionMatrix",re)):st.setValue(C,"projectionMatrix",M.projectionMatrix),st.setValue(C,"viewMatrix",M.matrixWorldInverse);const xn=st.map.cameraPosition;xn!==void 0&&xn.setValue(C,Ce.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&st.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Dt=!0,Ai=!0)}if(I.isSkinnedMesh){st.setOptional(C,I,"bindMatrix"),st.setOptional(C,I,"bindMatrixInverse");const Ft=I.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),st.setValue(C,"boneTexture",Ft.boneTexture,E))}I.isBatchedMesh&&(st.setOptional(C,I,"batchingTexture"),st.setValue(C,"batchingTexture",I._matricesTexture,E),st.setOptional(C,I,"batchingIdTexture"),st.setValue(C,"batchingIdTexture",I._indirectTexture,E),st.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(C,"batchingColorTexture",I._colorsTexture,E));const Ri=G.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Ie.update(I,G,kt),(Dt||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,st.setValue(C,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Zt.envMap.value=Ee,Zt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Zt.envMapIntensity.value=U.environmentIntensity),Dt&&(st.setValue(C,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&wl(Zt,Ai),te&&k.fog===!0&&ae.refreshFogUniforms(Zt,te),ae.refreshMaterialUniforms(Zt,k,V,j,p.state.transmissionRenderTarget[M.id]),Er.upload(C,Ma(we),Zt,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Er.upload(C,Ma(we),Zt,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(C,"center",I.center),st.setValue(C,"modelViewMatrix",I.modelViewMatrix),st.setValue(C,"normalMatrix",I.normalMatrix),st.setValue(C,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let xn=0,Mn=Ft.length;xn<Mn;xn++){const ya=Ft[xn];D.update(ya,kt),D.bind(ya,kt)}}return kt}function wl(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Al(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,G){me.get(M.texture).__webglTexture=U,me.get(M.depthTexture).__webglTexture=G;const k=me.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const G=me.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,G=0){P=M,b=U,w=G;let k=!0,I=null,te=!1,de=!1;if(M){const Ee=me.get(M);if(Ee.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(Ee.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Ee.__hasExternalTextures)E.rebindTextures(M,me.get(M.texture).__webglTexture,me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(de=!0);const Be=me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?I=Be[U][G]:I=Be[U],te=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?I=me.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?I=Be[G]:I=Be,R.copy(M.viewport),O.copy(M.scissor),F=M.scissorTest}else R.copy(Se).multiplyScalar(V).floor(),O.copy(Ue).multiplyScalar(V).floor(),F=Xe;if(pe.bindFramebuffer(C.FRAMEBUFFER,I)&&k&&pe.drawBuffers(M,I),pe.viewport(R),pe.scissor(O),pe.setScissorTest(F),te){const Ee=me.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,G)}else if(de){const Ee=me.get(M.texture),Fe=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Fe)}S=-1},this.readRenderTargetPixels=function(M,U,G,k,I,te,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){pe.bindFramebuffer(C.FRAMEBUFFER,ye);try{const Ee=M.texture,Fe=Ee.format,Be=Ee.type;if(!Re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&G>=0&&G<=M.height-I&&C.readPixels(U,G,k,I,Ge.convert(Fe),Ge.convert(Be),te)}finally{const Ee=P!==null?me.get(P).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,k,I,te,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Ee=M.texture,Fe=Ee.format,Be=Ee.type;if(!Re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-k&&G>=0&&G<=M.height-I){pe.bindFramebuffer(C.FRAMEBUFFER,ye);const Te=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),C.readPixels(U,G,k,I,Ge.convert(Fe),Ge.convert(Be),0);const $e=P!==null?me.get(P).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,$e);const nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Pc(C,nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(Te),C.deleteSync(nt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,G=0){M.isTexture!==!0&&(Ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-G),I=Math.floor(M.image.width*k),te=Math.floor(M.image.height*k),de=U!==null?U.x:0,ye=U!==null?U.y:0;E.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,de,ye,I,te),pe.unbindTexture()},this.copyTextureToTexture=function(M,U,G=null,k=null,I=0){M.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],U=arguments[2],I=arguments[3]||0,G=null);let te,de,ye,Ee,Fe,Be,Te,$e,nt;const rt=M.isCompressedTexture?M.mipmaps[I]:M.image;G!==null?(te=G.max.x-G.min.x,de=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Fe=G.min.y,Be=G.isBox3?G.min.z:0):(te=rt.width,de=rt.height,ye=rt.depth||1,Ee=0,Fe=0,Be=0),k!==null?(Te=k.x,$e=k.y,nt=k.z):(Te=0,$e=0,nt=0);const wt=Ge.convert(U.format),Ze=Ge.convert(U.type);let we;U.isData3DTexture?(E.setTexture3D(U,0),we=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),we=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),we=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const rn=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),kt=C.getParameter(C.UNPACK_SKIP_PIXELS),Kn=C.getParameter(C.UNPACK_SKIP_ROWS),Dt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);const Ai=M.isDataArrayTexture||M.isData3DTexture,st=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Zt=me.get(M),Ri=me.get(U),Ft=me.get(Zt.__renderTarget),xn=me.get(Ri.__renderTarget);pe.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Mn=0;Mn<ye;Mn++)Ai&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.get(M).__webglTexture,I,Be+Mn),M.isDepthTexture?(st&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.get(U).__webglTexture,I,nt+Mn),C.blitFramebuffer(Ee,Fe,te,de,Te,$e,te,de,C.DEPTH_BUFFER_BIT,C.NEAREST)):st?C.copyTexSubImage3D(we,I,Te,$e,nt+Mn,Ee,Fe,te,de):C.copyTexSubImage2D(we,I,Te,$e,nt+Mn,Ee,Fe,te,de);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(we,I,Te,$e,nt,te,de,ye,wt,Ze,rt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(we,I,Te,$e,nt,te,de,ye,wt,rt.data):C.texSubImage3D(we,I,Te,$e,nt,te,de,ye,wt,Ze,rt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,I,Te,$e,te,de,wt,Ze,rt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,I,Te,$e,rt.width,rt.height,wt,rt.data):C.texSubImage2D(C.TEXTURE_2D,I,Te,$e,te,de,wt,Ze,rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,rn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dt),I===0&&U.generateMipmaps&&C.generateMipmap(we),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,U,G=null,k=null,I=0){return M.isTexture!==!0&&(Ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,M=arguments[2],U=arguments[3],I=arguments[4]||0),Ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,G,k,I)},this.initRenderTarget=function(M){me.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class ua{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let Yn=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class zi extends Kt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new L,u=new ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dr extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function A(){const y=new L,B=new L;let b=0;const w=(t-e)/n;for(let P=0;P<=s;P++){const S=[],x=P/s,R=x*(t-e)+e;for(let O=0;O<=r;O++){const F=O/r,H=F*l+o,q=Math.sin(H),z=Math.cos(H);B.x=R*q,B.y=-x*n+m,B.z=R*z,h.push(B.x,B.y,B.z),y.set(q,w,z).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-x),S.push(g++)}v.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const x=v[S][P],R=v[S+1][P],O=v[S+1][P+1],F=v[S][P+1];(e>0||S!==0)&&(u.push(x,R,F),b+=3),(t>0||S!==s-1)&&(u.push(R,O,F),b+=3)}c.addGroup(p,b,0),p+=b}function T(y){const B=g,b=new ke,w=new L;let P=0;const S=y===!0?e:t,x=y===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const R=g;for(let O=0;O<=r;O++){const H=O/r*l+o,q=Math.cos(H),z=Math.sin(H);w.x=S*z,w.y=m*x,w.z=S*q,h.push(w.x,w.y,w.z),d.push(0,x,0),b.x=q*.5+.5,b.y=z*.5*x+.5,f.push(b.x,b.y),g++}for(let O=0;O<r;O++){const F=B+O,H=R+O;y===!0?u.push(H,H+1,F):u.push(H+1,H,F),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends Dr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ha(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class da extends Xi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $p extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ls=new it,yo=new L,Eo=new L;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const To=new it,Ui=new L,cs=new L;class Kp extends Ml{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ui),cs.copy(n.position),cs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cs),n.updateMatrixWorld(),r.makeTranslation(-Ui.x,-Ui.y,-Ui.z),To.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To)}}class Zp extends Lr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jp extends Ml{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new jp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qp extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bo(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);const ut={groundRadius:6371,atmosphereRadius:6471,rayleighScaleHeight:8,mieScaleHeight:1.2,ozoneCenter:25,ozoneWidth:15},bt={rayleigh:new L(.005802,.013558,.0331),mie:.021,mieExtRatio:1.1,ozoneAbs:new L(65e-5,.001881,85e-6)},fa=`
const float PI = 3.14159265358979323846;

vec2 raySphereIntersect(vec3 rayOrigin, vec3 rayDir, float sphereRadius) {
  vec3 oc = rayOrigin / sphereRadius;
  float b = dot(oc, rayDir);
  float c = dot(oc, oc) - 1.0;
  float disc = b * b - c;
  if (disc < -1e-6) return vec2(-1.0, -1.0);
  float s = sqrt(max(disc, 0.0));
  return vec2((-b - s) * sphereRadius, (-b + s) * sphereRadius);
}

float rayleighDensity(float altitude, float scaleHeight) {
  return exp(-altitude / scaleHeight);
}

float mieDensity(float altitude, float scaleHeight) {
  return exp(-altitude / scaleHeight);
}

float ozoneDensity(float altitude, float center, float width) {
  return max(0.0, 1.0 - abs(altitude - center) / width);
}

vec3 sampleMediumDensity(vec3 point, float planetRadius,
                         float rayleighSH, float mieSH,
                         float ozoneCenter, float ozoneWidth,
                         bool mieOn, bool ozoneOn) {
  float h = length(point) - planetRadius;
  float r = rayleighDensity(h, rayleighSH);
  float m = mieOn ? mieDensity(h, mieSH) : 0.0;
  float o = ozoneOn ? ozoneDensity(h, ozoneCenter, ozoneWidth) : 0.0;
  return vec3(r, m, o);
}

float rayleighPhase(float mu) {
  return 3.0 / (16.0 * PI) * (1.0 + mu * mu);
}

float miePhase(float mu, float g) {
  float gg = g * g;
  float num = 3.0 * (1.0 - gg) * (1.0 + mu * mu);
  float den = (8.0 * PI) * (2.0 + gg) * pow(max(1.0 + gg - 2.0 * g * mu, 1e-4), 1.5);
  return num / den;
}

vec2 getTransmittanceLUTUv(vec3 samplePoint, vec3 lightDir,
                           float planetRadius, float atmosphereRadius) {
  vec3 up = normalize(samplePoint);
  float mu = dot(up, lightDir);
  float radius = length(samplePoint);
  float u = mu * 0.5 + 0.5;
  float v = clamp((radius - planetRadius) / max(atmosphereRadius - planetRadius, 1e-5),
                  0.0, 1.0);
  return vec2(u, v);
}
`,Sl=`
float encodeLatitude(float l, bool warp) {
  if (!warp) return clamp(l / PI + 0.5, 0.0, 1.0);
  float a = clamp(abs(l) / (PI * 0.5), 0.0, 1.0);
  return 0.5 + 0.5 * sign(l) * sqrt(a);
}

float decodeLatitude(float v, bool warp) {
  if (!warp) return (v - 0.5) * PI;
  float s = 2.0 * v - 1.0;
  return sign(s) * (PI * 0.5) * s * s;
}
`,yl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,tm=`
varying vec2 vUv;

uniform float uPlanetRadius;
uniform float uAtmosphereRadius;
uniform float uRayleighSH;
uniform vec3  uRayleighBeta;
uniform float uMieSH;
uniform float uMieBetaExt;
uniform bool  uMieOn;
uniform float uOzoneCenter;
uniform float uOzoneWidth;
uniform vec3  uOzoneBetaAbs;
uniform bool  uOzoneOn;

const int TRANSMITTANCE_STEPS = 40;

${fa}

void main() {
  float mu = mix(-1.0, 1.0, vUv.x);
  float radius = mix(uPlanetRadius, uAtmosphereRadius, vUv.y);

  vec3 rayOrigin = vec3(0.0, radius, 0.0);
  float sinTheta = sqrt(max(1.0 - mu * mu, 0.0));
  vec3 rayDir = normalize(vec3(sinTheta, mu, 0.0));

  vec2 atmoHit = raySphereIntersect(rayOrigin, rayDir, uAtmosphereRadius);
  vec2 groundHit = raySphereIntersect(rayOrigin, rayDir, uPlanetRadius);
  float rayLen = atmoHit.y;
  if (rayLen <= 0.0) { gl_FragColor = vec4(1.0); return; }
  if (groundHit.x > 0.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  float dt = rayLen / float(TRANSMITTANCE_STEPS);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  for (int i = 0; i < TRANSMITTANCE_STEPS; i++) {
    float t = (float(i) + 0.5) * dt;
    vec3 p = rayOrigin + rayDir * t;
    vec3 d = sampleMediumDensity(p, uPlanetRadius, uRayleighSH, uMieSH,
                                  uOzoneCenter, uOzoneWidth, uMieOn, uOzoneOn);
    odR += d.x * dt;
    odM += d.y * dt;
    odO += d.z * dt;
  }
  vec3 tau = uRayleighBeta * odR + uMieBetaExt * odM + uOzoneBetaAbs * odO;
  gl_FragColor = vec4(exp(-tau), 1.0);
}
`;class nm{constructor({width:e=256,height:t=64}={}){this.width=e,this.height=t,this.target=new Bt(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:ht,magFilter:ht,wrapS:en,wrapT:en,format:Nt,type:tn,colorSpace:Qt}),this.target.texture.name="TransmittanceLUT",this.uniforms={uPlanetRadius:{value:ut.groundRadius},uAtmosphereRadius:{value:ut.atmosphereRadius},uRayleighSH:{value:ut.rayleighScaleHeight},uRayleighBeta:{value:bt.rayleigh.clone()},uMieSH:{value:ut.mieScaleHeight},uMieBetaExt:{value:bt.mie*bt.mieExtRatio},uMieOn:{value:!0},uOzoneCenter:{value:ut.ozoneCenter},uOzoneWidth:{value:ut.ozoneWidth},uOzoneBetaAbs:{value:bt.ozoneAbs.clone()},uOzoneOn:{value:!0}},this.material=new St({uniforms:this.uniforms,vertexShader:yl,fragmentShader:tm,depthTest:!1,depthWrite:!1}),this._scene=new Yn,this._camera=new qi(-1,1,1,-1,0,1),this._quad=new lt(new Ln(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad),this.dirty=!0}get texture(){return this.target.texture}setAtmosphere({rayleighMul:e,mieBeta:t,mieEnabled:n,ozoneMul:r,ozoneEnabled:s}){e!=null&&this.uniforms.uRayleighBeta.value.copy(bt.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBetaExt.value=t*bt.mieExtRatio),n!=null&&(this.uniforms.uMieOn.value=n),r!=null&&this.uniforms.uOzoneBetaAbs.value.copy(bt.ozoneAbs).multiplyScalar(r),s!=null&&(this.uniforms.uOzoneOn.value=s),this.dirty=!0}render(e){if(!this.dirty)return;const t=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(t),this.dirty=!1}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const im=`
varying vec2 vUv;

uniform vec3  uCameraPos;
uniform vec3  uSunDir;
uniform bool  uHorizonWarp;

uniform float uPlanetRadius;
uniform float uAtmosphereRadius;
uniform float uRayleighSH;
uniform vec3  uRayleighBeta;
uniform float uMieSH;
uniform float uMieBeta;
uniform float uMieBetaExt;
uniform float uMieG;
uniform bool  uMieOn;
uniform float uOzoneCenter;
uniform float uOzoneWidth;
uniform vec3  uOzoneBetaAbs;
uniform bool  uOzoneOn;
uniform float uSunIntensity;

uniform sampler2D uTransmittanceLUT;
uniform int  uMarchSteps;

${fa}
${Sl}

vec3 sampleTransmittance(vec3 p, vec3 lightDir) {
  vec2 uv = getTransmittanceLUTUv(p, lightDir, uPlanetRadius, uAtmosphereRadius);
  return texture2D(uTransmittanceLUT, uv).rgb;
}

vec3 getSkyViewForward(vec3 up) {
  vec3 projectedSun = uSunDir - up * dot(uSunDir, up);
  float lenSq = dot(projectedSun, projectedSun);
  if (lenSq < 1e-5) {
    vec3 axis = abs(up.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    projectedSun = cross(axis, up);
  }
  return normalize(projectedSun);
}

vec3 getRayDir(vec2 uv, vec3 up) {
  vec3 forward = getSkyViewForward(up);
  vec3 right = normalize(cross(forward, up));
  float azimuth = (uv.x - 0.5) * 2.0 * PI;
  float elevation = decodeLatitude(uv.y, uHorizonWarp);
  float ce = cos(elevation);
  vec3 horizontal = cos(azimuth) * forward + sin(azimuth) * right;
  return normalize(horizontal * ce + up * sin(elevation));
}

void main() {
  vec3 rayOrigin = uCameraPos;
  vec3 up = normalize(rayOrigin);
  vec3 rayDir = getRayDir(vUv, up);

  vec2 atmoHit = raySphereIntersect(rayOrigin, rayDir, uAtmosphereRadius);
  vec2 planetHit = raySphereIntersect(rayOrigin, rayDir, uPlanetRadius);

  if (atmoHit.y <= 0.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  float tNear = max(atmoHit.x, 0.0);
  float tFar = atmoHit.y;
  if (planetHit.x > tNear) tFar = min(tFar, planetHit.x);

  float segLen = tFar - tNear;
  if (segLen <= 1e-4) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  int steps = clamp(uMarchSteps, 4, 96);
  float dt = segLen / float(steps);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  vec3 totalR = vec3(0.0);
  vec3 totalM = vec3(0.0);

  float mu = dot(rayDir, uSunDir);
  float phaseR = rayleighPhase(mu);
  float phaseM = miePhase(mu, uMieG);

  for (int i = 0; i < 96; i++) {
    if (i >= steps) break;
    float t = tNear + (float(i) + 0.5) * dt;
    vec3 p = rayOrigin + rayDir * t;
    vec3 d = sampleMediumDensity(p, uPlanetRadius, uRayleighSH, uMieSH,
                                  uOzoneCenter, uOzoneWidth, uMieOn, uOzoneOn);
    odR += d.x * dt;
    odM += d.y * dt;
    odO += d.z * dt;
    vec3 sunT = sampleTransmittance(p, uSunDir);
    vec3 viewTau = uRayleighBeta * odR + uMieBetaExt * odM + uOzoneBetaAbs * odO;
    vec3 inscatTrans = sunT * exp(-viewTau);
    totalR += d.x * inscatTrans * dt;
    if (uMieOn) totalM += d.y * inscatTrans * dt;
  }

  vec3 scattered = uSunIntensity * (
    phaseR * uRayleighBeta * totalR +
    (uMieOn ? phaseM * uMieBeta * totalM : vec3(0.0))
  );
  gl_FragColor = vec4(scattered, 1.0);
}
`;class rm{constructor({width:e=256,height:t=128,marchSteps:n=40}={}){this.width=e,this.height=t,this.lastRenderUs=0,this._makeTarget(e,t),this.uniforms={uCameraPos:{value:new L(0,ut.groundRadius+.0016,0)},uSunDir:{value:new L(0,1,0)},uHorizonWarp:{value:!0},uPlanetRadius:{value:ut.groundRadius},uAtmosphereRadius:{value:ut.atmosphereRadius},uRayleighSH:{value:ut.rayleighScaleHeight},uRayleighBeta:{value:bt.rayleigh.clone()},uMieSH:{value:ut.mieScaleHeight},uMieBeta:{value:bt.mie},uMieBetaExt:{value:bt.mie*bt.mieExtRatio},uMieG:{value:.758},uMieOn:{value:!0},uOzoneCenter:{value:ut.ozoneCenter},uOzoneWidth:{value:ut.ozoneWidth},uOzoneBetaAbs:{value:bt.ozoneAbs.clone()},uOzoneOn:{value:!0},uSunIntensity:{value:22},uTransmittanceLUT:{value:null},uMarchSteps:{value:n}},this.material=new St({uniforms:this.uniforms,vertexShader:yl,fragmentShader:im,depthTest:!1,depthWrite:!1}),this._scene=new Yn,this._camera=new qi(-1,1,1,-1,0,1),this._quad=new lt(new Ln(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad)}get texture(){return this.target.texture}_makeTarget(e,t){this.target&&this.target.dispose(),this.target=new Bt(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:ht,magFilter:ht,wrapS:br,wrapT:en,format:Nt,type:tn,colorSpace:Qt}),this.target.texture.name="SkyViewLUT"}resize(e,t){e===this.width&&t===this.height||(this.width=e,this.height=t,this._makeTarget(e,t))}setMarchSteps(e){this.uniforms.uMarchSteps.value=e}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setSunDir(e){this.uniforms.uSunDir.value.copy(e)}setSunIntensity(e){this.uniforms.uSunIntensity.value=e}setMieG(e){this.uniforms.uMieG.value=e}setObserverPosition(e){this.uniforms.uCameraPos.value.copy(e)}setTransmittanceLUT(e){this.uniforms.uTransmittanceLUT.value=e}setAtmosphere({rayleighMul:e,mieBeta:t,ozoneMul:n}){e!=null&&this.uniforms.uRayleighBeta.value.copy(bt.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBeta.value=t,this.uniforms.uMieBetaExt.value=t*bt.mieExtRatio),n!=null&&this.uniforms.uOzoneBetaAbs.value.copy(bt.ozoneAbs).multiplyScalar(n)}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const n=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=n+t}}render(e){const t=performance.now(),n=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(n),this.lastRenderUs=(performance.now()-t)*1e3}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const sm=`
varying vec3 vViewRay;
uniform mat4 uInvProj;
uniform mat4 uCameraWorld;

void main() {
  gl_Position = vec4(position.xy, 1.0, 1.0);
  vec4 ndc = vec4(position.xy, 1.0, 1.0);
  vec4 viewPos = uInvProj * ndc;
  viewPos /= viewPos.w;
  vec3 viewRay = normalize(viewPos.xyz);
  vViewRay = normalize(mat3(uCameraWorld) * viewRay);
}
`,am=`
varying vec3 vViewRay;

uniform vec3  uObserverPos;
uniform vec3  uSunDir;
uniform bool  uHorizonWarp;

uniform sampler2D uSkyViewLUT;
uniform sampler2D uTransmittanceLUT;
uniform float uPlanetRadius;
uniform float uAtmosphereRadius;

uniform float uSunIntensity;
uniform float uSunDiskAngularRadius;
uniform float uCoronaSoftness;
uniform vec3  uSunTint;

${fa}
${Sl}

vec3 sampleTransmittance(vec3 p, vec3 lightDir) {
  vec2 uv = getTransmittanceLUTUv(p, lightDir, uPlanetRadius, uAtmosphereRadius);
  return texture2D(uTransmittanceLUT, uv).rgb;
}

vec3 getSkyViewForward(vec3 up) {
  vec3 projectedSun = uSunDir - up * dot(uSunDir, up);
  float lenSq = dot(projectedSun, projectedSun);
  if (lenSq < 1e-5) {
    vec3 axis = abs(up.y) > 0.99 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    projectedSun = cross(axis, up);
  }
  return normalize(projectedSun);
}

vec3 sampleSkyView(vec3 rayDir) {
  vec3 up = normalize(uObserverPos);
  vec3 forward = getSkyViewForward(up);
  vec3 right = normalize(cross(forward, up));
  float vertical = clamp(dot(rayDir, up), -1.0, 1.0);
  float elevation = asin(vertical);
  vec3 horizontal = rayDir - up * vertical;
  float azimuth = atan(dot(horizontal, right), dot(horizontal, forward));
  float v = encodeLatitude(elevation, uHorizonWarp);
  float u = azimuth / (2.0 * PI) + 0.5;
  return texture2D(uSkyViewLUT, vec2(u, v)).rgb;
}

vec3 sampleSun(vec3 rayDir) {
  vec3 up = normalize(uObserverPos);
  float sunUp = dot(uSunDir, up);
  float theta = acos(clamp(dot(rayDir, uSunDir), -1.0, 1.0));
  float r = uSunDiskAngularRadius;
  float disk = smoothstep(r * 1.04, r * 0.96, theta);

  float coronaInner = exp(-theta / max(r * uCoronaSoftness, 1e-5));
  float coronaOuter = exp(-theta / max(r * (uCoronaSoftness * 1.6), 1e-5));

  vec3 radiance = disk * 16.0
    + uSunTint * coronaInner * 2.0
    + vec3(1.0, 0.98, 0.95) * coronaOuter * 0.6;

  float elFade = smoothstep(-0.12, 0.04, sunUp);
  vec3 sunT = sampleTransmittance(uObserverPos, uSunDir);
  return radiance * uSunIntensity * sunT * elFade * 0.01;
}

void main() {
  vec3 rayDir = normalize(vViewRay);
  vec3 sky = sampleSkyView(rayDir);
  vec2 planetHit = raySphereIntersect(uObserverPos, rayDir, uPlanetRadius);
  if (planetHit.x < 0.0) sky += sampleSun(rayDir);
  gl_FragColor = vec4(sky, 1.0);
}
`;class om{constructor(){this.uniforms={uInvProj:{value:new it},uCameraWorld:{value:new it},uObserverPos:{value:new L(0,ut.groundRadius+.4,0)},uSunDir:{value:new L(0,1,0)},uHorizonWarp:{value:!0},uSkyViewLUT:{value:null},uTransmittanceLUT:{value:null},uPlanetRadius:{value:ut.groundRadius},uAtmosphereRadius:{value:ut.atmosphereRadius},uSunIntensity:{value:22},uSunDiskAngularRadius:{value:ot.degToRad(.55)},uCoronaSoftness:{value:5.5},uSunTint:{value:new L(1,.95,.86)}},this.material=new St({uniforms:this.uniforms,vertexShader:sm,fragmentShader:am,depthTest:!1,depthWrite:!1}),this.mesh=new lt(new Ln(2,2),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.mesh.matrixAutoUpdate=!1,this.mesh.name="SkyBackdrop"}setLUTs(e,t){this.uniforms.uSkyViewLUT.value=e,this.uniforms.uTransmittanceLUT.value=t}setObserver(e){this.uniforms.uObserverPos.value.copy(e)}setSun({direction:e,intensity:t,diskRad:n,coronaSoftness:r,tint:s}){e!=null&&this.uniforms.uSunDir.value.copy(e),t!=null&&(this.uniforms.uSunIntensity.value=t),n!=null&&(this.uniforms.uSunDiskAngularRadius.value=n),r!=null&&(this.uniforms.uCoronaSoftness.value=r),s!=null&&this.uniforms.uSunTint.value.copy(s)}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const n=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=n+t}}updateCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uCameraWorld.value.copy(e.matrixWorld)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}}const un={accelSeconds:1.5,maxFrameSeconds:1/30,minMoveSpeed:55,maxMoveSpeed:260,minAltitudeSpeed:40,maxAltitudeSpeed:170,minYawSpeed:.9,maxYawSpeed:2.6};class lm{constructor(e,t){this.camera=e,this.dom=t,this._keys=new Map,this._cameraEuler=new Gt(0,0,0,"YXZ"),this._setupKeyboard(),this._setupPointer()}_ignore(e){const t=e.target;return t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.closest&&t.closest("#ui-root"))}_setupKeyboard(){window.addEventListener("keydown",e=>{if(this._ignore(e))return;const t=e.key.toLowerCase();["w","a","s","d","q","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&(e.preventDefault(),this._keys.has(t)||this._keys.set(t,performance.now()))}),window.addEventListener("keyup",e=>{this._keys.delete(e.key.toLowerCase())})}_setupPointer(){let e=!1,t=!1,n=0,r=0,s=0,a=0;this.dom.addEventListener("pointerdown",o=>{o.target.closest&&o.target.closest("#ui-root")||(e=!0,t=!1,n=o.clientX,r=o.clientY,s=o.clientX,a=o.clientY)}),window.addEventListener("pointerup",()=>{(e||t)&&(e=!1,this.dom.style.cursor="crosshair",t=!1)}),window.addEventListener("pointermove",o=>{if(!e&&!t)return;const l=ot.clamp((o.clientX-s)*.01,-.8,.8),c=ot.clamp((o.clientY-a)*.01,-.8,.8),u=Math.hypot(o.clientX-n,o.clientY-r);if(s=o.clientX,a=o.clientY,!t){if(u<4)return;t=!0,this.dom.style.cursor="none"}this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y-=l*.08,this._cameraEuler.x=Math.max(-1.25,Math.min(1.15,this._cameraEuler.x-c*.08)),this.camera.quaternion.setFromEuler(this._cameraEuler)}),this.dom.addEventListener("wheel",o=>{if(o.target.closest&&o.target.closest("#ui-root"))return;o.preventDefault();const l=ot.clamp(o.deltaY,-180,180),c=new L;this.camera.getWorldDirection(c),this.camera.position.addScaledVector(c,-l*.6)},{passive:!1})}update(e){if(!this._keys.size)return;const t=Math.min(e,un.maxFrameSeconds),n=performance.now();let r=0;for(const g of this._keys.values())r=Math.max(r,(n-g)/1e3);const s=ot.clamp(r/un.accelSeconds,0,1),a=s*s*(3-2*s),o=ot.lerp(un.minMoveSpeed,un.maxMoveSpeed,a)*t,l=ot.lerp(un.minAltitudeSpeed,un.maxAltitudeSpeed,a)*t,c=ot.lerp(un.minYawSpeed,un.maxYawSpeed,a)*t,u=new L;this.camera.getWorldDirection(u),u.y=0,u.lengthSq()<1e-4&&u.set(0,0,-1),u.normalize();const h=new L().crossVectors(u,this.camera.up).normalize(),d=new L;if(this._keys.has("w")&&d.add(u),this._keys.has("s")&&d.sub(u),this._keys.has("d")&&d.add(h),this._keys.has("a")&&d.sub(h),this._keys.has("arrowup")&&(d.y+=1),(this._keys.has("q")||this._keys.has("arrowdown"))&&(d.y-=1),d.lengthSq()>0){const g=new L(d.x,0,d.z);g.lengthSq()>0&&(g.normalize().multiplyScalar(o),g.clampLength(0,un.maxMoveSpeed*t));const v=Math.sign(d.y)*l;this.camera.position.add(new L(g.x,v,g.z))}let f=0;this._keys.has("arrowleft")&&(f+=c),this._keys.has("arrowright")&&(f-=c),f&&(this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y+=f,this.camera.quaternion.setFromEuler(this._cameraEuler))}}function fi(i){let e=i>>>0;return function(){e+=1831565813;let n=Math.imul(e^e>>>15,1|e);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function Gi(i,e,t){return i+(e-i)*t}function Fi(i,e,t=1){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2246822519);return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function wo(i){return i*i*(3-2*i)}function Hi(i,e,t=1){const n=Math.floor(i),r=Math.floor(e),s=i-n,a=e-r,o=wo(s),l=wo(a),c=Fi(n,r,t),u=Fi(n+1,r,t),h=Fi(n,r+1,t),d=Fi(n+1,r+1,t);return Gi(Gi(c,u,o),Gi(h,d,o),l)}function qt(i,e,{seed:t=1,octaves:n=5,lacunarity:r=2,gain:s=.5,warp:a=0}={}){let o=.5,l=1,c=0,u=0,h=i,d=e;for(let f=0;f<n;f++)a>0&&(h+=(Hi(h*.7,d*.7,t+31+f)-.5)*a,d+=(Hi(h*.7+9.2,d*.7,t+67+f)-.5)*a),c+=Hi(h*l,d*l,t+f*101)*o,u+=o,l*=r,o*=s;return c/Math.max(u,1e-4)}function Ao(i,e,t={}){const n=qt(i,e,t);return 1-Math.abs(n*2-1)}class cm{constructor({resolution:e,worldSize:t,vstep:n}){this.res=e,this.worldSize=t,this.cellSize=t/e,this.vstep=n,this.half=t/2;const r=e*e;this.heightVox=new Int16Array(r),this.material=new Uint8Array(r),this.season=new Uint8Array(r),this.land=new Uint8Array(r),this.channel=new Uint8Array(r)}idx(e,t){return t*this.res+e}inBounds(e,t){return e>=0&&t>=0&&e<this.res&&t<this.res}cellToWorld(e,t){return[(e+.5)*this.cellSize-this.half,(t+.5)*this.cellSize-this.half]}worldToCell(e,t){return[Math.floor((e+this.half)/this.cellSize),Math.floor((t+this.half)/this.cellSize)]}heightMetresAt(e,t){return this.inBounds(e,t)?this.heightVox[this.idx(e,t)]*this.vstep:-9999}surfaceHeightWorld(e,t){const[n,r]=this.worldToCell(e,t);return this.inBounds(n,r)?this.heightVox[this.idx(n,r)]*this.vstep:-9999}}function Le(i){const e=parseInt(i.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Rt(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}const Ke={SAND:0,SEAFLOOR:1,GRASS:2,GRASSY_SNOW:3,SNOW:4,ROCK:5,DIRT:6,AUTUMN:7,FAIRWAY:8},Ro={[Ke.SAND]:[Le("#cf9a4f"),Le("#f0d089")],[Ke.SEAFLOOR]:[Le("#0a4e6e"),Le("#2fd9c8")],[Ke.GRASS]:[Le("#2f8a2e"),Le("#7ad83e")],[Ke.GRASSY_SNOW]:[Le("#5f8a55"),Le("#aecaa0")],[Ke.SNOW]:[Le("#9fc3cc"),Le("#dceef0")],[Ke.ROCK]:[Le("#5a554b"),Le("#8a8276")],[Ke.DIRT]:[Le("#6a4a2c"),Le("#a8814a")],[Ke.AUTUMN]:[Le("#b5601f"),Le("#e8a52e")],[Ke.FAIRWAY]:[Le("#5fb22a"),Le("#a6ef4e")]},um=Le("#05293c"),Co=Le("#137a8c"),hm=Le("#2fd9c8"),dm=Le("#3debe0");function Po(i,e){const t=Ro[i]||Ro[Ke.ROCK];return Rt(t[0],t[1],Math.max(0,Math.min(1,e)))}function fm(i){const e=Math.max(0,Math.min(1,i));return e<.5?Rt(hm,Co,e*2):Rt(Co,um,(e-.5)*2)}const Do={0:[Le("#2f8a2e"),Le("#7ad83e")],1:[Le("#7a5520"),Le("#d99a33")],2:[Le("#1d5a2c"),Le("#3f8f3c")],3:[Le("#6f8a74"),Le("#cfe3da")]};function pm(i,e){const t=Do[i]||Do[0];return Rt(t[0],t[1],Math.max(0,Math.min(1,e)))}const mt={palmTrunkLow:Le("#7a5a30"),palmTrunkHigh:Le("#b08a4a"),palmFrondLow:Le("#2f7d33"),palmFrondHigh:Le("#6fce4a"),coniferLow:Le("#1f4d3a"),coniferHigh:Le("#2e6b4f"),coniferTrunk:Le("#5a4632"),broadleafTrunkLow:Le("#5a4127"),broadleafTrunkHigh:Le("#8a6a42"),summerLeafLow:Le("#3c8f33"),summerLeafHigh:Le("#7ad84f"),autumnLeaf:[Le("#e6b800"),Le("#d98a2b"),Le("#c6492f")],winterBark:Le("#6b5240"),winterSnow:Le("#eef6f8"),winterCyan:Le("#bfe9f0")},mm=16747062,Rn={SUMMER:0,AUTUMN:1,CONIFER:2,WINTER:3};function gm(i,e){const t=i.sweepDeg*Math.PI/180,n=Math.cos(t)*7.3,r=Math.sin(t)*7.3,s=Math.min(.085,i.borderWarp*.14);return function(o,l,c){const u=qt(o*.0017+n,l*.0017+r,{seed:e+71,octaves:3,warp:.5})-.5,h=Math.max(0,Math.min(1,c+u*s*2));let d;return h<i.summerEnd?d=Rn.SUMMER:h<i.autumnEnd?d=Rn.AUTUMN:h<i.coniferEnd?d=Rn.CONIFER:d=Rn.WINTER,{s:h,season:d}}}function _m(i){const{seed:e,radius:t,shape:n,resolution:r,lowland:s,massif:a,terraceStep:o,warp:l,ridge:c,beachWidth:u,valleyDepth:h,valleyWidth:d,seaLevel:f,floorDepth:g,seasons:v}=i,m=s+a,p=t*2.3,A=p/r,T=o>0?o:Math.max(1.5,A*.85),y=new cm({resolution:r,worldSize:p,vstep:T}),B=gm(v,e),b=.0015,w=fi(e*2654435761>>>0),P=n>=1&&n<=4?n:1+Math.floor(fi(e*40503>>>0)()*4),S=w()*Math.PI*2,x=Math.cos(S),R=Math.sin(S),O=1.55+w()*.55,F=3+Math.floor(w()*3),H=w()*Math.PI*2,q=.17+w()*.1,z=w()*Math.PI*2,j=t*(.52+w()*.18),V=t*(.5+w()*.22),ne=Math.cos(z)*j,ie=Math.sin(z)*j;function Se(Q,ve){const se=Q*x-ve*R,xe=Q*R+ve*x,C=Math.hypot(P===3?se/O:se,xe),Ve=qt(Q*.001+4.2,ve*.001-7.8,{seed:e+5,octaves:4,warp:.55}),be=qt(Q*.0026-2.1,ve*.0026+5.4,{seed:e+23,octaves:3,warp:.4})-.5;let Re=t*(.74+.46*(Ve-.5)+.16*be);if(P===4){const Ne=Math.atan2(xe,se);Re*=1+q*Math.cos(F*Ne+H+(Ve-.5)*1.5)}let pe=1-ui(.45,1.04,C/Math.max(1,Re));if(P===2){const Ne=Math.hypot(Q-ne,ve-ie);pe*=ui(V*.45,V*1,Ne)}return pe}function Ue(Q,ve){const se=qt(Q*.0016+31.7,ve*.0016-12.3,{seed:e+131,octaves:3,warp:.45});return Math.max(0,Math.min(1,(se-.34)/.5))}const Xe=(()=>{const Q=fi(e*911>>>0),ve=[],se=Q()*Math.PI*2,xe=t*(.08+Q()*.24);ve.push({cx:Math.cos(se)*xe,cz:Math.sin(se)*xe,h:a*(.8+Q()*.16),sig:t*(.13+Q()*.05),rot:Q()*Math.PI*2,sk:Q(),spur:3+Math.floor(Q()*4)});const C=(Q()<.55?1:0)+(Q()<.25?1:0);for(let Ve=0;Ve<C;Ve++){const be=se+(Q()-.5)*2.6,Re=t*(.22+Q()*.3);ve.push({cx:Math.cos(be)*Re,cz:Math.sin(be)*Re,h:a*(.2+Q()*.2),sig:t*(.09+Q()*.05),rot:Q()*Math.PI*2,sk:Q(),spur:3+Math.floor(Q()*3)})}return ve})();function $(Q,ve){let se=0;for(const xe of Xe){const C=Q-xe.cx,Ve=ve-xe.cz,be=Math.exp(-(C*C+Ve*Ve)/(2*xe.sig*xe.sig));if(be<.0025)continue;const Re=Math.pow(be,1.22),pe=Math.cos(xe.rot),Ne=Math.sin(xe.rot),me=C*pe-Ve*Ne,E=C*Ne+Ve*pe,_=Ao(me*.011+xe.sk*7,E*.011-xe.sk*4,{seed:e+17+((xe.cx|0)&255),octaves:5,warp:.55}),N=Math.atan2(E,me),Y=.5+.5*Math.cos(N*xe.spur+_*3);se+=xe.h*Re*(.5+.5*_)*(.85+.3*Y)}return se}const J=h>0,ue=[];if(J){const Q=fi(e*2246822519>>>0^2654435761),ve=Xe[0]||{cx:0,cz:0},se=ve.cx*.6+(Q()-.5)*t*.12,xe=ve.cz*.6+(Q()-.5)*t*.12,C=Math.atan2(xe,se)+(Q()-.5)*1.6,Ve=Math.cos(C),be=Math.sin(C),Re=-be,pe=Ve,Ne=t*1.2,me=48,E=[];for(let N=0;N<=me;N++){const Y=N/me,K=Y*Ne,W=(qt(Y*2.6+11.3,7.7,{seed:e+201,octaves:3})-.5)*t*.55*(.2+Y);E.push({x:se+Ve*K+Re*W,z:xe+be*K+pe*W,t:Y})}ue.push(E);const _=E[Math.floor(me*.8)];for(const N of[-1,1]){const Y=C+N*(.34+Q()*.26),K=Math.cos(Y),W=Math.sin(Y),Me=t*.55,ae=[];for(let ce=0;ce<=16;ce++){const We=ce/16;ae.push({x:_.x+K*We*Me,z:_.z+W*We*Me,t:.8+.2*We})}ue.push(ae)}}function re(Q,ve){let se=0,xe=0;for(const C of ue)for(let Ve=0;Ve<C.length;Ve++){const be=C[Ve],Re=Q-be.x,pe=ve-be.z,Ne=d*(.5+1.7*be.t)+(be.t>.78?d*2.4*(be.t-.78)/.22:0),me=Math.exp(-(Re*Re+pe*pe)/(Ne*Ne));me>se&&(se=me,xe=be.t)}return{field:se,t:xe}}function Ae(Q,ve){if(!J)return 0;const{field:se,t:xe}=re(Q,ve);if(se<.02)return 0;const C=.32+.68*ui(0,.42,xe);return h*C*se}function Ce(Q,ve){const se=Se(Q,ve);if(se>.5){const Ve=(se-.5)*2,be=Math.min(1,Math.hypot(Q,ve)/t),Re=Ue(Q,ve),pe=qt(Q*b,ve*b,{seed:e,octaves:5,warp:l}),Ne=Ao(Q*b*1.7+9.7,ve*b*1.7-3.3,{seed:e+17,octaves:5,warp:l*.6}),me=(1-Math.pow(be,1.5))*s*.5,E=pe*s*.85+Math.pow(Ne,1.5)*s*1.1*(.35+c)+$(Q,ve)+me,_=Gi(.03,.46,ui(.3,.74,Re)),N=Math.min(1,Ve/_),Y=ui(0,1,N)*(u*Gi(.35,.9,Re)),K=ui(_,Math.min(.98,_+.5),Ve);return f+.5+Y+K*E-Ae(Q,ve)}const xe=(.5-se)*2,C=(qt(Q*.01,ve*.01,{seed:e+90,octaves:3})-.5)*4;return f-1-Math.pow(xe,.85)*g+C}for(let Q=0;Q<r;Q++)for(let ve=0;ve<r;ve++){const[se,xe]=y.cellToWorld(ve,Q),C=Ce(se,xe),Ve=y.idx(ve,Q),be=Ce(se+A,xe),Re=Ce(se,xe+A),pe=Math.hypot(be-C,Re-C)/A,Ne=(C-f)/Math.max(1,m),{season:me}=B(se,xe,Ne);y.season[Ve]=me;const E=C>f-.35;y.land[Ve]=E?1:0,y.channel[Ve]=J&&re(se,xe).field>.3?1:0;const _=Ue(se,xe),N=(qt(se*.02+5.1,xe*.02-2.7,{seed:e+88,octaves:3,warp:.4})-.5)*.13,Y=(v.coniferEnd??.84)*.78,K=Ne+N;let W;E?K>Y+.05?W=Ke.SNOW:pe>.92?W=Ke.ROCK:C<=f+u*1.25&&pe<.34?W=Ke.SAND:C<=f+u*.9&&_<.34?W=Ke.ROCK:K>Y-.06&&pe<.8?W=Ke.GRASSY_SNOW:Ne>.66?W=Ke.ROCK:Ne>.5&&pe>.62?W=Ke.DIRT:W=Ke.GRASS:W=Ke.SEAFLOOR,(W===Ke.SNOW||W===Ke.GRASSY_SNOW)&&(v.craggy??0)>0&&Hi(se*.085+2.3,xe*.085-4.1,e+211)<v.craggy*.6&&(W=Ke.ROCK);const Me=v.fairway??0;if(Me>0&&W===Ke.GRASS&&pe<.42){const ce=f+u*1.25+(v.fairwayBand??24);if(C<=ce&&qt(se*.011+7.7,xe*.011-3.3,{seed:e+223,octaves:3,warp:.45})<.3+Me*.62){W=Ke.FAIRWAY;const ee=Math.max(3,v.bunkerSize??11);Hi(se/ee+41,xe/ee-17,e+233)<(v.bunkerDensity??0)*.45&&(W=Ke.SAND)}}y.material[Ve]=W;const ae=(qt(se*.05+3.1,xe*.05-6.7,{seed:e+53,octaves:3,warp:.5})-.5)*T*1.5;y.heightVox[Ve]=Math.round((C+ae)/T)}return y.meta={seed:e,radius:t,worldSize:p,cellSize:A,vstep:T,seaLevel:f,floorDepth:g,maxHeight:m},y}function ui(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}function vm(i,e){const{res:t,cellSize:n,vstep:r,half:s}=i,{seaLevel:a,maxHeight:o,floorDepth:l}=i.meta,c=a-l-6,u=[],h=[],d=[],f=(b,w)=>i.heightVox[i.idx(b,w)]*r;function g(b,w){const P=i.idx(b,w),S=i.material[P],x=i.heightVox[P]*r,R=(Fi(b,w,e)-.5)*.09;let O;if(S===Ke.SEAFLOOR){const q=(a-x)/Math.max(1,l);O=fm(q+R*.4),i.channel&&i.channel[P]&&(O=Rt(O,dm,.55+R))}else if(S===Ke.SAND){const q=Math.max(0,Math.min(1,(x-a)/6));O=Po(Ke.SAND,.25+q*.6+R)}else if(S===Ke.GRASS){const q=Math.max(0,Math.min(1,(x-a)/Math.max(1,o)));O=pm(i.season[P],.34+q*.5+R)}else{const q=Math.max(0,Math.min(1,(x-a)/Math.max(1,o)));O=Po(S,.32+q*.55+R)}let F=0,H=0;if(b>0&&(F+=i.heightVox[P-1],H++),b<t-1&&(F+=i.heightVox[P+1],H++),w>0&&(F+=i.heightVox[P-t],H++),w<t-1&&(F+=i.heightVox[P+t],H++),H){const q=i.heightVox[P]-F/H,z=Math.max(.66,Math.min(1.14,1+q*.11));O=[O[0]*z,O[1]*z,O[2]*z]}return O}function v(b,w,P,S,x,R,O,F,H,q,z,j,V,ne,ie){const Se=S-b,Ue=x-w,Xe=R-P,$=q-b,J=z-w,ue=j-P;let re=-(Ue*ue-Xe*J),Ae=-(Xe*$-Se*ue),Ce=-(Se*J-Ue*$);const Q=Math.hypot(re,Ae,Ce)||1;re/=Q,Ae/=Q,Ce/=Q;const ve=[b,w,P,O,F,H,S,x,R,b,w,P,q,z,j,O,F,H];for(let se=0;se<6;se++)u.push(ve[se*3],ve[se*3+1],ve[se*3+2]),h.push(re,Ae,Ce),d.push(V,ne,ie)}for(let b=0;b<t;b++){let w=0;for(;w<t;){const P=i.idx(w,b),S=i.material[P],x=i.heightVox[P];let R=w;for(;R+1<t;){const ie=i.idx(R+1,b);if(i.material[ie]!==S||i.heightVox[ie]!==x)break;R++}const O=x*r,F=w*n-s,H=(R+1)*n-s,q=b*n-s,z=(b+1)*n-s,[j,V,ne]=g(w,b);v(F,O,q,H,O,q,H,O,z,F,O,z,j,V,ne),w=R+1}}const m=.8;for(let b=0;b<t;b++)for(let w=0;w<t;w++){const P=f(w,b),[S,x,R]=g(w,b),O=S*m,F=x*m,H=R*m,q=w*n-s,z=(w+1)*n-s,j=b*n-s,V=(b+1)*n-s,ne=[[w-1,b,q,j,q,V],[w+1,b,z,V,z,j],[w,b-1,z,j,q,j],[w,b+1,q,V,z,V]];for(const[ie,Se,Ue,Xe,$,J]of ne){let ue;if(i.inBounds(ie,Se))ue=f(ie,Se);else{if(P<=a+.5)continue;ue=c}P-ue<=.001||v(Ue,P,Xe,$,P,J,$,ue,J,Ue,ue,Xe,O,F,H)}}const p=new Kt;p.setAttribute("position",new yt(u,3)),p.setAttribute("normal",new yt(h,3)),p.setAttribute("color",new yt(d,3)),p.computeBoundingSphere();const A=new da({vertexColors:!0,flatShading:!0,side:_n,roughness:.95,metalness:0,transparent:!0}),T=i.meta.radius*1.05,y=Math.min(i.meta.radius*1.1,i.worldSize*.5*.98);A.onBeforeCompile=b=>{b.uniforms.uRFade0={value:T},b.uniforms.uRFade1={value:y},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorldXZ = (modelMatrix * vec4(transformed,1.0)).xz;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;
uniform float uRFade0;
uniform float uRFade1;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float _r = length(vWorldXZ);
  gl_FragColor.a *= 1.0 - smoothstep(uRFade0, uRFade1, _r);`)};const B=new lt(p,A);return B.castShadow=!0,B.receiveShadow=!0,B.name="IslandVoxels",B.userData.quadVerts=u.length/3,B}const xm=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Mm=`
uniform float uTime;
uniform vec3 uCausticColor;
uniform float uCausticIntensity;
uniform float uCausticScale;
uniform float uFadeRadius;
varying vec3 vWorldPos;

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float voronoiDist(vec2 p, float timeOffset) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float md = 8.0;
  float md2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = hash22(n + g);
      o = 0.5 + 0.5 * sin(uTime * 0.6 + timeOffset + 6.2831 * o);
      vec2 r = g + o - f;
      float d = dot(r, r);
      if (d < md) { md2 = md; md = d; }
      else if (d < md2) { md2 = d; }
    }
  }
  return md2 - md;
}

float caustic(vec2 uv) {
  float c1 = voronoiDist(uv * uCausticScale, 0.0);
  float c2 = voronoiDist(uv * uCausticScale * 1.4 + vec2(3.7, 1.2), 2.5);
  float c3 = voronoiDist(uv * uCausticScale * 0.7 + vec2(-1.5, 4.1), 5.0);
  float combined = c1 * c2 * 4.0 + c3 * 0.3;
  return pow(combined, 0.8);
}

void main() {
  // Low spatial frequency — at km scale the aquarium's 0.25 reads as white
  // static; 0.012 gives broad dancing caustic bands.
  vec2 uv = vWorldPos.xz * 0.012;
  float c = clamp(caustic(uv), 0.0, 1.4);
  // Radial fade to zero so the caustic plane has NO visible square edge —
  // it just lives in the shallows around the island and dissolves outward.
  float rad = length(vWorldPos.xz);
  float fade = 1.0 - smoothstep(uFadeRadius * 0.55, uFadeRadius, rad);
  vec3 color = uCausticColor * c * uCausticIntensity;
  gl_FragColor = vec4(color, c * 0.22 * fade);
}
`;class Sm{constructor(e){this.group=new qn,this.group.name="Sea";const t=Math.max(e.worldSize*12,26e3)*.5,n=e.seaLevel-(e.floorDepth||60)-10;this._horizon=new De("#bcd4d6"),this.floor=new lt(new zi(t,96),new aa({color:new De("#0b4f68"),fog:!0})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=n,this.floor.renderOrder=1,this.group.add(this.floor),this.surfaceMat=new da({color:new De("#1f93a4"),transparent:!0,opacity:.5,roughness:.18,metalness:0,side:Jt});const r=e.radius*1.4,s=t*.96;this._sunDir=new L(0,1,0),this._sunCol=new De("#fff3df"),this.surfaceMat.onBeforeCompile=o=>{o.uniforms.uHorizon={value:this._horizon},o.uniforms.uF0={value:r},o.uniforms.uF1={value:s},o.uniforms.uSunDir={value:this._sunDir},o.uniforms.uSunCol={value:this._sunCol},o.uniforms.uGlint={value:.7},o.uniforms.uGlintSpread={value:1.1},o.uniforms.uCamPos={value:new L},this._surfUniforms=o.uniforms,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec4 _wp = modelMatrix * vec4(transformed,1.0);
  vWXZ = _wp.xz;
  vWPos = _wp.xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;
varying vec3 vWPos;
uniform vec3 uHorizon;
uniform float uF0;
uniform float uF1;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform float uGlint;
uniform float uGlintSpread;
uniform vec3 uCamPos;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  vec3 _V = normalize(uCamPos - vWPos);
  float _s = max(dot(reflect(-uSunDir, vec3(0.0,1.0,0.0)), _V), 0.0);
  float _sp = clamp(uGlintSpread * 0.25, 0.0, 1.0);
  float _core = pow(_s, mix(900.0, 70.0, _sp));
  float _strk = pow(_s, mix(140.0, 14.0, _sp)) * 0.35;
  float _g = (_core + _strk) * uGlint * smoothstep(-0.02, 0.14, uSunDir.y);
  gl_FragColor.rgb += uSunCol * _g;
  float _f = smoothstep(uF0, uF1, length(vWXZ));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHorizon, _f);
  gl_FragColor.a = mix(gl_FragColor.a, 0.0, _f * _f);`)},this.surface=new lt(new zi(t,96),this.surfaceMat),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.group.add(this.surface),this.causticMat=new St({vertexShader:xm,fragmentShader:Mm,uniforms:{uTime:{value:0},uCausticColor:{value:new De(.18,.5,.55)},uCausticIntensity:{value:e.causticIntensity},uCausticScale:{value:e.causticScale},uFadeRadius:{value:e.radius*1.15}},transparent:!0,blending:Tr,depthWrite:!1}),this.caustic=new lt(new zi(e.radius*1.4,80),this.causticMat),this.caustic.rotation.x=-Math.PI/2,this.caustic.renderOrder=3,this.group.add(this.caustic),this.lights=[];const a=e.radius*.96;for(let o=0;o<18;o++){const l=o/18*Math.PI*2,c=new Zp(mm,0,e.radius*.5,2);c.position.set(Math.cos(l)*a,e.seaLevel+2,Math.sin(l)*a),c.userData.phase=o*1.731,this.lights.push(c),this.group.add(c)}this.setLevel(e.seaLevel),this.setShoreGlow(e.shoreGlow)}setLevel(e){this.surface.position.y=e,this.caustic.position.y=e-.5;for(const t of this.lights)t.position.y=e+2}setCaustic(e,t){this.causticMat.uniforms.uCausticScale.value=e,this.causticMat.uniforms.uCausticIntensity.value=t}setShoreGlow(e){this._glowBase=ot.clamp(e,0,1.5)}setHorizon(e){this._horizon.copy(e),this.floor&&this.floor.material.color.copy(e).lerp(new De("#0b4f68"),.6)}setSun(e,t){this._sunDir.copy(e).normalize(),this._sunCol.copy(t)}setGlint(e,t){this._surfUniforms&&(this._surfUniforms.uGlint.value=Math.max(0,e),this._surfUniforms.uGlintSpread.value=Math.max(.2,t))}update(e,t){t&&this._surfUniforms&&this._surfUniforms.uCamPos.value.copy(t),this.causticMat.uniforms.uTime.value=e;for(const n of this.lights){const r=.86+Math.sin(e*.92+n.userData.phase)*.1+Math.sin(e*1.7+n.userData.phase*.37)*.04;n.intensity=Math.max(0,this._glowBase*1.7*r)}}}function ym(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Kt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Lo(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][d]);const g=Lo(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Lo(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new zt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const v=u.getComponent(d,g);o.setComponent(d+h,g,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Zs=new bi(1,1,1),El=new Dr(.5,.5,1,6),Tl=new ha(.5,1,7);for(const i of[Zs,El,Tl])i.deleteAttribute("uv");const Uo=new it,Io=new Ti,No=new Gt,Fo=new L,Oo=new L;class pa{constructor(){this.parts=[]}_add(e,t,n,r,s,a,o,l,c,u,h){const d=e.clone();No.set(l,c,u),Io.setFromEuler(No),Fo.set(t,n,r),Oo.set(s,a,o),Uo.compose(Fo,Io,Oo),d.applyMatrix4(Uo);const f=d.attributes.position.count,g=new Float32Array(f*3);for(let v=0;v<f;v++)g[v*3]=h[0],g[v*3+1]=h[1],g[v*3+2]=h[2];d.setAttribute("color",new zt(g,3)),this.parts.push(d)}box(e,t,n,r,s,a,o,l){this._add(Zs,e,t,n,r,s,a,0,o,0,l)}boxR(e,t,n,r,s,a,o,l,c,u){this._add(Zs,e,t,n,r,s,a,o,l,c,u)}cyl(e,t,n,r,s,a,o){this._add(El,e,t,n,s*2,a,r*2,0,0,0,o)}cone(e,t,n,r,s,a){this._add(Tl,e,t,n,r*2,s,r*2,0,0,0,a)}build(e){const t=ym(this.parts,!1);for(const s of this.parts)s.dispose();t.computeVertexNormals();const n=new da({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0}),r=new lt(t,n);return r.name=e,r.castShadow=!0,r}}function Em(i){const e=new pa,t=11,n=11+i()*5,r=(i()-.5)*3,s=(i()-.5)*3;let a=0,o=0;for(let u=0;u<t;u++){const h=u/(t-1),d=h*n,f=r*h*h,g=s*h*h,v=ot.lerp(.62,.34,h),m=Rt(mt.palmTrunkLow,mt.palmTrunkHigh,h);e.cyl(f,d+n/t*.5,g,v*.9,v,n/t*1.04,m);const p=Rt(m,[m[0]*.7,m[1]*.7,m[2]*.55],.6);e.cyl(f,d+n/t*.5,g,v*1.22,v*1.22,n/t*.34,p),a=f,o=g}const l=Math.PI*(3-Math.sqrt(5)),c=10+(i()*4|0);for(let u=0;u<c;u++){const h=u*l,d=Math.cos(h),f=Math.sin(h),g=5+i()*2.2,v=2.6+i()*1.4,m=7;for(let p=0;p<m;p++){const A=p/m,T=(p+1)/m,y=ie=>1.05*Math.sin(ie*Math.PI*.62),B=a+d*g*A,b=o+f*g*A,w=a+d*g*T,P=o+f*g*T,S=n+y(A)-v*A*A,x=n+y(T)-v*T*T,R=(B+w)/2,O=(S+x)/2,F=(b+P)/2,H=Math.hypot(w-B,x-S,P-b),q=Rt(mt.palmFrondLow,mt.palmFrondHigh,A),z=Math.atan2(f,d),j=Math.atan2(x-S,Math.hypot(w-B,P-b));e.boxR(R,O,F,.16,.16,H,0,-z+Math.PI/2,j,q);const ne=.5+Math.pow(Math.sin(A*Math.PI),.7)*2.3;for(const ie of[-1,1])e.boxR(R+Math.cos(z+ie*1.2)*ne*.5,O+.05,F+Math.sin(z+ie*1.2)*ne*.5,ne,.07,.34,0,z+ie*1.2,ie*.5,Rt(q,mt.palmFrondHigh,.35))}}return e.build("Palm")}function Tm(i){const e=new pa,t=13+i()*6;e.cyl(0,t*.32,0,.34,.5,t*.64,mt.coniferTrunk);const n=6;for(let r=0;r<n;r++){const s=r/(n-1),a=t*.28+s*t*.7,o=ot.lerp(3.4,.5,s),l=t*.22;e.cone(0,a+l*.5,0,o,l,Rt(mt.coniferLow,mt.coniferHigh,.2+s*.7))}return e.build("Conifer")}function us(i,e){const t=new pa,n=8+i()*4;let r=0,s=0;for(let c=0;c<3;c++){const u=c/3,h=u*n*.62;r+=(i()-.5)*.5,s+=(i()-.5)*.5,t.cyl(r,h+n*.11,s,.34,.5-u*.12,n*.22,Rt(mt.broadleafTrunkLow,mt.broadleafTrunkHigh,u))}const a=n*.62+1.2,o=4+(i()*3|0);for(let c=0;c<o;c++){const u=c/o*Math.PI*2+i(),h=1.6+i()*1.8;t.boxR(r+Math.cos(u)*h*.5,a-.4+i()*.6,s+Math.sin(u)*h*.5,.22,.22,h,0,-u,.4+i()*.3,e==="winter"?mt.winterBark:mt.broadleafTrunkLow)}if(e==="winter"){for(let c=0;c<10;c++){const u=i()*Math.PI*2,h=i()*2.4,d=r+Math.cos(u)*h,f=s+Math.sin(u)*h,g=a+(i()-.2)*2.2;t.boxR(d,g,f,.12,.12,1+i(),0,-u,.6,mt.winterBark),i()>.45&&t.box(d,g+.5,f,.5,.28,.5,0,Rt(mt.winterSnow,mt.winterCyan,.25))}return t.build("BroadleafWinter")}const l=e==="autumn"?7:13;for(let c=0;c<l;c++){const u=i()*Math.PI*2,h=i()*2.6,d=r+Math.cos(u)*h,f=s+Math.sin(u)*h,g=a+(i()-.3)*2.6,v=1.5+i()*1.8;let m;e==="autumn"?(m=mt.autumnLeaf[i()*3|0],m=Rt(m,[m[0]*.8,m[1]*.8,m[2]*.7],i()*.4)):m=Rt(mt.summerLeafLow,mt.summerLeafHigh,i()),t.box(d,g,f,v,v*.85,v,i()*.6,m)}return t.build(e==="autumn"?"BroadleafAutumn":"BroadleafSummer")}function bm(i,e){const t=fi(e>>>0);switch(i){case"palm":return Em(t);case"conifer":return Tm(t);case"autumn":return us(t,"autumn");case"winter":return us(t,"winter");case"summer":default:return us(t,"summer")}}const gr=new Ln(2,2),_r=new qi(-1,1,1,-1,0,1),wm=`
  vec3 godMarch(vec2 vUv) {
    if (uGod < 0.001 || uSunVis <= 0.001) return vec3(0.0);
    vec2 rayUV = clamp(uSunUV, vec2(0.0), vec2(1.0));
    vec2 delta = (rayUV - vUv) / float(uGodN) * uGodDensity;
    vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
    for (int i = 0; i < 48; i++) {
      if (i >= uGodN) break;
      uv += delta;
      float inUv = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
      vec3 s = texture2D(tScene, uv).rgb;
      float lum = max(max(s.r, s.g), s.b);
      float rawSrc = max(0.0, lum - uGodThr) * inUv;
      float sky = smoothstep(0.999, 1.0, texture2D(tDepth, uv).x);
      float nearSun = exp(-dot(uv - rayUV, uv - rayUV) * 5.5);
      float cleanSrc = sky * nearSun * smoothstep(max(0.0, uGodThr - 0.28), 1.0, lum) * inUv;
      float gm = mix(1.0, smoothstep(rayUV.y - 0.30, rayUV.y + 0.04, uv.y), uGodHorizon);
      acc += mix(s * rawSrc, vec3(cleanSrc), uGodSource) * gm * decay * uGodW;
      decay *= uGodDecay;
    }
    acc /= float(uGodN);
    float radial = smoothstep(uGodRadius, 0.0, distance(vUv, rayUV));
    vec3 tint = mix(uHazeColor, uSunCol, uGodTint);
    float a = (acc.r + acc.g + acc.b) * 0.3333;
    return tint * a * uGodExp * uGod * radial * uSunVis;
  }`,Am=()=>({tScene:{value:null},tDepth:{value:null},uSunUV:{value:new ke(.5,.7)},uSunVis:{value:0},uHazeColor:{value:new De("#bcd4d6")},uSunCol:{value:new De("#ffd9a0")},uGod:{value:0},uGodN:{value:16},uGodDensity:{value:.6},uGodDecay:{value:.93},uGodW:{value:.6},uGodExp:{value:.9},uGodThr:{value:.62},uGodHorizon:{value:.5},uGodRadius:{value:1.1},uGodTint:{value:.5},uGodSource:{value:0}});class Rm{constructor(e){this.renderer=e;const t=e.getPixelRatio(),n=Math.max(2,window.innerWidth*t|0),r=Math.max(2,window.innerHeight*t|0);this.sceneRT=new Bt(n,r,{depthBuffer:!0,stencilBuffer:!1,type:tn,magFilter:ht,minFilter:ht}),this.sceneRT.depthTexture=new ca(n,r),this.sceneRT.depthTexture.format=$n,this.sceneRT.depthTexture.type=Dn,this.sceneRT.texture.colorSpace=mn,this.bloomRT=new Bt(n/4|0,r/4|0,{depthBuffer:!1,stencilBuffer:!1,type:tn,magFilter:ht,minFilter:ht}),this.bloomRT.texture.colorSpace=mn,this._godScale=.25,this.godRT=new Bt(Math.max(1,n*this._godScale|0),Math.max(1,r*this._godScale|0),{depthBuffer:!1,stencilBuffer:!1,type:tn,magFilter:ht,minFilter:ht}),this.godRT.texture.colorSpace=mn,this.brightMat=new St({uniforms:{tScene:{value:null},uTexel:{value:new ke},uThresh:{value:.72}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv; uniform sampler2D tScene; uniform vec2 uTexel; uniform float uThresh;
        vec3 bp(vec2 o){ vec3 c=texture2D(tScene,vUv+o).rgb; float l=max(max(c.r,c.g),c.b);
          return c*smoothstep(uThresh,1.0,l); }
        void main(){
          vec3 s = bp(vec2(0.0));
          s += bp(vec2( uTexel.x,0.0))+bp(vec2(-uTexel.x,0.0));
          s += bp(vec2(0.0, uTexel.y))+bp(vec2(0.0,-uTexel.y));
          s += bp(uTexel)+bp(-uTexel)+bp(vec2(uTexel.x,-uTexel.y))+bp(vec2(-uTexel.x,uTexel.y));
          gl_FragColor = vec4(s/9.0, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.godMat=new St({uniforms:Am(),vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tDepth;
        uniform vec2 uSunUV; uniform float uSunVis;
        uniform vec3 uHazeColor, uSunCol;
        uniform float uGod, uGodDensity, uGodDecay, uGodW, uGodExp, uGodThr, uGodHorizon, uGodRadius, uGodTint, uGodSource;
        uniform int uGodN;
        ${wm}
        void main(){ gl_FragColor = vec4(godMarch(vUv), 1.0); }`,depthTest:!1,depthWrite:!1}),this.overlayMat=new St({uniforms:{tGod:{value:null},uGodSharp:{value:0},uGodTexel:{value:new ke}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod;
        uniform float uGodSharp;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          gl_FragColor = vec4(texture2D(tGod, guv).rgb, 1.0);
        }`,blending:Tr,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.compMat=new St({uniforms:{tScene:{value:null},tBloom:{value:null},tGod:{value:null},uBloom:{value:0},uHaze:{value:0},uHazeColor:{value:new De("#bcd4d6")},uSunCol:{value:new De("#ffd9a0")},uSunUV:{value:new ke(.5,.7)},uSunVis:{value:0},uGod:{value:0},uGodCompare:{value:0},uGodSharp:{value:0},uGodTexel:{value:new ke}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom, tGod;
        uniform float uBloom, uHaze, uSunVis, uGod, uGodCompare, uGodSharp;
        uniform vec3 uHazeColor, uSunCol; uniform vec2 uSunUV, uGodTexel;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays — UPSAMPLE the low-res march. uGodSharp snaps the
          // sample to the godRT texel grid so the raw downsampled blocks
          // are visible (a deliberate tuning aid, not a defect).
          if (uGod > 0.001 && uSunVis > 0.001 && (uGodCompare < 0.5 || vUv.x >= 0.5)) {
            vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
            vec2 guv = mix(vUv, g, uGodSharp);
            col += texture2D(tGod, guv).rgb;
          }

          // Aerial haze — sky-coloured veil, thicker toward the horizon and a
          // SOFT broad forward-scatter near the sun (no hard ring). Screen-
          // space approx (no depth pass — the expensive path we skip on
          // mobile); independent of the Render-panel Horizon-Haze safety net.
          if (uHaze > 0.001) {
            float horiz = smoothstep(0.62, 0.18, vUv.y);
            float d = distance(vUv, uSunUV);
            float sunGlow = exp(-d * d * 2.2) * 0.30 * uSunVis;
            col = mix(col, uHazeColor, clamp(uHaze * (0.35 * horiz + sunGlow), 0.0, 0.9));
          }

          if (uBloom > 0.001) col += texture2D(tBloom, vUv).rgb * uBloom;

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,depthTest:!1,depthWrite:!1}),this._brightQuad=new lt(gr,this.brightMat),this._godQuad=new lt(gr,this.godMat),this._overlayQuad=new lt(gr,this.overlayMat),this._compQuad=new lt(gr,this.compMat),this._brightScene=new Yn().add(this._brightQuad),this._godScene=new Yn().add(this._godQuad),this._overlayScene=new Yn().add(this._overlayQuad),this._compScene=new Yn().add(this._compQuad)}setSize(){const e=this.renderer.getPixelRatio(),t=Math.max(2,window.innerWidth*e|0),n=Math.max(2,window.innerHeight*e|0);this.sceneRT.setSize(t,n),this.bloomRT.setSize(t/4|0,n/4|0),this._sizeGod(t,n)}_sizeGod(e,t){const n=Math.max(1,e*this._godScale|0),r=Math.max(1,t*this._godScale|0);(this.godRT.width!==n||this.godRT.height!==r)&&this.godRT.setSize(n,r),this.compMat.uniforms.uGodTexel.value.set(1/n,1/r)}render(e,t,n){const r=n.bloom||0,s=n.haze||0,a=n.god||{},o=n.sunFade??(n.sunVisible?1:0),l=(a.intensity||0)>0&&o>.001,c=this.renderer,u=l&&r<=0&&s<=0;if(r<=0&&s<=0&&!l){c.setRenderTarget(null),c.render(e,t);return}const h=c.getDrawingBufferSize(new ke);if((this.sceneRT.width!==h.x||this.sceneRT.height!==h.y)&&(this.sceneRT.setSize(h.x,h.y),this.bloomRT.setSize(Math.max(1,h.x/4|0),Math.max(1,h.y/4|0))),l){const f=Math.max(.04,Math.min(1,a.resScale??.25));f!==this._godScale&&(this._godScale=f),this._sizeGod(h.x,h.y)}if(c.setRenderTarget(this.sceneRT),c.render(e,t),r>0&&(this.brightMat.uniforms.tScene.value=this.sceneRT.texture,this.brightMat.uniforms.uTexel.value.set(1/this.bloomRT.width,1/this.bloomRT.height),c.setRenderTarget(this.bloomRT),c.render(this._brightScene,_r)),l){const f=this.godMat.uniforms;f.tScene.value=this.sceneRT.texture,f.tDepth.value=this.sceneRT.depthTexture,n.hazeColor&&f.uHazeColor.value.copy(n.hazeColor),n.sunCol&&f.uSunCol.value.copy(n.sunCol),n.sunUV&&f.uSunUV.value.set(n.sunUV.x,n.sunUV.y),f.uSunVis.value=o,f.uGod.value=a.intensity||0,f.uGodN.value=Math.max(6,Math.min(48,(a.samples||16)|0)),f.uGodDensity.value=a.density??.6,f.uGodDecay.value=a.decay??.93,f.uGodW.value=a.weight??.6,f.uGodExp.value=a.exposure??.9,f.uGodThr.value=a.threshold??.62,f.uGodHorizon.value=a.horizon??.5,f.uGodRadius.value=a.radius??1.1,f.uGodTint.value=a.tint??.5,f.uGodSource.value=Math.max(0,Math.min(1,a.source??0)),c.setRenderTarget(this.godRT),c.render(this._godScene,_r)}if(u){const f=c.autoClear;c.setRenderTarget(null),c.autoClear=!0,c.setScissorTest(!1),c.render(e,t);const g=this.overlayMat.uniforms;if(g.tGod.value=this.godRT.texture,g.uGodSharp.value=Math.max(0,Math.min(1,a.sharp??0)),g.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value),c.autoClear=!1,a.compare){const v=c.getSize(new ke),m=Math.floor(v.x*.5);c.setScissorTest(!0),c.setScissor(m,0,v.x-m,v.y)}c.render(this._overlayScene,_r),c.setScissorTest(!1),c.autoClear=f;return}const d=this.compMat.uniforms;d.tScene.value=this.sceneRT.texture,d.tBloom.value=this.bloomRT.texture,d.tGod.value=this.godRT.texture,d.uBloom.value=r,d.uHaze.value=s,n.hazeColor&&d.uHazeColor.value.copy(n.hazeColor),n.sunCol&&d.uSunCol.value.copy(n.sunCol),n.sunUV&&d.uSunUV.value.set(n.sunUV.x,n.sunUV.y),d.uSunVis.value=o,d.uGod.value=l?1:0,d.uGodCompare.value=a.compare?1:0,d.uGodSharp.value=Math.max(0,Math.min(1,a.sharp??0)),c.setRenderTarget(null),c.render(this._compScene,_r)}dispose(){this.sceneRT.dispose(),this.bloomRT.dispose(),this.godRT.dispose(),this.brightMat.dispose(),this.godMat.dispose(),this.overlayMat.dispose(),this.compMat.dispose()}}const Bo=new L(0,ut.groundRadius+.35,0);class Bm{constructor(e,t){this.container=e,this.store=t,this.elapsed=0,this.treeCount=0,this._terrainDirty=!1,this._regenTimer=null,this.renderer=new Yp({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=At,this.renderer.toneMapping=Xo,this.renderer.toneMappingExposure=t.get("render.exposure"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vo,e.appendChild(this.renderer.domElement),this.scene=new Yn;const n=t.get("render.fov");this.camera=new It(n,window.innerWidth/window.innerHeight,.5,32e3),this.camera.position.set(420,230,480),this.camera.lookAt(0,t.get("water.seaLevel")+30,0),this.transmittanceLUT=new nm,this.skyViewLUT=new rm,this.skyViewLUT.setTransmittanceLUT(this.transmittanceLUT.texture),this.skyViewLUT.setObserverPosition(Bo),this.backdrop=new om,this.backdrop.setObserver(Bo),this.backdrop.setLUTs(this.skyViewLUT.texture,this.transmittanceLUT.texture),this.scene.add(this.backdrop.mesh),this.sun=new Jp(16773852,2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=2.2,this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new $p(12575743,5916208,.34),this.scene.add(this.hemi),this.ambient=new Qp(16777215,.05),this.scene.add(this.ambient),this.scene.fog=new ua(12375254,t.get("render.fogDensity")),this.islandGroup=new qn,this.treeGroup=new qn,this.scene.add(this.islandGroup),this.scene.add(this.treeGroup),this.sea=null,this.camDirector=new lm(this.camera,this.renderer.domElement),this._exp={planetR:!1,planetRadiusKm:1200},this.postfx=new Rm(this.renderer),this._applyAll(),this.regenerate(),t.subscribe(r=>this._onParam(r)),window.addEventListener("resize",()=>this._onResize()),this.clock=new em}regenerate(){this._regenTimer&&(clearTimeout(this._regenTimer),this._regenTimer=null);const e=this.store,t={seed:e.get("voxel.seed")|0,radius:e.get("island.radius"),shape:e.get("island.shape")|0,resolution:e.get("voxel.resolution")|0,lowland:e.get("island.lowland"),massif:e.get("island.massif"),terraceStep:e.get("voxel.terraceStep"),warp:e.get("island.warp"),ridge:e.get("island.ridge"),beachWidth:e.get("island.beachWidth"),valleyDepth:e.get("island.valleyDepth"),valleyWidth:e.get("island.valleyWidth"),seaLevel:e.get("water.seaLevel"),floorDepth:e.get("water.floorDepth"),seasons:{sweepDeg:e.get("seasons.sweepDeg"),summerEnd:e.get("seasons.summerEnd"),autumnEnd:e.get("seasons.autumnEnd"),coniferEnd:e.get("seasons.coniferEnd"),borderWarp:e.get("seasons.borderWarp"),craggy:e.get("seasons.craggy"),fairway:e.get("seasons.fairway"),fairwayBand:e.get("seasons.fairwayBand"),bunkerDensity:e.get("seasons.bunkerDensity"),bunkerSize:e.get("seasons.bunkerSize")}};t.maxHeight=t.lowland+t.massif;const n=_m(t);this.vol=n;const r=t.radius*1.4,s=this.sun.shadow.camera;s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.near=Math.max(50,6e3-r-t.maxHeight-600),s.far=6e3+r+600,s.updateProjectionMatrix(),this.islandGroup.clear(),this._islandMesh&&this._islandMesh.geometry.dispose(),this._islandMesh=vm(n,t.seed),this.islandGroup.add(this._islandMesh),this.sea&&this.scene.remove(this.sea.group),this.sea=new Sm({worldSize:n.worldSize,radius:t.radius,seaLevel:t.seaLevel,causticScale:e.get("water.causticScale"),causticIntensity:e.get("water.causticIntensity"),shoreGlow:e.get("water.shoreGlow")}),this.scene.add(this.sea.group),this._applyWaterLighting(),this._plantTrees(n,t)}_plantTrees(e,t){this.treeGroup.clear();const n=fi(t.seed*2654435761>>>0),r=(c,u)=>{const h=e.idx(c,u),d=e.season[h],f=e.material[h];return e.heightVox[h]*e.vstep,f===Ke.SAND&&d<=Rn.AUTUMN&&n()>.4?"palm":d===Rn.WINTER?n()>.55?"conifer":"winter":d===Rn.CONIFER?"conifer":d===Rn.AUTUMN?"autumn":n()>.18?"summer":"palm"},s=["palm","summer","autumn","conifer","winter"];let a=0;const o=90;let l=0;for(;a<o&&l<o*40;){l++;const c=n()*e.res|0,u=n()*e.res|0,h=e.idx(c,u);if(!e.land[h])continue;const d=e.material[h];if(d===Ke.ROCK||d===Ke.SEAFLOOR)continue;const f=e.heightVox[h]*e.vstep;if(f<t.seaLevel+.4||f>t.seaLevel+t.maxHeight*.82)continue;const g=a<s.length?s[a]:r(c,u),v=bm(g,(n()*1e9|0)^h),[m,p]=e.cellToWorld(c,u),A=.85+n()*.5;v.position.set(m,f-.5,p),v.scale.setScalar(A),v.rotation.y=n()*Math.PI*2,this.treeGroup.add(v),a++}this.treeCount=a}_sunDir(){const e=ot.degToRad(this.store.get("sun.elevationDeg")),t=ot.degToRad(this.store.get("sun.azimuthDeg")),n=Math.cos(e);return new L(n*Math.cos(t),Math.sin(e),n*Math.sin(t)).normalize()}_applyAll(){const e=this.store,t=this._sunDir(),n=e.get("sun.intensity");this.skyViewLUT.setSunDir(t),this.skyViewLUT.setSunIntensity(n),this.backdrop.setSun({direction:t,intensity:n});const r=e.get("sun.elevationDeg"),s=ot.clamp((r+6)/28,0,1),a=s*s*(3-2*s),o=ot.clamp(n/22,.45,2.2);this.sun.position.copy(t).multiplyScalar(6e3),this.sun.target.position.set(0,0,0),this.sun.color.set("#ff7a36").lerp(new De("#fff3df"),a),this.sun.intensity=ot.lerp(.5,3.1,a)*o;const l=e.get("lighting.skyBounce"),c=e.get("lighting.groundBounce");this._gi={tint:e.get("lighting.bounceTint")},this._hemiBase=new De("#e8a86a").lerp(new De("#a9c8e6"),a),this.hemi.color.copy(this._hemiBase),this.hemi.groundColor.set("#3a2a1c").lerp(new De("#60503a"),a),this.hemi.intensity=ot.lerp(.3,.6,a)*(l/.55),this.ambient.intensity=ot.lerp(.03,.09,a)*(.7+c),this.scene.fog.color.set("#d99250").lerp(new De("#acc6cf"),a),this._skyDirty=!0,this.transmittanceLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setMieG(e.get("atmosphere.mieG"));const u=e.get("render.horizonWarp");this.skyViewLUT.setHorizonWarp(u),this.backdrop.setHorizonWarp(u),this.renderer.toneMappingExposure=e.get("render.exposure"),this.camera.fov=e.get("render.fov"),this.camera.updateProjectionMatrix(),this.scene.fog.density=e.get("render.fogDensity"),this._applyWaterLighting()}_applyWaterLighting(){if(!this.sea)return;const e=this.store;this.sea.setSun(this._sunDir(),this.sun.color),this.sea.setGlint(e.get("lighting.sunGlint"),e.get("lighting.glintSpread"))}_onParam(e){const t=e.path;(t==="*"||t.startsWith("sun.")||t.startsWith("atmosphere.")||t.startsWith("render.")||t.startsWith("lighting."))&&this._applyAll(),(t==="*"||t.startsWith("island.")||t.startsWith("voxel.")||t.startsWith("seasons.")||t==="water.seaLevel"||t==="water.floorDepth")&&this._scheduleRegen(),this.sea&&((t==="*"||t==="water.causticScale"||t==="water.causticIntensity")&&this.sea.setCaustic(this.store.get("water.causticScale"),this.store.get("water.causticIntensity")),(t==="*"||t==="water.shoreGlow")&&this.sea.setShoreGlow(this.store.get("water.shoreGlow")))}_scheduleRegen(){this._regenTimer&&clearTimeout(this._regenTimer),this._regenTimer=setTimeout(()=>{this.regenerate(),this._regenTimer=null},260)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.postfx?.setSize()}setExperimental(e){const t=this._exp.planetR?this._exp.planetRadiusKm|0:-1;this._exp=e||{},(this._exp.planetR?this._exp.planetRadiusKm|0:-1)!==t&&this._applyPlanetR()}_applyPlanetR(){const t=this._exp.planetR?Math.max(150,this._exp.planetRadiusKm||1200):ut.groundRadius,n=ut.atmosphereRadius-ut.groundRadius;this.skyViewLUT.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:n}),this.backdrop.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:n});const r=new L(0,t+.35,0);this.skyViewLUT.setObserverPosition(r),this.backdrop.setObserver(r),this._skyDirty=!0}_fxParams(){const e=this.store,t=this._sunDir(),n=this._fxf||=new L;this.camera.getWorldDirection(n);const r=n.dot(t),s=this._fxv||=new L;s.copy(this.camera.position).addScaledVector(t,2e3).project(this.camera);const a={x:s.x*.5+.5,y:s.y*.5+.5},o=Math.max(0,-a.x,a.x-1,-a.y,a.y-1),l=ot.smoothstep(r,-.55,-.05),c=1-ot.smoothstep(o,1.75,3.75),u=ot.smoothstep(t.y,-.02,.04),h=l*c*u,d=h>.001,f=e.get("godrays")||{},g=f.enable?{intensity:f.intensity??.85,samples:f.samples??16,density:f.density??.32,decay:f.decay??.915,weight:f.weight??2,exposure:f.exposure??.7,threshold:f.threshold??.62,horizon:f.groundMask??.5,radius:f.reach??1.45,tint:f.warmth??.5,resScale:f.resScale??.25,sharp:f.sharp??.25,source:f.source??1,compare:!!f.compare}:{intensity:0};return{bloom:e.get("lighting.bloom")||0,haze:e.get("lighting.aerialHaze")||0,hazeColor:this.scene.fog.color,sunCol:this.sun.color,sunUV:a,sunVisible:d,sunFade:h,god:g}}getDebugInfo(){const e=this.camera.position;return{name:"Isometric Island",camera:[e.x.toFixed(1),e.y.toFixed(1),e.z.toFixed(1)],triangles:this.renderer.info.render.triangles,drawCalls:this.renderer.info.render.calls,trees:this.treeCount,worldSize:this.vol?.worldSize,seaLevel:this.store.get("water.seaLevel"),sunElevationDeg:this.store.get("sun.elevationDeg"),seed:this.store.get("voxel.seed")}}_syncHorizonFog(){try{const e=this.skyViewLUT,t=e.width,n=e.height,r=Math.max(0,Math.floor(n*.5)-1);(!this._fogBuf||this._fogBuf.length!==t*4)&&(this._fogBuf=new Uint16Array(t*4)),this.renderer.readRenderTargetPixels(e.target,0,r,t,1,this._fogBuf);const s=Zc.fromHalfFloat;let a=0,o=0,l=0;for(let h=0;h<t;h++)a+=s(this._fogBuf[h*4]),o+=s(this._fogBuf[h*4+1]),l+=s(this._fogBuf[h*4+2]);if(a/=t,o/=t,l/=t,!(a>=0)||!(o>=0)||!(l>=0))return;const c=this.renderer.toneMappingExposure,u=h=>(h=Math.max(0,h*c),Math.min(1,Math.max(0,h*(2.51*h+.03)/(h*(2.43*h+.59)+.14))));this.scene.fog.color.setRGB(u(a),u(o),u(l),At),this.sea?.setHorizon(this.scene.fog.color),this._hemiBase&&this.hemi.color.copy(this._hemiBase).lerp(this.scene.fog.color,this._gi?.tint??.7)}catch{}}start(){const e=()=>{this._raf=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),1/20);this.elapsed+=t,this.camDirector.update(t),this.sea?.update(this.elapsed,this.camera.position),this.camera.updateMatrixWorld(),this.backdrop.updateCamera(this.camera),this.transmittanceLUT.render(this.renderer),this.skyViewLUT.render(this.renderer),this._skyDirty&&(this._syncHorizonFog(),this._skyDirty=!1),this.postfx.render(this.scene,this.camera,this._fxParams())};e()}}const Cm={sun:{label:"sun",icon:"☉",blurb:"drives both the Hillaire sky and the island key light",fields:{elevationDeg:{type:"float",label:"Elevation",min:-10,max:90,step:.5,default:26,unit:"°",hint:"low = warm sunset · high = bright noon"},azimuthDeg:{type:"float",label:"Azimuth",min:-180,max:180,step:1,default:-84,unit:"°",hint:"rakes the terrain — avoids flat back-to-sun lighting"},intensity:{type:"float",label:"Intensity",min:1,max:60,step:.5,default:22}}},atmosphere:{label:"atmosphere",icon:"◐",blurb:"Hillaire 2020 — Rayleigh / Mie / ozone",fields:{rayleighMul:{type:"float",label:"Rayleigh ×",min:0,max:4,step:.01,default:1},mieBeta:{type:"float",label:"Mie β",min:0,max:.05,step:5e-4,default:.021,hint:"haze thickness"},mieG:{type:"float",label:"Mie g",min:0,max:.95,step:.005,default:.758},ozoneMul:{type:"float",label:"Ozone ×",min:0,max:3,step:.01,default:1}}},lighting:{label:"lighting",icon:"✦",blurb:"sky-tinted bounce · water sun-glint · bloom · aerial haze",fields:{skyBounce:{type:"float",label:"Sky bounce",min:0,max:1.6,step:.02,default:.55,hint:"faked GI — hemisphere fill tinted by the live sky"},bounceTint:{type:"float",label:"Bounce tint",min:0,max:1,step:.02,default:.7,hint:"how hard the bounce pulls toward the sampled sky colour"},groundBounce:{type:"float",label:"Ground bounce",min:0,max:1,step:.02,default:.3,hint:"warm up-light from the lit ground"},sunGlint:{type:"float",label:"Sun glint",min:0,max:2.5,step:.05,default:.7,hint:"analytic specular sun streak on the sea"},glintSpread:{type:"float",label:"Glint spread",min:.2,max:4,step:.05,default:1.1,hint:"lower = tight mirror streak · higher = broad shimmer"},bloom:{type:"float",label:"Bloom",min:0,max:1.5,step:.02,default:0,hint:"staged — shared post pass (0 = off, zero cost)"},aerialHaze:{type:"float",label:"Aerial haze",min:0,max:1,step:.02,default:0,hint:"staged — sky-coloured depth haze (0 = off)"}}},voxel:{label:"voxel",icon:"⬚",blurb:"world structure — never randomized · pin (◆ amber) to lock",fields:{seed:{type:"int",label:"Seed",min:1,max:99999,step:1,default:1337,hint:"the island. not rolled by random — ◆ to keep one"},resolution:{type:"int",label:"Voxel grid",min:128,max:1024,step:32,default:384,hint:"cells across the world · structural, never randomized"},terraceStep:{type:"float",label:"Terrace step",min:0,max:8,step:.5,default:2.5,unit:"m",hint:"0 = smooth · >0 = stepped terraces · structural"}}},island:{label:"island",icon:"▲",blurb:"bounded voxel island — mask + domain-warp + ridged multifractal",fields:{radius:{type:"float",label:"Radius",min:300,max:1100,step:10,default:700,unit:"m",hint:"island size — bigger = more room for beaches/relief"},shape:{type:"int",label:"Shape",min:0,max:4,step:1,default:0,hint:"0 auto (from seed) · 1 round · 2 crescent · 3 long · 4 lobed"},lowland:{type:"float",label:"Lowland relief",min:6,max:90,step:2,default:32,unit:"m",hint:"rolling-hill amplitude of the bulk of the island"},massif:{type:"float",label:"Massif height",min:0,max:360,step:10,default:150,unit:"m",hint:"localized mountain uplift above the lowland"},warp:{type:"float",label:"Domain warp",min:0,max:2,step:.05,default:.85},ridge:{type:"float",label:"Ridge weight",min:0,max:1.5,step:.05,default:.7,hint:"ridged multifractal — sharp spines"},beachWidth:{type:"float",label:"Beach width",min:2,max:50,step:1,default:16,unit:"m"},valleyDepth:{type:"float",label:"Valley carve",min:0,max:120,step:5,default:55,unit:"m",hint:"gully → river → delta cut (post-build subtraction) · 0 = off"},valleyWidth:{type:"float",label:"Valley width",min:8,max:60,step:2,default:22,unit:"m",hint:"channel half-width near source · widens downstream"}}},seasons:{label:"seasons",icon:"❄",blurb:"altitude bands · coast=summer → peak=winter · winter never touches summer",fields:{sweepDeg:{type:"float",label:"Region drift",min:-180,max:180,step:1,default:35,unit:"°",hint:"rotates the lateral-variety noise"},summerEnd:{type:"float",label:"Summer line",min:.15,max:.6,step:.01,default:.44,hint:"altitude frac · below = tropical lowland"},autumnEnd:{type:"float",label:"Autumn line",min:.4,max:.78,step:.01,default:.66},coniferEnd:{type:"float",label:"Conifer line",min:.6,max:.92,step:.01,default:.84,hint:"above = winter snow caps (drives the snow line)"},borderWarp:{type:"float",label:"Border warp",min:0,max:1.5,step:.05,default:.6,hint:"organic wander of the altitude bands"},craggy:{type:"float",label:"Craggy peaks",min:0,max:1,step:.02,default:.4,hint:"rock speckled through the snow/upper zone"},fairway:{type:"float",label:"Fairway (greens)",min:0,max:1,step:.02,default:0,hint:'0 = off · lime "greens" band above the beach'},fairwayBand:{type:"float",label:"Fairway band",min:4,max:80,step:2,default:24,unit:"m",hint:"how far the greens reach inland from the sand"},bunkerDensity:{type:"float",label:"Bunkers",min:0,max:1,step:.02,default:.18,hint:"sand-trap frequency inside the greens"},bunkerSize:{type:"float",label:"Bunker size",min:3,max:30,step:1,default:11,unit:"m",hint:"sand-trap blob radius"}}},water:{label:"water",icon:"≈",blurb:"caustics (aquarium) + depth-graded blue seafloor + shore glow",fields:{seaLevel:{type:"float",label:"Sea level",min:-2,max:40,step:.5,default:9,unit:"m"},causticScale:{type:"float",label:"Caustic scale",min:.3,max:6,step:.1,default:1.6},causticIntensity:{type:"float",label:"Caustic ×",min:0,max:3,step:.05,default:1},floorDepth:{type:"float",label:"Seafloor depth",min:10,max:140,step:5,default:64,unit:"m"},shoreGlow:{type:"float",label:"Shore glow",min:0,max:1.5,step:.05,default:.7,hint:"warm orange beach halo (aquarium-sky math)"}}},render:{label:"render",icon:"◯",blurb:"camera, exposure, horizon haze",fields:{fov:{type:"float",label:"FOV",min:40,max:95,step:1,default:68,unit:"°"},exposure:{type:"float",label:"Exposure",min:.2,max:3,step:.01,default:1.05},fogDensity:{type:"float",label:"Horizon haze",min:0,max:.006,step:5e-5,default:72e-5,hint:"dissolves the bounded sea edge into the sky"},horizonWarp:{type:"bool",label:"Horizon warp",default:!0}}},godrays:{label:"god rays",icon:"✺",blurb:"screen-space radial scatter · downsample→march→upsample",fields:{enable:{type:"bool",label:"Enable",default:!0,hint:"G toggles · off = golden bypass (zero cost)"},source:{type:"float",label:"Source mask",min:0,max:1,step:.02,default:1,hint:"1 = clean depth sky/occluder · 0 = raw-scene debug echoes"},intensity:{type:"float",label:"Intensity",min:0,max:3,step:.05,default:.85,hint:"first gain knob"},density:{type:"float",label:"Density",min:.2,max:1,step:.02,default:.32,hint:"ray reach toward the sun"},decay:{type:"float",label:"Decay",min:.8,max:1,step:.005,default:.915,hint:"tail length"},weight:{type:"float",label:"Weight",min:.1,max:2,step:.05,default:2,hint:"per-sample lift"},exposure:{type:"float",label:"Exposure",min:.1,max:3,step:.05,default:.7,hint:"final ray gain after the march"},threshold:{type:"float",label:"Threshold",min:.05,max:.95,step:.01,default:.62,hint:"source cutoff"},groundMask:{type:"float",label:"Ground mask",min:0,max:1,step:.02,default:.5,hint:"suppresses sources below the sun"},reach:{type:"float",label:"Reach",min:.4,max:2.5,step:.05,default:1.45,hint:"screen-space falloff radius"},warmth:{type:"float",label:"Warmth",min:0,max:1,step:.02,default:.5,hint:"0 = sky-colour rays · 1 = warm sun"},samples:{type:"int",label:"Samples",min:6,max:48,step:1,default:16,hint:"march taps"},resScale:{type:"float",label:"Buffer scale",min:.06,max:1,step:.02,default:.25,hint:"LOW = cheap + blocky scatter"},sharp:{type:"float",label:"Upsample snap",min:0,max:1,step:.05,default:.25,hint:"0 = bilinear · 1 = raw low-res blocks; no blur pass"}}}},Pm=["sun","atmosphere","lighting","voxel","island","seasons","water","render","godrays"];function Dm(i){return i.type==="range"?[...i.default]:i.default}function Lm(){const i={};for(const e of Pm){i[e]={};const t=Cm[e].fields;for(const[n,r]of Object.entries(t))i[e][n]=Dm(r)}return i}const zo=Lm();function An(i){if(i==null||typeof i!="object")return i;if(Array.isArray(i))return i.map(An);const e={};for(const t in i)e[t]=An(i[t]);return e}function Um(i,e){const t=e.split(".");let n=i;for(const r of t){if(n==null)return;n=n[r]}return n}function Im(i,e,t){const n=e.split("."),r=n.pop();let s=i;for(const o of n)s[o]==null&&(s[o]=isNaN(Number(o))?{}:[]),s=s[o];const a=s[r];return s[r]=t,a}class zm{constructor(e){this.state=An(e??zo),this.defaults=An(zo),this.listeners=new Set}get(e){return Um(this.state,e)}set(e,t){const n=Im(this.state,e,An(t));this._notify(e,t,n)}fromJSON(e){!e||typeof e!="object"||(this._mergeInto(this.state,e),this._notify("*",this.state,null))}_mergeInto(e,t){for(const n in t){const r=t[n];r&&typeof r=="object"&&!Array.isArray(r)?(e[n]==null&&(e[n]={}),this._mergeInto(e[n],r)):e[n]=An(r)}}toJSON(){return An(this.state)}reset(){this.state=An(this.defaults),this._notify("*",this.state,null)}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_notify(e,t,n){for(const r of this.listeners)try{r({path:e,value:t,prev:n,store:this})}catch(s){console.error("store listener error",s)}}}function Nm(i){if(!i||typeof i!="object")return{};const e={};for(const t of Object.keys(i)){const n=/^([1-8])$/.exec(t);e[n?"A"+n[1]:t]=i[t]}return e}async function Gm(){try{const i=new URL("presets.json",document.baseURI).href,e=await fetch(i,{cache:"no-cache"});if(e.ok){const t=await e.json();return Nm(t&&typeof t=="object"?t.presets||t:{})}}catch{}return{}}async function Hm(i,e){}function Go(i){const e=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(i);if(e)return[+e[1],+e[2],+e[3]];const t=i.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function Gn(i,e,t){const n=Go(i),r=Go(e),s=Math.max(0,Math.min(1,t)),a=n.map((o,l)=>Math.round(o+(r[l]-o)*s));return`rgb(${a[0]},${a[1]},${a[2]})`}function Fm(i){const e=i&&i.params;if(!e)return null;const t=e.sun?.elevationDeg??26,n=Math.max(0,Math.min(1,(t+4)/26)),r=1-n,s=e.render?.exposure??1.05,a=Math.max(.8,Math.min(1.25,s)),o=Gn("#1c2742","#6fa9da",n),l=Gn("#ff7a3c","#d5e8f1",n),c=["#4f9e34","#caa033","#2f7a44","#acd7de"],u=e.seasons?.sweepDeg??0,h=c[Math.abs(Math.round(u/90))%4],d=Gn(h,"#e7d59a",.28*a),f=Gn(h,"#10331f",.5),g=Gn(Gn("#0e4f63","#36b9c0",n),"#1f6f6a",r*.5),v=Gn("#06283a","#0e5566",n);return`linear-gradient(180deg, ${o} 0%, ${l} 32%, ${d} 36%, ${h} 50%, ${f} 63%, ${g} 66%, ${v} 100%)`}class km{constructor({store:e,schema:t,sectionOrder:n,onAction:r,sticky:s,presets:a}){this.store=e,this.schema=t,this.sectionOrder=n,this.onAction=r,this.sticky=s||{has:()=>!1,toggle:()=>!1},this.presets=a||{slots:{},save:()=>{},load:()=>{}},this.fieldUpdaters=new Map,this.stickyEls=new Map,this.collapsed=!0,this.statusTimer=null,this.root=document.createElement("div"),this.root.className="ff-panel"+(this.collapsed?" collapsed":""),this._buildHeader(),this._buildBody(),this._buildFooter(),this.handle=document.createElement("button"),this.handle.className="ff-panel-handle"+(this.collapsed?" visible":""),this.handle.title="open controls (h or b)",this.handle.textContent="◧",this.handle.addEventListener("click",()=>this.toggle()),document.body.appendChild(this.handle),this.hints=document.createElement("div"),this.hints.className="ff-hints",this.hints.innerHTML=`
      <kbd>WASD</kbd> fly
      <kbd>Q/↑↓</kbd> up·down
      <kbd>drag</kbd> look
      <kbd>H</kbd> panel
      <kbd>G</kbd> god rays
      <kbd>F</kbd> fps
    `,document.body.appendChild(this.hints),this.unsubscribe=e.subscribe(o=>this._onStoreChange(o))}toggle(){this.collapsed=!this.collapsed,this.root.classList.toggle("collapsed",this.collapsed),this.handle.classList.toggle("visible",this.collapsed),this.hints.classList.toggle("show",!this.collapsed)}flashStatus(e,t="ok"){this.statusEl.textContent=e,this.statusEl.classList.remove("ok","err"),this.statusEl.classList.add(t),this.statusTimer&&clearTimeout(this.statusTimer),this.statusTimer=setTimeout(()=>{this.statusEl.textContent="",this.statusEl.classList.remove("ok","err")},2200)}_onStoreChange(e){if(e.path==="*"){for(const[n,r]of this.fieldUpdaters)r(this.store.get(n));return}const t=this.fieldUpdaters.get(e.path);t&&t(e.value)}_buildHeader(){const e=document.createElement("div");e.className="ff-panel-header",e.innerHTML='<div class="ff-panel-status"></div>',this.statusEl=e.querySelector(".ff-panel-status"),this.root.appendChild(e)}_buildBody(){this.body=document.createElement("div"),this.body.className="ff-panel-body";for(const e of this.sectionOrder){const t=this.schema[e];this.body.appendChild(this._buildSection(e,t,!1))}this.root.appendChild(this.body)}_buildSection(e,t,n){const r=document.createElement("div");r.className="ff-section"+(n?" open":""),r.setAttribute("data-section",e);const s=document.createElement("div");s.className="ff-section-head",s.innerHTML=`
      <span class="ff-section-icon">${t.icon||"·"}</span>
      <span class="ff-section-label">${t.label}</span>
      <span class="ff-section-blurb">${t.blurb||""}</span>
      <span class="ff-section-chevron">▸</span>
    `,s.addEventListener("click",()=>r.classList.toggle("open")),r.appendChild(s);const a=document.createElement("div");a.className="ff-section-body";for(const[o,l]of Object.entries(t.fields)){const c=`${e}.${o}`,u=this._buildField(c,l);u&&a.appendChild(u)}return r.appendChild(a),r}_buildField(e,t){switch(t.type){case"int":case"float":return this._buildSliderField(e,t);case"range":return this._buildRangeField(e,t);case"bool":return this._buildToggleField(e,t);default:return null}}_buildSliderField(e,t){const n=document.createElement("div");n.className="ff-field",n.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-slider">
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
        </div>
      </div>
    `;const r=n.querySelector(".ff-field-value"),s=n.querySelector(".ff-slider"),a=n.querySelector("input"),o=Ho(t),l=c=>{const u=Number(c);a.value=String(u),r.textContent=o(u);const h=(u-t.min)/(t.max-t.min)*100;s.style.setProperty("--ff-pct",`${h.toFixed(2)}%`)};return l(this.store.get(e)),a.addEventListener("input",()=>{const c=t.type==="int"?Math.round(Number(a.value)):Number(a.value);this.store.set(e,c),l(c)}),this._attachSticky(n,e),this.fieldUpdaters.set(e,l),n}_buildRangeField(e,t){const n=document.createElement("div");n.className="ff-field",n.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-range">
          <div class="ff-range-track"><div class="ff-range-fill"></div></div>
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
        </div>
      </div>
    `;const r=n.querySelector(".ff-field-value"),s=n.querySelector(".ff-range-fill"),a=n.querySelectorAll("input"),o=a[0],l=a[1],c=Ho(t),u=d=>{const[f,g]=d;o.value=String(f),l.value=String(g);const v=t.max-t.min,m=(f-t.min)/v*100,p=(1-(g-t.min)/v)*100;s.style.left=`${m.toFixed(2)}%`,s.style.right=`${p.toFixed(2)}%`,r.textContent=`${c(f)} ─ ${c(g)}`},h=()=>{let d=Number(o.value),f=Number(l.value);const g=t.step;d>f-g&&(d>Number(this.store.get(e)[0])?d=f-g:f=d+g),d=Math.max(t.min,Math.min(t.max-g,d)),f=Math.max(t.min+g,Math.min(t.max,f));const v=[d,f];this.store.set(e,v),u(v)};return u(this.store.get(e)),o.addEventListener("input",h),l.addEventListener("input",h),this._attachSticky(n,e),this.fieldUpdaters.set(e,u),n}_buildToggleField(e,t){const n=document.createElement("div");n.className="ff-field",n.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value">
        <div class="ff-toggle"></div>
      </div>
    `;const r=n.querySelector(".ff-toggle"),s=a=>{r.classList.toggle("on",!!a)};return s(this.store.get(e)),r.addEventListener("click",()=>{const a=!this.store.get(e);this.store.set(e,a),s(a)}),this._attachSticky(n,e),this.fieldUpdaters.set(e,s),n}_buildFooter(){const e=document.createElement("div");e.className="ff-panel-footer";const t=document.createElement("div");t.className="ff-banks",this.bankEls=new Map;for(const s of["A","B","C","D","E","F","G","H"]){const a=document.createElement("button");a.className="ff-bank",a.dataset.bank=s,a.textContent=s,a.title=`bank ${s}`,a.addEventListener("click",()=>{this.presets.setBank?.(s),this._syncBankActive()}),t.appendChild(a),this.bankEls.set(s,a)}e.appendChild(t);const n=document.createElement("div");n.className="ff-presets",this.presetEls=new Map;for(let s=1;s<=8;s++){const a=document.createElement("button");a.className="ff-preset",a.dataset.slot=String(s),a.innerHTML=`<span class="ff-preset-num">${s}</span>`,a.addEventListener("click",o=>{o.shiftKey?this.presets.save(s):this.presets.load(s)}),n.appendChild(a),this.presetEls.set(s,a)}e.appendChild(n);const r=document.createElement("div");r.className="ff-btn-trio",r.innerHTML=`
      <button class="ff-btn ff-mini" data-action="default">default</button>
      <button class="ff-btn ff-mini" data-action="random">random</button>
      <button class="ff-btn ff-mini" data-action="baseline" title="post FX off + snap to golden A1">baseline</button>
    `,e.appendChild(r),r.querySelectorAll("button[data-action]").forEach(s=>{s.addEventListener("click",()=>this.onAction(s.dataset.action))}),this.root.appendChild(e),this.refreshPresets()}_syncBankActive(){if(!this.bankEls)return;const e=this.presets?.getBank?.()||"A";for(const[t,n]of this.bankEls)n.classList.toggle("active",t===e)}refreshPresets(){if(this._syncBankActive(),!this.presetEls)return;const e=this.presets?.getBank?.()||"A",t=this.presets?.slots||{};for(const[n,r]of this.presetEls){const s=`${e}${n}`,a=t[s],o=!!a;r.classList.toggle("filled",o),r.style.backgroundImage=o&&Fm(a)||"",r.title=`${s}${s==="A1"?" (default)":""} — click load · shift-click save`}}_attachSticky(e,t){const n=e.querySelector(".ff-field-name");if(!n)return;const r=t.startsWith("voxel."),s=document.createElement("button");s.className="ff-sticky"+(r?" major":"")+(this.sticky.has(t)?" on":""),s.title=r?"structural pin — lock this; it is never randomized":"sticky pin — keep this value across reseed/random",s.textContent=this.sticky.has(t)?"◆":"◇",s.addEventListener("click",a=>{a.stopPropagation();const o=this.sticky.toggle(t);s.classList.toggle("on",o),s.textContent=o?"◆":"◇"}),n.prepend(s),this.stickyEls.set(t,s)}refreshSticky(){for(const[e,t]of this.stickyEls){const n=this.sticky.has(e);t.classList.toggle("on",n),t.textContent=n?"◆":"◇"}}destroy(){this.unsubscribe?.(),this.handle.remove(),this.hints.remove(),this.root.remove()}}function Ho(i){const e=i.type==="int",t=i.step>=1?0:i.step>=.1?1:i.step>=.01?2:i.step>=.001?3:4;return n=>{const r=e?String(n|0):Number(n).toFixed(t);return i.unit?`${r} ${i.unit}`:r}}export{km as C,zm as P,Bm as S,Cm as a,Pm as b,zo as d,Gm as l,Hm as s};
