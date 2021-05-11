import React,{Fragment} from 'react'

const Artista = ({infoartista}) => {
    if(Object.keys(infoartista).length === 0) return null;

    const {strArtistThumb, strArtist, strBiographyES} = infoartista;

    return ( 
        <Fragment>
            <h2>Artista</h2>
            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    <h3>{strArtist}</h3>
                </div>
                <div className="card-body">
                    <img src={strArtistThumb} alt=""/>
                    <hr/>
                    <p>{strBiographyES}</p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Artista;