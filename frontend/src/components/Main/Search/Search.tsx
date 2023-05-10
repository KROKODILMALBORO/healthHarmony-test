import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
} from 'react';

import styles from './Search.module.css';

const Search: FC<IProps> = ({
    className, ...props
}) => {
    return (
        <input
            className={classNames(styles.search, className)}
            {...props}
        />
    );
};

export default Search;
