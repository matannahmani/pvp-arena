// import firebase from '../../../lib/firebase';

// export default (req, res) => {
//   firebase
//     .collection('cities')
//     .doc(req.query.name)
//     .get()
//     .then((doc) => {
//       res.json(doc.data());
//     })
//     .catch((error) => {
//       res.json({ error });
//     });
// };

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
  } else {
    // Handle any other HTTP method
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
  }
}