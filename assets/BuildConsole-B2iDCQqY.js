(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="170",Jl=0,Ua=1,Ql=2,ec=0,la=1,Is=2,gn=3,an=0,Dt=1,Gt=2,Nn=0,Ti=1,ji=2,Ia=3,Na=4,tc=5,Zn=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,xr=204,Sr=205,uc=206,hc=207,dc=208,fc=209,pc=210,mc=211,gc=212,_c=213,vc=214,Mr=0,yr=1,br=2,Ai=3,Er=4,Tr=5,wr=6,Ar=7,cl=0,xc=1,Sc=2,Fn=0,Mc=1,yc=2,bc=3,ul=4,Ec=5,Tc=6,wc=7,hl=300,Ri=301,Ci=302,Rr=303,Cr=304,Bs=306,Ns=1e3,nn=1001,Dr=1002,Jt=1003,Ac=1004,rs=1005,ut=1006,Vs=1007,Qn=1008,yn=1009,dl=1010,fl=1011,Zi=1012,ca=1013,On=1014,xn=1015,rn=1016,ua=1017,ha=1018,Di=1020,pl=35902,ml=1021,gl=1022,Nt=1023,_l=1024,vl=1025,ii=1026,Pi=1027,xl=1028,da=1029,Sl=1030,fa=1031,pa=1033,As=33776,Rs=33777,Cs=33778,Ds=33779,Pr=35840,Lr=35841,Ur=35842,Ir=35843,Nr=36196,Fr=37492,Or=37496,Br=37808,zr=37809,Gr=37810,kr=37811,Hr=37812,Vr=37813,Wr=37814,Xr=37815,qr=37816,Yr=37817,$r=37818,Kr=37819,jr=37820,Zr=37821,Ps=36492,Jr=36494,Qr=36495,Ml=36283,ea=36284,ta=36285,na=36286,Rc=3200,Cc=3201,yl=0,Dc=1,tn="",Ct="srgb",jt="srgb-linear",zs="linear",Qe="srgb",ai=7680,Fa=519,Pc=512,Lc=513,Uc=514,bl=515,Ic=516,Nc=517,Fc=518,Oc=519,Oa=35044,Ba="300 es",Sn=2e3,Fs=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const Xi=Math.PI/180,Ji=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function ma(i,e){return(i%e+e)%e}function Bc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zc(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function Gc(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function kc(i,e=1){return e-Math.abs(ma(i,e*2)-e)}function Hc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xc(i,e){return i+Math.random()*(e-i)}function qc(i){return i*(.5-Math.random())}function Yc(i){i!==void 0&&(za=i);let e=za+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $c(i){return i*Xi}function Kc(i){return i*Ji}function jc(i){return(i&i-1)===0&&i!==0}function Zc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qc(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),u=r((e+n)/2),c=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*c,l*h,l*d,o*u);break;case"YZY":i.set(l*d,o*c,l*h,o*u);break;case"ZXZ":i.set(l*h,l*d,o*c,o*u);break;case"XZX":i.set(o*c,l*g,l*m,o*u);break;case"YXY":i.set(l*m,o*c,l*g,o*u);break;case"ZYZ":i.set(l*g,l*m,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:Xi,RAD2DEG:Ji,generateUUID:Ii,clamp:Mt,euclideanModulo:ma,mapLinear:Bc,inverseLerp:zc,lerp:qi,damp:Gc,pingpong:kc,smoothstep:Hc,smootherstep:Vc,randInt:Wc,randFloat:Xc,randFloatSpread:qc,seededRandom:Yc,degToRad:$c,radToDeg:Kc,isPowerOfTwo:jc,ceilPowerOfTwo:Zc,floorPowerOfTwo:Jc,setQuaternionFromProperEuler:Qc,normalize:Et,denormalize:yi};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,r,a,o,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],m=n[5],g=n[8],v=s[0],p=s[3],f=s[6],T=s[1],b=s[4],y=s[7],F=s[2],w=s[5],A=s[8];return r[0]=a*v+o*T+l*F,r[3]=a*p+o*b+l*w,r[6]=a*f+o*y+l*A,r[1]=u*v+c*T+h*F,r[4]=u*p+c*b+h*w,r[7]=u*f+c*y+h*A,r[2]=d*v+m*T+g*F,r[5]=d*p+m*b+g*w,r[8]=d*f+m*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*r*c+n*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,d=o*l-c*r,m=u*r-a*l,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*u-c*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-u*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ws.makeScale(e,t)),this}rotate(e){return this.premultiply(Ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new Ge;function El(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){const i=Os("canvas");return i.style.display="block",i}const Ga={};function Hi(i){i in Ga||(Ga[i]=!0,console.warn(i))}function tu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function nu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tn?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ka=[.64,.33,.3,.6,.15,.06],Ha=[.2126,.7152,.0722],Va=[.3127,.329],Wa=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[jt]:{primaries:ka,whitePoint:Va,transfer:zs,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:Ha,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:ka,whitePoint:Va,transfer:Qe,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:Ha,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let oi;class su{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Os("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ru=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xs(s[a].image)):r.push(Xs(s[a]))}else r=Xs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let au=0;class Pt extends Ui{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=nn,s=nn,r=ut,a=Qn,o=Nt,l=yn,u=Pt.DEFAULT_ANISOTROPY,c=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Ii(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=hl;Pt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,y=(m+1)/2,F=(f+1)/2,w=(c+d)/4,A=(h+v)/4,C=(g+p)/4;return b>y&&b>F?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):y>F?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=C/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=A/r,s=C/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-c)*(d-c));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-v)/T,this.z=(d-c)/T,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wl extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||u!==m||c!==g){let p=1-o;const f=l*d+u*m+c*g+h*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const F=Math.sqrt(b),w=Math.atan2(F,f*T);p=Math.sin(p*w)/F,o=Math.sin(o*w)/F}const y=o*T;if(l=l*p+d*y,u=u*p+m*y,c=c*p+g*y,h=h*p+v*y,p===1-o){const F=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=F,u*=F,c*=F,h*=F}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],c=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+c*h+l*m-u*d,e[t+1]=l*g+c*d+u*h-o*m,e[t+2]=u*g+c*m+o*d-l*h,e[t+3]=c*g-o*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(s/2),h=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"YXZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"ZXY":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"ZYX":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"YZX":this._x=d*c*h+u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h-d*m*g;break;case"XZY":this._x=d*c*h-u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-n*u,this._z=r*c+a*u+n*l-s*o,this._w=a*c-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),c=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*u+a*h-o*c,this.y=n+l*c+o*u-r*h,this.z=s+l*h+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new L,qa=new on;class Qi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(r,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),os.subVectors(this.max,Bi),li.subVectors(e.a,Bi),ci.subVectors(e.b,Bi),ui.subVectors(e.c,Bi),wn.subVectors(ci,li),An.subVectors(ui,ci),zn.subVectors(li,ui);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-zn.z,zn.y,wn.z,0,-wn.x,An.z,0,-An.x,zn.z,0,-zn.x,-wn.y,wn.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!Ys(t,li,ci,ui,os)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,li,ci,ui,os))?!1:(ls.crossVectors(wn,An),t=[ls.x,ls.y,ls.z],Ys(t,li,ci,ui,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],qt=new L,as=new Qi,li=new L,ci=new L,ui=new L,wn=new L,An=new L,zn=new L,Bi=new L,os=new L,ls=new L,Gn=new L;function Ys(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),u=t.dot(Gn),c=n.dot(Gn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const cu=new Qi,zi=new L,$s=new L;class ga{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add($s)),this.expandByPoint(zi.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,Ks=new L,cs=new L,Rn=new L,js=new L,us=new L,Zs=new L;class uu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ks.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Ks);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=Rn.dot(this.direction),l=-Rn.dot(cs),u=Rn.lengthSq(),c=Math.abs(1-a*a);let h,d,m,g;if(c>0)if(h=a*l-o,d=a*o-l,g=r*c,h>=0)if(d>=-g)if(d<=g){const v=1/c;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+u):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+u);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ks).addScaledVector(cs,d),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){js.subVectors(t,e),us.subVectors(n,e),Zs.crossVectors(js,us);let a=this.direction.dot(Zs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(us.crossVectors(Rn,us));if(l<0)return null;const u=o*this.direction.dot(js.cross(Rn));if(u<0||l+u>a)return null;const c=-o*Rn.dot(Zs);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,a,o,l,u,c,h,d,m,g,v,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,c,h,d,m,g,v,p)}set(e,t,n,s,r,a,o,l,u,c,h,d,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*c,m=a*h,g=o*c,v=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+g*u,t[5]=d-v*u,t[9]=-o*l,t[2]=v-d*u,t[6]=g+m*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,g=u*c,v=u*h;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,g=u*c,v=u*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*c,t[9]=v-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,m=a*h,g=o*c,v=o*h;t[0]=l*c,t[4]=g*u-m,t[8]=d*u+v,t[1]=l*h,t[5]=v*u+d,t[9]=m*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,g=o*l,v=o*u;t[0]=l*c,t[4]=v-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,m=a*u,g=o*l,v=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+v,t[5]=a*c,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*c,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,du)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Cn.crossVectors(n,Ut),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Cn.crossVectors(n,Ut)),Cn.normalize(),hs.crossVectors(Ut,Cn),s[0]=Cn.x,s[4]=hs.x,s[8]=Ut.x,s[1]=Cn.y,s[5]=hs.y,s[9]=Ut.y,s[2]=Cn.z,s[6]=hs.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],T=n[3],b=n[7],y=n[11],F=n[15],w=s[0],A=s[4],C=s[8],M=s[12],x=s[1],R=s[5],B=s[9],O=s[13],G=s[2],$=s[6],z=s[10],J=s[14],X=s[3],te=s[7],re=s[11],me=s[15];return r[0]=a*w+o*x+l*G+u*X,r[4]=a*A+o*R+l*$+u*te,r[8]=a*C+o*B+l*z+u*re,r[12]=a*M+o*O+l*J+u*me,r[1]=c*w+h*x+d*G+m*X,r[5]=c*A+h*R+d*$+m*te,r[9]=c*C+h*B+d*z+m*re,r[13]=c*M+h*O+d*J+m*me,r[2]=g*w+v*x+p*G+f*X,r[6]=g*A+v*R+p*$+f*te,r[10]=g*C+v*B+p*z+f*re,r[14]=g*M+v*O+p*J+f*me,r[3]=T*w+b*x+y*G+F*X,r[7]=T*A+b*R+y*$+F*te,r[11]=T*C+b*B+y*z+F*re,r[15]=T*M+b*O+y*J+F*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*h-s*u*h-r*o*d+n*u*d+s*o*m-n*l*m)+v*(+t*l*m-t*u*d+r*a*d-s*a*m+s*u*c-r*l*c)+p*(+t*u*h-t*o*m-r*a*h+n*a*m+r*o*c-n*u*c)+f*(-s*o*c-t*l*h+t*o*d+s*a*h-n*a*d+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],T=h*p*u-v*d*u+v*l*m-o*p*m-h*l*f+o*d*f,b=g*d*u-c*p*u-g*l*m+a*p*m+c*l*f-a*d*f,y=c*v*u-g*h*u+g*o*m-a*v*m-c*o*f+a*h*f,F=g*h*l-c*v*l-g*o*d+a*v*d+c*o*p-a*h*p,w=t*T+n*b+s*y+r*F;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(v*d*r-h*p*r-v*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(o*p*r-v*l*r+v*s*u-n*p*u-o*s*f+n*l*f)*A,e[3]=(h*l*r-o*d*r-h*s*u+n*d*u+o*s*m-n*l*m)*A,e[4]=b*A,e[5]=(c*p*r-g*d*r+g*s*m-t*p*m-c*s*f+t*d*f)*A,e[6]=(g*l*r-a*p*r-g*s*u+t*p*u+a*s*f-t*l*f)*A,e[7]=(a*d*r-c*l*r+c*s*u-t*d*u-a*s*m+t*l*m)*A,e[8]=y*A,e[9]=(g*h*r-c*v*r-g*n*m+t*v*m+c*n*f-t*h*f)*A,e[10]=(a*v*r-g*o*r+g*n*u-t*v*u-a*n*f+t*o*f)*A,e[11]=(c*o*r-a*h*r-c*n*u+t*h*u+a*n*m-t*o*m)*A,e[12]=F*A,e[13]=(c*v*s-g*h*s+g*n*d-t*v*d-c*n*p+t*h*p)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*A,e[15]=(a*h*s-c*o*s+c*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,c=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+n,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,c=a+a,h=o+o,d=r*u,m=r*c,g=r*h,v=a*c,p=a*h,f=o*h,T=l*u,b=l*c,y=l*h,F=n.x,w=n.y,A=n.z;return s[0]=(1-(v+f))*F,s[1]=(m+y)*F,s[2]=(g-b)*F,s[3]=0,s[4]=(m-y)*w,s[5]=(1-(d+f))*w,s[6]=(p+T)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(p-T)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const u=1/r,c=1/a,h=1/o;return Yt.elements[0]*=u,Yt.elements[1]*=u,Yt.elements[2]*=u,Yt.elements[4]*=c,Yt.elements[5]*=c,Yt.elements[6]*=c,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn){const l=this.elements,u=2*r/(t-e),c=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(o===Sn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn){const l=this.elements,u=1/(t-e),c=1/(n-s),h=1/(a-r),d=(t+e)*u,m=(n+s)*c;let g,v;if(o===Sn)g=(a+r)*h,v=-2*h;else if(o===Fs)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new L,Yt=new tt,hu=new L(0,0,0),du=new L(1,1,1),Cn=new L,hs=new L,Ut=new L,Ya=new tt,$a=new on;class Ht{constructor(e=0,t=0,n=0,s=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $a.setFromEuler(this),this.setFromQuaternion($a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fu=0;const Ka=new L,di=new on,dn=new tt,ds=new L,Gi=new L,pu=new L,mu=new on,ja=new L(1,0,0),Za=new L(0,1,0),Ja=new L(0,0,1),Qa={type:"added"},gu={type:"removed"},fi={type:"childadded",child:null},Js={type:"childremoved",child:null};class gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new L,t=new Ht,n=new on,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ge}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Gi,ds,this.up):dn.lookAt(ds,Gi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(dn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gu),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,mu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new L,fn=new L,Qs=new L,pn=new L,pi=new L,mi=new L,eo=new L,er=new L,tr=new L,nr=new L,ir=new lt,sr=new lt,rr=new lt;class Zt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),fn.subVectors(n,t),Qs.subVectors(e,t);const a=$t.dot($t),o=$t.dot(fn),l=$t.dot(Qs),u=fn.dot(fn),c=fn.dot(Qs),h=a*u-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(u*l-o*c)*d,g=(a*c-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ir.setScalar(0),sr.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ir,r.x),a.addScaledVector(sr,r.y),a.addScaledVector(rr,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),fn.subVectors(e,t),$t.cross(fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$t.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),er.subVectors(e,n);const l=pi.dot(er),u=mi.dot(er);if(l<=0&&u<=0)return t.copy(n);tr.subVectors(e,s);const c=pi.dot(tr),h=mi.dot(tr);if(c>=0&&h<=c)return t.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(pi,a);nr.subVectors(e,r);const m=pi.dot(nr),g=mi.dot(nr);if(g>=0&&m<=g)return t.copy(r);const v=m*u-l*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(mi,o);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return eo.subVectors(r,s),o=(h-c)/(h-c+(m-g)),t.copy(s).addScaledVector(eo,o);const f=1/(p+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=ma(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ar(a,r,e+1/3),this.g=ar(a,r,e),this.b=ar(a,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return qe.fromWorkingColorSpace(xt.copy(this),e),Math.round(Mt(xt.r*255,0,255))*65536+Math.round(Mt(xt.g*255,0,255))*256+Math.round(Mt(xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,s=xt.g,r=xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ct){qe.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,s=xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(fs);const n=qi(Dn.h,fs.h,t),s=qi(Dn.s,fs.s,t),r=qi(Dn.l,fs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Re;Re.NAMES=Rl;let _u=0;class es extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ii(),this.name="",this.blending=Ti,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=Sr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _a extends es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=vu();function vu(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,c=0;for(;(u&8388608)===0;)u<<=1,c-=8388608;u&=-8388609,c+=947912704,r[l]=u|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function xu(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Mt(i,-65504,65504),vn.floatView[0]=i;const e=vn.uint32View[0],t=e>>23&511;return vn.baseTable[t]+((e&8388607)>>vn.shiftTable[t])}function Su(i){const e=i>>10;return vn.uint32View[0]=vn.mantissaTable[vn.offsetTable[e]+(i&1023)]+vn.exponentTable[e],vn.floatView[0]}const Mu={toHalfFloat:xu,fromHalfFloat:Su},ct=new L,ps=new Fe;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class Cl extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const Bt=new tt,or=new gt,gi=new L,It=new Qi,ki=new Qi,pt=new L;class Vt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Dl:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,ki.min),It.expandByPoint(pt),pt.addVectors(It.max,ki.max),It.expandByPoint(pt)):(It.expandByPoint(ki.min),It.expandByPoint(ki.max))}It.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)pt.fromBufferAttribute(o,u),l&&(gi.fromBufferAttribute(e,u),pt.add(gi)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;const u=new L,c=new L,h=new L,d=new Fe,m=new Fe,g=new Fe,v=new L,p=new L;function f(C,M,x){u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),c.sub(u),h.sub(u),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(R),o[C].add(v),o[M].add(v),o[x].add(v),l[C].add(p),l[M].add(p),l[x].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,M=T.length;C<M;++C){const x=T[C],R=x.start,B=x.count;for(let O=R,G=R+B;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new L,y=new L,F=new L,w=new L;function A(C){F.fromBufferAttribute(s,C),w.copy(F);const M=o[C];b.copy(M),b.sub(F.multiplyScalar(F.dot(M))).normalize(),y.crossVectors(w,M);const R=y.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,M=T.length;C<M;++C){const x=T[C],R=x.start,B=x.count;for(let O=R,G=R+B;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,u=new L,c=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,p),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*c;for(let f=0;f<c;f++)d[g++]=u[m++]}return new Ft(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new tt,kn=new uu,ms=new ga,no=new L,gs=new L,_s=new L,vs=new L,lr=new L,xs=new L,io=new L,Ss=new L;class st extends gt{constructor(e=new Vt,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){xs.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],h=r[l];c!==0&&(lr.fromBufferAttribute(h,e),a?xs.addScaledVector(lr,c):xs.addScaledVector(lr.sub(t),c))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(ms.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ms,no)===null||kn.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(r).invert(),kn.copy(e.ray).applyMatrix4(to),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,F=b;y<F;y+=3){const w=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);s=Ms(this,f,e,n,u,c,h,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);s=Ms(this,a,e,n,u,c,h,T,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,F=b;y<F;y+=3){const w=y,A=y+1,C=y+2;s=Ms(this,f,e,n,u,c,h,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const T=p,b=p+1,y=p+2;s=Ms(this,a,e,n,u,c,h,T,b,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function bu(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===an,o),l===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ss);return u<t.near||u>t.far?null:{distance:u,point:Ss.clone(),object:i}}function Ms(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,gs),i.getVertexPosition(l,_s),i.getVertexPosition(u,vs);const c=bu(i,e,t,n,gs,_s,vs,io);if(c){const h=new L;Zt.getBarycoord(io,gs,_s,vs,h),s&&(c.uv=Zt.getInterpolatedAttribute(s,o,l,u,h,new Fe)),r&&(c.uv1=Zt.getInterpolatedAttribute(r,o,l,u,h,new Fe)),a&&(c.normal=Zt.getInterpolatedAttribute(a,o,l,u,h,new L),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new L,materialIndex:0};Zt.getNormal(gs,_s,vs,d.normal),c.face=d,c.barycoord=h}return c}class si extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2));function g(v,p,f,T,b,y,F,w,A,C,M){const x=y/A,R=F/C,B=y/2,O=F/2,G=w/2,$=A+1,z=C+1;let J=0,X=0;const te=new L;for(let re=0;re<z;re++){const me=re*R-O;for(let Le=0;Le<$;Le++){const Ve=Le*x-B;te[v]=Ve*T,te[p]=me*b,te[f]=G,u.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[f]=w>0?1:-1,c.push(te.x,te.y,te.z),h.push(Le/A),h.push(1-re/C),J+=1}}for(let re=0;re<C;re++)for(let me=0;me<A;me++){const Le=d+me+$*re,Ve=d+me+$*(re+1),K=d+(me+1)+$*(re+1),ee=d+(me+1)+$*re;l.push(Le,Ve,ee),l.push(Ve,K,ee),X+=6}o.addGroup(m,X,M),m+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const s in n)e[s]=n[s]}return e}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Tu={clone:Li,merge:Tt};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ht extends es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new L,so=new Fe,ro=new Fe;class zt extends Ll{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,so,ro),t.subVectors(ro,so)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Ru extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new zt(_i,vi,e,t);r.layers=this.layers,this.add(r);const a=new zt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new zt(_i,vi,e,t);o.layers=this.layers,this.add(o);const l=new zt(_i,vi,e,t);l.layers=this.layers,this.add(l);const u=new zt(_i,vi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const u of t)this.remove(u);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ul extends Pt{constructor(e,t,n,s,r,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ul(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Nn});r.uniforms.tEquirect.value=t;const a=new st(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=ut),new Ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const cr=new L,Du=new L,Pu=new Ge;class Kn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cr.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pu.getNormalMatrix(e),s=this.coplanarPoint(cr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ga,ys=new L;class va{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],T=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-r,d-u,p-m,y-f).normalize(),n[1].setComponents(l+r,d+u,p+m,y+f).normalize(),n[2].setComponents(l+a,d+c,p+g,y+T).normalize(),n[3].setComponents(l-a,d-c,p-g,y-T).normalize(),n[4].setComponents(l-o,d-h,p-v,y-b).normalize(),t===Sn)n[5].setComponents(l+o,d+h,p+v,y+b).normalize();else if(t===Fs)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Il(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lu(i){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,h=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,c),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,u){const c=l.array,h=l.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,c);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];i.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}class bn extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,c=l+1,h=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<c;f++){const T=f*d-a;for(let b=0;b<u;b++){const y=b*h-r;g.push(y,-T,0),v.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const b=T+u*f,y=T+u*(f+1),F=T+1+u*(f+1),w=T+1+u*f;m.push(b,y,w),m.push(y,F,w)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nh=`#define PI 3.141592653589793
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Ph=`struct PhysicalMaterial {
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
}`,Lh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,td=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_d=`float getShadowMask() {
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,zd=`#if DEPTH_PACKING == 3200
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
}`,Gd=`#define DISTANCE
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
}`,kd=`#define DISTANCE
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,Zd=`#define MATCAP
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
}`,Jd=`#define NORMAL
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
}`,Qd=`#define NORMAL
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
}`,ef=`#define PHONG
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
}`,tf=`#define PHONG
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
}`,nf=`#define STANDARD
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
}`,sf=`#define STANDARD
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
}`,rf=`#define TOON
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
}`,af=`#define TOON
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
}`,of=`uniform float size;
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#include <common>
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
}`,uf=`uniform vec3 color;
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
}`,hf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Uu,alphahash_pars_fragment:Iu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:Gu,batching_pars_vertex:ku,batching_vertex:Hu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:eh,color_vertex:th,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:uh,envmap_fragment:hh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:Th,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:xh,gradientmap_pars_fragment:Sh,lightmap_pars_fragment:Mh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:bh,lights_pars_begin:Eh,lights_toon_fragment:wh,lights_toon_pars_fragment:Ah,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Dh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Lh,lights_fragment_maps:Uh,lights_fragment_end:Ih,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:Gh,map_particle_fragment:kh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:Kh,normal_fragment_begin:jh,normal_fragment_maps:Zh,normal_pars_fragment:Jh,normal_pars_vertex:Qh,normal_vertex:ed,normalmap_pars_fragment:td,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:ud,dithering_pars_fragment:hd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:Sd,skinnormal_vertex:Md,specularmap_fragment:yd,specularmap_pars_fragment:bd,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:wd,transmission_pars_fragment:Ad,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Dd,worldpos_vertex:Pd,background_vert:Ld,background_frag:Ud,backgroundCube_vert:Id,backgroundCube_frag:Nd,cube_vert:Fd,cube_frag:Od,depth_vert:Bd,depth_frag:zd,distanceRGBA_vert:Gd,distanceRGBA_frag:kd,equirect_vert:Hd,equirect_frag:Vd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:$d,meshlambert_frag:Kd,meshmatcap_vert:jd,meshmatcap_frag:Zd,meshnormal_vert:Jd,meshnormal_frag:Qd,meshphong_vert:ef,meshphong_frag:tf,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:uf,sprite_vert:hf,sprite_frag:df},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},en={basic:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const bs={r:0,b:0,g:0},Vn=new Ht,ff=new tt;function pf(i,e,t,n,s,r,a){const o=new Re(0);let l=r===!0?0:1,u,c,h=null,d=0,m=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function v(T){let b=!1;const y=g(T);y===null?f(o,l):y&&y.isColor&&(f(y,1),b=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===Bs)?(c===void 0&&(c=new st(new si(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:Li(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Vn.copy(b.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Vn)),c.material.toneMapped=qe.getTransfer(y.colorSpace)!==Qe,(h!==y||d!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new st(new bn(2,2),new ht({name:"BackgroundMaterial",uniforms:Li(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=qe.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function f(T,b){T.getRGB(bs,Pl(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:v,addToRenderList:p}}function mf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,R,B,O,G){let $=!1;const z=h(O,B,R);r!==z&&(r=z,u(r.object)),$=m(x,O,B,G),$&&g(x,O,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(x,R,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function c(x){return i.deleteVertexArray(x)}function h(x,R,B){const O=B.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let $=G[R.id];$===void 0&&($={},G[R.id]=$);let z=$[O];return z===void 0&&(z=d(l()),$[O]=z),z}function d(x){const R=[],B=[],O=[];for(let G=0;G<t;G++)R[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:O,object:x,attributes:{},index:null}}function m(x,R,B,O){const G=r.attributes,$=R.attributes;let z=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){const re=G[X];let me=$[X];if(me===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function g(x,R,B,O){const G={},$=R.attributes;let z=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){let re=$[X];re===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(re=x.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),G[X]=me,z++}r.attributes=G,r.attributesNum=z,r.index=O}function v(){const x=r.newAttributes;for(let R=0,B=x.length;R<B;R++)x[R]=0}function p(x){f(x,0)}function f(x,R){const B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),G[x]!==R&&(i.vertexAttribDivisor(x,R),G[x]=R)}function T(){const x=r.newAttributes,R=r.enabledAttributes;for(let B=0,O=R.length;B<O;B++)R[B]!==x[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function b(x,R,B,O,G,$,z){z===!0?i.vertexAttribIPointer(x,R,B,G,$):i.vertexAttribPointer(x,R,B,O,G,$)}function y(x,R,B,O){v();const G=O.attributes,$=B.getAttributes(),z=R.defaultAttributeValues;for(const J in $){const X=$[J];if(X.location>=0){let te=G[J];if(te===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const re=te.normalized,me=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const Ve=Le.buffer,K=Le.type,ee=Le.bytesPerElement,pe=K===i.INT||K===i.UNSIGNED_INT||te.gpuType===ca;if(te.isInterleavedBufferAttribute){const ae=te.data,ye=ae.stride,Ce=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)f(X.location+Ue,ae.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)p(X.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ue=0;Ue<X.locationSize;Ue++)b(X.location+Ue,me/X.locationSize,K,re,ye*ee,(Ce+me/X.locationSize*Ue)*ee,pe)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)f(X.location+ae,te.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<X.locationSize;ae++)p(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ae=0;ae<X.locationSize;ae++)b(X.location+ae,me/X.locationSize,K,re,me*ee,me/X.locationSize*ae*ee,pe)}}else if(z!==void 0){const re=z[J];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}T()}function F(){C();for(const x in n){const R=n[x];for(const B in R){const O=R[B];for(const G in O)c(O[G].object),delete O[G];delete R[B]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const B in R){const O=R[B];for(const G in O)c(O[G].object),delete O[G];delete R[B]}delete n[x.id]}function A(x){for(const R in n){const B=n[R];if(B[x.id]===void 0)continue;const O=B[x.id];for(const G in O)c(O[G].object),delete O[G];delete B[x.id]}}function C(){M(),a=!0,r!==s&&(r=s,u(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function gf(i,e,t){let n;function s(u){n=u}function r(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function a(u,c,h){h!==0&&(i.drawArraysInstanced(n,u,c,h),t.update(c,n,h))}function o(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let m=0;for(let g=0;g<h;g++)m+=c[g];t.update(m,n,1)}function l(u,c,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],c[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=c[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _f(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Nt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:F,maxSamples:w}}function vf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Kn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?c(null):u();else{const T=r?0:n,b=T*4;let y=f.clippingState||null;l.value=y,y=c(g,d,b,m);for(let F=0;F!==b;++F)y[F]=t[F];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,y=m;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function xf(i){let e=new WeakMap;function t(a,o){return o===Rr?a.mapping=Ri:o===Cr&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rr||o===Cr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Cu(l.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ts extends Ll{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,ao=[.125,.215,.35,.446,.526,.582],Jn=20,ur=new ts,oo=new Re;let hr=null,dr=0,fr=0,pr=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,lo=[new L(-jn,xi,0),new L(jn,xi,0),new L(-xi,0,jn),new L(xi,0,jn),new L(0,jn,-xi),new L(0,jn,xi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hr,dr,fr),this._renderer.xr.enabled=pr,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:rn,format:Nt,colorSpace:jt,depthBuffer:!1},s=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=Mf(r,e,t)}return s}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,n,s){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(oo),c.toneMapping=Fn,c.autoClear=!1;const m=new _a({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new st(new si,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(oo),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(u[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,u[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,u[f]));const b=this._cubeSize;Es(s,T*b,f>2?b:0,b,b),c.setRenderTarget(s),v&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lo[(s-r-1)%lo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new st(this._lodPlanes[s],u),d=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),v=r/g,p=isFinite(r)?1+Math.floor(c*v):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const f=[];let T=0;for(let A=0;A<Jn;++A){const C=A/v,M=Math.exp(-C*C/2);f.push(M),A===0?T+=M:A<p&&(T+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const y=this._sizeLods[s],F=3*y*(s>b-Ei?s-b+Ei:0),w=4*(this._cubeSize-y);Es(t,F,w,3*y,2*y),l.setRenderTarget(t),l.render(h,ur)}}function Sf(i){const e=[],t=[],n=[];let s=i;const r=i-Ei+1+ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ei?l=ao[a-i+Ei-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,v=3,p=2,f=1,T=new Float32Array(v*g*m),b=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];T.set(M,v*g*w),b.set(d,p*g*w);const x=[w,w,w,w,w,w];y.set(x,f*g*w)}const F=new Vt;F.setAttribute("position",new Ft(T,v)),F.setAttribute("uv",new Ft(b,p)),F.setAttribute("faceIndex",new Ft(y,f)),e.push(F),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uo(i,e,t){const n=new kt(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mf(i,e,t){const n=new Float32Array(Jn),s=new L(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ho(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function fo(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function yf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Rr||l===Cr,c=l===Ri||l===Ci;if(u||c){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new co(i)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return u&&m&&m.height>0||c&&m&&s(m)?(t===null&&(t=new co(i)),h=u?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ef(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let b=0,y=T.length;b<y;b+=3){const F=T[b+0],w=T[b+1],A=T[b+2];d.push(F,w,w,A,A,F)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,y=T.length/3-1;b<y;b+=3){const F=b+0,w=b+1,A=b+2;d.push(F,w,w,A,A,F)}}else return;const p=new(El(d)?Dl:Cl)(d,1);p.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function Tf(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function u(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),t.update(m,n,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function h(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)u(d[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=m[T]*v[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function wf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Af(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,F=1;y>e.maxTextureSize&&(F=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*F*4*h),A=new wl(w,y,F,h);A.type=xn,A.needsUpdate=!0;const C=b*4;for(let x=0;x<h;x++){const R=p[x],B=f[x],O=T[x],G=y*F*4*x;for(let $=0;$<R.count;$++){const z=$*C;m===!0&&(s.fromBufferAttribute(R,$),w[G+z+0]=s.x,w[G+z+1]=s.y,w[G+z+2]=s.z,w[G+z+3]=0),g===!0&&(s.fromBufferAttribute(B,$),w[G+z+4]=s.x,w[G+z+5]=s.y,w[G+z+6]=s.z,w[G+z+7]=0),v===!0&&(s.fromBufferAttribute(O,$),w[G+z+8]=s.x,w[G+z+9]=s.y,w[G+z+10]=s.z,w[G+z+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Fe(y,F)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<u.length;v++)m+=u[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rf(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}class Sa extends Pt{constructor(e,t,n,s,r,a,o,l,u,c=ii){if(c!==ii&&c!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ii&&(n=On),n===void 0&&c===Pi&&(n=Di),super(null,s,r,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nl=new Pt,po=new Sa(1,1),Fl=new wl,Ol=new lu,Bl=new Ul,mo=[],go=[],_o=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mo[s];if(r===void 0&&(r=new Float32Array(s),mo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=go[e];t===void 0&&(t=new Int32Array(e),go[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;xo.set(n),i.uniformMatrix2fv(this.addr,!1,xo),ft(t,n)}}function If(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),ft(t,n)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;_o.set(n),i.uniformMatrix4fv(this.addr,!1,_o),ft(t,n)}}function Ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Wf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(po.compareFunction=bl,r=po):r=Nl,t.setTexture2D(e||r,s)}function Xf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ol,s)}function qf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bl,s)}function Yf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fl,s)}function $f(i){switch(i){case 5126:return Cf;case 35664:return Df;case 35665:return Pf;case 35666:return Lf;case 35674:return Uf;case 35675:return If;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return Gf;case 36294:return kf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}function Kf(i,e){i.uniform1fv(this.addr,e)}function jf(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Zf(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Jf(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Qf(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ep(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tp(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function np(i,e){i.uniform1iv(this.addr,e)}function ip(i,e){i.uniform2iv(this.addr,e)}function sp(i,e){i.uniform3iv(this.addr,e)}function rp(i,e){i.uniform4iv(this.addr,e)}function ap(i,e){i.uniform1uiv(this.addr,e)}function op(i,e){i.uniform2uiv(this.addr,e)}function lp(i,e){i.uniform3uiv(this.addr,e)}function cp(i,e){i.uniform4uiv(this.addr,e)}function up(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Nl,r[a])}function hp(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ol,r[a])}function dp(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bl,r[a])}function fp(i,e,t){const n=this.cache,s=e.length,r=Gs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Fl,r[a])}function pp(i){switch(i){case 5126:return Kf;case 35664:return jf;case 35665:return Zf;case 35666:return Jf;case 35674:return Qf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$f(t.type)}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pp(t.type)}}class _p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function So(i,e){i.seq.push(e),i.map[e.id]=e}function vp(i,e,t){const n=i.name,s=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),a=mr.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){So(t,u===void 0?new mp(o,i,e):new gp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new _p(o),So(t,h)),t=h}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xp=37297;let Sp=0;function Mp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const yo=new Ge;function yp(i){qe._getMatrix(yo,qe.workingColorSpace,i);const e=`mat3( ${yo.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(e),a)}else return s}function bp(i,e){const t=yp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ep(i,e){let t;switch(e){case Mc:t="Linear";break;case yc:t="Reinhard";break;case bc:t="Cineon";break;case ul:t="ACESFilmic";break;case Tc:t="AgX";break;case wc:t="Neutral";break;case Ec:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new L;function Tp(){qe.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function Ap(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vi(i){return i!==""}function Eo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function To(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Cp,Pp)}const Dp=new Map;function Pp(i,e){let t=ke[e];if(t===void 0){const n=Dp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(i){return i.replace(Lp,Up)}function Up(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ao(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ip(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===la?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Is?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Np(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Op(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case Sc:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ip(t),u=Np(t),c=Fp(t),h=Op(t),d=Bp(t),m=wp(t),g=Ap(r),v=s.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),f.length>0&&(f+=`
`)):(p=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),f=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=ia(a),a=Eo(a,t),a=To(a,t),o=ia(o),o=Eo(o,t),o=To(o,t),a=wo(a),o=wo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+p+a,y=T+f+o,F=Mo(s,s.VERTEX_SHADER,b),w=Mo(s,s.FRAGMENT_SHADER,y);s.attachShader(v,F),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(F).trim(),G=s.getShaderInfoLog(w).trim();let $=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,w);else{const J=bo(s,F,"vertex"),X=bo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+J+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(z=!1);z&&(R.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:f}})}s.deleteShader(F),s.deleteShader(w),C=new Ls(s,v),M=Rp(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,xp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=w,this}let Gp=0;class kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hp(e),t.set(e,n)),n}}class Hp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function Vp(i,e,t,n,s,r,a){const o=new Al,l=new kp,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return u.add(M),M===0?"uv":`uv${M}`}function p(M,x,R,B,O){const G=B.fog,$=O.geometry,z=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),X=J&&J.mapping===Bs?J.image.height:null,te=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=re!==void 0?re.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ve,K,ee,pe;if(te){const Je=en[te];Ve=Je.vertexShader,K=Je.fragmentShader}else Ve=M.vertexShader,K=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const ae=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,je=!!M.map,Oe=!!M.matcap,rt=!!J,I=!!M.aoMap,bt=!!M.lightMap,We=!!M.bumpMap,He=!!M.normalMap,be=!!M.displacementMap,Ze=!!M.emissiveMap,Te=!!M.metalnessMap,E=!!M.roughnessMap,_=M.anisotropy>0,P=M.clearcoat>0,k=M.dispersion>0,q=M.iridescence>0,V=M.sheen>0,ie=M.transmission>0,Q=_&&!!M.anisotropyMap,se=P&&!!M.clearcoatMap,Ee=P&&!!M.clearcoatNormalMap,Z=P&&!!M.clearcoatRoughnessMap,oe=q&&!!M.iridescenceMap,ge=q&&!!M.iridescenceThicknessMap,Me=V&&!!M.sheenColorMap,le=V&&!!M.sheenRoughnessMap,De=!!M.specularMap,we=!!M.specularColorMap,Ae=!!M.specularIntensityMap,D=ie&&!!M.transmissionMap,ce=ie&&!!M.thicknessMap,Y=!!M.gradientMap,j=!!M.alphaMap,he=M.alphaTest>0,de=!!M.alphaHash,Be=!!M.extensions;let at=Fn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(at=i.toneMapping);const _t={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:K,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:jt,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Oe,envMap:rt,envMapMode:rt&&J.mapping,envMapCubeUVHeight:X,aoMap:I,lightMap:bt,bumpMap:We,normalMap:He,displacementMap:d&&be,emissiveMap:Ze,normalMapObjectSpace:He&&M.normalMapType===Dc,normalMapTangentSpace:He&&M.normalMapType===yl,metalnessMap:Te,roughnessMap:E,anisotropy:_,anisotropyMap:Q,clearcoat:P,clearcoatMap:se,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Z,dispersion:k,iridescence:q,iridescenceMap:oe,iridescenceThicknessMap:ge,sheen:V,sheenColorMap:Me,sheenRoughnessMap:le,specularMap:De,specularColorMap:we,specularIntensityMap:Ae,transmission:ie,transmissionMap:D,thicknessMap:ce,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Ti&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:de,combine:M.combine,mapUv:je&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:bt&&v(M.lightMap.channel),bumpMapUv:We&&v(M.bumpMap.channel),normalMapUv:He&&v(M.normalMap.channel),displacementMapUv:be&&v(M.displacementMap.channel),emissiveMapUv:Ze&&v(M.emissiveMap.channel),metalnessMapUv:Te&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:Q&&v(M.anisotropyMap.channel),clearcoatMapUv:se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:le&&v(M.sheenRoughnessMap.channel),specularMapUv:De&&v(M.specularMap.channel),specularColorMapUv:we&&v(M.specularColorMap.channel),specularIntensityMapUv:Ae&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:ce&&v(M.thicknessMap.channel),alphaMapUv:j&&v(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(He||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(je||j),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:Ze&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gt,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _t.vertexUv1s=u.has(1),_t.vertexUv2s=u.has(2),_t.vertexUv3s=u.has(3),u.clear(),_t}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(T(x,M),b(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const x=g[M.type];let R;if(x){const B=en[x];R=Tu.clone(B.uniforms)}else R=M.uniforms;return R}function F(M,x){let R;for(let B=0,O=c.length;B<O;B++){const G=c[B];if(G.cacheKey===x){R=G,++R.usedTimes;break}}return R===void 0&&(R=new zp(i,x,M,r),c.push(R)),R}function w(M){if(--M.usedTimes===0){const x=c.indexOf(M);c[x]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:F,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:C}}function Wp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ro(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Co(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,g,v,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function o(h,d,m,g,v,p){const f=a(h,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,d,m,g,v,p){const f=a(h,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||Xp),n.length>1&&n.sort(d||Ro),s.length>1&&s.sort(d||Ro)}function c(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function qp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Co,i.set(n,[a])):s>=r.length?(a=new Co,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kp=0;function jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zp(i){const e=new Yp,t=$p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);const s=new L,r=new tt,a=new tt;function o(u){let c=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,T=0,b=0,y=0,F=0,w=0,A=0;u.sort(jp);for(let M=0,x=u.length;M<x;M++){const R=u[M],B=R.color,O=R.intensity,G=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=B.r*O,h+=B.g*O,d+=B.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);A++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,X=t.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=R.shadow.matrix,T++}n.directional[m]=z,m++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[v]=z;const J=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,J.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=$,y++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const J=R.shadow,X=t.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==T||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==F||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+F-w,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=T,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=F,C.numLightProbes=A,n.version=Kp++)}function l(u,c){let h=0,d=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let f=0,T=u.length;f<T;f++){const b=u[f];if(b.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Do(i){const e=new Zp(i),t=[],n=[];function s(c){u.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Do(i),e.set(s,[o])):r>=a.length?(o=new Do(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qp extends es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
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
}`;function im(i,e,t){let n=new va;const s=new Fe,r=new Fe,a=new lt,o=new Qp({depthPacking:Cc}),l=new em,u={},c=t.maxTextureSize,h={[an]:Dt,[Dt]:an,[Gt]:Gt},d=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new st(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let f=this.type;this.render=function(w,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Nn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==gn&&this.type===gn,G=f===gn&&this.type!==gn;for(let $=0,z=w.length;$<z;$++){const J=w[$],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const te=X.getFrameExtents();if(s.multiply(te),r.copy(X.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/te.x),s.x=r.x*te.x,X.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/te.y),s.y=r.y*te.y,X.mapSize.y=r.y)),X.map===null||O===!0||G===!0){const me=this.type!==gn?{minFilter:Jt,magFilter:Jt}:{};X.map!==null&&X.map.dispose(),X.map=new kt(s.x,s.y,me),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const re=X.getViewportCount();for(let me=0;me<re;me++){const Le=X.getViewport(me);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),B.viewport(a),X.updateMatrices(J,me),n=X.getFrustum(),y(A,C,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&T(X,C),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,R)};function T(w,A){const C=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kt(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,m,v,null)}function b(w,A,C,M){let x=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=x.uuid,O=A.uuid;let G=u[B];G===void 0&&(G={},u[B]=G);let $=G[O];$===void 0&&($=x.clone(),G[O]=$,A.addEventListener("dispose",F)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,M===gn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=C}return x}function y(w,A,C,M,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const $=O.groups;for(let z=0,J=$.length;z<J;z++){const X=$[z],te=G[X.materialIndex];if(te&&te.visible){const re=b(w,te,M,x);w.onBeforeShadow(i,w,A,C,O,re,X),i.renderBufferDirect(C,null,O,re,w,X),w.onAfterShadow(i,w,A,C,O,re,X)}}}else if(G.visible){const $=b(w,G,M,x);w.onBeforeShadow(i,w,A,C,O,$,null),i.renderBufferDirect(C,null,O,$,w,null),w.onAfterShadow(i,w,A,C,O,$,null)}}const B=w.children;for(let O=0,G=B.length;O<G;O++)y(B[O],A,C,M,x)}function F(w){w.target.removeEventListener("dispose",F);for(const C in u){const M=u[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const sm={[Mr]:yr,[br]:wr,[Er]:Ar,[Ai]:Tr,[yr]:Mr,[wr]:br,[Ar]:Er,[Tr]:Ai};function rm(i,e){function t(){let D=!1;const ce=new lt;let Y=null;const j=new lt(0,0,0,0);return{setMask:function(he){Y!==he&&!D&&(i.colorMask(he,he,he,he),Y=he)},setLocked:function(he){D=he},setClear:function(he,de,Be,at,_t){_t===!0&&(he*=at,de*=at,Be*=at),ce.set(he,de,Be,at),j.equals(ce)===!1&&(i.clearColor(he,de,Be,at),j.copy(ce))},reset:function(){D=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Y=null,j=null,he=null;return{setReversed:function(de){if(ce!==de){const Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const at=he;he=null,this.setClear(at)}ce=de},getReversed:function(){return ce},setTest:function(de){de?ae(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(de){Y!==de&&!D&&(i.depthMask(de),Y=de)},setFunc:function(de){if(ce&&(de=sm[de]),j!==de){switch(de){case Mr:i.depthFunc(i.NEVER);break;case yr:i.depthFunc(i.ALWAYS);break;case br:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Tr:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case Ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=de}},setLocked:function(de){D=de},setClear:function(de){he!==de&&(ce&&(de=1-de),i.clearDepth(de),he=de)},reset:function(){D=!1,Y=null,j=null,he=null,ce=!1}}}function s(){let D=!1,ce=null,Y=null,j=null,he=null,de=null,Be=null,at=null,_t=null;return{setTest:function(Je){D||(Je?ae(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!D&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,Wt,ln){(Y!==Je||j!==Wt||he!==ln)&&(i.stencilFunc(Je,Wt,ln),Y=Je,j=Wt,he=ln)},setOp:function(Je,Wt,ln){(de!==Je||Be!==Wt||at!==ln)&&(i.stencilOp(Je,Wt,ln),de=Je,Be=Wt,at=ln)},setLocked:function(Je){D=Je},setClear:function(Je){_t!==Je&&(i.clearStencil(Je),_t=Je)},reset:function(){D=!1,ce=null,Y=null,j=null,he=null,de=null,Be=null,at=null,_t=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,T=null,b=null,y=null,F=null,w=null,A=new Re(0,0,0),C=0,M=!1,x=null,R=null,B=null,O=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=J>=2);let te=null,re={};const me=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ve=new lt().fromArray(me),K=new lt().fromArray(Le);function ee(D,ce,Y,j){const he=new Uint8Array(4),de=i.createTexture();i.bindTexture(D,de),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Y;Be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ce+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return de}const pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ai),We(!1),He(Ua),ae(i.CULL_FACE),I(Nn);function ae(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ye(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ce(D,ce){return h[D]!==ce?(i.bindFramebuffer(D,ce),h[D]=ce,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ue(D,ce){let Y=m,j=!1;if(D){Y=d.get(ce),Y===void 0&&(Y=[],d.set(ce,Y));const he=D.textures;if(Y.length!==he.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Be=he.length;de<Be;de++)Y[de]=i.COLOR_ATTACHMENT0+de;Y.length=he.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function je(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Oe={[Zn]:i.FUNC_ADD,[nc]:i.FUNC_SUBTRACT,[ic]:i.FUNC_REVERSE_SUBTRACT};Oe[sc]=i.MIN,Oe[rc]=i.MAX;const rt={[ac]:i.ZERO,[oc]:i.ONE,[lc]:i.SRC_COLOR,[xr]:i.SRC_ALPHA,[pc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[fc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[mc]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[_c]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ce,Y,j,he,de,Be,at,_t,Je){if(D===Nn){v===!0&&(ye(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),D!==tc){if(D!==p||Je!==M){if((f!==Zn||y!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,y=Zn),Je)switch(D){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Na:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Na:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,F=null,w=null,A.set(0,0,0),C=0,p=D,M=Je}return}he=he||ce,de=de||Y,Be=Be||j,(ce!==f||he!==y)&&(i.blendEquationSeparate(Oe[ce],Oe[he]),f=ce,y=he),(Y!==T||j!==b||de!==F||Be!==w)&&(i.blendFuncSeparate(rt[Y],rt[j],rt[de],rt[Be]),T=Y,b=j,F=de,w=Be),(at.equals(A)===!1||_t!==C)&&(i.blendColor(at.r,at.g,at.b,_t),A.copy(at),C=_t),p=D,M=!1}function bt(D,ce){D.side===Gt?ye(i.CULL_FACE):ae(i.CULL_FACE);let Y=D.side===Dt;ce&&(Y=!Y),We(Y),D.blending===Ti&&D.transparent===!1?I(Nn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function He(D){D!==Jl?(ae(i.CULL_FACE),D!==R&&(D===Ua?i.cullFace(i.BACK):D===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),R=D}function be(D){D!==B&&(z&&i.lineWidth(D),B=D)}function Ze(D,ce,Y){D?(ae(i.POLYGON_OFFSET_FILL),(O!==ce||G!==Y)&&(i.polygonOffset(ce,Y),O=ce,G=Y)):ye(i.POLYGON_OFFSET_FILL)}function Te(D){D?ae(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+$-1),te!==D&&(i.activeTexture(D),te=D)}function _(D,ce,Y){Y===void 0&&(te===null?Y=i.TEXTURE0+$-1:Y=te);let j=re[Y];j===void 0&&(j={type:void 0,texture:void 0},re[Y]=j),(j.type!==D||j.texture!==ce)&&(te!==Y&&(i.activeTexture(Y),te=Y),i.bindTexture(D,ce||pe[D]),j.type=D,j.texture=ce)}function P(){const D=re[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(D){Ve.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function le(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function De(D,ce){let Y=u.get(ce);Y===void 0&&(Y=new WeakMap,u.set(ce,Y));let j=Y.get(D);j===void 0&&(j=i.getUniformBlockIndex(ce,D.name),Y.set(D,j))}function we(D,ce){const j=u.get(ce).get(D);l.get(ce)!==j&&(i.uniformBlockBinding(ce,j,D.__bindingPointIndex),l.set(ce,j))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},te=null,re={},h={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,T=null,b=null,y=null,F=null,w=null,A=new Re(0,0,0),C=0,M=!1,x=null,R=null,B=null,O=null,G=null,Ve.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ye,bindFramebuffer:Ce,drawBuffers:Ue,useProgram:je,setBlending:I,setMaterial:bt,setFlipSided:We,setCullFace:He,setLineWidth:be,setPolygonOffset:Ze,setScissorTest:Te,activeTexture:E,bindTexture:_,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:q,texImage2D:oe,texImage3D:ge,updateUBOMapping:De,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:Z,texSubImage2D:V,texSubImage3D:ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:se,scissor:Me,viewport:le,reset:Ae}}function Po(i,e,t,n){const s=am(n);switch(t){case ml:return i*e;case _l:return i*e;case vl:return i*e*2;case xl:return i*e/s.components*s.byteLength;case da:return i*e/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case fa:return i*e*2/s.components*s.byteLength;case gl:return i*e*3/s.components*s.byteLength;case Nt:return i*e*4/s.components*s.byteLength;case pa:return i*e*4/s.components*s.byteLength;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lr:case Ir:return Math.max(i,16)*Math.max(e,8)/4;case Pr:case Ur:return Math.max(i,8)*Math.max(e,8)/2;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $r:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ps:case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ml:case ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function am(i){switch(i){case yn:case dl:return{byteLength:1,components:1};case Zi:case fl:case rn:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case On:case ca:case xn:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function om(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Os("canvas")}function v(E,_,P){let k=1;const q=Te(E);if((q.width>P||q.height>P)&&(k=P/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(k*q.width),ie=Math.floor(k*q.height);h===void 0&&(h=g(V,ie));const Q=_?g(V,ie):h;return Q.width=V,Q.height=ie,Q.getContext("2d").drawImage(E,0,0,V,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+V+"x"+ie+")."),Q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,P,k,q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===i.RED&&(P===i.FLOAT&&(V=i.R32F),P===i.HALF_FLOAT&&(V=i.R16F),P===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.R8UI),P===i.UNSIGNED_SHORT&&(V=i.R16UI),P===i.UNSIGNED_INT&&(V=i.R32UI),P===i.BYTE&&(V=i.R8I),P===i.SHORT&&(V=i.R16I),P===i.INT&&(V=i.R32I)),_===i.RG&&(P===i.FLOAT&&(V=i.RG32F),P===i.HALF_FLOAT&&(V=i.RG16F),P===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RG8UI),P===i.UNSIGNED_SHORT&&(V=i.RG16UI),P===i.UNSIGNED_INT&&(V=i.RG32UI),P===i.BYTE&&(V=i.RG8I),P===i.SHORT&&(V=i.RG16I),P===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RGB8UI),P===i.UNSIGNED_SHORT&&(V=i.RGB16UI),P===i.UNSIGNED_INT&&(V=i.RGB32UI),P===i.BYTE&&(V=i.RGB8I),P===i.SHORT&&(V=i.RGB16I),P===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),P===i.UNSIGNED_INT&&(V=i.RGBA32UI),P===i.BYTE&&(V=i.RGBA8I),P===i.SHORT&&(V=i.RGBA16I),P===i.INT&&(V=i.RGBA32I)),_===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),_===i.RGBA){const ie=q?zs:qe.getTransfer(k);P===i.FLOAT&&(V=i.RGBA32F),P===i.HALF_FLOAT&&(V=i.RGBA16F),P===i.UNSIGNED_BYTE&&(V=ie===Qe?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(E,_){let P;return E?_===null||_===On||_===Di?P=i.DEPTH24_STENCIL8:_===xn?P=i.DEPTH32F_STENCIL8:_===Zi&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===Di?P=i.DEPTH_COMPONENT24:_===xn?P=i.DEPTH_COMPONENT32F:_===Zi&&(P=i.DEPTH_COMPONENT16),P}function F(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==ut?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),C(_),_.isVideoTexture&&c.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),x(_)}function C(E){const _=n.get(E);if(_.__webglInit===void 0)return;const P=E.source,k=d.get(P);if(k){const q=k[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&M(E),Object.keys(k).length===0&&d.delete(P)}n.remove(E)}function M(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const P=E.source,k=d.get(P);delete k[_.__cacheKey],a.memory.textures--}function x(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let q=0;q<_.__webglFramebuffer[k].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[k][q]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=E.textures;for(let k=0,q=P.length;k<q;k++){const V=n.get(P[k]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(P[k])}n.remove(E)}let R=0;function B(){R=0}function O(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const P=n.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(P,E,_);return}}t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+_)}function z(E,_){const P=n.get(E);if(E.version>0&&P.__version!==E.version){K(P,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+_)}function J(E,_){const P=n.get(E);if(E.version>0&&P.__version!==E.version){K(P,E,_);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+_)}function X(E,_){const P=n.get(E);if(E.version>0&&P.__version!==E.version){ee(P,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+_)}const te={[Ns]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},re={[Jt]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[ut]:i.LINEAR,[Vs]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},me={[Pc]:i.NEVER,[Oc]:i.ALWAYS,[Lc]:i.LESS,[bl]:i.LEQUAL,[Uc]:i.EQUAL,[Fc]:i.GEQUAL,[Ic]:i.GREATER,[Nc]:i.NOTEQUAL};function Le(E,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ut||_.magFilter===Vs||_.magFilter===rs||_.magFilter===Qn||_.minFilter===ut||_.minFilter===Vs||_.minFilter===rs||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,te[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,re[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==rs&&_.minFilter!==Qn||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ve(E,_){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const k=_.source;let q=d.get(k);q===void 0&&(q={},d.set(k,q));const V=G(_);if(V!==E.__cacheKey){q[V]===void 0&&(q[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),q[V].usedTimes++;const ie=q[E.__cacheKey];ie!==void 0&&(q[E.__cacheKey].usedTimes--,ie.usedTimes===0&&M(_)),E.__cacheKey=V,E.__webglTexture=q[V].texture}return P}function K(E,_,P){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const q=Ve(E,_),V=_.source;t.bindTexture(k,E.__webglTexture,i.TEXTURE0+P);const ie=n.get(V);if(V.version!==ie.__version||q===!0){t.activeTexture(i.TEXTURE0+P);const Q=qe.getPrimaries(qe.workingColorSpace),se=_.colorSpace===tn?null:qe.getPrimaries(_.colorSpace),Ee=_.colorSpace===tn||Q===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Z=v(_.image,!1,s.maxTextureSize);Z=Ze(_,Z);const oe=r.convert(_.format,_.colorSpace),ge=r.convert(_.type);let Me=b(_.internalFormat,oe,ge,_.colorSpace,_.isVideoTexture);Le(k,_);let le;const De=_.mipmaps,we=_.isVideoTexture!==!0,Ae=ie.__version===void 0||q===!0,D=V.dataReady,ce=F(_,Z);if(_.isDepthTexture)Me=y(_.format===Pi,_.type),Ae&&(we?t.texStorage2D(i.TEXTURE_2D,1,Me,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Me,Z.width,Z.height,0,oe,ge,null));else if(_.isDataTexture)if(De.length>0){we&&Ae&&t.texStorage2D(i.TEXTURE_2D,ce,Me,De[0].width,De[0].height);for(let Y=0,j=De.length;Y<j;Y++)le=De[Y],we?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,le.width,le.height,oe,ge,le.data):t.texImage2D(i.TEXTURE_2D,Y,Me,le.width,le.height,0,oe,ge,le.data);_.generateMipmaps=!1}else we?(Ae&&t.texStorage2D(i.TEXTURE_2D,ce,Me,Z.width,Z.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,oe,ge,Z.data)):t.texImage2D(i.TEXTURE_2D,0,Me,Z.width,Z.height,0,oe,ge,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){we&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Me,De[0].width,De[0].height,Z.depth);for(let Y=0,j=De.length;Y<j;Y++)if(le=De[Y],_.format!==Nt)if(oe!==null)if(we){if(D)if(_.layerUpdates.size>0){const he=Po(le.width,le.height,_.format,_.type);for(const de of _.layerUpdates){const Be=le.data.subarray(de*he/le.data.BYTES_PER_ELEMENT,(de+1)*he/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,de,le.width,le.height,1,oe,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,Z.depth,oe,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Me,le.width,le.height,Z.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,Z.depth,oe,ge,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Me,le.width,le.height,Z.depth,0,oe,ge,le.data)}else{we&&Ae&&t.texStorage2D(i.TEXTURE_2D,ce,Me,De[0].width,De[0].height);for(let Y=0,j=De.length;Y<j;Y++)le=De[Y],_.format!==Nt?oe!==null?we?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,le.width,le.height,oe,ge,le.data):t.texImage2D(i.TEXTURE_2D,Y,Me,le.width,le.height,0,oe,ge,le.data)}else if(_.isDataArrayTexture)if(we){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Me,Z.width,Z.height,Z.depth),D)if(_.layerUpdates.size>0){const Y=Po(Z.width,Z.height,_.format,_.type);for(const j of _.layerUpdates){const he=Z.data.subarray(j*Y/Z.data.BYTES_PER_ELEMENT,(j+1)*Y/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,oe,ge,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,ge,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Z.width,Z.height,Z.depth,0,oe,ge,Z.data);else if(_.isData3DTexture)we?(Ae&&t.texStorage3D(i.TEXTURE_3D,ce,Me,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,ge,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Z.width,Z.height,Z.depth,0,oe,ge,Z.data);else if(_.isFramebufferTexture){if(Ae)if(we)t.texStorage2D(i.TEXTURE_2D,ce,Me,Z.width,Z.height);else{let Y=Z.width,j=Z.height;for(let he=0;he<ce;he++)t.texImage2D(i.TEXTURE_2D,he,Me,Y,j,0,oe,ge,null),Y>>=1,j>>=1}}else if(De.length>0){if(we&&Ae){const Y=Te(De[0]);t.texStorage2D(i.TEXTURE_2D,ce,Me,Y.width,Y.height)}for(let Y=0,j=De.length;Y<j;Y++)le=De[Y],we?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,oe,ge,le):t.texImage2D(i.TEXTURE_2D,Y,Me,oe,ge,le);_.generateMipmaps=!1}else if(we){if(Ae){const Y=Te(Z);t.texStorage2D(i.TEXTURE_2D,ce,Me,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,ge,Z)}else t.texImage2D(i.TEXTURE_2D,0,Me,oe,ge,Z);p(_)&&f(k),ie.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ee(E,_,P){if(_.image.length!==6)return;const k=Ve(E,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+P);const V=n.get(q);if(q.version!==V.__version||k===!0){t.activeTexture(i.TEXTURE0+P);const ie=qe.getPrimaries(qe.workingColorSpace),Q=_.colorSpace===tn?null:qe.getPrimaries(_.colorSpace),se=_.colorSpace===tn||ie===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!Ee&&!Z?oe[j]=v(_.image[j],!0,s.maxCubemapSize):oe[j]=Z?_.image[j].image:_.image[j],oe[j]=Ze(_,oe[j]);const ge=oe[0],Me=r.convert(_.format,_.colorSpace),le=r.convert(_.type),De=b(_.internalFormat,Me,le,_.colorSpace),we=_.isVideoTexture!==!0,Ae=V.__version===void 0||k===!0,D=q.dataReady;let ce=F(_,ge);Le(i.TEXTURE_CUBE_MAP,_);let Y;if(Ee){we&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,ge.width,ge.height);for(let j=0;j<6;j++){Y=oe[j].mipmaps;for(let he=0;he<Y.length;he++){const de=Y[he];_.format!==Nt?Me!==null?we?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,de.width,de.height,Me,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,De,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,de.width,de.height,Me,le,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,De,de.width,de.height,0,Me,le,de.data)}}}else{if(Y=_.mipmaps,we&&Ae){Y.length>0&&ce++;const j=Te(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,De,j.width,j.height)}for(let j=0;j<6;j++)if(Z){we?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,Me,le,oe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,oe[j].width,oe[j].height,0,Me,le,oe[j].data);for(let he=0;he<Y.length;he++){const Be=Y[he].image[j].image;we?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Be.width,Be.height,Me,le,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,De,Be.width,Be.height,0,Me,le,Be.data)}}else{we?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me,le,oe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,Me,le,oe[j]);for(let he=0;he<Y.length;he++){const de=Y[he];we?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Me,le,de.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,De,Me,le,de.image[j])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),V.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pe(E,_,P,k,q,V){const ie=r.convert(P.format,P.colorSpace),Q=r.convert(P.type),se=b(P.internalFormat,ie,Q,P.colorSpace),Ee=n.get(_),Z=n.get(P);if(Z.__renderTarget=_,!Ee.__hasExternalTextures){const oe=Math.max(1,_.width>>V),ge=Math.max(1,_.height>>V);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,V,se,oe,ge,_.depth,0,ie,Q,null):t.texImage2D(q,V,se,oe,ge,0,ie,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,q,Z.__webglTexture,0,We(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,q,Z.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(E,_,P){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const k=_.depthTexture,q=k&&k.isDepthTexture?k.type:null,V=y(_.stencilBuffer,q),ie=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=We(_);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,V,_.width,_.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,E)}else{const k=_.textures;for(let q=0;q<k.length;q++){const V=k[q],ie=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),se=b(V.internalFormat,ie,Q,V.colorSpace),Ee=We(_);P&&He(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,se,_.width,_.height):He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const q=k.__webglTexture,V=We(_);if(_.depthTexture.format===ii)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(_.depthTexture.format===Pi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ce(E){const _=n.get(E),P=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=k}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");ye(_.__webglFramebuffer,E)}else if(P){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),ae(_.__webglDepthbuffer[k],E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,V)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ae(_.__webglDepthbuffer,E,!1);else{const k=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,_,P){const k=n.get(E);_!==void 0&&pe(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Ce(E)}function je(E){const _=E.texture,P=n.get(E),k=n.get(_);E.addEventListener("dispose",A);const q=E.textures,V=E.isWebGLCubeRenderTarget===!0,ie=q.length>1;if(ie||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),V){P.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[Q]=[];for(let se=0;se<_.mipmaps.length;se++)P.__webglFramebuffer[Q][se]=i.createFramebuffer()}else P.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)P.__webglFramebuffer[Q]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ie)for(let Q=0,se=q.length;Q<se;Q++){const Ee=n.get(q[Q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&He(E)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Q=0;Q<q.length;Q++){const se=q[Q];P.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[Q]);const Ee=r.convert(se.format,se.colorSpace),Z=r.convert(se.type),oe=b(se.internalFormat,Ee,Z,se.colorSpace,E.isXRRenderTarget===!0),ge=We(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,oe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,P.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(P.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Le(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)pe(P.__webglFramebuffer[Q][se],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se);else pe(P.__webglFramebuffer[Q],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let Q=0,se=q.length;Q<se;Q++){const Ee=q[Q],Z=n.get(Ee);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Le(i.TEXTURE_2D,Ee),pe(P.__webglFramebuffer,E,Ee,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),p(Ee)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,k.__webglTexture),Le(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)pe(P.__webglFramebuffer[se],E,_,i.COLOR_ATTACHMENT0,Q,se);else pe(P.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,Q,0);p(_)&&f(Q),t.unbindTexture()}E.depthBuffer&&Ce(E)}function Oe(E){const _=E.textures;for(let P=0,k=_.length;P<k;P++){const q=_[P];if(p(q)){const V=T(E),ie=n.get(q).__webglTexture;t.bindTexture(V,ie),f(V),t.unbindTexture()}}}const rt=[],I=[];function bt(E){if(E.samples>0){if(He(E)===!1){const _=E.textures,P=E.width,k=E.height;let q=i.COLOR_BUFFER_BIT;const V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(E),Q=_.length>1;if(Q)for(let se=0;se<_.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let se=0;se<_.length;se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);const Ee=n.get(_[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,P,k,0,0,P,k,q,i.NEAREST),l===!0&&(rt.length=0,I.length=0,rt.push(i.COLOR_ATTACHMENT0+se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(rt.push(V),I.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let se=0;se<_.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);const Ee=n.get(_[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function We(E){return Math.min(s.maxSamples,E.samples)}function He(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(E){const _=a.render.frame;c.get(E)!==_&&(c.set(E,_),E.update())}function Ze(E,_){const P=E.colorSpace,k=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==jt&&P!==tn&&(qe.getTransfer(P)===Qe?(k!==Nt||q!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He}function lm(i,e){function t(n,s=tn){let r;const a=qe.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.BYTE;if(n===fl)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===Nt)return i.RGBA;if(n===_l)return i.LUMINANCE;if(n===vl)return i.LUMINANCE_ALPHA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===da)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===As||n===Rs||n===Cs||n===Ds)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Lr||n===Ur||n===Ir)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Fr||n===Or)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Fr)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Br||n===zr||n===Gr||n===kr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===jr||n===Zr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Br)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Jr||n===Qr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===ea||n===ta||n===na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(u,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`;class fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Pt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ht({vertexShader:hm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends Ui{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,g=null;const v=new fm,p=t.getContextAttributes();let f=null,T=null;const b=[],y=[],F=new Fe;let w=null;const A=new zt;A.viewport=new lt;const C=new zt;C.viewport=new lt;const M=[A,C],x=new cm;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=b[K];return ee===void 0&&(ee=new gr,b[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=b[K];return ee===void 0&&(ee=new gr,b[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=b[K];return ee===void 0&&(ee=new gr,b[K]=ee),ee.getHandSpace()};function O(K){const ee=y.indexOf(K.inputSource);if(ee===-1)return;const pe=b[ee];pe!==void 0&&(pe.update(K.inputSource,K.frame,u||a),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let K=0;K<b.length;K++){const ee=y[K];ee!==null&&(y[K]=null,b[K].disconnect(ee))}R=null,B=null,v.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,T=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new kt(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,pe=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Pi:ii,pe=p.stencil?Di:On);const ye={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new kt(d.textureWidth,d.textureHeight,{format:Nt,type:yn,depthTexture:new Sa(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(K){for(let ee=0;ee<K.removed.length;ee++){const pe=K.removed[ee],ae=y.indexOf(pe);ae>=0&&(y[ae]=null,b[ae].disconnect(pe))}for(let ee=0;ee<K.added.length;ee++){const pe=K.added[ee];let ae=y.indexOf(pe);if(ae===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=y.length){y.push(pe),ae=Ce;break}else if(y[Ce]===null){y[Ce]=pe,ae=Ce;break}if(ae===-1)break}const ye=b[ae];ye&&ye.connect(pe)}}const z=new L,J=new L;function X(K,ee,pe){z.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const ae=z.distanceTo(J),ye=ee.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),je=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],rt=(ye[9]-1)/ye[5],I=(ye[8]-1)/ye[0],bt=(Ce[8]+1)/Ce[0],We=Ue*I,He=Ue*bt,be=ae/(-I+bt),Ze=be*-I;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Te=Ue+be,E=je+be,_=We-Ze,P=He+(ae-Ze),k=Oe*je/E*Te,q=rt*je/E*Te;K.projectionMatrix.makePerspective(_,P,k,q,Te,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,pe=K.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),x.near=C.near=A.near=ee,x.far=C.far=A.far=pe,(R!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,B=x.far),A.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=A.layers.mask|C.layers.mask;const ae=K.parent,ye=x.cameras;te(x,ae);for(let Ce=0;Ce<ye.length;Ce++)te(ye[Ce],ae);ye.length===2?X(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),re(K,x,ae)};function re(K,ee,pe){pe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ji*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let me=null;function Le(K,ee){if(c=ee.getViewerPose(u||a),g=ee,c!==null){const pe=c.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ae=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Ce=0;Ce<pe.length;Ce++){const Ue=pe[Ce];let je=null;if(m!==null)je=m.getViewport(Ue);else{const rt=h.getViewSubImage(d,Ue);je=rt.viewport,Ce===0&&(e.setRenderTargetTextures(T,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(T))}let Oe=M[Ce];Oe===void 0&&(Oe=new zt,Oe.layers.enable(Ce),Oe.viewport=new lt,M[Ce]=Oe),Oe.matrix.fromArray(Ue.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ue.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Oe)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ce=h.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,s.renderState)}}for(let pe=0;pe<b.length;pe++){const ae=y[pe],ye=b[pe];ae!==null&&ye!==void 0&&ye.update(ae,ee,u||a)}me&&me(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ve=new Il;Ve.setAnimationLoop(Le),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}}const Wn=new Ht,mm=new tt;function gm(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Pl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,b):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Dt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Dt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,y=T.envMapRotation;b&&(p.envMap.value=b,Wn.copy(y),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(Wn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _m(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const y=b.program;n.uniformBlockBinding(T,y)}function u(T,b){let y=s[T.id];y===void 0&&(g(T),y=c(T),s[T.id]=y,T.addEventListener("dispose",p));const F=b.program;n.updateUBOMapping(T,F);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function c(T){const b=h();T.__bindingPointIndex=b;const y=i.createBuffer(),F=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,F,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],y=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=y.length;w<A;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,x=C.length;M<x;M++){const R=C[M];if(m(R,w,M,F)===!0){const B=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let $=0;$<O.length;$++){const z=O[$],J=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+G,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,b,y,F){const w=T.value,A=b+"_"+y;if(F[A]===void 0)return typeof w=="number"||typeof w=="boolean"?F[A]=w:F[A]=w.clone(),!0;{const C=F[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return F[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(T){const b=T.uniforms;let y=0;const F=16;for(let A=0,C=b.length;A<C;A++){const M=Array.isArray(b[A])?b[A]:[b[A]];for(let x=0,R=M.length;x<R;x++){const B=M[x],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=O.length;G<$;G++){const z=O[G],J=v(z),X=y%F,te=X%J.boundary,re=X+te;y+=te,re!==0&&F-re<J.storage&&(y+=F-re),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=J.storage}}}const w=y%F;return w>0&&(y+=F-w),T.__size=y,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){const b=T.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:u,dispose:f}}class vm{constructor(e={}){const{canvas:t=eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Fn,this.toneMappingExposure=1;const y=this;let F=!1,w=0,A=0,C=null,M=-1,x=null;const R=new lt,B=new lt;let O=null;const G=new Re(0);let $=0,z=t.width,J=t.height,X=1,te=null,re=null;const me=new lt(0,0,z,J),Le=new lt(0,0,z,J);let Ve=!1;const K=new va;let ee=!1,pe=!1;const ae=new tt,ye=new tt,Ce=new L,Ue=new lt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function rt(){return C===null?X:1}let I=n;function bt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){const U="webgl2";if(I=bt(U,S),I===null)throw bt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,He,be,Ze,Te,E,_,P,k,q,V,ie,Q,se,Ee,Z,oe,ge,Me,le,De,we,Ae,D;function ce(){We=new bf(I),We.init(),we=new lm(I,We),He=new _f(I,We,e,we),be=new rm(I,We),He.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),Ze=new wf(I),Te=new Wp,E=new om(I,We,be,Te,He,we,Ze),_=new xf(y),P=new yf(y),k=new Lu(I),Ae=new mf(I,k),q=new Ef(I,k,Ze,Ae),V=new Rf(I,q,k,Ze),Me=new Af(I,He,E),Z=new vf(Te),ie=new Vp(y,_,P,We,He,Ae,Z),Q=new gm(y,Te),se=new qp,Ee=new Jp(We),ge=new pf(y,_,P,be,V,m,l),oe=new im(y,V,He),D=new _m(I,Ze,He,be),le=new gf(I,We,Ze),De=new Tf(I,We,Ze),Ze.programs=ie.programs,y.capabilities=He,y.extensions=We,y.properties=Te,y.renderLists=se,y.shadowMap=oe,y.state=be,y.info=Ze}ce();const Y=new pm(y,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(z,J,!1))},this.getSize=function(S){return S.set(z,J)},this.setSize=function(S,U,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,J=U,t.width=Math.floor(S*X),t.height=Math.floor(U*X),H===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(z*X,J*X).floor()},this.setDrawingBufferSize=function(S,U,H){z=S,J=U,X=H,t.width=Math.floor(S*H),t.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,U,H,W){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,U,H,W),be.viewport(R.copy(me).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Le)},this.setScissor=function(S,U,H,W){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,U,H,W),be.scissor(B.copy(Le).multiplyScalar(X).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){be.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(S=!0,U=!0,H=!0){let W=0;if(S){let N=!1;if(C!==null){const ne=C.texture.format;N=ne===pa||ne===fa||ne===da}if(N){const ne=C.texture.type,fe=ne===yn||ne===On||ne===Zi||ne===Di||ne===ua||ne===ha,_e=ge.getClearColor(),ve=ge.getClearAlpha(),Ie=_e.r,ze=_e.g,xe=_e.b;fe?(g[0]=Ie,g[1]=ze,g[2]=xe,g[3]=ve,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ie,v[1]=ze,v[2]=xe,v[3]=ve,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",de,!1),se.dispose(),Ee.dispose(),Te.dispose(),_.dispose(),P.dispose(),V.dispose(),Ae.dispose(),D.dispose(),ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ta),Y.removeEventListener("sessionend",wa),Bn.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const S=Ze.autoReset,U=oe.enabled,H=oe.autoUpdate,W=oe.needsUpdate,N=oe.type;ce(),Ze.autoReset=S,oe.enabled=U,oe.autoUpdate=H,oe.needsUpdate=W,oe.type=N}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const U=S.target;U.removeEventListener("dispose",Be),at(U)}function at(S){_t(S),Te.remove(S)}function _t(S){const U=Te.get(S).programs;U!==void 0&&(U.forEach(function(H){ie.releaseProgram(H)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,W,N,ne){U===null&&(U=je);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=Kl(S,U,H,W,N);be.setMaterial(W,fe);let ve=H.index,Ie=1;if(W.wireframe===!0){if(ve=q.getWireframeAttribute(H),ve===void 0)return;Ie=2}const ze=H.drawRange,xe=H.attributes.position;let Ye=ze.start*Ie,et=(ze.start+ze.count)*Ie;ne!==null&&(Ye=Math.max(Ye,ne.start*Ie),et=Math.min(et,(ne.start+ne.count)*Ie)),ve!==null?(Ye=Math.max(Ye,0),et=Math.min(et,ve.count)):xe!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,xe.count));const nt=et-Ye;if(nt<0||nt===1/0)return;Ae.setup(N,W,_e,H,ve);let Rt,$e=le;if(ve!==null&&(Rt=k.get(ve),$e=De,$e.setIndex(Rt)),N.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*rt()),$e.setMode(I.LINES)):$e.setMode(I.TRIANGLES);else if(N.isLine){let Se=W.linewidth;Se===void 0&&(Se=1),be.setLineWidth(Se*rt()),N.isLineSegments?$e.setMode(I.LINES):N.isLineLoop?$e.setMode(I.LINE_LOOP):$e.setMode(I.LINE_STRIP)}else N.isPoints?$e.setMode(I.POINTS):N.isSprite&&$e.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,cn=N._multiDrawCounts,Ke=N._multiDrawCount,Xt=ve?k.get(ve).bytesPerElement:1,ri=Te.get(W).currentProgram.getUniforms();for(let Lt=0;Lt<Ke;Lt++)ri.setValue(I,"_gl_DrawID",Lt),$e.render(Se[Lt]/Xt,cn[Lt])}else if(N.isInstancedMesh)$e.renderInstances(Ye,nt,N.count);else if(H.isInstancedBufferGeometry){const Se=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cn=Math.min(H.instanceCount,Se);$e.renderInstances(Ye,nt,cn)}else $e.render(Ye,nt)};function Je(S,U,H){S.transparent===!0&&S.side===Gt&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,ss(S,U,H),S.side=an,S.needsUpdate=!0,ss(S,U,H),S.side=Gt):ss(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),f=Ee.get(H),f.init(U),b.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];Je(_e,H,N),W.add(_e)}else Je(ne,H,N),W.add(ne)}),b.pop(),f=null,W},this.compileAsync=function(S,U,H=null){const W=this.compile(S,U,H);return new Promise(N=>{function ne(){if(W.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){N(S);return}setTimeout(ne,10)}We.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Wt=null;function ln(S){Wt&&Wt(S)}function Ta(){Bn.stop()}function wa(){Bn.start()}const Bn=new Il;Bn.setAnimationLoop(ln),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(S){Wt=S,Y.setAnimationLoop(S),S===null?Bn.stop():Bn.start()},Y.addEventListener("sessionstart",Ta),Y.addEventListener("sessionend",wa),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,C),f=Ee.get(S,b.length),f.init(U),b.push(f),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(ye),pe=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,pe),p=se.get(S,T.length),p.init(),T.push(p),Y.enabled===!0&&Y.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Hs(ne,U,-1/0,y.sortObjects)}Hs(S,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(te,re),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&ge.addToRenderList(p,S),this.info.render.frame++,ee===!0&&Z.beginShadows();const H=f.state.shadowsArray;oe.render(H,S,U),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const ne=U.cameras;if(N.length>0)for(let fe=0,_e=ne.length;fe<_e;fe++){const ve=ne[fe];Ra(W,N,S,ve)}Oe&&ge.render(S);for(let fe=0,_e=ne.length;fe<_e;fe++){const ve=ne[fe];Aa(p,S,ve,ve.viewport)}}else N.length>0&&Ra(W,N,S,U),Oe&&ge.render(S),Aa(p,S,U);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,U),Ae.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],ee===!0&&Z.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Hs(S,U,H,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){W&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);const fe=V.update(S),_e=S.material;_e.visible&&p.push(S,fe,_e,H,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const fe=V.update(S),_e=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(ye)),Array.isArray(_e)){const ve=fe.groups;for(let Ie=0,ze=ve.length;Ie<ze;Ie++){const xe=ve[Ie],Ye=_e[xe.materialIndex];Ye&&Ye.visible&&p.push(S,fe,Ye,H,Ue.z,xe)}}else _e.visible&&p.push(S,fe,_e,H,Ue.z,null)}}const ne=S.children;for(let fe=0,_e=ne.length;fe<_e;fe++)Hs(ne[fe],U,H,W)}function Aa(S,U,H,W){const N=S.opaque,ne=S.transmissive,fe=S.transparent;f.setupLightsView(H),ee===!0&&Z.setGlobalState(y.clippingPlanes,H),W&&be.viewport(R.copy(W)),N.length>0&&is(N,U,H),ne.length>0&&is(ne,U,H),fe.length>0&&is(fe,U,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ra(S,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new kt(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?rn:yn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ne=f.state.transmissionRenderTarget[W.id],fe=W.viewport||R;ne.setSize(fe.z,fe.w);const _e=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(G),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ge.render(H);const ve=y.toneMapping;y.toneMapping=Fn;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ee===!0&&Z.setGlobalState(y.clippingPlanes,W),is(S,H,W),E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let xe=0,Ye=U.length;xe<Ye;xe++){const et=U[xe],nt=et.object,Rt=et.geometry,$e=et.material,Se=et.group;if($e.side===Gt&&nt.layers.test(W.layers)){const cn=$e.side;$e.side=Dt,$e.needsUpdate=!0,Ca(nt,H,W,Rt,$e,Se),$e.side=cn,$e.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne))}y.setRenderTarget(_e),y.setClearColor(G,$),Ie!==void 0&&(W.viewport=Ie),y.toneMapping=ve}function is(S,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ne=S.length;N<ne;N++){const fe=S[N],_e=fe.object,ve=fe.geometry,Ie=W===null?fe.material:W,ze=fe.group;_e.layers.test(H.layers)&&Ca(_e,U,H,ve,Ie,ze)}}function Ca(S,U,H,W,N,ne){S.onBeforeRender(y,U,H,W,N,ne),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,U,H,W,S,ne),N.transparent===!0&&N.side===Gt&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,y.renderBufferDirect(H,U,W,N,S,ne),N.side=an,N.needsUpdate=!0,y.renderBufferDirect(H,U,W,N,S,ne),N.side=Gt):y.renderBufferDirect(H,U,W,N,S,ne),S.onAfterRender(y,U,H,W,N,ne)}function ss(S,U,H){U.isScene!==!0&&(U=je);const W=Te.get(S),N=f.state.lights,ne=f.state.shadowsArray,fe=N.state.version,_e=ie.getParameters(S,N.state,ne,U,H),ve=ie.getProgramCacheKey(_e);let Ie=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?P:_).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",Be),Ie=new Map,W.programs=Ie);let ze=Ie.get(ve);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===fe)return Pa(S,_e),ze}else _e.uniforms=ie.getUniforms(S),S.onBeforeCompile(_e,y),ze=ie.acquireProgram(_e,ve),Ie.set(ve,ze),W.uniforms=_e.uniforms;const xe=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Z.uniform),Pa(S,_e),W.needsLights=Zl(S),W.lightsStateVersion=fe,W.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Da(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Pa(S,U){const H=Te.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Kl(S,U,H,W,N){U.isScene!==!0&&(U=je),E.resetTextureUnits();const ne=U.fog,fe=W.isMeshStandardMaterial?U.environment:null,_e=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jt,ve=(W.isMeshStandardMaterial?P:_).get(W.envMap||fe),Ie=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),xe=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,et=!!H.morphAttributes.color;let nt=Fn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(nt=y.toneMapping);const Rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$e=Rt!==void 0?Rt.length:0,Se=Te.get(W),cn=f.state.lights;if(ee===!0&&(pe===!0||S!==x)){const Ot=S===x&&W.id===M;Z.setState(W,S,Ot)}let Ke=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==cn.state.version||Se.outputColorSpace!==_e||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ve||W.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Z.numPlanes||Se.numIntersection!==Z.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==ze||Se.morphTargets!==xe||Se.morphNormals!==Ye||Se.morphColors!==et||Se.toneMapping!==nt||Se.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,Se.__version=W.version);let Xt=Se.currentProgram;Ke===!0&&(Xt=ss(W,U,N));let ri=!1,Lt=!1,Fi=!1;const it=Xt.getUniforms(),Qt=Se.uniforms;if(be.useProgram(Xt.program)&&(ri=!0,Lt=!0,Fi=!0),W.id!==M&&(M=W.id,Lt=!0),ri||x!==S){be.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),nu(ae),iu(ae),it.setValue(I,"projectionMatrix",ae)):it.setValue(I,"projectionMatrix",S.projectionMatrix),it.setValue(I,"viewMatrix",S.matrixWorldInverse);const En=it.map.cameraPosition;En!==void 0&&En.setValue(I,Ce.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&it.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Lt=!0,Fi=!0)}if(N.isSkinnedMesh){it.setOptional(I,N,"bindMatrix"),it.setOptional(I,N,"bindMatrixInverse");const Ot=N.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),it.setValue(I,"boneTexture",Ot.boneTexture,E))}N.isBatchedMesh&&(it.setOptional(I,N,"batchingTexture"),it.setValue(I,"batchingTexture",N._matricesTexture,E),it.setOptional(I,N,"batchingIdTexture"),it.setValue(I,"batchingIdTexture",N._indirectTexture,E),it.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&it.setValue(I,"batchingColorTexture",N._colorsTexture,E));const Oi=H.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Me.update(N,H,Xt),(Lt||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,it.setValue(I,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=ve,Qt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Lt&&(it.setValue(I,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&jl(Qt,Fi),ne&&W.fog===!0&&Q.refreshFogUniforms(Qt,ne),Q.refreshMaterialUniforms(Qt,W,X,J,f.state.transmissionRenderTarget[S.id]),Ls.upload(I,Da(Se),Qt,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ls.upload(I,Da(Se),Qt,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(I,"center",N.center),it.setValue(I,"modelViewMatrix",N.modelViewMatrix),it.setValue(I,"normalMatrix",N.normalMatrix),it.setValue(I,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ot=W.uniformsGroups;for(let En=0,Tn=Ot.length;En<Tn;En++){const La=Ot[En];D.update(La,Xt),D.bind(La,Xt)}}return Xt}function jl(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Zl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,H){Te.get(S.texture).__webglTexture=U,Te.get(S.depthTexture).__webglTexture=H;const W=Te.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const H=Te.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){C=S,w=U,A=H;let W=!0,N=null,ne=!1,fe=!1;if(S){const ve=Te.get(S);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(ve.__hasExternalTextures)E.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Te.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const ze=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?N=ze[U][H]:N=ze[U],ne=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[H]:N=ze,R.copy(S.viewport),B.copy(S.scissor),O=S.scissorTest}else R.copy(me).multiplyScalar(X).floor(),B.copy(Le).multiplyScalar(X).floor(),O=Ve;if(be.bindFramebuffer(I.FRAMEBUFFER,N)&&W&&be.drawBuffers(S,N),be.viewport(R),be.scissor(B),be.setScissorTest(O),ne){const ve=Te.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,H)}else if(fe){const ve=Te.get(S.texture),Ie=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,H||0,Ie)}M=-1},this.readRenderTargetPixels=function(S,U,H,W,N,ne,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){be.bindFramebuffer(I.FRAMEBUFFER,_e);try{const ve=S.texture,Ie=ve.format,ze=ve.type;if(!He.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&H>=0&&H<=S.height-N&&I.readPixels(U,H,W,N,we.convert(Ie),we.convert(ze),ne)}finally{const ve=C!==null?Te.get(C).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,W,N,ne,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){const ve=S.texture,Ie=ve.format,ze=ve.type;if(!He.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-W&&H>=0&&H<=S.height-N){be.bindFramebuffer(I.FRAMEBUFFER,_e);const xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),I.readPixels(U,H,W,N,we.convert(Ie),we.convert(ze),0);const Ye=C!==null?Te.get(C).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Ye);const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tu(I,et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(xe),I.deleteSync(et),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-H),N=Math.floor(S.image.width*W),ne=Math.floor(S.image.height*W),fe=U!==null?U.x:0,_e=U!==null?U.y:0;E.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,fe,_e,N,ne),be.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,W=null,N=0){S.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ne,fe,_e,ve,Ie,ze,xe,Ye,et;const nt=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(ne=H.max.x-H.min.x,fe=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,ve=H.min.x,Ie=H.min.y,ze=H.isBox3?H.min.z:0):(ne=nt.width,fe=nt.height,_e=nt.depth||1,ve=0,Ie=0,ze=0),W!==null?(xe=W.x,Ye=W.y,et=W.z):(xe=0,Ye=0,et=0);const Rt=we.convert(U.format),$e=we.convert(U.type);let Se;U.isData3DTexture?(E.setTexture3D(U,0),Se=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Se=I.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Se=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const cn=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xt=I.getParameter(I.UNPACK_SKIP_PIXELS),ri=I.getParameter(I.UNPACK_SKIP_ROWS),Lt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze);const Fi=S.isDataArrayTexture||S.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Qt=Te.get(S),Oi=Te.get(U),Ot=Te.get(Qt.__renderTarget),En=Te.get(Oi.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Ot.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Tn=0;Tn<_e;Tn++)Fi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(S).__webglTexture,N,ze+Tn),S.isDepthTexture?(it&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,N,et+Tn),I.blitFramebuffer(ve,Ie,ne,fe,xe,Ye,ne,fe,I.DEPTH_BUFFER_BIT,I.NEAREST)):it?I.copyTexSubImage3D(Se,N,xe,Ye,et+Tn,ve,Ie,ne,fe):I.copyTexSubImage2D(Se,N,xe,Ye,et+Tn,ve,Ie,ne,fe);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else it?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Se,N,xe,Ye,et,ne,fe,_e,Rt,$e,nt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,N,xe,Ye,et,ne,fe,_e,Rt,nt.data):I.texSubImage3D(Se,N,xe,Ye,et,ne,fe,_e,Rt,$e,nt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,xe,Ye,ne,fe,Rt,$e,nt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,xe,Ye,nt.width,nt.height,Rt,nt.data):I.texSubImage2D(I.TEXTURE_2D,N,xe,Ye,ne,fe,Rt,$e,nt);I.pixelStorei(I.UNPACK_ROW_LENGTH,cn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ri),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt),N===0&&U.generateMipmaps&&I.generateMipmap(Se),be.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,W=null,N=0){return S.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,H,W,N)},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,be.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Ma{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let _n=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Yi extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],u=new L,c=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const m=n+h/t*s;u.x=e*Math.cos(m),u.y=e*Math.sin(m),a.push(u.x,u.y,u.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ns extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],m=[];let g=0;const v=[],p=n/2;let f=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(m,2));function T(){const y=new L,F=new L;let w=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,R=x*(t-e)+e;for(let B=0;B<=s;B++){const O=B/s,G=O*l+o,$=Math.sin(G),z=Math.cos(G);F.x=R*$,F.y=-x*n+p,F.z=R*z,h.push(F.x,F.y,F.z),y.set($,A,z).normalize(),d.push(y.x,y.y,y.z),m.push(O,1-x),M.push(g++)}v.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const x=v[M][C],R=v[M+1][C],B=v[M+1][C+1],O=v[M][C+1];(e>0||M!==0)&&(c.push(x,R,O),w+=3),(t>0||M!==r-1)&&(c.push(R,B,O),w+=3)}u.addGroup(f,w,0),f+=w}function b(y){const F=g,w=new Fe,A=new L;let C=0;const M=y===!0?e:t,x=y===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const G=B/s*l+o,$=Math.cos(G),z=Math.sin(G);A.x=M*z,A.y=p*x,A.z=M*$,h.push(A.x,A.y,A.z),d.push(0,x,0),w.x=$*.5+.5,w.y=z*.5*x+.5,m.push(w.x,w.y),g++}for(let B=0;B<s;B++){const O=F+B,G=R+B;y===!0?c.push(G,G+1,O):c.push(G+1,G,O),C+=3}u.addGroup(f,C,y===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ya extends ns{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ya(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ks extends es{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ba extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xm extends ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _r=new tt,Lo=new L,Uo=new L;class Sm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lo),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),_r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mm extends Sm{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Mm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bm extends ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Io(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Io();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Io(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);const ot={groundRadius:6371,atmosphereRadius:6471,rayleighScaleHeight:8,mieScaleHeight:1.2,ozoneCenter:25,ozoneWidth:15},At={rayleigh:new L(.005802,.013558,.0331),mie:.021,mieExtRatio:1.1,ozoneAbs:new L(65e-5,.001881,85e-6)},Ea=`
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
`,zl=`
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
`,Gl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Tm=`
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

${Ea}

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
`;class wm{constructor({width:e=256,height:t=64}={}){this.width=e,this.height=t,this.target=new kt(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:ut,magFilter:ut,wrapS:nn,wrapT:nn,format:Nt,type:rn,colorSpace:tn}),this.target.texture.name="TransmittanceLUT",this.uniforms={uPlanetRadius:{value:ot.groundRadius},uAtmosphereRadius:{value:ot.atmosphereRadius},uRayleighSH:{value:ot.rayleighScaleHeight},uRayleighBeta:{value:At.rayleigh.clone()},uMieSH:{value:ot.mieScaleHeight},uMieBetaExt:{value:At.mie*At.mieExtRatio},uMieOn:{value:!0},uOzoneCenter:{value:ot.ozoneCenter},uOzoneWidth:{value:ot.ozoneWidth},uOzoneBetaAbs:{value:At.ozoneAbs.clone()},uOzoneOn:{value:!0}},this.material=new ht({uniforms:this.uniforms,vertexShader:Gl,fragmentShader:Tm,depthTest:!1,depthWrite:!1}),this._scene=new _n,this._camera=new ts(-1,1,1,-1,0,1),this._quad=new st(new bn(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad),this.dirty=!0}get texture(){return this.target.texture}setAtmosphere({rayleighMul:e,mieBeta:t,mieEnabled:n,ozoneMul:s,ozoneEnabled:r}){e!=null&&this.uniforms.uRayleighBeta.value.copy(At.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBetaExt.value=t*At.mieExtRatio),n!=null&&(this.uniforms.uMieOn.value=n),s!=null&&this.uniforms.uOzoneBetaAbs.value.copy(At.ozoneAbs).multiplyScalar(s),r!=null&&(this.uniforms.uOzoneOn.value=r),this.dirty=!0}render(e){if(!this.dirty)return;const t=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(t),this.dirty=!1}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const Am=`
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

${Ea}
${zl}

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
`;class Rm{constructor({width:e=256,height:t=128,marchSteps:n=40}={}){this.width=e,this.height=t,this.lastRenderUs=0,this._makeTarget(e,t),this.uniforms={uCameraPos:{value:new L(0,ot.groundRadius+.0016,0)},uSunDir:{value:new L(0,1,0)},uHorizonWarp:{value:!0},uPlanetRadius:{value:ot.groundRadius},uAtmosphereRadius:{value:ot.atmosphereRadius},uRayleighSH:{value:ot.rayleighScaleHeight},uRayleighBeta:{value:At.rayleigh.clone()},uMieSH:{value:ot.mieScaleHeight},uMieBeta:{value:At.mie},uMieBetaExt:{value:At.mie*At.mieExtRatio},uMieG:{value:.758},uMieOn:{value:!0},uOzoneCenter:{value:ot.ozoneCenter},uOzoneWidth:{value:ot.ozoneWidth},uOzoneBetaAbs:{value:At.ozoneAbs.clone()},uOzoneOn:{value:!0},uSunIntensity:{value:22},uTransmittanceLUT:{value:null},uMarchSteps:{value:n}},this.material=new ht({uniforms:this.uniforms,vertexShader:Gl,fragmentShader:Am,depthTest:!1,depthWrite:!1}),this._scene=new _n,this._camera=new ts(-1,1,1,-1,0,1),this._quad=new st(new bn(2,2),this.material),this._quad.frustumCulled=!1,this._scene.add(this._quad)}get texture(){return this.target.texture}_makeTarget(e,t){this.target&&this.target.dispose(),this.target=new kt(e,t,{depthBuffer:!1,stencilBuffer:!1,minFilter:ut,magFilter:ut,wrapS:Ns,wrapT:nn,format:Nt,type:rn,colorSpace:tn}),this.target.texture.name="SkyViewLUT"}resize(e,t){e===this.width&&t===this.height||(this.width=e,this.height=t,this._makeTarget(e,t))}setMarchSteps(e){this.uniforms.uMarchSteps.value=e}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setSunDir(e){this.uniforms.uSunDir.value.copy(e)}setSunIntensity(e){this.uniforms.uSunIntensity.value=e}setMieG(e){this.uniforms.uMieG.value=e}setObserverPosition(e){this.uniforms.uCameraPos.value.copy(e)}setTransmittanceLUT(e){this.uniforms.uTransmittanceLUT.value=e}setAtmosphere({rayleighMul:e,mieBeta:t,ozoneMul:n}){e!=null&&this.uniforms.uRayleighBeta.value.copy(At.rayleigh).multiplyScalar(e),t!=null&&(this.uniforms.uMieBeta.value=t,this.uniforms.uMieBetaExt.value=t*At.mieExtRatio),n!=null&&this.uniforms.uOzoneBetaAbs.value.copy(At.ozoneAbs).multiplyScalar(n)}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const n=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=n+t}}render(e){const t=performance.now(),n=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(),e.render(this._scene,this._camera),e.setRenderTarget(n),this.lastRenderUs=(performance.now()-t)*1e3}dispose(){this.target.dispose(),this.material.dispose(),this._quad.geometry.dispose()}}const Cm=`
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
`,Dm=`
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

${Ea}
${zl}

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
`;class Pm{constructor(){this.uniforms={uInvProj:{value:new tt},uCameraWorld:{value:new tt},uObserverPos:{value:new L(0,ot.groundRadius+.4,0)},uSunDir:{value:new L(0,1,0)},uHorizonWarp:{value:!0},uSkyViewLUT:{value:null},uTransmittanceLUT:{value:null},uPlanetRadius:{value:ot.groundRadius},uAtmosphereRadius:{value:ot.atmosphereRadius},uSunIntensity:{value:22},uSunDiskAngularRadius:{value:Ne.degToRad(.55)},uCoronaSoftness:{value:5.5},uSunTint:{value:new L(1,.95,.86)}},this.material=new ht({uniforms:this.uniforms,vertexShader:Cm,fragmentShader:Dm,depthTest:!1,depthWrite:!1}),this.mesh=new st(new bn(2,2),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.mesh.matrixAutoUpdate=!1,this.mesh.name="SkyBackdrop"}setLUTs(e,t){this.uniforms.uSkyViewLUT.value=e,this.uniforms.uTransmittanceLUT.value=t}setObserver(e){this.uniforms.uObserverPos.value.copy(e)}setSun({direction:e,intensity:t,diskRad:n,coronaSoftness:s,tint:r}){e!=null&&this.uniforms.uSunDir.value.copy(e),t!=null&&(this.uniforms.uSunIntensity.value=t),n!=null&&(this.uniforms.uSunDiskAngularRadius.value=n),s!=null&&(this.uniforms.uCoronaSoftness.value=s),r!=null&&this.uniforms.uSunTint.value.copy(r)}setHorizonWarp(e){this.uniforms.uHorizonWarp.value=!!e}setGeometry({planetRadiusKm:e,atmosphereThicknessKm:t}){if(e!=null&&(this.uniforms.uPlanetRadius.value=e),t!=null){const n=this.uniforms.uPlanetRadius.value;this.uniforms.uAtmosphereRadius.value=n+t}}updateCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uCameraWorld.value.copy(e.matrixWorld)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}}const mn={accelSeconds:1.5,maxFrameSeconds:1/30,minMoveSpeed:55,maxMoveSpeed:260,minAltitudeSpeed:40,maxAltitudeSpeed:170,minYawSpeed:.9,maxYawSpeed:2.6};class Lm{constructor(e,t){this.camera=e,this.dom=t,this._keys=new Map,this._cameraEuler=new Ht(0,0,0,"YXZ"),this._lastHumanInput=performance.now(),this._pointerDown=!1,this._dragging=!1,this._setupKeyboard(),this._setupPointer()}markHumanInput(){this._lastHumanInput=performance.now()}getIdleSeconds(e=performance.now()){return Math.max(0,(e-this._lastHumanInput)/1e3)}hasActiveInput(){return this._keys.size>0||this._pointerDown||this._dragging}_ignore(e){const t=e.target;return t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.closest&&t.closest("#ui-root"))}_setupKeyboard(){window.addEventListener("keydown",e=>{if(this._ignore(e))return;const t=e.key.toLowerCase();["w","a","s","d","q","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&(e.preventDefault(),this.markHumanInput(),this._keys.has(t)||this._keys.set(t,performance.now()))}),window.addEventListener("keyup",e=>{this._keys.delete(e.key.toLowerCase()),this.markHumanInput()})}_setupPointer(){let e=0,t=0,n=0,s=0;this.dom.addEventListener("pointerdown",r=>{r.target.closest&&r.target.closest("#ui-root")||(this._pointerDown=!0,this._dragging=!1,this.markHumanInput(),e=r.clientX,t=r.clientY,n=r.clientX,s=r.clientY)}),window.addEventListener("pointerup",()=>{(this._pointerDown||this._dragging)&&(this._pointerDown=!1,this.dom.style.cursor="crosshair",this._dragging=!1,this.markHumanInput())}),window.addEventListener("pointermove",r=>{if(!this._pointerDown&&!this._dragging)return;const a=Ne.clamp((r.clientX-n)*.01,-.8,.8),o=Ne.clamp((r.clientY-s)*.01,-.8,.8),l=Math.hypot(r.clientX-e,r.clientY-t);if(n=r.clientX,s=r.clientY,!this._dragging){if(l<4)return;this._dragging=!0,this.dom.style.cursor="none"}this.markHumanInput(),this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y-=a*.08,this._cameraEuler.x=Math.max(-1.25,Math.min(1.15,this._cameraEuler.x-o*.08)),this.camera.quaternion.setFromEuler(this._cameraEuler)}),this.dom.addEventListener("wheel",r=>{if(r.target.closest&&r.target.closest("#ui-root"))return;r.preventDefault(),this.markHumanInput();const a=Ne.clamp(r.deltaY,-180,180),o=new L;this.camera.getWorldDirection(o),this.camera.position.addScaledVector(o,-a*.6)},{passive:!1})}update(e){if(!this._keys.size)return;this.markHumanInput();const t=Math.min(e,mn.maxFrameSeconds),n=performance.now();let s=0;for(const g of this._keys.values())s=Math.max(s,(n-g)/1e3);const r=Ne.clamp(s/mn.accelSeconds,0,1),a=r*r*(3-2*r),o=Ne.lerp(mn.minMoveSpeed,mn.maxMoveSpeed,a)*t,l=Ne.lerp(mn.minAltitudeSpeed,mn.maxAltitudeSpeed,a)*t,u=Ne.lerp(mn.minYawSpeed,mn.maxYawSpeed,a)*t,c=new L;this.camera.getWorldDirection(c),c.y=0,c.lengthSq()<1e-4&&c.set(0,0,-1),c.normalize();const h=new L().crossVectors(c,this.camera.up).normalize(),d=new L;if(this._keys.has("w")&&d.add(c),this._keys.has("s")&&d.sub(c),this._keys.has("d")&&d.add(h),this._keys.has("a")&&d.sub(h),this._keys.has("arrowup")&&(d.y+=1),(this._keys.has("q")||this._keys.has("arrowdown"))&&(d.y-=1),d.lengthSq()>0){const g=new L(d.x,0,d.z);g.lengthSq()>0&&(g.normalize().multiplyScalar(o),g.clampLength(0,mn.maxMoveSpeed*t));const v=Math.sign(d.y)*l;this.camera.position.add(new L(g.x,v,g.z))}let m=0;this._keys.has("arrowleft")&&(m+=u),this._keys.has("arrowright")&&(m-=u),m&&(this._cameraEuler.setFromQuaternion(this.camera.quaternion),this._cameraEuler.y+=m,this.camera.quaternion.setFromEuler(this._cameraEuler))}}const Um=3,Im=2.5;class Nm{constructor(e,t,n){this.camera=e,this.human=t,this.store=n,this.enabled=!1,this.blend=0,this.state="human",this.anchorPosition=new L,this.anchorQuaternion=new on,this.targetPosition=new L,this.targetQuaternion=new on,this.syncFromCamera(),n.subscribe(s=>{(s.path==="*"||s.path==="camera.director")&&(this.enabled=!!n.get("camera.director"),this.enabled||this.returnToHuman())}),this.enabled=!!n.get("camera.director")}syncFromCamera(){this.anchorPosition.copy(this.camera.position),this.anchorQuaternion.copy(this.camera.quaternion),this.targetPosition.copy(this.camera.position),this.targetQuaternion.copy(this.camera.quaternion)}returnToHuman(){this.state="human",this.blend=0,this.syncFromCamera()}update(e){if(!this.enabled){this.returnToHuman();return}const t=performance.now(),n=this.human.hasActiveInput(),s=this.human.getIdleSeconds(t);if(n||s<Um){this.returnToHuman();return}this.state!=="director"&&(this.state="director",this.syncFromCamera()),this.blend=Math.min(1,this.blend+e/Im),this.targetPosition.copy(this.anchorPosition),this.targetQuaternion.copy(this.anchorQuaternion),this.camera.position.lerpVectors(this.anchorPosition,this.targetPosition,this.blend),this.camera.quaternion.slerpQuaternions(this.anchorQuaternion,this.targetQuaternion,this.blend)}getDebugState(){return{enabled:this.enabled,state:this.state,blend:this.blend,idleSeconds:this.human.getIdleSeconds()}}}const Fm=600,Om=3,Bm=.85,Ln=1e-5;class zm{constructor(e,t){this.store=e,this.scene=t,this.enabled=!1,this.fade=0,this.time=0,this.sunBase=this._readSun(),this.elevationPhase=0,this.elevationOffsetDeg=0,this.azimuthPhase=0,this.azimuthBaseDeg=this.sunBase.azimuthDeg??0,this._lastSunApplied=null,this._manualOverride=!1,this._publishing=!1,this._suppressEnableChange=!1,e.subscribe(n=>this._onStoreChange(n)),this.enabled=!!e.get("orbitSweep.enable"),this._alignSweepToSun(this.sunBase),this._publishSun(this.sunBase,!0)}_readSun(){return{elevationDeg:this.store.get("sun.elevationDeg"),azimuthDeg:this.store.get("sun.azimuthDeg"),intensity:this.store.get("sun.intensity")}}_onStoreChange(e){if(this._publishing)return;const t=e.path;if(t==="*"){this.enabled=!!this.store.get("orbitSweep.enable"),this._manualOverride=!1,this._resetBase(),this.enabled||(this.fade=0);return}if(t==="orbitSweep.enable"){if(this.enabled=!!e.value,this._suppressEnableChange)return;this.enabled?this._startFromOrbitValue():this._freezeAtCurrentSun();return}if(t==="orbitSweep.elevationRange"){this._alignSweepToSun(this._readOrbitSun(),{elevation:!0,azimuth:!1});return}if(t==="orbitSweep.elevationDeg"||t==="orbitSweep.azimuthDeg"){this._manualOverride=!this.enabled,this.fade=1;const n=this._readOrbitSun();this._alignSweepToSun(n,{elevation:t==="orbitSweep.elevationDeg",azimuth:t==="orbitSweep.azimuthDeg"}),this.scene.setSunOverride(n),this._lastSunApplied=n;return}if(t&&t.startsWith("sun.")){if(this._manualOverride=!1,this._lastSunApplied=null,this.sunBase=this._readSun(),this._alignSweepToSun(this.sunBase),this._publishSun(this.sunBase,!0),this.enabled){this.enabled=!1;try{this._suppressEnableChange=!0,this.store.set("orbitSweep.enable",!1)}finally{this._suppressEnableChange=!1}}this.scene.setSunOverride(null)}}_resetBase(){this._manualOverride=!1,this.sunBase=this._readSun(),this._alignSweepToSun(this.sunBase),this._lastSunApplied=null,this.scene.setSunOverride(null),this._publishSun(this.sunBase,!0)}_startFromOrbitValue(){this._manualOverride=!1,this.sunBase=this._readSun();const e=this._readOrbitSun();this._alignSweepToSun(e),this._lastSunApplied=null,this.fade=1}_freezeAtCurrentSun(){const e=this._lastSunApplied||this._readOrbitSun();this._manualOverride=!0,this.fade=1,this._alignSweepToSun(e),this.scene.setSunOverride(e),this._lastSunApplied=e,this._publishSun(e,!0)}_alignSweepToSun(e,t={elevation:!0,azimuth:!0}){if(t.elevation){const n=this._elevationRange(),s=Ne.clamp(e.elevationDeg,n[0],n[1]);this.elevationPhase=km(this.elevationPhase,s,n),this.elevationOffsetDeg=e.elevationDeg-s}t.azimuth&&(this.azimuthBaseDeg=bi(e.azimuthDeg-Ne.radToDeg(this.azimuthPhase)))}_elevationRange(){const e=this.store.get("orbitSweep.elevationRange"),t=Array.isArray(e)?Number(e[0]):2,n=Array.isArray(e)?Number(e[1]):50,s=Ne.clamp(Math.min(t,n),-10,90),r=Ne.clamp(Math.max(t,n),-10,90);return r-s<.5?[s,s+.5]:[s,r]}_speed(){return Ne.clamp(this.store.get("orbitSweep.speed")??.5,0,4)}_axisSpeed(e,t,n){return Ne.clamp(this.store.get(e)??t,0,n)}_readOrbitSun(){const e=this._readSun();return{elevationDeg:Ne.clamp(Number(this.store.get("orbitSweep.elevationDeg")??e.elevationDeg),-10,90),azimuthDeg:bi(Number(this.store.get("orbitSweep.azimuthDeg")??e.azimuthDeg)),intensity:e.intensity}}_publishSun(e,t=!1){const n=Ne.clamp(Number(e.elevationDeg),-10,90),s=bi(Number(e.azimuthDeg)),r=this.store.get("orbitSweep.elevationDeg"),a=this.store.get("orbitSweep.azimuthDeg"),o=t||Math.abs(n-r)>Ln,l=t||Math.abs(Us(s,a))>Ln;if(!(!o&&!l))try{this._publishing=!0,o&&this.store.set("orbitSweep.elevationDeg",n),l&&this.store.set("orbitSweep.azimuthDeg",s)}finally{this._publishing=!1}}_sunSweep(){const[e,t]=this._elevationRange(),n=(e+t)*.5,s=(t-e)*.5,r=n+Math.sin(this.elevationPhase)*s+this.elevationOffsetDeg,a=bi(this.azimuthBaseDeg+Ne.radToDeg(this.azimuthPhase));return{elevationDeg:Ne.clamp(r,-10,90),azimuthDeg:a,intensity:this.sunBase.intensity}}update(e){this.time+=e;const t=this._speed(),n=e/Fm*Math.PI*2*t;if(this.enabled){const h=n*this._axisSpeed("orbitSweep.elevationSpeed",4,24);this.elevationPhase+=h,this.azimuthPhase+=n*this._axisSpeed("orbitSweep.azimuthSpeed",.5,8),this._relaxElevationOffset(h)}if(this._manualOverride&&!this.enabled){const h=this._readOrbitSun();(!this._lastSunApplied||Math.abs(h.elevationDeg-this._lastSunApplied.elevationDeg)>Ln||Math.abs(Us(h.azimuthDeg,this._lastSunApplied.azimuthDeg))>Ln)&&(this.scene.setSunOverride(h),this._lastSunApplied=h),this._publishSun(h);return}const s=this.enabled?1:0,r=this.enabled?Om:Bm,a=e/r;if(this.fade<s?this.fade=Math.min(s,this.fade+a):this.fade>s&&(this.fade=Math.max(s,this.fade-a)),this.fade<=0&&!this.enabled){this._lastSunApplied&&(this.scene.setSunOverride(null),this._lastSunApplied=null),this._publishSun(this._readSun());return}const o=this._readSun(),l=this._sunSweep(),u={elevationDeg:Ne.lerp(o.elevationDeg,l.elevationDeg,this.fade),azimuthDeg:bi(Gm(o.azimuthDeg,l.azimuthDeg,this.fade)),intensity:o.intensity};(!this._lastSunApplied||Math.abs(u.elevationDeg-this._lastSunApplied.elevationDeg)>Ln||Math.abs(Us(u.azimuthDeg,this._lastSunApplied.azimuthDeg))>Ln)&&(this.scene.setSunOverride(u),this._lastSunApplied=u),this._publishSun(u)}_relaxElevationOffset(e){if(Math.abs(this.elevationOffsetDeg)<=Ln){this.elevationOffsetDeg=0;return}const[t,n]=this._elevationRange(),s=Math.max(.001,(n-t)*.5),r=Math.abs(e)*s;r<=Ln||(this.elevationOffsetDeg=Hm(this.elevationOffsetDeg,0,r))}}function bi(i){return((i+180)%360+360)%360-180}function Us(i,e){return bi(i-e)}function Gm(i,e,t){return i+Us(e,i)*Ne.clamp(t,0,1)}function km(i,e,t){const[n,s]=t,r=(n+s)*.5,a=Math.max(.001,(s-n)*.5),o=Ne.clamp((e-r)/a,-1,1),l=Math.asin(o),u=Math.PI-l,c=[],h=Math.round(i/(Math.PI*2));for(let g=h-1;g<=h+1;g++){const v=g*Math.PI*2;c.push(l+v,u+v)}let d=c[0],m=Math.abs(d-i);for(const g of c){const v=Math.abs(g-i);v<m&&(d=g,m=v)}return d}function Hm(i,e,t){return i<e?Math.min(e,i+t):i>e?Math.max(e,i-t):e}function ei(i){let e=i>>>0;return function(){e+=1831565813;let n=Math.imul(e^e>>>15,1|e);return n^=n+Math.imul(n^n>>>7,61|n),((n^n>>>14)>>>0)/4294967296}}function $i(i,e,t){return i+(e-i)*t}function Wi(i,e,t=1){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2246822519);return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967296}function No(i){return i*i*(3-2*i)}function Ki(i,e,t=1){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=No(r),l=No(a),u=Wi(n,s,t),c=Wi(n+1,s,t),h=Wi(n,s+1,t),d=Wi(n+1,s+1,t);return $i($i(u,c,o),$i(h,d,o),l)}function Kt(i,e,{seed:t=1,octaves:n=5,lacunarity:s=2,gain:r=.5,warp:a=0}={}){let o=.5,l=1,u=0,c=0,h=i,d=e;for(let m=0;m<n;m++)a>0&&(h+=(Ki(h*.7,d*.7,t+31+m)-.5)*a,d+=(Ki(h*.7+9.2,d*.7,t+67+m)-.5)*a),u+=Ki(h*l,d*l,t+m*101)*o,c+=o,l*=s,o*=r;return u/Math.max(c,1e-4)}function Fo(i,e,t={}){const n=Kt(i,e,t);return 1-Math.abs(n*2-1)}class Vm{constructor({resolution:e,worldSize:t,vstep:n}){this.res=e,this.worldSize=t,this.cellSize=t/e,this.vstep=n,this.half=t/2;const s=e*e;this.heightVox=new Int16Array(s),this.material=new Uint8Array(s),this.season=new Uint8Array(s),this.land=new Uint8Array(s),this.channel=new Uint8Array(s)}idx(e,t){return t*this.res+e}inBounds(e,t){return e>=0&&t>=0&&e<this.res&&t<this.res}cellToWorld(e,t){return[(e+.5)*this.cellSize-this.half,(t+.5)*this.cellSize-this.half]}worldToCell(e,t){return[Math.floor((e+this.half)/this.cellSize),Math.floor((t+this.half)/this.cellSize)]}heightMetresAt(e,t){return this.inBounds(e,t)?this.heightVox[this.idx(e,t)]*this.vstep:-9999}surfaceHeightWorld(e,t){const[n,s]=this.worldToCell(e,t);return this.inBounds(n,s)?this.heightVox[this.idx(n,s)]*this.vstep:-9999}}function Pe(i){const e=parseInt(i.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function yt(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}const Xe={SAND:0,SEAFLOOR:1,GRASS:2,GRASSY_SNOW:3,SNOW:4,ROCK:5,DIRT:6,AUTUMN:7,FAIRWAY:8},Oo={[Xe.SAND]:[Pe("#cf9a4f"),Pe("#f0d089")],[Xe.SEAFLOOR]:[Pe("#0a4e6e"),Pe("#2fd9c8")],[Xe.GRASS]:[Pe("#2f8a2e"),Pe("#7ad83e")],[Xe.GRASSY_SNOW]:[Pe("#5f8a55"),Pe("#aecaa0")],[Xe.SNOW]:[Pe("#9fc3cc"),Pe("#dceef0")],[Xe.ROCK]:[Pe("#5a554b"),Pe("#8a8276")],[Xe.DIRT]:[Pe("#6a4a2c"),Pe("#a8814a")],[Xe.AUTUMN]:[Pe("#b5601f"),Pe("#e8a52e")],[Xe.FAIRWAY]:[Pe("#5fb22a"),Pe("#a6ef4e")]},Wm=Pe("#05293c"),Bo=Pe("#137a8c"),Xm=Pe("#2fd9c8"),qm=Pe("#3debe0");function zo(i,e){const t=Oo[i]||Oo[Xe.ROCK];return yt(t[0],t[1],Math.max(0,Math.min(1,e)))}function Ym(i){const e=Math.max(0,Math.min(1,i));return e<.5?yt(Xm,Bo,e*2):yt(Bo,Wm,(e-.5)*2)}const Go={0:[Pe("#2f8a2e"),Pe("#7ad83e")],1:[Pe("#7a5520"),Pe("#d99a33")],2:[Pe("#1d5a2c"),Pe("#3f8f3c")],3:[Pe("#6f8a74"),Pe("#cfe3da")]};function $m(i,e){const t=Go[i]||Go[0];return yt(t[0],t[1],Math.max(0,Math.min(1,e)))}const wt={palmTrunkLow:Pe("#7a5a30"),palmTrunkHigh:Pe("#b08a4a"),palmFrondLow:Pe("#2f7d33"),palmFrondHigh:Pe("#6fce4a"),coniferLow:Pe("#1f4d3a"),coniferHigh:Pe("#2e6b4f"),coniferTrunk:Pe("#5a4632"),broadleafTrunkLow:Pe("#5a4127"),broadleafTrunkHigh:Pe("#8a6a42"),summerLeafLow:Pe("#3c8f33"),summerLeafHigh:Pe("#7ad84f"),autumnLeaf:[Pe("#e6b800"),Pe("#d98a2b"),Pe("#c6492f")],winterBark:Pe("#6b5240"),winterSnow:Pe("#eef6f8"),winterCyan:Pe("#bfe9f0")},ti={SUMMER:0,AUTUMN:1,CONIFER:2,WINTER:3};function Km(i,e){const t=i.sweepDeg*Math.PI/180,n=Math.cos(t)*7.3,s=Math.sin(t)*7.3,r=Math.min(.085,i.borderWarp*.14);return function(o,l,u){const c=Kt(o*.0017+n,l*.0017+s,{seed:e+71,octaves:3,warp:.5})-.5,h=Math.max(0,Math.min(1,u+c*r*2));let d;return h<i.summerEnd?d=ti.SUMMER:h<i.autumnEnd?d=ti.AUTUMN:h<i.coniferEnd?d=ti.CONIFER:d=ti.WINTER,{s:h,season:d}}}function ko(i){const{seed:e,radius:t,shape:n,resolution:s,lowland:r,massif:a,massifSharpness:o,massifOffsetX:l,massifOffsetZ:u,terraceStep:c,warp:h,ridge:d,beachWidth:m,valleyDepth:g,valleyWidth:v,seaLevel:p,floorDepth:f,floorShape:T,floorRoughness:b,deltaFloor:y,seasons:F}=i,w=r+a,A=Math.max(.45,o??1),C=Math.max(-.45,Math.min(.45,l??0))*t,M=Math.max(-.45,Math.min(.45,u??0))*t,x=Math.max(.35,T??.85),R=Math.max(0,b??1),B=Math.max(0,Math.min(1,y??0)),O=t*2.3,G=O/s,$=c>0?c:Math.max(1.5,G*.85),z=new Vm({resolution:s,worldSize:O,vstep:$}),J=Km(F,e),X=.0015,te=ei(e*2654435761>>>0),re=n>=1&&n<=4?n:1+Math.floor(ei(e*40503>>>0)()*4),me=te()*Math.PI*2,Le=Math.cos(me),Ve=Math.sin(me),K=1.55+te()*.55,ee=3+Math.floor(te()*3),pe=te()*Math.PI*2,ae=.17+te()*.1,ye=te()*Math.PI*2,Ce=t*(.52+te()*.18),Ue=t*(.5+te()*.22),je=Math.cos(ye)*Ce,Oe=Math.sin(ye)*Ce;function rt(_,P){const k=_*Le-P*Ve,q=_*Ve+P*Le,V=Math.hypot(re===3?k/K:k,q),ie=Kt(_*.001+4.2,P*.001-7.8,{seed:e+5,octaves:4,warp:.55}),Q=Kt(_*.0026-2.1,P*.0026+5.4,{seed:e+23,octaves:3,warp:.4})-.5;let se=t*(.74+.46*(ie-.5)+.16*Q);if(re===4){const Z=Math.atan2(q,k);se*=1+ae*Math.cos(ee*Z+pe+(ie-.5)*1.5)}let Ee=1-Xn(.45,1.04,V/Math.max(1,se));if(re===2){const Z=Math.hypot(_-je,P-Oe);Ee*=Xn(Ue*.45,Ue*1,Z)}return Ee}function I(_,P){const k=Kt(_*.0016+31.7,P*.0016-12.3,{seed:e+131,octaves:3,warp:.45});return Math.max(0,Math.min(1,(k-.34)/.5))}const bt=(()=>{const _=ei(e*911>>>0),P=[],k=_()*Math.PI*2,q=t*(.08+_()*.24);P.push({cx:Math.cos(k)*q+C,cz:Math.sin(k)*q+M,h:a*(.8+_()*.16),sig:t*(.13+_()*.05),rot:_()*Math.PI*2,sk:_(),spur:3+Math.floor(_()*4)});const V=(_()<.55?1:0)+(_()<.25?1:0);for(let ie=0;ie<V;ie++){const Q=k+(_()-.5)*2.6,se=t*(.22+_()*.3);P.push({cx:Math.cos(Q)*se+C,cz:Math.sin(Q)*se+M,h:a*(.2+_()*.2),sig:t*(.09+_()*.05),rot:_()*Math.PI*2,sk:_(),spur:3+Math.floor(_()*3)})}return P})();function We(_,P){let k=0;for(const q of bt){const V=_-q.cx,ie=P-q.cz,Q=Math.exp(-(V*V+ie*ie)/(2*q.sig*q.sig));if(Q<.0025)continue;const se=Math.pow(Q,1.22*A),Ee=Math.cos(q.rot),Z=Math.sin(q.rot),oe=V*Ee-ie*Z,ge=V*Z+ie*Ee,Me=Fo(oe*.011+q.sk*7,ge*.011-q.sk*4,{seed:e+17+((q.cx|0)&255),octaves:5,warp:.55}),le=Math.atan2(ge,oe),De=.5+.5*Math.cos(le*q.spur+Me*3);k+=q.h*se*(.5+.5*Me)*(.85+.3*De)}return k}const He=g>0,be=[];if(He){const _=ei(e*2246822519>>>0^2654435761),P=bt[0]||{cx:0,cz:0},k=P.cx*.6+(_()-.5)*t*.12,q=P.cz*.6+(_()-.5)*t*.12,V=Math.atan2(q,k)+(_()-.5)*1.6,ie=Math.cos(V),Q=Math.sin(V),se=-Q,Ee=ie,Z=t*1.2,oe=48,ge=[];for(let le=0;le<=oe;le++){const De=le/oe,we=De*Z,Ae=(Kt(De*2.6+11.3,7.7,{seed:e+201,octaves:3})-.5)*t*.55*(.2+De);ge.push({x:k+ie*we+se*Ae,z:q+Q*we+Ee*Ae,t:De})}be.push(ge);const Me=ge[Math.floor(oe*.8)];for(const le of[-1,1]){const De=V+le*(.34+_()*.26),we=Math.cos(De),Ae=Math.sin(De),D=t*.55,ce=[];for(let Y=0;Y<=16;Y++){const j=Y/16;ce.push({x:Me.x+we*j*D,z:Me.z+Ae*j*D,t:.8+.2*j})}be.push(ce)}}function Ze(_,P){let k=0,q=0;for(const V of be)for(let ie=0;ie<V.length;ie++){const Q=V[ie],se=_-Q.x,Ee=P-Q.z,Z=v*(.5+1.7*Q.t)+(Q.t>.78?v*2.4*(Q.t-.78)/.22:0),oe=Math.exp(-(se*se+Ee*Ee)/(Z*Z));oe>k&&(k=oe,q=Q.t)}return{field:k,t:q}}function Te(_,P){if(!He)return 0;const{field:k,t:q}=Ze(_,P);if(k<.02)return 0;const V=.32+.68*Xn(0,.42,q);return g*V*k}function E(_,P){const k=rt(_,P);if(k>.5){const Q=(k-.5)*2,se=Math.min(1,Math.hypot(_,P)/t),Ee=I(_,P),Z=Kt(_*X,P*X,{seed:e,octaves:5,warp:h}),oe=Fo(_*X*1.7+9.7,P*X*1.7-3.3,{seed:e+17,octaves:5,warp:h*.6}),ge=(1-Math.pow(se,1.5))*r*.5,Me=Z*r*.85+Math.pow(oe,1.5)*r*1.1*(.35+d)+We(_,P)+ge,le=$i(.03,.46,Xn(.3,.74,Ee)),De=Math.min(1,Q/le),we=Xn(0,1,De)*(m*$i(.35,.9,Ee)),Ae=Xn(le,Math.min(.98,le+.5),Q);return p+.5+we+Ae*Me-Te(_,P)}const q=(.5-k)*2,V=(Kt(_*.01,P*.01,{seed:e+90,octaves:3})-.5)*4*R;let ie=p-1-Math.pow(q,x)*f+V;if(He&&B>0){const Q=Ze(_,P),se=Xn(.58,1,Q.t);ie-=g*B*Q.field*se*.85}return ie}for(let _=0;_<s;_++)for(let P=0;P<s;P++){const[k,q]=z.cellToWorld(P,_),V=E(k,q),ie=z.idx(P,_),Q=E(k+G,q),se=E(k,q+G),Ee=Math.hypot(Q-V,se-V)/G,Z=(V-p)/Math.max(1,w),{season:oe}=J(k,q,Z);z.season[ie]=oe;const ge=V>p-.35;z.land[ie]=ge?1:0,z.channel[ie]=He&&Ze(k,q).field>.3?1:0;const Me=I(k,q),le=(Kt(k*.02+5.1,q*.02-2.7,{seed:e+88,octaves:3,warp:.4})-.5)*.13,De=(F.coniferEnd??.84)*.78,we=Z+le;let Ae;ge?we>De+.05?Ae=Xe.SNOW:Ee>.92?Ae=Xe.ROCK:V<=p+m*1.25&&Ee<.34?Ae=Xe.SAND:V<=p+m*.9&&Me<.34?Ae=Xe.ROCK:we>De-.06&&Ee<.8?Ae=Xe.GRASSY_SNOW:Z>.66?Ae=Xe.ROCK:Z>.5&&Ee>.62?Ae=Xe.DIRT:Ae=Xe.GRASS:Ae=Xe.SEAFLOOR,(Ae===Xe.SNOW||Ae===Xe.GRASSY_SNOW)&&(F.craggy??0)>0&&Ki(k*.085+2.3,q*.085-4.1,e+211)<F.craggy*.6&&(Ae=Xe.ROCK);const D=F.fairway??0;if(D>0&&Ae===Xe.GRASS&&Ee<.42){const Y=p+m*1.25+(F.fairwayBand??24);if(V<=Y&&Kt(k*.011+7.7,q*.011-3.3,{seed:e+223,octaves:3,warp:.45})<.3+D*.62){Ae=Xe.FAIRWAY;const he=Math.max(3,F.bunkerSize??11);Ki(k/he+41,q/he-17,e+233)<(F.bunkerDensity??0)*.45&&(Ae=Xe.SAND)}}z.material[ie]=Ae;const ce=(Kt(k*.05+3.1,q*.05-6.7,{seed:e+53,octaves:3,warp:.5})-.5)*$*1.5;z.heightVox[ie]=Math.round((V+ce)/$)}return z.meta={seed:e,radius:t,worldSize:O,cellSize:G,vstep:$,seaLevel:p,floorDepth:f,maxHeight:w},z}function Xn(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i||1)));return n*n*(3-2*n)}function Ho(i,e){const{res:t,cellSize:n,vstep:s,half:r}=i,{seaLevel:a,maxHeight:o,floorDepth:l}=i.meta,u=a-l-6,c=[],h=[],d=[],m=(w,A)=>i.heightVox[i.idx(w,A)]*s;function g(w,A){const C=i.idx(w,A),M=i.material[C],x=i.heightVox[C]*s,R=(Wi(w,A,e)-.5)*.09;let B;if(M===Xe.SEAFLOOR){const $=(a-x)/Math.max(1,l);B=Ym($+R*.4),i.channel&&i.channel[C]&&(B=yt(B,qm,.55+R))}else if(M===Xe.SAND){const $=Math.max(0,Math.min(1,(x-a)/6));B=zo(Xe.SAND,.25+$*.6+R)}else if(M===Xe.GRASS){const $=Math.max(0,Math.min(1,(x-a)/Math.max(1,o)));B=$m(i.season[C],.34+$*.5+R)}else{const $=Math.max(0,Math.min(1,(x-a)/Math.max(1,o)));B=zo(M,.32+$*.55+R)}let O=0,G=0;if(w>0&&(O+=i.heightVox[C-1],G++),w<t-1&&(O+=i.heightVox[C+1],G++),A>0&&(O+=i.heightVox[C-t],G++),A<t-1&&(O+=i.heightVox[C+t],G++),G){const $=i.heightVox[C]-O/G,z=Math.max(.66,Math.min(1.14,1+$*.11));B=[B[0]*z,B[1]*z,B[2]*z]}return B}function v(w,A,C,M,x,R,B,O,G,$,z,J,X,te,re){const me=M-w,Le=x-A,Ve=R-C,K=$-w,ee=z-A,pe=J-C;let ae=-(Le*pe-Ve*ee),ye=-(Ve*K-me*pe),Ce=-(me*ee-Le*K);const Ue=Math.hypot(ae,ye,Ce)||1;ae/=Ue,ye/=Ue,Ce/=Ue;const je=[w,A,C,B,O,G,M,x,R,w,A,C,$,z,J,B,O,G];for(let Oe=0;Oe<6;Oe++)c.push(je[Oe*3],je[Oe*3+1],je[Oe*3+2]),h.push(ae,ye,Ce),d.push(X,te,re)}for(let w=0;w<t;w++){let A=0;for(;A<t;){const C=i.idx(A,w),M=i.material[C],x=i.heightVox[C];let R=A;for(;R+1<t;){const re=i.idx(R+1,w);if(i.material[re]!==M||i.heightVox[re]!==x)break;R++}const B=x*s,O=A*n-r,G=(R+1)*n-r,$=w*n-r,z=(w+1)*n-r,[J,X,te]=g(A,w);v(O,B,$,G,B,$,G,B,z,O,B,z,J,X,te),A=R+1}}const p=.8;for(let w=0;w<t;w++)for(let A=0;A<t;A++){const C=m(A,w),[M,x,R]=g(A,w),B=M*p,O=x*p,G=R*p,$=A*n-r,z=(A+1)*n-r,J=w*n-r,X=(w+1)*n-r,te=[[A-1,w,$,J,$,X],[A+1,w,z,X,z,J],[A,w-1,z,J,$,J],[A,w+1,$,X,z,X]];for(const[re,me,Le,Ve,K,ee]of te){let pe;if(i.inBounds(re,me))pe=m(re,me);else{if(C<=a+.5)continue;pe=u}C-pe<=.001||v(Le,C,Ve,K,C,ee,K,pe,ee,Le,pe,Ve,B,O,G)}}const f=new Vt;f.setAttribute("position",new mt(c,3)),f.setAttribute("normal",new mt(h,3)),f.setAttribute("color",new mt(d,3)),f.computeBoundingSphere();const T=new ks({vertexColors:!0,flatShading:!0,side:an,roughness:.95,metalness:0,transparent:!0}),b=i.meta.radius*1.05,y=Math.min(i.meta.radius*1.1,i.worldSize*.5*.98);T.onBeforeCompile=w=>{w.uniforms.uRFade0={value:b},w.uniforms.uRFade1={value:y},w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorldXZ = (modelMatrix * vec4(transformed,1.0)).xz;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWorldXZ;
uniform float uRFade0;
uniform float uRFade1;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float _r = length(vWorldXZ);
  gl_FragColor.a *= 1.0 - smoothstep(uRFade0, uRFade1, _r);`)};const F=new st(f,T);return F.castShadow=!0,F.receiveShadow=!0,F.name="IslandVoxels",F.userData.quadVerts=c.length/3,F}const jm=`
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Zm=`
uniform float uTime;
uniform vec3 uCausticColor;
uniform float uCausticIntensity;
uniform float uCausticScale;
uniform float uCausticOpacity;
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
  gl_FragColor = vec4(color, c * uCausticOpacity * fade);
}
`,Jm=`
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Qm=`
uniform float uTime;
uniform float uAmount;
uniform float uAlpha;
uniform float uFalloff;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  float across = 1.0 - smoothstep(0.76, 1.0, abs(vUv.x - 0.5) * 2.0);
  float coast = smoothstep(0.02, 0.16, vUv.y) * (1.0 - smoothstep(0.88, 1.0, vUv.y));
  float outward = exp(-vUv.y * uFalloff);
  float n = sin(vWorldPos.x * 0.021 + vWorldPos.z * 0.017);
  float pulse = 0.90 + 0.06 * sin(uTime * 0.9 + n * 3.14159)
    + 0.04 * sin(uTime * 1.7 + vWorldPos.x * 0.013 + vWorldPos.z * 0.017);
  float a = uAmount * uAlpha * across * coast * outward * pulse;
  gl_FragColor = vec4(uColor, a);
}
`;function eg(i,e){if(!i?.land||!i?.material)return[];const{res:t,cellSize:n,vstep:s}=i,r=Math.max(1,Math.floor(t/384)),a=[],o=1800,l=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];for(let h=r;h<t-r;h+=r)for(let d=r;d<t-r;d+=r){const m=i.idx(d,h);if(!i.land[m])continue;const g=i.heightVox[m]*s;if(g<e-.5||g>e+n*3)continue;let v=0,p=0,f=0;for(const[F,w]of l){const A=d+F,C=h+w;if(!i.inBounds(A,C))continue;const M=i.idx(A,C),x=i.heightVox[M]*s;(!i.land[M]||x<=e+.25)&&(v+=F,p+=w,f++)}if(!f)continue;const T=Math.hypot(v,p)||1,[b,y]=i.cellToWorld(d,h);a.push({x:b,z:y,nx:v/T,nz:p/T})}if(a.length<=o)return a;const u=[],c=a.length/o;for(let h=0;h<o;h++)u.push(a[Math.floor(h*c)]);return u}function tg(i,{y:e,cellSize:t,widthMul:n,depthMul:s,insetMul:r}){const a=[],o=[],l=Math.max(t*n,1),u=Math.max(t*s,1),c=t*r;for(const d of i){const m=-d.nz,g=d.nx,v=d.x-d.nx*c,p=d.z-d.nz*c,f=d.x+d.nx*u,T=d.z+d.nz*u,b=l*.5,y=[v-m*b,e,p-g*b],F=[v+m*b,e,p+g*b],w=[f+m*b,e,T+g*b],A=[f-m*b,e,T-g*b];a.push(...y,...F,...w,...y,...w,...A),o.push(0,0,1,0,1,1,0,0,1,1,0,1)}const h=new Vt;return h.setAttribute("position",new mt(a,3)),h.setAttribute("uv",new mt(o,2)),h.computeBoundingSphere(),h}class Vo{constructor(e){this.group=new sn,this.group.name="Sea";const t=Math.max(e.worldSize*12,26e3)*.5,n=e.seaLevel-(e.floorDepth||60)-10;this._horizon=new Re("#bcd4d6"),this.floor=new st(new Yi(t,96),new _a({color:new Re("#0b4f68"),fog:!0})),this.floor.rotation.x=-Math.PI/2,this.floor.position.y=n,this.floor.renderOrder=1,this.group.add(this.floor),this.surfaceMat=new ks({color:new Re("#1f93a4"),transparent:!0,opacity:.5,depthWrite:!1,roughness:.18,metalness:0,side:Gt}),this.surfaceMat.forceSinglePass=!0;const s=e.radius*1.4,r=t*.96;this._sunDir=new L(0,1,0),this._sunCol=new Re("#fff3df"),this.surfaceMat.onBeforeCompile=a=>{a.uniforms.uHorizon={value:this._horizon},a.uniforms.uF0={value:s},a.uniforms.uF1={value:r},a.uniforms.uSunDir={value:this._sunDir},a.uniforms.uSunCol={value:this._sunCol},a.uniforms.uGlint={value:.7},a.uniforms.uGlintSpread={value:1.1},a.uniforms.uCamPos={value:new L},this._surfUniforms=a.uniforms,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vec4 _wp = modelMatrix * vec4(transformed,1.0);
  vWXZ = _wp.xz;
  vWPos = _wp.xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
  gl_FragColor.a = mix(gl_FragColor.a, 0.0, _f * _f);`)},this.surface=new st(new Yi(t,96),this.surfaceMat),this.surface.rotation.x=-Math.PI/2,this.surface.renderOrder=4,this.group.add(this.surface),this.causticMat=new ht({vertexShader:jm,fragmentShader:Zm,uniforms:{uTime:{value:0},uCausticColor:{value:new Re(.18,.5,.55)},uCausticIntensity:{value:e.causticIntensity},uCausticScale:{value:e.causticScale},uCausticOpacity:{value:e.causticOpacity??.22},uFadeRadius:{value:e.radius*1.15}},transparent:!0,blending:ji,depthWrite:!1}),this.caustic=new st(new Yi(e.radius*1.4,80),this.causticMat),this.caustic.rotation.x=-Math.PI/2,this.caustic.renderOrder=3,this.group.add(this.caustic),this.shoreGlow=this._makeShoreGlow(e),this.shoreGlow&&this.group.add(this.shoreGlow),this.setLevel(e.seaLevel),this.setShoreGlow(e.shoreGlow)}_makeShoreGlow(e){const t=eg(e.volume,e.seaLevel);if(!t.length)return null;const n=Ne.clamp(e.shoreGlowWidth??1,.25,4),s=Ne.clamp(e.shoreGlowFollow??1,0,1),r=Ne.lerp(3.6,1,s),a=new sn;a.name="CoastlineGlow";const o={vertexShader:Jm,fragmentShader:Qm,transparent:!0,blending:ji,depthWrite:!1,depthTest:!0,side:Gt,forceSinglePass:!0},l=(u,c,h,d,m,g)=>{const v=new ht({...o,uniforms:{uTime:{value:0},uAmount:{value:0},uAlpha:{value:h},uFalloff:{value:d},uColor:{value:new Re(c)}}}),p=new st(tg(t,{y:e.seaLevel+g,cellSize:e.volume.cellSize,...m}),v);return p.name=u,p.renderOrder=5,a.add(p),v};return this._shoreGlowMats=[l("CoastGlowCyan","#21e6ff",.34,2.2/n,{widthMul:2.4*r,depthMul:5.2*n,insetMul:Ne.lerp(0,.2,s)},.08),l("CoastGlowWhite","#f4ffff",.22,4.8/n,{widthMul:1.25*r,depthMul:1.9*n,insetMul:Ne.lerp(0,.05,s)},.11)],a}setLevel(e){this.surface.position.y=e,this.caustic.position.y=e-.5}setCaustic(e,t,n=.22){this.causticMat.uniforms.uCausticScale.value=e,this.causticMat.uniforms.uCausticIntensity.value=t,this.causticMat.uniforms.uCausticOpacity.value=n}setShoreGlow(e){this._glowBase=Ne.clamp(e,0,1.5);for(const t of this._shoreGlowMats||[])t.uniforms.uAmount.value=this._glowBase}setHorizon(e){this._horizon.copy(e),this.floor&&this.floor.material.color.copy(e).lerp(new Re("#0b4f68"),.6)}setSun(e,t){this._sunDir.copy(e).normalize(),this._sunCol.copy(t)}setGlint(e,t){this._surfUniforms&&(this._surfUniforms.uGlint.value=Math.max(0,e),this._surfUniforms.uGlintSpread.value=Math.max(.2,t))}update(e,t){t&&this._surfUniforms&&this._surfUniforms.uCamPos.value.copy(t),this.causticMat.uniforms.uTime.value=e;for(const n of this._shoreGlowMats||[])n.uniforms.uTime.value=e}}function kl(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Vt;let u=0;for(let c=0;c<i.length;++c){const h=i[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,c),u+=m}}if(t){let c=0;const h=[];for(let d=0;d<i.length;++d){const m=i[d].index;for(let g=0;g<m.count;++g)h.push(m.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(h)}for(const c in r){const h=Wo(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in a){const h=a[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const m=[];for(let v=0;v<a[c].length;++v)m.push(a[c][v][d]);const g=Wo(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Wo(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const a=new e(r),o=new Ft(a,t,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let d=0,m=c.count;d<m;d++)for(let g=0;g<t;g++){const v=c.getComponent(d,g);o.setComponent(d+h,g,v)}}else a.set(c.array,l);l+=c.count*t}return s!==void 0&&(o.gpuType=s),o}const Hl=new ns(.5,.5,1,6),Vl=new si(1,1,1),Wl=new bn(1,1);for(const i of[Hl,Vl,Wl])i.deleteAttribute("uv");const ws=new tt,qn=new on,Xo=new L,qo=new L,Un=new L,Si=new L,sa=new L,ni=new L(0,1,0);let Yo=class{constructor(){this.parts=[]}_push(e,t){const n=e.clone().applyMatrix4(ws),s=n.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r[a*3]=t[0],r[a*3+1]=t[1],r[a*3+2]=t[2];n.setAttribute("color",new Ft(r,3)),this.parts.push(n)}seg(e,t,n,s){Xo.copy(e),qo.copy(t),Un.subVectors(qo,Xo);const r=Math.max(.001,Un.length());qn.setFromUnitVectors(ni,Un.normalize()),sa.addVectors(e,t).multiplyScalar(.5),Si.set(n*2,r,n*2),ws.compose(sa,qn,Si),this._push(Hl,s)}box(e,t,n,s,r,a,o){Un.copy(t).normalize(),qn.setFromUnitVectors(ni,Un),a&&qn.multiply(new on().setFromAxisAngle(ni,a)),Si.set(s,n,r),ws.compose(e,qn,Si),this._push(Vl,o)}card(e,t,n,s,r){Un.copy(t).normalize(),qn.setFromUnitVectors(ni,Un),Si.set(s,n,1),ws.compose(e,qn,Si),this._push(Wl,r)}finish(e,t){if(!this.parts.length)return null;const n=kl(this.parts,!1);for(const r of this.parts)r.dispose();n.computeVertexNormals();const s=new st(n,new ks({vertexColors:!0,flatShading:!0,roughness:.8,metalness:0,side:t?Gt:an}));return s.name=e,s.castShadow=!0,s.receiveShadow=!0,s}};const ng=Math.PI*(3-Math.sqrt(5)),$o=[.05,.17,.07],Ko=[.2,.52,.18],jo=[.8,1,.3];function Zo(i,e,t){let n=Math.min(1,Math.max(0,i));n=Math.pow(n,1/Math.max(.2,t.shadeContrast));let s=n<.5?yt($o,Ko,n*2):yt(Ko,jo,(n-.5)*2);return s=yt(s,$o,t.shadeDark*Math.pow(1-n,1.4)*(.35+.65*e)),s=yt(s,jo,t.shadeLime*Math.pow(n,1.6)*(1-.45*e)),s}const St={bend:4.5,swayAmp:.06,swaySpeed:.42,height:18,trunkSegs:10,trunkBaseR:.81,trunkTopR:.22,ringFlare:2.08,frondCount:14,phyllo:96,crownLift:1,pitchSpread:1.39,frondLen:5,frondSpread:1.81,frondLenVar:.02,droop:1.45,droopBias:2.4,rachisWidth:.5,rachisStations:5,leaflets:16,leafLenMax:2.22,leafEnvExp:.68,leafCurl:.45,leafCurlGain:.9,leafWidthMax:.22,leafOut:.55,shadeDark:.84,shadeLime:.87,shadeContrast:.4};function ig(i){return i()<.68?15+5.5*Math.pow(i(),.85):19+5*i()}function sg(i){const e=(t,n)=>t*(1+(i()*2-1)*n);return{...St,height:ig(i),bend:2.6+i()*3.2,trunkSegs:8+(i()*7|0),trunkBaseR:e(St.trunkBaseR,.16),trunkTopR:e(St.trunkTopR,.22),ringFlare:e(St.ringFlare,.18),frondCount:11+(i()*8|0),phyllo:St.phyllo+(i()*2-1)*7,crownLift:e(St.crownLift,.14),pitchSpread:e(St.pitchSpread,.22),frondLen:4.3+i()*1.9,frondSpread:1.55+i()*.55,droop:1.15+i()*.45,droopBias:1.9+i()*.6,leaflets:13+(i()*7|0),leafLenMax:e(St.leafLenMax,.16),leafEnvExp:e(St.leafEnvExp,.18),leafCurl:e(St.leafCurl,.3),leafCurlGain:e(St.leafCurlGain,.22),leafWidthMax:e(St.leafWidthMax,.22),leafOut:e(St.leafOut,.16),shadeDark:Math.min(1,e(St.shadeDark,.07)),shadeLime:Math.min(1,e(St.shadeLime,.07)),shadeContrast:e(St.shadeContrast,.18)}}function rg(i,e){const t=new Yo,n=new Yo,s=i.height,r=Math.max(4,i.trunkSegs|0),a=(e()-.5)*i.bend,o=(e()-.5)*i.bend,l=[];for(let p=0;p<=r;p++){const f=p/r;l.push(new L(a*Math.sin(f*Math.PI)+o*f*f,f*s,o*Math.sin(f*Math.PI*.8)-a*f*f*.6))}for(let p=0;p<r;p++){const f=p/r,T=Ne.lerp(i.trunkBaseR,i.trunkTopR,f),b=yt(wt.palmTrunkLow,wt.palmTrunkHigh,f);t.seg(l[p],l[p+1],T,b);const y=yt(b,[b[0]*.66,b[1]*.62,b[2]*.5],.7),F=sa.copy(l[p]).lerp(l[p+1],.5).clone();t.box(F,ni,s/r*.42,T*i.ringFlare,T*i.ringFlare,p*ng,y)}const u=l[r],c=Math.max(1,i.frondCount|0),h=Ne.degToRad(i.phyllo),d=Math.max(3,i.rachisStations|0);for(let p=0;p<c;p++){const f=p*h,T=new L(Math.cos(f),0,Math.sin(f)),b=c>1?p/(c-1):0,y=i.crownLift+i.pitchSpread*(1-b)-.15*b,F=i.frondLen*(1-i.frondLenVar*.5+e()*i.frondLenVar),w=[];for(let C=0;C<=d;C++){const M=C/d;let x=M*M*(6-4*M+M*M)/3;x=Math.pow(Math.max(0,x),i.droopBias);const R=Math.sin(M*Math.PI*.5)*y;w.push(new L(T.x*F*M*i.frondSpread,R-i.droop*F*x,T.z*F*M*i.frondSpread))}for(let C=0;C<d;C++){const M=Ne.lerp(i.rachisWidth,i.rachisWidth*.3,C/d),x=w[C],R=w[C+1];n.card(x.clone().lerp(R,.5),R.clone().sub(x),x.distanceTo(R),M,Zo(.1+.3*C/d,b,i))}const A=Math.max(2,i.leaflets|0);for(let C=1;C<A;C++){const M=C/A,x=Math.min(d-1,M*d|0),R=w[x].clone().lerp(w[x+1],M*d-x),B=w[x+1].clone().sub(w[x]).normalize(),O=Un.crossVectors(B,ni).normalize(),G=Math.pow(Math.sin(M*Math.PI),i.leafEnvExp),$=(.4+G)*i.leafLenMax,z=i.leafCurl+i.leafCurlGain*(M+i.droop*.5),J=Zo(.12+.88*M,b,i);for(const X of[-1,1]){const te=O.clone().multiplyScalar(X*i.leafOut).addScaledVector(B,1-i.leafOut).addScaledVector(ni,-z).normalize(),re=R.clone().addScaledVector(te,$*.5);n.card(re,te,$,.06+i.leafWidthMax*G,J)}}}const m=new sn,g=t.finish("PalmTrunk",!1),v=n.finish("PalmCrown",!0);return g&&m.add(g),v&&(v.position.copy(u),m.add(v)),m.userData.sway={amp:i.swayAmp,speed:i.swaySpeed,phase:e()*6.28,crown:v},m.name="Palm",m}function ag(i){const e=ei(i>>>0||1);return rg(sg(e),e)}const ra=new si(1,1,1),Xl=new ns(.5,.5,1,6),ql=new ya(.5,1,7);for(const i of[ra,Xl,ql])i.deleteAttribute("uv");const Jo=new tt,Qo=new on,el=new Ht,tl=new L,nl=new L;class Yl{constructor(){this.parts=[]}_add(e,t,n,s,r,a,o,l,u,c,h){const d=e.clone();el.set(l,u,c),Qo.setFromEuler(el),tl.set(t,n,s),nl.set(r,a,o),Jo.compose(tl,Qo,nl),d.applyMatrix4(Jo);const m=d.attributes.position.count,g=new Float32Array(m*3);for(let v=0;v<m;v++)g[v*3]=h[0],g[v*3+1]=h[1],g[v*3+2]=h[2];d.setAttribute("color",new Ft(g,3)),this.parts.push(d)}box(e,t,n,s,r,a,o,l){this._add(ra,e,t,n,s,r,a,0,o,0,l)}boxR(e,t,n,s,r,a,o,l,u,c){this._add(ra,e,t,n,s,r,a,o,l,u,c)}cyl(e,t,n,s,r,a,o){this._add(Xl,e,t,n,r*2,a,s*2,0,0,0,o)}cone(e,t,n,s,r,a){this._add(ql,e,t,n,s*2,r,s*2,0,0,0,a)}build(e){const t=kl(this.parts,!1);for(const r of this.parts)r.dispose();t.computeVertexNormals();const n=new ks({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0}),s=new st(t,n);return s.name=e,s.castShadow=!0,s}}function og(i){const e=new Yl,t=13+i()*6;e.cyl(0,t*.32,0,.34,.5,t*.64,wt.coniferTrunk);const n=6;for(let s=0;s<n;s++){const r=s/(n-1),a=t*.28+r*t*.7,o=Ne.lerp(3.4,.5,r),l=t*.22;e.cone(0,a+l*.5,0,o,l,yt(wt.coniferLow,wt.coniferHigh,.2+r*.7))}return e.build("Conifer")}function vr(i,e){const t=new Yl,n=8+i()*4;let s=0,r=0;for(let u=0;u<3;u++){const c=u/3,h=c*n*.62;s+=(i()-.5)*.5,r+=(i()-.5)*.5,t.cyl(s,h+n*.11,r,.34,.5-c*.12,n*.22,yt(wt.broadleafTrunkLow,wt.broadleafTrunkHigh,c))}const a=n*.62+1.2,o=4+(i()*3|0);for(let u=0;u<o;u++){const c=u/o*Math.PI*2+i(),h=1.6+i()*1.8;t.boxR(s+Math.cos(c)*h*.5,a-.4+i()*.6,r+Math.sin(c)*h*.5,.22,.22,h,0,-c,.4+i()*.3,e==="winter"?wt.winterBark:wt.broadleafTrunkLow)}if(e==="winter"){for(let u=0;u<10;u++){const c=i()*Math.PI*2,h=i()*2.4,d=s+Math.cos(c)*h,m=r+Math.sin(c)*h,g=a+(i()-.2)*2.2;t.boxR(d,g,m,.12,.12,1+i(),0,-c,.6,wt.winterBark),i()>.45&&t.box(d,g+.5,m,.5,.28,.5,0,yt(wt.winterSnow,wt.winterCyan,.25))}return t.build("BroadleafWinter")}const l=e==="autumn"?7:13;for(let u=0;u<l;u++){const c=i()*Math.PI*2,h=i()*2.6,d=s+Math.cos(c)*h,m=r+Math.sin(c)*h,g=a+(i()-.3)*2.6,v=1.5+i()*1.8;let p;e==="autumn"?(p=wt.autumnLeaf[i()*3|0],p=yt(p,[p[0]*.8,p[1]*.8,p[2]*.7],i()*.4)):p=yt(wt.summerLeafLow,wt.summerLeafHigh,i()),t.box(d,g,m,v,v*.85,v,i()*.6,p)}return t.build(e==="autumn"?"BroadleafAutumn":"BroadleafSummer")}function lg(i,e){const t=ei(e>>>0);switch(i){case"palm":return ag(e);case"conifer":return og(t);case"autumn":return vr(t,"autumn");case"winter":return vr(t,"winter");case"summer":default:return vr(t,"summer")}}const Mi=new bn(2,2),Yn=new ts(-1,1,1,-1,0,1),cg=`
  float godInUv(vec2 uv) {
    return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  }

  float godLum(vec3 c) {
    return max(max(c.r, c.g), c.b);
  }

  float godSky(vec2 uv) {
    return smoothstep(0.999, 1.0, texture2D(tDepth, uv).x) * godInUv(uv);
  }

  float godForeground(vec2 uv) {
    float inUv = godInUv(uv);
    float depth = texture2D(tDepth, uv).x;
    float sky = smoothstep(0.999, 1.0, depth);
    float nearGeom = 1.0 - smoothstep(0.992, 0.9995, depth);
    return (1.0 - sky) * nearGeom * inUv;
  }

  float godEdgeBase(vec2 uv) {
    float sky = godSky(uv);
    vec2 px = uGodTexel * max(0.35, uGodEdgeWidth);
    float fg = 0.0;
    fg = max(fg, godForeground(uv + vec2( px.x, 0.0)));
    fg = max(fg, godForeground(uv + vec2(-px.x, 0.0)));
    fg = max(fg, godForeground(uv + vec2(0.0,  px.y)));
    fg = max(fg, godForeground(uv + vec2(0.0, -px.y)));
    return sky * fg;
  }

  float godEdge(vec2 uv) {
    vec2 px = uGodTexel * max(0.35, uGodEdgeWidth);
    float e = godEdgeBase(uv);
    // A perfectly long horizontal horizon line is also a depth edge, but it
    // transports into an ugly slab. Suppress laterally continuous edges and
    // keep jagged/curved mountain silhouette fragments.
    float lateral = 0.5 * (
      godEdgeBase(uv + vec2(px.x * 6.0, 0.0)) +
      godEdgeBase(uv - vec2(px.x * 6.0, 0.0))
    );
    float lineReject = 1.0 - smoothstep(0.35, 0.95, lateral);
    return e * lineReject * uGodEdgeGain;
  }

  void godSourceFields(vec2 uv, vec2 rayUV, out vec3 src, out float baseScalar, out float edgeScalar) {
    float inUv = godInUv(uv);
    vec3 s = texture2D(tScene, uv).rgb;
    float lum = godLum(s);
    float rawSrc = max(0.0, lum - uGodThr) * inUv;
    float sky = godSky(uv);
    float nearSun = exp(-dot(uv - rayUV, uv - rayUV) * 5.5);
    float cleanSrc = sky * nearSun * smoothstep(max(0.0, uGodThr - 0.28), 1.0, lum) * inUv;
    vec3 baseSrc = mix(s * rawSrc, vec3(cleanSrc), uGodSource);
    baseScalar = max(max(baseSrc.r, baseSrc.g), baseSrc.b);
    edgeScalar = 0.0;
    if (uGodEdgeSource > 0.001 || (uGodDebug > 1.5 && uGodDebug < 2.5)) {
      edgeScalar = godEdge(uv) * nearSun;
    }
    src = mix(baseSrc, vec3(edgeScalar), uGodEdgeSource);
  }

  vec3 godMarch(vec2 vUv) {
    if ((uGod < 0.001 && uGodDebug < 0.5) || uSunVis <= 0.001) return vec3(0.0);
    vec2 rayUV = clamp(uSunUV, vec2(0.0), vec2(1.0));
    vec3 debugSrc; float debugBase; float debugEdge;
    godSourceFields(vUv, rayUV, debugSrc, debugBase, debugEdge);
    if (uGodDebug > 0.5 && uGodDebug < 1.5) return vec3(debugBase) * uGodDebugGain;
    if (uGodDebug > 1.5 && uGodDebug < 2.5) return vec3(debugEdge) * uGodDebugGain;

    vec2 delta = (rayUV - vUv) / float(uGodN) * uGodDensity;
    vec2 uv = vUv; float decay = 1.0; vec3 acc = vec3(0.0);
    for (int i = 0; i < 48; i++) {
      if (i >= uGodN) break;
      uv += delta;
      vec3 src; float baseScalar; float edgeScalar;
      godSourceFields(uv, rayUV, src, baseScalar, edgeScalar);
      float gm = mix(1.0, smoothstep(rayUV.y - 0.30, rayUV.y + 0.04, uv.y), uGodHorizon);
      acc += src * gm * decay * uGodW;
      decay *= uGodDecay;
    }
    acc /= float(uGodN);
    float radial = smoothstep(uGodRadius, 0.0, distance(vUv, rayUV));
    vec3 tint = mix(uHazeColor, uSunCol, uGodTint);
    float a = (acc.r + acc.g + acc.b) * 0.3333;
    return tint * a * uGodExp * max(uGod, step(2.5, uGodDebug)) * radial * uSunVis;
  }`,ug=()=>({tScene:{value:null},tDepth:{value:null},uSunUV:{value:new Fe(.5,.7)},uSunVis:{value:0},uHazeColor:{value:new Re("#bcd4d6")},uSunCol:{value:new Re("#ffd9a0")},uGod:{value:0},uGodN:{value:16},uGodDensity:{value:.6},uGodDecay:{value:.93},uGodW:{value:.6},uGodExp:{value:.9},uGodThr:{value:.62},uGodHorizon:{value:.5},uGodRadius:{value:1.1},uGodTint:{value:.5},uGodSource:{value:0},uGodEdgeSource:{value:0},uGodEdgeWidth:{value:1.2},uGodEdgeGain:{value:1},uGodTexel:{value:new Fe(1/256,1/144)},uGodDebug:{value:0},uGodDebugGain:{value:1}});class hg{constructor(e){this.renderer=e;const t=e.getPixelRatio(),n=Math.max(2,window.innerWidth*t|0),s=Math.max(2,window.innerHeight*t|0);this.sceneRT=new kt(n,s,{depthBuffer:!0,stencilBuffer:!1,type:rn,magFilter:ut,minFilter:ut}),this.sceneRT.depthTexture=new Sa(n,s),this.sceneRT.depthTexture.format=ii,this.sceneRT.depthTexture.type=On,this.sceneRT.texture.colorSpace=jt,this.bloomRT=new kt(n/4|0,s/4|0,{depthBuffer:!1,stencilBuffer:!1,type:rn,magFilter:ut,minFilter:ut}),this.bloomRT.texture.colorSpace=jt,this._godScale=.25,this.godRT=new kt(Math.max(1,n*this._godScale|0),Math.max(1,s*this._godScale|0),{depthBuffer:!1,stencilBuffer:!1,type:rn,magFilter:ut,minFilter:ut}),this.godRT.texture.colorSpace=jt,this.godBlurA=this.godRT.clone(),this.godBlurB=this.godRT.clone(),this.godBlurA.texture.colorSpace=jt,this.godBlurB.texture.colorSpace=jt,this.brightMat=new ht({uniforms:{tScene:{value:null},uTexel:{value:new Fe},uThresh:{value:.72}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv; uniform sampler2D tScene; uniform vec2 uTexel; uniform float uThresh;
        vec3 bp(vec2 o){ vec3 c=texture2D(tScene,vUv+o).rgb; float l=max(max(c.r,c.g),c.b);
          return c*smoothstep(uThresh,1.0,l); }
        void main(){
          vec3 s = bp(vec2(0.0));
          s += bp(vec2( uTexel.x,0.0))+bp(vec2(-uTexel.x,0.0));
          s += bp(vec2(0.0, uTexel.y))+bp(vec2(0.0,-uTexel.y));
          s += bp(uTexel)+bp(-uTexel)+bp(vec2(uTexel.x,-uTexel.y))+bp(vec2(-uTexel.x,uTexel.y));
          gl_FragColor = vec4(s/9.0, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.godMat=new ht({uniforms:ug(),vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tDepth;
        uniform vec2 uSunUV, uGodTexel; uniform float uSunVis;
        uniform vec3 uHazeColor, uSunCol;
        uniform float uGod, uGodDensity, uGodDecay, uGodW, uGodExp, uGodThr, uGodHorizon, uGodRadius, uGodTint, uGodSource;
        uniform float uGodEdgeSource, uGodEdgeWidth, uGodEdgeGain, uGodDebug, uGodDebugGain;
        uniform int uGodN;
        ${cg}
        void main(){ gl_FragColor = vec4(godMarch(vUv), 1.0); }`,depthTest:!1,depthWrite:!1}),this.godBlurMat=new ht({uniforms:{tGod:{value:null},uGodTexel:{value:new Fe(1/256,1/144)},uDirection:{value:new Fe(1,0)},uRadius:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod;
        uniform vec2 uGodTexel, uDirection;
        uniform float uRadius;
        void main(){
          vec2 o = uDirection * uGodTexel * max(0.0, uRadius);
          vec3 c = texture2D(tGod, vUv).rgb * 0.34;
          c += texture2D(tGod, vUv + o).rgb * 0.23;
          c += texture2D(tGod, vUv - o).rgb * 0.23;
          c += texture2D(tGod, vUv + o * 2.0).rgb * 0.10;
          c += texture2D(tGod, vUv - o * 2.0).rgb * 0.10;
          gl_FragColor = vec4(c, 1.0);
        }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.overlayMat=new ht({uniforms:{tGod:{value:null},tGodBlur:{value:null},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Fe}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod, tGodBlur;
        uniform float uGodSharp, uGodBlur;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          vec3 raw = texture2D(tGod, guv).rgb;
          vec3 soft = texture2D(tGodBlur, guv).rgb;
          gl_FragColor = vec4(mix(raw, soft, uGodBlur), 1.0);
        }`,blending:ji,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.debugMat=new ht({uniforms:{tGod:{value:null},tGodBlur:{value:null},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Fe}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tGod, tGodBlur;
        uniform float uGodSharp, uGodBlur;
        uniform vec2 uGodTexel;
        void main(){
          vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
          vec2 guv = mix(vUv, g, uGodSharp);
          vec3 raw = texture2D(tGod, guv).rgb;
          vec3 soft = texture2D(tGodBlur, guv).rgb;
          gl_FragColor = vec4(mix(raw, soft, uGodBlur), 1.0);
        }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.compMat=new ht({uniforms:{tScene:{value:null},tBloom:{value:null},tGod:{value:null},tGodBlur:{value:null},uBloom:{value:0},uHaze:{value:0},uHazeColor:{value:new Re("#bcd4d6")},uSunCol:{value:new Re("#ffd9a0")},uSunUV:{value:new Fe(.5,.7)},uSunVis:{value:0},uGod:{value:0},uGodCompare:{value:0},uGodBlur:{value:0},uGodSharp:{value:0},uGodTexel:{value:new Fe}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom, tGod, tGodBlur;
        uniform float uBloom, uHaze, uSunVis, uGod, uGodCompare, uGodBlur, uGodSharp;
        uniform vec3 uHazeColor, uSunCol; uniform vec2 uSunUV, uGodTexel;
        void main(){
          vec3 col = texture2D(tScene, vUv).rgb;

          // God rays — UPSAMPLE the low-res march. uGodSharp snaps the
          // sample to the godRT texel grid so the raw downsampled blocks
          // are visible (a deliberate tuning aid, not a defect).
          if (uGod > 0.001 && uSunVis > 0.001 && (uGodCompare < 0.5 || vUv.x >= 0.5)) {
            vec2 g = (floor(vUv / uGodTexel) + 0.5) * uGodTexel;
            vec2 guv = mix(vUv, g, uGodSharp);
            vec3 raw = texture2D(tGod, guv).rgb;
            vec3 soft = texture2D(tGodBlur, guv).rgb;
            col += mix(raw, soft, uGodBlur);
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
        }`,depthTest:!1,depthWrite:!1}),this._brightQuad=new st(Mi,this.brightMat),this._godQuad=new st(Mi,this.godMat),this._godBlurQuad=new st(Mi,this.godBlurMat),this._overlayQuad=new st(Mi,this.overlayMat),this._debugQuad=new st(Mi,this.debugMat),this._compQuad=new st(Mi,this.compMat),this._brightScene=new _n().add(this._brightQuad),this._godScene=new _n().add(this._godQuad),this._godBlurScene=new _n().add(this._godBlurQuad),this._overlayScene=new _n().add(this._overlayQuad),this._debugScene=new _n().add(this._debugQuad),this._compScene=new _n().add(this._compQuad)}setSize(){const e=this.renderer.getPixelRatio(),t=Math.max(2,window.innerWidth*e|0),n=Math.max(2,window.innerHeight*e|0);this.sceneRT.setSize(t,n),this.bloomRT.setSize(t/4|0,n/4|0),this._sizeGod(t,n)}_sizeGod(e,t){const n=Math.max(1,e*this._godScale|0),s=Math.max(1,t*this._godScale|0);(this.godRT.width!==n||this.godRT.height!==s)&&this.godRT.setSize(n,s),(this.godBlurA.width!==n||this.godBlurA.height!==s)&&this.godBlurA.setSize(n,s),(this.godBlurB.width!==n||this.godBlurB.height!==s)&&this.godBlurB.setSize(n,s),this.compMat.uniforms.uGodTexel.value.set(1/n,1/s),this.godMat.uniforms.uGodTexel.value.set(1/n,1/s),this.godBlurMat.uniforms.uGodTexel.value.set(1/n,1/s)}render(e,t,n){const s=n.bloom||0,r=n.haze||0,a=n.god||{},o=n.sunFade??(n.sunVisible?1:0),l=Math.max(0,Math.min(3,a.debugView??0)),u=((a.intensity||0)>0||l>0)&&o>.001,c=this.renderer,h=u&&s<=0&&r<=0;if(s<=0&&r<=0&&!u){c.setRenderTarget(null),c.render(e,t);return}const d=c.getDrawingBufferSize(new Fe);if((this.sceneRT.width!==d.x||this.sceneRT.height!==d.y)&&(this.sceneRT.setSize(d.x,d.y),this.bloomRT.setSize(Math.max(1,d.x/4|0),Math.max(1,d.y/4|0))),u){const p=Math.max(.04,Math.min(1,a.resScale??.25));p!==this._godScale&&(this._godScale=p),this._sizeGod(d.x,d.y)}if(c.setRenderTarget(this.sceneRT),c.render(e,t),s>0&&(this.brightMat.uniforms.tScene.value=this.sceneRT.texture,this.brightMat.uniforms.uTexel.value.set(1/this.bloomRT.width,1/this.bloomRT.height),c.setRenderTarget(this.bloomRT),c.render(this._brightScene,Yn)),u){const p=this.godMat.uniforms;p.tScene.value=this.sceneRT.texture,p.tDepth.value=this.sceneRT.depthTexture,n.hazeColor&&p.uHazeColor.value.copy(n.hazeColor),n.sunCol&&p.uSunCol.value.copy(n.sunCol),n.sunUV&&p.uSunUV.value.set(n.sunUV.x,n.sunUV.y),p.uSunVis.value=o,p.uGod.value=a.intensity||0,p.uGodN.value=Math.max(6,Math.min(48,(a.samples||16)|0)),p.uGodDensity.value=a.density??.6,p.uGodDecay.value=a.decay??.93,p.uGodW.value=a.weight??.6,p.uGodExp.value=a.exposure??.9,p.uGodThr.value=a.threshold??.62,p.uGodHorizon.value=a.horizon??.5,p.uGodRadius.value=a.radius??1.1,p.uGodTint.value=a.tint??.5,p.uGodSource.value=Math.max(0,Math.min(1,a.source??0)),p.uGodEdgeSource.value=Math.max(0,Math.min(1,a.edgeSource??0)),p.uGodEdgeWidth.value=Math.max(.35,Math.min(8,a.edgeWidth??1.2)),p.uGodEdgeGain.value=Math.max(0,Math.min(12,a.edgeGain??1)),p.uGodDebug.value=l,p.uGodDebugGain.value=Math.max(.1,Math.min(20,a.debugGain??1)),c.setRenderTarget(this.godRT),c.render(this._godScene,Yn)}const m=u&&a.blurEnable?Math.max(0,Math.min(1,a.blurAmount??.18)):0;let g=this.godRT.texture;if(m>.001){const p=this.godBlurMat.uniforms;p.uRadius.value=Math.max(.05,Math.min(8,a.blurRadius??1.5));const f=Math.max(1,Math.min(4,(a.blurPasses??1)|0));for(let T=0;T<f;T++)p.tGod.value=g,p.uDirection.value.set(1,0),c.setRenderTarget(this.godBlurA),c.render(this._godBlurScene,Yn),p.tGod.value=this.godBlurA.texture,p.uDirection.value.set(0,1),c.setRenderTarget(this.godBlurB),c.render(this._godBlurScene,Yn),g=this.godBlurB.texture}if(l>0){const p=this.debugMat.uniforms;p.tGod.value=this.godRT.texture,p.tGodBlur.value=g,p.uGodBlur.value=m,p.uGodSharp.value=Math.max(0,Math.min(1,a.sharp??0)),p.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value),c.setRenderTarget(null),c.render(this._debugScene,Yn);return}if(h){const p=c.autoClear;c.setRenderTarget(null),c.autoClear=!0,c.setScissorTest(!1),c.render(e,t);const f=this.overlayMat.uniforms;if(f.tGod.value=this.godRT.texture,f.tGodBlur.value=g,f.uGodBlur.value=m,f.uGodSharp.value=Math.max(0,Math.min(1,a.sharp??0)),f.uGodTexel.value.copy(this.compMat.uniforms.uGodTexel.value),c.autoClear=!1,a.compare){const T=c.getSize(new Fe),b=Math.floor(T.x*.5);c.setScissorTest(!0),c.setScissor(b,0,T.x-b,T.y)}c.render(this._overlayScene,Yn),c.setScissorTest(!1),c.autoClear=p;return}const v=this.compMat.uniforms;v.tScene.value=this.sceneRT.texture,v.tBloom.value=this.bloomRT.texture,v.tGod.value=this.godRT.texture,v.tGodBlur.value=g,v.uBloom.value=s,v.uHaze.value=r,n.hazeColor&&v.uHazeColor.value.copy(n.hazeColor),n.sunCol&&v.uSunCol.value.copy(n.sunCol),n.sunUV&&v.uSunUV.value.set(n.sunUV.x,n.sunUV.y),v.uSunVis.value=o,v.uGod.value=u?1:0,v.uGodCompare.value=a.compare?1:0,v.uGodBlur.value=m,v.uGodSharp.value=Math.max(0,Math.min(1,a.sharp??0)),c.setRenderTarget(null),c.render(this._compScene,Yn)}dispose(){this.sceneRT.dispose(),this.bloomRT.dispose(),this.godRT.dispose(),this.godBlurA.dispose(),this.godBlurB.dispose(),this.brightMat.dispose(),this.godMat.dispose(),this.godBlurMat.dispose(),this.overlayMat.dispose(),this.debugMat.dispose(),this.compMat.dispose()}}const il=new L(0,ot.groundRadius+.35,0),sl=()=>new Promise(i=>requestAnimationFrame(i)),dg=[ec,la,Is];class bg{constructor(e,t,n={}){this.container=e,this.store=t,this.loader=n.loader||null,this.elapsed=0,this.treeCount=0,this._terrainDirty=!1,this._regenTimer=null,this._regenToken=0,this._hasGenerated=!1,this.asyncRegenerate=!!n.asyncRegenerate,this.renderer=new vm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=ul,this.renderer.toneMappingExposure=t.get("render.exposure"),this.renderer.info.autoReset=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Is,e.appendChild(this.renderer.domElement),this.scene=new _n;const s=t.get("render.fov");this.camera=new zt(s,window.innerWidth/window.innerHeight,.5,32e3),this.camera.position.set(420,230,480),this.camera.lookAt(0,t.get("water.seaLevel")+30,0),this.transmittanceLUT=new wm,this.skyViewLUT=new Rm,this.skyViewLUT.setTransmittanceLUT(this.transmittanceLUT.texture),this.skyViewLUT.setObserverPosition(il),this.backdrop=new Pm,this.backdrop.setObserver(il),this.backdrop.setLUTs(this.skyViewLUT.texture,this.transmittanceLUT.texture),this.scene.add(this.backdrop.mesh),this.sun=this._makeSunLight("SunPrimary"),this.shadowSun=this._makeSunLight("SunCoarse"),this.sunLayers=[this.sun,this.shadowSun],this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(this.shadowSun),this.scene.add(this.shadowSun.target),this.hemi=new xm(12575743,5916208,.34),this.scene.add(this.hemi),this.ambient=new bm(16777215,.05),this.scene.add(this.ambient),this.scene.fog=new Ma(12375254,t.get("render.fogDensity")),this.islandGroup=new sn,this.treeGroup=new sn,this.scene.add(this.islandGroup),this.scene.add(this.treeGroup),this.sea=null,this.camDirector=new Lm(this.camera,this.renderer.domElement),this.autoCameraDirector=new Nm(this.camera,this.camDirector,t),this.orbitSweep=new zm(t,this),this.postfx=new hg(this.renderer),this._applyShadowSettings(),this._applyAll(),n.autoGenerate!==!1&&this.regenerate(),t.subscribe(r=>this._onParam(r)),window.addEventListener("resize",()=>this._onResize()),this.clock=new Em}_makeSunLight(e){const t=new ym(16773852,0);return t.name=e,t.castShadow=!0,t.shadow.bias=-6e-4,t.shadow.normalBias=2.2,t.shadow.radius=1,t}regenerate(){this._regenTimer&&(clearTimeout(this._regenTimer),this._regenTimer=null),this._regenToken++,this.loader?.start("island asset build",8,{mode:this._hasGenerated?"transition":"boot"});const e=this.store,t=this._buildGenOptions(e);this.loader?.step("params",`seed=${t.seed} res=${t.resolution}`);const n=ko(t);this.vol=n,this.loader?.step("terrain",`${n.res}x${n.res}`),this._applyShadowBounds(t),this.loader?.step("shadow bounds"),this.islandGroup.clear(),this._islandMesh&&this._islandMesh.geometry.dispose(),this.loader?.step("clear meshes"),this._islandMesh=Ho(n,t.seed),this.islandGroup.add(this._islandMesh),this.loader?.step("island mesh",`${this._islandMesh.geometry.getAttribute("position")?.count||0} verts`),this.sea&&this.scene.remove(this.sea.group),this.sea=new Vo({worldSize:n.worldSize,volume:n,radius:t.radius,seaLevel:t.seaLevel,floorDepth:t.floorDepth,causticScale:e.get("water.causticScale"),causticIntensity:e.get("water.causticIntensity"),causticOpacity:e.get("water.causticOpacity"),shoreGlow:e.get("water.shoreGlow"),shoreGlowWidth:e.get("water.shoreGlowWidth"),shoreGlowFollow:e.get("water.shoreGlowFollow")}),this.scene.add(this.sea.group),this._applyWaterLighting(),this.loader?.step("sea");const s=this._plantTrees(n,t);this.treeCount=s.treeCount,this.treeCounts=s.treeCounts,this.loader?.step("trees",`${this.treeCount}`),this.loader?.done("ready"),this._hasGenerated=!0}async regenerateAsync(e="scene rebuild"){this._regenTimer&&(clearTimeout(this._regenTimer),this._regenTimer=null);const t=++this._regenToken,n=this._hasGenerated?"transition":"boot",s=()=>t!==this._regenToken,r=async(m,g="")=>(this.loader?.step(m,g),await sl(),s());if(this.loader?.start(e,9,{mode:n}),await sl(),s())return!1;const a=this._buildGenOptions(this.store);if(await r("params",`seed=${a.seed} res=${a.resolution}`))return!1;const o=ko(a);if(await r("terrain",`${o.res}x${o.res}`))return!1;const l=Ho(o,a.seed),u=l.geometry.getAttribute("position")?.count||0;if(await r("island mesh",`${u} verts`))return l.geometry.dispose(),!1;const c=new Vo({worldSize:o.worldSize,volume:o,radius:a.radius,seaLevel:a.seaLevel,floorDepth:a.floorDepth,causticScale:this.store.get("water.causticScale"),causticIntensity:this.store.get("water.causticIntensity"),causticOpacity:this.store.get("water.causticOpacity"),shoreGlow:this.store.get("water.shoreGlow"),shoreGlowWidth:this.store.get("water.shoreGlowWidth"),shoreGlowFollow:this.store.get("water.shoreGlowFollow")});if(await r("sea"))return!1;const h=new sn;h.name="Trees";const d=this._plantTrees(o,a,h);return await r("trees",`${d.treeCount}`)||(this._applyShadowBounds(a),await r("shadow bounds"))?!1:(this._swapGeneratedAssets(o,l,c,h,d),this.loader?.step("swap"),this.loader?.done("ready"),this._hasGenerated=!0,!0)}_buildGenOptions(e){const t={seed:e.get("voxel.seed")|0,radius:e.get("island.radius"),shape:e.get("island.shape")|0,resolution:e.get("voxel.resolution")|0,lowland:e.get("island.lowland"),massif:e.get("island.massif"),massifSharpness:e.get("island.massifSharpness"),massifOffsetX:e.get("island.massifOffsetX"),massifOffsetZ:e.get("island.massifOffsetZ"),terraceStep:e.get("voxel.terraceStep"),warp:e.get("island.warp"),ridge:e.get("island.ridge"),beachWidth:e.get("island.beachWidth"),valleyDepth:e.get("island.valleyDepth"),valleyWidth:e.get("island.valleyWidth"),seaLevel:e.get("water.seaLevel"),floorDepth:e.get("water.floorDepth"),floorShape:e.get("water.floorShape"),floorRoughness:e.get("water.floorRoughness"),deltaFloor:e.get("water.deltaFloor"),seasons:{sweepDeg:e.get("seasons.sweepDeg"),summerEnd:e.get("seasons.summerEnd"),autumnEnd:e.get("seasons.autumnEnd"),coniferEnd:e.get("seasons.coniferEnd"),borderWarp:e.get("seasons.borderWarp"),craggy:e.get("seasons.craggy"),fairway:e.get("seasons.fairway"),fairwayBand:e.get("seasons.fairwayBand"),bunkerDensity:e.get("seasons.bunkerDensity"),bunkerSize:e.get("seasons.bunkerSize")},palmCount:e.get("tree.palmCount")|0,palmLine:e.get("tree.palmLine"),mixedTreeCount:e.get("tree.mixedTreeCount")|0};return t.maxHeight=t.lowland+t.massif,t}_applyShadowBounds(e){this._lastShadowOpts=e,this._applyShadowBoundsFor(this.sun,e,this.store.get("shadows.primaryCoverage")??1),this._applyShadowBoundsFor(this.shadowSun,e,this.store.get("shadows.secondaryCoverage")??1)}_applyShadowBoundsFor(e,t,n=1){if(!e?.shadow?.camera||!t)return;const s=Ne.clamp(Number(n)||1,.25,2),r=t.radius*1.4*s,a=e.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=Math.max(50,6e3-r-t.maxHeight-600),a.far=6e3+r+600,a.updateProjectionMatrix(),e.shadow.needsUpdate=!0}_swapGeneratedAssets(e,t,n,s,r){this.vol=e,this.islandGroup.clear(),this._islandMesh&&this._islandMesh.geometry.dispose(),this._islandMesh=t,this.islandGroup.add(this._islandMesh),this.sea&&this.scene.remove(this.sea.group),this.sea=n,this.scene.add(this.sea.group),this._applyWaterLighting(),this.scene.remove(this.treeGroup),this.treeGroup=s,this.scene.add(this.treeGroup),this.treeCount=r.treeCount,this.treeCounts=r.treeCounts}_plantTrees(e,t,n=this.treeGroup){n.clear();const s=ei(t.seed*2654435761>>>0),r={palm:0,summer:0,autumn:0,conifer:0,winter:0},a=p=>{if(!e.land[p])return!1;const f=e.material[p];if(f===Xe.ROCK||f===Xe.SEAFLOOR)return!1;const T=e.heightVox[p]*e.vstep;return T>=t.seaLevel+.4&&T<=t.seaLevel+t.maxHeight*.82},o=(p,f,T,b)=>{const y=lg(p,(s()*1e9|0)^b),F=e.heightVox[b]*e.vstep,[w,A]=e.cellToWorld(f,T);y.position.set(w,F-.5,A),y.scale.setScalar(.85+s()*.5),y.rotation.y=s()*Math.PI*2,n.add(y),r[p]=(r[p]||0)+1},l=Math.max(0,Math.min(512,t.palmCount|0)),u=Math.max(.18,Math.min(.9,t.palmLine??.58));let c=0,h=0;const d=l*60+400;for(;c<l&&h<d;){h++;const p=s()*e.res|0,f=s()*e.res|0,T=e.idx(p,f);if(!a(T))continue;const b=e.material[T];(e.heightVox[T]*e.vstep-t.seaLevel)/Math.max(1,t.maxHeight)>u||b===Xe.SNOW||b===Xe.GRASSY_SNOW||b===Xe.DIRT||!(b===Xe.FAIRWAY||b===Xe.SAND)&&s()>.3||(o("palm",p,f,T),c++)}const m=p=>{const f=e.season[p];return f===ti.WINTER?s()>.55?"conifer":"winter":f===ti.CONIFER?"conifer":f===ti.AUTUMN?"autumn":"summer"},g=Math.max(0,Math.min(256,t.mixedTreeCount??34));let v=0;for(h=0;v<g&&h<g*40;){h++;const p=s()*e.res|0,f=s()*e.res|0,T=e.idx(p,f);a(T)&&(o(m(T),p,f,T),v++)}return{treeCount:c+v,treeCounts:r}}_effectiveSun(){const e=this._sunOverride||{};return{elevationDeg:e.elevationDeg??this.store.get("sun.elevationDeg"),azimuthDeg:e.azimuthDeg??this.store.get("sun.azimuthDeg"),intensity:e.intensity??this.store.get("sun.intensity")}}_sunDir(e=this._effectiveSun()){const t=Ne.degToRad(e.elevationDeg),n=Ne.degToRad(e.azimuthDeg),s=Math.cos(t);return new L(s*Math.cos(n),Math.sin(t),s*Math.sin(n)).normalize()}_shadowLayerWeights(){const e=this.store,t=!!e.get("shadows.primaryEnable"),n=!!e.get("shadows.secondaryEnable"),s=Ne.clamp(e.get("shadows.secondaryMix")??.22,0,1);return(e.get("shadows.blendMode")|0)===1?{primary:t?1:0,secondary:n?s:0}:t&&n?{primary:1-s,secondary:s}:{primary:t?1:0,secondary:n?1:0}}_applyAll(){const e=this.store;this._applySunLighting(),this.transmittanceLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setAtmosphere({rayleighMul:e.get("atmosphere.rayleighMul"),mieBeta:e.get("atmosphere.mieBeta"),ozoneMul:e.get("atmosphere.ozoneMul")}),this.skyViewLUT.setMieG(e.get("atmosphere.mieG")),this._applyPlanetR();const t=e.get("render.horizonWarp");this.skyViewLUT.setHorizonWarp(t),this.backdrop.setHorizonWarp(t),this.renderer.toneMappingExposure=e.get("render.exposure"),this.camera.fov=e.get("render.fov"),this.camera.updateProjectionMatrix(),this.scene.fog.density=e.get("render.fogDensity")}_applySunLighting(){const e=this.store,t=this._effectiveSun(),n=this._sunDir(t),s=t.intensity;this.skyViewLUT.setSunDir(n),this.skyViewLUT.setSunIntensity(s),this.backdrop.setSun({direction:n,intensity:s});const r=t.elevationDeg,a=Ne.clamp((r+6)/28,0,1),o=a*a*(3-2*a),l=Ne.clamp(s/22,.45,2.2),u=new Re("#ff7a36").lerp(new Re("#fff3df"),o),c=Ne.lerp(.5,3.1,o)*l,h=this._shadowLayerWeights();for(const v of this.sunLayers)v.position.copy(n).multiplyScalar(6e3),v.target.position.set(0,0,0),v.color.copy(u);this.sun.intensity=c*h.primary,this.shadowSun.intensity=c*h.secondary;const d=e.get("shadows.enable")!==!1;this.sun.castShadow=d&&h.primary>0&&!!e.get("shadows.primaryEnable"),this.shadowSun.castShadow=d&&h.secondary>0&&!!e.get("shadows.secondaryEnable");const m=e.get("lighting.skyBounce"),g=e.get("lighting.groundBounce");this._gi={tint:e.get("lighting.bounceTint")},this._hemiBase=new Re("#e8a86a").lerp(new Re("#a9c8e6"),o),this.hemi.color.copy(this._hemiBase),this.hemi.groundColor.set("#3a2a1c").lerp(new Re("#60503a"),o),this.hemi.intensity=Ne.lerp(.3,.6,o)*(m/.55),this.ambient.intensity=Ne.lerp(.03,.09,o)*(.7+g),this.scene.fog.color.set("#d99250").lerp(new Re("#acc6cf"),o),this._skyDirty=!0,this._applyWaterLighting()}_applyWaterLighting(){if(!this.sea)return;const e=this.store;this.sea.setSun(this._sunDir(),this.sun.color),this.sea.setGlint(e.get("lighting.sunGlint"),e.get("lighting.glintSpread"))}_onParam(e){const t=e.path;(t==="*"||t.startsWith("sun.")||t.startsWith("atmosphere.")||t.startsWith("render.")||t.startsWith("lighting."))&&this._applyAll(),(t==="*"||t.startsWith("island.")||t.startsWith("voxel.")||t.startsWith("seasons.")||t==="tree.palmCount"||t==="tree.palmLine"||t==="tree.mixedTreeCount"||t==="water.seaLevel"||t==="water.floorDepth"||t==="water.floorShape"||t==="water.floorRoughness"||t==="water.deltaFloor"||t==="water.shoreGlowWidth"||t==="water.shoreGlowFollow")&&this._scheduleRegen(),(t==="*"||t.startsWith("shadows."))&&(this._applyShadowSettings(),this._applySunLighting()),this.sea&&((t==="*"||t==="water.causticScale"||t==="water.causticIntensity"||t==="water.causticOpacity")&&this.sea.setCaustic(this.store.get("water.causticScale"),this.store.get("water.causticIntensity"),this.store.get("water.causticOpacity")),(t==="*"||t==="water.shoreGlow")&&this.sea.setShoreGlow(this.store.get("water.shoreGlow")))}setSunOverride(e){this._sunOverride=e||null,this._applySunLighting()}_scheduleRegen(){this._regenTimer&&clearTimeout(this._regenTimer),this._regenTimer=setTimeout(()=>{this._regenTimer=null,this.asyncRegenerate?this.regenerateAsync("scene rebuild"):this.regenerate()},260)}_onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.postfx?.setSize()}_applyShadowSettings(){const e=this.store,t=dg[Ne.clamp(e.get("shadows.filterMode")|0,0,2)]||Is,n=this.renderer.shadowMap.type!==t;this.renderer.shadowMap.type=t,this._applyShadowLightSettings(this.sun,e.get("shadows.primarySize")??2048,n),this._applyShadowLightSettings(this.shadowSun,e.get("shadows.secondarySize")??512,n),this._applyShadowBounds(this._lastShadowOpts||this._buildGenOptions(e))}_applyShadowLightSettings(e,t,n=!1){if(!e?.shadow)return;const s=this.renderer.capabilities.maxTextureSize||8192,r=Ne.clamp(Math.round((t||2048)/512)*512,512,s),a=e.shadow,o=a.mapSize.x!==r||a.mapSize.y!==r;a.mapSize.set(r,r),a.bias=this.store.get("shadows.bias")??-6e-4,a.normalBias=this.store.get("shadows.normalBias")??2.2,a.radius=this.store.get("shadows.softness")??1,(o||n)&&this._disposeShadowMap(a),a.needsUpdate=!0}_disposeShadowMap(e){e.map&&(e.map.dispose(),e.map=null)}setExperimental(e){const t=e?.planetR?Math.max(150,e.planetRadiusKm||1200):ot.groundRadius;this.store.set("atmosphere.planetRadiusKm",t)}_applyPlanetR(e=this.store.get("atmosphere.planetRadiusKm")){const t=Ne.clamp(e||ot.groundRadius,150,ot.groundRadius);if(this._planetRadiusApplied===t)return;this._planetRadiusApplied=t;const n=ot.atmosphereRadius-ot.groundRadius;this.skyViewLUT.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:n}),this.backdrop.setGeometry({planetRadiusKm:t,atmosphereThicknessKm:n});const s=new L(0,t+.35,0);this.skyViewLUT.setObserverPosition(s),this.backdrop.setObserver(s),this._skyDirty=!0}_fxParams(){const e=this.store,t=this._sunDir(),n=this._fxv||=new L;n.copy(this.camera.position).addScaledVector(t,2e3).project(this.camera);let s={x:n.x*.5+.5,y:n.y*.5+.5};if(!Number.isFinite(s.x)||!Number.isFinite(s.y)){const c=(this._fxRight||=new L).setFromMatrixColumn(this.camera.matrixWorld,0),h=(this._fxUp||=new L).setFromMatrixColumn(this.camera.matrixWorld,1),d=t.dot(c),m=t.dot(h),g=2/Math.max(.001,Math.abs(d),Math.abs(m));s={x:.5+d*g,y:.5+m*g}}const a=Ne.smoothstep(t.y,-.02,.04),o=a>.001,l=e.get("godrays")||{},u=l.enable?{intensity:l.intensity??.85,samples:l.samples??16,density:l.density??.32,decay:l.decay??.915,weight:l.weight??2,exposure:l.exposure??.7,threshold:l.threshold??.62,horizon:l.groundMask??.5,radius:l.reach??1.45,tint:l.warmth??.5,resScale:l.resScale??.25,sharp:l.sharp??.25,source:l.source??1,compare:!!l.compare,edgeSource:l.edgeSource??0,edgeWidth:l.edgeWidth??1.2,edgeGain:l.edgeGain??1,blurEnable:!!l.blurEnable,blurAmount:l.blurAmount??.18,blurRadius:l.blurRadius??1.5,blurPasses:l.blurPasses??1,debugView:l.debugView??0,debugGain:l.debugGain??1}:{intensity:0};return{bloom:e.get("lighting.bloom")||0,haze:e.get("lighting.aerialHaze")||0,hazeColor:this.scene.fog.color,sunCol:this.sun.color,sunUV:s,sunVisible:o,sunFade:a,god:u}}getDebugInfo(){const e=this.camera.position;return{name:"Isometric Island",camera:[e.x.toFixed(1),e.y.toFixed(1),e.z.toFixed(1)],triangles:this.renderer.info.render.triangles,drawCalls:this.renderer.info.render.calls,trees:this.treeCount,worldSize:this.vol?.worldSize,seaLevel:this.store.get("water.seaLevel"),sunElevationDeg:this.store.get("sun.elevationDeg"),seed:this.store.get("voxel.seed")}}_syncHorizonFog(){try{const e=this.skyViewLUT,t=e.width,n=e.height,s=Math.max(0,Math.floor(n*.5)-1);(!this._fogBuf||this._fogBuf.length!==t*4)&&(this._fogBuf=new Uint16Array(t*4)),this.renderer.readRenderTargetPixels(e.target,0,s,t,1,this._fogBuf);const r=Mu.fromHalfFloat;let a=0,o=0,l=0;for(let h=0;h<t;h++)a+=r(this._fogBuf[h*4]),o+=r(this._fogBuf[h*4+1]),l+=r(this._fogBuf[h*4+2]);if(a/=t,o/=t,l/=t,!(a>=0)||!(o>=0)||!(l>=0))return;const u=this.renderer.toneMappingExposure,c=h=>(h=Math.max(0,h*u),Math.min(1,Math.max(0,h*(2.51*h+.03)/(h*(2.43*h+.59)+.14))));this.scene.fog.color.setRGB(c(a),c(o),c(l),Ct),this.sea?.setHorizon(this.scene.fog.color),this._hemiBase&&this.hemi.color.copy(this._hemiBase).lerp(this.scene.fog.color,this._gi?.tint??.7)}catch{}}start(){const e=()=>{this._raf=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.5),n=Math.min(t,1/20);this.elapsed+=n,this.renderer.info.reset(),this.camDirector.update(n),this.autoCameraDirector.update(n),this.orbitSweep.update(t),this.sea?.update(this.elapsed,this.camera.position),this.camera.updateMatrixWorld(),this.backdrop.updateCamera(this.camera),this.transmittanceLUT.render(this.renderer),this.skyViewLUT.render(this.renderer),this._skyDirty&&(this._syncHorizonFog(),this._skyDirty=!1),this._swayTrees(),this.postfx.render(this.scene,this.camera,this._fxParams())};e()}_swayTrees(){const e=this.elapsed,t=this.store.get("tree.palmSway")??1;if(!(t<=0))for(const n of this.treeGroup.children){const s=n.userData&&n.userData.sway;if(!s)continue;const r=Math.sin(e*s.speed+s.phase)*s.amp*t;s.crown&&(s.crown.rotation.z=r,s.crown.rotation.x=r*.5),n.rotation.z=r*.18}}}const fg={sun:{label:"sun",icon:"☉",blurb:"drives both the Hillaire sky and the island key light",fields:{elevationDeg:{type:"float",label:"Elevation",min:-10,max:90,step:.5,default:26,unit:"°",hint:"low = warm sunset · high = bright noon"},azimuthDeg:{type:"float",label:"Azimuth",min:-180,max:180,step:1,default:-84,unit:"°",hint:"rakes the terrain — avoids flat back-to-sun lighting"},intensity:{type:"float",label:"Intensity",min:1,max:60,step:.5,default:22}}},atmosphere:{label:"atmosphere",icon:"◐",blurb:"Hillaire 2020 — Rayleigh / Mie / ozone",fields:{rayleighMul:{type:"float",label:"Rayleigh ×",min:0,max:4,step:.01,default:1},mieBeta:{type:"float",label:"Mie β",min:0,max:.05,step:5e-4,default:.021,hint:"haze thickness"},mieG:{type:"float",label:"Mie g",min:0,max:.95,step:.005,default:.758},ozoneMul:{type:"float",label:"Ozone ×",min:0,max:3,step:.01,default:1},planetRadiusKm:{type:"float",label:"Planet R",min:150,max:6371,step:25,default:6371,unit:"km",hint:"6371 = Earth · lower bends the horizon/sky harder"}}},lighting:{label:"lighting",icon:"✦",blurb:"sky-tinted bounce · water sun-glint · bloom · aerial haze",fields:{skyBounce:{type:"float",label:"Sky bounce",min:0,max:1.6,step:.02,default:.55,hint:"faked GI — hemisphere fill tinted by the live sky"},bounceTint:{type:"float",label:"Bounce tint",min:0,max:1,step:.02,default:.7,hint:"how hard the bounce pulls toward the sampled sky colour"},groundBounce:{type:"float",label:"Ground bounce",min:0,max:1,step:.02,default:.3,hint:"warm up-light from the lit ground"},sunGlint:{type:"float",label:"Sun glint width",min:0,max:2.5,step:.05,default:.7,hint:"analytic specular sun streak on the sea"},glintSpread:{type:"float",label:"Glint spread",min:.2,max:4,step:.05,default:1.1,hint:"lower = tight mirror streak · higher = broad shimmer"},bloom:{type:"float",label:"Bloom",min:0,max:1.5,step:.02,default:0,hint:"staged — shared post pass (0 = off, zero cost)"},aerialHaze:{type:"float",label:"Aerial haze",min:0,max:1,step:.02,default:0,hint:"staged — sky-coloured depth haze (0 = off)"}}},voxel:{label:"voxel",icon:"⬚",blurb:"world structure — never randomized · pin (◆ amber) to lock",fields:{seed:{type:"int",label:"Seed",min:1,max:99999,step:1,default:1337,hint:"the island. not rolled by random — ◆ to keep one"},resolution:{type:"int",label:"Voxel grid",min:128,max:1024,step:32,default:384,hint:"cells across the world · structural, never randomized"},terraceStep:{type:"float",label:"Terrace step",min:0,max:8,step:.5,default:2.5,unit:"m",hint:"0 = smooth · >0 = stepped terraces · structural"}}},island:{label:"island",icon:"▲",blurb:"bounded voxel island — mask + domain-warp + ridged multifractal",fields:{radius:{type:"float",label:"Radius",min:300,max:1100,step:10,default:700,unit:"m",hint:"island size — bigger = more room for beaches/relief"},shape:{type:"int",label:"Shape",min:0,max:4,step:1,default:0,hint:"0 auto (from seed) · 1 round · 2 crescent · 3 long · 4 lobed"},lowland:{type:"float",label:"Lowland relief",min:6,max:90,step:2,default:32,unit:"m",hint:"rolling-hill amplitude of the bulk of the island"},massif:{type:"float",label:"Massif height",min:0,max:480,step:10,default:150,unit:"m",hint:"localized mountain uplift above the lowland"},massifSharpness:{type:"float",label:"Massif sharpness",min:.45,max:2.2,step:.05,default:1,hint:"higher = narrower, pointier summit envelope"},massifOffsetX:{type:"float",label:"Massif east/west",min:-.45,max:.45,step:.01,default:0,hint:"manual mountain placement as a fraction of island radius"},massifOffsetZ:{type:"float",label:"Massif north/south",min:-.45,max:.45,step:.01,default:0,hint:"manual mountain placement as a fraction of island radius"},warp:{type:"float",label:"Domain warp",min:0,max:2,step:.05,default:.85,hint:"bends the noise sampling coordinates; not a simple rotation"},ridge:{type:"float",label:"Ridge weight",min:0,max:1.5,step:.05,default:.7,hint:"ridged multifractal — sharp spines"},beachWidth:{type:"float",label:"Beach apron",min:2,max:50,step:1,default:16,unit:"m",hint:"raises/extends the low coastal apron; also preserves golf-course greens"},valleyDepth:{type:"float",label:"Valley carve",min:0,max:180,step:5,default:55,unit:"m",hint:"gully → river → delta cut (post-build subtraction) · 0 = off"},valleyWidth:{type:"float",label:"Valley width",min:8,max:60,step:2,default:22,unit:"m",hint:"channel half-width near source · widens downstream"}}},seasons:{label:"seasons",icon:"❄",blurb:"altitude bands · coast=summer → peak=winter · winter never touches summer",fields:{sweepDeg:{type:"float",label:"Region drift",min:-180,max:180,step:1,default:35,unit:"°",hint:"rotates the lateral-variety noise"},summerEnd:{type:"float",label:"Summer line",min:.15,max:.6,step:.01,default:.44,hint:"altitude frac · below = tropical lowland; keep below autumn"},autumnEnd:{type:"float",label:"Autumn line",min:.4,max:.78,step:.01,default:.66,hint:"altitude frac · keep between summer and snow"},coniferEnd:{type:"float",label:"Snow line",min:.6,max:.92,step:.01,default:.84,hint:"below = conifer band · above = winter/snow cap"},borderWarp:{type:"float",label:"Border warp",min:0,max:1.5,step:.05,default:.6,hint:"organic wander of the altitude bands"},craggy:{type:"float",label:"Craggy peaks",min:0,max:1,step:.02,default:.4,hint:"rock speckled through the snow/upper zone"},fairway:{type:"float",label:"Fairway (greens)",min:0,max:1,step:.02,default:0,hint:'0 = off · lime "greens" band above the beach'},fairwayBand:{type:"float",label:"Fairway band",min:4,max:80,step:2,default:24,unit:"m",hint:"how far the greens reach inland from the sand"},bunkerDensity:{type:"float",label:"Bunkers",min:0,max:1,step:.02,default:.18,hint:"sand-trap frequency inside the greens"},bunkerSize:{type:"float",label:"Bunker size",min:3,max:30,step:1,default:11,unit:"m",hint:"sand-trap blob radius"}}},water:{label:"water",icon:"≈",blurb:"caustics (aquarium) + depth-graded blue seafloor + shore glow",fields:{seaLevel:{type:"float",label:"Water datum",min:-2,max:40,step:.5,default:9,unit:"m",hint:"structural build datum; terrain is generated around it"},causticScale:{type:"float",label:"Caustic scale",min:.3,max:6,step:.1,default:1.6},causticIntensity:{type:"float",label:"Caustic ×",min:0,max:3,step:.05,default:1},causticOpacity:{type:"float",label:"Caustic opacity",min:0,max:.8,step:.01,default:.22,hint:"alpha of the additive caustic sheet"},floorDepth:{type:"float",label:"Seafloor depth",min:10,max:140,step:5,default:64,unit:"m"},floorShape:{type:"float",label:"Shelf shape",min:.35,max:1.8,step:.05,default:.85,hint:"lower = quick deep drop · higher = long shallow shelf"},floorRoughness:{type:"float",label:"Seafloor jag",min:0,max:3,step:.05,default:1,hint:"height variation below water"},deltaFloor:{type:"float",label:"Delta follow",min:0,max:1,step:.02,default:0,hint:"carves underwater floor along the river/delta channel"},shoreGlow:{type:"float",label:"Shore glow",min:0,max:1.5,step:.05,default:.7,hint:"cyan + white coastline sampler"},shoreGlowWidth:{type:"float",label:"Glow width",min:.25,max:4,step:.05,default:1,hint:"waterward spread of the coastline glow"},shoreGlowFollow:{type:"float",label:"Glow follow",min:0,max:1,step:.02,default:1,hint:"1 = tight shoreline ribbon · 0 = smoother broad overlaps"}}},tree:{label:"tree",icon:"🌴",blurb:"grove population — palms (more sliders later)",fields:{palmCount:{type:"int",label:"Palm count",min:0,max:512,step:1,default:56,hint:"palms massed on the fairway/courseway · raise to stress-test"},palmLine:{type:"float",label:"Palm line",min:.18,max:.9,step:.01,default:.58,hint:"highest normalized altitude where palms may plant"},mixedTreeCount:{type:"int",label:"Mixed trees",min:0,max:256,step:1,default:34,hint:"summer/autumn/conifer/winter scatter count"},palmSway:{type:"float",label:"Palm sway",min:0,max:2,step:.02,default:1,hint:"multiplies the baked palm wind"}}},shadows:{label:"shadows",icon:"◒",blurb:"two sun shadow maps · fine layer plus coarse motion layer",fields:{enable:{type:"bool",label:"Shadows",default:!0,hint:"X toggles shadow casting without killing sun light"},primaryEnable:{type:"bool",label:"Primary layer",default:!0,hint:"main sun shadow map"},primarySize:{type:"int",label:"Primary map",min:512,max:8192,step:512,default:8192,hint:"texels per side; GPU clamps if unsupported"},primaryCoverage:{type:"float",label:"Primary span",min:.35,max:1.6,step:.01,default:1.28,hint:"smaller = sharper but can clip island-edge shadows"},secondaryEnable:{type:"bool",label:"Coarse layer",default:!0,hint:"second sun shadow map for low-res dance"},secondarySize:{type:"int",label:"Coarse map",min:512,max:8192,step:512,default:2560,hint:"try 512, 1024, 2048 against the primary"},secondaryCoverage:{type:"float",label:"Coarse span",min:.35,max:1.8,step:.01,default:1,hint:"coarse layer shadow-camera coverage"},secondaryMix:{type:"float",label:"Coarse mix",min:0,max:1,step:.01,default:1,hint:"add mode: amount of extra coarse-map sun"},blendMode:{type:"int",label:"Blend mode",min:0,max:1,step:1,default:1,labels:["split","add"],hint:"split keeps total light stable · add is stylized and brighter"},filterMode:{type:"int",label:"Filter",min:0,max:2,step:1,default:1,labels:["hard","pcf","soft"],hint:"shadow-map sampling kernel"},softness:{type:"float",label:"Softness",min:0,max:8,step:.1,default:1.7,hint:"shadow radius used by filtered modes"},bias:{type:"float",label:"Bias",min:-.005,max:.005,step:1e-4,precision:4,default:-6e-4,hint:"depth offset; fights acne vs detached shadows"},normalBias:{type:"float",label:"Normal bias",min:0,max:6,step:.05,default:2.2,hint:"offset along voxel normals; original default was 2.2"}}},render:{label:"render",icon:"◯",blurb:"camera, exposure, horizon haze",fields:{fov:{type:"float",label:"FOV",min:40,max:95,step:1,default:68,unit:"°"},exposure:{type:"float",label:"Exposure",min:.2,max:3,step:.01,default:1.05},fogDensity:{type:"float",label:"Horizon haze",min:0,max:.006,step:5e-5,default:72e-5,hint:"dissolves the bounded sea edge into the sky"},horizonWarp:{type:"bool",label:"Horizon warp",default:!0}}},godrays:{label:"god rays",icon:"✺",blurb:"screen-space radial scatter · downsample→march→upsample",fields:{enable:{type:"bool",label:"Enable",default:!0,hint:"G toggles · off = golden bypass (zero cost)"},source:{type:"float",label:"Source mask",min:0,max:1,step:.02,default:1,hint:"1 = clean depth sky/occluder · 0 = raw-scene debug echoes"},intensity:{type:"float",label:"Intensity",min:0,max:3,step:.05,default:.85,hint:"first gain knob"},density:{type:"float",label:"Density",min:.2,max:1,step:.02,default:.32,hint:"ray reach toward the sun"},decay:{type:"float",label:"Decay",min:.8,max:1,step:.005,default:.915,hint:"tail length"},weight:{type:"float",label:"Weight",min:.1,max:2,step:.05,default:2,hint:"per-sample lift"},exposure:{type:"float",label:"Exposure",min:.1,max:3,step:.05,default:.7,hint:"final ray gain after the march"},threshold:{type:"float",label:"Threshold",min:.05,max:.95,step:.01,default:.62,hint:"source cutoff"},groundMask:{type:"float",label:"Ground mask",min:0,max:1,step:.02,default:.5,hint:"suppresses sources below the sun"},reach:{type:"float",label:"Reach",min:.4,max:2.5,step:.05,default:1.45,hint:"screen-space falloff radius"},warmth:{type:"float",label:"Warmth",min:0,max:1,step:.02,default:.5,hint:"0 = sky-colour rays · 1 = warm sun"},samples:{type:"int",label:"March taps",min:6,max:48,step:1,default:16,hint:"sample count in the radial march"},resScale:{type:"float",label:"Buffer scale",min:.06,max:1,step:.02,default:.25,hint:"LOW = cheap + blocky scatter"},sharp:{type:"float",label:"Upsample snap",min:0,max:1,step:.05,default:.25,hint:"0 = bilinear · 1 = raw low-res blocks; no blur pass"},blurEnable:{type:"bool",label:"Blur",default:!1,hint:"off = raw march · on = optional coalescing pass"},blurAmount:{type:"float",label:"Blur mix",min:0,max:1,step:.01,default:.18,hint:"blend raw rays with the blur pass"},blurRadius:{type:"float",label:"Blur radius",min:.25,max:8,step:.05,default:1.5,hint:"god-buffer texel radius"},blurPasses:{type:"int",label:"Blur passes",min:1,max:4,step:1,default:1,hint:"extra separable passes; cost is linear"}}},camera:{label:"camera",icon:"◌",blurb:"director scaffold · human input always wins",fields:{director:{type:"bool",label:"Camera director",default:!1,hint:"AFK handoff scaffold; no path/focus math yet"},focusMountain:{type:"float",label:"Mountain focus",min:0,max:1,step:.01,default:.35,hint:"future focus probability · not wired yet"},focusSky:{type:"float",label:"Sky focus",min:0,max:1,step:.01,default:.18,hint:"future focus probability · not wired yet"},focusGreenway:{type:"float",label:"Greenway focus",min:0,max:1,step:.01,default:.16,hint:"future focus probability · not wired yet"},focusMassif:{type:"float",label:"Massif focus",min:0,max:1,step:.01,default:.22,hint:"future focus probability · not wired yet"},focusValley:{type:"float",label:"Valley focus",min:0,max:1,step:.01,default:.14,hint:"future focus probability · not wired yet"},focusShoreline:{type:"float",label:"Shoreline focus",min:0,max:1,step:.01,default:.24,hint:"future focus probability · not wired yet"},focusPalms:{type:"float",label:"Palms focus",min:0,max:1,step:.01,default:.12,hint:"future focus probability · not wired yet"},focusWater:{type:"float",label:"Water focus",min:0,max:1,step:.01,default:.16,hint:"future focus probability · not wired yet"}}},orbitSweep:{label:"orbit sweep",icon:"↻",blurb:"sun elevation + azimuth overlay · real sliders stay authoritative",fields:{enable:{type:"bool",label:"Orbit sweep",default:!1,hint:"slow hidden sun path; touching sun controls turns it off"},speed:{type:"float",label:"Sim speed",min:0,max:4,step:.001,precision:3,default:1,curve:2.4,uiStep:.001,hint:"curved time multiplier · most slider travel lives below 1.2"},elevationDeg:{type:"float",label:"Elevation",min:-10,max:90,step:.01,precision:2,default:26,unit:"°",pin:!1,hint:"runtime sweep value; not saved to presets"},azimuthDeg:{type:"float",label:"Azimuth",min:-180,max:180,step:.01,precision:2,default:-84,unit:"°",pin:!1,hint:"runtime sweep value; wraps through 360° under the hood"},elevationSpeed:{type:"float",label:"Elevation speed",min:0,max:24,step:.01,default:4,hint:"multiplies sim speed for sunset cycling"},azimuthSpeed:{type:"float",label:"Azimuth speed",min:0,max:8,step:.01,default:.5,hint:"multiplies sim speed for horizontal orbit drift"},elevationRange:{type:"range",label:"Elevation arc",min:-10,max:90,step:.5,default:[2,50],unit:"°",handle:"ticks",hint:"sweep band; current elevation can drift outside before re-entering"}}}},pg=["orbitSweep","sun","atmosphere","lighting","voxel","island","seasons","water","tree","shadows","render","godrays","camera"];function mg(i){return i.type==="range"?[...i.default]:i.default}function gg(){const i={};for(const e of pg){i[e]={};const t=fg[e].fields;for(const[n,s]of Object.entries(t))i[e][n]=mg(s)}return i}const rl=gg();function In(i){if(i==null||typeof i!="object")return i;if(Array.isArray(i))return i.map(In);const e={};for(const t in i)e[t]=In(i[t]);return e}function _g(i,e){const t=e.split(".");let n=i;for(const s of t){if(n==null)return;n=n[s]}return n}function vg(i,e,t){const n=e.split("."),s=n.pop();let r=i;for(const o of n)r[o]==null&&(r[o]=isNaN(Number(o))?{}:[]),r=r[o];const a=r[s];return r[s]=t,a}class Eg{constructor(e){this.state=In(e??rl),this.defaults=In(rl),this.listeners=new Set}get(e){return _g(this.state,e)}set(e,t){const n=vg(this.state,e,In(t));this._notify(e,t,n)}fromJSON(e){!e||typeof e!="object"||(this._mergeInto(this.state,e),this._notify("*",this.state,null))}_mergeInto(e,t){for(const n in t){const s=t[n];s&&typeof s=="object"&&!Array.isArray(s)?(e[n]==null&&(e[n]={}),this._mergeInto(e[n],s)):e[n]=In(s)}}toJSON(){return In(this.state)}reset(){this.state=In(this.defaults),this._notify("*",this.state,null)}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_notify(e,t,n){for(const s of this.listeners)try{s({path:e,value:t,prev:n,store:this})}catch(r){console.error("store listener error",r)}}}function al(i){if(!i||typeof i!="object")return{};const e={};for(const t of Object.keys(i)){const n=/^([1-8])$/.exec(t);e[n?"A"+n[1]:t]=i[t]}return e}const $l="isometric-island.presets.v1";function aa(){try{const i=window.localStorage?.getItem($l);return i?JSON.parse(i):{}}catch{return{}}}function xg(i,e){try{const t=aa();return t[String(i)]=e,window.localStorage?.setItem($l,JSON.stringify(t)),!0}catch{return!1}}async function Tg(){try{const i=new URL("presets.json",document.baseURI).href,e=await fetch(i,{cache:"no-cache"});if(e.ok){const t=await e.json(),n=t&&typeof t=="object"?t.presets||t:{};return al({...n,...aa()})}}catch{}return al(aa())}async function wg(i,e){{xg(i,e);return}}function ol(i){const e=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(i);if(e)return[+e[1],+e[2],+e[3]];const t=i.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function $n(i,e,t){const n=ol(i),s=ol(e),r=Math.max(0,Math.min(1,t)),a=n.map((o,l)=>Math.round(o+(s[l]-o)*r));return`rgb(${a[0]},${a[1]},${a[2]})`}function Sg(i){const e=i&&i.params;if(!e)return null;const t=e.sun?.elevationDeg??26,n=Math.max(0,Math.min(1,(t+4)/26)),s=1-n,r=e.render?.exposure??1.05,a=Math.max(.8,Math.min(1.25,r)),o=$n("#1c2742","#6fa9da",n),l=$n("#ff7a3c","#d5e8f1",n),u=["#4f9e34","#caa033","#2f7a44","#acd7de"],c=e.seasons?.sweepDeg??0,h=u[Math.abs(Math.round(c/90))%4],d=$n(h,"#e7d59a",.28*a),m=$n(h,"#10331f",.5),g=$n($n("#0e4f63","#36b9c0",n),"#1f6f6a",s*.5),v=$n("#06283a","#0e5566",n);return`linear-gradient(180deg, ${o} 0%, ${l} 32%, ${d} 36%, ${h} 50%, ${m} 63%, ${g} 66%, ${v} 100%)`}class Ag{constructor({store:e,schema:t,sectionOrder:n,onAction:s,onToggle:r,sticky:a,presets:o,showWorkshopHint:l=!0}){this.store=e,this.schema=t,this.sectionOrder=n,this.onAction=s,this.onToggle=r,this.sticky=a||{has:()=>!1,toggle:()=>!1},this.presets=o||{slots:{},save:()=>{},load:()=>{}},this.showWorkshopHint=l,this.fieldUpdaters=new Map,this.stickyEls=new Map,this.collapsed=!0,this.statusTimer=null,this.root=document.createElement("div"),this.root.className="ff-panel"+(this.collapsed?" collapsed":""),this._buildHeader(),this._buildBody(),this._buildFooter(),this.handle=document.createElement("button"),this.handle.className="ff-panel-handle"+(this.collapsed?" visible":""),this.handle.title="open controls (h or b)",this.handle.textContent="◧",this.handle.addEventListener("click",()=>this.toggle()),document.body.appendChild(this.handle),this.hints=document.createElement("div"),this.hints.className="ff-hints",this.hints.innerHTML=`
      <kbd>WASD</kbd> fly
      <kbd>Q/↑↓</kbd> up·down
      <kbd>drag</kbd> look
      <kbd>H</kbd> panel
      <kbd>G</kbd> god rays
      <kbd>X</kbd> shadows
      ${this.showWorkshopHint?"<kbd>T</kbd> workshop":""}
      <kbd>F</kbd> fps
    `,document.body.appendChild(this.hints),this.unsubscribe=e.subscribe(u=>this._onStoreChange(u))}toggle(){this.collapsed=!this.collapsed,this.root.classList.toggle("collapsed",this.collapsed),this.handle.classList.toggle("visible",this.collapsed),this.hints.classList.toggle("show",!this.collapsed),this.onToggle?.(this.collapsed)}flashStatus(e,t="ok"){this.statusEl.textContent=e,this.statusEl.classList.remove("ok","err"),this.statusEl.classList.add(t),this.statusTimer&&clearTimeout(this.statusTimer),this.statusTimer=setTimeout(()=>{this.statusEl.textContent="",this.statusEl.classList.remove("ok","err")},2200)}_onStoreChange(e){if(e.path==="*"){for(const[n,s]of this.fieldUpdaters)s(this.store.get(n));return}const t=this.fieldUpdaters.get(e.path);t&&t(e.value)}_buildHeader(){const e=document.createElement("div");e.className="ff-panel-header",e.innerHTML='<div class="ff-panel-status"></div>',this.statusEl=e.querySelector(".ff-panel-status"),this.root.appendChild(e)}_buildBody(){this.body=document.createElement("div"),this.body.className="ff-panel-body";for(const e of this.sectionOrder){const t=this.schema[e];this.body.appendChild(this._buildSection(e,t,!1))}this.root.appendChild(this.body)}_buildSection(e,t,n){const s=document.createElement("div");s.className="ff-section"+(n?" open":""),s.setAttribute("data-section",e);const r=document.createElement("div");r.className="ff-section-head",r.innerHTML=`
      <span class="ff-section-icon">${t.icon||"·"}</span>
      <span class="ff-section-label">${t.label}</span>
      <span class="ff-section-blurb">${t.blurb||""}</span>
      <span class="ff-section-chevron">▸</span>
    `,r.addEventListener("click",()=>s.classList.toggle("open")),s.appendChild(r);const a=document.createElement("div");a.className="ff-section-body";for(const[o,l]of Object.entries(t.fields)){const u=`${e}.${o}`,c=this._buildField(u,l);c&&a.appendChild(c)}return s.appendChild(a),s}_buildField(e,t){switch(t.type){case"int":case"float":return this._buildSliderField(e,t);case"range":return this._buildRangeField(e,t);case"bool":return this._buildToggleField(e,t);default:return null}}_buildSliderField(e,t){const n=Number(t.curve)>0&&t.type!=="int",s=n?0:t.min,r=n?1:t.max,a=n?t.uiStep??.001:t.step,o=document.createElement("div");o.className="ff-field",o.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-slider">
          <input type="range" min="${s}" max="${r}" step="${a}" />
        </div>
      </div>
    `;const l=o.querySelector(".ff-field-value"),u=o.querySelector(".ff-slider"),c=o.querySelector("input"),h=ll(t),d=v=>{if(!n)return v;const p=(Number(v)-t.min)/(t.max-t.min);return Math.pow(Math.max(0,Math.min(1,p)),1/t.curve)},m=v=>{if(!n)return Number(v);const p=Math.max(0,Math.min(1,Number(v)));return t.min+(t.max-t.min)*Math.pow(p,t.curve)},g=v=>{const p=Number(v),f=d(p);c.value=String(f),l.textContent=h(p);const T=n?f*100:(p-t.min)/(t.max-t.min)*100;u.style.setProperty("--ff-pct",`${T.toFixed(2)}%`)};return g(this.store.get(e)),c.addEventListener("input",()=>{const v=m(c.value),p=t.type==="int"?Math.round(v):v;this.store.set(e,p),g(p)}),this._releaseRangeFocus(c),this._attachSticky(o,e,t),this.fieldUpdaters.set(e,g),o}_buildRangeField(e,t){const n=document.createElement("div");n.className="ff-field",n.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value"></div>
      <div class="ff-field-control">
        <div class="ff-range${t.handle==="ticks"?" ff-range-ticks":""}">
          <div class="ff-range-track"><div class="ff-range-fill"></div></div>
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
          <input type="range" min="${t.min}" max="${t.max}" step="${t.step}" />
        </div>
      </div>
    `;const s=n.querySelector(".ff-field-value"),r=n.querySelector(".ff-range-fill"),a=n.querySelectorAll("input"),o=a[0],l=a[1],u=ll(t),c=d=>{const[m,g]=d;o.value=String(m),l.value=String(g);const v=t.max-t.min,p=(m-t.min)/v*100,f=(1-(g-t.min)/v)*100;r.style.left=`${p.toFixed(2)}%`,r.style.right=`${f.toFixed(2)}%`,s.textContent=`${u(m)} ─ ${u(g)}`},h=()=>{let d=Number(o.value),m=Number(l.value);const g=t.step;d>m-g&&(d>Number(this.store.get(e)[0])?d=m-g:m=d+g),d=Math.max(t.min,Math.min(t.max-g,d)),m=Math.max(t.min+g,Math.min(t.max,m));const v=[d,m];this.store.set(e,v),c(v)};return c(this.store.get(e)),o.addEventListener("input",h),l.addEventListener("input",h),this._releaseRangeFocus(o),this._releaseRangeFocus(l),this._attachSticky(n,e,t),this.fieldUpdaters.set(e,c),n}_releaseRangeFocus(e){const t=()=>e.blur();e.addEventListener("pointerup",t),e.addEventListener("change",t),e.addEventListener("keydown",n=>{!n.key.startsWith("Arrow")&&n.key!=="Tab"&&t()})}_buildToggleField(e,t){const n=document.createElement("div");n.className="ff-field",n.innerHTML=`
      <div class="ff-field-label">
        <span class="ff-field-name">${t.label}</span>
        ${t.hint?`<span class="ff-field-hint">${t.hint}</span>`:""}
      </div>
      <div class="ff-field-value">
        <div class="ff-toggle"></div>
      </div>
    `;const s=n.querySelector(".ff-toggle"),r=a=>{s.classList.toggle("on",!!a)};return r(this.store.get(e)),s.addEventListener("click",()=>{const a=!this.store.get(e);this.store.set(e,a),r(a)}),this._attachSticky(n,e,t),this.fieldUpdaters.set(e,r),n}_buildFooter(){const e=document.createElement("div");e.className="ff-panel-footer";const t=document.createElement("div");t.className="ff-banks",this.bankEls=new Map;for(const s of["A","B","C","D","E","F","G","H"]){const r=document.createElement("button");r.className="ff-bank",r.dataset.bank=s,r.textContent=s,r.title=`bank ${s}`,r.addEventListener("click",()=>{this.presets.setBank?.(s),this._syncBankActive()}),t.appendChild(r),this.bankEls.set(s,r)}e.appendChild(t);const n=document.createElement("div");n.className="ff-presets",this.presetEls=new Map;for(let s=1;s<=8;s++){const r=document.createElement("button");r.className="ff-preset",r.dataset.slot=String(s),r.innerHTML=`<span class="ff-preset-num">${s}</span>`,r.addEventListener("click",a=>{a.shiftKey?this.presets.save(s):this.presets.load(s)}),n.appendChild(r),this.presetEls.set(s,r)}e.appendChild(n),this.root.appendChild(e),this.refreshPresets()}_syncBankActive(){if(!this.bankEls)return;const e=this.presets?.getBank?.()||"A";for(const[t,n]of this.bankEls)n.classList.toggle("active",t===e)}refreshPresets(){if(this._syncBankActive(),!this.presetEls)return;const e=this.presets?.getBank?.()||"A",t=this.presets?.slots||{};for(const[n,s]of this.presetEls){const r=`${e}${n}`,a=t[r],o=!!a;s.classList.toggle("filled",o),s.style.backgroundImage=o&&Sg(a)||"",s.title=`${r}${r==="A1"?" (default)":""} — click load · shift-click save`}}_attachSticky(e,t,n={}){if(n.pin===!1)return;const s=e.querySelector(".ff-field-name");if(!s)return;const r=t.startsWith("voxel."),a=document.createElement("button");a.className="ff-sticky"+(r?" major":"")+(this.sticky.has(t)?" on":""),a.title=r?"structural pin — lock this; it is never randomized":"sticky pin — keep this value across reseed/random",a.textContent=this.sticky.has(t)?"◆":"◇",a.addEventListener("click",o=>{o.stopPropagation();const l=this.sticky.toggle(t);a.classList.toggle("on",l),a.textContent=l?"◆":"◇"}),s.prepend(a),this.stickyEls.set(t,a)}refreshSticky(){for(const[e,t]of this.stickyEls){const n=this.sticky.has(e);t.classList.toggle("on",n),t.textContent=n?"◆":"◇"}}destroy(){this.unsubscribe?.(),this.handle.remove(),this.hints.remove(),this.root.remove()}}function ll(i){const e=i.type==="int",t=Number.isInteger(i.precision)?i.precision:i.step>=1?0:i.step>=.1?1:i.step>=.01?2:i.step>=.001?3:4;return n=>{if(i.labels&&i.labels[n|0]!==void 0)return i.labels[n|0];const s=e?String(n|0):Number(n).toFixed(t);return i.unit?`${s} ${i.unit}`:s}}class Rg{constructor({scene:e}){this.scene=e,this.hidden=!0,this.root=document.createElement("div"),this.root.className="ff-perf hidden",this.root.innerHTML=`
      <span class="ff-perf-key">fps</span><span class="ff-perf-val" data-k="fps">—</span>
      <span class="ff-perf-key">tris</span><span class="ff-perf-val" data-k="tris">—</span>
      <span class="ff-perf-key">draws</span><span class="ff-perf-val" data-k="calls">—</span>
      <span class="ff-perf-key">trees</span><span class="ff-perf-val" data-k="trees">—</span>
    `,this.cells={};for(const t of this.root.querySelectorAll("[data-k]"))this.cells[t.dataset.k]=t;this._frames=0,this._acc=0,this._fps=0,requestAnimationFrame(t=>{this._last=t,this._tick(t)})}toggle(){this.hidden=!this.hidden,this.root.classList.toggle("hidden",this.hidden)}_tick(e){requestAnimationFrame(n=>this._tick(n));const t=(e-this._last)/1e3;if(this._last=e,this._frames++,this._acc+=t,this._acc>=.5){if(this._fps=this._frames/this._acc,this._frames=0,this._acc=0,this.hidden)return;const n=this.scene?.renderer?.info,s=this._fps;this.cells.fps.textContent=s.toFixed(0),this.cells.fps.className="ff-perf-val"+(s<24?" bad":s<45?" warn":""),n&&(this.cells.tris.textContent=n.render.triangles.toLocaleString(),this.cells.calls.textContent=String(n.render.calls)),this.cells.trees.textContent=String(this.scene?.treeCount??0)}}}class Cg{constructor({parent:e=document.body,label:t="sim build",settleMs:n=600}={}){this.label=t,this.settleMs=n,this._lines=[],this._active=!1,this._count=0,this._total=1,this._t0=performance.now(),this._last=this._t0,this._hideTimer=null,this.root=document.createElement("div"),this.root.className="iso-build-console",this.root.innerHTML=`
      <div class="iso-build-row">
        <span class="iso-build-spin">|</span>
        <span class="iso-build-title"></span>
        <span class="iso-build-time"></span>
      </div>
      <div class="iso-build-track"><i></i></div>
      <div class="iso-build-lines"></div>
    `,this.spinEl=this.root.querySelector(".iso-build-spin"),this.titleEl=this.root.querySelector(".iso-build-title"),this.timeEl=this.root.querySelector(".iso-build-time"),this.barEl=this.root.querySelector(".iso-build-track i"),this.linesEl=this.root.querySelector(".iso-build-lines"),e.appendChild(this.root),this._mode="transition",this._renderIdle()}start(e=this.label,t=8,n={}){this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=null),this.label=e,this._mode=n.mode||this._mode||"transition",this._active=!0,this._count=0,this._total=Math.max(1,t|0),this._t0=performance.now(),this._last=this._t0,this._lines=[],this.root.classList.remove("boot","transition"),this.root.classList.add(this._mode,"visible","active"),this.step("start")}step(e,t=""){const n=performance.now(),s=n-this._t0,r=n-this._last;this._last=n,this._count=Math.min(this._total,this._count+1);const a=`${String(this._count).padStart(2,"0")} ${e.padEnd(16," ")} +${r.toFixed(1)}ms  ${s.toFixed(1)}ms${t?`  ${t}`:""}`;this._lines.push(a),this._lines.length>4&&this._lines.shift(),this._render()}done(e="ready"){this.step(e),this._active=!1,this._count=this._total,this.root.classList.remove("active"),this._render(),this._hideTimer=setTimeout(()=>{this.root.classList.remove("visible"),this._hideTimer=null},this.settleMs)}_render(){const e=performance.now(),t=Math.max(0,e-this._t0),n="|/-\\";this.spinEl.textContent=this._active?n[Math.floor(e/120)%n.length]:" ",this.titleEl.textContent=this.label,this.timeEl.textContent=`${t.toFixed(0)}ms`,this.barEl.style.transform=`scaleX(${Math.max(.04,Math.min(1,this._count/this._total))})`,this.linesEl.textContent=this._lines.join(`
`)}_renderIdle(){this.titleEl.textContent=this.label,this.timeEl.textContent="idle",this.barEl.style.transform="scaleX(0.04)",this.linesEl.textContent="waiting",this.root.classList.remove("visible","active","boot","transition"),this.root.classList.add(this._mode||"transition")}}export{Cg as B,Ag as C,Eg as P,bg as S,Rg as a,fg as b,pg as c,rl as d,Tg as l,wg as s};
