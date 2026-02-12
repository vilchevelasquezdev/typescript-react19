import {useEffect, useState} from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const json = (await res.json()) as T;
            setData(json);
        })();
    }, [url]);

    return { data };
}
