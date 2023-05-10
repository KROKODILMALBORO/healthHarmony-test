import { DetailedHTMLProps, InputHTMLAttributes } from "react";
// компонент Sarch  принимает стандартные пропсы <input/>, если требуется расширить их -> можно использовать пример ниже :)
export interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    //startIcon?: ReactNode
}
