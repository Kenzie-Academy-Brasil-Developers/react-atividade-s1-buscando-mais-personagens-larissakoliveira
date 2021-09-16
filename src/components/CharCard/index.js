
import './styles.css'

const CharCard = ({ character }) => {

    return (

        character.status === 'Alive' ?
            <div className='alive'>
                {character.name.length < 15 ?
                <h2>{character.name}</h2>
                :
                <h2>{character.name.substr(0,12) + '...'}</h2>}
                <h5>{character.species}</h5>
                <img src={character.image} alt={''} />
            </div>
            :
            <div className='dead'>
                {character.name.length < 15 ?
                <h2>{character.name}</h2>
                :
                <h2>{character.name.substr(0,12) + '...'}</h2>}
                <h5>{character.species}</h5>
                <img src={character.image} alt={''} />
            </div>

    )
}

export default CharCard