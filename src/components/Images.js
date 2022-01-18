import React from 'react';
import Loading from './Loading.js';
import ImageCard from './ImageCard.js';
const rovers = ["curiosity", "opportunity", "spirit"];
let sol = 1000;

let SavedImageIds = [];

function generateRequestUrl(rover) {
  const requestUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?sol=" + sol + "&api_key=iRDnhUfRspIJuDbRR0Dd91I1wxDJqh01GbWwjvoO";

  return requestUrl
}

async function makeRequestToNasa(requestUrl) {
  return await fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    return data
  })
}

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: {},
      Images: [],
      loading: true,
    }
    this.handleLike = this.handleLike.bind(this);
  }
  async componentDidMount() {
    let completeData = []

    for (let i = 0; i < rovers.length; i++) {
      const data = await makeRequestToNasa(generateRequestUrl(rovers[i]));
      const photos = data.photos;
      completeData = completeData.concat(photos)
    }

    this.setState({
      Images: completeData,
      loading: false
    })
  }
  handleLike(event) {
    event.preventDefault();
    const button = event.target
    const currentId = button.id
    if (button.classList.contains("liked")) {
      button.classList.remove('liked')
      button.textContent = 'Like'
      SavedImageIds = SavedImageIds.filter(savedImageId => {
        if (savedImageId != currentId) {
          return true;
        }
      })
    } else {
      button.classList.add('liked');
      button.textContent = 'Unlike'
      SavedImageIds.push(parseInt(currentId))
    }
  }
  render() {
    const images = this.state.Images;
    const loading = this.state.loading;
    const filteredImages =
    images
    .filter(image => {
      const searchCategories = [image.rover.name, image.camera.full_name, image.earth_date, image.rover.launch_date, image.rover.landing_date]

      for (let i = 0; i < searchCategories.length; i++) {
        let searchCategory = searchCategories[i];
        if (searchCategory.toLowerCase().includes(this.props.filter.toLowerCase())) {
          return true
        }
      }
    })
    .map((image) => {
      return (ImageCard(image, image.id, SavedImageIds, this.handleLike))
    });

    return (
      (loading ?
        <Loading />
      :
        <div className="images container">
          {
            (
              filteredImages.length > 0
              ?
              filteredImages
              :
              <div>No search results found.</div>
            )
          }
        </div>
      )
    )
  }
}


