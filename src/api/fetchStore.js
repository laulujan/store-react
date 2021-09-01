import axios from 'axios';

const fetchCollectionsAxios = async () => {
    try {
        const response = await axios.get('/api/store/collections');
        const { data }  = response;
        if (response.status === 200) {
            console.log('data is', data.data)
            return data.data;
        }
        return { hasError: true, message: response.statusText };
    } catch (error) {
        return { hasError: true, message: error.message};
    }
}

export default fetchCollectionsAxios;