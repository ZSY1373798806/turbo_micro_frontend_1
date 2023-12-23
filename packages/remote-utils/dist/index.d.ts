import { Attributes } from "react";
export declare const getRemoteScript: (remoteUrl: string, mfName: string, module: string) => Promise<string>;
export declare const reactInVue: (compName: string, targetEl: Element | DocumentFragment, attrs: Attributes) => void;
export declare const vueInReact: (compName: string, targetEl: string | Element | undefined, attrs: Object) => void;
