export function Pokemon( { pokemon } ){

    const {name, image, attacks, maxHP, maxCP} = pokemon
    const specials = attacks.special.slice(0,3)

    return (
            <div className="pokemon">
                <div className="pokemon__name">
                    <p>{name}</p>
                </div>
                <div className="pokemon__meta">
                    <span>
                    Max HP {maxHP}
                    </span>
                    <span>
                    Max CP {maxCP}
                    </span>
                </div>
                <div className="pokemon__image">
                    {<img src={image} alt={name+' image'}/>}
                </div>
                <div className="pokemon__attacks">
                    { specials && specials.map((special, index) => <span key={index}> {special.name}</span> ) }
                </div>
            </div>
            )
}