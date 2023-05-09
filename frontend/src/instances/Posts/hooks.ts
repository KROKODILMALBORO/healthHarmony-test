import {
    IPost,
} from './types';
import {
    IGetByUser,
} from './types/responses';

import {
    useState,
} from 'react';

import * as fetches from './fetches';

export function usePostsByUser() {
    const [posts, setPosts] = useState<IPost[] | null>(null);

    const getPosts = async (): Promise<IGetByUser> => {
        const res = await fetches.getByUser();

        if (!res.posts || res.error) {
            console.log(res.error);

            return res;
        }

        setPosts(res.posts);

        return res;
    };

    return {
        posts,
        getPosts,
    };
}
