import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

const CardImage = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 30px;
`;

const CardsDiv = styled.div`
  position: absolute;
`;

function Card() {
  const [lastDirection, setLastDirection] = useState("");
  const [movies, setMovies] = useState("");
  const [moviesList, setmoviesList] = useState([]);
  const [pickMovies, setPickMovies] = useState([]);

  const onSwipe = (direction) => {
    setLastDirection(direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    setMovies(myIdentifier);
  };

  useEffect(() => {
    console.log(movies + " " + lastDirection);
    if (lastDirection === "right") {
      setPickMovies([...pickMovies, movies]);
    }
  }, [movies, lastDirection, pickMovies]);

  useEffect(() => {
    console.log(pickMovies);
  }, [pickMovies]);

  const Movies = {
    items: [
      {
        id: "tt1160419",
        rank: "1",
        rankUpDown: "+1",
        title: "Dune",
        fullTitle: "Dune (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Denis Villeneuve (dir.), Timothée Chalamet, Rebecca Ferguson",
        imDbRating: "8.3",
        imDbRatingCount: "244266",
      },
      {
        id: "tt1877830",
        rank: "2",
        rankUpDown: "-17",
        title: "The Batman",
        fullTitle: "The Batman (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Matt Reeves (dir.), Zoë Kravitz, Paul Dano",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt10665338",
        rank: "3",
        rankUpDown: "0",
        title: "Halloween Kills",
        fullTitle: "Halloween Kills (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BM2RmMGY2Y2UtNjA1NS00NGE4LThiNzItMmE1NTk5NzI5NmE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Gordon Green (dir.), Jamie Lee Curtis, Judy Greer",
        imDbRating: "5.7",
        imDbRatingCount: "47009",
      },
      {
        id: "tt2382320",
        rank: "4",
        rankUpDown: "-3",
        title: "No Time to Die",
        fullTitle: "No Time to Die (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Cary Joji Fukunaga (dir.), Daniel Craig, Ana de Armas",
        imDbRating: "7.6",
        imDbRatingCount: "138144",
      },
      {
        id: "tt4244994",
        rank: "5",
        rankUpDown: "0",
        title: "The Last Duel",
        fullTitle: "The Last Duel (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Ridley Scott (dir.), Matt Damon, Adam Driver",
        imDbRating: "7.7",
        imDbRatingCount: "17642",
      },
      {
        id: "tt0087182",
        rank: "6",
        rankUpDown: "+24",
        title: "Dune",
        fullTitle: "Dune (1984)",
        year: "1984",
        image:
          "https://imdb-api.com/images/original/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Lynch (dir.), Kyle MacLachlan, Virginia Madsen",
        imDbRating: "6.4",
        imDbRatingCount: "147460",
      },
      {
        id: "tt7097896",
        rank: "7",
        rankUpDown: "-1",
        title: "Venom: Let There Be Carnage",
        fullTitle: "Venom: Let There Be Carnage (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Andy Serkis (dir.), Tom Hardy, Woody Harrelson",
        imDbRating: "6.3",
        imDbRatingCount: "49644",
      },
      {
        id: "tt6264654",
        rank: "8",
        rankUpDown: "0",
        title: "Free Guy",
        fullTitle: "Free Guy (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Shawn Levy (dir.), Ryan Reynolds, Jodie Comer",
        imDbRating: "7.2",
        imDbRatingCount: "179199",
      },
      {
        id: "tt9032400",
        rank: "9",
        rankUpDown: "+3",
        title: "Eternals",
        fullTitle: "Eternals (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Chloé Zhao (dir.), Gemma Chan, Richard Madden",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt10521092",
        rank: "10",
        rankUpDown: "+36",
        title: "The Forgotten Battle",
        fullTitle: "The Forgotten Battle (2020)",
        year: "2020",
        image:
          "https://imdb-api.com/images/original/MV5BM2MzMzRlMTctM2QxMC00NTBiLWIwMTctMzEzODZmOGIxMjdhXkEyXkFqcGdeQXVyMjAyMDMyMzU@._V1_Ratio0.7015_AL_.jpg",
        crew: "Matthijs van Heijningen Jr. (dir.), Gijs Blom, Jamie Flatters",
        imDbRating: "7.1",
        imDbRatingCount: "14042",
      },
      {
        id: "tt11001074",
        rank: "11",
        rankUpDown: "1,988",
        title: "Rust",
        fullTitle: "Rust ( 1,988)",
        year: " 1,988",
        image:
          "https://imdb-api.com/images/original/MV5BZjhiYzIwNTEtYzZjZS00OGFiLWI0YWYtMzc2MjM1ZmE0Mzg3XkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_Ratio1.7761_AL_.jpg",
        crew: "Joel Souza (dir.), Alec Baldwin, Travis Fimmel",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt10763820",
        rank: "12",
        rankUpDown: "+480",
        title: "Night Teeth",
        fullTitle: "Night Teeth (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNDhmODAxYzItYjRjNi00ZmI2LWIwMDktZTYwZWNiYWZhMTUzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Adam Randall (dir.), Jorge Lendeborg Jr., Debby Ryan",
        imDbRating: "5.6",
        imDbRatingCount: "9189",
      },
      {
        id: "tt0077651",
        rank: "13",
        rankUpDown: "0",
        title: "Halloween",
        fullTitle: "Halloween (1978)",
        year: "1978",
        image:
          "https://imdb-api.com/images/original/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "John Carpenter (dir.), Donald Pleasence, Jamie Lee Curtis",
        imDbRating: "7.7",
        imDbRatingCount: "255284",
      },
      {
        id: "tt8847712",
        rank: "14",
        rankUpDown: "+12",
        title: "The French Dispatch",
        fullTitle: "The French Dispatch (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Wes Anderson (dir.), Benicio Del Toro, Adrien Brody",
        imDbRating: "7.5",
        imDbRatingCount: "10577",
      },
      {
        id: "tt10280296",
        rank: "15",
        rankUpDown: "-21",
        title: "Sardar Udham",
        fullTitle: "Sardar Udham (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZGFhNTYwZmMtNzk4Ny00MTExLThjMWUtNjYzMTEwZjEzMWQ3XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_Ratio0.7910_AL_.jpg",
        crew: "Shoojit Sircar (dir.), Vicky Kaushal, Banita Sandhu",
        imDbRating: "9.1",
        imDbRatingCount: "21815",
      },
      {
        id: "tt0439572",
        rank: "16",
        rankUpDown: "+462",
        title: "The Flash",
        fullTitle: "The Flash (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BOWNhMGU5MjEtMGVkYi00M2RiLWE5NjUtY2U5NDAxZTcwNDY0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Andy Muschietti (dir.), Ben Affleck, Michael Keaton",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt3480822",
        rank: "17",
        rankUpDown: "-8",
        title: "Black Widow",
        fullTitle: "Black Widow (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Cate Shortland (dir.), Scarlett Johansson, Florence Pugh",
        imDbRating: "6.8",
        imDbRatingCount: "260498",
      },
      {
        id: "tt1502407",
        rank: "18",
        rankUpDown: "+5",
        title: "Halloween",
        fullTitle: "Halloween (2018)",
        year: "2018",
        image:
          "https://imdb-api.com/images/original/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Gordon Green (dir.), Jamie Lee Curtis, Judy Greer",
        imDbRating: "6.6",
        imDbRatingCount: "137749",
      },
      {
        id: "tt7991608",
        rank: "19",
        rankUpDown: "-1",
        title: "Red Notice",
        fullTitle: "Red Notice (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Rawson Marshall Thurber (dir.), Dwayne Johnson, Ryan Reynolds",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt1464335",
        rank: "20",
        rankUpDown: "+502",
        title: "Uncharted",
        fullTitle: "Uncharted (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BOTZjZWZhMTAtYTAxZS00ZDMwLWE0YzEtMzFkNzdhZjc5OGQ0XkEyXkFqcGdeQXVyNjI5MDc2MjU@._V1_Ratio0.7015_AL_.jpg",
        crew: "Ruben Fleischer (dir.), Tati Gabrielle, Tom Holland",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt9421570",
        rank: "21",
        rankUpDown: "-14",
        title: "The Guilty",
        fullTitle: "The Guilty (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZWI3NmEyYzAtNWY4OC00YWY4LTk2MjgtM2Y1NDdlZWE4ODgzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.6716_AL_.jpg",
        crew: "Antoine Fuqua (dir.), Jake Gyllenhaal, Riley Keough",
        imDbRating: "6.3",
        imDbRatingCount: "77301",
      },
      {
        id: "tt7144666",
        rank: "22",
        rankUpDown: "-7",
        title: "The Black Phone",
        fullTitle: "The Black Phone (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMGYyYTlkZDQtMGI5MC00ZGViLTk2MzYtZWVmYzZiM2Y2NDBmXkEyXkFqcGdeQXVyNjQ2MjY1NTM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Scott Derrickson (dir.), Ethan Hawke, Jeremy Davies",
        imDbRating: "8.3",
        imDbRatingCount: "299",
      },
      {
        id: "tt13109952",
        rank: "23",
        rankUpDown: "+125",
        title: "The Trip",
        fullTitle: "The Trip (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMDIzNDE3YzktYWY4NS00ZGJhLTlhYWEtNWViMWIyNDJjYmI2XkEyXkFqcGdeQXVyMjAwNDk0MDA@._V1_Ratio0.7015_AL_.jpg",
        crew: "Tommy Wirkola (dir.), Noomi Rapace, Aksel Hennie",
        imDbRating: "6.9",
        imDbRatingCount: "8059",
      },
      {
        id: "tt9639470",
        rank: "24",
        rankUpDown: "+10",
        title: "Last Night in Soho",
        fullTitle: "Last Night in Soho (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Edgar Wright (dir.), Thomasin McKenzie, Anya Taylor-Joy",
        imDbRating: "7.6",
        imDbRatingCount: "7716",
      },
      {
        id: "tt6443346",
        rank: "25",
        rankUpDown: "+579",
        title: "Black Adam",
        fullTitle: "Black Adam (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BNTAxMGQ2NTQtMDYwMC00NDQ3LTgwYTAtOWYzMjE4OGVkZjk2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Jaume Collet-Serra (dir.), Dwayne Johnson, Sarah Shahi",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt8110232",
        rank: "26",
        rankUpDown: "-16",
        title: "The Many Saints of Newark",
        fullTitle: "The Many Saints of Newark (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYmQzNmY3YzItOTE3OC00NGZjLTkwZDYtOWVmM2QyMzhiYTgwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Alan Taylor (dir.), Alessandro Nivola, Leslie Odom Jr.",
        imDbRating: "6.4",
        imDbRatingCount: "31940",
      },
      {
        id: "tt13069986",
        rank: "27",
        rankUpDown: "+31",
        title: "After We Fell",
        fullTitle: "After We Fell (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMTEzN2MxZWUtYTJkYS00NjU5LTk0ZjgtNzc1OTMwNWNjZGFkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Castille Landon (dir.), Josephine Langford, Hero Fiennes Tiffin",
        imDbRating: "4.8",
        imDbRatingCount: "5151",
      },
      {
        id: "tt0107120",
        rank: "28",
        rankUpDown: "-7",
        title: "Hocus Pocus",
        fullTitle: "Hocus Pocus (1993)",
        year: "1993",
        image:
          "https://imdb-api.com/images/original/MV5BMWUxNWI0YTYtY2RiZS00ZjNmLTg4ZGUtNDI0Mzk4NmQ5NWE5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_Ratio0.6716_AL_.jpg",
        crew: "Kenny Ortega (dir.), Bette Midler, Sarah Jessica Parker",
        imDbRating: "6.9",
        imDbRatingCount: "115038",
      },
      {
        id: "tt9376612",
        rank: "29",
        rankUpDown: "-12",
        title: "Shang-Chi and the Legend of the Ten Rings",
        fullTitle: "Shang-Chi and the Legend of the Ten Rings (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Destin Daniel Cretton (dir.), Simu Liu, Awkwafina",
        imDbRating: "7.9",
        imDbRatingCount: "117052",
      },
      {
        id: "tt11245972",
        rank: "30",
        rankUpDown: "-26",
        title: "Scream",
        fullTitle: "Scream (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BNmQ0OWJiNWUtZGRiOS00MDRkLTk5NzMtN2RhN2NiZDg5NTE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Matt Bettinelli-Olpin (dir.), Neve Campbell, Courteney Cox",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt10944760",
        rank: "31",
        rankUpDown: "+9",
        title: "Titane",
        fullTitle: "Titane (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNGJlMTVlYWQtYmM5OC00MDgwLTk3NzAtMGViY2VjOGU0YjlkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7313_AL_.jpg",
        crew: "Julia Ducournau (dir.), Vincent Lindon, Agathe Rousselle",
        imDbRating: "6.8",
        imDbRatingCount: "11874",
      },
      {
        id: "tt1270797",
        rank: "32",
        rankUpDown: "-4",
        title: "Venom",
        fullTitle: "Venom (2018)",
        year: "2018",
        image:
          "https://imdb-api.com/images/original/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Ruben Fleischer (dir.), Tom Hardy, Michelle Williams",
        imDbRating: "6.7",
        imDbRatingCount: "421912",
      },
      {
        id: "tt10954652",
        rank: "33",
        rankUpDown: "-8",
        title: "Old",
        fullTitle: "Old (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZGMxYmI2MDAtMjZlMC00YjQyLTljNGYtOGI0YmMwOGE3YWNiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "M. Night Shyamalan (dir.), Gael García Bernal, Vicky Krieps",
        imDbRating: "5.8",
        imDbRatingCount: "59884",
      },
      {
        id: "tt5748448",
        rank: "34",
        rankUpDown: "-2",
        title: "Copshop",
        fullTitle: "Copshop (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMTZjZWYzYjMtMmNlYi00MTdkLWI4OTMtMmVhM2QzZjZiZTZiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Joe Carnahan (dir.), Gerard Butler, Frank Grillo",
        imDbRating: "6.3",
        imDbRatingCount: "9509",
      },
      {
        id: "tt0117571",
        rank: "35",
        rankUpDown: "-13",
        title: "Scream",
        fullTitle: "Scream (1996)",
        year: "1996",
        image:
          "https://imdb-api.com/images/original/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_Ratio0.6716_AL_.jpg",
        crew: "Wes Craven (dir.), Neve Campbell, Courteney Cox",
        imDbRating: "7.3",
        imDbRatingCount: "308749",
      },
      {
        id: "tt10665342",
        rank: "36",
        rankUpDown: "+36",
        title: "Halloween Ends",
        fullTitle: "Halloween Ends (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BOWJhZjYwZTktYmE0Yy00MGQ0LWFkMDAtNDE4YzA2ZTFkMGM2XkEyXkFqcGdeQXVyODc4MzQyMTI@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Gordon Green (dir.), Jamie Lee Curtis, Andi Matichak",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt6334354",
        rank: "37",
        rankUpDown: "-1",
        title: "The Suicide Squad",
        fullTitle: "The Suicide Squad (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_Ratio0.6716_AL_.jpg",
        crew: "James Gunn (dir.), Margot Robbie, Idris Elba",
        imDbRating: "7.3",
        imDbRatingCount: "234555",
      },
      {
        id: "tt10872600",
        rank: "38",
        rankUpDown: "+4",
        title: "Spider-Man: No Way Home",
        fullTitle: "Spider-Man: No Way Home (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Jon Watts (dir.), Zendaya, Tom Holland",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0381061",
        rank: "39",
        rankUpDown: "-23",
        title: "Casino Royale",
        fullTitle: "Casino Royale (2006)",
        year: "2006",
        image:
          "https://imdb-api.com/images/original/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Martin Campbell (dir.), Daniel Craig, Eva Green",
        imDbRating: "8.0",
        imDbRatingCount: "620086",
      },
      {
        id: "tt2379713",
        rank: "40",
        rankUpDown: "-26",
        title: "Spectre",
        fullTitle: "Spectre (2015)",
        year: "2015",
        image:
          "https://imdb-api.com/images/original/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Sam Mendes (dir.), Daniel Craig, Christoph Waltz",
        imDbRating: "6.8",
        imDbRatingCount: "411938",
      },
      {
        id: "tt5012504",
        rank: "41",
        rankUpDown: "-17",
        title: "Injustice",
        fullTitle: "Injustice (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYzA3ZmI1NzMtMTcxMi00ODg4LWFhMGItMTE2ZjIxODUzZTFiXkEyXkFqcGdeQXVyMTA1NzAwODMz._V1_Ratio0.6716_AL_.jpg",
        crew: "Matt Peters (dir.), Justin Hartley, Anson Mount",
        imDbRating: "6.2",
        imDbRatingCount: "4260",
      },
      {
        id: "tt7740510",
        rank: "42",
        rankUpDown: "+6",
        title: "Antlers",
        fullTitle: "Antlers (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BY2UzODAyNjktN2MwYy00M2RkLThiOTEtMjU1MTgxY2EzM2YyXkEyXkFqcGdeQXVyODk5MDA0MDU@._V1_Ratio0.6716_AL_.jpg",
        crew: "Scott Cooper (dir.), Keri Russell, Jesse Plemons",
        imDbRating: "6.4",
        imDbRatingCount: "2028",
      },
      {
        id: "tt8956324",
        rank: "43",
        rankUpDown: "+149",
        title: "Warning",
        fullTitle: "Warning (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYmEzYjE0NGQtZTg1Ni00NDFmLWExZDYtNTZjNDdlMmE3NWFiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Agata Alexander (dir.), Thomas Jane, Tomasz Kot",
        imDbRating: "5.5",
        imDbRatingCount: "3123",
      },
      {
        id: "tt3228774",
        rank: "44",
        rankUpDown: "-11",
        title: "Cruella",
        fullTitle: "Cruella (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Craig Gillespie (dir.), Emma Stone, Emma Thompson",
        imDbRating: "7.4",
        imDbRatingCount: "180512",
      },
      {
        id: "tt4513678",
        rank: "45",
        rankUpDown: "+11",
        title: "Ghostbusters: Afterlife",
        fullTitle: "Ghostbusters: Afterlife (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Jason Reitman (dir.), Finn Wolfhard, Mckenna Grace",
        imDbRating: "7.9",
        imDbRatingCount: "208",
      },
      {
        id: "tt0373883",
        rank: "46",
        rankUpDown: "+21",
        title: "Halloween",
        fullTitle: "Halloween (2007)",
        year: "2007",
        image:
          "https://imdb-api.com/images/original/MV5BMTMzOTg4MzcxNF5BMl5BanBnXkFtZTcwMzY5MDE1MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Rob Zombie (dir.), Scout Taylor-Compton, Malcolm McDowell",
        imDbRating: "6.1",
        imDbRatingCount: "115478",
      },
      {
        id: "tt7504818",
        rank: "47",
        rankUpDown: "+78",
        title: "Ron's Gone Wrong",
        fullTitle: "Ron's Gone Wrong (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMzMxMjllYTgtZWNjZS00ODc0LTljZWUtYjdiMDQ2ZDJkM2FkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Sarah Smith (dir.), Jack Dylan Grazer, Zach Galifianakis",
        imDbRating: "7.2",
        imDbRatingCount: "2266",
      },
      {
        id: "tt3811906",
        rank: "48",
        rankUpDown: "-21",
        title: "Malignant",
        fullTitle: "Malignant (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "James Wan (dir.), Annabelle Wallis, Maddie Hasson",
        imDbRating: "6.3",
        imDbRatingCount: "58217",
      },
      {
        id: "tt9243804",
        rank: "49",
        rankUpDown: "-11",
        title: "The Green Knight",
        fullTitle: "The Green Knight (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMjMxNTdiNWMtOWY0My00MjM4LTkwNzMtOGI0YThhN2Q4M2I4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Lowery (dir.), Dev Patel, Alicia Vikander",
        imDbRating: "6.6",
        imDbRatingCount: "57463",
      },
      {
        id: "tt14723224",
        rank: "50",
        rankUpDown: "-6",
        title: "The Cost of Deception",
        fullTitle: "The Cost of Deception (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMTBiNzk3ZGYtNDc0Yy00MDY5LWEzNDktNDQ2ZmNjY2VkYTFhXkEyXkFqcGdeQXVyMTI0OTQ1Mzg5._V1_Ratio0.6716_AL_.jpg",
        crew: "Keith English (dir.), Vivianne Bánovits, András Mózes",
        imDbRating: "1.4",
        imDbRatingCount: "35630",
      },
      {
        id: "tt11125620",
        rank: "51",
        rankUpDown: "-12",
        title: "The Addams Family 2",
        fullTitle: "The Addams Family 2 (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Greg Tiernan (dir.), Oscar Isaac, Charlize Theron",
        imDbRating: "5.3",
        imDbRatingCount: "5537",
      },
      {
        id: "tt0087800",
        rank: "52",
        rankUpDown: "+5",
        title: "A Nightmare on Elm Street",
        fullTitle: "A Nightmare on Elm Street (1984)",
        year: "1984",
        image:
          "https://imdb-api.com/images/original/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Wes Craven (dir.), Heather Langenkamp, Johnny Depp",
        imDbRating: "7.5",
        imDbRatingCount: "221595",
      },
      {
        id: "tt6920084",
        rank: "53",
        rankUpDown: "-42",
        title: "Resident Evil: Welcome to Raccoon City",
        fullTitle: "Resident Evil: Welcome to Raccoon City (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNjRmMDUxODctYjg3NC00NDRhLWJhZWItMjg0OTZkMDBjNWUxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.7910_AL_.jpg",
        crew: "Johannes Roberts (dir.), Kaya Scodelario, Robbie Amell",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt9812474",
        rank: "54",
        rankUpDown: "-19",
        title: "Lamb",
        fullTitle: "Lamb (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNzYzZTI2YmQtYmZlOS00NDI0LTg5MTktODJkNzc2Yzg0ZmMxXkEyXkFqcGdeQXVyNTQwOTY1MTg@._V1_Ratio0.7015_AL_.jpg",
        crew: "Valdimar Jóhannsson (dir.), Noomi Rapace, Hilmir Snær Guðnason",
        imDbRating: "6.4",
        imDbRatingCount: "5350",
      },
      {
        id: "tt12731980",
        rank: "55",
        rankUpDown: "-35",
        title: "Old Henry",
        fullTitle: "Old Henry (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BM2ViYWUzODctMGU2ZS00NzRjLThmOTAtYTUyOTE3OTFkYmI2XkEyXkFqcGdeQXVyNjc3MjE2MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Potsy Ponciroli (dir.), Tim Blake Nelson, Scott Haze",
        imDbRating: "7.2",
        imDbRatingCount: "7383",
      },
      {
        id: "tt0094721",
        rank: "56",
        rankUpDown: "+38",
        title: "Beetlejuice",
        fullTitle: "Beetlejuice (1988)",
        year: "1988",
        image:
          "https://imdb-api.com/images/original/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Tim Burton (dir.), Alec Baldwin, Geena Davis",
        imDbRating: "7.5",
        imDbRatingCount: "279731",
      },
      {
        id: "tt4998632",
        rank: "57",
        rankUpDown: "2,259",
        title: "Ambulance",
        fullTitle: "Ambulance (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BMzYxY2MxMzMtYTNmMS00MWQ4LTlhMmItZTBjYTgxNjQ0ZWRkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Michael Bay (dir.), Jake Gyllenhaal, Eiza González",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt1074638",
        rank: "58",
        rankUpDown: "-45",
        title: "Skyfall",
        fullTitle: "Skyfall (2012)",
        year: "2012",
        image:
          "https://imdb-api.com/images/original/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_Ratio0.6716_AL_.jpg",
        crew: "Sam Mendes (dir.), Daniel Craig, Javier Bardem",
        imDbRating: "7.8",
        imDbRatingCount: "664083",
      },
      {
        id: "tt9731534",
        rank: "59",
        rankUpDown: "-28",
        title: "The Night House",
        fullTitle: "The Night House (2020)",
        year: "2020",
        image:
          "https://imdb-api.com/images/original/MV5BZmIwNjJhOGYtNDcyNi00Yjc4LThiNTktMDM2ZjFhM2YxMTljXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "David Bruckner (dir.), Rebecca Hall, Sarah Goldberg",
        imDbRating: "6.5",
        imDbRatingCount: "20030",
      },
      {
        id: "tt15239678",
        rank: "60",
        rankUpDown: "+28",
        title: "Dune: Part Two",
        fullTitle: "Dune: Part Two (2023)",
        year: "2023",
        image:
          "https://imdb-api.com/images/original/MV5BZmVkMjlmYWMtYWM0MC00MGQwLWJkMTgtNTgxN2Y5ZjAxZTZkXkEyXkFqcGdeQXVyMTIwMjQ4ODcw._V1_Ratio1.5075_AL_.jpg",
        crew: "Denis Villeneuve (dir.), Rebecca Ferguson, Timothée Chalamet",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt8772262",
        rank: "61",
        rankUpDown: "+7",
        title: "Midsommar",
        fullTitle: "Midsommar (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Ari Aster (dir.), Florence Pugh, Jack Reynor",
        imDbRating: "7.1",
        imDbRatingCount: "259811",
      },
      {
        id: "tt8946378",
        rank: "62",
        rankUpDown: "-22",
        title: "Knives Out",
        fullTitle: "Knives Out (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_Ratio0.6716_AL_.jpg",
        crew: "Rian Johnson (dir.), Daniel Craig, Chris Evans",
        imDbRating: "7.9",
        imDbRatingCount: "542312",
      },
      {
        id: "tt7131622",
        rank: "63",
        rankUpDown: "+7",
        title: "Once Upon a Time... In Hollywood",
        fullTitle: "Once Upon a Time... In Hollywood (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio0.6716_AL_.jpg",
        crew: "Quentin Tarantino (dir.), Leonardo DiCaprio, Brad Pitt",
        imDbRating: "7.6",
        imDbRatingCount: "647096",
      },
      {
        id: "tt0080761",
        rank: "64",
        rankUpDown: "+1",
        title: "Friday the 13th",
        fullTitle: "Friday the 13th (1980)",
        year: "1980",
        image:
          "https://imdb-api.com/images/original/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Sean S. Cunningham (dir.), Betsy Palmer, Adrienne King",
        imDbRating: "6.4",
        imDbRatingCount: "130955",
      },
      {
        id: "tt10886166",
        rank: "65",
        rankUpDown: "-6",
        title: "365 Days",
        fullTitle: "365 Days (2020)",
        year: "2020",
        image:
          "https://imdb-api.com/images/original/MV5BODljZTM3ODAtMDc0YS00NmI4LTlmZTUtM2I5MDAzNTQxZmMxXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_Ratio0.7015_AL_.jpg",
        crew: "Barbara Bialowas (dir.), Anna Maria Sieklucka, Michele Morrone",
        imDbRating: "3.3",
        imDbRatingCount: "68498",
      },
      {
        id: "tt1856101",
        rank: "66",
        rankUpDown: "+7",
        title: "Blade Runner 2049",
        fullTitle: "Blade Runner 2049 (2017)",
        year: "2017",
        image:
          "https://imdb-api.com/images/original/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Denis Villeneuve (dir.), Harrison Ford, Ryan Gosling",
        imDbRating: "8.0",
        imDbRatingCount: "507831",
      },
      {
        id: "tt0082495",
        rank: "67",
        rankUpDown: "+7",
        title: "Halloween II",
        fullTitle: "Halloween II (1981)",
        year: "1981",
        image:
          "https://imdb-api.com/images/original/MV5BMjZmYjg0ODctOTIyYy00YzhkLTgyMzEtNjUyY2JiZjVmYzI2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Rick Rosenthal (dir.), Jamie Lee Curtis, Donald Pleasence",
        imDbRating: "6.5",
        imDbRatingCount: "83750",
      },
      {
        id: "tt9620292",
        rank: "68",
        rankUpDown: "-17",
        title: "Promising Young Woman",
        fullTitle: "Promising Young Woman (2020)",
        year: "2020",
        image:
          "https://imdb-api.com/images/original/MV5BOTgzMzE4MGItZDgxYS00ZGEwLWE3YTctZWY3ZDAyMTk0ZGU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Emerald Fennell (dir.), Carey Mulligan, Bo Burnham",
        imDbRating: "7.5",
        imDbRatingCount: "135638",
      },
      {
        id: "tt4995540",
        rank: "69",
        rankUpDown: "3,952",
        title: "Being the Ricardos",
        fullTitle: "Being the Ricardos (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BODBhZDljMTItNTcyMC00YzI4LWI0ZWQtMjU5MzcwNmFmYmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Aaron Sorkin (dir.), Javier Bardem, Nicole Kidman",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0241527",
        rank: "70",
        rankUpDown: "+12",
        title: "Harry Potter and the Sorcerer's Stone",
        fullTitle: "Harry Potter and the Sorcerer's Stone (2001)",
        year: "2001",
        image:
          "https://imdb-api.com/images/original/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Chris Columbus (dir.), Daniel Radcliffe, Rupert Grint",
        imDbRating: "7.6",
        imDbRatingCount: "704460",
      },
      {
        id: "tt9100054",
        rank: "71",
        rankUpDown: "-525",
        title: "The Lost Daughter",
        fullTitle: "The Lost Daughter (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BZTJmYTJmYTktMzU1Yy00ZTZlLTgzNjItYmY4ZDFjZGFjYjZhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Maggie Gyllenhaal (dir.), Olivia Colman, Dakota Johnson",
        imDbRating: "6.6",
        imDbRatingCount: "487",
      },
      {
        id: "tt10016180",
        rank: "72",
        rankUpDown: "-88",
        title: "The Little Things",
        fullTitle: "The Little Things (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BOGFlNTdmYWQtM2IzMi00YTY3LTlmMDQtZDI5NGQ5MjYzZmEwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6716_AL_.jpg",
        crew: "John Lee Hancock (dir.), Denzel Washington, Rami Malek",
        imDbRating: "6.3",
        imDbRatingCount: "79023",
      },
      {
        id: "tt6751668",
        rank: "73",
        rankUpDown: "-21",
        title: "Parasite",
        fullTitle: "Parasite (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Bong Joon Ho (dir.), Kang-ho Song, Sun-kyun Lee",
        imDbRating: "8.6",
        imDbRatingCount: "675422",
      },
      {
        id: "tt7286456",
        rank: "74",
        rankUpDown: "-15",
        title: "Joker",
        fullTitle: "Joker (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Todd Phillips (dir.), Joaquin Phoenix, Robert De Niro",
        imDbRating: "8.4",
        imDbRatingCount: "1085161",
      },
      {
        id: "tt0101272",
        rank: "75",
        rankUpDown: "-2",
        title: "The Addams Family",
        fullTitle: "The Addams Family (1991)",
        year: "1991",
        image:
          "https://imdb-api.com/images/original/MV5BODc1NmY0MDUtNjUzNS00ODdhLWJlN2ItMTgwZjczZjI0MDkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7612_AL_.jpg",
        crew: "Barry Sonnenfeld (dir.), Anjelica Huston, Raul Julia",
        imDbRating: "6.9",
        imDbRatingCount: "145393",
      },
      {
        id: "tt0107688",
        rank: "76",
        rankUpDown: "+4",
        title: "The Nightmare Before Christmas",
        fullTitle: "The Nightmare Before Christmas (1993)",
        year: "1993",
        image:
          "https://imdb-api.com/images/original/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Henry Selick (dir.), Danny Elfman, Chris Sarandon",
        imDbRating: "8.0",
        imDbRatingCount: "314297",
      },
      {
        id: "tt4154796",
        rank: "77",
        rankUpDown: "+10",
        title: "Avengers: Endgame",
        fullTitle: "Avengers: Endgame (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6716_AL_.jpg",
        crew: "Anthony Russo (dir.), Robert Downey Jr., Chris Evans",
        imDbRating: "8.4",
        imDbRatingCount: "953126",
      },
      {
        id: "tt14813212",
        rank: "78",
        rankUpDown: "1,375",
        title: "Untitled the Munsters Reboot",
        fullTitle: "Untitled the Munsters Reboot ( 1,375)",
        year: " 1,375",
        image:
          "https://imdb-api.com/images/original/MV5BMDlkM2EzZWEtOGM2NC00NzFlLWI3ODYtYmJlZmZiODVlZDQ3XkEyXkFqcGdeQXVyNTYzMTc4MzY@._V1_Ratio1.7761_AL_.jpg",
        crew: "Rob Zombie (dir.), Jeff Daniel Phillips, Sheri Moon Zombie",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0816692",
        rank: "79",
        rankUpDown: "+21",
        title: "Interstellar",
        fullTitle: "Interstellar (2014)",
        year: "2014",
        image:
          "https://imdb-api.com/images/original/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
        crew: "Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway",
        imDbRating: "8.6",
        imDbRatingCount: "1630638",
      },
      {
        id: "tt5433138",
        rank: "80",
        rankUpDown: "-9",
        title: "F9: The Fast Saga",
        fullTitle: "F9: The Fast Saga (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6716_AL_.jpg",
        crew: "Justin Lin (dir.), Vin Diesel, Michelle Rodriguez",
        imDbRating: "5.2",
        imDbRatingCount: "100251",
      },
      {
        id: "tt12789558",
        rank: "81",
        rankUpDown: "-39",
        title: "Belfast",
        fullTitle: "Belfast (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BODMwYTYyY2ItOWQ5Yi00OTI1LTllYTQtYTdlNWM4YzJhYTM0XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_Ratio0.6716_AL_.jpg",
        crew: "Kenneth Branagh (dir.), Jude Hill, Lewis McAskie",
        imDbRating: "7.5",
        imDbRatingCount: "458",
      },
      {
        id: "tt9347730",
        rank: "82",
        rankUpDown: "-29",
        title: "Candyman",
        fullTitle: "Candyman (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BOWEzNDAxYmEtYWU0Zi00ZjZjLTkxY2QtMGY1MjY5ZjVhNDdjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Nia DaCosta (dir.), Yahya Abdul-Mateen II, Teyonah Parris",
        imDbRating: "6.0",
        imDbRatingCount: "39053",
      },
      {
        id: "tt6166392",
        rank: "83",
        rankUpDown: "-32",
        title: "Wonka",
        fullTitle: "Wonka (2023)",
        year: "2023",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        crew: "Paul King (dir.), Timothée Chalamet, Olivia Colman",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt9357050",
        rank: "84",
        rankUpDown: "-28",
        title: "Dear Evan Hansen",
        fullTitle: "Dear Evan Hansen (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYzMwZTZhY2UtNWRjYy00MDc3LWE2MWUtZTg5NjVmZGY1NTdhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        crew: "Stephen Chbosky (dir.), Ben Platt, Julianne Moore",
        imDbRating: "6.1",
        imDbRatingCount: "6500",
      },
      {
        id: "tt0830515",
        rank: "85",
        rankUpDown: "-68",
        title: "Quantum of Solace",
        fullTitle: "Quantum of Solace (2008)",
        year: "2008",
        image:
          "https://imdb-api.com/images/original/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg",
        crew: "Marc Forster (dir.), Daniel Craig, Olga Kurylenko",
        imDbRating: "6.6",
        imDbRatingCount: "427813",
      },
      {
        id: "tt8404256",
        rank: "86",
        rankUpDown: "-42",
        title: "Snake Eyes",
        fullTitle: "Snake Eyes (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BNGJmMWUwMDgtYjEyNS00YmZhLTk3ZGEtZDliZDBhMDJkMGUyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7910_AL_.jpg",
        crew: "Robert Schwentke (dir.), Henry Golding, Andrew Koji",
        imDbRating: "5.4",
        imDbRatingCount: "26398",
      },
      {
        id: "tt0111161",
        rank: "87",
        rankUpDown: "-19",
        title: "The Shawshank Redemption",
        fullTitle: "The Shawshank Redemption (1994)",
        year: "1994",
        image:
          "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
        crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        imDbRating: "9.3",
        imDbRatingCount: "2479801",
      },
      {
        id: "tt0109506",
        rank: "88",
        rankUpDown: "+947",
        title: "The Crow",
        fullTitle: "The Crow (1994)",
        year: "1994",
        image:
          "https://imdb-api.com/images/original/MV5BM2Y4ZGVhZjItNjU0OC00MDk1LWI4ZTktYTgwMWJkNDE5OTcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Alex Proyas (dir.), Brandon Lee, Michael Wincott",
        imDbRating: "7.6",
        imDbRatingCount: "174694",
      },
      {
        id: "tt11909878",
        rank: "89",
        rankUpDown: "+9",
        title: "Hocus Pocus 2",
        fullTitle: "Hocus Pocus 2 (2022)",
        year: "2022",
        image:
          "https://imdb-api.com/images/original/MV5BMzAzNzY5ZDUtOGUzYS00ZjdmLWE4ZDUtNjI4NDYyZmNhODU0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_Ratio0.6716_AL_.jpg",
        crew: "Anne Fletcher (dir.), Hannah Waddingham, Kathy Najimy",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0468569",
        rank: "90",
        rankUpDown: "+28",
        title: "The Dark Knight",
        fullTitle: "The Dark Knight (2008)",
        year: "2008",
        image:
          "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg",
        crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        imDbRating: "9.0",
        imDbRatingCount: "2434104",
      },
      {
        id: "tt0073629",
        rank: "91",
        rankUpDown: "+43",
        title: "The Rocky Horror Picture Show",
        fullTitle: "The Rocky Horror Picture Show (1975)",
        year: "1975",
        image:
          "https://imdb-api.com/images/original/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_Ratio0.6716_AL_.jpg",
        crew: "Jim Sharman (dir.), Tim Curry, Susan Sarandon",
        imDbRating: "7.4",
        imDbRatingCount: "141294",
      },
      {
        id: "tt8150814",
        rank: "92",
        rankUpDown: "-73",
        title: "There's Someone Inside Your House",
        fullTitle: "There's Someone Inside Your House (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BYmQ4OTAwNjAtMzBjZS00ZTI3LTk0YTUtMzE1N2I5ZDA5ZGRiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Patrick Brice (dir.), Sydney Park, Théodore Pellerin",
        imDbRating: "4.8",
        imDbRatingCount: "9827",
      },
      {
        id: "tt1620981",
        rank: "93",
        rankUpDown: "-17",
        title: "The Addams Family",
        fullTitle: "The Addams Family (2019)",
        year: "2019",
        image:
          "https://imdb-api.com/images/original/MV5BODBjOTAzZmMtNGJkOC00M2M3LWI1MTctZjZlMzdiODBkMzc0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_Ratio0.6716_AL_.jpg",
        crew: "Greg Tiernan (dir.), Oscar Isaac, Charlize Theron",
        imDbRating: "5.8",
        imDbRatingCount: "34593",
      },
      {
        id: "tt1396484",
        rank: "94",
        rankUpDown: "+3",
        title: "It",
        fullTitle: "It (2017)",
        year: "2017",
        image:
          "https://imdb-api.com/images/original/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_Ratio0.6716_AL_.jpg",
        crew: "Andy Muschietti (dir.), Bill Skarsgård, Jaeden Martell",
        imDbRating: "7.3",
        imDbRatingCount: "494879",
      },
      {
        id: "tt6723592",
        rank: "95",
        rankUpDown: "-15",
        title: "Tenet",
        fullTitle: "Tenet (2020)",
        year: "2020",
        image:
          "https://imdb-api.com/images/original/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_Ratio0.6716_AL_.jpg",
        crew: "Christopher Nolan (dir.), John David Washington, Robert Pattinson",
        imDbRating: "7.4",
        imDbRatingCount: "431699",
      },
      {
        id: "tt0120694",
        rank: "96",
        rankUpDown: "+27",
        title: "Halloween H20: 20 Years Later",
        fullTitle: "Halloween H20: 20 Years Later (1998)",
        year: "1998",
        image:
          "https://imdb-api.com/images/original/MV5BNzA3ZjMzZWItNWUyNy00ZmNiLWIwYmYtN2UxNWUwMGY5Yzc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Steve Miner (dir.), Jamie Lee Curtis, Josh Hartnett",
        imDbRating: "5.8",
        imDbRatingCount: "71054",
      },
      {
        id: "tt0120338",
        rank: "97",
        rankUpDown: "-42",
        title: "Titanic",
        fullTitle: "Titanic (1997)",
        year: "1997",
        image:
          "https://imdb-api.com/images/original/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6716_AL_.jpg",
        crew: "James Cameron (dir.), Leonardo DiCaprio, Kate Winslet",
        imDbRating: "7.8",
        imDbRatingCount: "1100071",
      },
      {
        id: "tt11012066",
        rank: "98",
        rankUpDown: "-80",
        title: "Home Sweet Home Alone",
        fullTitle: "Home Sweet Home Alone (2021)",
        year: "2021",
        image:
          "https://imdb-api.com/images/original/MV5BMDlkMzZiM2EtZDMxZC00ZWUwLTliMDMtMGMzMzE3NTEzMThiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.7910_AL_.jpg",
        crew: "Dan Mazer (dir.), Ellie Kemper, Rob Delaney",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0084516",
        rank: "99",
        rankUpDown: "+30",
        title: "Poltergeist",
        fullTitle: "Poltergeist (1982)",
        year: "1982",
        image:
          "https://imdb-api.com/images/original/MV5BNzliZmRlYTctYmNkYS00NzE5LWI1OWQtMTRiODY5MDMwMTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
        crew: "Tobe Hooper (dir.), JoBeth Williams, Heather O'Rourke",
        imDbRating: "7.3",
        imDbRatingCount: "153585",
      },
      {
        id: "tt0993846",
        rank: "100",
        rankUpDown: "-14",
        title: "The Wolf of Wall Street",
        fullTitle: "The Wolf of Wall Street (2013)",
        year: "2013",
        image:
          "https://imdb-api.com/images/original/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_Ratio0.6716_AL_.jpg",
        crew: "Martin Scorsese (dir.), Leonardo DiCaprio, Jonah Hill",
        imDbRating: "8.2",
        imDbRatingCount: "1276049",
      },
    ],
    errorMessage: "",
  };

  const fetchRandom = () => {
    let List = [];
    if (Movies.items.length > 0) {
      for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 100 - 1);
        List.push(Movies.items[random]);
      }
    }
    return List;
  };

  useEffect(() => {
    let List = fetchRandom();
    setmoviesList(List);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (moviesList.length >= 1) {
    return (
      <>
        {moviesList.map((movie) => {
          return (
            <CardsDiv key={movie?.title}>
              <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen(movie?.id)}
                preventSwipe={["up", "down"]}
              >
                <CardImage
                  style={{
                    background: `url(${movie?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </TinderCard>
            </CardsDiv>
          );
        })}
      </>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Card;
