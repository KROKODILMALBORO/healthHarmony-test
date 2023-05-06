import {
    IGetByUserFilter,
} from './types/requests';

export function geDefaultFilterUser(): IGetByUserFilter {
    return {
        text: '',
    };
}
