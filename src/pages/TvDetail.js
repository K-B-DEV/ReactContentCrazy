import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { loadMovieDetails } from "../actions/movieDetailsActions";
import { loadTvDetails } from "../actions/tvDetailsActions";
import { useHistory } from "react-router-dom";
//images
// import ActionAdventure from "../images/action.png";
// import Animation from "../images/animation.png";
// import Comedy from "../images/comedy.png";
// import Crime from "../images/crime.png";
// import Documentary from "../images/documentary.png";
// import Drama from "../images/drama.png";
// import Family from "../images/family.png";
// import Kids from "../images/kids.png";
// import Mystery from "../images/mystery.png";
// import News from "../images/news.png";
// import Reality from "../images/reality.png";
// import SciFiFantasy from "../images/scifi.png";
// import Soap from "../images/soap.png";
// import Talk from "../images/talk.png";
// import WarPolitics from "../images/warpolitics.png";
// import Western from "../images/western.png";
//mat-ui
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//ToolTip

// import FullStar from "../images/fullstar.png";
// import HalfStar from "../images/halfstar.png";
import {
  Star,
  StarHalf,
  StarBorder,
  MovieFilter,
  Theaters,
} from "@material-ui/icons";
//animation
import { fadeIn } from "../animations";

const TvDetail = () => {
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
  const history = useHistory();
  const exitDetailHandler2 = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      history.push("/");
      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 700);
    }
  };
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTvDetails(pathId));
  }, [dispatch]);

  const getStars = () => {
    const stars = [];
    const roundedRating = Math.floor(tv_details.vote_average * 2) / 2;
    for (let i = 1; i <= 10; i++) {
      if (roundedRating - i > 1) {
        //full star
        stars.push(
          // <img
          //   alt="fullstar"
          //   key={i}
          //   src={FullStar}
          //   title={tv_details.vote_average}
          // ></img>
          <Star key={i} />
        );
      } else {
        if (roundedRating - i < 1 && roundedRating - i > 0) {
          //half star
          stars.push(
            // <img
            //   alt="halfstar"
            //   key={i}
            //   src={HalfStar}
            //   title={tv_details.vote_average}
            // ></img>
            <StarHalf key={i} />
          );
        } else {
          stars.push(<StarBorder key={i} />);
        }
      }
    }
    return stars;
  };
  //Get the requested datap
  const { tv_details } = useSelector((state) => state.tvDetails);
  const genres = tv_details.genres;
  const imgPath = `https://image.tmdb.org/t/p/w1280/${tv_details.backdrop_path}`;
  // console.log("Detail: " + pathId);
  // console.log(tv_details.overview);
  return (
    <>
      <StyledBackgroundContainerShadow
        className="shadow"
        onClick={exitDetailHandler2}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledDetailView>
          <StyledTvTitle>
            <h2>{tv_details.name}</h2>
          </StyledTvTitle>
          <StyledInline>
            <StyledTvRating>
              <div title={tv_details.vote_average}>{getStars()}</div>
            </StyledTvRating>
            <StyledSeasonsEpisodes>
              <div title="Seasons">
                <MovieFilter />
              </div>
              <StyledSeasons>{tv_details.number_of_seasons}</StyledSeasons>
              <div title="Episodes">
                <Theaters />
              </div>

              <StyledSeasons>{tv_details.number_of_episodes}</StyledSeasons>
            </StyledSeasonsEpisodes>
          </StyledInline>
          <a
            href={tv_details.homepage}
            title="Click to visit this shows homepage!"
            target="_blank"
          >
            <StyledImage src={imgPath} alt={tv_details.name} />
          </a>
          {/* <StyledDescriptionTitle>
            <h2>Overview:</h2>
          </StyledDescriptionTitle> */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h2>Overview</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {tv_details.overview !== "" ? tv_details.overview : "N/A"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <StyledDescription>{tv_details.overview}</StyledDescription> */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <h2>Genres</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Typography> */}
              <StyledGenres>
                {genres
                  ? genres.map((genre) => {
                      return (
                        <Button
                          variant="contained"
                          color="primary"
                          key={genre.name + "key"}
                        >
                          {genre.name}
                        </Button>
                      );
                    })
                  : ""}
              </StyledGenres>
              {/* </Typography> */}
            </AccordionDetails>
          </Accordion>
        </StyledDetailView>
      </StyledBackgroundContainerShadow>
    </>
  );
};
const StyledAccordion = styled(motion.Accordion)`
  background-color: #0d0d0d;
`;
const StyledBackgroundContainerShadow = styled(motion.div)`
  background-color: rgba(158, 158, 158, 0.3);
  position: absolute;
  z-index: 21;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: auto;
`;
const StyledDetailView = styled(motion.div)`
  background-color: #0d0d0d;
  color: white;
  text-shadow: 1px 1px black;
  position: absolute;
  z-index: 22;
  width: 70vw;
  min-height: 100vh;
  left: 15%;
  right: 15%;
  top: 0;
  /* display: grid;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr;
  grid-template-columns: 1fr 1fr; */
`;
const StyledTvTitle = styled(motion.div)`
  /* grid-column: 1/3;
  grid-row: 1/2;
  align-self: center;
  justify-self: center; */
  padding: 1rem;
  text-justify: center;
  text-align: center;
`;
const StyledInline = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;
const StyledTvRating = styled(motion.div)`
  /* grid-column: 1/2;
  grid-row: 2/3;
  align-self: center;
  justify-self: center; */
  /* padding: 1rem;
  text-justify: center;
  text-align: center; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding: 1rem;
  img {
    width: 40px;
  }
`;
const StyledSeasons = styled(motion.div)`
  padding-top: 1%;
  text-align: center;
  /* text-align: center; */
  /* text-justify: center; */
`;
const StyledSeasonsEpisodes = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* justify-content: space-space-around; */
  /* align-content: center; */
  padding: 1rem;

  img {
    width: 40px;
  }
`;

const StyledImage = styled(motion.img)`
  /* grid-column: 1/3;
  grid-row: 3/4;
  align-self: center;
  justify-self: center;
  width: 100%; */
  padding: 1rem;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;
const StyledDescriptionTitle = styled(motion.div)`
  padding: 1rem;
  text-align: start;
`;
const StyledDescription = styled(motion.div)`
  /* grid-column: 1/3;
  grid-row: 4/5;
  align-self: center;
  justify-self: center; */
  padding: 1rem;
`;
const StyledGenresTitle = styled(motion.div)`
  padding: 1rem;
  text-align: start;
`;
const StyledGenres = styled(motion.div)`
  /* grid-column: 1/3;
  grid-row: 5/6;
  align-self: center;
  justify-self: center; */
  width: 100%;
  /* padding: 0rem 1rem 1rem 1rem; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  img {
    width: 10vw;
    cursor: pointer;
  }
`;
export default TvDetail;
