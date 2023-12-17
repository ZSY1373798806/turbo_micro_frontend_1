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
Object.defineProperty(exports, "__esModule", { value: true });
function getRemoteScript(remoteUrl, mfName, module) {
    const script = document.createElement('script');
    script.src = remoteUrl;
    script.async = true;
    document.head.appendChild(script);
    return new Promise((resolve, reject) => {
        script.onload = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield window[mfName].get(module);
            const remoteModule = result();
            resolve(remoteModule.default);
        });
        script.onerror = () => {
            reject(new Error('加载远程地址： 失败'));
        };
    });
}
exports.default = getRemoteScript;
//# sourceMappingURL=index.js.map