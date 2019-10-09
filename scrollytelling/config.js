var config = {
  style: "mapbox://styles/pmbanugo/ck1j5s4hr06m91coxi91rghsa", //TODO
  accessToken:
    "pk.eyJ1IjoicG1iYW51Z28iLCJhIjoiY2sxajJqbWpzMHN6bjNkankxaGh4N3RhZiJ9.jfuf8h8xaRLS9Si9Epp-sw", //TODO
  title: "Abuja Latin Dance Community", //TODO
  subtitle: "La vida tiene sabor", //TODO
  byline: "By Peter Mbanugo (Code Chef)", //TODO
  footer:
    "Created at Concatenate Lagos 2019 with our awesome instructor Anjana Vakil",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  chapters: [
    //TODO replace this data with data from the first point in your dataset
    {
      id: "concatenate-lagos",
      title: "Concatenate Lagos",
      description:
        "A free conference for African developers with speakers from around the world. This is where my maps journey began with Anjana Vakil and other awesome attendees I spent the room with.",
      location: {
        center: [3.366639462826271, 6.51635441424402],
        zoom: 11.805394255186213,
        pitch: 33.499999999999986,
        bearing: 136.79999999999995
      },
      time: ""
    },
    //TODO Copy-paste more chapters here - one for each point in your dataset!
    {
      location: {
        center: [7.488222306885632, 9.077677688632775],
        zoom: 17,
        pitch: 0,
        bearing: 0
      },
      id: "casalinda",
      title: "Casalinda Hotel",
      description:
        "A nice hotel with a lounge and a pool. An opportunity to meet fellow dance enthusiast, get a drink and dance.",
      time: "Friday, 8:30 PM"
    },
    {
      location: {
        center: [7.484617417971094, 9.072253283511643],
        zoom: 17,
        pitch: 0,
        bearing: 0
      },
      id: "barcelona-hotel",
      title: "Barcelona Hotel",
      description:
        "A venue where Latin dance enthusiast meet during the week. They have really nice cocktails so we can dance, drink and smoke cigarettes (if you want :P)",
      time: "Thursday, 9:00 PM"
    },
    {
      location: {
        center: [7.472601121585569, 9.084119063141898],
        zoom: 17,
        pitch: 0,
        bearing: 0
      },
      id: "bon-hotel-elvis",
      title: "Bon Hotel Elvis",
      description:
        "A nice hotel with big swimming pool and bar. Close to the Banex arena and a nice atmosphere and clubs close by. ",
      time: "Sunday, 7:00 PM"
    }
  ]
};
