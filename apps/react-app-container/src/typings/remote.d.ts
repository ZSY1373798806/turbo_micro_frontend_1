/// <reference types="react" />

/**
 * typings, @types
 * TypeScript编译器默认会查找声明文件的位置
 */

declare module "ReactApp/ReactButton" {
	interface IProps {
		click: (msg: string) => void;
	}
	const Component: React.LazyExoticComponent<React.ComponentType<IProps>>;
	export default Component;
}

declare module "ReactApp/ReactUtils" {
	interface IProps {
		greet: (msg: string) => void;
	}
	const Module: IProps;
	export default Module;
}

declare module "VueApp/VueButton" {
	interface IProps {
		click: (msg: string) => void;
	}
	const Component: React.LazyExoticComponent<React.ComponentType<IProps>>;
	export default Component;
}

declare module "VueApp/VueUtils" {
	interface IProps {
		greet: (msg: string) => void;
	}
	const Module: IProps;
	export default Module;
}
