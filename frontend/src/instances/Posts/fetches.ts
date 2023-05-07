import {
    IGetByUserFilter,
} from './types/requests';
import {
    IGetByUser,
} from './types/responses';

import queryString from 'query-string';

import {
    ROOT_URL,
} from '../constants';

import {
    INSTANCE_PATH,
} from './constants';

export async function getByUser(filter: IGetByUserFilter): Promise<IGetByUser> {
    try {
        const stringified = queryString.stringify(filter);
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH}?${stringified}`);

        return res.json();
    } catch (e) {
        console.log(e);

        return {
            posts: [],
        };
    }
}
