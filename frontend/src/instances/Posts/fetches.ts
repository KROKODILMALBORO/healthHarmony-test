// import {
//     IPatchByUserBody,
// } from './types/requests';
import {
    IParamsGetByUser,
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

export async function getByUser(query?: IParamsGetByUser): Promise<IGetByUser> {
    // queryString - ваша зависимость, которую вы не использовали :)
    const url = queryString.stringifyUrl({
        url: `${ROOT_URL}${INSTANCE_PATH}`,
        query,
    });

    try {
        const res = await fetch(url);

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

// export async function patchByUser(body: IPatchByUserBody): Promise<IPatchByUser> {
//     try {
//         const res = await fetch(`${ROOT_URL}${INSTANCE_PATH}/${body.id}`, {
//             headers: {
//                 // eslint-disable-next-line @typescript-eslint/naming-convention
//                 'Content-Type': 'application/json',
//             },
//         });

//         return {
//             post: await res.json(),
//         };
//     } catch (e) {
//         console.log(e);

//         return {
//             post: null,
//         };
//     }
// }
