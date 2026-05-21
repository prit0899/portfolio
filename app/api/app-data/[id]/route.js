// Server-side route that fetches app data from iTunes Lookup API
// This avoids CORS issues and gives us the real app icon URL, rating, and review count

export const revalidate = 86400; // Cache for 24 hours

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return Response.json({ error: 'Failed to fetch app data' }, { status: 500 });
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return Response.json({ error: 'App not found' }, { status: 404 });
    }

    const app = data.results[0];

    return Response.json({
      id,
      name: app.trackName,
      icon: app.artworkUrl512 || app.artworkUrl100,
      icon100: app.artworkUrl100,
      genre: app.primaryGenreName,
      rating: app.averageUserRating,
      ratingCount: app.userRatingCount,
      description: app.description?.slice(0, 300),
      developer: app.artistName,
      url: app.trackViewUrl,
      version: app.version,
      releaseDate: app.releaseDate,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
