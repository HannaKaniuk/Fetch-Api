const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    import('node-fetch')
        .then(({ default: fetch }) => {
            return fetch('https://jsonplaceholder.typicode.com/posts/1');
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({error});
        });
});


// *******************************************************************

// app.get('/', async (req, res) => {
//   try {
//     const { default: fetch } = await import('node-fetch');
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'PUT',
//       body: JSON.stringify({
//         id: 1,
//         title: 'Fetch Api',
//         body: 'test',
//         userId: 1,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);
//     res.json(json);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Error');
//   }
// });

app.listen(port, () => console.log(`http://localhost:${port}`));
