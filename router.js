const router = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    }
  }
];

module.exports = router;
