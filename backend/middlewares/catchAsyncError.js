export default (controllerFunction) => (req, res, next) => 
    Promise.resolve(controllerFunction(req, res, next)).catch(next);

// exporting a function containing our controller func the default function has another 
// func containing req, res and next this func returns a promise 
// using promise.resolve invoke our controllerFunction with req, res, next 
// in that if there is any error this controller func catch that error and pass that to
// next middleware that will display the error message to the user