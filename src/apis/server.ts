import axios from "axios";

axios.defaults.baseURL = 'https://sample-api.staging.nomadic.fm/api'

export const allPrograms = async () => {
    return axios({url: '/programs'})
}

export const getProgramById = async (id: string) => {
    return axios({url: `/programs/${id}`})
}

export const updateProgramStatus = async (id: string, bool: boolean) => {
    return axios({
        url: `/programs/${id}`,
        method: 'PATCH',
        data: {enrolled: bool}
    })
}

export const getProgramTeamDetails = async (id: string) => {
    return axios({url: `/programs/${id}/team`})
}
