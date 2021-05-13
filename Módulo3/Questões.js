// Funão delay aciona o .then após 1s
/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();  */

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();


/* import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123'); */


import axios from 'axios';
//1.2
const getUserFromGithub = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usúario não existe');
    }
}
getUserFromGithub('diego3g');


/* import axios from 'axios';
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv'); */


import axios from 'axios';
//1.3
class Github {
    static async getRepositories(repositorio) {
        try {
            const response = await axios.get(`https:/api.github.com/repos/${repositorio}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe')
        }
    }
}
Github.getRepositories('rocketseat/dslkvmskv');


/* import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');  */


import axios from 'axios';
//1.4
const buscaUsuario = async buscUsuario => {
    try {
        const responseUsuario = await axios.get(`https://api.github.com/users/${buscUsuario}`);
        console.log(responseUsuario.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g')
buscaUsuario('diego3g124123'); 

