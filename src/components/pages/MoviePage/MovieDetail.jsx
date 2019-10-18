import React from "react";
import { Table } from "reactstrap";

export default class MovieDetail extends React.Component {
  render() {
    const { movieDetails } = this.props;
    const movieDataList = [
      {
        name: "Статус",
        value: movieDetails.status
      },
      {
        name: "Дата выхода",
        value: movieDetails.release_date
      },
      {
        name: "Продолжительность",
        value: movieDetails.runtime + "минут"
      },
      {
        name: "Язык оригинала",
        value: movieDetails.original_language
      },
      {
        name: "Страна",
        value:
          movieDetails && movieDetails.production_countries
            ? movieDetails.production_countries.map(item => item.name)
            : ""
      },
      {
        name: "Бюджет",
        value: movieDetails.budget + "$"
      },
      {
        name: "Сборы",
        value: movieDetails.revenue + "$"
      },
      {
        name: "Компания",
        value:
          movieDetails && movieDetails.production_companies
            ? movieDetails.production_companies.map(item => item.name)
            : ""
      },
      {
        name: "Жанры",
        value:
          movieDetails && movieDetails.genres
            ? movieDetails.genres.map(item => item.name)
            : ""
      }
    ];

    //console.log(movieDataList);
    return (
      <Table>
        <tbody>
          {movieDataList.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.name}</th>
                <td>{item.value + ""}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
