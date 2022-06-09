import React, { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import { loadTv } from "../actions/tvActions";
//Components
import MovieCard from "../components/movieCard";
import Nav from "../components/Nav.js";
import MovieDetail from "./MovieDetail";
import TvDetail from "./TvDetail";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaSlideshare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const moviesToShow = 5;
  const { isMovies } = useSelector((state) => state.toggle);
  //Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const pathName = location.pathname.split("")[1];

  // useEffect(() => {
  //   setTimeout(function () {
  //     document.body.style.overflowY = "hidden";
  //   }, 900);
  // }, [pathId !== undefined]);
  //Fetch Movies
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  //Get the requested datap
  const {
    popular_movies,
    top_rated_movies,
    upcoming_movies,
    now_playing_movies,
  } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(loadTv());
  }, [dispatch]);
  const { popular_tv, top_rated_tv, latest_tv, airing_today_tv } = useSelector(
    (state) => state.tvs
  );
  //Slides
  const lengthOfPopular = popular_movies.length;
  const [currentPop, setCurrentPop] = useState(0);
  const prevSlide = () => {
    if (currentPop + moviesToShow >= lengthOfPopular - 1) {
      setCurrentPop(0);
    } else {
      setCurrentPop(currentPop === lengthOfPopular - 1 ? 0 : currentPop + 1);
    }
  };
  const nextSlide = () => {
    if (currentPop === 0) {
      setCurrentPop(lengthOfPopular - moviesToShow - 1);
    } else {
      setCurrentPop(currentPop === 0 ? lengthOfPopular - 1 : currentPop - 1);
    }
  };

  const lengthOfTop = top_rated_movies.length;
  const [currentTop, setCurrentTop] = useState(0);
  const prevSlideTop = () => {
    if (currentTop + moviesToShow >= lengthOfTop - 1) {
      setCurrentTop(0);
    } else {
      setCurrentTop(currentTop === lengthOfTop - 1 ? 0 : currentTop + 1);
    }
  };
  const nextSlideTop = () => {
    if (currentTop === 0) {
      setCurrentTop(lengthOfTop - moviesToShow - 1);
    } else {
      setCurrentTop(currentTop === 0 ? lengthOfTop - 1 : currentTop - 1);
    }
  };

  const lengthOfUpcoming = upcoming_movies.length;
  const [currentUp, setCurrentUp] = useState(0);
  const prevSlideUp = () => {
    if (currentUp + moviesToShow >= lengthOfUpcoming - 1) {
      setCurrentUp(0);
    } else {
      setCurrentUp(currentUp === lengthOfUpcoming - 1 ? 0 : currentUp + 1);
    }
  };
  const nextSlideUp = () => {
    if (currentUp === 0) {
      setCurrentUp(lengthOfUpcoming - moviesToShow - 1);
    } else {
      setCurrentUp(currentUp === 0 ? lengthOfUpcoming - 1 : currentUp - 1);
    }
  };

  const lengthOfNow = now_playing_movies.length;
  const [currentNow, setCurrentNow] = useState(0);
  const prevSlideNow = () => {
    if (currentNow + moviesToShow >= lengthOfNow - 1) {
      setCurrentNow(0);
    } else {
      setCurrentNow(currentNow === lengthOfNow - 1 ? 0 : currentNow + 1);
    }
  };
  const nextSlideNow = () => {
    if (currentNow === 0) {
      setCurrentNow(lengthOfNow - moviesToShow - 1);
    } else {
      setCurrentNow(currentNow === 0 ? lengthOfNow - 1 : currentNow - 1);
    }
  };

  // End Of slides
  return (
    <>
      <Nav key={"navKey"} />
      <StyledMovieCategories key={"movieCat"}>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathName === "m" && <MovieDetail key={"movDetail"} />}
          </AnimatePresence>
          <AnimatePresence>
            {pathName === "t" && <TvDetail key={"tvDetail"} />}
          </AnimatePresence>
          <div className="popular-title" key={"pTitle"}>
            <h2 key={"ph2Title"}>Popular</h2>
          </div>
          <StyledPopularMovies key={"popMovie"}>
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={nextSlide}
              key={"pmlArr"}
            />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={prevSlide}
              key={"pmrArr"}
            />
            {isMovies
              ? popular_movies.length
                ? popular_movies.map((movie, index) => {
                    console.log(typeof movie.id);
                    if (
                      index >= currentPop &&
                      index <= currentPop + moviesToShow
                    ) {
                      return (
                        <Link
                          to={`/moviedetails/${movie.id}`}
                          key={movie.id.toString() + "link"}
                        >
                          <MovieCard
                            title={movie.title}
                            posterPath={movie.poster_path}
                            key={movie.id.toString() + "movie"}
                          />
                        </Link>
                      );
                    }
                  })
                : ""
              : popular_tv.length
              ? popular_tv.map((movie, index) => {
                  if (
                    index >= currentPop &&
                    index <= currentPop + moviesToShow
                  ) {
                    return (
                      <Link
                        to={`/tvdetails/${movie.id}`}
                        key={movie.id.toString() + "tvlink"}
                      >
                        <MovieCard
                          title={movie.name}
                          posterPath={movie.poster_path}
                          key={movie.id.toString() + "tv"}
                        />
                      </Link>
                    );
                  }
                })
              : ""}
          </StyledPopularMovies>
          <div className="popular-title">
            <h2>Top Rated</h2>
          </div>
          <StyledTopRatedMovies key={"toprMovies"}>
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={nextSlideTop}
            />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={prevSlideTop}
            />
            {isMovies
              ? top_rated_movies.length
                ? top_rated_movies.map((movie, index) => {
                    if (
                      index >= currentTop &&
                      index <= currentTop + moviesToShow
                    ) {
                      return (
                        <Link
                          to={`/moviedetails/${movie.id}`}
                          key={movie.id.toString() + "link"}
                        >
                          <MovieCard
                            title={movie.title}
                            posterPath={movie.poster_path}
                            key={movie.id.toString() + "movie"}
                          />
                        </Link>
                      );
                    }
                  })
                : ""
              : top_rated_tv.length
              ? top_rated_tv.map((movie, index) => {
                  if (
                    index >= currentTop &&
                    index <= currentTop + moviesToShow
                  ) {
                    return (
                      <Link
                        to={`/tvdetails/${movie.id}`}
                        key={movie.id.toString() + "tvlink"}
                      >
                        <MovieCard
                          title={movie.name}
                          posterPath={movie.poster_path}
                          key={movie.id.toString() + "tv"}
                        />
                      </Link>
                    );
                  }
                })
              : ""}
          </StyledTopRatedMovies>
          <div className="popular-title">
            {isMovies ? <h2>Upcoming</h2> : <h2>Airing Today</h2>}
          </div>
          <StyledUpcomingMovies key={"upcMovies"}>
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={nextSlideUp}
            />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={prevSlideUp}
            />
            {isMovies
              ? upcoming_movies.length
                ? upcoming_movies.map((movie, index) => {
                    if (
                      index >= currentUp &&
                      index <= currentUp + moviesToShow
                    ) {
                      return (
                        <Link
                          to={`/moviedetails/${movie.id}`}
                          key={movie.id.toString() + "link"}
                        >
                          <MovieCard
                            title={movie.title}
                            posterPath={movie.poster_path}
                            key={movie.id.toString() + "movie"}
                          />
                        </Link>
                      );
                    }
                  })
                : ""
              : airing_today_tv.length
              ? airing_today_tv.map((movie, index) => {
                  if (index >= currentUp && index <= currentUp + moviesToShow) {
                    return (
                      <Link
                        to={`/tvdetails/${movie.id}`}
                        key={movie.id.toString() + "tvlink"}
                      >
                        <MovieCard
                          title={movie.name}
                          posterPath={movie.poster_path}
                          key={movie.id.toString() + "tv"}
                        />
                      </Link>
                    );
                  }
                })
              : ""}
          </StyledUpcomingMovies>
          {isMovies ? (
            <div className="popular-title" key={"poplrTitle"}>
              <h2 key={"poplrh2title"}>Now Playing</h2>
            </div>
          ) : (
            ""
          )}

          <StyledNowPlayingMovies key={"nowpMovies"}>
            {isMovies
              ? now_playing_movies.length
                ? now_playing_movies.map((movie, index) => {
                    if (
                      index >= currentNow &&
                      index <= currentNow + moviesToShow
                    ) {
                      return (
                        <div key={movie.id + "container"}>
                          <FaArrowAltCircleLeft
                            className="left-arrow"
                            onClick={nextSlideNow}
                            key={movie.id.toString() + "al"}
                          />
                          <FaArrowAltCircleRight
                            className="right-arrow"
                            onClick={prevSlideNow}
                            key={movie.id.toString() + "ar"}
                          />
                          <Link
                            to={`/moviedetails/${movie.id}`}
                            key={movie.id.toString() + "link"}
                          >
                            <MovieCard
                              title={movie.title}
                              posterPath={movie.poster_path}
                              key={movie.id.toString() + "movie"}
                            />
                          </Link>
                        </div>
                      );
                    }
                  })
                : ""
              : ""}
          </StyledNowPlayingMovies>
        </AnimateSharedLayout>
      </StyledMovieCategories>
    </>
  );
};

const StyledMovieCategories = styled(motion.div)`
  margin-left: 1rem;
  top: 10vh;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.1fr 1fr 0.1fr 1fr 0.1fr 1fr;
`;
const StyledPopularMovies = styled(motion.div)`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
`;
const StyledTopRatedMovies = styled(motion.div)`
  grid-row: 4/5;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
`;
const StyledUpcomingMovies = styled(motion.div)`
  grid-row: 6/7;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
`;
const StyledNowPlayingMovies = styled(motion.div)`
  grid-row: 8/9;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
`;

export default Home;
