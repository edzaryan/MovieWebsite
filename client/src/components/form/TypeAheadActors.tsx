import type { ReactElement } from 'react';
import type { actorMovieDTO } from '../../pages/actor/actor.model';
import { Typeahead } from 'react-bootstrap-typeahead';

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}

function TypeAheadActors({ displayName, actors, onAdd, onRemove, listUI }: typeAheadActorsProps) {

    const actorsList: actorMovieDTO[] = [
        { 
            id: 1, 
            name: 'Tom Holland', 
            character: '', 
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4pq4DVlzBV5uDWNCgrAGhz_alNCtYqrpsw&s' 
        },
        { 
            id: 2, 
            name: 'Sharon Stone', 
            character: '', 
            picture: 'https://m.media-amazon.com/images/M/MV5BMTg0MDU1ODQwNF5BMl5BanBnXkFtZTcwOTc3MjQwNA@@._V1_FMjpg_UX1000_.jpg' 
        },
        { 
            id: 3, 
            name: 'Meryl Streep', 
            character: '', 
            picture: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_FMjpg_UX1000_.jpg' 
        }
    ];

    const selected: actorMovieDTO[] = [];

    return (
        <div className='mb-3'>
            <label>{displayName}</label>
            <Typeahead
                id='typeahead'
                onChange={selected => {
                    const actor = selected[0] as actorMovieDTO;
                    if (!actors.some(a => a.id === actor.id)) {
                        onAdd([...actors, actor]);
                    }
                }}
                options={actorsList}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder='Write the name of the actor...'
                minLength={1}
                flip={true}
                selected={[]}
                renderMenuItemChildren={actor => (
                    <>
                        <img 
                            src={actor.picture} 
                            alt='actor' 
                            style={{
                                width: '64px',
                                height: '75px',
                                marginRight: '12px',
                                borderRadius: '3px'
                            }}
                        />
                        <span style={{ fontWeight: 600 }}>
                            {actor.name}
                        </span>
                    </>
                )}
            />

            <ul className='list-group'>
                {actors.map(actor => (
                    <li key={actor.id} className='list-group-item list-group-item-action'>
                        {listUI(actor)}
                        <span 
                            className='badge badge-primary badge-pill pointer text-dark'
                            style={{ marginLeft: '0.5rem' }}
                            onClick={() => onRemove(actor)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TypeAheadActors;