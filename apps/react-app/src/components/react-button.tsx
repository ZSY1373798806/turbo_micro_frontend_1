interface IProps {
  click: () => void;
}
const ReactButton = (props: IProps) => {
  return <button onClick={props.click}>远程 react button</button>
}

export default ReactButton;
