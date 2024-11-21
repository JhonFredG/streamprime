"use client";

import { useLovedFilms } from "@/hooks/use-loved-films";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import { BlockMovies } from "@/components/Shared/BlockMovies";

import { ListMoviesProps } from "./ListMovies.types";

export function ListMovies(props: ListMoviesProps) {
  const { movies } = props;
  const { lovedFilmsByUser } = useLovedFilms();
  const { currentUser } = useCurrentNetflixUser();

  const userNetflix = currentUser?.id;
  const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : [];

  return (
    <div>
      
      <BlockMovies
        title="Continua Viendo"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Películas Favoritas"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="Explora lo Mejor de Hoy"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Novedades y Estrenos"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Accion"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Ciencia Ficcion"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="Comedia"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Infantiles"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Gastronomia"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Drama"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Fantasia"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Musical"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Cine Arte"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Aventura"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="Retro Viajes en el Tiempo"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Animacion"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Anime"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Romance"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Documentales"
        movies={lovedFilms}
        isMyList={true}
      />
      <BlockMovies
        title="Historico"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Deportes"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
        title="Suspenso"
        movies={movies}
        isMyList={false}
      />
      <BlockMovies
      title="Zombis"
      movies={movies}
      isMyList={false}
    />
    <BlockMovies
      title="Terror"
      movies={lovedFilms}
      isMyList={true}
    />
    
    </div>
    
    
  );
}
