# NHL App - Season 2022-2023

This is an NHL (National Hockey League) application that provides information about the games and results of the 2022-2023 season. Users can search for games by team and view all the games played by a specific team. The app also includes detailed game statistics, including Expected Goals (xG) and videos of xG goals.

## Features

- View season 2022-2023 games and results
- Search for games by team
- View all games played by a specific team
- Detailed game statistics, including xG
- Videos of xG goals

## Technologies Used

- Frontend: Svelte
- Backend: Strapi (headless CMS)
- Xgs calculations is in this poroject https://github.com/karia19/nhl_xgs
- Machine Learning Algorithm: GradientBoostingClassifier

## xG Calculation

The xG (Expected Goals) calculation in this app is performed using a GradientBoostingClassifier machine learning algorithm. The classifier has been trained using five seasons of games data. The variables used for training the model are as follows:

- Distance
- Angle
- Last Event Number
- Last Distance
- Shot Number
- Last Shot
- Time Difference

These variables contribute to predicting the expected goal probability based on historical data.

## Setup and Installation

1. Clone the repository.
2. Install the necessary dependencies for the frontend.
3. Set up the Strapi backend and configure the necessary models and endpoints.
4. Ensure that Python is installed on your system.
5. Install the required Python libraries for xG calculations.
6. Configure the necessary connections between the frontend, backend (Strapi), and Python scripts.
7. Run the application locally.

Please refer to the individual documentation for detailed instructions on setting up the frontend, backend, and xG calculations.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Contributing

Contributions to the NHL App are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request to this repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


