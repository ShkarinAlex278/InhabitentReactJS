import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import lightHouse from "../assets/light-house-on-hill.jpg";
import photoOfTree from "../assets/photo-of-trees-in-forest.jpg";
import cityBuilding from "../assets/city-buildings-during-night-time-3787939.jpg";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            // style={{ height: "200px" }}
            className="d-block w-100"
            src={lightHouse}
            alt="Image"
          />
          <Carousel.Caption>
            <h3>P.E.I. picture from East Cost</h3>
            <p>
              In 1798, the British named the island colony for Prince Edward,
              Duke of Kent and Strathearn (1767–1820), the fourth son of King
              George III and the father of Queen Victoria. Prince Edward has
              been called "Father of the Canadian Crown".[9] The following
              island landmarks are also named after the Duke of Kent: Prince
              Edward Battery, Victoria Park, Charlottetown Kent College,
              established in 1804 by Lieutenant Governor Edmund Fanning and his
              Legislative Council, the college would eventually become the
              University of Prince Edward Island Kent Street, Charlottetown West
              Kent Elementary School Kent Street, Georgetown In French, the
              island is today called Île-du-Prince-Édouard, but its former
              French name, as part of Acadia, was Île Saint-Jean (St. John's
              Island). The island is known in Scottish Gaelic as Eilean a'
              Phrionnsa (lit. "the Island of the Prince", the local form of the
              longer 'Eilean a' Phrionnsa Iomhair/Eideard') or Eilean Eòin for
              some Gaelic speakers in Nova Scotia though not on PEI (lit.
              "John's Island" in reference to the island's former name). The
              island is known in the Mi'kmaq language as Abegweit or Epekwitk
              roughly translated as "land cradled in the waves".{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img
            style={{ height: "200px" }}
            className="d-block w-100"
            src={photoOfTree}
            alt="Image"
          />
          <Carousel.Caption>
            <h3>P.E.I. forest</h3>
            <p>
              Prince Edward Island used to have native moose, bear, caribou,
              wolf, and other larger species. Due to hunting and habitat
              disruption these species are no longer found on the island. Some
              species common to P.E.I. are red foxes, coyote,[31] blue jays, and
              robins. Skunks and raccoons are common non-native species. Species
              at risk in P.E.I. include piping plovers, american eel, bobolinks,
              little brown bat, and beach pinweed.[
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
  }
}

export default CarouselBox;
