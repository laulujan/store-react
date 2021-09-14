import axios from 'axios';

const fetchCollectionsAxios = async () => {
    try {
        const response = await axios.get('/api/store/collections');
        const { data }  = response;
        if (response.status === 200) {
            return data.data;
        }
        return { hasError: true, message: response.statusText };
    } catch (error: any) {
        return { hasError: true, message: error.message};
    }
}

export default fetchCollectionsAxios;