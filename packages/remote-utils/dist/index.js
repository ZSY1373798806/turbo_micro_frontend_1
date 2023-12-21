"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vueInReact = exports.reactInVue = exports.getRemoteScript = void 0;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const vue_1 = __importDefault(require("vue"));
const getRemoteScript = (remoteUrl, mfName, module) => {
    const script = document.createElement("script");
    script.src = remoteUrl;
    script.async = true;
    document.head.appendChild(script);
    return new Promise((resolve, reject) => {
        script.onload = () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield window[mfName].get(module);
            const remoteModule = result();
            resolve(remoteModule.default);
        });
        script.onerror = () => {
            reject(new Error("加载远程地址： 失败"));
        };
    });
};
exports.getRemoteScript = getRemoteScript;
const reactInVue = (compName, targetEl, attrs) => {
    const root = client_1.default.createRoot(targetEl);
    root.render(react_1.default.createElement(compName, attrs));
};
exports.reactInVue = reactInVue;
const vueInReact = (compName, targetEl, attrs) => {
    new vue_1.default({
        render: (h) => h(compName, attrs),
        computed: {},
    }).$mount(targetEl);
};
exports.vueInReact = vueInReact;
//# sourceMappingURL=index.js.map