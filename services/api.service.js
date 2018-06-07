
"use strict";

const _ = require("lodash");
const ApiGateway = require("moleculer-web");
const { UnAuthorizedError } = ApiGateway.Errors;

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	
	settings: {
		port: process.env.PORT || 3000,
		
		routes: [{
			path: "/api",
			
			authorization: true,
			
			aliases: {
				"GET /test": "api.test",
			},
			
			// Disable to call not-mapped actions
			mappingPolicy: "restrict",
			
			// Set CORS headers
			cors: true,
			
			// Parse body content
			bodyParsers: {
				json: {
					strict: false
				},
				urlencoded: {
					extended: false
				}
			}
		}],
		
		assets: {
			folder: "./public"
		},
	},
	
	actions: {
		test(ctx) {
			return 'for testing purpose. both docker and node work'
		}
	},
	
	created() {
		// Pointer to the original function
		//this._sendError = ApiGateway.methods.sendError.bind(this);
	}
	
	
};