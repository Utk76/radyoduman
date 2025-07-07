import { Program, Podcast, NewsItem, TopTrack } from '../types';

export const programs: Program[] = [
  {
  id: '1',
  title: 'Kum Saati',
  description: 'Arabesk şarkıların adresi.',
  host: 'Meryem Özbay',
  time: '20:00 - 22:00',
  day: 'Çarşamba, Perşembe',
  image: 'meryemozbay.jpg',
  isLive: true
},
{
  id: '2',
  title: 'Fatih Yayında',
  description: 'Özgün Müzikler.',
  host: 'Fatih Turul',
  time: '20:00 - 22:00',
  day: 'Pazartesi,Salı,Cuma',
  image: 'fatih.jpg'
},
{
  id: '3',
  title: 'Cihan ile Türkülere Yolculuk',
  description: 'Türkü ve Şiir Gecesi.',
  host: 'Cihan Güman',
  time: '22:00 - 24:00',
  day: 'Pazartesi',
  image: 'cihan.jpg'
},
{
  id: '4',
  title: 'Oto Yayın',
  description: 'Otomatik Yayın.',
  host: '',
  time: '00:00 - 09:00',
  day: 'Hergün',
  image: 'Radyoduman_Logo.png'
}

];

export const podcasts: Podcast[] = [
  {
    id: '1',
    title: 'Müzik Tarihi',
    description: 'Müziğin tarihçesi ve evrimi üzerine derinlemesine sohbet.',
    duration: '45:30',
    publishDate: '2024-01-15',
    image: 'https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: '#'
  },
  {
    id: '2',
    title: 'Sanatçı Röportajları',
    description: 'Ünlü sanatçılarla özel röportajlar ve hikayeler.',
    duration: '32:15',
    publishDate: '2024-01-10',
    image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: '#'
  },
  {
    id: '3',
    title: 'Yerel Sanatçılar',
    description: 'Yerel sanatçıları tanıtıyor, eserlerini dinliyoruz.',
    duration: '28:45',
    publishDate: '2024-01-05',
    image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: '#'
  }
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Yeni Stüdyo Açılışı',
    excerpt: 'RadyoDuman yeni stüdyosunu açtı. Modern teknoloji ile daha kaliteli yayın.',
    content: 'RadyoDuman ailesi olarak, dinleyicilerimize daha kaliteli hizmet verebilmek adına yeni stüdyomuzu açtık...',
    publishDate: '2025-06-01',
    image: 'açılıs.jpg',
    author: 'Haber Masası'
  },
  {
    id: '2',
    title: 'Yeni Sponsorluk Duyurusu',
    excerpt: 'Luxe Mobilya Sponsorluğu ile.',
    content: 'Meryem Özbay ile Kum Saati Programı, Luxe Mobilya sponsorluğunda yayın hayatına devam ediyor...',
    publishDate: '2024-01-18',
    image: 'luxemobilya.png',
    author: 'Program Koordinatörü'
  },
  {
    id: '3',
    title: 'Radyomuzun Yeni Sponsoru',
    excerpt: 'Dealmosaic Cosmetics.',
    content: 'Radyomuza Hayırlı Olsun, Dealmosaic Cosmetics ile yeni bir yolculuğa başlıyoruz...',
    publishDate: '2024-01-15',
    image: 'dealcosmetics.png',
    author: 'Araştırma Departmanı'
  }
];


export const topTracks: TopTrack[] = [
  {
    id: '1',
    title: 'Huzurum Kalmadı',
    artist: 'Ferdi Tayfur',
    rank: 1,
    image: 'https://i.ytimg.com/vi/D2xXMSwBZh4/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'Elimde Fotoğrafın',
    artist: 'Bergen',
    rank: 2,
    image: 'https://cdn-images.dzcdn.net/images/cover/6292dfb5ad1d3e6b49565cd4decf82ff/1900x1900-000000-80-0-0.jpg',
  },
  {
    id: '3',
    title: 'Kalleş',
    artist: 'Semicenk',
    rank: 3,
    image: 'https://i.ytimg.com/vi/2mdIKjNO34Y/maxresdefault.jpg',
  },
  {
    id: '4',
    title: 'De Get Yalan Dünya',
    artist: 'Derya Bedavacı',
    rank: 4,
    image: 'https://i.ytimg.com/vi/pRIzDxCCeiE/maxresdefault.jpg',
  },
  {
    id: '5',
    title: 'Seni Yazdım',
    artist: 'Müslüm Gürses',
    rank: 5,
    image: 'https://i.ytimg.com/vi/wtOHNhG0EZc/maxresdefault.jpg',
  },
  {
    id: '6',
    title: 'Affet',
    artist: 'Ebru Yaşar & Burak Bulut',
    rank: 6,
    image: 'https://i.ytimg.com/vi/SSXX0ZcZR-c/maxresdefault.jpg',
  },
  {
    id: '7',
    title: 'Duygularım',
    artist: 'Ebru Gündeş',
    rank: 7,
    image: 'https://i.ytimg.com/vi/rcPeONrg_e4/maxresdefault.jpg',
  },
  {
    id: '8',
    title: 'Kaybettim',
    artist: 'Cansever',
    rank: 8,
    image: 'https://cdn-images.dzcdn.net/images/cover/d6ceec851231af306b63fd6fcde1972f/0x1900-000000-80-0-0.jpg',
  },
  {
    id: '9',
    title: 'Nerden Bileceksin',
    artist: 'Orhan Gencebay',
    rank: 9,
    image: 'https://i.ytimg.com/vi/4eB-yXAeFn8/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGF4gZShWMA8=&rs=AOn4CLDnXT9atOVYtJe1nrcC9k5C7pGBeg',
  },
  {
    id: '10',
    title: 'Ey Aşkk',
    artist: 'Sezen Aksu',
    rank: 10,
    image: 'https://i.ytimg.com/vi/rYJjgfCfBOU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAeL4VnZNn3r6iLpb3lnEpYwR6-bw',
  },
];