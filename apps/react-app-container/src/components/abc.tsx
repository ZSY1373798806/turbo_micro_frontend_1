interface IProps {
  click: () => void;
}
const ABC = (props: IProps) => {
  return <button onClick={props.click}>ABC</button>
}

export default ABC;
