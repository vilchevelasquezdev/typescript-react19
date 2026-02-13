import * as React from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T,index:number) => React.ReactNode;
}

export const List = <T,>({items,renderItem}:ListProps<T>) => {

    return (
        <div className="bg-neutral-950 text-neutral-100 antialiased p-5">
            <ul className="bg-neutral-800 text-neutral-100  p-8">
                {items.map(renderItem)}
            </ul>
        </div>


    );
};