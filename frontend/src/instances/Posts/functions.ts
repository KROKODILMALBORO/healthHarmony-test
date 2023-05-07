import {
    IGetByUserFilter,
} from './types/requests';

export function getDefaultFilterUser(): IGetByUserFilter {
    return {
        text: '',
        isFavorite: false,
    };
}
