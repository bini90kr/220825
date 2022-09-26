const functions = require("firebase-functions");

let admin = require("firebase-admin");

let serviceAccount = require("./test0824data-firebase-adminsdk-52vg7-1987ab08bc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test0824data-default-rtdb.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
// node.js 백엔드 언어

exports.helloWorld = functions.https.onRequest((request, response) => {
  db.ref("msgs").on("value",(snapshot)=>{
    response.send(snapshot.val());
  });

});

exports.ceocamp = functions.https.onRequest((request, response) => {
  let bini = {
    name : "정수빈",
    age : 33,
    height : 168
  }
  response.send(bini);
});
