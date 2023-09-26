import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Stats from '../Stats';

const Card = ({ data }) => {
    return (
        <Link href={`/recipe/${data.id}`}>
            <div className="img">
                <Image src={data.image} alt={data.title} fill />
            </div>
            <div className="results__item__text">
                <h4 className="title">{data.title}</h4>
                <p className="source">Recipe by <strong>{data.sourceName}</strong></p>
            </div>
            <Stats data={data} />
        </Link>
    )
}
export default Card