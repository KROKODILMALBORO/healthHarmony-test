// import {
//     IPatchByUserBody,
// } from './types/requests';
import {
    IGetByUser,
    // IPatchByUser,
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
