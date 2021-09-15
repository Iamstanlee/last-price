const fetch = require("node-fetch");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const messaging = admin.messaging();
const fieldValue = admin.firestore.FieldValue;

const sendHttpRequest = async (method, endpoint, data, headers) => {
	headers["Content-Type"] = "application/json";
	try {
		if (method === "GET" || method === "DELETE") {
			const response = await fetch(`${endpoint}`, {
				method: method,
				headers: headers,
			});
			return await response.json();
		}
		const response = await fetch(`${endpoint}`, {
			method: method,
			headers: headers,
			body: JSON.stringify(data),
		});
		return await response.json();
	} catch (error) {
		return { status: false, error: error.toString() };
	}
};

const get = async (endpoint, headers) => await sendHttpRequest("GET", endpoint, null, headers);
const post = async (endpoint, data, headers) =>
	await sendHttpRequest("POST", endpoint, data, headers);

const throwError = (err, code) => {
	throw new functions.https.HttpsError(code || "internal", err.message || err.toString());
};

module.exports = { get, post, db, messaging, fieldValue, throwError };
