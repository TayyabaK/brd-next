'use client'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;

// 'use client'
// import React, { useState, useEffect } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const GoogleMapStyle = () => {
//   const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
//   const [zoom, setZoom] = useState(11);

//   useEffect(() => {
//     // Set the initial map center and zoom
//     setCenter({ lat: 59.955413, lng: 30.337844 });
//     setZoom(12);
//   }, []);

//   return (
//     // Important Always set the container height explicitly
//     <div className="google-map-style-1">
//       <GoogleMapReact
//         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default GoogleMapStyle;
