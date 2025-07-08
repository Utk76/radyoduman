export async function fetchYoutubeTrendingMusic(apiKey: string) {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=TR&videoCategoryId=10&maxResults=10&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!data.items) return [];
  return data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    artist: item.snippet.channelTitle,
    image: item.snippet.thumbnails?.high?.url || '',
    listenUrl: `https://www.youtube.com/watch?v=${item.id}`,
  }));
} 