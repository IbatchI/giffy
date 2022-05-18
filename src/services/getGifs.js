const apiKey = 'iG77NYl4vZ8klotKH6WMPU7c0Ui7iK4t'

export default function getGifs({ keyword = 'cats' } = {}) {
   
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`
    
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
        const data = response.data
            const gifs = data.map(image => {
                    const { title, id } = image
                    const { url } = image.images.fixed_height_downsampled
                    return {title, id, url}
                }
            )
        return gifs
    })
}