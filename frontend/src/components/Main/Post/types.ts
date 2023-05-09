import {
    IPost,
} from 'instances/Posts/types';
// import {
//     IPatchByUserBody,
// } from 'instances/Posts/types/requests';
// import {
//     IPatchByUser,
// } from 'instances/Posts/types/responses';

export interface IProps {
    post: IPost;

    className?: string;

    // patchPost(body: IPatchByUserBody): Promise<IPatchByUser>;
}
