
let playList = {
    title: 'Metal Hits',
    coverImg: './assets/playlistimage.jpg',
    info: {
        totalTrackCount: 3,
        totalTracksDurationInSeconds: 926,
    },
    tracks: [
        {
            artistName: 'Powerwolf',
            title: 'We drink your blood',
            fileUrl: './assets/Powerwolf - We Drink Your Blood.mp3',
            isHot: true,
            artistImage: "./assets/img1.svg",
        },
        {
            artistName: 'Sabaton',
            title: 'Panzerkampf',
            fileUrl: './assets/Sabaton - Panzerkampf.mp3',
            isHot: true,
            artistImage: "./assets/img2.svg",
        },
        {
            artistName: 'Metallica',
            title: 'The unforgiven',
            fileUrl: './assets/Metallica - The Unforgiven.mp3',
            isHot: true,
            artistImage: "./assets/img3.svg",
        }
    ]
}

renderPlaylist(playList);










