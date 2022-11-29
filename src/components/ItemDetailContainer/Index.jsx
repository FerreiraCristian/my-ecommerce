import React, { useState, useEffect } from 'react';

import ItemDetail from '../ItemDetail';


const film = { id: 1, image: "https://scontent.faep22-1.fna.fbcdn.net/v/t1.18169-9/10437690_688839521186639_8260197535420153114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=5F3VmRYLvDIAX9aJFwP&_nc_ht=scontent.faep22-1.fna&oh=00_AfCq0P2n6BhzywqWU1nhwWqvDxS3tolM5RA359gVaR-snA&oe=63AB6CDC", title: "Godzilla" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData (res));
    }, [])

    return (
        <ItemDetail data={data} />
    );

}

export default ItemDetailContainer;