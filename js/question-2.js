const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const container = document.querySelector(".container");

async function Gamefacts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const games = results.results;

        container.innerHTML = "";

        for(let i = 0; i < games.length; i++) {

                if(i === 8) {
                    break;
                }

            container.innerHTML +=      
            
            `<div>
                <h2>${games[i].name}</h2>
                <p>Rating: ${games[i].rating}</p>
                <p>Number of Tags: ${games[i].tags.length}</p>
            </div>`;
        }

    } catch (error) {
        console.log("error occured", error);
        container.innerHTML = "Not able to load, error occured!";
    }
    finally {
        console.log("finaly");
    }
  }
  
  Gamefacts();

// } catch (error) {
//     console.log(error);
//     console.log("an error occured! ohno!");
//     resultsContainer.innerHTML = displayError(
//       "List of Games not found! An error occurred when calling the API"
//     );