import React from 'react';
import {
    IconExternal,
    IconFolder,
    IconGitHub,
    IconArrow
} from './index';

const Icon = ({ name }) => {
    switch (name) {
        case 'Folder':
            return <IconFolder />;
        case 'GitHub':
            return <IconGitHub />;
        case 'Arrow':
            return <IconArrow />;
        default:
            return <IconExternal />;
    }
};

export default Icon;
