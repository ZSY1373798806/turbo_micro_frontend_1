import style from "./index.module.css";

interface IProps {}
const ReactDiv = (props: IProps) => {
	return <div className={style.cube}>远程 react div</div>;
};

export default ReactDiv;
