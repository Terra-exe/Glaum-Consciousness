let wasm,cachedDataViewMemory0=null;function getDataViewMemory0(){return(null===cachedDataViewMemory0||!0===cachedDataViewMemory0.buffer.detached||void 0===cachedDataViewMemory0.buffer.detached&&cachedDataViewMemory0.buffer!==wasm.memory.buffer)&&(cachedDataViewMemory0=new DataView(wasm.memory.buffer)),cachedDataViewMemory0}const cachedTextDecoder="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&cachedTextDecoder.decode();let cachedUint8ArrayMemory0=null;function getUint8ArrayMemory0(){return null!==cachedUint8ArrayMemory0&&0!==cachedUint8ArrayMemory0.byteLength||(cachedUint8ArrayMemory0=new Uint8Array(wasm.memory.buffer)),cachedUint8ArrayMemory0}function getStringFromWasm0(e,t){return e>>>=0,cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(e,e+t))}export function greet(){let e,t;try{const i=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.greet(i);var n=getDataViewMemory0().getInt32(i+0,!0),a=getDataViewMemory0().getInt32(i+4,!0);return e=n,t=a,getStringFromWasm0(n,a)}finally{wasm.__wbindgen_add_to_stack_pointer(16),wasm.__wbindgen_free(e,t,1)}}async function __wbg_load(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function __wbg_get_imports(){return{wbg:{}}}function __wbg_init_memory(e,t){}function __wbg_finalize_init(e,t){return wasm=e.exports,__wbg_init.__wbindgen_wasm_module=t,cachedDataViewMemory0=null,cachedUint8ArrayMemory0=null,wasm}function initSync(e){if(void 0!==wasm)return wasm;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const t=__wbg_get_imports();return __wbg_init_memory(t),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),__wbg_finalize_init(new WebAssembly.Instance(e,t),e)}async function __wbg_init(e){if(void 0!==wasm)return wasm;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL("rust_wasm_bg.wasm",import.meta.url));const t=__wbg_get_imports();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),__wbg_init_memory(t);const{instance:n,module:a}=await __wbg_load(await e,t);return __wbg_finalize_init(n,a)}export{initSync};export default __wbg_init;