const firebaseConfig = {
  type: "service_account",
  project_id: "employeeagreement-d8851",
  private_key_id: "061315a714a82c45514563936a70faa4b16861c5",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYHjsmFymoSDim\ngbHbPKOBRwSpKWogg9mHi5ScI+kBtBF3cgs7nnKvl9zfNQO+tHR19TCwp0j/afW2\noBuvT5xQg+vQX+tNnuphlbdSXE3KZvnFfIUI7DsRkFfIkcqCJOZKGOd2yRNTQMYf\nCqm5aTpEK1+yUUwb0lZ9dyXN7/okW10+NnsbKRb3QLdFzcz/nZO/nQJd5KzVaSRK\nRveHjeDbNqyPn8IR4MIwMn/0TCf2UMbtRf5syIhbZ7Z3aumgFLHPx+8oVcFvBLrR\n13WO+YGTBFi9m1WTyr43gbjkgOxg0qkw2nuqgzdPx/X8is/CvWhwT02BHbI7pM9L\nB01soDDDAgMBAAECggEABIL1+OlSVhx/PQX9tO6reqwPIfbm3P42GZQ+GRL2YCgS\n5R4Fx3hCbGoPDjWndRchhxrcvZ3K2b6/fKmxN8ykAHddeEuMn7Bjs/W7pyrYMzEh\n0rJQkbongayM6m2fK4IdnQ8RzZzlDUSF29C5+jy0PFYnABOyAe3oWcY9FxCsTiyl\nqHVzfFSedyY7MUNHjZgJOpSFaCvxfg+R2U//bDxK0DjI70FMUsyJzCSUhSg65J/g\n0r0JvpmQfnnFpzordJlpOwbEKhWJ9tyGeL847f5WAVbu9dl8ZbdI8gR61Tl6FaLz\n1QgHDcraSf+Lxo/N2ScgR6JWYWfsYt4c0IoImVvnaQKBgQDtNcOErVYcYN0n8zqC\nV1sYbR31oZdWzLtDgtFtni/aWeDrqbur0YJU977jwMa5nRM8AVdvhYIQK8I2hJNd\nX7h6Na5EszknLfZfN9irofAjSx1S2FFTWpGsESiSLHA4MxINNZADfhSXxgGf2tJt\nLOEwdhXf8UVEKJ+56Kvkvv/O+QKBgQDpPMHSa7P77vXD4egGrX1SD/qsQRG6yhON\nADL+3hXleeOwlRk2xTSyDbJAAhFfP3t+9c2bXxL+h6SrbM/OSjsDjSzeDRJYW0pn\nXiyt0VYlD8kV4nEmQ4B/m6gqOLzeAAfqIq8dvEAWXWh5VUOEe8iXS2XD4tN7P2kQ\ne8iCXMTgmwKBgC4UYp3UekTbADsxga0uQRD2qXo84MRI0xvjPsG3l/4ntYyyFTXk\nZhgRZHCj0zbdb44ZiJ2uZryzc2/ZwzLBVHnREcBgvHqC8DhBBgMZWyfQAKtGQE4b\n6u5tCt+SaF5SdXBBdm9nP6LYIRqnjHcO39PlLIyrNtRtu9GGhFXUUKcpAoGAY56n\nypBmF71BC6F50SBY3qwkjV5djEKzhw4GugVxpMojDlEgq9wfXc2rzNsVQHGE9f1X\nDH3XRw/4rZ+UQrBB9IpgF5fNth+H8A6xVqyK9tl/MfG+EnHSeK6rbR0+zjOFLeQS\nl8jINsU+0lQwum2Eh9qUZM6FNacn4Pp98fBdxvECgYEAqn0oWt0DXYKHe5LdqvaQ\nYyJ9X0O9sBxdgTMnM4L4cjo1xcedtPrZFJG7F0wyxZpIpzOnv3+0xILodmcZmswa\n9qzCreqmv5AFFSaStY9ZxeNagaVAGjokJ56TURcR+yW5o3StNEh4HoE3d6rVYMQJ\nLGpU8wt4/Sw9Mxhdr6WWUn4=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-cdj6e@employeeagreement-d8851.iam.gserviceaccount.com",
  client_id: "107836153864775505245",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cdj6e%40employeeagreement-d8851.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const firebaseAdmin = require("firebase-admin");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseConfig),
});

const db = firebaseAdmin.firestore();
module.exports = { firebaseAdmin, db };
