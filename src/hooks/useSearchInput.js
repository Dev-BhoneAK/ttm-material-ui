import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSearchInput = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = React.useState(searchParams.get('keyword') ?? '');
    return [searchInput, setSearchInput];
};

export default useSearchInput;
