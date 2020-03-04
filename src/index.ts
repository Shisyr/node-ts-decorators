import Application from './application';

const port = process.env.PORT || 3005;
const application = new Application();
application.start(port);


