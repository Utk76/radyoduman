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
  image: 'WhatsApp_Image_2025-07-04_at_20.57.24-removebg-preview.png'
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
    title: 'Hangimiz Vefasız',
    artist: 'Mine Koşan',
    rank: 1,
    image: 'https://ideacdn.net/shop/bf/47/myassets/products/407/mine-kosan-hangimiz-vefasiz-cd-esas.jpg?revision=1697143329',
    listenUrl: 'https://www.youtube.com/watch?v=lJhMx2nh6Hs'
  },
  {
    id: '2',
    title: 'Hatasız Kul Olmaz',
    artist: 'Orhan Gencebay',
    rank: 2,
    image: 'https://upload.wikimedia.org/wikipedia/tr/4/4e/Orhan_Gencebay_-_Hatas%C4%B1z_Kul_Olmaz.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=P9mLUhDnCk4'
  },
  {
    id: '3',
    title: 'Huzurum Kalmadı',
    artist: 'Ferdi Tayfur',
    rank: 3,
    image: 'https://upload.wikimedia.org/wikipedia/tr/2/28/Ferdi_Tayfur_Huzurum_Kalmad%C4%B1_Alb%C3%BCm_Kapak_Foto%C4%9Fraf%C4%B1.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=D2xXMSwBZh4'
  },
  {
    id: '4',
    title: 'Ben de Özledim',
    artist: 'Ferdi Tayfur',
    rank: 4,
    image: 'https://i.ytimg.com/vi/liSwz73JbmE/maxresdefault.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=zo7OjqY5EiM'
  },
  {
    id: '5',
    title: 'Ahdım Olsun',
    artist: 'Ebru Gündeş',
    rank: 5,
    image: 'https://static.nadirkitap.com/fotograf/1484124/28/Efemera_2022090314481314841242.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=HaIPLFG0wqU'
  },
  {
    id: '6',
    title: 'İstanbul Sokakları',
    artist: 'Müslüm Gürses',
    rank: 6,
    image: 'https://i.discogs.com/WDTzot2QxYH3LE_lTs9D7JhvN3q1bCaUzUa6P1imBEc/rs:fit/g:sm/q:90/h:600/w:547/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjEw/MDc1LTE1Mzg1NDk2/MDMtMzg4NS5qcGVn.jpeg',
    listenUrl: 'https://www.youtube.com/watch?v=abRQY8oEDmc'
  },
  {
    id: '7',
    title: 'Seni Sana Bırakmam',
    artist: 'İbrahim Tatlıses',
    rank: 7,
    image: 'https://i1.sndcdn.com/artworks-000025573523-rv6lwe-t500x500.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=LlFLkozSPls'
  },
  {
    id: '8',
    title: 'Emi',
    artist: 'Yıldız Tilbe',
    rank: 8,
    image: 'https://images.genius.com/ca30f83efa0c174c077969bc916d7bda.630x630x1.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=Csd3CDeusyk'
  },
  {
    id: '9',
    title: 'Bir Gülü Sevdim',
    artist: 'Zerrin Özer',
    rank: 9,
    image: 'https://i.ytimg.com/vi/zruF_SwY2q8/maxresdefault.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=QgLkBc5rwGg'
  },
  {
    id: '10',
    title: 'Son Mektup',
    artist: 'Zerrin Özer',
    rank: 10,
    image: 'https://i.ytimg.com/vi/xCYgBtjcu80/sddefault.jpg',
    listenUrl: 'https://www.youtube.com/watch?v=58XlY_1YPbw'
  }
];