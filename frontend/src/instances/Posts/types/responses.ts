import {
    IWithResponseError,
} from '../../../../tools/types'; // 'tools/types'

import {
    IPost,
} from '.';

export interface IGetByUser extends IWithResponseError {
    posts: IPost[];
}
