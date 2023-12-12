import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(() => ({
    color: 'inherit',
    textDecoration: 'none'
}));

export default function CustomLink(props) {
    return <StyledLink {...props}> {props.children} </StyledLink>;
}

CustomLink.propTypes = {
    children: PropTypes.node
};
