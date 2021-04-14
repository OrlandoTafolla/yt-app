import axios from 'axios'

const KEY = 'AIzaSyBJHrg95PAwzQXY-OYn-4kKz9It0piSFs0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
    }
})