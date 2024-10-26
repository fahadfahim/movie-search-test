// app/movie/[id]/page.tsx

import MovieDetails from "@/components/movieDetails/MovieDetails";
import Recommendations from "@/components/recommendations/Recommendations";
import { fetchMovieCredits, fetchMovieDetails, fetchMovieRecommendations } from "@/utils/tmdbApi";

// Define types for movie, credits, and recommendations
interface Movie {
    id: number;
    title: string;
    overview: string;
}

interface CastMember {
    id: number;
    name: string;
    character: string;
}

interface Credits {
    cast: CastMember[];
}

interface Recommendation {
    id: number;
    title: string;
}

interface Recommendations {
    results: Recommendation[];
}

interface MovieDetailProps {
    params: { id: string };
}

// Fetch data directly in the component with async function
const MovieDetail = async ({ params }: MovieDetailProps) => {
    const { id } = await params;  // Await `params` here

    try {
        const [movieRes, creditsRes, recommendationsRes] = await Promise.all([
            fetchMovieDetails(id),
            fetchMovieCredits(id),
            fetchMovieRecommendations(id),
        ]);

        const movie = movieRes.data;
        const credits = creditsRes.data;
        const recommendations = recommendationsRes.data;


        return (
            <div>
                <MovieDetails movie={movie} cast={credits} />
                <Recommendations recommendations={recommendations} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return <div>Error loading movie data.</div>;
    }
};

export default MovieDetail;
