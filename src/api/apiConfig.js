const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b0fc944ef916a2dde231555292bb34b9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;