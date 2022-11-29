import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const films = [
    {id: 1, image: "https://scontent.faep22-1.fna.fbcdn.net/v/t1.18169-9/10437690_688839521186639_8260197535420153114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=5F3VmRYLvDIAX9aJFwP&_nc_ht=scontent.faep22-1.fna&oh=00_AfCq0P2n6BhzywqWU1nhwWqvDxS3tolM5RA359gVaR-snA&oe=63AB6CDC", category:'films', title: "Godzilla"},
    {id: 2, image: "https://i.pinimg.com/564x/b4/cc/bf/b4ccbf5d4bb8f3ef4d2242bd11e67a52.jpg", category:'films', title: "300"},
    {id: 3, image: "https://pics.filmaffinity.com/Star_Wars_El_ascenso_de_Skywalker-664107903-large.jpg", category:'films', title: "StarWars"},
    {id: 4, image: "https://pics.filmaffinity.com/stranger_things-875025085-large.jpg", category:'series', title: "StrangerThings"},
    {id: 5, image: "https://pics.filmaffinity.com/peaky_blinders-713495787-large.jpg", category:'series', title: "PeakyBlinders"},
];


export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId}  = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category === categoriaId)))
        } else {
            getData.then(res => console.log(res))
        }

    }, [categoriaId])
    
    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades `);

    }
    return (
        <>
        <Title greting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
} 

export default ItemListContainer;