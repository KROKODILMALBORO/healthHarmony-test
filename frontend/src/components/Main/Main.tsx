/* eslint-disable react/jsx-indent */
import React, {
    FC,
    useEffect,
    useState,
} from 'react';

import {
    useDelay,
} from 'tools/hooks';

import {
    getDefaultFilterUser,
} from 'instances/Posts/functions';
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
    const [filters, setFilters] = useState(getDefaultFilterUser);

    const {
        posts,
        getPosts,
    } = usePostsByUser();

    useEffect(() => {
        (async () => {
            await getPosts(filters);
        })();
    }, []);

    useDelay(async () => {
        await getPosts(filters);
    }, FETCH_BY_FILTERS_DELAY, filters);

    return (
        <div className={styles.main}>
            <Search
                className={styles.search}
                value={filters.text}
                type={'text'}
                placeholder={'Поиск'}
                onChangeValue={(text) => setFilters({
                    ...filters,
                    text,
                })}
            />
            {
                posts ?
                    posts.length ?
                        <div className={styles.list}>
                            {
                                posts.map((post) =>
                                    <Post
                                        className={styles.post}
                                        key={post.id}
                                        post={post}
                                    />
                                )
                            }
                        </div> :
                        <div className={styles.emptyResult}>
                            По вашему запросу ничего не найдено ¯\_(ツ)_/¯
                        </div> :
                    <div className={styles.loading}>
                        Загрузка..
                    </div>
            }
        </div>
    );
};

export default Main;
