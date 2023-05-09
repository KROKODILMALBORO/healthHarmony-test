import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    ChangeEvent,
    FC,
} from 'react';

import styles from './Search.module.css';

const Search: FC<IProps> = (props) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(styles.search, props.className)}
            value={props.value}
            placeholder={props.placeholder}
            onChange={onChange}
        />
    );
};

export default Search;
