import axios from 'axios'

const BASS_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
  key: 'AIzaSyCWHXm1qzdoRSjX00nirgo0oUPsyeBL5Kk',

  cx: '3577b9ef57b0f4b82'
}

export const FetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASS_URL, {
    params: { ...params, ...payload },
  })

  return data
}




