import {
    StringifiableRecord,
} from 'query-string';

export interface IPatchByUserBody {
    id: number;

    isFavorite: boolean;
}
export interface IParamsGetByUser extends StringifiableRecord {
    q?: string;
}
