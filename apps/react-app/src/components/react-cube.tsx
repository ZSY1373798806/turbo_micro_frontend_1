import style from "./index.module.css";

interface IProps {
}
const ReactCube = (props: IProps) => {
  return <div className={style.cube}>远程 react cube</div>
}

export default ReactCube;
