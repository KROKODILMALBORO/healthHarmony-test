import {
    IGetByUser,
} from './types/responses';

import {
    ROOT_URL,
} from '../constants';

import {
    INSTANCE_PATH,
} from './constants';

export async function getByUser(): Promise<IGetByUser> {
    try {
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH}`);

        return {
            posts: await res.json(),
        };
    } catch (e) {
        console.log(e);

        return {
            posts: [],
        };
    }
}
