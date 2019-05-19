import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const frameWrap = css`
	height: 0;
	padding-bottom: 56.25%;
	position: relative;
	width: 100%;
`;

export const StyledFigure = styled.figure`
	${ props => ( {
		height: props.height,
		margin: '0',
	} ) };
`;

export const StyledIframe = styled.iframe`
	${ props => ( {
		height: props.height,
		left: '0',
		position: 'absolute',
		top: '0',
		width: props.width,
	} ) };
`;