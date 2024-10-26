import React from 'react'

const MovieCast = ({ actors }: any) => {
    console.log('actors:', actors);
    const maleCast = actors.cast.filter((act: any) => act.gender === 2)
    console.log('maleCast:', maleCast);

    return (
        <div className='h-[400px] overflow-x-hidden'>
            {actors.cast.map((actor: any, index: number) => (
                <div key={index} className='flex mb-2'>
                    <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={actor.name} className='w-[35px] h-[35px] rounded-md' />
                    <p className='ml-2'>{actor.name} <span className=' font-bold text-sm'>as</span> {actor?.character}</p>
                </div>
            ))}
        </div>
    )
}

export default MovieCast