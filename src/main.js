// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  // const client = new Client()
  //    .setEndpoint('https://cloud.appwrite.io/v1')
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(process.env.APPWRITE_API_KEY);

  // The `req` object contains the request data
  if (req.method === 'POST') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    log(req.body)
    log("-----")
    log(req.bodyRaw)
    log("-----")
    log(req.bodyText)
    log("-----")
    log(req.bodyJson)
    log("-----")
    log(req.bodyBinary)
    log("-----")

    log(res.send)
    log(res.text)
    log(res.binary)
    log(res.json)
    log(res.empty)
    log(res.redirect)
    return res.send('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
