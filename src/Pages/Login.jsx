import React, { useContext, useState } from 'react'
import spotify from '../assets/icons/spotifyIcon.png'
import google from '../assets/icons/googleLogo.webp'
import facebook from '../assets/icons/facebookIcon.png'
import apple from '../assets/icons/AppleIcon.png'
import ToogleButton from '../Components/ToogleButton'
import { Link, redirect } from 'react-router-dom'
import axios from 'axios'
import { SpotifyContext } from '../spotifyContext'
import SpotifyWebApi from 'spotify-web-api-node'

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   withCredentials: true
// })



const styles = {
  other_logins: "border border-[#666666] rounded-full py-2 mt-2 text-center w-2/4 flex cursor-pointer",
  line: "line border-b-[0.5px] w-2/3 mx-auto  border-b-[#666666]",
  input: "border border-[#666666] bg-transparent px-4 py-3 rounded-sm my-2 outline-none"
}

const Login = () => {

  const { spotifyApi} = useContext(SpotifyContext);
  const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-read-email',
    'user-read-private'
  ]
  const handleLogin = async () => {

    Response.redirect(spotifyApi.createAuthorizeURL(scopes))

    await fetch

  }


  return (
    <div className='bg-gradient-to-b from-[#2a2a2a] to-[#000000]'>
      <p onClick={handleLogin}>Login with Spootify</p>
    </div>
  )
}

export default Login