
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";
const clientid= "facb1e73d697435cba7fa0dd7b6782f7"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];

export const loginUrl= `${authEndpoint}?client_id=${clientid}$redirect_uri=${redirectUri}$scope=scopes.join("%20")}$response_type=token$show_dialog=true`;