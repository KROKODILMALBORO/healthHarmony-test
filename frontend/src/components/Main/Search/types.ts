export interface IProps {
    value: string;
    type: string;
    placeholder: string;

    className?: string;

    onChangeValue?(value: string): void;
}
