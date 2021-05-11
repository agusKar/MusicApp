import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Artista from './components/Artista';
import axios from 'axios';

function App() {

  const [ busqueda, actualizarBusqueda] = useState({});
  const [ letra, guardarLetra] = useState('');
  const [ infoartista, guardarInfoArtista] = useState({});

  useEffect(() => {
    // Ejecutar si busqueda no esta vacio
    if(Object.keys(busqueda).length === 0) return;

    const busquedaAPI = async () => {
      const {artista, cancion} =  busqueda;

      const urlAPIletra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlAPIartista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [ letra, informacion ] = await Promise.all([
        axios(urlAPIletra),
        axios(urlAPIartista),
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfoArtista(informacion.data.artists[0]);
    }
    busquedaAPI();

  }, [busqueda, infoartista])

  return (
    <Fragment>
      <Formulario
        actualizarBusqueda={actualizarBusqueda}
      />
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <Artista 
              infoartista={infoartista}
            />
          </div>
          <div className="col-12 col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
