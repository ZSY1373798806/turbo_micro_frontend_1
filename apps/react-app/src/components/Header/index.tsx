interface IProps {
	title: string;
}

const Header = (props: IProps) => {
	const { title } = props;
	return <div>{title}</div>;
};

export default Header;
