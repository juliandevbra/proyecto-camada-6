import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url, id) => {

    const [data, setData] = useState()

    useEffect(() => {
        axios(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [url])

  return { data }
}

export default useFetch




