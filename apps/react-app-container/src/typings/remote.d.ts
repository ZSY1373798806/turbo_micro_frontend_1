/// <reference types="react" />

/**
 * typings, @types
 * TypeScript编译器默认会查找声明文件的位置
 */

declare module "ReactApp/ReactHeader" {
	interface IProps {
		title: string;
	}
	const Component: React.LazyExoticComponent<React.ComponentType<IProps>>;
	export default Component;
}
