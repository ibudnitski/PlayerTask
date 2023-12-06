
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



function renderPlaylist(playListForRendering){
    /* Creating Heading, main image, and information about playlist (track count and tracks duration)*/
const playListTitle = document.createElement('h1');
playListTitle.append(playList.title);
document.body.append(playListTitle);


const playListImage = document.createElement('img');
playListImage.src = playList.coverImg;
document.body.append(playListImage);


const trackCount = document.createElement('span');
trackCount.setAttribute("id", "span1");
trackCount.append("Track count: " + playList.info.totalTrackCount);
document.body.append(trackCount);


const playListDuration = document.createElement('span');
playListDuration.setAttribute("id", "span2");
playListDuration.append("Track duration: " + Math.floor(playList.info.totalTracksDurationInSeconds / 60) + " m " + playList.info.totalTracksDurationInSeconds % 60 + " s");
document.body.append(playListDuration);


/* Adding music */

// creating img elements
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

// adding images
img1.src = playList.tracks[0].artistImage;
img2.src = playList.tracks[1].artistImage;
img3.src = playList.tracks[2].artistImage;

// crating audio elements
const audio1 = document.createElement('audio');
const audio2 = document.createElement('audio');
const audio3 = document.createElement('audio');

//adding src + controls
audio1.src = playList.tracks[0].fileUrl;
audio1.controls = 'controls';
audio2.src = playList.tracks[1].fileUrl;
audio2.controls = 'controls';
audio3.src = playList.tracks[2].fileUrl;
audio3.controls = 'controls';

// creating UL
const mainLi = document.createElement('ul');

// creating element for UL
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

// Adding information to LI image + artist name + title + audio
listItem1.append(img1, playList.tracks[0].artistName + " - " + playList.tracks[0].title, audio1);
listItem2.append(img2, playList.tracks[1].artistName + " - " + playList.tracks[1].title, audio2);
listItem3.append(img3, playList.tracks[2].artistName + " - " + playList.tracks[2].title, audio3);

// adding Li to UL
mainLi.append(listItem1);
mainLi.append(listItem2);
mainLi.append(listItem3);

//adding UL to body
document.body.append(mainLi);

}

renderPlaylist(playList);







