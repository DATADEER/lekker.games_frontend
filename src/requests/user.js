import axios from "axios";


export const fetchSteamIDByUsername = (username) => {
    return axios.get(`/api/steam/profile/custom/${username}`);
};

export const fetchSteamUserProfile = (steamID) => {
    return axios.get(`/api/steam/profile/${steamID}`);
};

export const saveUserProfile = (steamUser) => {
    return axios({
        url:`/api/user/profile/${steamUser.profile.id}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            profile: steamUser.profile,
        }
    });
};

export const fetchOwnedGames = (steamID) => {
    return axios.get(`/api/steam/profile/${steamID}/games`)
};

export const saveUserGames = (steamID, userGamesList) => {
    return axios({
        url:`/api/user/profile/${steamID}/games`,
        method: "POST",
        data: userGamesList,
        headers: {
            'Content-Type': 'application/json',
        },
    })
};
