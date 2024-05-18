import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Rocket = async () => {

    const launches = await getData();
    const launch_number = await getHash();

    const launch = launches.find(launch => launch.id === launch_number);
    const view = 
    `
        <div class="rocket-container">
           <img src='${launch.links.patch.small}'>
           <div>
                <h3> Fallas: </h3>
                ${launch.failures.length === 0? '<p>Ninguna</p>' : launch.failures.map(failure => 
                `
                    <p> - ${failure.reason}</p>
                `    
                ).join('')}
            </div>
              
            <div>
                <h3> Detalles: </h3>
                ${launch.details ? launch.details : '<p>Sin detalles</p>'}
            </div>
            
            <div>
                <h3> Nº vuelo: </h3>
                <p>${launch.flight_number}</p>
            </div>

            <div>
                <h3> Hora: </h3>
                <p>${launch.date_utc}</p>
            </div>
        </div
    `;
    return view;
}

export default Rocket;