import getData from '../utils/getData';


const Home = async () => {

    const launches = await getData();
    const view = `
        <div class="home-launches-container">
            ${launches.map(launch => 
            `   
                <a href="#/${launch.id}/">
                <article class="home_launches-launch-item">              
                    <h2>${launch.name}</h2>                   
                    <img src="${launch.links.patch.small}" alt="">
                </article>
                </a>
            `).join('') }
        </div
    `;
    return view;
}

export default Home;