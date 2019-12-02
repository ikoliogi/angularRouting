import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mapZoom: number = 6;
  public center = {
    lat: 37.9836999,
    lng: 23.7475245
  }

  public mapStyle2 = {
    AssassinsCreed: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4d6059"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4d6059"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4d6059"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4d6059"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4d6059"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7f8d89"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#7f8d89"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#7f8d89"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#2b3638"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2b3638"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#24282b"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#24282b"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    LostInTheDesert: [
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "#f49f53"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#f9ddc5"
          },
          {
            "lightness": -7
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#813033"
          },
          {
            "lightness": 43
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "color": "#645c20"
          },
          {
            "lightness": 38
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#1994bf"
          },
          {
            "saturation": -69
          },
          {
            "gamma": 0.99
          },
          {
            "lightness": 43
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f19f53"
          },
          {
            "weight": 1.3
          },
          {
            "visibility": "on"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi.business"
      },
      {
        "featureType": "poi.park",
        "stylers": [
          {
            "color": "#645c20"
          },
          {
            "lightness": 39
          }
        ]
      },
      {
        "featureType": "poi.school",
        "stylers": [
          {
            "color": "#a95521"
          },
          {
            "lightness": 35
          }
        ]
      },
      {},
      {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#813033"
          },
          {
            "lightness": 38
          },
          {
            "visibility": "off"
          }
        ]
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
        "elementType": "labels"
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "color": "#9e5916"
          },
          {
            "lightness": 32
          }
        ]
      },
      {},
      {
        "featureType": "poi.government",
        "stylers": [
          {
            "color": "#9e5916"
          },
          {
            "lightness": 46
          }
        ]
      },
      {
        "featureType": "transit.station",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "stylers": [
          {
            "color": "#813033"
          },
          {
            "lightness": 22
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "lightness": 38
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f19f53"
          },
          {
            "lightness": -10
          }
        ]
      },
      {},
      {},
      {}
    ],
    Grayscale: [
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#e0dfe0"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#a8a9a8"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#5b5b5a"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    UltraLight: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
}

  public mapStyle = [
    {
      title: 'Assassins Creed',
      style: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 40
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#4d6059"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4d6059"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#4d6059"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#4d6059"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4d6059"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#7f8d89"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#7f8d89"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#7f8d89"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#2b3638"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2b3638"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#24282b"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#24282b"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    },
    {
      title: 'Lost In The Desert',
      style: [
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            },
            {
              "color": "#f49f53"
            }
          ]
        },
        {
          "featureType": "landscape",
          "stylers": [
            {
              "color": "#f9ddc5"
            },
            {
              "lightness": -7
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "color": "#813033"
            },
            {
              "lightness": 43
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "color": "#645c20"
            },
            {
              "lightness": 38
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#1994bf"
            },
            {
              "saturation": -69
            },
            {
              "gamma": 0.99
            },
            {
              "lightness": 43
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#f19f53"
            },
            {
              "weight": 1.3
            },
            {
              "visibility": "on"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "poi.business"
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "color": "#645c20"
            },
            {
              "lightness": 39
            }
          ]
        },
        {
          "featureType": "poi.school",
          "stylers": [
            {
              "color": "#a95521"
            },
            {
              "lightness": 35
            }
          ]
        },
        {},
        {
          "featureType": "poi.medical",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#813033"
            },
            {
              "lightness": 38
            },
            {
              "visibility": "off"
            }
          ]
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          "elementType": "labels"
        },
        {
          "featureType": "poi.sports_complex",
          "stylers": [
            {
              "color": "#9e5916"
            },
            {
              "lightness": 32
            }
          ]
        },
        {},
        {
          "featureType": "poi.government",
          "stylers": [
            {
              "color": "#9e5916"
            },
            {
              "lightness": 46
            }
          ]
        },
        {
          "featureType": "transit.station",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "stylers": [
            {
              "color": "#813033"
            },
            {
              "lightness": 22
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "lightness": 38
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#f19f53"
            },
            {
              "lightness": -10
            }
          ]
        },
        {},
        {},
        {}
      ]
    },
    {
      title: 'Gray Scale',
      style: [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 65
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": "50"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": "-100"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "30"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "40"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ffff00"
            },
            {
              "lightness": -25
            },
            {
              "saturation": -97
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "lightness": -25
            },
            {
              "saturation": -100
            }
          ]
        }
      ]
    },
    {
      title: 'Ultra Light',
      style: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e9e9e9"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dedede"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ffffff"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#333333"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f2f2f2"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#fefefe"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#fefefe"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        }
      ]
    }
  ]

  public selectedMapStyle = [];

  public markers = [
    {
      title: '1st department',
      coordinates: {
        lat: 40.6342738,
        lng: 22.9452297
      }
    },
    {
      title: '2nd department',
      coordinates: {
        lat: 37.9872549,
        lng: 23.7534673
      }
    },
    {
      title: '3d department',
      coordinates: {
        lat: 39.1568004,
        lng: 20.9845964
      }
    },
    {
      title: '4th department',
      coordinates: {
        lat: 41.2791168,
        lng: 26.2491834
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
