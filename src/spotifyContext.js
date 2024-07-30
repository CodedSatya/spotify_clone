import { createContext, useState, useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-node";

const SpotifyContext = createContext();

const SpotifyProvider = ({children}) => {
  const [accessToken, setAccesstoken] = useState('');
  const [spotifyApi, setSpotifyApi] = useState(null);

  useEffect(()=> {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI
    })

    const getAccessToken = async () => {
      const token = await spotifyApi.getAccessToken();
      setAccesstoken(token.body.access_token);
      setSpotifyApi(spotifyApi)
    };

    getAccessToken();
  }, [])

  return(
    <SpotifyContext.Provider value={{accessToken, spotifyApi}}>
      {children}
    </SpotifyContext.Provider>
  )

}

export { SpotifyProvider, SpotifyContext };