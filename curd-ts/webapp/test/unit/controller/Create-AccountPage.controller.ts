/*global QUnit*/
import Controller from "curdts/controller/Create-Account.controller";

QUnit.module("Create-Account Controller");

QUnit.test("I should test the Create-Account controller", function (assert: Assert) {
	const oAppController = new Controller("Create-Account");
	oAppController.onInit();
	assert.ok(oAppController);
});