/* eslint-disable react/jsx-indent */
import React, {
    FC,
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

const Main: FC = () => {
    const [value, setValue] = useState('');
    const [filter, setFilter] = useState('');

    const {
        posts,
        getPosts,
        // patchPost,
    } = usePostsByUser();

    const list = useMemo(() => {
        if (!posts) {
            return null;
        }

        return posts.filter((post) =>
            post.body
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
        );
    }, [filter, posts]);

    useEffect(() => {
        (async () => {
            await getPosts();
        })();
    }, []);
    useDelay(() => {
        setFilter(value.trim());
    }, FETCH_BY_FILTERS_DELAY, value);

    return (
        <div className={styles.main}>
            <Search
                className={styles.search}
                value={value}
                type={'text'}
                placeholder={'Search'}
                onChange={setValue}
            />
            {
                list ?
                    list.length ?
                        <div className={styles.list}>
                            {
                                list
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
