import * as React from 'react';
import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { useNavigate, createSearchParams } from 'react-router-dom';

import useSearchData from '../../hooks/useSearchData';

export default function SearchBox({ sectionSpacing, fetchData }) {
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [searchInput, setSearchInput] = React.useState(searchParams.get('keyword') ?? '');
    const { searchInput, setSearchInput } = useSearchData();

    const handleSearch = () => {
        console.log(searchInput);
        if (searchInput.length < 4) {
            console.log('Keyword should be at least 4 characters.');
            return;
        }
        const params = createSearchParams({ keyword: searchInput });
        navigate(`/search?${params}`);
    };

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        fetchData && fetchData(searchInput);
    };

    return (
        <Box sx={{ ...sectionSpacing }}>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.7px solid rgba(0,0,0,0.2)',
                    boxShadow: 'none'
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="What are you looking for?"
                    inputProps={{ 'aria-label': 'search box' }}
                    value={searchInput}
                    onChange={handleSearchInput}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleSearch())}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={handleSearch}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}

SearchBox.propTypes = {
    sectionSpacing: PropTypes.object,
    fetchData: PropTypes.func
};

SearchBox.defaultProps = {
    fetchData: null
};
