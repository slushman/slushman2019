import styled from '@emotion/styled';

export const StyledFlexList = styled.ul`
	${ props => ( {
		display: 'flex',
		flexWrap: props.wrap ? 'wrap' : 'no-wrap',
		justifyContent: props.spacing,
		listStyle: 'none',
		margin: '0',
		padding: '0',
	} ) }
`;