import {
    useEffect,
} from 'react';

type ICallBack = () => void | Promise<void>;

export default function(cb: ICallBack, delay: number, dependency: any) {
    //Можно избавиться от useState - используя возможности useEffect
    //const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const id = setTimeout(async () => {
            await cb();
        }, delay);

        return () => {
            clearTimeout(id);
        };
    }, [dependency]);
}
