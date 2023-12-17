interface IProps {
	click: () => void;
}
const ReactButton = (props: IProps) => {
	const handleClick = () => {
		console.log("远程打印");
		props.click();
	};
	return <button onClick={handleClick}>远程 react button</button>;
};

export default ReactButton;
