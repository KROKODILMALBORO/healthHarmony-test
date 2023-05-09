import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    useState,
} from 'react';

import styles from './Post.module.css';

import heartImg from './media/heart.svg';
import heartColorImg from './media/heartColor.svg';

const Post: FC<IProps> = (props) => {
    const [isFavorite, setIsFavorite] = useState(props.post.isFavorite);
    // const [isPending, setIsPending] = useState(false);

    // const onChangeFavorite = () => {
    //     if (isPending) {
    //         return;
    //     }

    //     setIsPending(true);
    //     props.patchPost({
    //         id: props.post.id,
    //         isFavorite: !props.post.isFavorite,
    //     });

    //     setIsPending(false);
    // };

    return (
        <div className={classNames(styles.post, props.className)}>
            <div className={styles.top}>
                <div className={styles.title}>
                    {props.post.title}
                </div>
                <img
                    className={styles.favoriteIcon}
                    src={isFavorite ? heartColorImg : heartImg}
                    alt={''}
                    onClick={() => setIsFavorite(false)}
                />
            </div>
            <div className={styles.body}>
                {props.post.body}
            </div>
        </div>
    );
};

export default Post;
