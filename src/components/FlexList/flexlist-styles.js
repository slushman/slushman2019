import styled from '@emotion/styled';

export const StyledFlexList = styled.ul`
	${ props => ( {
		display: 'flex',
		justifyContent: props.spacing,
		listStyle: 'none',
		margin: '0',
		padding: '0',
	} ) }
`;