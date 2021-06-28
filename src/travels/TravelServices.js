const http = {};

class TravelServices {
  static async getTravels(params) {
    // return (await http.get("api/travels", { params })).data;
    const baseTravel = {
      id: 1,
      imageSrc: "https://picsum.photos/300/180",
      description: `In this special tour to sillustani we´ll pick you up at 9.00 a.m. from the hotel and then we go by car to the chullpas of sillustani, this archaeological site is located on the peninsula of umayo lagoon and it’s one the most important necropolis in the world.

      There will visit the famous archaeological complex of Sillustani, cylinder burial towers built of stone, (12m/40ft tall) where the Aymaras buried their important leaders. sorounded by the Umayo Lagoon, only adds beauty to the place, the Chullpas known as lagarto and Intiwatana are most prominent. Here you will have the opportunity to observe the wild guinea pigs, birds and other wildlife of the area. This trip takes (3h and 30 minutes maximum), after back to Puno and transfer to your hotel.`,
      includes: [
        "Advice one day before the tour.",
        "Sillustani entrence fee.",
        "Official guide Spanish / English.",
        "Pick up from hotels in the center of the city of Puno.",
        "Transportation: Puno – Sillustani – hotel in Puno.",
        1,
      ],
      noincludes: ["Others not mentioned in the program."],
      activities: [
        {
          time: "09:00 a.m",
          activity:
            "Pick up from hotels and departure to Chullpas of Sillustani",
        },
        {
          time: "09:45 a.m",
          activity: "Departure of the bus to the Chullpas of Sillustani.",
        },
        {
          time: "10:00 a.m",
          activity:
            "Arrival at Archaeological complex of Sillustani and visit (1 hour 30 min approrx).",
        },
        {
          time: "11:30 a.m",
          activity:
            "Departure of the bus from the Chullpas of Sillustani to Puno.",
        },
        {
          time: "12:00 p.m",
          activity: "Arrival to Puno and transfer to their hotels ",
        },
      ],
    };
    //
    return [
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/chullpas-sillustani-puno-pm-slider-01-600x293.jpg",
        name: "Tour to chullpas of Sillustani – Puno",
      },
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/chullpas-sillustani-puno-am-slider-03-600x293.jpg",
        name: "Tour airport – Sillustani – hotels in Puno or viceverse ",
      },
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/aramu-muru-hayu-marca-chucuito-inca-uyu-slider-01-600x293.jpg",
        name: "Private tour to Aramu muru – Hayu marca",
      },
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/aramu-muru-hayu-marca-chucuito-inca-uyu-slider-17-600x293.jpg",
        name: "Private tour to Inca uyo – Chucuito",
      },
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/aramu-muru-hayu-marca-chucuito-inca-uyu-slider-14-600x293.jpg",
        name: "Private tour to chullpas of Cutimbo – Puno",
      },
      {
        ...baseTravel,
        imageSrc:
          "https://www.toursapuno.com/wp-content/uploads/2019/12/chullpas-cutimbo-puno-privado-slider-01-600x293.jpg",
        name: "Private tour to Chucuito, Aramu muru and Juli",
      },
    ];
  }

  static async getTravel(id) {
    let result = await TravelServices.getTravels();
    try {
      let part = result.filter((x) => (x.id = id))[0];
      return part;
    } catch (e) {
      return {};
    } finally {
      //
    }
    // return (await http.get(`api/travels/${id}`)).data;
  }

  static async saveTravel(reg) {
    if (reg.id === undefined || reg.id === null) {
      return (await http.post("api/travels", reg)).data;
    } else {
      return (await http.put(`api/travels/${reg.id}`, reg)).data;
    }
  }

  static async deleteTravel(id) {
    return (await http.delete(`api/travels/${id}`)).data;
  }
}
export { TravelServices };
export default TravelServices;
