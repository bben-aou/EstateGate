export type TConditionalRenderingProps = {
	condition: boolean;
	defaultComponent?: React.ReactNode | JSX.Element;
	children: React.ReactNode | JSX.Element;
};