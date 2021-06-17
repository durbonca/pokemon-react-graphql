export function Pokemon( { pokemon } ){

    const {name, image, attacks, maxHP, maxCP} = pokemon

    return (
            <div className="pokemon">
                <div className="pokemon__name">
                    {name}
                </div>
                <div className="pokemon__meta">
                    <span>
                    Max HP:{maxHP}
                    </span>
                    <span>
                        Max CP: {maxCP}
                    </span>
                    <div className="pokemon__image">
                        {<img src={image} alt={name+' image'}/>}
                    </div>
                    <div className="pokemon__attacks">
                        Special Attacks:
                        { attacks.special && attacks.special.map((special, index) => <div key={index}> {special.name}, damage: {special.damage}</div> ) }
                    </div>
                </div>
            </div>
            )
}