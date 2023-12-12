import React from 'react';
import { Stack, Typography } from '@mui/material';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    XIcon,
    VKShareButton,
    VKIcon
} from 'react-share';

const SocialIconsContainer = () => {
    const handleCopy = async () => {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
    };

    return (
        <Stack>
            <Typography variant="h6" component="h6" sx={{ textAlign: 'center', color: 'inherit' }}>
                Share Via
            </Typography>
            <Stack direction="row" spacing={2} sx={{ textAlign: 'center', color: 'inherit' }}>
                <FacebookShareButton
                    // url={shareUrl}
                    // className="Demo__some-network__share-button"
                    url={'https://www.example.com'}
                    aria-label="facebook-share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={'https://www.example.com'}
                    aria-label="twitter-share-button"
                >
                    <XIcon size={32} round />
                </TwitterShareButton>
                <VKShareButton url={'https://www.example.com'} aria-label="vk-share-button">
                    <VKIcon size={32} round />
                </VKShareButton>
                {/* <div
            className="icon-container d-flex align-items-center justify-content-center me-3"
            onClick={handleCopy}
            aria-label="copy-link-button"
          >
            <i className="fa-solid fa-link"></i>
          </div> */}
            </Stack>
        </Stack>
    );
};
export default SocialIconsContainer;
