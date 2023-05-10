/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
import {
    IParamsGetByUser,
} from 'instances/Posts/types/requests';

import React, {
    FC,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import {
    useDelay,
} from 'tools/hooks';

import {
    usePostsByUser,
} from 'instances/Posts/hooks';

import styles from './Main.module.css';
import Post from './Post';
import Search from './Search';

import {
    FETCH_BY_FILTERS_DELAY,
} from './constants';

const initailFilter: IParamsGetByUser = {
    q: '',
};
const Main: FC = () => {
    const [value, setValue] = useState(initailFilter.q);
    const [filter, setFilter] = useState(initailFilter);
    const onChangeSearch: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => setValue(e.target.value), []);
    const memoFilter = useMemo(() => filter, [filter.q]);

    useDelay(() => {
        setFilter({
            q: value?.trim(),
        });
    }, FETCH_BY_FILTERS_DELAY, value);

    const {
        posts,
        // getPosts,
        // patchPost,
    } = usePostsByUser(memoFilter);

    // Данный кейс решает задачу фильтрации на стороне frontend-a
    // В ТЗ же указанно  - (если поисковой запрос не меняется в течение 500мс, делается запрос на сервер)
    /* const list = useMemo(() => {
        if (!posts) {
            return null;
        }

        return posts.filter((post) =>
            post.body
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
        );
    }, [filter, posts]); */

    return (
        <div className={styles.main}>
            <Search
                className={styles.search}
                value={value}
                type={'text'}
                placeholder={'Search'}
                onChange={onChangeSearch}
            />
            {
                posts ?
                    posts.length ?
                        <div className={styles.list}>
                            {
                                posts
                                    .map((post) =>
                                        <Post
                                            className={styles.post}
                                            key={post.id}
                                            post={post}
                                        />
                                    )
                            }
                        </div> :
                        <div className={styles.emptyResult}>
                            Nothing found for your request
                        </div> :
                    <div className={styles.loading}>
                        Loading..
                    </div>
            }
        </div>
    );
};

export default Main;
