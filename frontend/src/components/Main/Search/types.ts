export interface IProps {
    value: string;

    type: string;
    placeholder: string;
    className?: string;

    onChange(filters: string): void;
}
