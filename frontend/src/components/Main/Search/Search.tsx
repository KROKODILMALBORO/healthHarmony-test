import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC, useCallback,
} from 'react';

import styles from './Search.module.css';

const Search: FC<IProps> = ({
    className, onChange, ...props
}) => {
    const onChangeSearch: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => onChange && onChange(e.target.value), [onChange]);
    return (
        <input
            className={classNames(styles.search, className)}
            onChange={onChangeSearch}
            {...props}
        />
    );
};


export default Search;