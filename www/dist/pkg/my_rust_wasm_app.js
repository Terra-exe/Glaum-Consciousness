
import * as wasm from "./my_rust_wasm_app_bg.wasm";
import { __wbg_set_wasm } from "./my_rust_wasm_app_bg.js";
__wbg_set_wasm(wasm);
export * from "./my_rust_wasm_app_bg.js";
