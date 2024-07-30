import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/Models.js';
import { spotifyApi } from '../app.js';



export const loginController = (req, res) => {

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

  res.redirect(spotifyApi.createAuthorizeURL(scopes))
  // console.log(spotifyApi.createAuthorizeURL(scopes));
}

export const callback = (req, res) => {
  const {error, code, state} = req.query
  // res.redirect("/")
  // const tempCode = 'AQBx43pYBcFGyMltLsfWjtG3A_rHMhpkUM-kBy3Di5GK-vwp22qW9CbG35t4-YUw8jFBRruFxHAG_zK8GvfJZTZ5BGjwqqWKv5k8MrJxBuJAaZEZ14F0Vfu07CR3gSvXhdOTtyj4PK-M_UU6EahMfKEPNVnLkfUYeft1UdyZzEo3RHj4DY2P7qPFQucGFxTSUcYe1NvzkNTQzCmFBUnuBUPv_AyGRZ8Hpwk2Jok3nmBhlOrXZUWcb9zK-zAbtDautMQCxjRVNvO-P8mMzBn1Tz43uCJxchgbYCYJirXKbBreIq5py8xupPEARNVvcvnLN51tpV8vt1moEN6_BSCCXZIT7cwbSfaDkb_BUo227vQH21n2FPVrb9GVmqNzqswOPftSZ8jKW_jM59vIyEaIpSFnYQdsUqtgD9kM5tn-uyyZl1pQtJD7gKBnd6nRHoKlXHZVjljJ2SyxD_0JsOJ51FR4xBX4amI'

  if (error) {
    console.error("Error : ", error)
    res.send({"Error" : error})
    return
  }

  spotifyApi.authorizationCodeGrant(code).then(data=>{
    console.log(data.body['access_token']);
    const accessToken = data.body.access_token
    const refreshToken = data.body.refresh_token
    const expiresIn = data.body.expires_in
    const tokenType = data.body.token_type

    spotifyApi.setAccessToken(accessToken)
    spotifyApi.setRefreshToken(refreshToken)
    // res.send("Success")
    // res.redirect('/')
    res.send({
      message: "Success",
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresIn: expiresIn,
      tokenType: tokenType
    })
  })
}

export const registerController = (req, res) => {
  
}



export const logoutController = (req, res) => {

}