import { DetailedHTMLProps, InputHTMLAttributes } from "react";
// компонент Sarch  принимает стандартные пропсы <input/>, если требуется расширить их -> можно использовать пример ниже :)
type TypeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export interface IProps extends Omit<TypeInputProps, 'onChange'> {
    //startIcon?: ReactNode
    onChange?:(value:string)=>void,
}
