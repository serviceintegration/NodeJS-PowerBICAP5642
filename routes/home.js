router.get('/', (req, res) => {
   res.sendFile('index.html', {
     root: './views'
   });
});